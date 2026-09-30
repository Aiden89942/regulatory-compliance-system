import { useEffect, useState } from 'react';
import { QuestionTemplate } from './questionBankData';

export interface QuestionnaireDraft {
  id: string;
  template: QuestionTemplate;
  title: string;
  process: string;
  responsibleUnit: string;
  selfAssessmentUnits: string[];
  internalRule: string;
  questionIds: string[];
  reviewId?: string;
}

let drafts: QuestionnaireDraft[] = [
  {
    id: 'draft-seed-1',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '理財商品銷售',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['財富管理部'],
    internalRule: '財富管理業務管理辦法',
    questionIds: ['comp-4-1', 'comp-4-2', 'comp-4-3'],
  },
  {
    id: 'draft-seed-2',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '網路銀行',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['數位金融部'],
    internalRule: '電子銀行業務管理辦法',
    questionIds: ['comp-6-1', 'comp-6-2'],
  },
  {
    id: 'draft-seed-3',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '人員異動',
    responsibleUnit: '凱基金控 - 法遵部',
    selfAssessmentUnits: ['人力資源部'],
    internalRule: '人員進用及異動作業要點',
    questionIds: ['ic-7-1', 'ic-7-2'],
  },
  {
    id: 'draft-seed-4',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['授信管理部'],
    internalRule: '個金業務授信辦法',
    questionIds: ['comp-1-1', 'comp-1-2', 'comp-1-3', 'comp-1-4'],
    reviewId: 'review-comp-1',
  },
  {
    id: 'draft-seed-5',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '內部查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    selfAssessmentUnits: ['稽核處'],
    internalRule: '內部控制制度自行查核作業要點',
    questionIds: ['ic-1-1', 'ic-1-2'],
    reviewId: 'review-ic-1',
  },
  {
    id: 'draft-seed-6',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 法遵部',
    selfAssessmentUnits: ['個金業務部', '營業部'],
    internalRule: '存款業務作業手冊',
    questionIds: ['comp-2-1', 'comp-2-2', 'comp-2-3'],
    reviewId: 'review-comp-4',
  },
  {
    id: 'draft-seed-7',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊部', '營運管理部'],
    internalRule: '資訊安全管理制度',
    questionIds: ['ic-2-1', 'ic-2-2', 'ic-2-3'],
    reviewId: 'review-ic-4',
  },
  {
    id: 'draft-seed-8',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '個人貸款',
    responsibleUnit: '凱基銀行 - 風管部',
    selfAssessmentUnits: ['個金業務部'],
    internalRule: '個人貸款授信辦法',
    questionIds: ['comp-5-1', 'comp-5-2', 'comp-5-3'],
    reviewId: 'review-seed-return-1',
  },
  {
    id: 'draft-seed-9',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '法遵自行查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    selfAssessmentUnits: ['法令遵循部'],
    internalRule: '法令遵循自行查核作業程序',
    questionIds: ['ic-6-1', 'ic-6-2'],
    reviewId: 'review-seed-return-2',
  },
  {
    id: 'draft-seed-10',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 資訊部',
    selfAssessmentUnits: ['營業部'],
    internalRule: '存款業務作業手冊',
    questionIds: ['comp-2-1', 'comp-2-2'],
    reviewId: 'review-comp-2',
  },
  {
    id: 'draft-seed-11',
    template: 'compliance',
    title: '法令遵循自行評估表',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 資訊部',
    selfAssessmentUnits: ['資訊科技部', '數位金融部'],
    internalRule: '資訊服務委外管理辦法',
    questionIds: ['comp-3-1', 'comp-3-2', 'comp-3-3'],
    reviewId: 'review-comp-3',
  },
  {
    id: 'draft-seed-12',
    template: 'internal-control',
    title: '內部控制制度自行查核表',
    process: '內部查核',
    responsibleUnit: '凱基金控 - 法遵部',
    selfAssessmentUnits: ['稽核處', '法令遵循部'],
    internalRule: '內部控制制度自行查核作業要點',
    questionIds: ['ic-1-1', 'ic-1-2'],
    reviewId: 'review-ic-6',
  },
];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getQuestionnaireDraft(id: string): QuestionnaireDraft | undefined {
  return drafts.find((draft) => draft.id === id);
}

export function saveQuestionnaireDraft(draft: QuestionnaireDraft) {
  const index = drafts.findIndex((item) => item.id === draft.id);
  const previous = index >= 0 ? drafts[index] : undefined;
  const next = { ...draft, reviewId: draft.reviewId ?? previous?.reviewId };
  drafts = index >= 0 ? drafts.map((item, i) => (i === index ? next : item)) : [next, ...drafts];
  emit();
}

export function removeQuestionnaireDraft(id: string) {
  drafts = drafts.filter((draft) => draft.id !== id);
  emit();
}

export function useQuestionnaireDrafts() {
  const [list, setList] = useState<QuestionnaireDraft[]>(drafts);

  useEffect(() => {
    const update = () => setList([...drafts]);
    listeners.add(update);
    update();
    return () => {
      listeners.delete(update);
    };
  }, []);

  return list;
}
