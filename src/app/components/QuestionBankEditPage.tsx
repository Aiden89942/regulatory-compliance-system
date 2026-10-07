import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '../context/AppContext';
import {
  QuestionTemplate,
  InherentRisk,
  TEMPLATE_OPTIONS,
  getDefaultAnswerOptions,
  findQuestionRow,
  getAnswerOptions,
  getQuestionBankByTemplate,
  getTemplateLabel,
  saveQuestionBankEntry,
  setControlAnswerOptions,
} from '../data/questionBankData';
import {
  ALL_DEPARTMENTS_LABEL,
  ASSESSMENT_DEPARTMENTS,
  RESPONSIBLE_UNITS,
  formatSelfAssessmentUnits,
  matchResponsibleUnit,
  matchSelfAssessmentUnits,
} from '../data/questionnaireReviewStore';

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
  selfAssessmentUnits: string[];
  internalRule: string;
  regulation: string;
  title: string;
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
  checkOptions: string[];
}

function emptyState(template: QuestionTemplate): FormState {
  return {
    riskCategory: '',
    process: '',
    department: '',
    responsibleUnit: '',
    selfAssessmentUnits: [],
    internalRule: '',
    regulation: '',
    title: '',
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
    checkOptions: getDefaultAnswerOptions(template),
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
  if (isNew) return emptyState(template);

  const found = findQuestionRow(template, rowId);
  const fallback = getQuestionBankByTemplate(template)[0];
  const category = found?.category || fallback;
  const row = found?.row || fallback.rows[0];
  return {
    riskCategory: category.riskCategory,
    process: category.process,
    department: category.department,
    responsibleUnit: matchResponsibleUnit(category.responsibleUnit),
    selfAssessmentUnits: matchSelfAssessmentUnits(category.department),
    internalRule: category.internalRule,
    regulation: row.externalRule,
    title: row.title,
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
    checkOptions: getAnswerOptions(template, row.id),
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
  const [savedRowId, setSavedRowId] = useState(isNew ? '' : rowId);
  const [customClass, setCustomClass] = useState<Partial<Record<ClassFieldKey, boolean>>>({});
  const [selfAssessmentOpen, setSelfAssessmentOpen] = useState(false);
  const selfAssessmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTemplate(initialTemplate);
    setSaved(false);
    setSavedRowId(isNew ? '' : rowId);
    setCustomClass({});
    setSelfAssessmentOpen(false);
    setForm(buildState(initialTemplate, rowId, isNew));
  }, [initialTemplate, rowId, isNew]);

  useEffect(() => {
    if (!selfAssessmentOpen) return;
    const close = (event: MouseEvent) => {
      if (!selfAssessmentRef.current?.contains(event.target as Node)) setSelfAssessmentOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [selfAssessmentOpen]);

  const formTitle = useMemo(
    () => (template === 'compliance' ? '法令遵循自行評估表' : '內部控制制度自行查核表'),
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
        responsibleUnit: matchResponsibleUnit(category.responsibleUnit),
        selfAssessmentUnits: matchSelfAssessmentUnits(category.department),
        internalRule: category.internalRule,
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const setResponsibleUnit = (value: string) => {
    setSaved(false);
    setForm((prev) => ({
      ...prev,
      responsibleUnit: value,
    }));
  };

  const toggleSelfAssessmentUnit = (unit: string) => {
    if (!form.responsibleUnit) return;
    setSaved(false);
    setForm((prev) => {
      const allSelected = ASSESSMENT_DEPARTMENTS.every((dept) => prev.selfAssessmentUnits.includes(dept));
      if (unit === ALL_DEPARTMENTS_LABEL) {
        return { ...prev, selfAssessmentUnits: allSelected ? [] : [...ASSESSMENT_DEPARTMENTS] };
      }
      const exists = prev.selfAssessmentUnits.includes(unit);
      const next = exists
        ? prev.selfAssessmentUnits.filter((item) => item !== unit)
        : [...prev.selfAssessmentUnits, unit];
      return { ...prev, selfAssessmentUnits: next };
    });
  };

  const writeCheckOptions = (options: string[]) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, checkOptions: options }));
    if (rowId) setControlAnswerOptions(rowId, options, template);
  };

  const updateCheckOption = (index: number, value: string) => {
    writeCheckOptions(form.checkOptions.map((option, itemIndex) => (itemIndex === index ? value : option)));
  };

  const removeCheckOption = (index: number) => {
    if (form.checkOptions.length <= 1) return;
    writeCheckOptions(form.checkOptions.filter((_, itemIndex) => itemIndex !== index));
  };

  const addCheckOption = () => {
    writeCheckOptions([...form.checkOptions, '']);
  };

  const answerOptionsEditor = (
        <div className="flex flex-col gap-[8px] items-start w-full">
          <FieldLabel text={template === 'compliance' ? '自行評估結果（作答選項）' : '作答選項'} />
          {form.checkOptions.map((option, index) => (
            <div key={index} className="flex gap-[8px] items-center w-full">
              <div className="bg-white relative rounded-[8px] h-[48px] flex-1 min-w-0">
                <input
                  value={option}
                  onChange={(event) => updateCheckOption(index, event.target.value)}
                  className="block h-[48px] w-full bg-transparent border-none outline-none px-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]"
                />
                <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <button
                type="button"
                onClick={() => removeCheckOption(index)}
                disabled={form.checkOptions.length <= 1}
                className="bg-[#f6f6fa] border-none rounded-[4px] px-[12px] h-[48px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
              >
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#1a1a24]">移除</p>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCheckOption}
            className="bg-transparent border-none cursor-pointer p-0"
          >
            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#1a1a24]">新增選項</p>
          </button>
        </div>
  );

  const saveQuestion = () => {
    const existingId = savedRowId;
    const existing = existingId ? findQuestionRow(template, existingId) : undefined;
    const department = form.selfAssessmentUnits.length
      ? formatSelfAssessmentUnits(form.selfAssessmentUnits)
      : (existing?.category.department || form.department);
    const externalRule = template === 'compliance'
      ? form.regulation
      : (existing?.row.externalRule || form.checkBasis);
    const id = saveQuestionBankEntry({
      template,
      rowId: existingId || undefined,
      riskCategory: template === 'internal-control' ? (form.riskCategory || form.processCategory) : (form.riskCategory || form.process),
      process: form.process,
      department,
      responsibleUnit: form.responsibleUnit || existing?.category.responsibleUnit || '',
      internalRule: form.internalRule,
      externalRule,
      operationalRisk: template === 'compliance' ? (existing?.row.operationalRisk || '') : form.riskEvent,
      controlMeasure: template === 'compliance' ? form.followProcedure : form.controlDesc,
      title: form.title,
      question: template === 'compliance' ? (form.assessmentProcedure || existing?.row.question || '') : form.checkProcedure,
      inherentRisk: template === 'compliance' ? (existing?.row.inherentRisk || 'none') : form.inherentRisk,
      frequency: existing?.row.frequency || '',
      checkOptions: form.checkOptions,
    });
    setSavedRowId(id);
    setSaved(true);
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
          <div className="flex flex-col gap-[32px] items-center px-[32px] w-full max-w-[1440px]">
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
                        onClick={saveQuestion}
                        className="bg-[#ffe600] border-none rounded-[4px] px-[16px] py-[10px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                      >
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[15px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          {saved ? '已儲存' : '儲存'}
                        </p>
                      </button>
                    </div>
                  </div>
                  {isNew ? (
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
                  ) : (
                    <div className="bg-[#ffe600] rounded-[4px] px-[12px] py-[8px]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] text-[#1a1a24]" style={{ fontWeight: 700 }}>
                        {getTemplateLabel(template)}
                      </p>
                    </div>
                  )}
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
                    {template === 'internal-control' ? classSelect('riskCategory', '流程類別') : null}
                    {classSelect('process', '業務項目', template === 'compliance' ? 'w-full' : 'flex-1')}
                  </div>
                  <div className="flex gap-[24px] items-start w-full">
                    <div className="flex flex-col gap-[8px] items-start shrink-0 min-w-0 flex-1">
                      <SelectField
                        className="w-full"
                        label="負責單位"
                        value={form.responsibleUnit}
                        onChange={setResponsibleUnit}
                        options={[
                          { value: '', label: '請選擇' },
                          ...RESPONSIBLE_UNITS.map((unit) => ({ value: unit, label: unit })),
                        ]}
                      />
                    </div>
                    <div ref={selfAssessmentRef} className={`flex flex-col gap-[8px] items-start shrink-0 min-w-0 flex-1 relative ${selfAssessmentOpen ? 'z-20' : ''} ${form.responsibleUnit ? '' : 'opacity-50'}`}>
                      <FieldLabel text="自評單位" />
                      <button
                        type="button"
                        disabled={!form.responsibleUnit}
                        onClick={() => setSelfAssessmentOpen((open) => !open)}
                        className="bg-white relative rounded-[8px] h-[48px] w-full overflow-hidden border-none cursor-pointer disabled:cursor-not-allowed px-[12px] text-left"
                      >
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] truncate ${form.selfAssessmentUnits.length ? 'text-[#2e2e38]' : 'text-[#747480]'}`}>
                          {form.responsibleUnit
                            ? (form.selfAssessmentUnits.length ? formatSelfAssessmentUnits(form.selfAssessmentUnits) : '請選擇')
                            : '請先選擇負責單位'}
                        </p>
                        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </button>
                      {selfAssessmentOpen && form.responsibleUnit ? (
                        <div className="absolute top-[76px] left-0 z-20 bg-white rounded-[8px] w-full shadow-lg">
                          <div className="flex flex-col gap-[12px] px-[12px] py-[14px] max-h-[280px] overflow-y-auto">
                            <label className="flex gap-[8px] items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-[18px] shrink-0"
                                checked={ASSESSMENT_DEPARTMENTS.every((dept) => form.selfAssessmentUnits.includes(dept))}
                                onChange={() => toggleSelfAssessmentUnit(ALL_DEPARTMENTS_LABEL)}
                              />
                              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">{ALL_DEPARTMENTS_LABEL}</p>
                            </label>
                            {ASSESSMENT_DEPARTMENTS.map((dept) => (
                              <label key={dept} className="flex gap-[8px] items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-[18px] shrink-0"
                                  checked={form.selfAssessmentUnits.includes(dept)}
                                  onChange={() => toggleSelfAssessmentUnit(dept)}
                                />
                                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">{dept}</p>
                              </label>
                            ))}
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {classSelect('internalRule', '內部規章', 'w-full')}
                </div>

                {template === 'compliance' ? (
                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <SectionTitle text="法遵自評／法遵自查" />
                    <TextField label="標題" value={form.title} onChange={(v) => setField('title', v)} placeholder="題庫列表與設計自評表顯示的短標題" />
                    <AreaField label="應遵循之法令規章" value={form.regulation} onChange={(v) => setField('regulation', v)} placeholder="請輸入應遵循之法令規章" />
                    <AreaField label="遵循程序" value={form.followProcedure} onChange={(v) => setField('followProcedure', v)} placeholder="對應原查核項目內規要求；相同控制措施先調和文字，不同則分別列題" />
                    {answerOptionsEditor}
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-[16px] items-start w-full">
                      <SectionTitle text="內控自查" />
                      <TextField label="標題" value={form.title} onChange={(v) => setField('title', v)} placeholder="題庫列表與設計自評表顯示的短標題" />
                      <AreaField label="自查依據" value={form.checkBasis} onChange={(v) => setField('checkBasis', v)} placeholder="對應原自行查核依據" />
                      <AreaField label="自行查核程序" value={form.checkProcedure} onChange={(v) => setField('checkProcedure', v)} placeholder="對應原自行查核項目" />
                      {answerOptionsEditor}
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
