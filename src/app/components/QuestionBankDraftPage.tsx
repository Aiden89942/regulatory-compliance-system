import { useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';
import { QuestionTemplate } from '../data/questionBankData';
import { formatSelfAssessmentUnits, ReviewStatus, submitQuestionnaireForReview, useQuestionnaireReviews } from '../data/questionnaireReviewStore';
import { QuestionnaireDraft, saveQuestionnaireDraft, useQuestionnaireDrafts } from '../data/questionnaireDraftStore';

type DraftStatus = '草稿' | ReviewStatus;
type DraftTab = '未送審' | '已送審' | '已退回' | '已通過';

const DRAFT_TABS: DraftTab[] = ['未送審', '已送審', '已退回', '已通過'];

function inDraftTab(status: DraftStatus, tab: DraftTab) {
  if (tab === '未送審') return status === '草稿';
  if (tab === '已送審') return status === '待審核';
  if (tab === '已通過') return status === '待發送' || status === '已發送';
  return status === '已退回';
}

const STATUS_STYLE: Record<DraftStatus, { bg: string; text: string }> = {
  草稿: { bg: '#f6f6fa', text: '#747480' },
  待審核: { bg: '#ffedd4', text: '#EE762F' },
  已退回: { bg: '#ffe2e2', text: '#ec5242' },
  待發送: { bg: '#e8f1ff', text: '#2E7CF6' },
  已發送: { bg: '#ddffdf', text: '#419D48' },
};

function draftStatus(draft: QuestionnaireDraft, reviews: { id: string; status: ReviewStatus }[]): DraftStatus {
  if (!draft.reviewId) return '草稿';
  return reviews.find((item) => item.id === draft.reviewId)?.status ?? '待審核';
}

export function QuestionnaireStatusBadge({ status }: { status: DraftStatus }) {
  const style = STATUS_STYLE[status];
  return (
    <div className="rounded-[4px] px-[8px] py-[4px] inline-flex w-fit items-center justify-center" style={{ backgroundColor: style.bg }}>
      <p className="font-['EYInterstate:Bold',sans-serif] text-[14px] leading-none whitespace-nowrap" style={{ color: style.text, fontWeight: 700 }}>{status}</p>
    </div>
  );
}

const TEMPLATE_FILTERS: { value: QuestionTemplate; label: string }[] = [
  { value: 'compliance', label: '法令遵循自行評估' },
  { value: 'internal-control', label: '內部控制制度自行查核' },
];

export default function QuestionBankDraftPage() {
  const { isDarkMode } = useAppContext();
  const onNavigate = useAppNavigate();
  const drafts = useQuestionnaireDrafts();
  const reviews = useQuestionnaireReviews();
  const [searchParams] = useSearchParams();
  const requestedTab = searchParams.get('tab');
  const [tab, setTab] = useState<DraftTab>(
    requestedTab === '已送審' || requestedTab === '已退回' || requestedTab === '已通過' ? requestedTab : '未送審',
  );
  const [template, setTemplate] = useState<QuestionTemplate>('compliance');
  const rows = drafts.map((draft) => ({ draft, status: draftStatus(draft, reviews) }));
  const tabRows = rows.filter((row) => inDraftTab(row.status, tab));
  const visible = tabRows.filter((row) => row.draft.template === template);

  const submitDraft = (id: string) => {
    const draft = drafts.find((item) => item.id === id);
    if (!draft) return;
    const reviewId = draft.reviewId || `review-${draft.id}`;
    submitQuestionnaireForReview({
      id: reviewId,
      template: draft.template,
      title: draft.title,
      process: draft.process,
      responsibleUnit: draft.responsibleUnit,
      selfAssessmentUnits: draft.selfAssessmentUnits,
      questionIds: draft.questionIds,
    });
    saveQuestionnaireDraft({ ...draft, reviewId });
    setTab('已送審');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#2e2e38]'}`}>
      <Header onNavigate={onNavigate} currentPage="question-bank" />

      <div className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#ececf3]'} content-stretch flex flex-col gap-[32px] items-center px-0 py-[32px] pt-[152px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full min-h-[calc(100vh-152px)]`}>
        <div className="w-full max-w-[1920px] flex flex-col gap-[32px] items-center">
          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full">
              <Breadcrumb
                isDarkMode={isDarkMode}
                onNavigate={onNavigate}
                items={[
                  { text: '首頁', onClick: () => onNavigate('home') },
                  { text: '題庫維護', onClick: () => onNavigate('question-bank') },
                  { text: '問卷清單', isActive: true },
                ]}
              />
            </div>
          </div>

          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                  問卷清單
                </h1>
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                  未送審可以繼續編輯或送審。送出後在已送審，退回後在已退回，通過後在已通過。
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('question-bank-design')}
                className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors"
              >
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>設計自評表</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-full max-w-[1504px]">
            <div className={`${isDarkMode ? 'bg-[#2e2e38] border-[#474756]' : 'bg-white border-[#ececf3]'} rounded-[12px] overflow-hidden shadow-sm border w-full transition-colors`}>
              <div className={`flex items-stretch w-full ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}`}>
                {DRAFT_TABS.map((name) => {
                  const count = rows.filter((row) => inDraftTab(row.status, name)).length;
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
                {TEMPLATE_FILTERS.map(({ value, label }) => {
                  const count = tabRows.filter((row) => row.draft.template === value).length;
                  const active = template === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setTemplate(value)}
                      className={`border-none cursor-pointer px-[16px] py-[8px] rounded-[33554400px] ${active ? 'bg-[#ffe600]' : isDarkMode ? 'bg-[#353545]' : 'bg-[#ececf3]'}`}
                    >
                      <p className={`text-[16px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : `font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}`}>
                        {label} ({count})
                      </p>
                    </button>
                  );
                })}
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className={isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}>
                    {['業務項目', '負責單位', '自評單位', '題數', '狀態', '操作'].map((label) => (
                      <th key={label} className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>{label}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visible.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-[48px] text-center">
                        <p className={`font-['EYInterstate:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#747480]' : 'text-[#99A1AF]'}`}>此分類尚無問卷。</p>
                      </td>
                    </tr>
                  ) : visible.map(({ draft, status }) => {
                    const canEdit = status === '草稿' || status === '已退回';
                    return (
                    <tr key={draft.id} className={isDarkMode ? 'hover:bg-[#353545]' : 'hover:bg-[#fafafd]'}>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{draft.process}</p>
                      </td>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{draft.responsibleUnit || '—'}</p>
                      </td>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{formatSelfAssessmentUnits(draft.selfAssessmentUnits)}</p>
                      </td>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{draft.questionIds.length}</p>
                      </td>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        <QuestionnaireStatusBadge status={status} />
                      </td>
                      <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px]`}>
                        {canEdit ? (
                          <div className="flex gap-[16px]">
                            <button
                              type="button"
                              onClick={() => onNavigate('question-bank-design', undefined, { template: draft.template, draft: draft.id })}
                              className="bg-transparent border-none cursor-pointer p-0"
                            >
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] underline ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>繼續編輯</p>
                            </button>
                            <button
                              type="button"
                              onClick={() => submitDraft(draft.id)}
                              className="bg-transparent border-none cursor-pointer p-0"
                            >
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] underline ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>送審</p>
                            </button>
                          </div>
                        ) : (
                          <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#747480]' : 'text-[#99A1AF]'}`}>—</p>
                        )}
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
