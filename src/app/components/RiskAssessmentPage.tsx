import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import svgPaths from '../../imports/svg-vd3txnfj0u';
import svgPaths2 from '../../imports/svg-azvftqyjok';

interface RiskAssessmentPageProps {
  onNavigate?: (page: string, project?: string) => void;
}

// ==================== Data ====================

interface AssessmentItem {
  id: string; // 新增 ID 用於識別記錄
  projectName: string;
  supplier: string;
  risk: 'high' | 'medium' | 'low' | 'none';
  status: string;
  statusType: 'waiting' | 'replied' | 'overdue' | 'draft' | 'sent';
  deadline: string;
  actionType: 'viewOnly' | 'continueFill' | 'approved' | 'refill' | 'notifyVendor';
}

interface YearSummary {
  outsourcingHigh: number; outsourcingMedium: number; outsourcingLow: number;
  outsourcingTrend: string; outsourcingTrendPositive: boolean;
  supplierHigh: number; supplierMedium: number; supplierLow: number;
  supplierTrend: string; supplierTrendPositive: boolean;
}

const YEAR_SUMMARY: Record<number, YearSummary> = {
  2026: { outsourcingHigh: 4, outsourcingMedium: 2, outsourcingLow: 2, outsourcingTrend: '比去年降低 2 件高風險', outsourcingTrendPositive: true, supplierHigh: 7, supplierMedium: 2, supplierLow: 2, supplierTrend: '比去年新增 1 件高風險', supplierTrendPositive: false },
  2025: { outsourcingHigh: 6, outsourcingMedium: 3, outsourcingLow: 1, outsourcingTrend: '比去年新增 3 件高風險', outsourcingTrendPositive: false, supplierHigh: 6, supplierMedium: 3, supplierLow: 3, supplierTrend: '比去年新增 2 件高風險', supplierTrendPositive: false },
  2024: { outsourcingHigh: 3, outsourcingMedium: 2, outsourcingLow: 2, outsourcingTrend: '比去年降低 1 件高風險', outsourcingTrendPositive: true, supplierHigh: 4, supplierMedium: 2, supplierLow: 3, supplierTrend: '比去年持平', supplierTrendPositive: true },
  2023: { outsourcingHigh: 4, outsourcingMedium: 1, outsourcingLow: 3, outsourcingTrend: '比去年新增 1 件高風險', outsourcingTrendPositive: false, supplierHigh: 4, supplierMedium: 3, supplierLow: 2, supplierTrend: '比去年降低 1 件高風險', supplierTrendPositive: true },
  2022: { outsourcingHigh: 3, outsourcingMedium: 2, outsourcingLow: 2, outsourcingTrend: '首年度評估', outsourcingTrendPositive: true, supplierHigh: 5, supplierMedium: 2, supplierLow: 1, supplierTrend: '首年度評估', supplierTrendPositive: true },
};

const OUTSOURCING_BY_YEAR: Record<number, AssessmentItem[]> = {
  2026: [
    { projectName: '授信審查流程', supplier: '風險管理部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2026.04.15', actionType: 'continueFill' },
    { projectName: '開戶作業流程', supplier: '個金業務部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2026.04.30', actionType: 'continueFill' },
    { projectName: '貸款核貸流程', supplier: '審查部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2026.03.31', actionType: 'approved' },
    { projectName: '信用卡審核流程', supplier: '數位金融部', risk: 'low', status: '尚未完成填寫', statusType: 'draft', deadline: '2026.05.15', actionType: 'continueFill' },
    { projectName: '理財商品上架流程', supplier: '財富管理部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.05.01', actionType: 'refill' },
    { projectName: '資訊安全監控流程', supplier: '資訊科技部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.28', actionType: 'refill' },
    { projectName: '資料備份維護流程', supplier: '營運作業部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.03.01', actionType: 'refill' },
    { projectName: '網路銀行維護流程', supplier: '數位金融部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.15', actionType: 'refill' },
  ],
  2025: [
    { projectName: '洗錢防制監修流程', supplier: '法令遵循部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2025.04.10', actionType: 'continueFill' },
    { projectName: '內部稽核查核流程', supplier: '稽核處', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2025.04.25', actionType: 'continueFill' },
    { projectName: '客戶資料管理流程', supplier: '營運管理部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2025.05.01', actionType: 'continueFill' },
    { projectName: '雲端系統部署流程', supplier: '資訊處', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2025.03.20', actionType: 'approved' },
    { projectName: '電子支付結算流程', supplier: '支付金融部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.28', actionType: 'refill' },
    { projectName: '分行作業標準化流程', supplier: '通路管理部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.03.05', actionType: 'refill' },
    { projectName: '資產負債管理流程', supplier: '財務部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.01.31', actionType: 'refill' },
    { projectName: '電子簽章應用流程', supplier: '法務部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.15', actionType: 'refill' },
    { projectName: '客服中心通報流程', supplier: '客戶服務部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.01.20', actionType: 'refill' },
    { projectName: '弱點掃描修復流程', supplier: '資安部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.10', actionType: 'refill' },
  ],
  2024: [
    { projectName: '核心系統升級流程', supplier: '資訊科技部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2024.06.30', actionType: 'approved' },
    { projectName: '網路架構調整流程', supplier: '網路管理部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2024.05.15', actionType: 'approved' },
    { projectName: '服務台委外管理流程', supplier: '行政管理部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2024.04.20', actionType: 'continueFill' },
    { projectName: '災害復原演練流程', supplier: '風險管控部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2024.04.30', actionType: 'continueFill' },
    { projectName: '郵件安全強化流程', supplier: '資訊安全部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.03.01', actionType: 'refill' },
    { projectName: '端點偵測部署流程', supplier: '資安監控部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.02.20', actionType: 'refill' },
    { projectName: '機房電力維修流程', supplier: '總務部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.02.28', actionType: 'refill' },
  ],
  2023: [
    { projectName: '人事薪資作業流程', supplier: '人力資源部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2023.06.15', actionType: 'approved' },
    { projectName: '文件檔案管理流程', supplier: '文書部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2023.05.30', actionType: 'approved' },
    { projectName: '企業網站更新流程', supplier: '行銷企劃部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2023.07.01', actionType: 'approved' },
    { projectName: '雲端儲存應用流程', supplier: '數位金融部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2023.04.15', actionType: 'continueFill' },
    { projectName: '資安健康檢查流程', supplier: '資訊安全部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.03.10', actionType: 'refill' },
    { projectName: '網路設備維修流程', supplier: '系統管理部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.02.28', actionType: 'refill' },
    { projectName: '影像辨識導入流程', supplier: '人工智慧小組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.03.15', actionType: 'refill' },
    { projectName: '客服委外評估流程', supplier: '客戶關係部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.01.31', actionType: 'refill' },
  ],
  2022: [
    { projectName: '辦公室佈線工程流程', supplier: '總務部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2022.06.30', actionType: 'approved' },
    { projectName: '防毒軟體採購流程', supplier: '資訊安全部', risk: 'low', status: '已送出等待批准', statusType: 'sent', deadline: '2022.05.15', actionType: 'approved' },
    { projectName: '設備租賃管理流程', supplier: '採購部', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2022.04.20', actionType: 'continueFill' },
    { projectName: '電子公文傳遞流程', supplier: '秘書室', risk: 'medium', status: '尚未完成填寫', statusType: 'draft', deadline: '2022.04.30', actionType: 'continueFill' },
    { projectName: '差勤系統維護流程', supplier: '人力資源部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.03.01', actionType: 'refill' },
    { projectName: '機房空調維護流程', supplier: '工務部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.02.28', actionType: 'refill' },
    { projectName: '內部入口網站流程', supplier: '資訊處', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.02.15', actionType: 'refill' },
  ],
};

const SUPPLIER_BY_YEAR: Record<number, AssessmentItem[]> = {
  2026: [
    { projectName: '基金帳務升級流程', supplier: '信託部', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2026.04.15', actionType: 'viewOnly' },
    { projectName: '門禁監控維護流程', supplier: '安全管理部', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2026.04.30', actionType: 'viewOnly' },
    { projectName: '備份異地存放流程', supplier: '營運中心', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2026.03.31', actionType: 'approved' },
    { projectName: '郵件系統遷移流程', supplier: '資訊科技處', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2026.04.20', actionType: 'approved' },
    { projectName: '內部通訊建置流程', supplier: '數位平台部', risk: 'high', status: '廠商已回覆', statusType: 'replied', deadline: '2026.03.15', actionType: 'approved' },
    { projectName: '資安威脅偵測流程', supplier: '資安監控小組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.20', actionType: 'notifyVendor' },
    { projectName: '網路維運委外流程', supplier: '通訊網路部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.03.10', actionType: 'notifyVendor' },
    { projectName: '數據中心託管服務流程', supplier: '基礎建設部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.28', actionType: 'notifyVendor' },
    { projectName: '行動裝置管理流程', supplier: '資訊處', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.03.05', actionType: 'notifyVendor' },
    { projectName: '客服雲端系統流程', supplier: '客戶關懷中心', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.18', actionType: 'notifyVendor' },
    { projectName: 'ERP 支援服務流程', supplier: '會計部', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2026.02.10', actionType: 'notifyVendor' },
  ],
  2025: [
    { projectName: '法遵監控平台流程', supplier: '合規部', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2025.04.10', actionType: 'viewOnly' },
    { projectName: '印表機維護流程', supplier: '總務組', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2025.04.25', actionType: 'viewOnly' },
    { projectName: '資料庫授權管理流程', supplier: '系統管理組', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2025.05.01', actionType: 'viewOnly' },
    { projectName: '端點安全防護流程', supplier: '資安二科', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2025.03.20', actionType: 'approved' },
    { projectName: '雲端運算應用流程', supplier: '新技術開發部', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2025.03.31', actionType: 'approved' },
    { projectName: '身分認證管理流程', supplier: '權限控管組', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2025.04.15', actionType: 'approved' },
    { projectName: '桌面虛擬化流程', supplier: '資訊服中心', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.28', actionType: 'notifyVendor' },
    { projectName: '負載平衡設定流程', supplier: '網路二科', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.01.31', actionType: 'notifyVendor' },
    { projectName: '數位簽章驗證流程', supplier: '認證小組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.15', actionType: 'notifyVendor' },
    { projectName: 'SIEM 平台維護流程', supplier: '資安中心', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.01.20', actionType: 'notifyVendor' },
    { projectName: '影音設備維護流程', supplier: '行政組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.02.10', actionType: 'notifyVendor' },
    { projectName: '機房監控維修流程', supplier: '設施管理組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2025.03.05', actionType: 'notifyVendor' },
  ],
  2024: [
    { projectName: '自動測試部署流程', supplier: '品保部', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2024.04.10', actionType: 'viewOnly' },
    { projectName: '軟體資產盤點流程', supplier: '版權管理組', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2024.04.25', actionType: 'viewOnly' },
    { projectName: 'SSL 憑證管理流程', supplier: '網域服務組', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2024.03.20', actionType: 'approved' },
    { projectName: '授權軟體續約流程', supplier: '行政處', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2024.03.31', actionType: 'approved' },
    { projectName: 'UPS 備援檢修流程', supplier: '機房營運組', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2024.04.15', actionType: 'approved' },
    { projectName: '資安事件應處流程', supplier: '應變小組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.02.28', actionType: 'notifyVendor' },
    { projectName: '交換器更新流程', supplier: '網管一科', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.01.31', actionType: 'notifyVendor' },
    { projectName: '電話系統維護流程', supplier: '總機組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.02.15', actionType: 'notifyVendor' },
    { projectName: 'API 介接管理流程', supplier: '開發科', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2024.03.05', actionType: 'notifyVendor' },
  ],
  2023: [
    { projectName: '報表分析應用流程', supplier: '數據分析部', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2023.04.10', actionType: 'viewOnly' },
    { projectName: '門禁系統升級流程', supplier: '警衛室', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2023.04.25', actionType: 'viewOnly' },
    { projectName: '郵件歸檔管理流程', supplier: '資訊一科', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2023.05.01', actionType: 'viewOnly' },
    { projectName: '伺服器虛擬化流程', supplier: '系統一科', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2023.03.20', actionType: 'approved' },
    { projectName: '備份軟體更新流程', supplier: '維運組', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2023.03.31', actionType: 'approved' },
    { projectName: '防火牆規則調整流程', supplier: '資安一科', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.02.28', actionType: 'notifyVendor' },
    { projectName: '伺服器主機建置流程', supplier: '硬體維護組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.01.31', actionType: 'notifyVendor' },
    { projectName: '資料庫效能優化流程', supplier: 'DBA 組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.02.15', actionType: 'notifyVendor' },
    { projectName: '環控系統巡檢流程', supplier: '廠務組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2023.03.05', actionType: 'notifyVendor' },
  ],
  2022: [
    { projectName: 'Wi-Fi 訊號優化流程', supplier: '網路二組', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2022.04.10', actionType: 'viewOnly' },
    { projectName: '辦公電腦更換流程', supplier: '資訊服二科', risk: 'medium', status: '等待廠商回覆', statusType: 'waiting', deadline: '2022.04.25', actionType: 'viewOnly' },
    { projectName: '防毒授權核對流程', supplier: '資安二組', risk: 'low', status: '廠商已回覆', statusType: 'replied', deadline: '2022.03.20', actionType: 'approved' },
    { projectName: '郵件通訊管理流程', supplier: '資訊一組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.02.28', actionType: 'notifyVendor' },
    { projectName: '消防設施檢測流程', supplier: '安管組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.01.31', actionType: 'notifyVendor' },
    { projectName: '辦公軟體續約流程', supplier: '總務一組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.02.15', actionType: 'notifyVendor' },
    { projectName: '網路頻寬監控流程', supplier: '監控中心', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.03.05', actionType: 'notifyVendor' },
    { projectName: '儲存空間擴充流程', supplier: '系統二組', risk: 'high', status: '已逾期', statusType: 'overdue', deadline: '2022.02.10', actionType: 'notifyVendor' },
  ],
};

// ==================== Sub Components ====================

function Breadcrumb({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="flex gap-[8px] h-[24px] items-center">
      <button onClick={() => onNavigate?.('home')} className="cursor-pointer bg-transparent border-none p-0 hover:opacity-70 transition-opacity">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap hover:text-[#1a1a24] transition-colors">首頁</p>
      </button>
      <div className="shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 16 16">
          <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </svg>
      </div>
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px] whitespace-nowrap" style={{ fontWeight: 700 }}>法令遵循定期評估作業</p>
    </div>
  );
}

// ==================== Expiring Detail Modal ====================
function ExpiringDetailModal({ 
  isOpen, 
  onClose, 
  type, 
  items 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  type: 'outsourcing' | 'supplier'; 
  items: AssessmentItem[];
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => { document.removeEventListener('mousedown', handleClickOutside); document.removeEventListener('keydown', handleEsc); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title = type === 'outsourcing' ? '即將到期 — 法令遵循定期評估作業' : '即將到期 — 內部控制制度自行查核';
  const statusLabel = type === 'outsourcing' ? '已送出等待批准' : '等待廠商回覆';
  const statusColor = type === 'outsourcing' ? '#EE762F' : '#2E7CF6';

  const riskLabelMap: Record<string, { label: string; bg: string; text: string }> = {
    high: { label: '高風險', bg: '#ffe2e2', text: '#ec5242' },
    medium: { label: '中風險', bg: '#ffedd4', text: '#EE762F' },
    low: { label: '低風險', bg: '#ddffdf', text: '#419D48' },
    none: { label: '無', bg: '#f6f6fa', text: '#747480' },
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      {/* Modal */}
      <div ref={modalRef} className="relative bg-white rounded-[12px] w-[720px] max-h-[80vh] flex flex-col shadow-2xl overflow-hidden" style={{ animation: 'modalFadeIn 0.2s ease-out' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-[32px] py-[20px] border-b border-[#e5e7eb]">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#ffe2e2] flex flex-col items-start pt-[8px] px-[8px] rounded-[4px] shrink-0 size-[36px]">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]">
                  <div className="absolute inset-[-5.55%_-5%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 22.0159 20.014">
                      <path d={svgPaths.p2d23b080} stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]">
                  <div className="absolute inset-[-25%_-1px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 2 6">
                      <path d="M1 1V5" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]">
                  <div className="absolute inset-[-1px_-9999.77%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 2.01 2">
                      <path d="M1 1H1.01" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] leading-[normal] whitespace-nowrap" style={{ fontWeight: 700 }}>{title}</p>
          </div>
          <button onClick={onClose} className="bg-transparent border-none cursor-pointer p-[4px] rounded-[4px] hover:bg-[#f6f6fa] transition-colors">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M18 6L6 18" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M6 6L18 18" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
        {/* Sub-header info */}
        <div className="flex items-center gap-[8px] px-[32px] py-[12px] bg-[#f6f6fa]">
          <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            共 {items.length} 筆即將到期項目
          </span>
          <span className="rounded-[4px] px-[8px] py-[2px] text-[13px] whitespace-nowrap font-['EYInterstate:Regular',sans-serif]" style={{ backgroundColor: statusColor + '1A', color: statusColor }}>
            {statusLabel}
          </span>
        </div>
        {/* Table */}
        <div className="flex-1 overflow-y-auto">
          {/* Table Header */}
          <div className="flex items-center border-b border-[#e5e7eb] bg-[#fafafd] sticky top-0 z-[1]">
            <div className="flex items-center px-[32px] py-[12px] w-[260px] shrink-0">
              <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[13px] tracking-[0.39px]" style={{ fontWeight: 700 }}>業務流程</span>
            </div>
            <div className="flex items-center py-[12px] w-[180px] shrink-0">
              <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[13px] tracking-[0.39px]" style={{ fontWeight: 700 }}>部門</span>
            </div>
            <div className="flex items-center justify-center py-[12px] w-[80px] shrink-0">
              <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[13px] tracking-[0.39px]" style={{ fontWeight: 700 }}>風險等級</span>
            </div>
            <div className="flex items-center justify-center py-[12px] w-[100px] shrink-0">
              <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[13px] tracking-[0.39px]" style={{ fontWeight: 700 }}>截止日期</span>
            </div>
            <div className="flex items-center justify-center py-[12px] flex-1">
              <span className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[13px] tracking-[0.39px]" style={{ fontWeight: 700 }}>狀態</span>
            </div>
          </div>
          {/* Table Rows */}
          {items.map((item, idx) => {
            const riskInfo = riskLabelMap[item.risk] || riskLabelMap.none;
            return (
              <div key={idx} className="flex items-center border-b border-[#f0f0f5] hover:bg-[#f9f9fc] transition-colors cursor-pointer">
                <div className="flex items-center px-[32px] py-[14px] w-[260px] shrink-0">
                  <span className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[14px] tracking-[0.42px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">{item.projectName}</span>
                </div>
                <div className="flex items-center py-[14px] w-[180px] shrink-0">
                  <span className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[14px] tracking-[0.42px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">{item.supplier}</span>
                </div>
                <div className="flex items-center justify-center py-[14px] w-[80px] shrink-0">
                  <span className="rounded-[4px] px-[8px] py-[2px] text-[12px] whitespace-nowrap font-['EYInterstate:Regular',sans-serif]" style={{ backgroundColor: riskInfo.bg, color: riskInfo.text }}>{riskInfo.label}</span>
                </div>
                <div className="flex items-center justify-center py-[14px] w-[100px] shrink-0">
                  <span className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap">{item.deadline}</span>
                </div>
                <div className="flex items-center justify-center py-[14px] flex-1">
                  <span className="rounded-[4px] px-[8px] py-[2px] text-[12px] whitespace-nowrap font-['EYInterstate:Regular',sans-serif]" style={{ backgroundColor: statusColor + '1A', color: statusColor }}>{statusLabel}</span>
                </div>
              </div>
            );
          })}
          {items.length === 0 && (
            <div className="flex items-center justify-center py-[40px]">
              <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#9b9ba1] text-[16px]" style={{ fontVariationSettings: "'wght' 400" }}>目前沒有即將到期的項目</span>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end px-[32px] py-[16px] border-t border-[#e5e7eb]">
          <button
            onClick={onClose}
            className="bg-[#1a1a24] rounded-[4px] px-[20px] py-[10px] cursor-pointer hover:bg-[#2e2e38] transition-colors border-none"
          >
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-white text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>關閉</span>
          </button>
        </div>
      </div>
      <style>{`@keyframes modalFadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

// ==================== Expiring Soon Card (Left) ====================
function ExpiringCard({ year, onNavigate }: { year: number; onNavigate?: (page: string) => void }) {
  const outsourcingData = OUTSOURCING_BY_YEAR[year] || [];
  const supplierData = SUPPLIER_BY_YEAR[year] || [];
  // 即將到期: outsourcing = 已送出等待批准 (sent), supplier = 等待廠商回覆 (waiting)
  const outsourcingExpiring = outsourcingData.filter(d => d.statusType === 'sent');
  const supplierExpiring = supplierData.filter(d => d.statusType === 'waiting');

  const [modalType, setModalType] = useState<'outsourcing' | 'supplier' | null>(null);

  return (
    <>
      <div className="backdrop-blur-[42.5px] bg-white flex-[1_0_0] min-h-px min-w-px rounded-[8px]">
        <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
          {/* Header: red alert icon + 即將到期 */}
          <div className="flex items-center w-full">
            <div className="flex gap-[12px] items-center">
              <div className="bg-[#ffe2e2] flex flex-col items-start pt-[8px] px-[8px] rounded-[4px] shrink-0 size-[40px]">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]">
                    <div className="absolute inset-[-5.55%_-5%]">
                      <svg className="block size-full" fill="none" viewBox="0 0 22.0159 20.014">
                        <path d={svgPaths.p2d23b080} stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]">
                    <div className="absolute inset-[-25%_-1px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 2 6">
                        <path d="M1 1V5" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]">
                    <div className="absolute inset-[-1px_-9999.77%]">
                      <svg className="block size-full" fill="none" viewBox="0 0 2.01 2">
                        <path d="M1 1H1.01" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                即將到期
              </p>
            </div>
          </div>
          {/* Two rows: outsourcing sent + supplier waiting counts */}
          <div className="flex flex-col gap-[10px] items-start w-full">
            {/* Row 1: 法令遵循定期評估作業 — 已送出等待批准 */}
            <div className="flex items-end justify-between w-full cursor-pointer group" onClick={() => setModalType('outsourcing')}>
              <div className="flex flex-col items-center justify-center pb-[4px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{`法令遵循定期評估作業 `}</p>
              </div>
              <div className="flex gap-[8px] items-end">
                <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] text-[#ec5242] text-[32px] whitespace-nowrap">{outsourcingExpiring.length}</p>
                <div className="flex items-end pr-[4px]">
                  <div className="flex flex-col items-center justify-center mr-[-4px] pb-[4px] w-[24px]">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>筆</p>
                  </div>
                  <div className="mr-[-4px] shrink-0 size-[24px] group-hover:translate-x-[2px] transition-transform">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M9 17L15 11L9 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2: 內部控制制度自行查核 — 等待廠商回覆 */}
            <div className="flex items-end justify-between w-full cursor-pointer group" onClick={() => setModalType('supplier')}>
              <div className="flex flex-col items-center justify-center pb-[4px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                  內部控制制度自行查核
                </p>
              </div>
              <div className="flex gap-[8px] items-end">
                <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] text-[#ec5242] text-[32px] whitespace-nowrap">{supplierExpiring.length}</p>
                <div className="flex items-end pr-[4px]">
                  <div className="flex flex-col items-center justify-center mr-[-4px] pb-[4px] w-[24px]">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>筆</p>
                  </div>
                  <div className="mr-[-4px] shrink-0 size-[24px] group-hover:translate-x-[2px] transition-transform">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M9 17L15 11L9 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <ExpiringDetailModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'outsourcing'}
        items={modalType === 'outsourcing' ? outsourcingExpiring : supplierExpiring}
      />
    </>
  );
}

// ==================== Summary Card (Middle & Right) ====================
function SummaryCard({ type, year, onNavigate }: { type: 'outsourcing' | 'supplier'; year: number; onNavigate?: (page: string) => void }) {
  const isOutsourcing = type === 'outsourcing';
  const iconBg = isOutsourcing ? '#ddffdf' : '#ffedd4';
  const iconColor = isOutsourcing ? '#419D48' : '#EE762F';
  const title = isOutsourcing ? '法令遵循定期評估作業 ' : '內部控制制度自行查核';
  const buttonText = isOutsourcing ? '立即填寫' : '立即發送';
  const summary = YEAR_SUMMARY[year] || YEAR_SUMMARY[2026];
  const highRisk = isOutsourcing ? summary.outsourcingHigh : summary.supplierHigh;
  const mediumRisk = isOutsourcing ? summary.outsourcingMedium : summary.supplierMedium;
  const lowRisk = isOutsourcing ? summary.outsourcingLow : summary.supplierLow;
  const trendText = isOutsourcing ? summary.outsourcingTrend : summary.supplierTrend;
  const trendPositive = isOutsourcing ? summary.outsourcingTrendPositive : summary.supplierTrendPositive;
  const trendColor = trendPositive ? '#419D48' : '#EE762F';

  return (
    <div className="backdrop-blur-[42.5px] bg-white flex-[1_0_0] min-h-px min-w-px rounded-[8px]">
      <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
        {/* Header: icon + title + button */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[12px] items-center">
            {/* 40x40 colored square icon */}
            <div className="flex flex-col items-start pt-[8px] px-[8px] rounded-[4px] shrink-0 size-[40px]" style={{ backgroundColor: iconBg }}>
              {isOutsourcing ? (
                <div className="relative shrink-0 size-[24px]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths2.p2501aa80} stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M14 2V8H20" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16 13H8" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16 17H8" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10 9H9H8" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              ) : (
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[0_-1.39%_-8.33%_0]">
                    <svg className="block size-full" fill="none" viewBox="0 0 24.333 26">
                      <path d={svgPaths2.p3e29a580} stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths2.p3f070f00} fill="#FFEDD4" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M14 2V8H20" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M13 13H8" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 9H9H8" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#1a1a24] text-[18px] tracking-[0.54px] ${isOutsourcing ? 'w-[186px]' : ''} whitespace-nowrap`} style={{ fontVariationSettings: "'wght' 400" }}>{title}</p>
          </div>
          {/* Black border button */}
          <button
            disabled
            className="bg-[#f6f6fa] min-w-[80px] relative rounded-[4px] shrink-0 cursor-not-allowed border border-[#c4c4cd] border-solid px-[12px] py-[8px] opacity-50"
          >
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{buttonText}</p>
          </button>
        </div>
        {/* Risk counts */}
        <div className="flex items-center justify-between w-full">
          {[{ count: highRisk, label: '高風險' }, { count: mediumRisk, label: '中風險' }, { count: lowRisk, label: '低風險' }].map((item) => (
            <div key={item.label} className="flex gap-[8px] items-end">
              <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] text-[32px] whitespace-nowrap" style={{ color: iconColor }}>{item.count}</p>
              <div className="flex flex-col items-center justify-center pb-[4px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Trend */}
        <div className="flex h-[33px] items-center pt-[17px] w-full relative">
          <div className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex gap-[8px] items-center">
            <div className="shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p86681a0} stroke={trendColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p3d3f320} stroke={trendColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ color: trendColor, fontVariationSettings: "'wght' 400" }}>{trendText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskBadge({ risk }: { risk: 'high' | 'medium' | 'low' | 'none' }) {
  if (risk === 'none') {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-[#ee762f] rounded-[3px] size-[6px]" />
      </div>
    );
  }
  const config = {
    high: { bg: '#ffe2e2', color: '#ec5242', label: '高風險' },
    medium: { bg: '#ffedd4', color: '#ee762f', label: '中風險' },
    low: { bg: '#fff8b5', color: '#ff9d00', label: '低風險' },
  }[risk];

  return (
    <div className="rounded-[4px] inline-flex gap-[5px] items-center px-[10px] py-[8px]" style={{ backgroundColor: config.bg }}>
      <div className="rounded-[3px] size-[6px]" style={{ backgroundColor: config.color }} />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] whitespace-nowrap" style={{ color: config.color }}>{config.label}</p>
    </div>
  );
}

function StatusBadge({ status, statusType }: { status: string; statusType: string }) {
  if (statusType === 'waiting' || statusType === 'draft') {
    // Orange circle with ! icon
    return (
      <div className="flex gap-[4px] items-center">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="#EE762F" r="7" />
          </svg>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <path d="M7 3.5V7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M7 10H7.007" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
      </div>
    );
  }
  if (statusType === 'replied' || statusType === 'sent') {
    // Green circle with checkmark
    return (
      <div className="flex gap-[4px] items-center">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="#419D48" r="7" />
          </svg>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <path d={svgPaths.p27e172ef} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" transform="translate(3, 4)" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
      </div>
    );
  }
  // Overdue - red circle with X
  return (
    <div className="flex gap-[4px] items-center">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="#EC5242" r="7" />
        </svg>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
          <path d="M9.5 4.5L4.5 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          <path d="M4.5 4.5L9.5 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
        </svg>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
    </div>
  );
}

function ActionButtons({ item, onNavigate, approvedRecords, onApprove, activeTab }: { 
  item: AssessmentItem; 
  onNavigate?: (page: string, project?: string) => void;
  approvedRecords: Set<string>;
  onApprove: (projectName: string) => void;
  activeTab: 'outsourcing' | 'supplier';
}) {
  const isApproved = approvedRecords.has(item.projectName);
  const navigate = useNavigate();

  // Tab 2: 資訊供應商風險評估
  if (activeTab === 'supplier') {
    if (item.actionType === 'viewOnly') {
      // 等待廠商回覆 → 查看（带参数固定显示等待状态）
      return (
        <div className="flex items-center justify-end w-full">
          <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => navigate('/risk-assessment-send?mode=view&status=waiting')}>
            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
          </button>
        </div>
      );
    }
    if (item.actionType === 'approved') {
      // 廠商已回覆
      if (isApproved) {
        // 已批准 → 只显示查看
        return (
          <div className="flex items-center justify-end w-full">
            <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => navigate('/supplier-risk-assessment-result?project=' + encodeURIComponent(item.projectName))}>
              <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
            </button>
          </div>
        );
      }
      // 未批准 → 查看 + 已批准
      return (
        <div className="flex gap-[16px] items-center justify-end w-full">
          <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => navigate('/supplier-risk-assessment-result?project=' + encodeURIComponent(item.projectName))}>
            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
          </button>
          <button className="bg-[#ffe600] rounded-[4px] border-none cursor-pointer min-w-[80px] px-[12px] py-[8px] w-[86px] hover:bg-[#ffd000] transition-colors" onClick={() => onApprove(item.projectName)}>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap">已批准</p>
          </button>
        </div>
      );
    }
    if (item.actionType === 'notifyVendor') {
      // 已逾期 → 重新發送
      return (
        <div className="flex items-center justify-end w-full">
          <button className="bg-[#ffe600] rounded-[4px] border-none cursor-pointer min-w-[80px] px-[12px] py-[8px] hover:bg-[#ffd000] transition-colors" onClick={() => onNavigate?.('risk-assessment-send')}>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap">重新發送</p>
          </button>
        </div>
      );
    }
  }

  // Tab 1: 資訊服務委外風險評估
  if (item.actionType === 'viewOnly') {
    return (
      <div className="flex items-center justify-end w-full">
        <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => onNavigate?.('risk-assessment-view', item.projectName)}>
          <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] tracking-[0.45px] whitespace-nowrap">立即查看</p>
        </button>
      </div>
    );
  }
  if (item.actionType === 'continueFill') {
    // Tab1: 草稿未送出 → 繼續填寫(yellow) 只有一個按鈕
    return (
      <div className="flex items-center justify-end w-full">
        <button className="bg-[#ffe600] rounded-[4px] border-none cursor-pointer min-w-[80px] px-[12px] py-[8px]" onClick={() => onNavigate?.('risk-assessment-form', item.projectName)}>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap">繼續填寫</p>
        </button>
      </div>
    );
  }
  if (item.actionType === 'approved') {
    // 已批准记录 → 只显示「查看」
    if (isApproved) {
      return (
        <div className="flex items-center justify-end w-full">
          <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => onNavigate?.('risk-assessment-view', item.projectName)}>
            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
          </button>
        </div>
      );
    }
    // 未批准记录 → 查看 + 已批准(yellow)
    return (
      <div className="flex gap-[16px] items-center justify-end w-full">
        <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => onNavigate?.('risk-assessment-view', item.projectName)}>
          <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
        </button>
        <button className="bg-[#ffe600] rounded-[4px] border-none cursor-pointer min-w-[80px] px-[12px] py-[8px] w-[86px] hover:bg-[#ffd000] transition-colors" onClick={() => onApprove(item.projectName)}>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap">已批准</p>
        </button>
      </div>
    );
  }
  if (item.actionType === 'refill') {
    // Tab1: 已逾期 → 重新填寫(yellow) 只有一個按鈕
    return (
      <div className="flex items-center justify-end w-full">
        <button className="bg-[#ffe600] rounded-[4px] border-none cursor-pointer min-w-[80px] px-[12px] py-[8px]" onClick={() => onNavigate?.('risk-assessment-form', item.projectName)}>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap">重新填寫</p>
        </button>
      </div>
    );
  }
  // Fallback
  return (
    <div className="flex gap-[16px] items-center justify-end w-full">
      <button className="bg-transparent border-none cursor-pointer py-[8px]" onClick={() => onNavigate?.('risk-assessment-view', item.projectName)}>
        <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">查看</p>
      </button>
    </div>
  );
}

// ==================== Main Component ====================

export default function RiskAssessmentPage({ onNavigate }: RiskAssessmentPageProps) {
  const [activeTab, setActiveTab] = useState<'outsourcing' | 'supplier'>('outsourcing');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedYear, setSelectedYear] = useState(2026);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  // 追踪已批准的记录 (使用 projectName 作为唯一标识)
  const [approvedRecords, setApprovedRecords] = useState<Set<string>>(new Set());

  const years = [2026, 2025, 2024, 2023, 2022];

  const outsourcingData = OUTSOURCING_BY_YEAR[selectedYear] || [];
  const supplierData = SUPPLIER_BY_YEAR[selectedYear] || [];
  const data = activeTab === 'outsourcing' ? outsourcingData : supplierData;

  // 处理批准按钮点击
  const handleApprove = (projectName: string) => {
    setApprovedRecords(prev => new Set([...prev, projectName]));
  };

  // Filter configurations per tab
  const outsourcingFilters = [
    { key: 'all', label: '全部', count: outsourcingData.length },
    { key: 'sent', label: '已送出等待批准', count: outsourcingData.filter(d => d.statusType === 'sent' && !approvedRecords.has(d.projectName)).length },
    { key: 'approved', label: '已批准', count: outsourcingData.filter(d => d.statusType === 'sent' && approvedRecords.has(d.projectName)).length },
    { key: 'overdue', label: '已逾期', count: outsourcingData.filter(d => d.statusType === 'overdue').length },
    { key: 'draft', label: '尚未完成填寫', count: outsourcingData.filter(d => d.statusType === 'draft').length },
  ];

  const supplierFilters = [
    { key: 'all', label: '全部', count: supplierData.length },
    { key: 'waiting', label: '等待廠商回覆', count: supplierData.filter(d => d.statusType === 'waiting').length },
    { key: 'replied', label: '廠商已回覆', count: supplierData.filter(d => d.statusType === 'replied' && !approvedRecords.has(d.projectName)).length },
    { key: 'approved', label: '已批准', count: supplierData.filter(d => d.statusType === 'replied' && approvedRecords.has(d.projectName)).length },
    { key: 'overdue', label: '已逾期', count: supplierData.filter(d => d.statusType === 'overdue').length },
  ];

  const filters = activeTab === 'outsourcing' ? outsourcingFilters : supplierFilters;

  // Apply filters
  let filteredData = data;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredData = filteredData.filter(d =>
      d.projectName.toLowerCase().includes(q) || d.supplier.toLowerCase().includes(q)
    );
  }
  if (activeFilter !== 'all') {
    if (activeFilter === 'approved') {
      // 已批准：statusType是sent/replied且在approvedRecords中
      filteredData = filteredData.filter(d => 
        (d.statusType === 'sent' || d.statusType === 'replied') && approvedRecords.has(d.projectName)
      );
    } else if (activeFilter === 'sent' || activeFilter === 'replied') {
      // 已送出等待批准/廠商已回覆：statusType匹配且不在approvedRecords中
      filteredData = filteredData.filter(d => d.statusType === activeFilter && !approvedRecords.has(d.projectName));
    } else {
      filteredData = filteredData.filter(d => d.statusType === activeFilter);
    }
  }

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="risk-assessment" />

      {/* Content area with rounded top corners */}
      <div className="bg-[#ececf3] flex flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full pt-[152px]">
        <div className="flex flex-col gap-[32px] items-start px-[32px] w-[1440px]">

          {/* Breadcrumb + Title + Summary */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <Breadcrumb onNavigate={onNavigate} />

            {/* Title row */}
            <div className="flex items-center justify-between w-full">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[32px] whitespace-nowrap" style={{ fontWeight: 700 }}>{selectedYear}年度問卷填答</p>
              <div className="flex gap-[20px] items-center">

                {/* Year selector */}
                <div className="relative">
                  <button
                    className="bg-[#f6f6fa] border border-[#f2f2f2] rounded-[4px] flex items-center pl-[20px] pr-[14px] py-[6px] cursor-pointer"
                    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                  >
                    <p className="font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontWeight: 700 }}>{selectedYear}</p>
                    <div className={`flex items-center justify-center size-[20px] transition-transform ${isYearDropdownOpen ? 'rotate-[270deg]' : 'rotate-90'}`}>
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <path d="M5 5L10 10L5 15" stroke="#2E2E38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </button>
                  {isYearDropdownOpen && (
                    <div className="absolute top-full left-0 mt-[4px] bg-white border border-[#e5e7eb] rounded-[4px] w-full z-10 shadow-lg overflow-clip">
                      {years.map(year => (
                        <button
                          key={year}
                          className={`block w-full px-[20px] py-[10px] text-left border-none cursor-pointer hover:bg-[#f6f6fa] transition-colors ${year === selectedYear ? 'bg-[#ffe600]' : 'bg-white'}`}
                          onClick={() => { setSelectedYear(year); setIsYearDropdownOpen(false); setActiveFilter('all'); setSearchQuery(''); }}
                        >
                          <p className="font-['EYInterstate:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{year}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Summary Cards - 3 cards layout matching Figma */}
            <div className="flex gap-[32px] items-center w-full">
              <ExpiringCard year={selectedYear} onNavigate={onNavigate} />
              <SummaryCard type="outsourcing" year={selectedYear} onNavigate={onNavigate} />
              <SummaryCard type="supplier" year={selectedYear} onNavigate={onNavigate} />
            </div>
          </div>

          {/* Table Section */}
          <div className="flex flex-col items-center pb-[24px] w-full">
            <div className="bg-white rounded-[8px] w-full overflow-clip">

              {/* Tab Switcher */}
              <div className="bg-[#f6f6fa] flex items-start overflow-clip w-full">
                <button
                  className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] py-[16px] ${activeTab === 'outsourcing' ? 'bg-[#ffe600]' : 'bg-[#f6f6fa]'}`}
                  onClick={() => { setActiveTab('outsourcing'); setActiveFilter('all'); }}
                >
                  <p className={`text-[20px] text-center whitespace-nowrap ${activeTab === 'outsourcing'
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] tracking-[0.6px]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"
                    }`} style={{ fontVariationSettings: activeTab === 'outsourcing' ? "'wght' 700" : "'wght' 400" }}>
                    {`法令遵循定期評估作業 `}
                  </p>
                  <p className={`text-center whitespace-nowrap ${activeTab === 'outsourcing'
                    ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[24px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[22px]"
                    }`} style={{ fontVariationSettings: activeTab === 'outsourcing' ? "'wght' 700" : "'wght' 400" }}>
                    {outsourcingData.length}
                  </p>
                </button>
                <button
                  className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] py-[16px] ${activeTab === 'supplier' ? 'bg-[#ffe600]' : 'bg-[#f6f6fa]'}`}
                  onClick={() => { setActiveTab('supplier'); setActiveFilter('all'); }}
                >
                  <p className={`text-[20px] text-center whitespace-nowrap ${activeTab === 'supplier'
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] tracking-[0.6px]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"
                    }`} style={{ fontVariationSettings: activeTab === 'supplier' ? "'wght' 700" : "'wght' 400" }}>
                    內部控制制度自行查核
                  </p>
                  <p className={`text-center whitespace-nowrap ${activeTab === 'supplier'
                    ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[24px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[22px]"
                    }`} style={{ fontVariationSettings: activeTab === 'supplier' ? "'wght' 700" : "'wght' 400" }}>
                    {supplierData.length}
                  </p>
                </button>
              </div>

              {/* Search bar */}
              <div className="flex gap-[24px] items-center justify-center px-[32px] py-[16px] w-full">
                <div className="bg-[#f6f6fa] flex-1 rounded-[8px] flex items-center px-[12px] py-[14px]">
                  <div className="flex gap-[8px] items-center w-full">
                    <div className="shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p107a080} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p152ea900} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="搜尋問卷編號或填寫單位..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none outline-none flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] placeholder:text-[#747480]"
                    />
                  </div>
                </div>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px] whitespace-nowrap shrink-0">
                  共 {filteredData.length} 筆
                </p>
              </div>

              {/* Filter pills + advanced search */}
              <div className="flex items-center justify-between pb-[16px] px-[24px] w-full">
                <div className="flex gap-[12px] items-center">
                  {filters.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setActiveFilter(f.key)}
                      className={`border-none cursor-pointer px-[16px] py-[8px] rounded-[33554400px] ${activeFilter === f.key ? 'bg-[#ffe600]' : 'bg-[#ececf3]'}`}
                    >
                      <p className={`leading-[23px] text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${activeFilter === f.key
                        ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]"
                        : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]"
                        }`} style={{ fontWeight: activeFilter === f.key ? 700 : 400 }}>
                        {f.key === 'all' ? `全部 (${f.count})` : `${f.label} (${f.count})`}
                      </p>
                    </button>
                  ))}
                </div>

              </div>

              {/* Table */}
              <div className="px-[16px] pb-[16px] w-full">
                <div className="flex items-start w-full">
                  {/* Column: 業務流程 */}
                  <div className="flex flex-col items-start w-[195px] shrink-0">
                    <TableHeaderCell text="業務流程" />
                    {filteredData.map((item, i) => (
                      <TableDataCell key={i} text={item.projectName} />
                    ))}
                  </div>
                  {/* Column: 部門 */}
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <TableHeaderCell text="部門" />
                    {filteredData.map((item, i) => (
                      <TableDataCell key={i} text={item.supplier} />
                    ))}
                  </div>
                  {/* Column: 風險 */}
                  <div className="flex flex-col items-start w-[150px] shrink-0">
                    <TableHeaderCell text="風險" />
                    {filteredData.map((item, i) => (
                      <div key={i} className="bg-white h-[63px] w-full relative">
                        <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex items-center px-[15px] py-[20px] h-full">
                          <RiskBadge risk={item.risk} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Column: 狀態 */}
                  <div className="flex flex-col items-start w-[177px] shrink-0">
                    <TableHeaderCell text="狀態" />
                    {filteredData.map((item, i) => (
                      <div key={i} className="bg-white h-[63px] w-full relative">
                        <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-col items-start justify-center px-[15px] py-[20px] h-full">
                          <StatusBadge status={item.status} statusType={item.statusType} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Column: 期限 */}
                  <div className="flex flex-col items-center w-[147px] shrink-0">
                    <TableHeaderCell text="期限" />
                    {filteredData.map((item, i) => (
                      <TableDataCell key={i} text={item.deadline} />
                    ))}
                  </div>
                  {/* Column: 操作 */}
                  <div className="flex flex-col items-start shrink-0">
                    <div className="bg-[#f6f6fa] h-[48px] w-full relative">
                      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex items-center justify-center p-[15px] h-full">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontWeight: 600 }}>操作</p>
                      </div>
                    </div>
                    {filteredData.map((item, i) => (
                      <div key={i} className="bg-white h-[63px] w-full relative">
                        <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex items-center justify-center px-[15px] py-[20px] h-full">
                          <ActionButtons item={item} onNavigate={onNavigate} approvedRecords={approvedRecords} onApprove={handleApprove} activeTab={activeTab} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

// ==================== Shared Table Cells ====================

function TableHeaderCell({ text }: { text: string }) {
  return (
    <div className="bg-[#f6f6fa] h-[48px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center p-[15px] h-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontWeight: 600 }}>{text}</p>
      </div>
    </div>
  );
}

function TableDataCell({ text }: { text: string }) {
  return (
    <div className="bg-white w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center px-[15px] py-[20px]">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}