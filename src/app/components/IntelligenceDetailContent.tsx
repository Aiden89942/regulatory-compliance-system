import { useState, useEffect, useRef, useCallback } from 'react';
import svgPaths from "../../imports/svg-lvyfjf5l2i";
import svgPathsNew from "../../imports/svg-9k9mhsgk1c";
import CompanyInfoModal from "./CompanyInfoModal";
import { getCompanyBasicInfo } from "./companyLookup";

interface IntelligenceDetailContentProps {
  onNavigate?: (page: string) => void;
  supplierName?: string;
  source?: 'intelligence-tracking' | 'quick-intelligence';
  selectedRiskTypes?: string[];
}

// Checkbox key → section ID mapping
const RISK_TYPE_TO_SECTION: Record<string, string> = {
  bidding: 'bidding-ban',
  judicial: 'judicial',
  government: 'government-bid',
  relationship: 'suspected-relation',
  penalty: 'penalty',
};

function isSectionVisible(sectionId: string, selectedRiskTypes?: string[]): boolean {
  if (!selectedRiskTypes || selectedRiskTypes.includes('all')) return true;
  // suspected-chinese and realtime-intel always visible
  if (sectionId === 'suspected-chinese' || sectionId === 'realtime-intel') return true;
  // Check if any selected risk type maps to this section
  return selectedRiskTypes.some(rt => RISK_TYPE_TO_SECTION[rt] === sectionId);
}

// ==================== Company Data Map ====================

interface RealtimeIntelItem { category: string; categoryColor: 'orange' | 'red'; date: string; time: string; source: string; sourceType: string; title: string; summary: string; }
interface JudicialItem { date: string; role: string; reason: string; court: string; note: string; }
interface GovernmentBidItem { date: string; agency: string; project: string; amount: string; }
interface RelationItem { name: string; status: string; representative: string; capital: string; establishDate: string; relation: string; }

interface CompanyInfo {
  taxId: string;
  industry: string;
  representative: string;
  hasDatabase: boolean;
  riskScore: number;
  riskGrade: string;
  riskColor: string;
  riskTrend: string;
  vulnHigh: number;
  vulnMedium: number;
  vulnLow: number;
  vulnTrend: string;
  repairPercent: number;
  repairDone: number;
  repairTotal: number;
  categories: { id: string; label: string; count: number }[];
  realtimeIntelData?: RealtimeIntelItem[];
  judicialData?: JudicialItem[];
  governmentBidData?: GovernmentBidItem[];
  relationData?: RelationItem[];
}

const COMPANY_DATA: Record<string, CompanyInfo> = {
  '新加坡商認和科技有限公司': {
    taxId: '90716929', industry: '管理顧問 / 資訊服務', representative: '劉*彤',
    hasDatabase: false,
    riskScore: 42, riskGrade: 'D 級', riskColor: '#ec5242', riskTrend: '比去年退步 12 分',
    vulnHigh: 3, vulnMedium: 2, vulnLow: 1, vulnTrend: '高風險比去年多 2 項',
    repairPercent: 40, repairDone: 2, repairTotal: 5,
    categories: [
      { id: 'suspected-chinese', label: '疑似中資', count: 5 }, { id: 'realtime-intel', label: '即時情資', count: 3 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 0 },
      { id: 'government-bid', label: '政府標案', count: 0 }, { id: 'suspected-relation', label: '疑似關係', count: 81 },
      { id: 'penalty', label: '違規裁罰', count: 0 },
    ],
  },
  '碩網資訊股份有限公司': {
    taxId: '70364799', industry: '系統規劃設計 / 軟體批發', representative: '張*達',
    hasDatabase: true,
    riskScore: 4, riskGrade: '低風險', riskColor: '#419d48', riskTrend: '比去年風險少 1 分',
    vulnHigh: 6, vulnMedium: 4, vulnLow: 2, vulnTrend: '高風險比去年少 3 項',
    repairPercent: 70, repairDone: 3, repairTotal: 5,
    categories: [
      { id: 'realtime-intel', label: '即時情資', count: 3 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 21 },
      { id: 'government-bid', label: '政府標案', count: 9 }, { id: 'suspected-relation', label: '疑似關係', count: 189 },
      { id: 'penalty', label: '違規裁罰', count: 0 },
    ],
    realtimeIntelData: [
      { category: '負面消息', categoryColor: 'orange', date: '2025/03/18', time: '14:00', source: 'iThome', sourceType: '科技媒體', title: '碩網 SmartRobot 雲端服務異常中斷，多家企業客戶受影響', summary: '碩網資訊旗下 SmartRobot 智能客服平台於凌晨發生服務異常，導致多家銀行與電信業者的線上客服功能中斷約 2 小時。碩網表示已緊急修復，初步判斷為雲端架構擴容時的設定錯誤所致。' },
      { category: '負面消息', categoryColor: 'orange', date: '2025/02/15', time: '09:00', source: '工商時報', sourceType: '財經媒體', title: '碩網資訊興櫃股價單日跌幅達 8%，市場關注 AI 產品競爭壓力', summary: '碩網資訊（7547）興櫃股價單日重挫 8%，法人指出主因為國際大廠 AI 聊天機器人產品強勢進入台灣市場，對碩網 SmartRobot 構成直接競爭壓力，加上近期營收成長放緩，引發投資人信心動搖。' },
      { category: '資安事件', categoryColor: 'red', date: '2025/02/14', time: '08:30', source: '數位時代', sourceType: '科技媒體', title: '碩網資訊客戶反映 API Gateway 回應延遲，部分服務中斷逾 30 分鐘', summary: '多家採用碩網 SmartKMS 知識管理系統的企業客戶反映，API Gateway 在尖峰時段回應延遲嚴重，部分客戶的內部知識庫搜尋功能中斷逾 30 分鐘。碩網表示已啟動緊急流量調配機制，正進行根因分析。' },
    ],
    judicialData: [
      { date: '2023-12-08', role: '被告', reason: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (112,司他,614)' },
      { date: '2023-12-04', role: '被告', reason: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (112,司他,614)' },
      { date: '2022-05-06', role: '原告', reason: '公示催告', court: '臺北地院', note: '裁定 (111,司催,789)' },
      { date: '2021-11-30', role: '原告', reason: '確定訴訟費用額', court: '新竹地院', note: '裁定 (110,司聲,384)' },
      { date: '2021-07-21', role: '被告', reason: '給付價金', court: '高等法院', note: '判決 (109,上易,1121)' },
      { date: '2021-01-25', role: '被告', reason: '給付價金', court: '高等法院', note: '判決 (109,上易,1121)' },
      { date: '2020-08-14', role: '被告', reason: '給付價金', court: '新竹地院', note: '判決 (107,訴,179)' },
      { date: '2020-03-12', role: '被告', reason: '履行合約', court: '新店簡易庭', note: '判決 (108,店簡,1564)' },
      { date: '2020-01-31', role: '被告', reason: '履行合約', court: '新店簡易庭', note: '判決 (108,店簡,1564)' },
      { date: '2019-01-07', role: '原告', reason: '給付價金', court: '新竹地院', note: '判決 (107,訴,179)' },
    ],
    governmentBidData: [
      { date: '2025-12-16', agency: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
      { date: '2025-12-15', agency: '臺北市政府資訊局', project: '市政訊息訂閱系統委託資訊服務採購案', amount: '270,000' },
      { date: '2025-12-11', agency: '桃園市政府工務局', project: '行動里長系統功能擴充案', amount: '1,799,925' },
      { date: '2025-11-21', agency: '立法院', project: '115年度新聞知識管理系統維護案', amount: '1,000,000' },
      { date: '2025-10-30', agency: '臺北市政府資訊局', project: '市政訊息訂閱系統委託資訊服務採購案', amount: '280,000' },
      { date: '2025-06-26', agency: '內政部移民署', project: '114至115年智能客服系統建置案', amount: '5,200,000' },
      { date: '2025-04-16', agency: '臺北市政府資訊局', project: '市政訊息訂閱及傳遞系統維護擴充案', amount: '310,000' },
      { date: '2025-03-03', agency: '臺灣銀行股份有限公司', project: '智能客服系統擴增知識點二年維護', amount: '263,000' },
      { date: '2025-01-23', agency: '台灣電力股份有限公司', project: '採購諮詢智能助理系統(SPAS)升級案', amount: '6,720,000' },
    ],
    relationData: [
      { name: '愛迪森斯股份有限公司', status: '營業中', representative: '區光穎', capital: '5,500,000', establishDate: '2011-03-14', relation: '同名董監事：張育達、區光穎' },
      { name: '碩網前瞻科技股份有限公司', status: '營業中', representative: '似・波', capital: '5,000,000', establishDate: '2004-06-23', relation: '同名董監事：張育達、D C 波' },
      { name: '卓越創新數位科技股份有限公司', status: '營業中', representative: '似・波', capital: '10,000,000', establishDate: '2003-06-05', relation: '同・董監事：張育達、張宏綺' },
      { name: '碩亞產業控股股份有限公司', status: '營業中', representative: '豐新命', capital: '30,000,000', establishDate: '2022-08-29', relation: '同名董監事：張育達、A．H' },
      { name: '東中國際科技有限公司', status: '營業中', representative: '鄭芝心', capital: '200,000', establishDate: '2014-09-17', relation: '投資公司關係：碩亞控股' },
      { name: '益展網路科技股份有限公司', status: '營業中', representative: '似・波', capital: '284,470,710', establishDate: '2014-03-04', relation: '同名董監事：張育達' },
      { name: '合凱網路科技股份有限公司', status: '營業中', representative: '鄭芝心', capital: '200,000,000', establishDate: '2012-04-09', relation: '同名董監事：張育達' },
      { name: '碩科管理股份有限公司', status: '營業中', representative: '似・波', capital: '100,000,000', establishDate: '2018-01-05', relation: '同名董監事：張育達' },
      { name: '智泰工業股份有限公司', status: '營業中', representative: '似・波', capital: '2,900,000,000', establishDate: '1979-11-08', relation: '行政書狀送達：同地址' },
      { name: '新聯工業股份有限公司', status: '營業中', representative: '似・波', capital: '2,500,495,006', establishDate: '1979-11-07', relation: '行政書狀送達：同地址' },
    ],
  },
  'Microsoft 台灣微軟': {
    taxId: '23526610', industry: '資訊軟體服務', representative: '卞*中',
    hasDatabase: true,
    riskScore: 4, riskGrade: '低風險', riskColor: '#419d48', riskTrend: '比去年風險少 1 分',
    vulnHigh: 1, vulnMedium: 3, vulnLow: 5, vulnTrend: '高風險比去年少 1 項',
    repairPercent: 90, repairDone: 9, repairTotal: 10,
    categories: [
      { id: 'realtime-intel', label: '即時情資', count: 2 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 1 },
      { id: 'government-bid', label: '政府標案', count: 48 }, { id: 'suspected-relation', label: '疑似關係', count: 120 },
      { id: 'penalty', label: '違規裁罰', count: 0 },
    ],
    realtimeIntelData: [
      { category: '資安事件', categoryColor: 'red' as const, date: '2025/05/15', time: '10:30', source: 'iThome', sourceType: '科技媒體', title: 'Microsoft Azure 雲端服務區域性中斷事件', summary: 'Microsoft Azure 東亞區域今日發生大規模服務中斷，影響台灣多家企業用戶，預計 6 小時內恢復。' },
      { category: '負面消息', categoryColor: 'orange' as const, date: '2025/04/28', time: '08:45', source: 'TWCERT', sourceType: '資安組織', title: 'Microsoft 365 資安更新修補遠端程式碼執行漏洞', summary: 'Microsoft 發布安全更新，修補 Exchange Server 及 SharePoint 中多個高風險漏洞（CVE-2025-21198）。' },
    ],
    judicialData: [
      { date: '2024-08-12', role: '原告', reason: '軟體授權爭議', court: '臺灣臺北地方法院', note: '民事判決' },
    ],
    governmentBidData: [
      { date: '2025-03-18', agency: '行政院資通安全處', project: '政府雲端安全防護平台建置案', amount: '128,500,000' },
      { date: '2025-02-25', agency: '數位發展部', project: 'Microsoft 365 政府版授權採購案', amount: '95,200,000' },
      { date: '2025-01-30', agency: '臺北市政府資訊局', project: 'Azure 雲端基礎設施租賃案', amount: '42,800,000' },
      { date: '2024-12-20', agency: '財政部財政資訊中心', project: '資料庫系統升級暨維護案', amount: '38,600,000' },
      { date: '2024-11-15', agency: '衛生福利部', project: '健保資訊系統雲端遷移案', amount: '67,300,000' },
      { date: '2024-10-08', agency: '國防部資通電軍指揮部', project: '資安防護軟體採購案', amount: '85,000,000' },
      { date: '2024-09-22', agency: '交通部公路局', project: '智慧交通雲端平台建置案', amount: '53,200,000' },
      { date: '2024-08-14', agency: '內政部移民署', project: 'Office 365 授權暨導入服務案', amount: '28,900,000' },
      { date: '2024-07-05', agency: '勞動部勞動力發展署', project: '就業媒合系統雲端化案', amount: '31,500,000' },
      { date: '2024-06-18', agency: '經濟部工業局', project: '產業數位轉型輔導平台案', amount: '22,700,000' },
    ],
    relationData: [
      { name: '台灣微軟投資股份有限公司', status: '營業中', representative: '卞志中', capital: '1,200,000,000', establishDate: '2005-07-15', relation: '同一集團：母子公司' },
      { name: '微軟亞太研發集團', status: '營業中', representative: '張益肇', capital: '500,000,000', establishDate: '2008-03-20', relation: '同一集團：關聯企業' },
      { name: '領英台灣有限公司', status: '營業中', representative: '卞志中', capital: '50,000,000', establishDate: '2015-06-10', relation: '同名董監事：卞志中' },
      { name: 'GitHub Taiwan Ltd.', status: '營業中', representative: '李宏偉', capital: '30,000,000', establishDate: '2019-01-25', relation: '同一集團：子公司' },
      { name: '明基逐鹿股份有限公司', status: '營業中', representative: '王伯元', capital: '80,000,000', establishDate: '2002-09-12', relation: '合作夥伴：經銷商' },
      { name: '精誠資訊股份有限公司', status: '營業中', representative: '黃士軍', capital: '2,500,000,000', establishDate: '1997-04-18', relation: '合作夥伴：金牌經銷商' },
      { name: '中華電信股份有限公司', status: '營業中', representative: '郭水義', capital: '77,574,474,820', establishDate: '1996-07-01', relation: '合作夥伴：雲端合作' },
      { name: '緯創資通股份有限公司', status: '營業中', representative: '林憲銘', capital: '25,821,227,870', establishDate: '2001-05-30', relation: '合作夥伴：硬體供應' },
      { name: '凌群電腦股份有限公司', status: '營業中', representative: '劉瑞隆', capital: '2,300,000,000', establishDate: '1980-02-20', relation: '合作夥伴：系統整合' },
      { name: '叡揚資訊股份有限公司', status: '營業中', representative: '張培鎮', capital: '430,000,000', establishDate: '1987-12-01', relation: '合作夥伴：軟體代理' },
    ],
  },
  'Trend Micro 趨勢科技': {
    taxId: '22099199', industry: '資訊安全服務', representative: '陳*妏',
    hasDatabase: true,
    riskScore: 5, riskGrade: '中風險', riskColor: '#419d48', riskTrend: '比去年風險少 2 分',
    vulnHigh: 0, vulnMedium: 2, vulnLow: 4, vulnTrend: '高風險比去年少 1 項',
    repairPercent: 85, repairDone: 6, repairTotal: 7,
    categories: [
      { id: 'realtime-intel', label: '即時情資', count: 1 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 0 },
      { id: 'government-bid', label: '政府標案', count: 22 }, { id: 'suspected-relation', label: '疑似關係', count: 58 },
      { id: 'penalty', label: '違規裁罰', count: 0 },
    ],
    realtimeIntelData: [
      { category: '負面消息', categoryColor: 'orange' as const, date: '2025/04/10', time: '11:00', source: 'iThome', sourceType: '科技媒體', title: '趨勢科技發布 2025 年度資安威脅報告', summary: '報告指出勒索軟體攻擊較去年增加 37%，AI 驅動的釣魚攻擊成為新興威脅。' },
    ],
    governmentBidData: [
      { date: '2025-02-20', agency: '數位發展部資通安全署', project: '政府機關端點防護軟體採購案', amount: '45,600,000' },
      { date: '2025-01-12', agency: '臺北市政府資訊局', project: '市府資安防護系統維護案', amount: '18,300,000' },
      { date: '2024-11-28', agency: '行政院主計總處', project: '電子郵件安全閘道服務案', amount: '12,500,000' },
      { date: '2024-10-15', agency: '內政部警政署', project: '刑事警察局資安偵防系統案', amount: '32,800,000' },
      { date: '2024-09-05', agency: '法務部調查局', project: '網路威脅情資分析平台案', amount: '28,000,000' },
      { date: '2024-08-20', agency: '國家安全局', project: '進階持續性威脅防護系統案', amount: '55,200,000' },
      { date: '2024-07-10', agency: '中央銀行', project: '金融資安防護系統升級案', amount: '22,100,000' },
      { date: '2024-06-25', agency: '台灣證券交易所', project: '資安監控中心(SOC)建置案', amount: '38,700,000' },
      { date: '2024-05-15', agency: '中華郵政股份有限公司', project: '郵務系統資安防護案', amount: '15,400,000' },
      { date: '2024-04-08', agency: '台灣電力股份有限公司', project: '關鍵基礎設施資安防護案', amount: '42,000,000' },
    ],
    relationData: [
      { name: '趨勢科技全球股份有限公司', status: '營業中', representative: '陳怡樺', capital: '3,500,000,000', establishDate: '1988-10-24', relation: '同一集團：母公司' },
      { name: '趨勢科技投資股份有限公司', status: '營業中', representative: '陳怡樺', capital: '800,000,000', establishDate: '2002-05-15', relation: '同一集團：子公司' },
      { name: '趨勢創新股份有限公司', status: '營業中', representative: '張明正', capital: '100,000,000', establishDate: '2015-08-20', relation: '同名董監事：張明正' },
      { name: '台灣資安鑄造股份有限公司', status: '營業中', representative: '洪偉淦', capital: '50,000,000', establishDate: '2019-03-12', relation: '同名董監事：洪偉淦' },
      { name: '安碁資訊股份有限公司', status: '營業中', representative: '吳乙南', capital: '680,000,000', establishDate: '2000-01-10', relation: '合作夥伴：資安服務' },
      { name: '數聯資安股份有限公司', status: '營業中', representative: '鄭博文', capital: '450,000,000', establishDate: '2004-07-22', relation: '合作夥伴：SOC 服務' },
      { name: '中華資安國際股份有限公司', status: '營業中', representative: '廖龍光', capital: '200,000,000', establishDate: '2017-02-08', relation: '合作夥伴：滲透測試' },
      { name: '奧義智慧科技股份有限公司', status: '營業中', representative: '邱銘彰', capital: '150,000,000', establishDate: '2017-04-15', relation: '合作夥伴：端點偵測' },
      { name: '果核數位股份有限公司', status: '營業中', representative: '丁瑞明', capital: '80,000,000', establishDate: '2006-09-30', relation: '合作夥伴：弱點掃描' },
      { name: '關貿網路股份有限公司', status: '營業中', representative: '連國洲', capital: '1,300,000,000', establishDate: '1996-12-20', relation: '合作夥伴：政府專案' },
    ],
  },
  'Oracle 甲骨文': {
    taxId: '16092025', industry: '資料庫軟體服務', representative: '潘*輝',
    hasDatabase: true,
    riskScore: 6, riskGrade: '中風險', riskColor: '#419d48', riskTrend: '比去年風險少 1 分',
    vulnHigh: 2, vulnMedium: 5, vulnLow: 3, vulnTrend: '高風險比去年少 2 項',
    repairPercent: 75, repairDone: 6, repairTotal: 8,
    categories: [
      { id: 'realtime-intel', label: '即時情資', count: 1 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 2 },
      { id: 'government-bid', label: '政府標案', count: 35 }, { id: 'suspected-relation', label: '疑似關係', count: 92 },
      { id: 'penalty', label: '違規裁罰', count: 1 },
    ],
    realtimeIntelData: [
      { category: '資安事件', categoryColor: 'red' as const, date: '2025/03/22', time: '09:15', source: 'TWCERT', sourceType: '資安組織', title: 'Oracle Cloud Infrastructure 修補重大安全漏洞', summary: 'Oracle 發布緊急安全修補，影響 OCI 租戶隔離機制，建議立即更新（CVE-2025-30128）。' },
    ],
    judicialData: [
      { date: '2024-06-20', role: '原告', reason: '軟體著作權侵害', court: '臺灣臺北地方法院', note: '民事判決' },
      { date: '2023-11-08', role: '原告', reason: '資料庫授權違約', court: '臺灣臺北地方法院', note: '民事裁定' },
    ],
    governmentBidData: [
      { date: '2025-03-05', agency: '財政部財政資訊中心', project: 'Oracle 資料庫授權暨維護案', amount: '68,500,000' },
      { date: '2025-01-18', agency: '中央健康保險署', project: '健保核心系統資料庫升級案', amount: '125,000,000' },
      { date: '2024-12-10', agency: '內政部戶政司', project: '戶籍資料庫系統維運案', amount: '42,300,000' },
      { date: '2024-11-05', agency: '交通部公路總局', project: '監理資訊系統資料庫維護案', amount: '28,700,000' },
      { date: '2024-10-20', agency: '勞動部勞工保險局', project: '勞保系統資料庫授權採購案', amount: '55,800,000' },
      { date: '2024-09-12', agency: '經濟部智慧財產局', project: '專利資料庫管理系統案', amount: '18,200,000' },
      { date: '2024-08-08', agency: '司法院', project: '司法資訊系統資料庫維護案', amount: '35,600,000' },
      { date: '2024-07-15', agency: '國稅局', project: '稅務資訊系統中介軟體採購案', amount: '48,900,000' },
      { date: '2024-06-03', agency: '台灣銀行', project: '核心銀行系統資料庫授權案', amount: '72,000,000' },
      { date: '2024-05-20', agency: '臺北市政府衛生局', project: '醫療資訊整合平台資料庫案', amount: '15,800,000' },
    ],
    relationData: [
      { name: '甲骨文台灣有限公司', status: '營業中', representative: '潘奕輝', capital: '800,000,000', establishDate: '1989-06-15', relation: '同一集團：在地法人' },
      { name: '甲骨文研發中心', status: '營業中', representative: '潘奕輝', capital: '300,000,000', establishDate: '2005-03-20', relation: '同一集團：研發據點' },
      { name: 'NetSuite 台灣分公司', status: '營業中', representative: '李宗憲', capital: '50,000,000', establishDate: '2016-11-08', relation: '同一集團：子品牌' },
      { name: '恆逸資訊股份有限公司', status: '營業中', representative: '蔡明志', capital: '120,000,000', establishDate: '1995-02-28', relation: '合作夥伴：教育訓練' },
      { name: '宏碁資訊服務股份有限公司', status: '營業中', representative: '萬以寧', capital: '2,100,000,000', establishDate: '1998-01-05', relation: '合作夥伴：系統整合' },
      { name: '零壹科技股份有限公司', status: '營業中', representative: '邱垂泓', capital: '1,200,000,000', establishDate: '1980-08-15', relation: '合作夥伴：經銷代理' },
      { name: '新加坡商甲骨文科技有限公司', status: '營業中', representative: '潘奕輝', capital: '150,000,000', establishDate: '2010-04-12', relation: '同名董監事：潘奕輝' },
      { name: '鼎新電腦股份有限公司', status: '營業中', representative: '葉子禎', capital: '3,800,000,000', establishDate: '1982-12-01', relation: '合作夥伴：ERP 整合' },
      { name: '大同世界科技股份有限公司', status: '營業中', representative: '沈柏延', capital: '1,500,000,000', establishDate: '1999-03-18', relation: '合作夥伴：代理銷售' },
      { name: '中菲電腦股份有限公司', status: '營業中', representative: '陳世信', capital: '600,000,000', establishDate: '1992-07-20', relation: '合作夥伴：維運服務' },
    ],
  },
  'Amazon Web Services': {
    taxId: '54387291', industry: '雲端運算服務', representative: '謝*穎',
    hasDatabase: true,
    riskScore: 3, riskGrade: '低風險', riskColor: '#419d48', riskTrend: '與去年持平',
    vulnHigh: 1, vulnMedium: 2, vulnLow: 6, vulnTrend: '高風險比去年少 2 項',
    repairPercent: 88, repairDone: 7, repairTotal: 8,
    categories: [
      { id: 'realtime-intel', label: '即時情資', count: 1 },
      { id: 'bidding-ban', label: '標案拒往', count: 0 }, { id: 'judicial', label: '司法判決', count: 0 },
      { id: 'government-bid', label: '政府標案', count: 18 }, { id: 'suspected-relation', label: '疑似關係', count: 45 },
      { id: 'penalty', label: '違規裁罰', count: 0 },
    ],
    realtimeIntelData: [
      { category: '資安事件', categoryColor: 'red' as const, date: '2025/04/02', time: '07:30', source: 'AWS Health Dashboard', sourceType: '官方公告', title: 'AWS 台北區域 (ap-northeast-1) S3 服務異常通知', summary: 'AWS S3 於亞太區域發生間歇性存取延遲，影響部分客戶的物件儲存服務，已於 4 小時內修復。' },
    ],
    governmentBidData: [
      { date: '2025-02-28', agency: '數位發展部', project: '政府雲端共構平台(GovCloud)擴充案', amount: '185,000,000' },
      { date: '2025-01-20', agency: '行政院主計總處', project: '政府統計雲端運算服務案', amount: '32,500,000' },
      { date: '2024-12-15', agency: '經濟部中小及新創企業署', project: '新創雲端加速計畫案', amount: '25,000,000' },
      { date: '2024-11-08', agency: '科技部', project: '國家高速網路中心雲端資源案', amount: '58,700,000' },
      { date: '2024-10-22', agency: '中央氣象署', project: '氣象資料雲端運算平台案', amount: '42,300,000' },
      { date: '2024-09-18', agency: '農業部', project: '智慧農業雲端資料平台案', amount: '18,600,000' },
      { date: '2024-08-05', agency: '環境部', project: '環境監測雲端資料湖建置案', amount: '35,200,000' },
      { date: '2024-07-12', agency: '國家發展委員會', project: '開放資料雲端平台維運案', amount: '22,800,000' },
      { date: '2024-06-20', agency: '台灣中油股份有限公司', project: '企業雲端遷移暨維護案', amount: '48,500,000' },
      { date: '2024-05-10', agency: '中華郵政股份有限公司', project: '郵務數位轉型雲端服務案', amount: '28,900,000' },
    ],
    relationData: [
      { name: 'Amazon Web Services Taiwan Ltd.', status: '營業中', representative: '謝佩穎', capital: '500,000,000', establishDate: '2014-09-01', relation: '同一集團：在地法人' },
      { name: 'AWS 大中華區合資公司', status: '營業中', representative: '張文翊', capital: '200,000,000', establishDate: '2017-06-15', relation: '同一集團：區域公司' },
      { name: '伊雲谷數位科技股份有限公司', status: '營業中', representative: '蔡佳宏', capital: '320,000,000', establishDate: '2013-08-20', relation: '合作夥伴：進階合作夥伴' },
      { name: '博弘雲端科技股份有限公司', status: '營業中', representative: '廖紫岑', capital: '250,000,000', establishDate: '2014-01-10', relation: '合作夥伴：託管服務' },
      { name: '銓鍇國際股份有限公司', status: '營業中', representative: '鄭國敏', capital: '180,000,000', establishDate: '2009-05-28', relation: '合作夥伴：雲端代理' },
      { name: '騰雲科技服務股份有限公司', status: '營業中', representative: '沈志明', capital: '150,000,000', establishDate: '2016-03-12', relation: '合作夥伴：諮詢服務' },
      { name: '光世代建設開發股份有限公司', status: '營業中', representative: '李佳峰', capital: '2,000,000,000', establishDate: '2011-07-08', relation: '合作夥伴：資料中心' },
      { name: '中華電信股份有限公司', status: '營業中', representative: '郭水義', capital: '77,574,474,820', establishDate: '1996-07-01', relation: '合作夥伴：Direct Connect' },
      { name: '遠傳電信股份有限公司', status: '營業中', representative: '井琪', capital: '32,648,535,130', establishDate: '1997-04-11', relation: '合作夥伴：雲端通路' },
      { name: '台灣大哥大股份有限公司', status: '營業中', representative: '林之晨', capital: '35,800,000,000', establishDate: '1997-02-25', relation: '合作夥伴：企業雲端' },
    ],
  },
};

// ==================== Fake Data Generator ====================

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededRandom(seed: number, index: number): number {
  const x = Math.sin(seed + index) * 10000;
  return x - Math.floor(x);
}

function pick<T>(arr: T[], seed: number, index: number): T {
  return arr[Math.floor(seededRandom(seed, index) * arr.length)];
}

function generateFakeCompanyData(name: string): CompanyInfo {
  const seed = hashString(name);
  const r = (i: number) => seededRandom(seed, i);

  const taxId = String(10000000 + (seed % 89999999)).slice(0, 8);
  const industries = ['資訊軟體服務', '系統整合服務', '雲端運算服務', '資訊安全服務', '電子商務', '數據分析服務', '物聯網技術服務', '人工智慧應用', '金融科技服務', '數位行銷服務'];
  const industry = pick(industries, seed, 1);
  const surnames = ['王', '李', '張', '陳', '林', '黃', '吳', '劉', '蔡', '楊', '許', '鄭', '謝', '洪', '郭'];
  const lastChars = ['明', '華', '文', '宏', '偉', '志', '信', '誠', '德', '安', '傑', '豪', '翔', '龍', '瑋'];
  const representative = `${pick(surnames, seed, 2)}*${pick(lastChars, seed, 3)}`;

  const riskScore = 55 + Math.floor(r(4) * 40);
  const riskGrade = riskScore >= 90 ? 'A 級' : riskScore >= 80 ? 'B+ 級' : riskScore >= 70 ? 'B 級' : riskScore >= 60 ? 'C 級' : 'D 級';
  const riskColor = riskScore >= 70 ? '#419d48' : riskScore >= 55 ? '#ee762f' : '#ec5242';
  const trendVal = Math.floor(r(5) * 8) - 2;
  const riskTrend = trendVal > 0 ? `比去年進步 ${trendVal} 分` : trendVal < 0 ? `比去年退步 ${Math.abs(trendVal)} 分` : '與去年持平';

  const vulnHigh = Math.floor(r(6) * 4);
  const vulnMedium = 1 + Math.floor(r(7) * 5);
  const vulnLow = 1 + Math.floor(r(8) * 6);
  const vulnTrendVal = Math.floor(r(9) * 4) - 1;
  const vulnTrend = vulnTrendVal > 0 ? `高風險比去年多 ${vulnTrendVal} 項` : vulnTrendVal < 0 ? `高風險比去年少 ${Math.abs(vulnTrendVal)} 項` : '高風險與去年持平';
  const repairTotal = 3 + Math.floor(r(10) * 8);
  const repairDone = Math.floor(r(11) * repairTotal) + 1;
  const repairPercent = Math.round((repairDone / repairTotal) * 100);

  const judicialCount = Math.floor(r(12) * 8);
  const govBidCount = 2 + Math.floor(r(13) * 30);
  const relationCount = 10 + Math.floor(r(14) * 180);

  const categories = [
    { id: 'realtime-intel', label: '即時情資', count: 1 + Math.floor(r(15) * 3) },
    { id: 'bidding-ban', label: '標案拒往', count: r(16) > 0.8 ? 1 : 0 },
    { id: 'judicial', label: '司法判決', count: judicialCount },
    { id: 'government-bid', label: '政府標案', count: govBidCount },
    { id: 'suspected-relation', label: '疑似關係', count: relationCount },
    { id: 'penalty', label: '違規裁罰', count: r(17) > 0.7 ? 1 + Math.floor(r(18) * 2) : 0 },
  ];

  // Generate realistic sub-data
  const intelCategories: Array<{ cat: string; color: 'orange' | 'red' }> = [
    { cat: '負面消息', color: 'orange' }, { cat: '資安事件', color: 'red' },
  ];
  const intelSources = ['iThome', 'TWCERT', '工商時報', '數位時代', '經濟日報', '自由時報'];
  const intelSourceTypes = ['科技媒體', '資安組織', '財經媒體', '科技媒體', '財經媒體', '新聞媒體'];
  const intelTitles = [
    [`${name}雲端服務發生短暫中斷事件`, `${name}旗下平台發生服務異常，約 1 小時後恢復正常。初步判斷為流量突增導致負載平衡器異常。`],
    [`${name}修補多項高風險安全漏洞`, `${name}發布安全更新，修補產品中數個遠端程式碼執行漏洞，建議客戶儘速更新至最新版本。`],
    [`${name}年度營收成長趨緩，法人下修評等`, `受整體市場景氣影響，${name}本季營收較上季衰退約 5%，多家法人機構下修其投資評等。`],
  ];

  const realtimeIntelData: RealtimeIntelItem[] = [];
  const intelCount = categories.find(c => c.id === 'realtime-intel')!.count;
  for (let i = 0; i < Math.min(intelCount, 3); i++) {
    const catInfo = pick(intelCategories, seed, 20 + i);
    const srcIdx = Math.floor(r(25 + i) * intelSources.length);
    const titleInfo = pick(intelTitles, seed, 30 + i);
    const month = 1 + Math.floor(r(35 + i) * 5);
    const day = 1 + Math.floor(r(40 + i) * 28);
    realtimeIntelData.push({
      category: catInfo.cat, categoryColor: catInfo.color,
      date: `2025/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`,
      time: `${String(8 + Math.floor(r(45 + i) * 10)).padStart(2, '0')}:${String(Math.floor(r(50 + i) * 4) * 15).padStart(2, '0')}`,
      source: intelSources[srcIdx], sourceType: intelSourceTypes[srcIdx],
      title: titleInfo[0], summary: titleInfo[1],
    });
  }

  const courts = ['臺灣臺北地方法院', '臺灣新北地方法院', '臺灣桃園地方法院', '臺灣臺中地方法院', '臺灣高雄地方法院'];
  const judicialReasons = ['給付價金', '履行合約', '損害賠償', '軟體授權爭議', '返還不當得利', '確認債權存在'];
  const judicialData: JudicialItem[] = [];
  for (let i = 0; i < Math.min(judicialCount, 10); i++) {
    const year = 2020 + Math.floor(r(60 + i) * 5);
    const month = 1 + Math.floor(r(65 + i) * 12);
    const day = 1 + Math.floor(r(70 + i) * 28);
    judicialData.push({
      date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      role: r(75 + i) > 0.5 ? '原告' : '被告',
      reason: pick(judicialReasons, seed, 80 + i),
      court: pick(courts, seed, 85 + i),
      note: r(90 + i) > 0.5 ? '民事判決' : '民事裁定',
    });
  }
  judicialData.sort((a, b) => b.date.localeCompare(a.date));

  const agencies = ['數位發展部', '行政院主計總處', '臺北市政府資訊局', '財政部財政資訊中心', '經濟部', '內政部', '交通部', '衛生福利部', '勞動部', '國防部', '教育部', '法務部'];
  const projectPrefixes = ['資訊系統維運案', '雲端服務採購案', '軟體授權續約案', '平台建置暨維護案', '資安防護系統案', '數位轉型輔導案', '資料庫管理案', '網路設備更新案'];
  const governmentBidData: GovernmentBidItem[] = [];
  for (let i = 0; i < Math.min(govBidCount, 10); i++) {
    const year = 2024 + (i < 3 ? 1 : 0);
    const month = 1 + Math.floor(r(100 + i) * 12);
    const day = 1 + Math.floor(r(110 + i) * 28);
    const amount = (5 + Math.floor(r(120 + i) * 80)) * 100000;
    governmentBidData.push({
      date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      agency: pick(agencies, seed, 130 + i),
      project: pick(projectPrefixes, seed, 140 + i),
      amount: amount.toLocaleString(),
    });
  }
  governmentBidData.sort((a, b) => b.date.localeCompare(a.date));

  const companyPrefixes = ['宏通', '瑞智', '群益', '富邦', '永豐', '合勤', '正文', '友達', '聯發', '力晶'];
  const companySuffixes = ['科技股份有限公司', '資訊股份有限公司', '數位股份有限公司', '系統股份有限公司', '網路股份有限公司'];
  const relationTypes = ['同名董監事', '合作夥伴：經銷商', '合作夥伴：系統整合', '投資公司關係', '同一集團：子公司', '行政書狀送達：同地址', '合作夥伴：代理銷售'];
  const relationData: RelationItem[] = [];
  for (let i = 0; i < 10; i++) {
    const capital = (1 + Math.floor(r(150 + i) * 50)) * 10000000;
    const estYear = 1990 + Math.floor(r(160 + i) * 30);
    const estMonth = 1 + Math.floor(r(170 + i) * 12);
    const estDay = 1 + Math.floor(r(180 + i) * 28);
    relationData.push({
      name: `${pick(companyPrefixes, seed, 190 + i)}${pick(companySuffixes, seed, 200 + i)}`,
      status: r(210 + i) > 0.1 ? '營業中' : '已停業',
      representative: `${pick(surnames, seed, 220 + i)}${pick(lastChars, seed, 230 + i)}${pick(lastChars, seed, 240 + i)}`,
      capital: capital.toLocaleString(),
      establishDate: `${estYear}-${String(estMonth).padStart(2, '0')}-${String(estDay).padStart(2, '0')}`,
      relation: pick(relationTypes, seed, 250 + i),
    });
  }

  return {
    taxId, industry, representative, hasDatabase: false,
    riskScore, riskGrade, riskColor, riskTrend,
    vulnHigh, vulnMedium, vulnLow, vulnTrend, repairPercent, repairDone, repairTotal,
    categories, realtimeIntelData, judicialData, governmentBidData, relationData,
  };
}

const _generatedCache: Record<string, CompanyInfo> = {};

function getCompanyInfo(name: string): CompanyInfo {
  if (COMPANY_DATA[name]) return COMPANY_DATA[name];
  if (!_generatedCache[name]) {
    _generatedCache[name] = generateFakeCompanyData(name);
  }
  return _generatedCache[name];
}

// ==================== Data ====================

const CATEGORIES = [
  { id: 'suspected-chinese', label: '疑似中資', count: 5 },
  { id: 'realtime-intel', label: '即時情資', count: 3 },
  { id: 'bidding-ban', label: '標案拒往', count: 0 },
  { id: 'judicial', label: '司法判決', count: 0 },
  { id: 'government-bid', label: '政府標案', count: 0 },
  { id: 'suspected-relation', label: '疑似關係', count: 81 },
  { id: 'penalty', label: '違規裁罰', count: 0 },
];

const SUSPECTED_CHINESE_DATA = [
  {
    year: '2023 年',
    content: '《認和科技》與數十間中國銀行合作，並參與《華為》年度合作夥伴演講。',
    alert: '這間公司因為利益而與侵台對象合作。',
  },
  {
    year: '2025年',
    content: '《認和科技》將軟體上架至《華為雲》，其聯絡信箱「guohai.weng@anytxn.sg」的中文譯名與《江融信科技》董事「翁國海」相同，而《江融信科技》亦有同名產品方案 ANYTXN。',
    alert: null,
  },
  {
    year: '-',
    content: '《認和科技》官網列出的合作夥伴與《江融信科技》客戶完全相同，且《江融信科技》表示於 2020 年成立新加坡公司，也與《認和科技》成立時間恰好吻合。',
    alert: null,
  },
  {
    year: '-',
    content: '《認和科技》為《江融信科技》旗下公司。',
    alert: null,
  },
  {
    year: '-',
    content: '《江融信科技》的大股東有《深圳國中創投基金》，該基金由中國財政部實際控制。',
    alert: '這間公司的上級機構成立於中國境內，且背後資金來自中國。',
  },
];

const REALTIME_INTEL_DATA = [
  {
    category: '負面消息',
    categoryColor: 'orange' as const,
    date: '2025/03/18',
    time: '14:00',
    source: '中央社 CNA',
    sourceType: '通訊社',
    title: '經濟部依兩岸條例開罰認和科技 217 萬元，認定違規陸資投資',
    summary: '經濟部投審會調查認定認和科技違反兩岸人民關係條例，以新加坡商名義規避陸資審查在台營運，依法裁罰新臺幣 217 萬元並要求限期改善，成為近年最受關注的中資繞道案例。',
  },
  {
    category: '負面消息',
    categoryColor: 'orange' as const,
    date: '2025/02/15',
    time: '09:00',
    source: 'invade.tw',
    sourceType: '民間資料庫',
    title: '中國侵略資料庫收錄認和科技為中資企業，母公司為江融信科技',
    summary: '民間維護的中國侵略資料庫（invade.tw）將認和科技列為中資企業，記載其母公司江融信科技的最終實質受益人鏈結至深圳國中創投基金（中國財政部控制），並標注該公司曾承接多家台灣金融機構系統開發。',
  },
  {
    category: '資安事件',
    categoryColor: 'red' as const,
    date: '2025/02/14',
    time: '08:30',
    source: '上報 Up Media',
    sourceType: '新聞媒體',
    title: '認和科技旗下 SmartRobot 平台傳出資料外洩疑慮',
    summary: '摘要：中資機構涉介台灣金融資訊系統安防案件不斷，4G0 個…',
  },
];

const RELATION_DATA = [
  { id: 1, name: '品築空間室內裝修設計股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '3,000,000', date: '2008-11-19', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 2, name: '創意家投資股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '500,000', date: '1997-11-10', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 3, name: '四兩金進出口有限公司', status: '非營業中', statusActive: false, person: '-', capital: '1,000,000', date: '2012-09-25', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 4, name: '棱能生技有限公司', status: '非營業中', statusActive: false, person: '-', capital: '2,000,000', date: '2018-08-06', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 5, name: '創築建設有限公司', status: '營業中', statusActive: true, person: '朱良能', capital: '20,000,000', date: '2007-05-21', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 6, name: '鼎豐投資股份有限公司', status: '營業中', statusActive: true, person: '邱*華', capital: '1,000,000', date: '2006-10-04', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 7, name: '元億投資股份有限公司', status: '營業中', statusActive: true, person: '胡亞琳', capital: '1,000,000', date: '2006-10-12', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 8, name: '能量投資股份有限公司', status: '營業中', statusActive: true, person: '李淑婷', capital: '1,000,000', date: '2006-10-19', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 9, name: '突倍爾思有限公司', status: '非營業中', statusActive: false, person: '-', capital: '1,000,000', date: '2008-03-20', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 10, name: '彈盟企業有限公司', status: '營業中', statusActive: true, person: '陳瑞瑜', capital: '5,000,000', date: '1980-04-03', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 11, name: '宏碁資訊服務股份有限公司', status: '營業中', statusActive: true, person: '萬以寧', capital: '50,000,000', date: '2001-08-15', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 12, name: '瑞光投資有限公司', status: '營業中', statusActive: true, person: '林*宏', capital: '3,000,000', date: '2003-06-20', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 13, name: '全球數位媒體股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '10,000,000', date: '2005-03-18', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 14, name: '大同世紀科技股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '5,000,000', date: '2000-11-03', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 15, name: '旭昇國際投資有限公司', status: '營業中', statusActive: true, person: '張*明', capital: '2,000,000', date: '2010-04-12', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 16, name: '安盛國際顧問有限公司', status: '營業中', statusActive: true, person: '王*琪', capital: '1,000,000', date: '2012-07-25', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 17, name: '慧智數位科技股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '8,000,000', date: '2004-09-10', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 18, name: '寶成國際開發股份有限公司', status: '營業中', statusActive: true, person: '林*偉', capital: '15,000,000', date: '1998-02-28', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 19, name: '永豐金融科技有限公司', status: '營業中', statusActive: true, person: '陳*文', capital: '5,000,000', date: '2015-01-20', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 20, name: '三洋電機台灣分公司', status: '非營業中', statusActive: false, person: '-', capital: '30,000,000', date: '1995-06-15', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 21, name: '優利系統股份有限公司', status: '營業中', statusActive: true, person: '黃*達', capital: '20,000,000', date: '2002-12-05', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 22, name: '兆豐資產管理有限公司', status: '營業中', statusActive: true, person: '劉*平', capital: '10,000,000', date: '2008-05-14', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 23, name: '達欣國際事業有限公司', status: '非營業中', statusActive: false, person: '-', capital: '2,000,000', date: '2013-08-22', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 24, name: '碩陽科技股份有限公司', status: '營業中', statusActive: true, person: '蔡*源', capital: '8,000,000', date: '2006-03-10', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 25, name: '群益資訊服務有限公司', status: '營業中', statusActive: true, person: '周*豪', capital: '5,000,000', date: '2009-11-18', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 26, name: '永昌不動產經紀有限公司', status: '非營業中', statusActive: false, person: '-', capital: '1,000,000', date: '2011-02-14', relation: '同地址：瑞光路358巷38弄36號1樓' },
  { id: 27, name: '天盈數位整合有限公司', status: '營業中', statusActive: true, person: '吳*雯', capital: '3,000,000', date: '2014-06-30', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 28, name: '昇陽光電科技股份有限公司', status: '營業中', statusActive: true, person: '賴*中', capital: '25,000,000', date: '2007-09-05', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 29, name: '聯合創新投資有限公司', status: '非營業中', statusActive: false, person: '-', capital: '2,000,000', date: '2016-03-25', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 30, name: '合勤科技服務有限公司', status: '營業中', statusActive: true, person: '許*翔', capital: '5,000,000', date: '2005-07-12', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 31, name: '華鼎創業投資股份有限公司', status: '營業中', statusActive: true, person: '廖*宗', capital: '50,000,000', date: '2001-10-08', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 32, name: '智冠資訊有限公司', status: '非營業中', statusActive: false, person: '-', capital: '3,000,000', date: '2010-01-15', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 33, name: '佳格食品股份有限公司', status: '營業中', statusActive: true, person: '曹*中', capital: '100,000,000', date: '1986-04-20', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 34, name: '宜鼎國際投資有限公司', status: '營業中', statusActive: true, person: '簡*益', capital: '8,000,000', date: '2013-05-28', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 35, name: '力山工業有限公司', status: '非營業中', statusActive: false, person: '-', capital: '2,000,000', date: '1999-08-10', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 36, name: '中租迪和投資有限公司', status: '營業中', statusActive: true, person: '陳*宏', capital: '30,000,000', date: '2003-12-18', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 37, name: '台灣松下電器販賣有限公司', status: '非營業中', statusActive: false, person: '-', capital: '15,000,000', date: '1997-03-15', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 38, name: '長鴻營造工程股份有限公司', status: '營業中', statusActive: true, person: '陳*安', capital: '40,000,000', date: '1992-07-22', relation: '同地址：瑞光路358巷38弄36號1樓' },
  { id: 39, name: '新光保全科技有限公司', status: '營業中', statusActive: true, person: '林*豪', capital: '10,000,000', date: '2008-11-05', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 40, name: '弘大國際有限公司', status: '非營業中', statusActive: false, person: '-', capital: '1,000,000', date: '2017-02-20', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 41, name: '台灣愛普生科技股份有限公司', status: '營業中', statusActive: true, person: '岩崎哲也', capital: '80,000,000', date: '1991-05-10', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 42, name: '精技電腦股份有限公司', status: '營業中', statusActive: true, person: '葉*超', capital: '45,000,000', date: '1988-09-30', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 43, name: '富士康國際投資有限公司', status: '非營業中', statusActive: false, person: '-', capital: '5,000,000', date: '2014-04-15', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 44, name: '明基材料股份有限公司', status: '營業中', statusActive: true, person: '陳*雄', capital: '60,000,000', date: '1998-06-25', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 45, name: '泓邦科技有限公司', status: '營業中', statusActive: true, person: '許*凱', capital: '2,000,000', date: '2011-08-18', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 46, name: '源達投資顧問有限公司', status: '非營業中', statusActive: false, person: '-', capital: '1,000,000', date: '2015-12-10', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 47, name: '英業達集團投資有限公司', status: '營業中', statusActive: true, person: '李*典', capital: '100,000,000', date: '2000-02-14', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 48, name: '欣興電子股份有限公司', status: '營業中', statusActive: true, person: '曾*強', capital: '70,000,000', date: '1990-11-28', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 49, name: '大葉資訊有限公司', status: '非營業中', statusActive: false, person: '-', capital: '3,000,000', date: '2009-07-08', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 50, name: '凱基投資顧問有限公司', status: '營業中', statusActive: true, person: '朱*維', capital: '15,000,000', date: '2004-01-20', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 51, name: '祥碩科技股份有限公司', status: '營業中', statusActive: true, person: '沈*暉', capital: '35,000,000', date: '2004-12-08', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 52, name: '茂迪股份有限公司', status: '非營業中', statusActive: false, person: '-', capital: '20,000,000', date: '1981-06-15', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 53, name: '光寶科技投資有限公司', status: '營業中', statusActive: true, person: '宋*棠', capital: '80,000,000', date: '1989-03-22', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 54, name: '新日興業有限公司', status: '營業中', statusActive: true, person: '王*豐', capital: '5,000,000', date: '2012-10-15', relation: '同地址：瑞光路358巷38弄36號1樓' },
  { id: 55, name: '仁寶資訊技術有限公司', status: '營業中', statusActive: true, person: '許*程', capital: '25,000,000', date: '2006-05-20', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 56, name: '天泰能源有限公司', status: '非營業中', statusActive: false, person: '-', capital: '3,000,000', date: '2016-09-12', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 57, name: '威剛科技股份有限公司', status: '營業中', statusActive: true, person: '陳*麟', capital: '40,000,000', date: '2001-05-30', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 58, name: '瑞昱半導體股份有限公司', status: '營業中', statusActive: true, person: '葉*琦', capital: '55,000,000', date: '1987-10-20', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 59, name: '嘉聯益科技有限公司', status: '非營業中', statusActive: false, person: '-', capital: '8,000,000', date: '2007-02-15', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 60, name: '元大金融顧問有限公司', status: '營業中', statusActive: true, person: '馬*玲', capital: '10,000,000', date: '2003-08-28', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 61, name: '奇美電子投資有限公司', status: '非營業中', statusActive: false, person: '-', capital: '30,000,000', date: '1998-12-10', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 62, name: '緯創軟體有限公司', status: '營業中', statusActive: true, person: '林*行', capital: '20,000,000', date: '2005-04-18', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 63, name: '聯詠科技股份有限公司', status: '營業中', statusActive: true, person: '何*祥', capital: '45,000,000', date: '1997-09-25', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 64, name: '矽統科技有限公司', status: '非營業中', statusActive: false, person: '-', capital: '5,000,000', date: '2002-06-08', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 65, name: '和泰汽車投資有限公司', status: '營業中', statusActive: true, person: '黃*雄', capital: '100,000,000', date: '1995-01-15', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 66, name: '台虹科技股份有限公司', status: '營業中', statusActive: true, person: '孫*瑞', capital: '15,000,000', date: '2000-07-20', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 67, name: '百容電子有限公司', status: '非營業中', statusActive: false, person: '-', capital: '2,000,000', date: '2010-05-10', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 68, name: '圓剛科技股份有限公司', status: '營業中', statusActive: true, person: '郭*昇', capital: '30,000,000', date: '1990-08-15', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 69, name: '新普科技投資有限公司', status: '營業中', statusActive: true, person: '宋*富', capital: '25,000,000', date: '1992-12-25', relation: '同地址：瑞光路358巷38弄36號1樓' },
  { id: 70, name: '正文科技有限公司', status: '非營業中', statusActive: false, person: '-', capital: '8,000,000', date: '2008-04-02', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 71, name: '華映數位媒體有限公司', status: '營業中', statusActive: true, person: '鄭*治', capital: '5,000,000', date: '2011-11-18', relation: '同地址：瑞光路358巷38弄36號9樓' },
  { id: 72, name: '凌華科技股份有限公司', status: '營業中', statusActive: true, person: '劉*昇', capital: '35,000,000', date: '1995-04-28', relation: '同地址：瑞光路358巷38弄36號3樓' },
  { id: 73, name: '啟碁科技投資有限公司', status: '非營業中', statusActive: false, person: '-', capital: '10,000,000', date: '2006-08-30', relation: '同地址：瑞光路358巷38弄36號8樓' },
  { id: 74, name: '鎧勝控股有限公司', status: '營業中', statusActive: true, person: '陳*忠', capital: '40,000,000', date: '2004-02-14', relation: '同地址：瑞光路358巷38弄36號5樓' },
  { id: 75, name: '億光電子投資有限公司', status: '營業中', statusActive: true, person: '葉*銘', capital: '60,000,000', date: '1983-06-10', relation: '同地址：瑞光路358巷38弄36號7樓' },
  { id: 76, name: '嘉澤端子有限公司', status: '非營業中', statusActive: false, person: '-', capital: '3,000,000', date: '2009-03-15', relation: '同地址：瑞光路358巷38弄36號4樓' },
  { id: 77, name: '穎崴科技股份有限公司', status: '營業中', statusActive: true, person: '王*堅', capital: '20,000,000', date: '2001-09-28', relation: '同地址：瑞光路358巷38弄36號6樓' },
  { id: 78, name: '達方電子有限公司', status: '營業中', statusActive: true, person: '蘇*興', capital: '15,000,000', date: '1997-12-05', relation: '同地址：瑞光路358巷38弄36號2樓' },
  { id: 79, name: '晶宏半導體有限公司', status: '非營業中', statusActive: false, person: '-', capital: '5,000,000', date: '2013-07-20', relation: '同地址：瑞光路358巷38弄36號10樓' },
  { id: 80, name: '耕興國際測試有限公司', status: '營業中', statusActive: true, person: '邱*華', capital: '10,000,000', date: '1999-10-12', relation: '同地址：瑞光路358巷38弄36號1樓' },
  { id: 81, name: '立錡科技投資有限公司', status: '營業中', statusActive: true, person: '邰*圻', capital: '25,000,000', date: '1998-08-18', relation: '同地址：瑞光路358巷38弄36號9樓' },
];

// ==================== Icons ====================

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M13 7L7 1L1 7" stroke="#747480" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M1 1L7 7L13 1" stroke="#747480" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p2d557600} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M7 10L12 15L17 10" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 15V3" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function TrendUpIcon({ color = '#419D48' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p35f41f00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p730e380} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

// ==================== Alert Banner ====================

function AlertBanner({ companyName, onViewClick }: { companyName: string; onViewClick?: () => void }) {
  const handleViewClick = () => {
    if (onViewClick) {
      onViewClick();
      return;
    }
    const el = document.getElementById('section-suspected-chinese');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#ffe2e2] w-full rounded-tl-[32px] rounded-tr-[32px] shrink-0">
      <div className="flex items-center justify-center gap-[12px] px-[48px] py-[16px] text-[#ec5242] text-[16px] tracking-[0.48px] leading-[23px] whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] shrink-0" style={{ fontVariationSettings: "'wght' 700" }}>
          {companyName}疑似為中資企業
        </p>
        <button className="underline cursor-pointer shrink-0 text-right bg-transparent border-none p-0 text-[#ec5242] text-[16px] tracking-[0.48px] leading-[23px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" style={{ fontVariationSettings: "'wght' 400" }} onClick={handleViewClick}>查看</button>
      </div>
    </div>
  );
}

// ==================== Breadcrumb ====================

function Breadcrumb({ companyName, source = 'intelligence-tracking', onNavigate }: { companyName: string; source?: 'intelligence-tracking' | 'quick-intelligence'; onNavigate?: (page: string) => void }) {
  const middleLabel = source === 'quick-intelligence' ? '快速情資查詢' : '供應商管理';
  const middlePage = source === 'quick-intelligence' ? 'quick-intelligence-survey' : 'intelligence-tracking';
  const lastLabel = source === 'quick-intelligence' ? `${companyName}情資詳細` : companyName;
  return (
    <div className="flex items-center gap-[8px] h-[24px] w-full">
      <span className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[24px] tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors whitespace-nowrap" style={{ fontWeight: 400 }} onClick={() => onNavigate?.('home')}>首頁</span>
      <ChevronIcon />
      <span className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[24px] tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors whitespace-nowrap" style={{ fontWeight: 400 }} onClick={() => onNavigate?.(middlePage)}>{middleLabel}</span>
      <ChevronIcon />
      <span className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[24px] tracking-[-0.3125px] whitespace-nowrap" style={{ fontWeight: 700 }}>{lastLabel}</span>
    </div>
  );
}

// ==================== Title Bar ====================

function TitleBar({ companyName }: { companyName: string }) {
  const isSuspectedChinese = companyName === '新加坡商認和科技有限公司';
  const info = getCompanyInfo(companyName);
  
  return (
    <div className="flex items-center justify-between w-full shrink-0">
      <div className="flex flex-col items-start shrink-0 gap-[4px] flex-[1_0_0]">
        {isSuspectedChinese && (
          <div className="bg-[#ec5242] border border-[#ec5242] border-solid rounded-[4px] flex items-center justify-center px-[8px] py-[4px] gap-[2px]">
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-white text-[13px] leading-[normal] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>疑似中資</span>
          </div>
        )}
        <div className="flex items-center justify-between w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[32px] leading-[normal] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            {companyName}
          </p>
          <div className="flex flex-row items-center self-stretch">
            {info.hasDatabase ? (
              <button className="bg-[#ffe600] rounded-[4px] flex items-center gap-[4px] px-[20px] py-[16px] min-w-[110px] hover:bg-[#f5dd00] transition-colors cursor-pointer h-full">
                <DownloadIcon />
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>匯出所有情資報告</span>
              </button>
            ) : (
              <button className="flex gap-[4px] items-center justify-end min-w-[110px] rounded-[4px] shrink-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity h-full">
                <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsNew.p3053b100} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsNew.p311ec100} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M10 12.5V2.5" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>匯出報告</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Company Info + Stat Cards ====================

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-[8px] h-[36px] w-full shrink-0">
      <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[23px] tracking-[0.48px] w-[84px] shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>{label}</span>
      <span className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap shrink-0">{value}</span>
    </div>
  );
}

// ==================== Company Info (2-column layout for no database) ====================

function CompanyInfoTwoColumn({ companyName, onNavigate, onShowMore }: { companyName: string; onNavigate?: (page: string) => void; onShowMore?: () => void }) {
  const info = getCompanyInfo(companyName);
  
  return (
    <div className="flex flex-col items-start gap-[12px] pr-[24px] rounded-[8px] shrink-0">
      {/* Single column company info - only 3 rows */}
      <div className="flex flex-col gap-[2px] items-start w-[260px] shrink-0">
        <div className="flex items-center gap-[8px] h-[36px] w-full shrink-0">
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[23px] tracking-[0.48px] w-[84px] shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>統一編號：</span>
          <span className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap shrink-0">{info.taxId}</span>
        </div>
        <div className="flex items-center gap-[8px] h-[36px] w-full shrink-0">
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[23px] tracking-[0.48px] w-[84px] shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>產業類別：</span>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>{info.industry}</span>
        </div>
        <div className="flex items-center gap-[8px] h-[36px] w-full shrink-0">
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[23px] tracking-[0.48px] w-[84px] shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>負責人：</span>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>{info.representative}</span>
        </div>
      </div>
      
      <button 
        className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] underline cursor-pointer hover:text-[#747480] transition-colors bg-transparent border-none p-0 w-[115px] text-left" 
        style={{ fontVariationSettings: "'wght' 400" }}
        onClick={() => onShowMore?.()}
      >
        查看更多
      </button>
    </div>
  );
}

function CompanyInfoAndCards({ companyName, onNavigate, onShowMore }: { companyName: string; onNavigate?: (page: string) => void; onShowMore?: () => void }) {
  const info = getCompanyInfo(companyName);

  if (!info.hasDatabase) {
    // 3-column layout for hasDatabase: false (matching Figma design)
    return (
      <div className="flex gap-[32px] items-start w-full shrink-0">
        {/* Left: Company Info */}
        <CompanyInfoTwoColumn companyName={companyName} onNavigate={onNavigate} onShowMore={onShowMore} />
        {/* Middle: 資訊服務委外風險評估表 empty card */}
        <EmptyAssessmentCard companyName={companyName} onNavigate={onNavigate} />
        {/* Right: 委外風險評估表 empty card */}
        <EmptyOutsourceCard companyName={companyName} onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="flex flex-[1_0_0] gap-[24px] items-center w-full shrink-0 h-[189px]">
      {/* Left: Company Info */}
      <div className="flex flex-col gap-[12px] items-start justify-center py-[24px] pr-[24px] rounded-[8px] shrink-0">
        <div className="flex flex-col gap-[2px] items-start w-[297px] shrink-0">
          <InfoRow label="統一編號：" value={info.taxId} />
          <InfoRow label="產業類別：" value={info.industry} />
          <InfoRow label="負責人：" value={info.representative} />
        </div>
        <button 
          className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] underline cursor-pointer hover:text-[#747480] transition-colors bg-transparent border-none p-0 w-[115px] text-left" 
          style={{ fontVariationSettings: "'wght' 400" }}
          onClick={() => onShowMore?.()}
        >
          查看更多
        </button>
      </div>

      {/* Right: 3 Stat Cards */}
      <div className="flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px">
        <RiskScoreCard info={info} />
        <PendingVulnCard info={info} />
        <RepairProgressCard info={info} />
      </div>
    </div>
  );
}

function RiskScoreCard({ info }: { info: CompanyInfo }) {
  // Fixed green colors matching Figma design - icon, score, grade tag, trend all use green
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="rounded-[4px] size-[40px] shrink-0 relative" style={{ backgroundColor: '#ddffdf' }}>
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]">
                  <div className="absolute inset-[-10.98%_-10%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
                      <path d={svgPaths.p3d70580} stroke="#419D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p31e16900} stroke="#419D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>資訊服務委外風險評估表</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="h-[39px] w-full shrink-0 relative">
            <div className="absolute flex items-end gap-[8px] left-0 top-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#419d48] text-[32px] leading-[normal] whitespace-nowrap">{info.riskScore}</span>
              <div className="flex flex-col items-center justify-center pb-[4px] shrink-0">
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>分</span>
              </div>
              <div className="flex flex-col items-start pb-[4px] shrink-0">
                <div className="rounded-[4px] h-[24px] px-[8px] py-[4px] shrink-0 bg-[#ddffdf] flex items-center justify-center">
                  <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#419d48] text-[13px] leading-[normal] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{info.riskGrade}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-[33px] pt-[17px] w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <div className="flex items-center gap-[8px]">
              <div className="-scale-y-100 flex items-center justify-center shrink-0">
                <TrendUpIcon color="#419d48" />
              </div>
              <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400", color: '#419d48' }}>{info.riskTrend}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PendingVulnCard({ info }: { info: CompanyInfo }) {
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="bg-[#ffedd4] rounded-[4px] size-[40px] shrink-0 relative">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]">
                  <div className="absolute inset-[-5.55%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
                      <path d={svgPaths.p2d23b080} stroke="#EE762F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]">
                  <div className="absolute inset-[-25%_-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                      <path d="M1 1V5" stroke="#EE762F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]">
                  <div className="absolute inset-[-1px_-9999.77%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                      <path d="M1 1H1.01" stroke="#EE762F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>待處理弱點</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="flex items-center justify-between w-full shrink-0">
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#ee762f] text-[32px] leading-[normal] whitespace-nowrap">{info.vulnHigh}</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>高風險</span></div>
            </div>
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#ee762f] text-[32px] leading-[normal] whitespace-nowrap">{info.vulnMedium}</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>中風險</span></div>
            </div>
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#ee762f] text-[32px] leading-[normal] whitespace-nowrap">{info.vulnLow}</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>低風險</span></div>
            </div>
          </div>
          <div className="flex items-center pt-[14px] w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <div className="flex items-center gap-[8px]">
              <TrendUpIcon color="#EE762F" />
              <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#ee762f] text-[16px] leading-[23px] tracking-[0.48px] w-[168px]" style={{ fontVariationSettings: "'wght' 400" }}>{info.vulnTrend}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepairProgressCard({ info }: { info: CompanyInfo }) {
  const progressWidth = `${(info.repairPercent / 100) * 100}%`;
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] h-[188px] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] size-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="bg-[#ffe1de] rounded-[4px] size-[40px] shrink-0 relative">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p1cc15700} stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]">
                  <div className="absolute inset-[-10%_-7.69%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                      <path d="M1 8L4 11L14 1" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>缺失修補進度</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="h-[39px] w-full shrink-0 relative">
            <div className="absolute flex items-end gap-[8px] left-0 top-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#ec5242] text-[32px] leading-[normal] whitespace-nowrap">{info.repairPercent}</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>%</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <div className="bg-[#e5e7eb] h-[8px] rounded-[33554400px] w-full shrink-0 relative">
              <div className="bg-[#ec5242] h-[8px] rounded-[33554400px] absolute left-0 top-0" style={{ width: progressWidth }} />
            </div>
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{info.repairDone} / {info.repairTotal} 項已改善或核准</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Empty State Cards ====================

function EmptyRiskScoreCard() {
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="rounded-[4px] size-[40px] shrink-0 relative bg-[#f0f0f5]">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]">
                  <div className="absolute inset-[-10.98%_-10%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
                      <path d={svgPaths.p3d70580} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p31e16900} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>供應商風險評估分數</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="h-[39px] w-full shrink-0 relative">
            <div className="absolute flex items-end gap-[8px] left-0 top-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#c4c4cd] text-[32px] leading-[normal] whitespace-nowrap">—</span>
              <div className="flex flex-col items-center justify-center pb-[4px] shrink-0">
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#c4c4cd] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>分</span>
              </div>
              <div className="flex flex-col items-start pb-[4px] shrink-0">
                <div className="rounded-[4px] h-[24px] px-[8px] py-[4px] shrink-0 bg-[#f0f0f5] flex items-center justify-center">
                  <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[13px] leading-[normal] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>未評級</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-[33px] pt-[17px] w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>尚未進行風險評估</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyPendingVulnCard() {
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="bg-[#f0f0f5] rounded-[4px] size-[40px] shrink-0 relative">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]">
                  <div className="absolute inset-[-5.55%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
                      <path d={svgPaths.p2d23b080} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]">
                  <div className="absolute inset-[-25%_-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                      <path d="M1 1V5" stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]">
                  <div className="absolute inset-[-1px_-9999.77%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                      <path d="M1 1H1.01" stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>待處理弱點</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="flex items-center justify-between w-full shrink-0">
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#c4c4cd] text-[32px] leading-[normal] whitespace-nowrap">—</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#c4c4cd] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>高風險</span></div>
            </div>
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#c4c4cd] text-[32px] leading-[normal] whitespace-nowrap">—</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#c4c4cd] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>中風險</span></div>
            </div>
            <div className="flex items-end gap-[8px] shrink-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#c4c4cd] text-[32px] leading-[normal] whitespace-nowrap">—</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#c4c4cd] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>低風險</span></div>
            </div>
          </div>
          <div className="flex items-center pt-[14px] w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>尚無弱點掃描紀錄</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyRepairProgressCard() {
  return (
    <div className="backdrop-blur-[42.5px] bg-white rounded-[8px] flex-[1_0_0] h-[188px] min-h-px min-w-px">
      <div className="flex flex-col gap-[16px] items-start p-[24px] size-full">
        <div className="flex items-center gap-[12px] w-full shrink-0">
          <div className="bg-[#f0f0f5] rounded-[4px] size-[40px] shrink-0 relative">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p1cc15700} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]">
                  <div className="absolute inset-[-10%_-7.69%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                      <path d="M1 8L4 11L14 1" stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>缺失修補進度</span>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <div className="h-[39px] w-full shrink-0 relative">
            <div className="absolute flex items-end gap-[8px] left-0 top-0">
              <span className="font-['EYInterstate:Bold',sans-serif] text-[#c4c4cd] text-[32px] leading-[normal] whitespace-nowrap">—</span>
              <div className="flex flex-col items-center justify-center pb-[4px]"><span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#c4c4cd] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>%</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start w-full shrink-0 relative">
            <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none" />
            <div className="bg-[#e5e7eb] h-[8px] rounded-[33554400px] w-full shrink-0" />
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>等待評估報告產出後更新</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== New Empty Cards for hasDatabase: false (Figma 3-column layout) ====================

// Middle card: 資訊服務委外風險評估表
function EmptyAssessmentCard({ companyName, onNavigate }: { companyName: string; onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col gap-[16px] items-center justify-center px-[24px] py-[20px] w-full">
          {/* Top: icon + title + button */}
          <div className="w-full">
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex items-center justify-between w-full shrink-0">
                <div className="flex gap-[12px] items-center shrink-0">
                  <div className="bg-[#f0f0f5] rounded-[4px] shrink-0 size-[40px] relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsNew.p2501aa80} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M14 2V8H20" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M16 13H8" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M16 17H8" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10 9H9H8" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center shrink-0 w-[204px]">
                    <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>資訊服務委外風險評估表</span>
                  </div>
                </div>
                <button
                  className="bg-white rounded-[4px] flex items-center justify-center min-w-[80px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f6f6fa] transition-colors relative"
                  onClick={() => onNavigate?.('risk-assessment-form')}
                >
                  <div aria-hidden="true" className="absolute border border-[#1a1a24] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[15px] leading-[23px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>立即填寫</span>
                </button>
              </div>
              {/* Divider */}
              <div className="h-px w-full relative">
                <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
          {/* Bottom: status text */}
          <div className="w-full">
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>尚未進行風險評估</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Right card: 委外風險評估表
function EmptyOutsourceCard({ companyName, onNavigate }: { companyName: string; onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col gap-[16px] items-center justify-center px-[24px] py-[20px] w-full">
          {/* Top: icon + title + button */}
          <div className="w-full">
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex items-center justify-between w-full shrink-0">
                <div className="flex gap-[12px] items-center shrink-0">
                  <div className="bg-[#f0f0f5] rounded-[4px] shrink-0 size-[40px] relative">
                    <div className="absolute left-[8px] top-[8px] size-[24px]">
                      <div className="absolute inset-[0_-1.39%_-8.33%_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.333 26">
                          <path d={svgPathsNew.p3e29a580} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPathsNew.p3f070f00} fill="#F0F0F5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M14 2V8H20" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M13 13H8" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M10 9H9H8" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center shrink-0 w-[204px]">
                    <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] leading-[normal] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>委外風險評估表</span>
                  </div>
                </div>
                <button
                  className="bg-white rounded-[4px] flex items-center justify-center min-w-[80px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f6f6fa] transition-colors relative"
                  onClick={() => onNavigate?.('risk-assessment-send')}
                >
                  <div aria-hidden="true" className="absolute border border-[#1a1a24] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[15px] leading-[23px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>立即發送</span>
                </button>
              </div>
              {/* Divider */}
              <div className="h-px w-full relative">
                <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
          {/* Bottom: status text */}
          <div className="w-full">
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>尚未發送給供應商</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Empty Risk Score Card with "立即評估" button (legacy - kept for reference)
function EmptyRiskScoreCardWithButton({ companyName, onNavigate }: { companyName: string; onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white rounded-[8px] flex items-center px-[32px] py-[24px] flex-1 shrink-0">
      <div className="flex items-center justify-between w-full h-[99px]">
        <div className="flex items-center gap-[12px]">
          <div className="rounded-[4px] size-[40px] shrink-0 relative bg-[#f0f0f5]">
            <div className="absolute inset-0 flex flex-col items-start pt-[8px] px-[8px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]">
                  <div className="absolute inset-[-10.98%_-10%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
                      <path d={svgPaths.p3d70580} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p31e16900} stroke="#b0b0b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-start justify-center w-[204px]">
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal] whitespace-nowrap w-full" style={{ fontVariationSettings: "'wght' 400" }}>資訊服務委外風險評估表</span>
            <div className="flex flex-col items-start w-full">
              <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>尚未進行風險評估</span>
            </div>
          </div>
        </div>
        <button
          className="bg-white border border-[#1a1a24] border-solid rounded-[4px] flex items-center justify-center min-w-[100px] px-[12px] py-[14px] hover:bg-[#f6f6fa] transition-colors cursor-pointer"
          onClick={() => onNavigate?.('risk-assessment-form')}
        >
          <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>立即評估</span>
        </button>
      </div>
    </div>
  );
}

// ==================== Tab Bar ====================

// Intelligence Tracking Title (for hasDatabase: false)
function IntelligenceTrackingTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[32px] relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" style={{ fontVariationSettings: "'wght' 700" }}>
          情資追蹤
        </p>
      </div>
    </div>
  );
}

function TabBar({ activeTab, onTabChange, hasDatabase }: { activeTab: string; onTabChange: (tab: string) => void; hasDatabase: boolean }) {
  const tabs = [
    { id: 'overview', label: '專案概覽', enabled: false },
    { id: 'intelligence', label: '情資追蹤', enabled: true },
    { id: 'sbom', label: 'SBOM 弱點分析結果', enabled: hasDatabase },
    { id: 'history', label: '歷年查核與評估紀錄', enabled: false },
    { id: 'analytics', label: '數據分析', enabled: false },
  ];

  return (
    <div className="bg-[#f6f6fa] flex h-[72px] w-full overflow-clip shrink-0">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            className={`flex-[1_0_0] h-full min-h-px min-w-[110px] flex items-center justify-center transition-colors ${
              isActive ? 'bg-[#ffe600] cursor-pointer' : tab.enabled ? 'hover:bg-[#ececf3] cursor-pointer' : 'cursor-default'
            }`}
            onClick={() => {
              if (tab.enabled) {
                onTabChange(tab.id);
              }
            }}
          >
            <span
              className={`font-['EYInterstate:${isActive ? 'Bold' : 'Regular'}','Noto_Sans_JP:${isActive ? 'Bold' : 'Regular'}',sans-serif] text-[20px] text-center whitespace-nowrap ${
                isActive ? 'text-[#2e2e38] tracking-[0.6px]' : tab.enabled ? 'text-[#747480]' : 'text-[#b0b0b8]'
              }`}
              style={{ fontVariationSettings: isActive ? "'wght' 700" : "'wght' 400" }}
            >
              {tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ==================== Sidebar ====================

function Sidebar({ activeCategory, onCategoryChange, categories }: { activeCategory: string; onCategoryChange: (id: string) => void; categories?: { id: string; label: string; count: number }[] }) {
  const cats = categories || CATEGORIES;
  return (
    <div className="bg-[#fafbff] flex flex-col w-[240px] min-w-[240px] h-[704px] pt-[20px] rounded-[16px] overflow-clip shrink-0 sticky top-[120px] self-start">
      {/* Title */}
      <div className="h-[61px] w-full shrink-0">
        <div className="flex flex-col gap-[4px] items-start pl-[20px] size-full">
          <div className="h-[24px] w-[200px] shrink-0">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
              情資追蹤列表
            </p>
          </div>
          <div className="h-[17px] w-[200px] shrink-0">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[13px] leading-[normal]" style={{ fontVariationSettings: "'wght' 400" }}>
              最後更新：2025/03/18 14:00
            </p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex flex-col gap-[4px] w-[240px]">
        {cats.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <div
              key={cat.id}
              className={`h-[44px] w-[240px] rounded-[4px] flex items-center cursor-pointer transition-colors relative shrink-0 ${isActive ? 'bg-[#fff8b5]' : 'hover:bg-[#f0f0f5]'}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {/* Left yellow border */}
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-[4px] border-l-[3px] border-solid ${isActive ? 'border-[#ffe600]' : 'border-[rgba(255,230,0,0)]'}`} />
              <div className="flex items-center w-full overflow-clip pl-[23px] pr-[20px] rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px min-w-px">
                  <div className="flex items-center gap-[8px] w-full">
                    <div className="bg-[#8f8100] opacity-35 rounded-[4px] size-[8px] shrink-0" />
                    <div className="flex flex-[1_0_0] items-center justify-between min-h-px min-w-px whitespace-nowrap">
                      <span
                        className={`font-['EYInterstate:${isActive ? 'Bold' : 'Regular'}','Noto_Sans_JP:${isActive ? 'Bold' : 'Regular'}',sans-serif] text-[14px] leading-[20px] tracking-[0.42px] text-[#1a1a24] shrink-0`}
                        style={{ fontVariationSettings: isActive ? "'wght' 700" : "'wght' 400" }}
                      >
                        {cat.label}
                      </span>
                      <span className="font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[13px] leading-[normal] shrink-0">{cat.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==================== Suspected Chinese Card ====================

function SuspectedChineseCard() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col items-center p-[16px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full pb-[12px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex flex-col gap-[4px] items-start text-[#1a1a24] whitespace-nowrap">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] tracking-[0.54px] leading-[normal] shrink-0" style={{ fontVariationSettings: "'wght' 700" }}>
                  疑似中資
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] leading-[23px] tracking-[0.48px] shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
                  《認和科技》是一家位於新加坡的金融科技公司，客戶多為中國銀行。
                </p>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>

          {isExpanded && (
            <>
              {/* Table Rows */}
              {SUSPECTED_CHINESE_DATA.map((item, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full shrink-0 relative">
                  <div className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                  <div className="w-[140px] shrink-0 px-[24px] py-[12px]">
                    <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{item.year}</span>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px">
                    <div className="flex flex-col gap-[10px] items-start px-[24px] py-[12px] w-full">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{item.content}</p>
                      {item.alert && (
                        <div className="bg-[#f9fafb] rounded-[8px] flex items-center gap-[8px] px-[16px] py-[10px] w-full shrink-0">
                          <div className="bg-[#dc2626] rounded-[10px] size-[20px] flex items-center justify-center shrink-0">
                            <span className="font-['Noto_Sans_TC:Bold',sans-serif] text-white text-[12px] leading-[20px] whitespace-nowrap" style={{ fontWeight: 700 }}>!</span>
                          </div>
                          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#dc2626] text-[14px] leading-[20px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{item.alert}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Related Items */}
              <div className="flex flex-col gap-[16px] items-start pt-[16px] w-full shrink-0">
                <div className="flex items-center justify-between w-full shrink-0">
                  <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                    關聯項目
                  </span>
                </div>
                <div className="bg-white rounded-[10px] relative h-[46px] shrink-0">
                  <div className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="flex items-center h-full px-[21px] py-[13px] gap-[8px] cursor-pointer hover:bg-[#f9fafb] transition-colors rounded-[10px]">
                    <span className="font-['Noto_Sans_TC:Regular',sans-serif] text-[#1f2937] text-[14px] leading-[normal] whitespace-nowrap" style={{ fontWeight: 400 }}>江融信科技 Rivere Tech</span>
                    <span className="font-['Noto_Sans_TC:Regular',sans-serif] text-[#9ca3af] text-[12px] leading-[normal] whitespace-nowrap" style={{ fontWeight: 400 }}>・中國公司</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Realtime Intel Table ====================

function RealtimeIntelCard({ data }: { data?: RealtimeIntelItem[] }) {
  const items = data || REALTIME_INTEL_DATA;
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full pb-[8px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>即時情資 ({items.length})</span>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>共 {items.length} 筆</span>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>

          {isExpanded && (
            <>
              {/* Table */}
              <div className="flex flex-col items-start w-full shrink-0">
                {/* Table Header */}
                <div className="bg-[#f6f6fa] flex gap-[8px] items-center h-[56px] w-full shrink-0">
                  <div className="w-[130px] shrink-0 px-[24px] py-[16px]">
                    <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>情資類別</span>
                  </div>
                  <div className="w-[140px] shrink-0 px-[24px] py-[16px] text-center">
                    <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>偵測時間</span>
                  </div>
                  <div className="w-[140px] shrink-0 px-[24px] py-[16px] text-center">
                    <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>來源/頻道</span>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px px-[24px] py-[16px]">
                    <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>標題與摘要內容</span>
                  </div>
                  <div className="w-[120px] shrink-0 px-[24px] py-[16px]">
                    <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>操作</span>
                  </div>
                </div>

                {/* Table Rows */}
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-[8px] items-center w-full shrink-0 relative">
                    <div className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                    {/* Category */}
                    <div className="w-[130px] shrink-0 pl-[24px] pr-[15px] py-[12px] relative flex flex-col gap-[10px] items-start">
                      <div className={`${item.categoryColor === 'orange' ? 'bg-[#ffedd4]' : 'bg-[#ffe2e2]'} flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 relative`}>
                        <div className={`absolute border ${item.categoryColor === 'orange' ? 'border-[#ffd59a]' : 'border-[#ffc9c9]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                        <span className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] leading-[normal] whitespace-nowrap ${item.categoryColor === 'orange' ? 'text-[#ee762f]' : 'text-[#ec5242]'}`} style={{ fontVariationSettings: "'wght' 400" }}>{item.category}</span>
                      </div>
                      <div className="absolute left-[9px] top-1/2 -translate-y-1/2 size-[8px]">
                        <svg className="block size-full" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#EC5242" /></svg>
                      </div>
                    </div>
                    {/* Date */}
                    <div className="w-[140px] shrink-0 px-[24px] py-[12px]">
                      <div className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] text-center whitespace-nowrap">
                        <p className="mb-0">{item.date}</p>
                        <p>{item.time}</p>
                      </div>
                    </div>
                    {/* Source */}
                    <div className="w-[140px] shrink-0 flex flex-col gap-[4px] items-center justify-center self-stretch">
                      <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>{item.source}</span>
                      <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[13px] leading-[normal] text-center" style={{ fontVariationSettings: "'wght' 400" }}>{item.sourceType}</span>
                    </div>
                    {/* Title & Summary */}
                    <div className="flex-[1_0_0] min-h-px min-w-px px-[24px] py-[12px]">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{item.title}</p>
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px] overflow-hidden text-ellipsis whitespace-nowrap w-full" style={{ fontVariationSettings: "'wght' 400" }}>{item.summary}</p>
                      </div>
                    </div>
                    {/* Action */}
                    <div className="w-[120px] shrink-0 px-[24px] flex flex-col items-start">
                      <div className="flex flex-col items-start justify-center pr-[24px] py-[16px] w-full">
                        <span className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] underline text-right cursor-pointer hover:text-[#747480] transition-colors whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>查看</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <Pagination currentPage={currentPage} totalPages={1} totalItems={items.length} onPageChange={setCurrentPage} />
            </>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Empty Card ====================

function EmptyCard({ title, count, message }: { title: string; count: string; message: string }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
          <div className="flex items-center justify-between w-full pb-[8px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
                  {title} ({count})
                </span>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>共 {count} 筆</span>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>
          {isExpanded && (
            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] text-[#1a1a24] text-[14px] leading-[21px] tracking-[-0.1504px] whitespace-nowrap shrink-0" style={{ fontWeight: 400 }}>{message}</p>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Judicial Card ====================

function JudicialCard({ data, totalCount }: { data: JudicialItem[]; totalCount?: number }) {
  const total = totalCount ?? data.length;
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
          <div className="flex items-center justify-between w-full pb-[8px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>司法判決 ({total})</span>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>共 {total} 筆</span>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>
          {isExpanded && (
            <>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                {/* Header */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                    <p className="font-['Inter:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>#</p>
                  </div>
                  {['日期','角色','案由','法院','備註'].map(h => (
                    <div key={h} className="bg-[#f6f6fa] flex-1 min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>{h}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {pageItems.map((item, idx) => (
                  <div key={idx} className="content-stretch flex items-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                      <p className="font-['Inter:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{(currentPage - 1) * itemsPerPage + idx + 1}</p>
                    </div>
                    {[item.date, item.role, item.reason, item.court, item.note].map((cell, cellIdx) => (
                      <div key={cellIdx} className="flex-1 min-h-px min-w-px relative">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{cell}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {totalPages > 0 && <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={total} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} />}
            </>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Government Bid Card ====================

function GovernmentBidCard({ data, totalCount }: { data: GovernmentBidItem[]; totalCount?: number }) {
  const total = totalCount ?? data.length;
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
          <div className="flex items-center justify-between w-full pb-[8px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>政府標案 ({total})</span>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>共 {total} 筆</span>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>
          {isExpanded && (
            <>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                {/* Header */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                    <p className="font-['Inter:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>#</p>
                  </div>
                  {['決標日期','機關名稱','標案名稱','金額 (NTD)'].map(h => (
                    <div key={h} className="bg-[#f6f6fa] flex-1 min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>{h}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {pageItems.map((item, idx) => (
                  <div key={idx} className="content-stretch flex items-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                      <p className="font-['Inter:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{(currentPage - 1) * itemsPerPage + idx + 1}</p>
                    </div>
                    {[item.date, item.agency, item.project, item.amount].map((cell, cellIdx) => (
                      <div key={cellIdx} className="flex-1 min-h-px min-w-px relative">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{cell}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {totalPages > 0 && <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={total} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} />}
            </>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Relation Table Card ====================

function RelationTableCard({ data, totalCount }: { data?: RelationItem[]; totalCount?: number }) {
  const items = data || RELATION_DATA.map(r => ({ name: r.name, status: r.statusActive ? '營業中' : '非營業中', representative: r.person, capital: r.capital, establishDate: r.date, relation: r.relation }));
  const total = totalCount ?? items.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const itemsPerPage = 10;
  const pageItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  const headers = ['公司名稱', '營業狀態', '負責人', '資本額', '成立日期', '關係'];

  return (
    <div className="bg-white rounded-[14px] w-full shrink-0 relative">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full pb-[8px] shrink-0 relative">
            <div className="absolute bottom-0 left-0 right-0 border-b border-[#ececf3]" />
            <div className="flex-[1_0_0] min-h-px min-w-px">
              <div className="flex items-center justify-between w-full whitespace-nowrap">
                <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>疑似關係 ({total})</span>
                <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>共 {total} 筆</span>
              </div>
            </div>
            <button className="rounded-[10px] size-[40px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors pt-[8px] px-[8px]" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>

          {isExpanded && (
            <>
              {/* Table */}
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                {/* Table Header */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                    <p className="font-['Inter:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>#</p>
                  </div>
                  {headers.map((h, i) => (
                    <div key={i} className="bg-[#f6f6fa] flex-1 min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>{h}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                {pageItems.map((item, idx) => (
                  <div key={idx} className="content-stretch flex items-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
                      <p className="font-['Inter:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{(currentPage - 1) * itemsPerPage + idx + 1}</p>
                    </div>
                    {[item.name, item.status, item.representative, item.capital, item.establishDate, item.relation].map((cell, cellIdx) => (
                      <div key={cellIdx} className="flex-1 min-h-px min-w-px relative">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                            <p className={`font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] relative shrink-0 text-[14px] tracking-[-0.1504px] whitespace-nowrap text-[#1a1a24]`}>{cell}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={total} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} />
            </>
          )}
        </div>
      </div>
      <div className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

// ==================== Pagination ====================

function Pagination({ currentPage, totalPages, totalItems, onPageChange, itemsPerPage = 10 }: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}) {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };
  const visiblePages = getVisiblePages();

  return (
    <div className="bg-[#f9fafb] h-[79px] rounded-bl-[10px] rounded-br-[10px] w-full shrink-0 relative">
      <div className="absolute border-[#e5e7eb] border-t border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="flex items-center justify-between pt-[17px] px-[24px] w-full h-full">
        <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          第 {currentPage} 頁，共 {totalPages} 頁（顯示 {start}-{end} / {totalItems} 筆）
        </span>
        <div className="flex items-center gap-[8px] h-[32px] shrink-0">
          {/* Prev */}
          <button
            className={`relative rounded-[4px] size-[32px] shrink-0 ${currentPage === 1 ? 'bg-[#dbdbdb] opacity-50' : 'bg-white cursor-pointer hover:bg-[#f0f0f0]'}`}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <div className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex items-center justify-center p-px size-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="#747480" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </button>
          {/* Page Numbers */}
          {visiblePages.map((page) => (
            <button
              key={page}
              className={`relative rounded-[4px] size-[32px] shrink-0 ${page === currentPage ? 'bg-[#ffe600]' : 'cursor-pointer hover:bg-[#f0f0f0]'}`}
              onClick={() => onPageChange(page)}
            >
              {page !== currentPage && <div className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />}
              <div className="flex items-center justify-center size-full">
                <span className={`font-['EYInterstate:Regular',sans-serif] text-[14px] leading-[20px] tracking-[0.42px] text-center ${page === currentPage ? 'text-[#1a1a24]' : 'text-[#747480]'}`}>{page}</span>
              </div>
            </button>
          ))}
          {/* Next */}
          <button
            className={`relative rounded-[4px] size-[32px] shrink-0 ${currentPage === totalPages ? 'bg-[#dbdbdb] opacity-50' : 'bg-white cursor-pointer hover:bg-[#f0f0f0]'}`}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <div className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex items-center justify-center p-px size-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#1A1A24" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== Main Content Area ====================

function IntelligenceContent({ onNavigate, companyName, selectedRiskTypes }: { onNavigate?: (page: string) => void; companyName?: string; selectedRiskTypes?: string[] }) {
  const info = getCompanyInfo(companyName || '');
  // Filter categories based on selectedRiskTypes (unchecked = display none)
  const visibleCategories = info.categories.filter(c => isSectionVisible(c.id, selectedRiskTypes));
  const firstActiveId = visibleCategories.find(c => c.count > 0)?.id || visibleCategories[0]?.id || 'suspected-chinese';
  const [activeCategory, setActiveCategory] = useState(firstActiveId);
  const isScrollingRef = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const SECTION_IDS = visibleCategories.map(c => c.id);

  // Scroll spy: observe which section is in view and update active sidebar
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });
          // Don't update if we're programmatically scrolling
          if (isScrollingRef.current) return;
          // Pick the first visible section in order
          for (const sId of SECTION_IDS) {
            if (visibleSections.has(sId)) {
              setActiveCategory(sId);
              break;
            }
          }
        },
        { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      isScrollingRef.current = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Re-enable scroll spy after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, []);

  return (
    <div className="bg-white w-full shrink-0">
      <div className="flex flex-col items-start pt-[24px] px-[32px] w-full">
        <div className="flex gap-[20px] items-start w-full shrink-0">
          <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} categories={visibleCategories} />
          <div ref={contentRef} className="flex flex-col gap-[24px] items-start pb-[32px] shrink-0" style={{ width: 'calc(100% - 260px)' }}>
            {isSectionVisible('suspected-chinese', selectedRiskTypes) && info.categories.find(c => c.id === 'suspected-chinese') && (
              <div id="section-suspected-chinese" className="scroll-mt-[24px] w-full">
                {(info.categories.find(c => c.id === 'suspected-chinese')?.count || 0) > 0
                  ? <SuspectedChineseCard />
                  : <EmptyCard title="疑似中資" count="0" message="查無疑似中資相關紀錄" />
                }
              </div>
            )}
            {isSectionVisible('realtime-intel', selectedRiskTypes) && (
              <div id="section-realtime-intel" className="scroll-mt-[24px] w-full">
                {(info.categories.find(c => c.id === 'realtime-intel')?.count || 0) > 0
                  ? <RealtimeIntelCard data={info.realtimeIntelData} />
                  : <EmptyCard title="即時情資" count="0" message="查無即時情資" />
                }
              </div>
            )}
            {isSectionVisible('bidding-ban', selectedRiskTypes) && (
              <div id="section-bidding-ban" className="scroll-mt-[24px] w-full">
                <EmptyCard title="標案拒往" count={String(info.categories.find(c => c.id === 'bidding-ban')?.count || 0)} message="經查政府採購網，該公司目前信用狀態正常。" />
              </div>
            )}
            {isSectionVisible('judicial', selectedRiskTypes) && (
              <div id="section-judicial" className="scroll-mt-[24px] w-full">
                {info.judicialData && info.judicialData.length > 0
                  ? <JudicialCard data={info.judicialData} totalCount={info.categories.find(c => c.id === 'judicial')?.count} />
                  : <EmptyCard title="司法判決" count={String(info.categories.find(c => c.id === 'judicial')?.count || 0)} message="查無司法判決紀錄" />
                }
              </div>
            )}
            {isSectionVisible('government-bid', selectedRiskTypes) && (
              <div id="section-government-bid" className="scroll-mt-[24px] w-full">
                {info.governmentBidData && info.governmentBidData.length > 0
                  ? <GovernmentBidCard data={info.governmentBidData} totalCount={info.categories.find(c => c.id === 'government-bid')?.count} />
                  : <EmptyCard title="政府標案" count={String(info.categories.find(c => c.id === 'government-bid')?.count || 0)} message={
                      (info.categories.find(c => c.id === 'government-bid')?.count || 0) > 0
                        ? `共 ${info.categories.find(c => c.id === 'government-bid')?.count} 筆政府標案紀錄`
                        : '查無政府標案'
                    } />
                }
              </div>
            )}
            {isSectionVisible('suspected-relation', selectedRiskTypes) && (
              <div id="section-suspected-relation" className="scroll-mt-[24px] w-full">
                {info.relationData && info.relationData.length > 0
                  ? <RelationTableCard data={info.relationData} totalCount={info.categories.find(c => c.id === 'suspected-relation')?.count || info.relationData.length} />
                  : <RelationTableCard />
                }
              </div>
            )}
            {isSectionVisible('penalty', selectedRiskTypes) && (
              <div id="section-penalty" className="scroll-mt-[24px] w-full">
                <EmptyCard title="違規裁罰" count={String(info.categories.find(c => c.id === 'penalty')?.count || 0)} message="查無違規裁罰紀錄" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== SBOM Content ====================

const SBOM_DATA = [
  { component: 'log4j-core', group: 'org.apache.logging.log4j', version: '2.14.1', risk: 'high' as const, status: 'overdue' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'buffer-from', group: 'npm', version: '2.5.6', risk: 'high' as const, status: 'pending' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'spring-boot-starter', group: 'npm', version: '18.2.0', risk: 'medium' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'spring-boot-starter', group: 'npm', version: '18.2.0', risk: 'medium' as const, status: 'processing' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
  { component: 'jackson-databind', group: 'com.fasterxml.jackson.', version: '4.17.19', risk: 'low' as const, status: 'resolved' as const, summary: 'CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints.' },
];

function RiskBadge({ risk }: { risk: 'high' | 'medium' | 'low' }) {
  const config = {
    high: { bg: 'bg-[#ffe2e2]', border: 'border-[#ffc9c9]', dot: 'bg-[#ec5242]', text: 'text-[#ec5242]', label: '高風險' },
    medium: { bg: 'bg-[#ffedd4]', border: 'border-[#ffd59a]', dot: 'bg-[#ee762f]', text: 'text-[#ee762f]', label: '中風險' },
    low: { bg: 'bg-[#fff8b5]', border: 'border-[#fff169]', dot: 'bg-[#ff9d00]', text: 'text-[#ff9d00]', label: '低風險' },
  }[risk];

  return (
    <div className={`${config.bg} flex gap-[2px] items-center justify-center px-[8px] py-[4px] rounded-[4px] relative`}>
      <div aria-hidden="true" className={`absolute border ${config.border} border-solid inset-0 pointer-events-none rounded-[4px]`} />
      <div className={`${config.dot} rounded-full shrink-0 size-[8px]`} />
      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] shrink-0 ${config.text} text-[13px] whitespace-nowrap`} style={{ fontVariationSettings: "'wght' 400" }}>
        {config.label}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: 'overdue' | 'pending' | 'processing' | 'resolved' }) {
  const config = {
    overdue: { color: '#ec5242', label: '已逾期' },
    pending: { color: '#ee762f', label: '尚未處理' },
    processing: { color: '#2196f3', label: '處理中' },
    resolved: { color: '#419d48', label: '已處理' },
  }[status];

  return (
    <div className="flex gap-[4px] items-center shrink-0 w-[80px]">
      <div className="relative shrink-0 size-[14px]">
        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill={config.color} r="7" />
        </svg>
        {status === 'resolved' && (
          <svg className="absolute top-[3.5px] left-[3.5px] size-[7px]" fill="none" viewBox="0 0 8 6">
            <path d="M1 3L3 5L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </svg>
        )}
        {status === 'overdue' && (
          <svg className="absolute top-[3.5px] left-[3.5px] size-[7px]" fill="none" viewBox="0 0 7 7">
            <path d="M6 1L1 6" stroke="white" strokeLinecap="round" strokeWidth="1.12" />
            <path d="M1 1L6 6" stroke="white" strokeLinecap="round" strokeWidth="1.12" />
          </svg>
        )}
        {status === 'pending' && (
          <svg className="absolute top-[3px] left-[6px] size-[2px]" fill="none" viewBox="0 0 2 8">
            <path d="M1 1V5" stroke="white" strokeLinecap="round" strokeWidth="1.12" />
            <path d="M1 7H1.007" stroke="white" strokeLinecap="round" strokeWidth="1.12" />
          </svg>
        )}
        {status === 'processing' && (
          <svg className="absolute top-[4px] left-[4px] size-[6px]" fill="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" r="2" stroke="white" strokeWidth="1" />
          </svg>
        )}
      </div>
      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[16px] tracking-[0.48px] whitespace-nowrap ${status === 'overdue' ? 'text-[#ec5242]' : 'text-[#1a1a24]'}`} style={{ fontVariationSettings: "'wght' 400" }}>
        {config.label}
      </p>
    </div>
  );
}

function SbomContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: '全部', count: 30 },
    { id: 'pending', label: '待處理', count: 2 },
    { id: 'processing', label: '處理中', count: 6 },
    { id: 'resolved', label: '已處理', count: 20 },
    { id: 'overdue', label: '已逾期', count: 2 },
  ];

  const totalPages = 3;
  const totalItems = 30;
  const itemsPerPage = 10;

  return (
    <div className="bg-white w-full shrink-0">
      <div className="flex flex-col items-start px-px py-[24px] w-full">
        {/* Title row */}
        <div className="w-full">
          <div className="flex items-center justify-between px-[32px] w-full">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
              弱點分析結果列表
            </p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              最後更新：2025/12/02 14:30
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-full">
          <div className="flex gap-[24px] items-center justify-center pb-[20px] pt-[12px] px-[32px] w-full">
            <div className="bg-[#f6f6fa] flex-1 rounded-[8px]">
              <div className="flex flex-col items-start px-[12px] py-[14px] w-full">
                <div className="flex gap-[8px] items-center w-full">
                  <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="搜尋案件編號或供應商..."
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] flex-1 bg-transparent text-[#1a1a24] text-[16px] tracking-[0.48px] outline-none border-none placeholder:text-[#747480]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  />
                </div>
              </div>
            </div>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              共 15 筆
            </p>
          </div>
        </div>

        {/* Filter pills + actions */}
        <div className="w-full">
          <div className="flex gap-[16px] items-center px-[32px] py-[12px] w-full">
            <div className="flex flex-1 gap-[12px] h-[40px] items-center">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full px-[16px] py-[8px] shrink-0 transition-colors ${
                    activeFilter === f.id ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#dddde5]'
                  }`}
                >
                  <p className={`font-['EYInterstate:${activeFilter === f.id ? 'Bold' : 'Regular'}','Noto_Sans_JP:${activeFilter === f.id ? 'Bold' : 'Regular'}',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap`} style={{ fontVariationSettings: activeFilter === f.id ? "'wght' 700" : "'wght' 400" }}>
                    {f.label} ({f.count})
                  </p>
                </button>
              ))}
            </div>
            {/* 進階搜尋 */}
            <div className="flex gap-[4px] items-center cursor-pointer hover:opacity-70 transition-opacity">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M3.333 17.5V11.667" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M3.333 8.333V2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M10 17.5V10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M10 6.667V2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16.667 17.5V13.333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16.667 10V2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M0.833 11.667H5.833" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M7.5 6.667H12.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M14.167 13.333H19.167" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                進階搜尋
              </p>
            </div>
            {/* 匯出報告 */}
            <div className="flex gap-[4px] items-center cursor-pointer hover:opacity-70 transition-opacity">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M17.5 12.5V15.833C17.5 16.275 17.324 16.699 17.012 17.012C16.699 17.324 16.275 17.5 15.833 17.5H4.167C3.725 17.5 3.301 17.324 2.988 17.012C2.676 16.699 2.5 16.275 2.5 15.833V12.5" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M5.833 8.333L10 12.5L14.167 8.333" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M10 12.5V2.5" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                匯出報告
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full">
          <div className="overflow-clip rounded-[inherit] w-full">
            <div className="flex flex-col gap-px items-start px-[32px] w-full">
              {/* Table Header */}
              <div className="bg-[#f6f6fa] flex gap-[8px] h-[56px] items-center w-full shrink-0">
                <div className="flex items-center justify-center px-[24px] py-[16px] shrink-0 w-[240px]">
                  <p className="flex-1 font-['EYInterstate:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]">Component</p>
                </div>
                <div className="flex items-center py-[16px] shrink-0 w-[240px]">
                  <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">Group</p>
                </div>
                <div className="flex items-start justify-center px-[24px] py-[16px] shrink-0 w-[120px]">
                  <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">Version</p>
                </div>
                <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[170px]">
                  <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">Vulnerabilities</p>
                </div>
                <div className="flex flex-1 items-center py-[16px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] w-[66px]" style={{ fontVariationSettings: "'wght' 600" }}>處理進度</p>
                </div>
                <div className="flex items-center py-[16px] shrink-0 w-[260px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>摘要內容</p>
                </div>
                <div className="flex items-center justify-end px-[24px] py-[16px] shrink-0 w-[100px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>操作</p>
                </div>
              </div>

              {/* Table Rows */}
              {SBOM_DATA.map((row, i) => {
                const isHighRisk = row.risk === 'high';
                const textColor = isHighRisk ? 'text-[#ec5242]' : 'text-[#1a1a24]';
                return (
                  <div key={i} className="flex gap-[8px] items-center w-full shrink-0 relative">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                    {/* Component */}
                    <div className="flex items-center justify-center pl-[24px] py-[16px] shrink-0 w-[240px]">
                      <p className={`flex-1 font-['EYInterstate:Regular',sans-serif] leading-[23px] ${textColor} text-[16px] tracking-[0.48px]`}>{row.component}</p>
                    </div>
                    {/* Group */}
                    <div className="flex items-center py-[16px] shrink-0 w-[240px]">
                      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] ${textColor} text-[16px] tracking-[0.48px] whitespace-nowrap`}>{row.group}</p>
                    </div>
                    {/* Version */}
                    <div className="flex items-center justify-center px-[24px] py-[16px] shrink-0 w-[120px]">
                      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] ${textColor} text-[16px] text-center tracking-[0.48px] whitespace-nowrap`}>{row.version}</p>
                    </div>
                    {/* Vulnerabilities */}
                    <div className="flex items-start pl-[24px] pr-[15px] py-[16px] shrink-0 w-[170px]">
                      <RiskBadge risk={row.risk} />
                    </div>
                    {/* 處理進度 */}
                    <div className="flex flex-1 items-center py-[16px]">
                      <StatusBadge status={row.status} />
                    </div>
                    {/* 摘要內容 */}
                    <div className="flex items-center py-[16px] shrink-0 w-[260px]">
                      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] ${textColor} text-[16px] tracking-[0.48px] overflow-hidden text-ellipsis whitespace-nowrap w-full`}>{row.summary}</p>
                    </div>
                    {/* 操作 */}
                    <div className="flex items-center justify-end pr-[24px] py-[16px] shrink-0 w-[100px]">
                      <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wght' 400" }}>
                        查看
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
              <div className="bg-[#f9fafb] h-[79px] w-full rounded-bl-[10px] rounded-br-[10px] relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
                <div className="flex items-center justify-between pt-[17px] px-[24px] w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                    顯示 {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} 筆，共 {totalItems} 筆
                  </p>
                  <div className="flex gap-[8px] items-center">
                    {/* Prev */}
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`size-[32px] rounded-[4px] flex items-center justify-center relative ${currentPage === 1 ? 'bg-[#dbdbdb] opacity-50' : 'bg-white hover:bg-[#f0f0f0] cursor-pointer'}`}
                    >
                      {currentPage !== 1 && <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />}
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path d="M10 12L6 8L10 4" stroke={currentPage === 1 ? '#747480' : '#1A1A24'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                      </svg>
                    </button>
                    {/* Pages */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`size-[32px] rounded-[4px] flex items-center justify-center relative ${
                          page === currentPage ? 'bg-[#ffe600]' : 'hover:bg-[#f0f0f0] cursor-pointer'
                        }`}
                      >
                        {page !== currentPage && <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />}
                        <p className={`font-['EYInterstate:Regular',sans-serif] leading-[20px] text-[14px] text-center tracking-[0.42px] ${page === currentPage ? 'text-[#1a1a24]' : 'text-[#747480]'}`}>
                          {page}
                        </p>
                      </button>
                    ))}
                    {/* Next */}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`size-[32px] rounded-[4px] flex items-center justify-center relative ${currentPage === totalPages ? 'bg-[#dbdbdb] opacity-50' : 'bg-white hover:bg-[#f0f0f0] cursor-pointer'}`}
                    >
                      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path d="M6 12L10 8L6 4" stroke={currentPage === totalPages ? '#747480' : '#1A1A24'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Main Export ====================

export function IntelligenceDetailContent({ onNavigate, supplierName, source = 'intelligence-tracking', selectedRiskTypes }: IntelligenceDetailContentProps) {
  const [activeTab, setActiveTab] = useState('intelligence');
  const [showCompanyInfoModal, setShowCompanyInfoModal] = useState(false);
  const companyName = supplierName || '新加坡商認和科技有限公司';
  const info = getCompanyInfo(companyName);
  const isSuspectedChinese = (info.categories.find(c => c.id === 'suspected-chinese')?.count || 0) > 0;
  const companyBasicInfo = getCompanyBasicInfo(companyName) || {
    name: companyName,
    taxId: info.taxId,
    industry: info.industry,
    representative: info.representative,
    address: '',
    phone: '',
    alertSummary: '',
  };

  const handleAlertViewClick = () => {
    // Ensure we're on the intelligence tab first
    setActiveTab('intelligence');
    // Wait for tab content to render, then scroll
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById('section-suspected-chinese');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  };

  return (
    <div className="bg-[#ececf3] flex flex-col items-center rounded-tl-[32px] rounded-tr-[32px] w-full z-[1] relative pb-[32px]">
      {/* Info Section - 1440px container */}
      <div className="flex flex-col gap-[16px] items-start px-[32px] shrink-0 w-[1440px] max-w-full pt-[40px]">
        <Breadcrumb companyName={companyName} source={source} onNavigate={onNavigate} />
        <TitleBar companyName={companyName} />
        <CompanyInfoAndCards companyName={companyName} onNavigate={onNavigate} onShowMore={() => setShowCompanyInfoModal(true)} />
      </div>

      {/* Tab + Content - 1440px container */}
      <div className="flex flex-col items-start px-[32px] shrink-0 w-[1440px] max-w-full pt-[40px]">
        <div className="flex flex-col items-start overflow-clip rounded-[8px] w-full shrink-0">
          {info.hasDatabase ? (
            <>
              <TabBar activeTab={activeTab} onTabChange={setActiveTab} hasDatabase={info.hasDatabase} />
              {activeTab === 'intelligence' && <IntelligenceContent onNavigate={onNavigate} companyName={companyName} selectedRiskTypes={selectedRiskTypes} />}
              {activeTab === 'sbom' && <SbomContent />}
            </>
          ) : (
            <>
              <IntelligenceTrackingTitle />
              <IntelligenceContent onNavigate={onNavigate} companyName={companyName} selectedRiskTypes={selectedRiskTypes} />
            </>
          )}
        </div>
      </div>

      {/* 公司基本資料彈窗 */}
      {showCompanyInfoModal && companyBasicInfo && (
        <CompanyInfoModal
          company={companyBasicInfo}
          onClose={() => setShowCompanyInfoModal(false)}
          onViewDetail={() => setShowCompanyInfoModal(false)}
        />
      )}
    </div>
  );
}
