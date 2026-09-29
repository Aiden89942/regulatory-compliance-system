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
  { value: 'compliance', label: '法令遵循自行評估' },
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
  {
    id: 'comp-3',
    riskCategory: '資訊服務委外',
    process: '資訊服務委外',
    department: '資訊科技部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊服務委外管理辦法',
    rows: [
      {
        id: 'comp-3-1',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '未辨識委外供應商接觸之資訊資產，可能使核心系統曝險。',
        controlMeasure: '委外前應確認供應商涉及之資訊資產範圍，包含核心系統、關鍵系統軟體與關鍵系統設備。',
        question: '是否已評估供應商涉及之資訊資產？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-3-2',
        externalRule: '個人資料保護法',
        operationalRisk: '供應商存取個人資料或重要文件未納入評估。',
        controlMeasure: '應確認是否涉及特種個資、可識別個人資料，以及其他重要文件與資料。',
        question: '是否已評估供應商會存取或保管之資料？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-3-3',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '未評估傳輸路徑，資料可能經由未加密網路外洩。',
        controlMeasure: '應確認連線係透過網際網路、封閉或加密網路，或不進行外部傳輸。',
        question: '與供應商之傳輸連線方式是否已評估並符合要求？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-3-4',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '未評估委外可行性或未遵循主管機關規範即進行委外。',
        controlMeasure: '委外前應完成可行性評估，並確認符合內規與主管機關要求。',
        question: '資訊服務委外事項是否已考量可行性，並遵守內規與主管機關規範？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-3-5',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '資訊安全要求未列入成本，或供應商過度集中且無替代方案。',
        controlMeasure: '資安要求應列入成本計算，並評估供應商集中度與無法履約時之替代方案。',
        question: '是否已將資訊安全要求列入成本，並考量供應商集中與替代方案？',
        inherentRisk: 'medium',
        frequency: '每半年',
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
  {
    id: 'ic-3',
    riskCategory: '委外作業控管',
    process: '資訊服務委外',
    department: '資訊科技部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊服務委外管理辦法',
    rows: [
      {
        id: 'ic-3-1',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第26條',
        operationalRisk: '委外供應商涉及之資訊資產未納入查核，核心系統接觸範圍不明。',
        controlMeasure: '查核時應核對供應商涉及之資訊資產清單，包含核心系統與關鍵系統軟硬體。',
        question: '本單位是否已辨識委外供應商涉及之資訊資產並留存評估紀錄？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-3-2',
        externalRule: '個人資料保護法第12條',
        operationalRisk: '供應商存取個人資料或重要文件，查核範圍未涵蓋。',
        controlMeasure: '自行查核應包含供應商存取或保管之資料種類，並保存查核紀錄。',
        question: '委外供應商對資料之存取是否已納入自行查核範圍？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-3-3',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '與供應商之傳輸未採封閉或加密網路，查核時未能提出紀錄。',
        controlMeasure: '應查核傳輸連線方式，確認採行封閉、加密網路或不進行外部傳輸。',
        question: '與供應商之傳輸連線是否依規定辦理，並留存查核紀錄？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'ic-3-4',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '委外可行性、資安成本或替代方案未經評估，缺失無法追蹤。',
        controlMeasure: '查核應確認可行性、資訊安全成本、供應商集中度與替代方案均已評估並留存文件。',
        question: '委外可行性、資訊安全成本及替代方案是否已完成評估？',
        inherentRisk: 'medium',
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

export const COMPLIANCE_ANSWER_OPTIONS = ['符合', '未符合', '不適用'];
export const DEFAULT_CONTROL_ANSWER_OPTIONS = ['是', '否', 'N/A'];

const controlAnswerOptions = new Map<string, string[]>();

export function getAnswerOptions(template: QuestionTemplate, rowId: string): string[] {
  if (template === 'compliance') return COMPLIANCE_ANSWER_OPTIONS;
  const saved = controlAnswerOptions.get(rowId);
  return saved ? [...saved] : [...DEFAULT_CONTROL_ANSWER_OPTIONS];
}

export function setControlAnswerOptions(rowId: string, options: string[]) {
  const next = options.map((option) => option.trim()).filter(Boolean);
  controlAnswerOptions.set(rowId, next.length > 0 ? next : [...DEFAULT_CONTROL_ANSWER_OPTIONS]);
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
