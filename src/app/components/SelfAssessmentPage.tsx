import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate, useAppContext } from '../context/AppContext';
import {
  QuestionTemplate,
  SelfAssessmentQuestion,
  getAnswerOptions,
  getSelfAssessmentQuestions,
  getSelfAssessmentQuestionsByIds,
  getQuestionBankByTemplate,
  getTemplateLabel,
  InherentRisk,
} from '../data/questionBankData';
import { formatSelfAssessmentUnits, useQuestionnaireReviews } from '../data/questionnaireReviewStore';
import {
  NEGATIVE_ANSWERS,
  STATIC_KEY_PREFIX,
  staticAssessmentKey,
  saveAssessmentDraft,
  submitAssessment,
  useAssessmentRecords,
} from '../data/assessmentStore';
import { addDeficiency } from '../data/deficiencyStore';

const RISK_LABEL: Record<InherentRisk, string> = {
  high: '高風險',
  medium: '中風險',
  low: '低風險',
  none: '無',
};

function uniqueJoined(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))].join('、') || '—';
}

function FillQuestion({
  template,
  question,
  answer,
  evidence,
  onAnswer,
  onEvidence,
  disabled = false,
}: {
  template: QuestionTemplate;
  question: SelfAssessmentQuestion;
  answer: string;
  evidence: string;
  onAnswer: (value: string) => void;
  onEvidence: (value: string) => void;
  disabled?: boolean;
}) {
  const reference = template === 'compliance' ? question.externalRule : (question.internalRule || question.externalRule);
  const referenceLabel = template === 'compliance' ? '應遵循之法令規章' : '自查依據';
  const evidenceLabel = template === 'compliance' ? '佐證文件或說明' : '佐證文件及說明';
  const options = getAnswerOptions(template, question.id);

  return (
    <div className="flex flex-col gap-[10px] w-full pb-[8px] border-b border-[#ececf3] last:border-b-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] leading-[23px] text-[#1a1a24] whitespace-pre-wrap" style={{ fontWeight: 700 }}>
        {question.no}. {question.title}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
        {template === 'compliance' ? `遵循程序：${question.controlMeasure}` : `自行查核程序：${question.question}`}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
        {referenceLabel}：{reference}
      </p>
      {template === 'internal-control' ? (
        <>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
            作業風險事件描述：{question.operationalRisk}（{RISK_LABEL[question.inherentRisk]}）
          </p>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
            控制描述：{question.controlMeasure}
          </p>
        </>
      ) : null}
      <div className="flex gap-[16px] items-center flex-wrap">
        {options.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => onAnswer(label)}
            disabled={disabled}
            className={`flex gap-[6px] items-center bg-transparent border-none p-0 ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
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
        onChange={(event) => onEvidence(event.target.value)}
        placeholder={evidenceLabel}
        rows={3}
        disabled={disabled}
        className="w-full bg-[#f6f6fa] text-[#1a1a24] placeholder:text-[#99A1AF] border border-[#ececf3] rounded-[8px] px-[12px] py-[12px] outline-none font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] resize-y"
      />
    </div>
  );
}

export default function SelfAssessmentPage() {
  const { setShowDraftSavedNotification } = useAppContext();
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();

  const requestedKey = searchParams.get('review') || '';
  const isStaticKey = requestedKey.startsWith(STATIC_KEY_PREFIX);
  const reviews = useQuestionnaireReviews();
  const records = useAssessmentRecords();
  const review = requestedKey && !isStaticKey ? reviews.find((item) => item.id === requestedKey) : undefined;
  // 範例列沒有對應的發送問卷，改用分類編號當自評紀錄的鍵
  const categoryParam = isStaticKey ? requestedKey.slice(STATIC_KEY_PREFIX.length) : (searchParams.get('category') || '');
  const recordKey = review ? review.id : (categoryParam ? staticAssessmentKey(categoryParam) : '');
  const record = recordKey ? records.find((item) => item.reviewId === recordKey) : undefined;
  const readOnly = Boolean(recordKey) && (searchParams.get('readonly') === '1' || (record ? record.status !== 'draft' : false));

  const template = review?.template ?? ((searchParams.get('template') as QuestionTemplate) || 'compliance');
  const projectName = review?.process ?? (searchParams.get('project') || '');
  const categoryId = categoryParam;
  const questions = useMemo(
    () => {
      if (!review) return getSelfAssessmentQuestions(template, categoryId || undefined);
      if (review.questionIds?.length) return getSelfAssessmentQuestionsByIds(review.template, review.questionIds);
      // 範例問卷沒有勾選紀錄時，依業務項目帶出整組題目
      const group = getQuestionBankByTemplate(review.template).find((entry) => entry.process === review.process);
      return getSelfAssessmentQuestions(review.template, group?.id);
    },
    [review, template, categoryId],
  );
  const formTitle = getTemplateLabel(template).replace('法令遵循自行評估', '法令遵循自行評估表').replace('內部控制制度自行查核', '內部控制制度自行查核表');

  const [answers, setAnswers] = useState<Record<string, string>>(() => record?.answers ?? {});
  const [remarks, setRemarks] = useState<Record<string, string>>(() => record?.evidence ?? {});

  const answeredCount = questions.filter((question) => answers[question.id]).length;
  const processes = useMemo(() => {
    const groups: { process: string; questions: SelfAssessmentQuestion[] }[] = [];
    questions.forEach((question) => {
      const current = groups[groups.length - 1];
      if (current && current.process === question.process) current.questions.push(question);
      else groups.push({ process: question.process, questions: [question] });
    });
    return groups;
  }, [questions]);

  const allAnswered = questions.length > 0 && answeredCount === questions.length;

  const handleSaveDraft = () => {
    if (recordKey) saveAssessmentDraft(recordKey, answers, remarks);
    setShowDraftSavedNotification(true);
  };

  const handleSubmit = () => {
    if (!recordKey) {
      onNavigate('risk-assessment');
      return;
    }
    // 有未符合／否的題目就列入缺失，進入缺失追蹤等待回填
    const negative = NEGATIVE_ANSWERS[template];
    const flagged = questions.filter((question) => negative.includes(answers[question.id]));
    const deficiencyId = flagged.length > 0
      ? addDeficiency({
        template,
        process: review?.process || projectName || questions[0]?.process || '',
        responsibleUnit: review?.responsibleUnit || uniqueJoined(questions.map((question) => question.responsibleUnit)),
        unit: review ? formatSelfAssessmentUnits(review.selfAssessmentUnits) : uniqueJoined(questions.flatMap((question) => question.department.split('、'))),
        reviewId: recordKey,
        questions: flagged.map((question) => ({
          questionId: question.id,
          comment: `自評結果為「${answers[question.id]}」，請補充改善說明。`,
          answer: answers[question.id],
          evidence: remarks[question.id] || '',
        })),
      })
      : undefined;
    submitAssessment(recordKey, answers, remarks, deficiencyId);
    onNavigate('risk-assessment');
  };

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="risk-assessment" />
      <div className="pt-[120px] w-full">
        <div className="bg-[#ececf3] flex flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full min-h-[calc(100vh-120px)]">
          <div className="flex flex-col gap-[32px] items-center px-[32px] w-full max-w-[1440px]">
            <div className="flex gap-[8px] h-[24px] items-center w-full">
              <button type="button" onClick={() => onNavigate('home')} className="bg-transparent border-none cursor-pointer p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px]">首頁</p>
              </button>
              <p className="text-[#4A5565] text-[16px]">/</p>
              <button type="button" onClick={() => onNavigate('risk-assessment')} className="bg-transparent border-none cursor-pointer p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px]">評估作業</p>
              </button>
              <p className="text-[#4A5565] text-[16px]">/</p>
              <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px]">{formTitle}</p>
            </div>

            <div className="w-full">
              <div className="bg-[#747480] rounded-tl-[8px] rounded-tr-[8px] w-full">
                <div className="flex items-center justify-between gap-[16px] p-[24px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[22px] text-white" style={{ fontWeight: 700 }}>
                    {formTitle}
                  </p>
                  <p className="font-['EYInterstate:Regular',sans-serif] text-[14px] text-white shrink-0">
                    已填 {answeredCount}/{questions.length} 題
                  </p>
                </div>
              </div>
              <div className="bg-white flex flex-col gap-[24px] items-start p-[24px] rounded-bl-[8px] rounded-br-[8px] w-full border-2 border-[#e5e7eb] border-t-0">
                <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">業務項目：{projectName || uniqueJoined(questions.map((question) => question.process))}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">負責單位：{review?.responsibleUnit || uniqueJoined(questions.map((question) => question.responsibleUnit))}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">自評單位：{review ? formatSelfAssessmentUnits(review.selfAssessmentUnits) : uniqueJoined(questions.flatMap((question) => question.department.split('、')))}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38]">內部規章：{uniqueJoined(questions.map((question) => question.internalRule))}</p>
                </div>

                {processes.map((group) => (
                  <div key={group.process} className="flex flex-col gap-[16px] w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#1a1a24]" style={{ fontWeight: 700 }}>{group.process}</p>
                    {group.questions.map((question) => (
                      <FillQuestion
                        key={question.id}
                        disabled={readOnly}
                        template={template}
                        question={question}
                        answer={answers[question.id] || ''}
                        evidence={remarks[question.id] || ''}
                        onAnswer={(value) => setAnswers((prev) => ({ ...prev, [question.id]: value }))}
                        onEvidence={(value) => setRemarks((prev) => ({ ...prev, [question.id]: value }))}
                      />
                    ))}
                  </div>
                ))}

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

            <div className="bg-white rounded-[8px] w-full border-2 border-[#e5e7eb] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]">
              <div className="flex items-center justify-between p-[16px]">
                {readOnly ? (
                  <>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px]">此問卷已送出，僅供查看。</p>
                    <button type="button" onClick={() => onNavigate('risk-assessment')} className="bg-white border border-[#e5e7eb] rounded-[4px] min-w-[110px] px-[20px] py-[16px] cursor-pointer">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] text-center" style={{ fontWeight: 700 }}>返回列表</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" onClick={handleSaveDraft} className="bg-transparent border-none cursor-pointer flex items-center py-[12px]">
                      <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px]">儲存成草稿</p>
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={Boolean(recordKey) && !allAnswered}
                      className="bg-[#ffe600] border-none rounded-[4px] min-w-[110px] px-[20px] py-[16px] cursor-pointer hover:bg-[#ffd000] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] text-center" style={{ fontWeight: 700 }}>送出自評</p>
                    </button>
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
