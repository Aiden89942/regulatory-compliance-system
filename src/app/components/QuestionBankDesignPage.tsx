import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';
import {
  QuestionTemplate,
  TEMPLATE_OPTIONS,
  getAnswerOptions,
  getQuestionBankByTemplate,
  getTemplateLabel,
  QuestionBankCategory,
  QuestionBankRow,
  InherentRisk,
} from '../data/questionBankData';
import { getQuestionnaireDraft, saveQuestionnaireDraft } from '../data/questionnaireDraftStore';
import { submitQuestionnaireForReview } from '../data/questionnaireReviewStore';

const RISK_LABEL: Record<InherentRisk, string> = {
  high: '高風險',
  medium: '中風險',
  low: '低風險',
  none: '無',
};

function GroupCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="size-[18px] shrink-0 accent-[#1a1a24] cursor-pointer"
    />
  );
}

function AnswerChoices({ options }: { options: string[] }) {
  return (
    <div className="flex gap-[16px] items-center flex-wrap pointer-events-none select-none" aria-hidden="true">
      {options.map((label) => (
        <div key={label} className="flex gap-[6px] items-center">
          <div className="size-[20px] rounded-full border border-[#c4c4cd] bg-white" />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#2e2e38] text-[16px]">{label}</p>
        </div>
      ))}
    </div>
  );
}

function QuestionPreview({
  template,
  category,
  row,
  no,
}: {
  template: QuestionTemplate;
  category: QuestionBankCategory;
  row: QuestionBankRow;
  no: number;
}) {
  const reference = template === 'compliance' ? row.externalRule : (category.internalRule || row.externalRule);
  const referenceLabel = template === 'compliance' ? '應遵循之法令規章' : '自查依據';
  const title = row.title || (template === 'compliance' ? row.controlMeasure : row.question);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] leading-[23px] text-[#1a1a24] whitespace-pre-wrap" style={{ fontWeight: 700 }}>
        {no}. {title}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
        {template === 'compliance' ? `遵循程序：${row.controlMeasure}` : `自行查核程序：${row.question}`}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
        {referenceLabel}：{reference}
      </p>
      {template === 'internal-control' && (
        <>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] text-[#747480]">
            作業風險事件描述：{row.operationalRisk}（{RISK_LABEL[row.inherentRisk]}）
          </p>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] text-[#2e2e38] whitespace-pre-wrap">
            控制描述：{row.controlMeasure}
          </p>
        </>
      )}
      <AnswerChoices options={getAnswerOptions(template, row.id)} />
      <div className="bg-[#f6f6fa] relative rounded-[8px] h-[72px] w-full">
        <p className="p-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#99A1AF]">
          {template === 'compliance' ? '佐證文件或說明' : '佐證文件及說明'}
        </p>
        <div aria-hidden="true" className="absolute border border-[#ececf3] inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

export default function QuestionBankDesignPage() {
  const { isDarkMode } = useAppContext();
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();

  const initialTemplate = (searchParams.get('template') as QuestionTemplate) || 'compliance';
  const [template, setTemplate] = useState<QuestionTemplate>(
    initialTemplate === 'internal-control' ? 'internal-control' : 'compliance'
  );
  const [selected, setSelected] = useState<Record<QuestionTemplate, string[]>>({
    compliance: [],
    'internal-control': [],
  });
  const [selfAssessmentFilter, setSelfAssessmentFilter] = useState('');
  const [responsibleFilter, setResponsibleFilter] = useState('');

  const categories = useMemo(() => getQuestionBankByTemplate(template), [template]);
  const selfAssessmentOptions = useMemo(
    () => [...new Set(categories.flatMap((category) => category.department.split('、').map((unit) => unit.trim())).filter(Boolean))],
    [categories],
  );
  const responsibleOptions = useMemo(
    () => [...new Set(categories.map((category) => category.responsibleUnit).filter(Boolean))],
    [categories],
  );
  const visibleCategories = useMemo(
    () => categories.filter((category) => {
      if (selfAssessmentFilter && !category.department.split('、').map((unit) => unit.trim()).includes(selfAssessmentFilter)) return false;
      if (responsibleFilter && category.responsibleUnit !== responsibleFilter) return false;
      return true;
    }),
    [categories, selfAssessmentFilter, responsibleFilter],
  );
  const selectedIds = selected[template];

  const previewGroups = useMemo(() => {
    const groups: { category: QuestionBankCategory; rows: { row: QuestionBankRow; no: number }[] }[] = [];
    let no = 0;
    categories.forEach((category) => {
      const rows = category.rows
        .filter((row) => selectedIds.includes(row.id))
        .map((row) => {
          no += 1;
          return { row, no };
        });
      if (rows.length > 0) groups.push({ category, rows });
    });
    return groups;
  }, [categories, selectedIds]);

  const draftId = searchParams.get('draft') || '';

  useEffect(() => {
    if (!draftId) return;
    const draft = getQuestionnaireDraft(draftId);
    if (!draft) return;
    setTemplate(draft.template === 'internal-control' ? 'internal-control' : 'compliance');
    setSelected((prev) => ({ ...prev, [draft.template]: draft.questionIds }));
    setSelfAssessmentFilter('');
    setResponsibleFilter('');
  }, [draftId]);

  const switchTemplate = (next: QuestionTemplate) => {
    setTemplate(next);
    setSelfAssessmentFilter('');
    setResponsibleFilter('');
  };

  const toggleRow = (rowId: string) => {
    setSelected((prev) => {
      const current = prev[template];
      const next = current.includes(rowId) ? current.filter((id) => id !== rowId) : [...current, rowId];
      return { ...prev, [template]: next };
    });
  };

  const formTitle = template === 'compliance' ? '法令遵循自行評估表' : '內部控制制度自行查核表';

  const buildDraft = () => {
    const processes = [...new Set(previewGroups.map((group) => group.category.process))];
    const responsibleUnits = [...new Set(previewGroups.map((group) => group.category.responsibleUnit))];
    const departments = [...new Set(previewGroups.flatMap((group) => group.category.department.split('、').map((unit) => unit.trim()).filter(Boolean)))];
    const rules = [...new Set(previewGroups.map((group) => group.category.internalRule))];
    const id = draftId || `draft-${Date.now()}`;
    return {
      id,
      template,
      title: formTitle,
      process: processes.join('、'),
      responsibleUnit: responsibleUnits.join('、'),
      selfAssessmentUnits: departments,
      internalRule: rules.join('、'),
      questionIds: [...selectedIds],
      reviewId: getQuestionnaireDraft(id)?.reviewId,
    };
  };

  const finishDesign = () => {
    if (selectedIds.length === 0) return;
    saveQuestionnaireDraft(buildDraft());
    onNavigate('question-bank-drafts');
  };

  const submitDesign = () => {
    if (selectedIds.length === 0) return;
    const draft = buildDraft();
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
    onNavigate('question-bank-drafts', undefined, { tab: '已送審' });
  };

  const toggleGroup = (category: QuestionBankCategory) => {
    const rowIds = category.rows.map((row) => row.id);
    const allChecked = rowIds.every((id) => selectedIds.includes(id));
    setSelected((prev) => {
      const current = prev[template];
      const next = allChecked
        ? current.filter((id) => !rowIds.includes(id))
        : [...current, ...rowIds.filter((id) => !current.includes(id))];
      return { ...prev, [template]: next };
    });
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
                  { text: '問卷清單', onClick: () => onNavigate('question-bank-drafts') },
                  { text: '設計自評表', isActive: true },
                ]}
              />
            </div>
          </div>

          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                  設計自評表
                </h1>
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                  一張自評表只使用一種模板。同一分類可以只拉其中一題。
                </p>
              </div>
              <div className="flex gap-[12px] shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('question-bank')}
                  className={`${isDarkMode ? 'bg-[#2e2e38] border-[#474756] text-white' : 'bg-white border-[#c4c4cd] text-[#1a1a24]'} border border-solid rounded-[8px] px-[20px] py-[12px] cursor-pointer`}
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px]" style={{ fontWeight: 700 }}>取消</p>
                </button>
                <button
                  type="button"
                  onClick={finishDesign}
                  disabled={selectedIds.length === 0}
                  className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>
                    完成設計
                  </p>
                </button>
                <button
                  type="button"
                  onClick={submitDesign}
                  disabled={selectedIds.length === 0}
                  className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>
                    送審
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-full max-w-[1504px]">
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[24px] shadow-sm w-[520px] shrink-0 flex flex-col gap-[16px] max-h-[calc(100vh-280px)] overflow-y-auto`}>
              <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                題庫
              </p>
              <div className="flex gap-[8px] flex-wrap">
                {TEMPLATE_OPTIONS.map((option) => {
                  const active = template === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => switchTemplate(option.value)}
                      className={`border-none cursor-pointer rounded-[8px] px-[16px] py-[8px] ${active ? 'bg-[#ffe600]' : isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}`}
                    >
                      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${active || !isDarkMode ? 'text-[#1a1a24]' : 'text-white'}`} style={{ fontWeight: 700 }}>
                        {option.label}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-[12px] w-full">
                <label className="flex flex-col gap-[6px] min-w-0">
                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>負責單位</p>
                  <select
                    value={responsibleFilter}
                    onChange={(event) => setResponsibleFilter(event.target.value)}
                    className={`h-[40px] w-full rounded-[8px] px-[8px] border outline-none font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${isDarkMode ? 'bg-[#1a1a24] border-[#474756] text-white' : 'bg-white border-[#ececf3] text-[#1a1a24]'}`}
                  >
                    <option value="">全部</option>
                    {responsibleOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-[6px] min-w-0">
                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>自評單位</p>
                  <select
                    value={selfAssessmentFilter}
                    onChange={(event) => setSelfAssessmentFilter(event.target.value)}
                    className={`h-[40px] w-full rounded-[8px] px-[8px] border outline-none font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${isDarkMode ? 'bg-[#1a1a24] border-[#474756] text-white' : 'bg-white border-[#ececf3] text-[#1a1a24]'}`}
                  >
                    <option value="">全部</option>
                    {selfAssessmentOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              {visibleCategories.length === 0 ? (
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                  沒有符合篩選條件的題目
                </p>
              ) : null}

              {visibleCategories.map((category) => {
                const rowIds = category.rows.map((row) => row.id);
                const checkedCount = rowIds.filter((id) => selectedIds.includes(id)).length;
                const allChecked = checkedCount === rowIds.length && rowIds.length > 0;
                const indeterminate = checkedCount > 0 && !allChecked;
                return (
                  <div key={category.id} className={`rounded-[8px] border p-[16px] flex flex-col gap-[12px] ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'}`}>
                    <label className="flex gap-[10px] items-start cursor-pointer">
                      <GroupCheckbox
                        checked={allChecked}
                        indeterminate={indeterminate}
                        onChange={() => toggleGroup(category)}
                      />
                      <div className="flex flex-col gap-[4px] min-w-0">
                        <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                          {template === 'compliance' ? category.riskCategory : category.process}
                        </p>
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] leading-[20px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                          {category.process}｜{category.responsibleUnit}｜{category.department}｜{category.internalRule}
                        </p>
                      </div>
                    </label>
                    {category.rows.map((row) => (
                      <label key={row.id} className="flex gap-[10px] items-start cursor-pointer pl-[28px]">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(row.id)}
                          onChange={() => toggleRow(row.id)}
                          className="size-[18px] mt-[2px] shrink-0 accent-[#1a1a24] cursor-pointer"
                        />
                        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-white' : 'text-[#2e2e38]'}`}>
                          {row.title}
                        </p>
                      </label>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="bg-[#747480] rounded-tl-[8px] rounded-tr-[8px] w-full">
                <div className="flex items-center justify-between gap-[16px] p-[24px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[22px] text-white" style={{ fontWeight: 700 }}>
                    {formTitle}
                  </p>
                  <p className="font-['EYInterstate:Regular',sans-serif] text-[14px] text-white shrink-0">
                    已選 {selectedIds.length} 題
                  </p>
                </div>
              </div>
              <div className="bg-white flex flex-col gap-[24px] items-start p-[24px] rounded-bl-[8px] rounded-br-[8px] w-full max-h-[calc(100vh-360px)] overflow-y-auto">
                {previewGroups.length === 0 ? (
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">
                    請從左側題庫勾選題目
                  </p>
                ) : (
                  previewGroups.map((group) => (
                    <div key={group.category.id} className="flex flex-col gap-[16px] w-full">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#1a1a24]" style={{ fontWeight: 700 }}>
                        {group.category.process}
                      </p>
                      {group.rows.map(({ row, no }) => (
                        <QuestionPreview
                          key={row.id}
                          template={template}
                          category={group.category}
                          row={row}
                          no={no}
                        />
                      ))}
                    </div>
                  ))
                )}
                {previewGroups.length > 0 && (
                  <div className="flex gap-[16px] w-full pt-[8px]">
                    {['填寫人簽章', '部門主管簽章'].map((title) => (
                      <div key={title} className="flex-1 bg-[#ececf3] rounded-[8px] p-[16px] flex flex-col items-center gap-[8px]">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#4a5565]">{title}</p>
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#99a1af] h-[48px] flex items-center">[ 簽章區域 ]</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] text-[#747480] mt-[8px]">
                {getTemplateLabel(template)}。結果、佐證與簽章在這一步不能填。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
