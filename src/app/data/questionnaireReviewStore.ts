import { useEffect, useState } from 'react';
import { QuestionTemplate } from './questionBankData';

const RESPONSIBLE_ORGS = ['凱基金控', '凱基銀行'] as const;
const RESPONSIBLE_OFFICES = ['風管部', '資訊部', '法遵部'] as const;

export const RESPONSIBLE_UNITS = RESPONSIBLE_ORGS.flatMap((org) =>
  RESPONSIBLE_OFFICES.map((office) => `${org} - ${office}`),
);

export const ASSESSMENT_DEPARTMENTS = [
  '授信管理部',
  '營業部',
  '資訊科技部',
  '稽核處',
  '資訊部',
  '風險管理部',
  '法令遵循部',
  '個金業務部',
  '審查部',
  '財富管理部',
  '數位金融部',
  '財務部',
  '法務部',
  '人力資源部',
  '客戶服務部',
  '營運管理部',
] as const;
export const ALL_DEPARTMENTS_LABEL = '全部部門';

export type ReviewStatus = '待審核' | '已退回' | '待發送' | '已發送';

export interface QuestionnaireReviewItem {
  id: string;
  template: QuestionTemplate;
  title: string;
  process: string;
  responsibleUnit: string;
  selfAssessmentUnits: string[];
  status: ReviewStatus;
  questionIds?: string[];
}

let items: QuestionnaireReviewItem[] = [
  {
    id: 'review-comp-1',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['授信管理部'],
    status: '待審核',
  },
  {
    id: 'review-comp-2',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 資訊部',
    selfAssessmentUnits: ['營業部'],
    status: '待發送',
  },
  {
    id: 'review-comp-3',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊科技部', '數位金融部'],
    status: '已發送',
  },
  {
    id: 'review-ic-2',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊部'],
    status: '待發送',
  },
  {
    id: 'review-ic-1',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '內部查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    selfAssessmentUnits: ['稽核處'],
    status: '待審核',
  },
  {
    id: 'review-ic-3',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊科技部'],
    status: '已發送',
  },
  {
    id: 'review-comp-4',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 法遵部',
    selfAssessmentUnits: ['個金業務部', '營業部'],
    status: '待審核',
  },
  {
    id: 'review-comp-5',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 法遵部',
    selfAssessmentUnits: ['法令遵循部'],
    status: '待審核',
  },
  {
    id: 'review-comp-6',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['審查部', '授信管理部'],
    status: '待發送',
  },
  {
    id: 'review-comp-7',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 資訊部',
    selfAssessmentUnits: ['客戶服務部'],
    status: '已發送',
  },
  {
    id: 'review-comp-8',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '授信審查',
    responsibleUnit: '凱基金控 - 風管部',
    selfAssessmentUnits: [...ASSESSMENT_DEPARTMENTS],
    status: '已發送',
  },
  {
    id: 'review-ic-4',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊部', '營運管理部'],
    status: '已退回',
  },
  {
    id: 'review-ic-5',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '資訊服務委外',
    responsibleUnit: '凱基金控 - 資訊部',
    selfAssessmentUnits: ['數位金融部'],
    status: '待審核',
  },
  {
    id: 'review-ic-6',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '內部查核',
    responsibleUnit: '凱基金控 - 法遵部',
    selfAssessmentUnits: ['稽核處', '法令遵循部'],
    status: '待發送',
  },
  {
    id: 'review-ic-7',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊科技部', '資訊部'],
    status: '已發送',
  },
  {
    id: 'review-seed-return-1',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '個人貸款',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['個金業務部'],
    questionIds: ['comp-5-1', 'comp-5-2', 'comp-5-3'],
    status: '已退回',
  },
  {
    id: 'review-seed-return-2',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '法遵自行查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    selfAssessmentUnits: ['法令遵循部'],
    questionIds: ['ic-6-1', 'ic-6-2'],
    status: '已退回',
  },
];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function matchResponsibleUnit(value: string): string {
  return RESPONSIBLE_UNITS.find((unit) => unit === value) || '';
}

export function matchSelfAssessmentUnits(department: string): string[] {
  if (!department || department === '—') return [];
  if (department === ALL_DEPARTMENTS_LABEL) return [...ASSESSMENT_DEPARTMENTS];
  const parts = department.split('、').map((part) => part.trim()).filter(Boolean);
  return parts.filter((part) => (ASSESSMENT_DEPARTMENTS as readonly string[]).includes(part));
}

export function formatSelfAssessmentUnits(units: string[]): string {
  if (units.length === 0) return '—';
  if (ASSESSMENT_DEPARTMENTS.every((dept) => units.includes(dept))) return ALL_DEPARTMENTS_LABEL;
  return units.join('、');
}

export function submitQuestionnaireForReview(item: Omit<QuestionnaireReviewItem, 'status'>) {
  const next: QuestionnaireReviewItem = { ...item, status: '待審核' };
  const index = items.findIndex((row) => row.id === next.id);
  items = index >= 0 ? items.map((row, i) => (i === index ? next : row)) : [next, ...items];
  emit();
}

export function setQuestionnaireReviewStatus(id: string, status: ReviewStatus) {
  items = items.map((row) => (row.id === id ? { ...row, status } : row));
  emit();
}

export function useQuestionnaireReviews() {
  const [list, setList] = useState<QuestionnaireReviewItem[]>(items);

  useEffect(() => {
    const update = () => setList([...items]);
    listeners.add(update);
    update();
    return () => {
      listeners.delete(update);
    };
  }, []);

  return list;
}
