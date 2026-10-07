import { useEffect, useState } from 'react';
import { QuestionTemplate } from './questionBankData';

/** 自評作答狀態：尚未完成填寫 → 已送出（無缺失）或已列缺失（有未符合題目，進入缺失追蹤） */
export type AssessmentFillStatus = 'draft' | 'submitted' | 'deficiency';

export interface AssessmentRecord {
  reviewId: string;
  status: AssessmentFillStatus;
  deadline: string;
  answers: Record<string, string>;
  evidence: Record<string, string>;
  deficiencyId?: string;
}

/** 視為缺失的作答（選項可自訂，只有這些預設的否定答案會被列入缺失） */
export const NEGATIVE_ANSWERS: Record<QuestionTemplate, string[]> = {
  compliance: ['未符合'],
  'internal-control': ['否'],
};

const DEADLINE_DAYS = 30;

function defaultDeadline() {
  const date = new Date();
  date.setDate(date.getDate() + DEADLINE_DAYS);
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
}

let records: AssessmentRecord[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getAssessmentRecord(reviewId: string) {
  return records.find((record) => record.reviewId === reviewId);
}

/** 發送問卷時建立自評紀錄；重新發送（取消後再發送）會保留原本的作答與期限 */
export function openAssessmentForReview(reviewId: string) {
  if (getAssessmentRecord(reviewId)) return;
  records = [...records, { reviewId, status: 'draft', deadline: defaultDeadline(), answers: {}, evidence: {} }];
  emit();
}

function patchRecord(reviewId: string, patch: Partial<AssessmentRecord>) {
  const exists = records.some((record) => record.reviewId === reviewId);
  records = exists
    ? records.map((record) => (record.reviewId === reviewId ? { ...record, ...patch } : record))
    : [...records, { reviewId, status: 'draft', deadline: defaultDeadline(), answers: {}, evidence: {}, ...patch }];
  emit();
}

/** 評估作業原本的範例列（沒有對應問卷）用分類編號當作自評紀錄的鍵 */
export const STATIC_KEY_PREFIX = 'static:';
export function staticAssessmentKey(categoryId: string) {
  return `${STATIC_KEY_PREFIX}${categoryId}`;
}

export function saveAssessmentDraft(reviewId: string, answers: Record<string, string>, evidence: Record<string, string>) {
  patchRecord(reviewId, { answers, evidence });
}

export function submitAssessment(
  reviewId: string,
  answers: Record<string, string>,
  evidence: Record<string, string>,
  deficiencyId?: string,
) {
  patchRecord(reviewId, {
    answers,
    evidence,
    status: deficiencyId ? 'deficiency' : 'submitted',
    deficiencyId,
  });
}

/** 缺失回填時把修正後的答案與佐證回寫到自評紀錄 */
export function mergeAssessmentAnswers(reviewId: string, answers: Record<string, string>, evidence: Record<string, string>) {
  const record = getAssessmentRecord(reviewId);
  if (!record) return;
  patchRecord(reviewId, { answers: { ...record.answers, ...answers }, evidence: { ...record.evidence, ...evidence } });
}

export function setAssessmentStatus(reviewId: string, status: AssessmentFillStatus) {
  patchRecord(reviewId, { status });
}

export function useAssessmentRecords() {
  const [list, setList] = useState<AssessmentRecord[]>(records);

  useEffect(() => {
    const update = () => setList([...records]);
    listeners.add(update);
    update();
    return () => {
      listeners.delete(update);
    };
  }, []);

  return list;
}
