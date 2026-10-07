import { useState } from 'react';
import { useAppContext, useAppNavigate } from '../context/AppContext';
import { QuestionTemplate } from '../data/questionBankData';
import { useQuestionnaireReviews, formatSelfAssessmentUnits } from '../data/questionnaireReviewStore';
import { useAssessmentItems } from './RiskAssessmentPage';

export const OVERVIEW_YEAR = 2026;

type OverviewTab = '未派發' | '填答中' | '已完成' | '已逾期';
const OVERVIEW_TABS: OverviewTab[] = ['未派發', '填答中', '已完成', '已逾期'];

const TEMPLATE_FILTERS: { value: QuestionTemplate; label: string }[] = [
  { value: 'compliance', label: '法令遵循自行評估' },
  { value: 'internal-control', label: '內部控制制度自行查核' },
];

interface OverviewRow {
  key: string;
  template: QuestionTemplate;
  tab: OverviewTab;
  process: string;
  unit: string;
  status: string;
  deadline: string;
  open: () => void;
}

/** 以評估作業與問卷發送的同一份資料計算，發送、自評、缺失回填都會即時反映 */
export function useOverviewRows(): OverviewRow[] {
  const onNavigate = useAppNavigate();
  const reviews = useQuestionnaireReviews();
  const { compliance, control } = useAssessmentItems(OVERVIEW_YEAR);

  const rows: OverviewRow[] = [];
  reviews.filter((review) => review.status === '待發送').forEach((review) => {
    rows.push({
      key: `pending-${review.id}`,
      template: review.template,
      tab: '未派發',
      process: review.process,
      unit: formatSelfAssessmentUnits(review.selfAssessmentUnits),
      status: '尚未派發',
      deadline: '—',
      open: () => onNavigate('question-bank-review', undefined, { id: review.id }),
    });
  });

  [...compliance, ...control].forEach((item) => {
    const template = item.template ?? (compliance.includes(item) ? 'compliance' : 'internal-control');
    const base = { key: item.id, template, process: item.projectName, unit: item.supplier, deadline: item.deadline };
    if (item.statusType === 'overdue') {
      rows.push({ ...base, tab: '已逾期', status: item.status, open: () => onNavigate('risk-assessment') });
    } else if (item.statusType === 'draft') {
      rows.push({ ...base, tab: '填答中', status: '尚未完成填寫', open: () => onNavigate('risk-assessment') });
    } else if (item.statusType === 'waiting') {
      rows.push({ ...base, tab: '填答中', status: item.status, open: () => onNavigate('risk-assessment') });
    } else if (item.statusType === 'deficiency') {
      rows.push({
        ...base,
        tab: '已完成',
        status: '已列缺失',
        open: () => onNavigate('deficiency-tracking', undefined, item.deficiencyId ? { id: item.deficiencyId } : undefined),
      });
    } else {
      rows.push({
        ...base,
        tab: '已完成',
        status: '已送出',
        open: () => (item.reviewId
          ? onNavigate('self-assessment', item.projectName, { template, review: item.reviewId, readonly: '1' })
          : onNavigate('risk-assessment')),
      });
    }
  });
  return rows;
}

export default function QuestionnaireFillOverview({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const rows = useOverviewRows();
  const [tab, setTab] = useState<OverviewTab>('未派發');
  const [template, setTemplate] = useState<QuestionTemplate>('compliance');
  const tabRows = rows.filter((row) => row.tab === tab);
  const visible = tabRows.filter((row) => row.template === template);
  const border = isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]';
  const text = isDarkMode ? 'text-white' : 'text-[#1a1a24]';

  return (
    <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[8px] w-full overflow-clip`}>
      <div className={`flex items-stretch w-full ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}`}>
        {OVERVIEW_TABS.map((name) => {
          const active = tab === name;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setTab(name)}
              className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] ${active ? 'bg-[#ffe600] py-[16px]' : 'bg-transparent py-[12px]'}`}
            >
              <p className={`text-[20px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"}`}>{name}</p>
              <p className={`text-[24px] ${active ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular',sans-serif] text-[#747480]"}`}>{rows.filter((row) => row.tab === name).length}</p>
            </button>
          );
        })}
      </div>
      <div className="flex gap-[12px] items-center px-[24px] py-[16px]">
        {TEMPLATE_FILTERS.map(({ value, label }) => {
          const active = template === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setTemplate(value)}
              className={`border-none cursor-pointer px-[16px] py-[8px] rounded-[33554400px] ${active ? 'bg-[#ffe600]' : isDarkMode ? 'bg-[#353545]' : 'bg-[#ececf3]'}`}
            >
              <p className={`text-[16px] whitespace-nowrap ${active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : `font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] ${text}`}`}>
                {label} ({tabRows.filter((row) => row.template === value).length})
              </p>
            </button>
          );
        })}
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className={isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}>
              {['業務項目', '填答部門', '狀態', '期限', '操作'].map((label) => (
                <th key={label} className={`border-b ${border} px-[16px] py-[14px] text-left`}>
                  <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] ${text}`} style={{ fontWeight: 700 }}>{label}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-[24px] py-[48px]">
                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#747480]' : 'text-[#99A1AF]'}`}>此分類尚無問卷。</p>
                </td>
              </tr>
            ) : visible.map((row) => (
              <tr key={row.key} className={`border-b ${border}`}>
                {[row.process, row.unit, row.status, row.deadline].map((value, index) => (
                  <td key={index} className="px-[16px] py-[18px]">
                    <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${text}`}>{value}</p>
                  </td>
                ))}
                <td className="px-[16px] py-[18px]">
                  <button type="button" onClick={row.open} className="bg-transparent border-none cursor-pointer p-0">
                    <p className={`underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${text}`}>查看</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
