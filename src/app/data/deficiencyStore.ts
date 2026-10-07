import { useEffect, useState } from 'react';
import { QuestionTemplate } from './questionBankData';
import { mergeAssessmentAnswers, setAssessmentStatus } from './assessmentStore';

export interface FlaggedQuestion {
  questionId: string;
  comment: string;
  answer: string;
  evidence: string;
}

export type DeficiencyStatus = '待回填' | '已回填';

export interface FlaggedQuestionnaire {
  id: string;
  status: DeficiencyStatus;
  template: QuestionTemplate;
  process: string;
  responsibleUnit: string;
  unit: string;
  questions: FlaggedQuestion[];
  /** 由自評送出產生的缺失會帶上原問卷，回填後同步自評狀態 */
  reviewId?: string;
}

let items: FlaggedQuestionnaire[] = [
  {
    id: 'def-comp-1',
    status: '待回填',
    template: 'compliance',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    unit: '授信管理部',
    questions: [
      { questionId: 'comp-1-1', comment: '查核單位覆核時，未見最近一期名單更新紀錄。', answer: '未符合', evidence: '' },
      { questionId: 'comp-1-2', comment: '抽查案件未留存迴避與職務代理紀錄。', answer: '未符合', evidence: '' },
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
      { questionId: 'comp-2-1', comment: '部分開戶案件缺少雙證件核對紀錄。', answer: '未符合', evidence: '' },
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
      { questionId: 'comp-3-1', comment: '資訊資產清單未涵蓋核心系統與關鍵設備。', answer: '未符合', evidence: '' },
      { questionId: 'comp-3-3', comment: '未說明連線是否加密，也沒有替代傳輸路徑。', answer: '未符合', evidence: '' },
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
      { questionId: 'ic-1-2', comment: '前期缺失仍未結案，追蹤表未更新改善期限。', answer: '否', evidence: '' },
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
      { questionId: 'ic-2-1', comment: '本季權限覆核紀錄缺漏，離職人員帳號尚未停用。', answer: '否', evidence: '' },
    ],
  },
];

/** 種子缺失的列表日期（評估作業的「已列缺失」顯示用） */
export const SEED_DEFICIENCY_DEADLINE = '2026.03.31';

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function addDeficiency(item: Omit<FlaggedQuestionnaire, 'id' | 'status'>): string {
  const id = `def-${item.reviewId || Date.now()}`;
  items = [{ ...item, id, status: '待回填' }, ...items.filter((row) => row.id !== id)];
  emit();
  return id;
}

export function updateDeficiencyQuestion(id: string, questionId: string, patch: Partial<FlaggedQuestion>) {
  items = items.map((item) => (item.id !== id ? item : {
    ...item,
    questions: item.questions.map((entry) => (entry.questionId === questionId ? { ...entry, ...patch } : entry)),
  }));
  emit();
}

export function resubmitDeficiency(id: string) {
  const target = items.find((item) => item.id === id);
  if (!target) return;
  items = items.map((item) => (item.id === id ? { ...item, status: '已回填' } : item));
  if (target.reviewId) {
    const answers: Record<string, string> = {};
    const evidence: Record<string, string> = {};
    target.questions.forEach((question) => {
      answers[question.questionId] = question.answer;
      evidence[question.questionId] = question.evidence;
    });
    mergeAssessmentAnswers(target.reviewId, answers, evidence);
    setAssessmentStatus(target.reviewId, 'submitted');
  }
  emit();
}

export function useDeficiencies() {
  const [list, setList] = useState<FlaggedQuestionnaire[]>(items);

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
