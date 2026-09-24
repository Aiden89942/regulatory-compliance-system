export type QuestionTemplate = 'compliance' | 'internal-control';

export type InherentRisk = 'high' | 'medium' | 'low' | 'none';

export interface QuestionBankRow {
  id: string;
  externalRule: string;
  operationalRisk: string;
  controlMeasure: string;
  question: string;
  inherentRisk: InherentRisk;
  frequency: string;
}

export interface QuestionBankCategory {
  id: string;
  riskCategory: string;
  process: string;
  department: string;
  responsibleUnit: string;
  internalRule: string;
  rows: QuestionBankRow[];
}

export const TEMPLATE_OPTIONS: { value: QuestionTemplate; label: string }[] = [
  { value: 'compliance', label: '法令遵循定期評估作業' },
  { value: 'internal-control', label: '內部控制制度自行查核' },
];

export const COMPLIANCE_QUESTION_BANK: QuestionBankCategory[] = [
  {
    id: 'comp-1',
    riskCategory: '利害關係人/利益衝突',
    process: '授信審查',
    department: '授信管理部',
    responsibleUnit: '凱基銀行 - 風管部',
    internalRule: '個金業務授信辦法',
    rows: [
      {
        id: 'comp-1-1',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第8條',
        operationalRisk: '利害關係人交易相關業務規範及作業未盡周延。',
        controlMeasure: '定期請同仁確認利害關係人系統名單資料庫之正確及完整性，並監管追蹤完成情形。',
        question: '名單資料庫應定期更新。',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-1-2',
        externalRule: '銀行法第33-1條',
        operationalRisk: '授信人員對於銀行法第33-1條中規定利害關係者經手之授信案件，未予迴避，恐有利害衝突之風險。',
        controlMeasure:
          '1.授信人員對於利害關係人之授信案件應予以迴避，改由職務代理人代為執行職務。\n2.對營業單位主管應迴避核定授權案件，由其職務代理人核轉總行核定。',
        question: '各級授信人員就其所辦理有利害關係之授信案件時應予迴避，改由職務代理人代為執行職務。',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'comp-2',
    riskCategory: '客戶身分識別',
    process: '存款開戶',
    department: '營業部',
    responsibleUnit: '凱基金控 - 資訊部',
    internalRule: '存款業務作業手冊',
    rows: [
      {
        id: 'comp-2-1',
        externalRule: '洗錢防制法第7條',
        operationalRisk: '未落實客戶身分識別程序，導致不法分子利用人頭帳戶。',
        controlMeasure: '開戶時應確實核對雙證件，並透過聯徵中心查詢異常紀錄。',
        question: '開戶作業是否落實證件核對？',
        inherentRisk: 'high',
        frequency: '每季',
      },
    ],
  },
];

export const INTERNAL_CONTROL_QUESTION_BANK: QuestionBankCategory[] = [
  {
    id: 'ic-1',
    riskCategory: '作業流程控管',
    process: '內部查核',
    department: '稽核處',
    responsibleUnit: '凱基銀行 - 稽核處',
    internalRule: '內部控制制度自行查核作業要點',
    rows: [
      {
        id: 'ic-1-1',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第26條',
        operationalRisk: '自行查核未依規定頻率執行，或查核範圍未涵蓋主要作業流程。',
        controlMeasure: '各業務單位依查核計畫執行自行查核，並將結果陳報法令遵循單位彙整。',
        question: '本單位是否依計畫完成自行查核並留存查核紀錄？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-1-2',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第27條',
        operationalRisk: '查核缺失未追蹤改善，導致相同缺失重複發生。',
        controlMeasure: '建立缺失追蹤表，定期追蹤改善進度並回報主管。',
        question: '自行查核發現之缺失是否已完成追蹤及改善？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-2',
    riskCategory: '資訊安全控管',
    process: '系統權限管理',
    department: '資訊部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊安全管理制度',
    rows: [
      {
        id: 'ic-2-1',
        externalRule: '個人資料保護法第12條',
        operationalRisk: '系統權限未定期覆核，導致離職或調職人員仍具存取權限。',
        controlMeasure: '每季進行系統帳號與權限覆核，並保存覆核紀錄。',
        question: '系統帳號與權限是否已依規定完成定期覆核？',
        inherentRisk: 'high',
        frequency: '每季',
      },
    ],
  },
];

export function getQuestionBankByTemplate(template: QuestionTemplate): QuestionBankCategory[] {
  return template === 'compliance' ? COMPLIANCE_QUESTION_BANK : INTERNAL_CONTROL_QUESTION_BANK;
}

export function findQuestionRow(
  template: QuestionTemplate,
  rowId: string
): { category: QuestionBankCategory; row: QuestionBankRow } | undefined {
  const categories = getQuestionBankByTemplate(template);
  for (const category of categories) {
    const row = category.rows.find((r) => r.id === rowId);
    if (row) return { category, row };
  }
  return undefined;
}

export function getTemplateLabel(template: QuestionTemplate): string {
  return TEMPLATE_OPTIONS.find((o) => o.value === template)?.label || '';
}

/** 自評問卷題目（由題庫彙整） */
export interface SelfAssessmentQuestion {
  id: string;
  no: string;
  question: string;
  controlMeasure: string;
  inherentRisk: InherentRisk;
}

export function getSelfAssessmentQuestions(template: QuestionTemplate): SelfAssessmentQuestion[] {
  const categories = getQuestionBankByTemplate(template);
  const questions: SelfAssessmentQuestion[] = [];
  let index = 1;
  for (const category of categories) {
    for (const row of category.rows) {
      questions.push({
        id: row.id,
        no: String(index).padStart(2, '0'),
        question: row.question,
        controlMeasure: row.controlMeasure,
        inherentRisk: row.inherentRisk,
      });
      index += 1;
    }
  }
  return questions;
}
