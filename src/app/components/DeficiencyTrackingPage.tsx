import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '../context/AppContext';
import {
  findQuestionRow,
  getAnswerOptions,
  InherentRisk,
  QuestionBankCategory,
  QuestionBankRow,
  QuestionTemplate,
} from '../data/questionBankData';

interface FlaggedQuestion {
  questionId: string;
  comment: string;
  answer: string;
  evidence: string;
}

type DeficiencyStatus = '待回填' | '已回填';
const DEFICIENCY_TABS: DeficiencyStatus[] = ['待回填', '已回填'];

interface FlaggedQuestionnaire {
  id: string;
  status: DeficiencyStatus;
  template: QuestionTemplate;
  process: string;
  responsibleUnit: string;
  unit: string;
  questions: FlaggedQuestion[];
}

const RISK_LABEL: Record<InherentRisk, string> = {
  high: '高風險',
  medium: '中風險',
  low: '低風險',
  none: '無',
};

const FLAGGED_QUESTIONNAIRES: FlaggedQuestionnaire[] = [
  {
    id: 'def-comp-1',
    status: '待回填',
    template: 'compliance',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    unit: '授信管理部',
    questions: [
      {
        questionId: 'comp-1-1',
        comment: '查核單位覆核時，未見最近一期名單更新紀錄。',
        answer: '未符合',
        evidence: '',
      },
      {
        questionId: 'comp-1-2',
        comment: '抽查案件未留存迴避與職務代理紀錄。',
        answer: '未符合',
        evidence: '',
      },
    ],
  },
  {
    id: 'def-comp-2',
    status: '待回填',
    template: 'compliance',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 資訊部',
    unit: '營業部',
    questions: [
      {
        questionId: 'comp-2-1',
        comment: '部分開戶案件缺少雙證件核對紀錄。',
        answer: '未符合',
        evidence: '',
      },
    ],
  },
  {
    id: 'def-comp-3',
    status: '待回填',
    template: 'compliance',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 資訊部',
    unit: '資訊科技部',
    questions: [
      {
        questionId: 'comp-3-1',
        comment: '資訊資產清單未涵蓋核心系統與關鍵設備。',
        answer: '未符合',
        evidence: '',
      },
      {
        questionId: 'comp-3-3',
        comment: '未說明連線是否加密，也沒有替代傳輸路徑。',
        answer: '未符合',
        evidence: '',
      },
    ],
  },
  {
    id: 'def-ic-1',
    status: '待回填',
    template: 'internal-control',
    process: '內部查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    unit: '稽核處',
    questions: [
      {
        questionId: 'ic-1-2',
        comment: '前期缺失仍未結案，追蹤表未更新改善期限。',
        answer: '否',
        evidence: '',
      },
    ],
  },
  {
    id: 'def-ic-2',
    status: '待回填',
    template: 'internal-control',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    unit: '資訊部',
    questions: [
      {
        questionId: 'ic-2-1',
        comment: '本季權限覆核紀錄缺漏，離職人員帳號尚未停用。',
        answer: '否',
        evidence: '',
      },
    ],
  },
];

function HeaderCell({ text, align = 'left' }: { text: string; align?: 'left' | 'center' }) {
  return (
    <div className="bg-[#f6f6fa] h-[48px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className={`flex items-center p-[15px] h-full ${align === 'center' ? 'justify-center' : ''}`}>
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>{text}</p>
      </div>
    </div>
  );
}

function DataCell({ text }: { text: string }) {
  return (
    <div className="bg-white h-[63px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center px-[15px] py-[20px] h-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]">{text}</p>
      </div>
    </div>
  );
}

function DeficiencyQuestion({
  template,
  category,
  row,
  no,
  comment,
  answer,
  evidence,
  onChange,
}: {
  template: QuestionTemplate;
  category?: QuestionBankCategory;
  row: QuestionBankRow;
  no: number;
  comment: string;
  answer: string;
  evidence: string;
  onChange: (patch: Partial<FlaggedQuestion>) => void;
}) {
  const reference = template === 'compliance' ? row.externalRule : (category?.internalRule || row.externalRule);
  const referenceLabel = template === 'compliance' ? '應遵循之法令規章' : '自查依據';
  const title = row.title || (template === 'compliance' ? row.controlMeasure : row.question);
  const evidenceLabel = template === 'compliance' ? '佐證文件或說明' : '佐證文件及說明';

  return (
    <div className="flex flex-col gap-[10px] w-full pb-[8px] border-b border-[#ececf3] last:border-b-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] leading-[23px] text-[#1a1a24] whitespace-pre-wrap" style={{ fontWeight: 700 }}>
        {no}. {title}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
        {template === 'compliance' ? `遵循程序：${row.controlMeasure}` : `自行查核程序：${row.question}`}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
        {referenceLabel}：{reference}
      </p>
      {template === 'internal-control' ? (
        <>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
            作業風險事件描述：{row.operationalRisk}（{RISK_LABEL[row.inherentRisk]}）
          </p>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
            控制描述：{row.controlMeasure}
          </p>
        </>
      ) : null}
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#ec5242]">審核說明：{comment}</p>
      <div className="flex gap-[16px] items-center flex-wrap">
        {getAnswerOptions(template, row.id).map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => onChange({ answer: label })}
            className="flex gap-[6px] items-center bg-transparent border-none cursor-pointer p-0"
          >
            <svg viewBox="0 0 20 20" className="block size-[20px] shrink-0" aria-hidden="true">
              <circle cx="10" cy="10" r="9.5" fill="#fff" stroke={answer === label ? '#1a1a24' : '#c4c4cd'} strokeWidth="1" />
              {answer === label ? <circle cx="10" cy="10" r="4" fill="#1a1a24" /> : null}
            </svg>
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#2e2e38] text-[16px]">{label}</span>
          </button>
        ))}
      </div>
      <textarea
        value={evidence}
        onChange={(event) => onChange({ evidence: event.target.value })}
        placeholder={evidenceLabel}
        rows={3}
        className="w-full bg-[#f6f6fa] text-[#1a1a24] placeholder:text-[#99A1AF] border border-[#ececf3] rounded-[8px] px-[12px] py-[12px] outline-none font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] resize-y"
      />
    </div>
  );
}

function DeficiencyForm({
  item,
  onBack,
  onChange,
  onSubmit,
}: {
  item: FlaggedQuestionnaire;
  onBack: () => void;
  onChange: (questionId: string, patch: Partial<FlaggedQuestion>) => void;
  onSubmit: () => void;
}) {
  const rows = item.questions
    .map((question) => ({ question, found: findQuestionRow(item.template, question.questionId) }))
    .filter((entry): entry is { question: FlaggedQuestion; found: { category: QuestionBankCategory; row: QuestionBankRow } } => Boolean(entry.found));
  const internalRules = [...new Set(rows.map((entry) => entry.found.category.internalRule).filter(Boolean))];
  const formTitle = item.template === 'compliance' ? '法令遵循自行評估表' : '內部控制制度自行查核表';

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex justify-end gap-[8px] items-center">
        <button type="button" onClick={onBack} className="bg-white border border-[#e5e7eb] rounded-[4px] px-[16px] py-[8px] cursor-pointer">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#1a1a24]">返回列表</p>
        </button>
        {item.status === '待回填' ? (
          <button type="button" onClick={onSubmit} className="bg-[#ffe600] border-none rounded-[4px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ffd000]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#1a1a24]" style={{ fontWeight: 700 }}>再次送出</p>
          </button>
        ) : null}
      </div>
      <div className="w-full">
        <div className="bg-[#747480] rounded-tl-[8px] rounded-tr-[8px] w-full">
          <div className="flex items-center justify-between gap-[16px] p-[24px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[22px] text-white" style={{ fontWeight: 700 }}>{formTitle}</p>
            <p className="font-['EYInterstate:Regular',sans-serif] text-[14px] text-white shrink-0">共 {rows.length} 題</p>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-[24px] items-start p-[24px] rounded-bl-[8px] rounded-br-[8px] w-full">
          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">業務項目：{item.process}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">負責單位：{item.responsibleUnit}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">自評單位：{item.unit}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">內部規章：{internalRules.join('、') || '—'}</p>
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#1a1a24]" style={{ fontWeight: 700 }}>{item.process}</p>
            {rows.map((entry, index) => (
              <DeficiencyQuestion
                key={entry.question.questionId}
                template={item.template}
                category={entry.found.category}
                row={entry.found.row}
                no={index + 1}
                comment={entry.question.comment}
                answer={entry.question.answer}
                evidence={entry.question.evidence}
                onChange={(patch) => onChange(entry.question.questionId, patch)}
              />
            ))}
          </div>
          <div className="flex gap-[16px] w-full pt-[8px]">
            {['填寫人簽章', '部門主管簽章'].map((title) => (
              <div key={title} className="flex-1 bg-[#ececf3] rounded-[8px] p-[16px] flex flex-col items-center gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#4a5565]">{title}</p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#99a1af] h-[48px] flex items-center">[ 簽章區域 ]</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeficiencyTrackingPage() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();
  const [template, setTemplate] = useState<QuestionTemplate>('compliance');
  const [tab, setTab] = useState<DeficiencyStatus>('待回填');
  const [searchQuery, setSearchQuery] = useState('');
  const [questionnaires, setQuestionnaires] = useState(FLAGGED_QUESTIONNAIRES);
  const selectedId = searchParams.get('id') || '';
  const selected = questionnaires.find((item) => item.id === selectedId);

  const updateQuestion = (questionId: string, patch: Partial<FlaggedQuestion>) => {
    setQuestionnaires((current) => current.map((item) => {
      if (item.id !== selectedId) return item;
      return {
        ...item,
        questions: item.questions.map((entry) => (entry.questionId === questionId ? { ...entry, ...patch } : entry)),
      };
    }));
  };

  const resubmit = () => {
    if (!selected) return;
    setQuestionnaires((current) => current.map((item) => (item.id === selected.id ? { ...item, status: '已回填' } : item)));
    setTab('已回填');
    onNavigate('deficiency-tracking');
  };

  const visible = useMemo(() => {
    const keyword = searchQuery.trim();
    return questionnaires.filter((item) => item.status === tab && item.template === template).filter((item) => {
      if (!keyword) return true;
      return item.process.includes(keyword) || item.responsibleUnit.includes(keyword) || item.unit.includes(keyword);
    });
  }, [questionnaires, tab, template, searchQuery]);

  const tabItems = questionnaires.filter((item) => item.status === tab);

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="deficiency-tracking" />
      <div className="bg-[#ececf3] flex flex-1 flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full pt-[152px]">
        <div className="flex flex-col gap-[32px] items-start px-[32px] w-[1440px]">
          <div className="flex gap-[8px] h-[24px] items-center">
            <button type="button" onClick={() => onNavigate('home')} className="bg-transparent border-none cursor-pointer p-0">
              <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px]">首頁</p>
            </button>
            <p className="text-[#4A5565] text-[16px]">/</p>
            <button type="button" onClick={() => onNavigate('deficiency-tracking')} className="bg-transparent border-none cursor-pointer p-0">
              <p className={`font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[16px] ${selected ? 'text-[#747480]' : 'font-bold text-[#1a1a24]'}`}>缺失追蹤</p>
            </button>
            {selected ? (
              <>
                <p className="text-[#4A5565] text-[16px]">/</p>
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px]">{selected.process}</p>
              </>
            ) : null}
          </div>

          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[32px]" style={{ fontWeight: 700 }}>
            {selected ? (selected.template === 'compliance' ? '法令遵循自行評估表' : '內部控制制度自行查核表') : '缺失追蹤'}
          </p>

          {selected ? (
            <DeficiencyForm
              item={selected}
              onBack={() => onNavigate('deficiency-tracking')}
              onChange={updateQuestion}
              onSubmit={resubmit}
            />
          ) : (
            <div className="bg-white rounded-[8px] w-full overflow-clip">
              <div className="bg-[#f6f6fa] flex items-stretch w-full">
                {DEFICIENCY_TABS.map((name) => {
                  const active = tab === name;
                  return (
                    <button
                      key={name}
                      type="button"
                      className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] ${active ? 'bg-[#ffe600] py-[16px]' : 'bg-transparent py-[12px]'}`}
                      onClick={() => { setTab(name); setSearchQuery(''); }}
                    >
                      <p className={`text-[20px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"}`}>{name}</p>
                      <p className={`text-[24px] ${active ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[22px]"}`}>{questionnaires.filter((item) => item.status === name).length}</p>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-[12px] items-center px-[24px] py-[16px]">
                {([
                  ['compliance', '法令遵循自行評估'],
                  ['internal-control', '內部控制制度自行查核'],
                ] as const).map(([value, label]) => {
                  const active = template === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => { setTemplate(value); setSearchQuery(''); }}
                      className={`border-none cursor-pointer px-[16px] py-[8px] rounded-[33554400px] ${active ? 'bg-[#ffe600]' : 'bg-[#ececf3]'}`}
                    >
                      <p className={`text-[16px] whitespace-nowrap text-[#1a1a24] ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"}`}>
                        {label} ({tabItems.filter((item) => item.template === value).length})
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-[24px] items-center px-[32px] py-[16px]">
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="搜尋業務項目、負責單位或自評單位..."
                  className="bg-[#f6f6fa] border-none outline-none flex-1 rounded-[8px] px-[12px] py-[14px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24] placeholder:text-[#747480]"
                />
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#747480] whitespace-nowrap">共 {visible.length} 筆</p>
              </div>

              <div className="px-[16px] pb-[16px]">
                <div className="flex items-start w-full">
                  <div className="flex flex-col w-[240px] shrink-0">
                    <HeaderCell text="業務項目" />
                    {visible.map((item) => <DataCell key={item.id} text={item.process} />)}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <HeaderCell text="負責單位" />
                    {visible.map((item) => <DataCell key={item.id} text={item.responsibleUnit} />)}
                  </div>
                  <div className="flex flex-col w-[160px] shrink-0">
                    <HeaderCell text="自評單位" />
                    {visible.map((item) => <DataCell key={item.id} text={item.unit} />)}
                  </div>
                  <div className="flex flex-col w-[140px] shrink-0">
                    <HeaderCell text="缺失題數" />
                    {visible.map((item) => <DataCell key={item.id} text={String(item.questions.length)} />)}
                  </div>
                  <div className="flex flex-col w-[120px] shrink-0">
                    <HeaderCell text="操作" align="center" />
                    {visible.map((item) => (
                      <div key={item.id} className="bg-white h-[63px] w-full relative">
                        <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex items-center justify-center h-full">
                          <button
                            type="button"
                            onClick={() => onNavigate('deficiency-tracking', undefined, { id: item.id })}
                            className="bg-transparent border-none cursor-pointer"
                          >
                            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24]">查看</p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {visible.length === 0 ? (
                  <p className="px-[15px] py-[24px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">沒有符合條件的問卷</p>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
