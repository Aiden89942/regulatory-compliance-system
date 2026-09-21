// 風險評估詳細資料

export interface AssessmentFormData {
  id: string;
  // 基本資料
  date: string;
  department: string;
  projectName: string;
  outsourcingType: string; // 資訊服務委外類型
  operationType: string;   // 作業委外類型
  
  // 評估參考指標 (1-3題的選項)
  q1Answer?: 'A' | 'B' | 'C' | 'D';
  q2Answer?: 'A' | 'B' | 'C' | 'D';
  q3Answer?: 'A' | 'B' | 'C';
  
  // 風險結果
  riskScore?: number;
  riskLevel?: 'high' | 'medium' | 'low';
  
  // 可行性評估 (6個問題的答案)
  feasibility?: {
    q1: boolean; // 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?
    q2: boolean; // 是否已考量資訊服務委外事項之可行性?
    q3: boolean; // 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?
    q4: boolean; // 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?
    q5: boolean; // 是否考量潛在供應商過度集中之可能性?
    q6: boolean; // 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？
  };
  
  // 補充說明
  notes?: string;
  
  // 狀態
  status: 'draft' | 'sent' | 'approved' | 'overdue';
  supplier: string;
  deadline: string;
}

// 模擬資料庫
export const ASSESSMENT_RECORDS: Record<string, AssessmentFormData> = {
  // 2026 官網改版專案 - 草稿未送出
  'draft-2026-website': {
    id: 'draft-2026-website',
    date: '2026/01/01',
    department: '資訊科技部',
    projectName: '2026 官網改版專案',
    outsourcingType: '系統開發',
    operationType: '軟體開發',
    q1Answer: 'B',
    q2Answer: 'B',
    q3Answer: 'A',
    riskScore: 2.5,
    riskLevel: 'medium',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '本專案為官網改版，將採用最新的網頁技術，確保資訊安全與使用者體驗。供應商具備豐富的網站開發經驗，過往合作順利。',
    status: 'draft',
    supplier: '凱絡數位股份有限公司',
    deadline: '2026.04.15',
  },
  
  // AI 智慧客服系統建置案 - 草稿未送出
  'draft-2026-ai-service': {
    id: 'draft-2026-ai-service',
    date: '2026/01/10',
    department: '客戶服務部',
    projectName: 'AI 智慧客服系統建置案',
    outsourcingType: '系統開發',
    operationType: 'AI 系統建置',
    q1Answer: 'B',
    q2Answer: 'A',
    q3Answer: 'B',
    riskScore: 2.0,
    riskLevel: 'medium',
    status: 'draft',
    supplier: '碩網資訊股份有限公司',
    deadline: '2026.04.30',
  },
  
  // 集團人資系統雲端遷移案 - 已送出等待批准
  'sent-2026-hr-cloud': {
    id: 'sent-2026-hr-cloud',
    date: '2026/01/05',
    department: '人力資源部',
    projectName: '集團人資系統雲端遷移案',
    outsourcingType: '系統維運',
    operationType: '雲端服務',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'A',
    riskScore: 1.5,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '本案將人資系統遷移至雲端，提升系統穩定性與可擴展性。',
    status: 'sent',
    supplier: '數擎資訊股份有限公司',
    deadline: '2026.03.31',
  },
  
  // 企業資安防護升級案 - 已批准
  'approved-2026-security': {
    id: 'approved-2026-security',
    date: '2025/12/15',
    department: '資訊安全部',
    projectName: '企業資安防護升級案',
    outsourcingType: '資安服務',
    operationType: '防護系統建置',
    q1Answer: 'A',
    q2Answer: 'B',
    q3Answer: 'A',
    riskScore: 1.8,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '強化企業資安防護能力，導入新一代防火牆與入侵偵測系統。',
    status: 'approved',
    supplier: '中華電信股份有限公司',
    deadline: '2026.05.15',
  },
  
  // ERP 系統維運委外案 - 已逾期
  'overdue-2026-erp': {
    id: 'overdue-2026-erp',
    date: '2025/11/20',
    department: '財務部',
    projectName: 'ERP 系統維運委外案',
    outsourcingType: '系統維運',
    operationType: 'ERP 維護',
    riskScore: 3.5,
    riskLevel: 'high',
    status: 'overdue',
    supplier: '精誠資訊股份有限公司',
    deadline: '2026.05.01',
  },
  
  // 商業智慧平台建置案 - 已逾期
  'overdue-2026-bi': {
    id: 'overdue-2026-bi',
    date: '2025/10/15',
    department: '策略企劃部',
    projectName: '商業智慧平台建置案',
    outsourcingType: '系統開發',
    operationType: '數據分析平台',
    riskScore: 3.2,
    riskLevel: 'high',
    status: 'overdue',
    supplier: '台灣微軟股份有限公司',
    deadline: '2026.02.28',
  },

  // 更多 2025 年的已批准記錄
  'approved-2025-cloud-office': {
    id: 'approved-2025-cloud-office',
    date: '2025/02/01',
    department: '資訊科技部',
    projectName: '雲端辦公平台建置案',
    outsourcingType: '系統開發',
    operationType: '雲端服務',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'B',
    riskScore: 1.6,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '建置雲端辦公平台，提供員工遠端協作能力。',
    status: 'approved',
    supplier: 'Google Cloud Taiwan',
    deadline: '2025.03.20',
  },

  // 2024 年的已批准記錄
  'approved-2024-core-system': {
    id: 'approved-2024-core-system',
    date: '2024/05/01',
    department: '資訊科技部',
    projectName: '核心銀行系統升級案',
    outsourcingType: '系統維運',
    operationType: '系統升級',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'A',
    riskScore: 1.5,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '核心系統升級，提升系統穩定性與效能。',
    status: 'approved',
    supplier: '中華電信股份有限公司',
    deadline: '2024.06.30',
  },

  'approved-2024-network': {
    id: 'approved-2024-network',
    date: '2024/04/01',
    department: '網路工程部',
    projectName: '網路架構優化案',
    outsourcingType: '網路建置',
    operationType: '網路優化',
    q1Answer: 'A',
    q2Answer: 'B',
    q3Answer: 'A',
    riskScore: 1.7,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '優化企業網路架構，提升網路速度與穩定性。',
    status: 'approved',
    supplier: '思科台灣股份有限公司',
    deadline: '2024.05.15',
  },

  // 2023 年的已批准記錄
  'approved-2023-hr-system': {
    id: 'approved-2023-hr-system',
    date: '2023/05/01',
    department: '人力資源部',
    projectName: '人事薪資系統委外案',
    outsourcingType: '系統維運',
    operationType: '人事系統',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'A',
    riskScore: 1.3,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '人事薪資系統委外，降低維運成本。',
    status: 'approved',
    supplier: '鼎新電腦股份有限公司',
    deadline: '2023.06.15',
  },

  'approved-2023-document': {
    id: 'approved-2023-document',
    date: '2023/04/15',
    department: '行政管理部',
    projectName: '文件管理系統建置案',
    outsourcingType: '系統開發',
    operationType: '文件管理',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'B',
    riskScore: 1.6,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '建置電子文件管理系統，提升文件管理效率。',
    status: 'approved',
    supplier: '華碩雲端股份有限公司',
    deadline: '2023.05.30',
  },

  'approved-2023-website': {
    id: 'approved-2023-website',
    date: '2023/05/20',
    department: '行銷企劃部',
    projectName: '企業口網站改版案',
    outsourcingType: '系統開發',
    operationType: '網站開發',
    q1Answer: 'A',
    q2Answer: 'B',
    q3Answer: 'A',
    riskScore: 1.8,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '企業網站全面改版，提升使用者體驗。',
    status: 'approved',
    supplier: '凱絡數位股份有限公司',
    deadline: '2023.07.01',
  },

  // 2022 年的已批准記錄
  'approved-2022-network-cable': {
    id: 'approved-2022-network-cable',
    date: '2022/05/15',
    department: '總務部',
    projectName: '辦公室網路佈線案',
    outsourcingType: '網路建置',
    operationType: '網路佈線',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'A',
    riskScore: 1.2,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '新辦公室網路佈線工程。',
    status: 'approved',
    supplier: '中華電信股份有限公司',
    deadline: '2022.06.30',
  },

  'approved-2022-antivirus': {
    id: 'approved-2022-antivirus',
    date: '2022/04/20',
    department: '資訊安全部',
    projectName: '企業防毒軟體採購案',
    outsourcingType: '軟體採購',
    operationType: '資安軟體',
    q1Answer: 'A',
    q2Answer: 'A',
    q3Answer: 'B',
    riskScore: 1.5,
    riskLevel: 'low',
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '採購企業防毒軟體，保護公司資訊安全。',
    status: 'approved',
    supplier: '趨勢科技股份有限公司',
    deadline: '2022.05.15',
  },
};

// 問題1的選項文字
export const Q1_OPTIONS = {
  A: '涉及機密或敏感資料',
  B: '涉及屬於S02之一般系統軟體、屬於H02~H05',
  C: '涉及屬於S03之辦公室軟體、屬於H06~H09',
  D: '不涉及系統、硬體設備',
};

// 問題2的選項文字
export const Q2_OPTIONS = {
  A: '會存取或保管屬於F01之文件、屬於D01之資料',
  B: '會存取或保管屬於F02~F04、屬於D02~D04之文件及資料',
  C: '會存取或保管屬於F05~F06之文件、屬於D05~D06之資料',
  D: '不會存取或保管任何文件及資料',
};

// 問題3的選項文字
export const Q3_OPTIONS = {
  A: '透過網際網路與國泰投信進行傳輸連線',
  B: '透過國泰投信專線或VPN與國泰投信進行傳輸連線',
  C: '以實體媒體(如:光碟、隨身碟)進行資料交換或不需進行資料傳輸',
};

// 根據選項計算風險分數
export function calculateRiskScore(q1?: string, q2?: string, q3?: string): number {
  const scores: Record<string, number> = {
    'A': 4, 'B': 3, 'C': 2, 'D': 1
  };
  
  const q1Score = q1 ? scores[q1] || 0 : 0;
  const q2Score = q2 ? scores[q2] || 0 : 0;
  const q3Score = q3 ? scores[q3] || 0 : 0;
  
  return (q1Score + q2Score + q3Score) / 3;
}

// 根據分數判斷風險等級
export function getRiskLevel(score: number): 'high' | 'medium' | 'low' {
  if (score >= 3) return 'high';
  if (score >= 2) return 'medium';
  return 'low';
}

// 項目名稱到ID的映射
export const PROJECT_NAME_TO_ID: Record<string, string> = {
  '2026 官網改版專案': 'draft-2026-website',
  'AI 智慧客服系統建置案': 'draft-2026-ai-service',
  '集團人資系統雲端遷移案': 'sent-2026-hr-cloud',
  '企業資安防護升級案': 'approved-2026-security',
  'ERP 系統維運委外案': 'overdue-2026-erp',
  '商業智慧平台建置案': 'overdue-2026-bi',
  '雲端辦公平台建置案': 'approved-2025-cloud-office',
  '核心銀行系統升級案': 'approved-2024-core-system',
  '網路架構優化案': 'approved-2024-network',
  '人事薪資系統委外案': 'approved-2023-hr-system',
  '文件管理系統建置案': 'approved-2023-document',
  '企業口網站改版案': 'approved-2023-website',
  '辦公室網路佈線案': 'approved-2022-network-cable',
  '企業防毒軟體採購案': 'approved-2022-antivirus',
};

// 根據項目名稱獲取評估記錄
export function getAssessmentByProjectName(projectName: string): AssessmentFormData | undefined {
  const id = PROJECT_NAME_TO_ID[projectName];
  return id ? ASSESSMENT_RECORDS[id] : undefined;
}
