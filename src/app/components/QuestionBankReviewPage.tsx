import { useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '../context/AppContext';
import {
  findQuestionRow,
  getAnswerOptions,
  getQuestionBankByTemplate,
  getTemplateLabel,
  InherentRisk,
  QuestionBankCategory,
  QuestionBankRow,
  QuestionTemplate,
} from '../data/questionBankData';
import {
  formatSelfAssessmentUnits,
  QuestionnaireReviewItem,
  setQuestionnaireReviewStatus,
  useQuestionnaireReviews,
} from '../data/questionnaireReviewStore';

const RISK_LABEL: Record<InherentRisk, string> = {
  high: '高風險',
  medium: '中風險',
  low: '低風險',
  none: '無',
};

function findReviewQuestions(item: QuestionnaireReviewItem): { category?: QuestionBankCategory; rows: QuestionBankRow[] } {
  const edited = findQuestionRow(item.template, item.id);
  if (edited) return { category: edited.category, rows: [edited.row] };
  const category = getQuestionBankByTemplate(item.template).find((group) => group.process === item.process);
  return { category, rows: category?.rows ?? [] };
}

function ChoiceRow({ options }: { options: string[] }) {
  return (
    <div className="flex gap-[16px] items-center pointer-events-none select-none" aria-hidden="true">
      {options.map((label) => (
        <div key={label} className="flex gap-[6px] items-center">
          <div className="size-[20px] rounded-full border border-[#c4c4cd] bg-white" />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#2e2e38] text-[16px]">{label}</p>
        </div>
      ))}
    </div>
  );
}

function QuestionnaireQuestion({
  template,
  category,
  row,
  no,
}: {
  template: QuestionTemplate;
  category?: QuestionBankCategory;
  row: QuestionBankRow;
  no: number;
}) {
  const reference = template === 'compliance' ? row.externalRule : (category?.internalRule || row.externalRule);
  const referenceLabel = template === 'compliance' ? '應遵循之法令規章' : '自查依據';
  const procedureLabel = template === 'compliance' ? '遵循程序' : '控制描述';
  const questionLabel = template === 'compliance' ? '自行評估程序' : '自行查核程序';
  const choices = getAnswerOptions(template, row.id);

  return (
    <div className="flex flex-col gap-[10px] w-full pb-[8px] border-b border-[#ececf3] last:border-b-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
        {referenceLabel}：{reference}
      </p>
      {template === 'internal-control' ? (
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
          作業風險事件描述：{row.operationalRisk}（{RISK_LABEL[row.inherentRisk]}）
        </p>
      ) : null}
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
        {procedureLabel}：{row.controlMeasure}
      </p>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] leading-[23px] text-[#1a1a24]" style={{ fontWeight: 700 }}>
        {no}. {questionLabel}：{row.question}
      </p>
      <ChoiceRow options={choices} />
      <div className="bg-[#f6f6fa] relative rounded-[8px] h-[72px] w-full">
        <p className="p-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#99A1AF]">
          {template === 'compliance' ? '佐證文件或說明' : '佐證文件及說明'}
        </p>
        <div aria-hidden="true" className="absolute border border-[#ececf3] inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function ReviewDetail({ item, onBack }: { item: QuestionnaireReviewItem; onBack: () => void }) {
  const content = findReviewQuestions(item);
  const formTitle = item.title || (item.template === 'compliance' ? '法令遵循自行評估表' : '內部控制制度自行查核表');

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="bg-white rounded-[8px] w-full flex items-center justify-between px-[24px] py-[20px]">
        <div className="flex flex-col gap-[6px]">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[22px] text-[#1a1a24]" style={{ fontVariationSettings: "'wght' 700" }}>
            {item.process || item.title}
          </p>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">
            {getTemplateLabel(item.template)}　{item.status}
          </p>
        </div>
        <div className="flex gap-[8px] items-center">
          {item.status === '待審核' || item.status === '已退回' ? (
            <>
              <button
                type="button"
                onClick={() => setQuestionnaireReviewStatus(item.id, '待發送')}
                className="bg-[#ffe600] border-none rounded-[4px] px-[12px] py-[8px] cursor-pointer hover:bg-[#ffd000]"
              >
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#1a1a24]">審核通過</p>
              </button>
              <button
                type="button"
                onClick={() => setQuestionnaireReviewStatus(item.id, '已發送')}
                className="bg-[#ffe600] border-none rounded-[4px] px-[12px] py-[8px] cursor-pointer hover:bg-[#ffd000]"
              >
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#1a1a24]">審核通過並發送</p>
              </button>
              <button
                type="button"
                onClick={() => setQuestionnaireReviewStatus(item.id, '已退回')}
                className="bg-[#f6f6fa] border-none rounded-[4px] px-[12px] py-[8px] cursor-pointer hover:bg-[#ececf3]"
              >
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#1a1a24]">退回</p>
              </button>
            </>
          ) : null}
          {item.status === '待發送' ? (
            <button
              type="button"
              onClick={() => setQuestionnaireReviewStatus(item.id, '已發送')}
              className="bg-[#ffe600] border-none rounded-[4px] px-[12px] py-[8px] cursor-pointer hover:bg-[#ffd000]"
            >
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#1a1a24]">發送</p>
            </button>
          ) : null}
          <button type="button" onClick={onBack} className="bg-white border border-[#e5e7eb] rounded-[4px] px-[16px] py-[8px] cursor-pointer">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#1a1a24]">返回列表</p>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-[#747480] rounded-tl-[8px] rounded-tr-[8px] w-full">
          <div className="flex items-center justify-between gap-[16px] p-[24px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[22px] text-white" style={{ fontWeight: 700 }}>
              {formTitle}
            </p>
            <p className="font-['EYInterstate:Regular',sans-serif] text-[14px] text-white shrink-0">
              共 {content.rows.length} 題
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-[24px] items-start p-[24px] rounded-bl-[8px] rounded-br-[8px] w-full">
          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">業務項目：{item.process || '—'}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">負責單位：{item.responsibleUnit || '—'}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">自評單位：{formatSelfAssessmentUnits(item.selfAssessmentUnits)}</p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">內部規章：{content.category?.internalRule || '—'}</p>
          </div>
          {content.rows.length === 0 ? (
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">此問卷尚無題目內容。</p>
          ) : (
            <div className="flex flex-col gap-[16px] w-full">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#1a1a24]" style={{ fontWeight: 700 }}>
                {item.process}
              </p>
              {content.rows.map((row, index) => (
                <QuestionnaireQuestion key={row.id} template={item.template} category={content.category} row={row} no={index + 1} />
              ))}
            </div>
          )}
          {content.rows.length > 0 ? (
            <div className="flex gap-[16px] w-full pt-[8px]">
              {['填寫人簽章', '部門主管簽章'].map((title) => (
                <div key={title} className="flex-1 bg-[#ececf3] rounded-[8px] p-[16px] flex flex-col items-center gap-[8px]">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#4a5565]">{title}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#99a1af] h-[48px] flex items-center">[ 簽章區域 ]</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const REVIEW_TABS = ['待審核', '待發送', '已發送'] as const;
type ReviewTab = (typeof REVIEW_TABS)[number];

function inReviewTab(status: QuestionnaireReviewItem['status'], tab: ReviewTab) {
  if (tab === '待審核') return status === '待審核' || status === '已退回';
  return status === tab;
}

export default function QuestionBankReviewPage() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();
  const reviews = useQuestionnaireReviews();
  const [tab, setTab] = useState<ReviewTab>('待審核');
  const [template, setTemplate] = useState<QuestionTemplate>('compliance');
  const selected = reviews.find((item) => item.id === searchParams.get('id'));
  const tabItems = reviews.filter((item) => inReviewTab(item.status, tab));
  const visible = tabItems.filter((item) => item.template === template);

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="question-bank-review" />
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
              {selected ? (
                <button type="button" onClick={() => onNavigate('question-bank-review')} className="bg-transparent border-none cursor-pointer p-0">
                  <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px]">問卷審核</p>
                </button>
              ) : (
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px]">問卷審核</p>
              )}
              {selected ? (
                <>
                  <p className="text-[#4A5565] text-[16px]">/</p>
                  <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px]">{selected.process || selected.title}</p>
                </>
              ) : null}
            </div>

            {selected ? (
              <ReviewDetail item={selected} onBack={() => onNavigate('question-bank-review')} />
            ) : null}

            {!selected ? (
              <div className="bg-white rounded-[8px] w-full overflow-clip">
                <div className="bg-[#f6f6fa] flex items-stretch w-full">
                  {REVIEW_TABS.map((name) => {
                    const count = reviews.filter((item) => inReviewTab(item.status, name)).length;
                    const active = tab === name;
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => setTab(name)}
                        className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] ${active ? 'bg-[#ffe600] py-[16px]' : 'bg-transparent py-[12px]'}`}
                      >
                        <p className={`text-[20px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"}`}>{name}</p>
                        <p className={`text-[24px] ${active ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular',sans-serif] text-[#747480]"}`}>{count}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-[12px] items-center px-[24px] py-[16px]">
                  {([
                    ['compliance', '法令遵循自行評估'],
                    ['internal-control', '內部控制制度自行查核'],
                  ] as const).map(([value, label]) => {
                    const count = tabItems.filter((item) => item.template === value).length;
                    const active = template === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setTemplate(value)}
                        className={`border-none cursor-pointer px-[16px] py-[8px] rounded-[33554400px] ${active ? 'bg-[#ffe600]' : 'bg-[#ececf3]'}`}
                      >
                        <p className={`text-[16px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]"}`}>
                          {label} ({count})
                        </p>
                      </button>
                    );
                  })}
                </div>
                {visible.length === 0 ? (
                  <div className="px-[24px] py-[48px]">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">此分類尚無問卷。</p>
                  </div>
                ) : (
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f6f6fa]">
                          {['業務項目', '負責單位', '自評單位', '狀態', '操作'].map((heading) => (
                            <th key={heading} className="text-left px-[16px] py-[14px] border-b border-[#d2dae6] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] text-[#1a1a24] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {visible.map((item) => (
                          <tr key={item.id} className="border-b border-[#d2dae6]">
                            <td className="px-[16px] py-[18px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#222]">{item.process || item.title}</td>
                            <td className="px-[16px] py-[18px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#222]">{item.responsibleUnit || '—'}</td>
                            <td className="px-[16px] py-[18px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#222]">{formatSelfAssessmentUnits(item.selfAssessmentUnits)}</td>
                            <td className="px-[16px] py-[18px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#222]">{item.status}</td>
                            <td className="px-[16px] py-[18px]">
                              <div className="flex gap-[12px] items-center">
                                <button
                                  type="button"
                                  onClick={() => onNavigate('question-bank-review', undefined, { id: item.id })}
                                  className="bg-transparent border-none cursor-pointer p-0"
                                >
                                  <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24]">查看</p>
                                </button>
                                {item.status === '待發送' ? (
                                  <button
                                    type="button"
                                    onClick={() => setQuestionnaireReviewStatus(item.id, '已發送')}
                                    className="bg-[#ffe600] border-none rounded-[4px] px-[12px] py-[8px] cursor-pointer hover:bg-[#ffd000]"
                                  >
                                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px] text-[#1a1a24]">發送</p>
                                  </button>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
