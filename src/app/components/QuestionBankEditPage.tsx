import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '../context/AppContext';
import {
  QuestionTemplate,
  InherentRisk,
  TEMPLATE_OPTIONS,
  findQuestionRow,
  getQuestionBankByTemplate,
} from '../data/questionBankData';

const RISK_OPTIONS: { value: InherentRisk; label: string }[] = [
  { value: 'high', label: '高風險' },
  { value: 'medium', label: '中風險' },
  { value: 'low', label: '低風險' },
  { value: 'none', label: '無' },
];

function FieldLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#2e2e38] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  className = 'w-full',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[8px] items-start shrink-0 min-w-0 ${className}`}>
      {label ? <FieldLabel text={label} /> : null}
      <div className="bg-white relative rounded-[8px] h-[48px] w-full overflow-hidden">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block h-[48px] w-full bg-white border-none outline-none px-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px] placeholder:text-[#747480]"
        />
        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function AreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
      <FieldLabel text={label} />
      <div className="bg-white relative rounded-[8px] w-full">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full bg-transparent border-none outline-none p-[12px] resize-y min-h-[96px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px] placeholder:text-[#747480]"
        />
        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  className = 'w-full',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[8px] items-start shrink-0 min-w-0 ${className}`}>
      <FieldLabel text={label} />
      <div className="bg-white relative rounded-[8px] h-[48px] w-full overflow-hidden">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block h-[48px] w-full bg-white border-none outline-none px-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function SectionTitle({ text }: { text: string }) {
  return (
    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
      {text}
    </p>
  );
}

const NEW_CATEGORY = '__new__';

type ClassFieldKey = 'riskCategory' | 'process' | 'department' | 'responsibleUnit' | 'internalRule';

interface FormState {
  riskCategory: string;
  process: string;
  department: string;
  responsibleUnit: string;
  internalRule: string;
  regulation: string;
  followProcedure: string;
  assessmentProcedure: string;
  processCategory: string;
  checkBasis: string;
  checkProcedure: string;
  riskEvent: string;
  riskEventCategory: string;
  controlDesc: string;
  controlCategory: string;
  inherentRisk: InherentRisk;
  controlLevel: InherentRisk;
  residualRisk: InherentRisk;
}

function emptyState(): FormState {
  return {
    riskCategory: '',
    process: '',
    department: '',
    responsibleUnit: '',
    internalRule: '',
    regulation: '',
    followProcedure: '',
    assessmentProcedure: '',
    processCategory: '',
    checkBasis: '',
    checkProcedure: '',
    riskEvent: '',
    riskEventCategory: '',
    controlDesc: '',
    controlCategory: '',
    inherentRisk: 'medium',
    controlLevel: 'medium',
    residualRisk: 'low',
  };
}

function classOptions(template: QuestionTemplate, key: ClassFieldKey): string[] {
  const seen = new Set<string>();
  return getQuestionBankByTemplate(template)
    .map((category) => category[key])
    .filter((value) => {
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
}

function buildState(template: QuestionTemplate, rowId: string, isNew: boolean): FormState {
  if (isNew) return emptyState();

  const found = findQuestionRow(template, rowId);
  const fallback = getQuestionBankByTemplate(template)[0];
  const category = found?.category || fallback;
  const row = found?.row || fallback.rows[0];

  return {
    riskCategory: category.riskCategory,
    process: category.process,
    department: category.department,
    responsibleUnit: category.responsibleUnit,
    internalRule: category.internalRule,
    regulation: row.externalRule,
    followProcedure: row.controlMeasure,
    assessmentProcedure: row.question,
    processCategory: category.riskCategory,
    checkBasis: category.internalRule || row.externalRule,
    checkProcedure: row.question,
    riskEvent: row.operationalRisk,
    riskEventCategory: category.riskCategory,
    controlDesc: row.controlMeasure,
    controlCategory: '內部流程',
    inherentRisk: row.inherentRisk,
    controlLevel: 'medium',
    residualRisk: row.inherentRisk === 'high' ? 'medium' : 'low',
  };
}

export default function QuestionBankEditPage() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();

  const initialTemplate = ((searchParams.get('template') as QuestionTemplate) || 'compliance');
  const rowId = searchParams.get('id') || '';
  const isNew = searchParams.get('mode') === 'new' || !rowId;

  const [template, setTemplate] = useState<QuestionTemplate>(initialTemplate);
  const [form, setForm] = useState<FormState>(() => buildState(initialTemplate, rowId, isNew));
  const [saved, setSaved] = useState(false);
  const [customClass, setCustomClass] = useState<Partial<Record<ClassFieldKey, boolean>>>({});

  useEffect(() => {
    setTemplate(initialTemplate);
    setSaved(false);
    setCustomClass({});
    setForm(buildState(initialTemplate, rowId, isNew));
  }, [initialTemplate, rowId, isNew]);

  const formTitle = useMemo(
    () => (template === 'compliance' ? '法令遵循定期評估表' : '內部控制制度自行查核表'),
    [template]
  );

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const switchTemplate = (next: QuestionTemplate) => {
    setTemplate(next);
    setSaved(false);
    setCustomClass({});
    setForm(buildState(next, next === initialTemplate && !isNew ? rowId : '', isNew));
  };

  const setClassField = (key: ClassFieldKey, value: string) => {
    setSaved(false);
    if (value === NEW_CATEGORY) {
      setCustomClass((prev) => ({ ...prev, [key]: true }));
      setForm((prev) => ({ ...prev, [key]: '' }));
      return;
    }

    setCustomClass((prev) => ({ ...prev, [key]: false }));
    const matched = getQuestionBankByTemplate(template).filter((category) => category[key] === value);
    if (matched.length === 1) {
      const category = matched[0];
      setCustomClass({});
      setForm((prev) => ({
        ...prev,
        riskCategory: category.riskCategory,
        process: category.process,
        department: category.department,
        responsibleUnit: category.responsibleUnit,
        internalRule: category.internalRule,
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const classSelect = (key: ClassFieldKey, label: string, className = 'flex-1') => {
    const options = classOptions(template, key);
    const isCustom = Boolean(customClass[key]);
    return (
      <div className={`flex flex-col gap-[8px] items-start shrink-0 min-w-0 ${className}`}>
        <SelectField
          className="w-full"
          label={label}
          value={isCustom ? NEW_CATEGORY : form[key]}
          onChange={(value) => setClassField(key, value)}
          options={[
            { value: '', label: '請選擇' },
            ...options.map((value) => ({ value, label: value })),
            { value: NEW_CATEGORY, label: '新增分類' },
          ]}
        />
        {isCustom ? (
          <TextField
            label=""
            value={form[key]}
            onChange={(value) => setField(key, value)}
            placeholder={`請輸入新的${label}`}
          />
        ) : null}
      </div>
    );
  };

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="question-bank" />
      <div className="pt-[120px] w-full">
        <div className="bg-[#ececf3] flex flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full min-h-[calc(100vh-120px)]">
          <div className="flex flex-col gap-[32px] items-center px-[32px] w-[1440px]">
            <div className="flex gap-[8px] h-[24px] items-center w-full">
              <button type="button" onClick={() => onNavigate('home')} className="bg-transparent border-none cursor-pointer p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px]">首頁</p>
              </button>
              <p className="text-[#4A5565] text-[16px]">/</p>
              <button type="button" onClick={() => onNavigate('question-bank')} className="bg-transparent border-none cursor-pointer p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px]">題庫維護</p>
              </button>
              <p className="text-[#4A5565] text-[16px]">/</p>
              <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px]">{isNew ? '新增題目' : '編輯問卷'}</p>
            </div>

            <div className="flex flex-col items-start w-[856px]">
              <div className="bg-[#747480] rounded-tl-[8px] rounded-tr-[8px] w-full">
                <div className="flex flex-col gap-[16px] items-start p-[24px]">
                  <div className="flex items-center justify-between w-full gap-[16px]">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[22px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
                      {formTitle}
                    </p>
                    <div className="flex gap-[12px] shrink-0">
                      <button
                        type="button"
                        onClick={() => onNavigate('question-bank')}
                        className="bg-white/15 border-none rounded-[4px] px-[16px] py-[10px] cursor-pointer"
                      >
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-white text-[15px]" style={{ fontVariationSettings: "'wght' 700" }}>取消</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSaved(true)}
                        className="bg-[#ffe600] border-none rounded-[4px] px-[16px] py-[10px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                      >
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[15px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          {saved ? '已儲存' : '儲存'}
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-[8px] flex-wrap">
                    {TEMPLATE_OPTIONS.map((option) => {
                      const active = template === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => switchTemplate(option.value)}
                          className={`border-none cursor-pointer rounded-[4px] px-[12px] py-[8px] ${active ? 'bg-[#ffe600]' : 'bg-white/15'}`}
                        >
                          <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${active ? 'text-[#1a1a24]' : 'text-white'}`} style={{ fontWeight: 700 }}>
                            {option.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col gap-[32px] items-start p-[24px] relative rounded-bl-[8px] rounded-br-[8px] w-full">
                <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />

                <div className="flex flex-col gap-[16px] items-start w-full">
                  <SectionTitle text="題目分類" />
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px]">
                    選擇既有分類後，題目會與同一組收在一起。若要建立新的一組，請選「新增分類」。
                  </p>
                  <div className="flex gap-[24px] items-start w-full">
                    {classSelect('riskCategory', template === 'compliance' ? '法遵風險' : '流程類別')}
                    {classSelect('process', template === 'compliance' ? '業務流程' : '業務項目')}
                  </div>
                  <div className="flex gap-[24px] items-start w-full">
                    {classSelect('department', '部門')}
                    {classSelect('responsibleUnit', '負責單位')}
                  </div>
                  {classSelect('internalRule', '內部規章', 'w-full')}
                </div>

                {template === 'compliance' ? (
                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <SectionTitle text="法遵自評／法遵自查" />
                    <AreaField label="應遵循之法令規章" value={form.regulation} onChange={(v) => setField('regulation', v)} placeholder="請輸入應遵循之法令規章" />
                    <AreaField label="遵循程序" value={form.followProcedure} onChange={(v) => setField('followProcedure', v)} placeholder="對應原查核項目內規要求；相同控制措施先調和文字，不同則分別列題" />
                    <AreaField label="自行評估程序" value={form.assessmentProcedure} onChange={(v) => setField('assessmentProcedure', v)} placeholder="對應原查核說明暨查核方式，取兩者聯集" />
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-[16px] items-start w-full">
                      <SectionTitle text="內控自查" />
                      <AreaField label="自查依據" value={form.checkBasis} onChange={(v) => setField('checkBasis', v)} placeholder="對應原自行查核依據" />
                      <AreaField label="自行查核程序" value={form.checkProcedure} onChange={(v) => setField('checkProcedure', v)} placeholder="對應原自行查核項目" />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start w-full">
                      <SectionTitle text="RCSA" />
                      <AreaField label="作業風險事件描述" value={form.riskEvent} onChange={(v) => setField('riskEvent', v)} placeholder="請輸入作業風險事件描述" />
                      <div className="flex gap-[24px] items-start w-full">
                        <TextField className="flex-1" label="作業風險事件類別" value={form.riskEventCategory} onChange={(v) => setField('riskEventCategory', v)} placeholder="請輸入事件類別" />
                        <TextField className="flex-1" label="控制類別" value={form.controlCategory} onChange={(v) => setField('controlCategory', v)} placeholder="請輸入控制類別" />
                      </div>
                      <AreaField label="控制描述" value={form.controlDesc} onChange={(v) => setField('controlDesc', v)} placeholder="請輸入控制描述" />
                      <div className="flex gap-[24px] items-start w-full">
                        <SelectField className="flex-1" label="固有風險等級" value={form.inherentRisk} onChange={(v) => setField('inherentRisk', v as InherentRisk)} options={RISK_OPTIONS} />
                        <SelectField className="flex-1" label="控制等級" value={form.controlLevel} onChange={(v) => setField('controlLevel', v as InherentRisk)} options={RISK_OPTIONS} />
                        <SelectField className="flex-1" label="剩餘風險" value={form.residualRisk} onChange={(v) => setField('residualRisk', v as InherentRisk)} options={RISK_OPTIONS} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
