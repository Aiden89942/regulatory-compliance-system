// ==================== Company Lookup Utility ====================
// Shared company data for search matching across pages

export interface CompanyBasicInfo {
  name: string;
  taxId: string;
  industry: string;
  representative: string;
  address: string;
  phone: string;
  alertSummary: string;
  isSuspectedChinese?: boolean;
}

// 六家已知供應商完整資料
const KNOWN_COMPANIES: CompanyBasicInfo[] = [
  {
    name: '新加坡商認和科技有限公司',
    taxId: '90716929',
    industry: '管理顧問 / 資訊服務',
    representative: '劉*彤',
    address: '臺北市中山區南京東路二段97號8樓',
    phone: '02-25678900',
    alertSummary: '近一年新增 疑似中資5筆 、即時情資3筆 、疑似關係81筆',
    isSuspectedChinese: true,
  },
  {
    name: '碩網資訊股份有限公司',
    taxId: '70364799',
    industry: '系統規劃設計 / 軟體批發',
    representative: '張*達',
    address: '新北市新店區北新路1段86號20樓',
    phone: '02-29122100',
    alertSummary: '近一年新增 即時情資3筆 、司法判決21筆 、政府標案9筆 、疑似關係189筆',
  },
  {
    name: 'Microsoft 台灣微軟',
    taxId: '23526610',
    industry: '資訊軟體服務',
    representative: '卞*中',
    address: '臺北市信義區忠孝東路五段68號18樓',
    phone: '02-37259888',
    alertSummary: '近一年新增 即時情資2筆 、司法判決1筆 、政府標案48筆 、疑似關係120筆',
  },
  {
    name: 'Trend Micro 趨勢科技',
    taxId: '22099199',
    industry: '資訊安全服務',
    representative: '陳*妏',
    address: '臺北市大安區敦化南路二段198號8樓',
    phone: '02-23789666',
    alertSummary: '近一年新增 即時情資1筆 、政府標案22筆 、疑似關係58筆',
  },
  {
    name: 'Oracle 甲骨文',
    taxId: '16092025',
    industry: '資料庫軟體服務',
    representative: '潘*輝',
    address: '臺北市信義區松仁路100號15樓',
    phone: '02-21853000',
    alertSummary: '近一年新增 即時情資1筆 、司法判決2筆 、政府標案35筆 、疑似關係92筆 、違規裁罰1筆',
  },
  {
    name: 'Amazon Web Services',
    taxId: '54387291',
    industry: '雲端運算服務',
    representative: '謝*穎',
    address: '臺北市信義區信義路五段7號73樓',
    phone: '02-87265000',
    alertSummary: '近一年新增 即時情資1筆 、政府標案18筆 、疑似關係45筆',
  },
];

// 別名/關鍵字對照：每家公司可能被搜尋的各種關鍵字
const COMPANY_ALIASES: Record<string, string[]> = {
  '新加坡商認和科技有限公司': ['認和', '認和科技', '新加坡商認和', '90716929'],
  '碩網資訊股份有限公司': ['碩網', '碩網資訊', '70364799'],
  'Microsoft 台灣微軟': ['微軟', '台灣微軟', 'Microsoft', 'microsoft', '23526610'],
  'Trend Micro 趨勢科技': ['趨勢', '趨勢科技', 'Trend Micro', 'trend micro', 'Trend', '22099199'],
  'Oracle 甲骨文': ['甲骨文', 'Oracle', 'oracle', '16092025'],
  'Amazon Web Services': ['AWS', 'aws', 'Amazon', 'amazon', '54387291'],
};

/**
 * 模糊匹配搜尋：輸入關鍵字，回傳匹配的公司列表
 * - 完整名稱精確匹配 → 只回傳 1 家
 * - 部分關鍵字 → 回傳 3～5 家（已知 + 假資料補齊）
 * 支援：全名、部分名稱、別名/關鍵字、統編
 */
export function searchCompanies(query: string): CompanyBasicInfo[] {
  if (!query.trim()) return [];

  const q = query.trim();

  // 1. 完整名稱精確匹配 → 只回傳該公司
  const exactMatch = KNOWN_COMPANIES.find(c => c.name === q);
  if (exactMatch) return [exactMatch];

  // 2. 統編精確匹配 → 只回傳該公司
  const taxIdMatch = KNOWN_COMPANIES.find(c => c.taxId === q);
  if (taxIdMatch) return [taxIdMatch];

  // 3. 模糊匹配已知公司
  const results: CompanyBasicInfo[] = [];

  for (const company of KNOWN_COMPANIES) {
    // 名稱包含關鍵字 or 關鍵字包含名稱
    if (company.name.includes(q) || q.includes(company.name)) {
      results.push(company);
      continue;
    }

    // 名稱不分大小寫比對
    if (company.name.toLowerCase().includes(q.toLowerCase())) {
      results.push(company);
      continue;
    }

    // 別名/關鍵字匹配
    const aliases = COMPANY_ALIASES[company.name] || [];
    const matched = aliases.some(alias =>
      alias.includes(q) || q.includes(alias) ||
      alias.toLowerCase().includes(q.toLowerCase()) || q.toLowerCase().includes(alias.toLowerCase())
    );
    if (matched) {
      results.push(company);
      continue;
    }
  }

  // 4. 如果有部分匹配結果，補齊到 3～5 家
  if (results.length > 0) {
    const seed = hashStr(q);
    const targetCount = 3 + (seed % 3); // 3, 4, or 5
    const needed = targetCount - results.length;
    if (needed > 0) {
      const fakes = generateSimilarCompanies(q, needed, seed);
      results.push(...fakes);
    }
    return results.slice(0, 5); // 最多 5 家
  }

  // 5. 完全沒有匹配 → 回傳空陣列（顯示空狀態）
  return [];
}

/**
 * 精確查找：用完整公司名稱取得基本資料
 */
export function getCompanyBasicInfo(name: string): CompanyBasicInfo | null {
  return KNOWN_COMPANIES.find(c => c.name === name) || null;
}

/**
 * 解析搜尋關鍵字為完整公司名稱（用於導航到 detail page 時）
 */
export function resolveCompanyName(query: string): string {
  const results = searchCompanies(query);
  if (results.length > 0) {
    return results[0].name;
  }
  return query;
}

// ==================== Similar Company Generator ====================

/**
 * 根據關鍵字生成多筆「名稱包含該關鍵字」的假公司資料
 */
function generateSimilarCompanies(keyword: string, count: number, baseSeed: number): CompanyBasicInfo[] {
  const companyTemplates = [
    (kw: string) => `${kw}資訊股份有限公司`,
    (kw: string) => `${kw}國際顧問有限公司`,
    (kw: string) => `${kw}科技股份有限公司`,
    (kw: string) => `${kw}數位服務有限公司`,
    (kw: string) => `${kw}系統整合股份有限公司`,
    (kw: string) => `${kw}創新科技有限公司`,
    (kw: string) => `${kw}管理顧問股份有限公司`,
    (kw: string) => `${kw}雲端科技有限公司`,
    (kw: string) => `${kw}軟體開發股份有限公司`,
    (kw: string) => `${kw}企業解決方案有限公司`,
  ];

  const results: CompanyBasicInfo[] = [];

  for (let i = 0; i < count && i < companyTemplates.length; i++) {
    const seed = baseSeed + i * 7 + 13;
    const templateIdx = (baseSeed + i * 3) % companyTemplates.length;
    const companyName = companyTemplates[templateIdx](keyword);

    results.push(generateFakeBasicInfoWithName(companyName, seed));
  }

  return results;
}

/**
 * 用指定名稱生成假公司資料
 */
function generateFakeBasicInfoWithName(companyName: string, seed: number): CompanyBasicInfo {
  const r = (i: number) => seeded(seed, i);

  const taxId = String(10000000 + (seed % 89999999)).slice(0, 8);
  const surnames = ['王', '李', '張', '陳', '林', '黃', '吳', '劉', '蔡', '楊'];
  const lastChars = ['明', '華', '文', '宏', '偉', '志', '信', '誠', '德', '安'];
  const representative = `${surnames[Math.floor(r(1) * surnames.length)]}*${lastChars[Math.floor(r(2) * lastChars.length)]}`;

  const districts = [
    '臺北市中山區南京東路三段168號5樓',
    '臺北市內湖區瑞光路358號12樓',
    '臺北市信義區基隆路一段200號9樓',
    '新北市板橋區文化路二段250號6樓',
    '臺北市松山區復興北路167號10樓',
    '新北市新店區中興路三段3號7樓',
    '臺北市大安區忠孝東路四段285號11樓',
  ];
  const address = districts[Math.floor(r(3) * districts.length)];
  const phone = `02-${String(20000000 + Math.floor(r(4) * 9999999)).slice(0, 8)}`;

  const industries = ['資訊服務', '軟體開發', '系統整合', '資訊安全', '雲端運算', '電子商務', '數位行銷', '管理顧問'];
  const industry = industries[Math.floor(r(13) * industries.length)];

  const alertParts: string[] = [];
  const intelCount = 1 + Math.floor(r(5) * 3);
  alertParts.push(`即時情資${intelCount}筆`);
  if (r(6) > 0.5) alertParts.push(`司法判決${1 + Math.floor(r(7) * 15)}筆`);
  alertParts.push(`政府標案${2 + Math.floor(r(8) * 30)}筆`);
  alertParts.push(`疑似關係${10 + Math.floor(r(9) * 150)}筆`);
  if (r(10) > 0.7) alertParts.push(`違規裁罰${1 + Math.floor(r(11) * 3)}筆`);

  return {
    name: companyName,
    taxId,
    industry,
    representative,
    address,
    phone,
    alertSummary: `近一年新增 ${alertParts.join(' 、')}`,
  };
}

// ==================== Fake Basic Info Generator ====================

function hashStr(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seeded(seed: number, idx: number): number {
  const x = Math.sin(seed + idx) * 10000;
  return x - Math.floor(x);
}

function generateFakeBasicInfo(query: string): CompanyBasicInfo {
  const seed = hashStr(query);
  const r = (i: number) => seeded(seed, i);

  const taxId = String(10000000 + (seed % 89999999)).slice(0, 8);
  const surnames = ['王', '李', '張', '陳', '林', '黃', '吳', '劉', '蔡', '楊'];
  const lastChars = ['明', '華', '文', '宏', '偉', '志', '信', '誠', '德', '安'];
  const representative = `${surnames[Math.floor(r(1) * surnames.length)]}*${lastChars[Math.floor(r(2) * lastChars.length)]}`;

  const districts = [
    '臺北市中山區南京東路三段168號5樓',
    '臺北市內湖區瑞光路358號12樓',
    '臺北市信義區基隆路一段200號9樓',
    '新北市板橋區文化路二段250號6樓',
    '臺北市松山區復興北路167號10樓',
    '新北市新店區中興路三段3號7樓',
    '臺北市大安區忠孝東路四段285號11樓',
  ];
  const address = districts[Math.floor(r(3) * districts.length)];
  const phone = `02-${String(20000000 + Math.floor(r(4) * 9999999)).slice(0, 8)}`;

  const alertParts: string[] = [];
  const intelCount = 1 + Math.floor(r(5) * 3);
  alertParts.push(`即時情資${intelCount}筆`);
  if (r(6) > 0.5) alertParts.push(`司法判決${1 + Math.floor(r(7) * 15)}筆`);
  alertParts.push(`政府標案${2 + Math.floor(r(8) * 30)}筆`);
  alertParts.push(`疑似關係${10 + Math.floor(r(9) * 150)}筆`);
  if (r(10) > 0.7) alertParts.push(`違規裁罰${1 + Math.floor(r(11) * 3)}筆`);

  // 如果 query 看起來像公司名（含有「公司」、「有限」等），直接用作名稱
  // 否則加上後綴讓它看起來像公司名
  let companyName = query;
  if (!query.includes('公司') && !query.includes('有限') && !query.includes('Corp') && !query.includes('Inc') && !query.includes('Ltd')) {
    const suffixes = ['股份有限公司', '科技股份有限公司', '資訊股份有限公司'];
    companyName = `${query}${suffixes[Math.floor(r(12) * suffixes.length)]}`;
  }

  return {
    name: companyName,
    taxId,
    industry: (() => {
      const industries = ['資訊服務', '軟體開發', '系統整合', '資訊安全', '雲端運算', '電子商務', '數位行銷', '管理顧問'];
      return industries[Math.floor(r(13) * industries.length)];
    })(),
    representative,
    address,
    phone,
    alertSummary: `近一年新增 ${alertParts.join(' 、')}`,
  };
}

// ==================== Search History ====================

const SEARCH_HISTORY_KEY = 'searchHistory';
const MAX_HISTORY = 20;

export interface SearchHistoryItem {
  query: string;
  riskTypes: string[];
  timestamp: number;
}

/**
 * 取得搜尋紀錄（從 localStorage）
 */
export function getSearchHistory(): SearchHistoryItem[] {
  try {
    const raw = localStorage.getItem(SEARCH_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * 新增一筆搜尋紀錄
 * - 自動去重（相同 query 只保留最新一筆）
 * - 最多保留 MAX_HISTORY 筆
 */
export function addSearchHistory(query: string, riskTypes: string[]): void {
  if (!query.trim()) return;
  const history = getSearchHistory();
  // 移除舊的相同 query
  const filtered = history.filter(h => h.query !== query.trim());
  // 加到最前面
  filtered.unshift({ query: query.trim(), riskTypes, timestamp: Date.now() });
  // 限制數量
  const trimmed = filtered.slice(0, MAX_HISTORY);
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(trimmed));
}

/**
 * 刪除單筆搜尋紀錄
 */
export function removeSearchHistory(query: string): void {
  const history = getSearchHistory();
  const filtered = history.filter(h => h.query !== query);
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(filtered));
}

/**
 * 清空所有搜尋紀錄
 */
export function clearSearchHistory(): void {
  localStorage.removeItem(SEARCH_HISTORY_KEY);
}