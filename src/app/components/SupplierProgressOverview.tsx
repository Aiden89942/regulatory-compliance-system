import { useState } from "react";
import clsx from "clsx";

type TabType = "未派發" | "填答中" | "已逾期" | "已完成";
type SubTabType = "法令遵循自行評估" | "內部控制制度自行查核" | null;

type TabItemProps = {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  isDarkMode?: boolean;
};

function TabItem({
  label,
  count,
  isActive,
  onClick,
  isDarkMode = false,
}: TabItemProps) {
  const inactiveTextColor = isDarkMode ? 'text-[#ffffff]' : 'text-[#747480]';
  const inactiveBgHover = isDarkMode ? 'hover:text-[#ffe600]' : 'hover:text-[#2e2e38]';
  
  return (
    <div
      className={clsx(
        "basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-all duration-300",
        isActive ? "bg-[#ffe600]" : "",
      )}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div
          className={clsx(
            "content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] relative size-full text-center text-nowrap transition-all duration-300 px-[20px]",
            isActive
              ? "py-[16px] text-[#1a1a24]"
              : `py-[12px] ${inactiveTextColor} ${inactiveBgHover}`,
          )}
        >
          <div
            className={clsx(
              "flex flex-col justify-center relative shrink-0 text-[20px]",
              isActive
                ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] tracking-[0.6px]"
                : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]",
            )}
            style={{
              fontVariationSettings: isActive
                ? "'wght' 700"
                : "'wght' 400",
            }}
          >
            <p className="leading-[normal] text-nowrap">
              {label}
            </p>
          </div>
          <div
            className={clsx(
              "flex flex-col justify-center not-italic relative shrink-0",
              isActive
                ? "font-['EYInterstate:Bold',sans-serif] text-[24px]"
                : "font-['EYInterstate:Regular',sans-serif] text-[22px]",
            )}
            style={{
              fontVariationSettings: isActive
                ? "'wght' 700"
                : "'wght' 400",
            }}
          >
            <p className="leading-[normal] text-nowrap">
              {count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data for 內部控制制度自行查核 (10 items matching screenshot)
const VENDOR_RISK_TRACKING_DATA = [
  { projectName: '內部控制制度自行查核', supplier: 'A單位', risk: 'medium' as const, status: '問卷已送出', statusType: 'waiting', deadline: '2026.04.15', actionType: 'viewOnly' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'medium' as const, status: '問卷已送出', statusType: 'waiting', deadline: '2026.04.30', actionType: 'viewOnly' },
  { projectName: '法令遵循自行評估', supplier: 'C單位', risk: 'low' as const, status: '問卷已送出', statusType: 'replied', deadline: '2026.03.31', actionType: 'approved' },
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'low' as const, status: '問卷已送出', statusType: 'replied', deadline: '2026.04.20', actionType: 'approved' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'high' as const, status: '問卷已送出', statusType: 'replied', deadline: '2026.03.15', actionType: 'approved' },
  { projectName: '法令遵循自行評估', supplier: 'C單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.02.20', actionType: 'notifyVendor' },
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.03.10', actionType: 'notifyVendor' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.02.28', actionType: 'notifyVendor' },
  { projectName: '法令遵循自行評估', supplier: 'C單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.03.05', actionType: 'notifyVendor' },
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.02.18', actionType: 'notifyVendor' },
];

// Shared table header cell
function HomeTableHeaderCell({ text }: { text: string }) {
  return (
    <div className="bg-[#f6f6fa] h-[48px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center p-[15px] h-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>{text}</p>
      </div>
    </div>
  );
}

// Shared table data cell
function HomeTableDataCell({ text }: { text: string }) {
  return (
    <div className="bg-white w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center px-[15px] py-[20px]">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]">{text}</p>
      </div>
    </div>
  );
}

// 內部控制制度自行查核 - 6-column table matching RiskAssessmentPage
function 內部控制制度自行查核Content({ onSubTabChange }: { onSubTabChange: (subTab: SubTabType) => void }) {
  return (
    <>
      {/* 橫幅區域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div 
              className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#dcdce8] transition-colors"
              onClick={() => onSubTabChange(null)}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                法令遵循自行評估 (8)
              </p>
            </div>
            <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                內部控制制度自行查核 (3)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6-column table */}
      <div className="px-[16px] pb-[16px] w-full">
        <div className="flex items-start w-full">
          {/* 問卷類型 */}
          <div className="flex flex-col items-start w-[195px] shrink-0">
            <HomeTableHeaderCell text="問卷類型" />
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <HomeTableDataCell key={i} text={item.projectName} />
            ))}
          </div>
          {/* 填答部門 */}
          <div className="flex flex-col items-start flex-1 min-w-0">
            <HomeTableHeaderCell text="填答部門" />
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <HomeTableDataCell key={i} text={item.supplier} />
            ))}
          </div>
          {/* 風險 */}
          <div className="flex flex-col items-start w-[150px] shrink-0">
            <HomeTableHeaderCell text="風險" />
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <RiskBadgeHome risk={item.risk} />
                </div>
              </div>
            ))}
          </div>
          {/* 狀態 */}
          <div className="flex flex-col items-start w-[177px] shrink-0">
            <HomeTableHeaderCell text="狀態" />
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <StatusBadgeHome status={item.status} statusType={item.statusType} />
                </div>
              </div>
            ))}
          </div>
          {/* 期限 */}
          <div className="flex flex-col items-center w-[147px] shrink-0">
            <HomeTableHeaderCell text="期限" />
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <HomeTableDataCell key={i} text={item.deadline} />
            ))}
          </div>
          {/* 操作 */}
          <div className="flex flex-col items-start shrink-0">
            <div className="bg-[#f6f6fa] h-[48px] w-full relative">
              <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex items-center justify-center p-[15px] h-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>操作</p>
              </div>
            </div>
            {VENDOR_RISK_TRACKING_DATA.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center justify-center px-[15px] py-[20px] h-full">
                  <ActionButtonsHome actionType={item.actionType} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// 供應商資料檢核與歸檔 - 完整復刻 Figma 設計
function 供應商資料檢核與歸檔Content({ onSubTabChange }: { onSubTabChange: (subTab: SubTabType) => void }) {
  return (
    <>
      {/* 橫幅區域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div 
              className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#dcdce8] transition-colors"
              onClick={() => onSubTabChange(null)}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                資訊服務委外風險評估 (8)
              </p>
            </div>
            <div 
              className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#dcdce8] transition-colors"
              onClick={() => onSubTabChange("供應商風險評估與情資追蹤")}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                填寫供應商風險評估與情資追蹤 (3)
              </p>
            </div>
            <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                供應商資料檢核與歸檔 (1)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 表格區域 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-full">
        {/* 專案名稱列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  專案名稱
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  全行防毒軟體授權續約案
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 申請供應商列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  申請供應商
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  趨勢科技股份有限公司
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 契約狀態 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[155px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  契約狀態
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  待檢核
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 檢核進度列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[341px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  檢核進度
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  尚未填寫契約檢核表
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 操作列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  操作
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[63px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-right tracking-[0.45px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                    立即查看
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Risk badge component (matching RiskAssessmentPage)
function RiskBadgeHome({ risk }: { risk: 'high' | 'medium' | 'low' }) {
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

// Status badge component (matching RiskAssessmentPage)
function StatusBadgeHome({ status, statusType }: { status: string; statusType: string }) {
  if (statusType === 'waiting' || statusType === 'draft') {
    return (
      <div className="flex gap-[4px] items-center">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" fill="#EE762F" r="7" /></svg>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <path d="M7 3.5V7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M7 10H7.007" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
      </div>
    );
  }
  if (statusType === 'pendingDispatch') {
    return (
      <div className="flex gap-[4px] items-center">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" fill="#8F8100" r="7" /></svg>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <path d="M7 4V7.2L9 8.4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
      </div>
    );
  }
  if (statusType === 'replied' || statusType === 'sent') {
    return (
      <div className="flex gap-[4px] items-center">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" fill="#419D48" r="7" /></svg>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
            <path d="M1 3.5L3.5 6L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" transform="translate(3, 4)" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
      </div>
    );
  }
  return (
    <div className="flex gap-[4px] items-center">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" fill="#EC5242" r="7" /></svg>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 14 14">
          <path d="M9.5 4.5L4.5 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          <path d="M4.5 4.5L9.5 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
        </svg>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap">{status}</p>
    </div>
  );
}

// Action buttons for home tables
function ActionButtonsHome({ actionType }: { actionType: string }) {
  return (
    <div className="flex items-center justify-end w-full">
      <button className="bg-transparent border-none cursor-pointer py-[8px] hover:bg-[#f6f6fa] rounded-[4px] px-[8px]">
        <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] tracking-[0.45px] whitespace-nowrap">查看</p>
      </button>
    </div>
  );
}

// Data for 開案前 - 資訊服務委外風險評估
const OUTSOURCING_HOME_DATA = [
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'medium' as const, status: '尚未派發', statusType: 'pendingDispatch', deadline: '2026.04.15', actionType: 'viewOnly' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'medium' as const, status: '尚未派發', statusType: 'pendingDispatch', deadline: '2026.04.30', actionType: 'viewOnly' },
  { projectName: '法令遵循自行評估', supplier: 'C單位', risk: 'low' as const, status: '尚未派發', statusType: 'pendingDispatch', deadline: '2026.03.31', actionType: 'viewOnly' },
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'low' as const, status: '尚未派發', statusType: 'pendingDispatch', deadline: '2026.05.15', actionType: 'viewOnly' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.05.01', actionType: 'refill' },
  { projectName: '法令遵循自行評估', supplier: 'C單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.02.28', actionType: 'refill' },
  { projectName: '法令遵循自行評估', supplier: 'A單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.03.01', actionType: 'refill' },
  { projectName: '內部控制制度自行查核', supplier: 'B單位', risk: 'high' as const, status: '已逾期', statusType: 'overdue', deadline: '2026.02.15', actionType: 'refill' },
];

const OVERDUE_HOME_DATA = [...OUTSOURCING_HOME_DATA, ...VENDOR_RISK_TRACKING_DATA].filter(
  (item) => item.statusType === "overdue",
);
const DISPATCHED_HOME_DATA = OUTSOURCING_HOME_DATA.filter((item) => item.statusType !== "overdue");
const DISPATCHED_COMPLIANCE_DATA = DISPATCHED_HOME_DATA.filter(
  (item) => item.projectName === "法令遵循自行評估",
);
const DISPATCHED_CONTROL_DATA = DISPATCHED_HOME_DATA.filter(
  (item) => item.projectName === "內部控制制度自行查核",
);

// 開案前內容組件 - 6 column table matching RiskAssessmentPage
function 開案前Content({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [activeType, setActiveType] = useState<SubTabType>(null);
  const rows = activeType === "法令遵循自行評估"
    ? DISPATCHED_COMPLIANCE_DATA
    : activeType === "內部控制制度自行查核"
      ? DISPATCHED_CONTROL_DATA
      : DISPATCHED_HOME_DATA;

  const selectType = (type: Exclude<SubTabType, null>) => {
    setActiveType((current) => (current === type ? null : type));
  };

  return (
    <>
      {/* 橫幅區域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div
              className={clsx(
                "content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors",
                activeType === "法令遵循自行評估" ? "bg-[#ffe600] hover:bg-[#ffd700]" : isDarkMode ? "bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.18)]" : "bg-[#ececf3] hover:bg-[#dcdce8]",
              )}
              onClick={() => selectType("法令遵循自行評估")}
            >
              <p
                className={clsx(
                  "leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                  activeType === "法令遵循自行評估"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]"
                    : clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]", isDarkMode ? "text-[#ffffff]" : "text-[#1a1a24]"),
                )}
                style={{ fontVariationSettings: activeType === "法令遵循自行評估" ? "'wght' 700" : "'wght' 400" }}
              >
                {`法令遵循自行評估 (${DISPATCHED_COMPLIANCE_DATA.length})`}
              </p>
            </div>
            <div
              className={clsx(
                "content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors",
                activeType === "內部控制制度自行查核" ? "bg-[#ffe600] hover:bg-[#ffd700]" : isDarkMode ? "bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.18)]" : "bg-[#ececf3] hover:bg-[#dcdce8]",
              )}
              onClick={() => selectType("內部控制制度自行查核")}
            >
              <p
                className={clsx(
                  "leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                  activeType === "內部控制制度自行查核"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]"
                    : clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]", isDarkMode ? "text-[#ffffff]" : "text-[#1a1a24]"),
                )}
                style={{ fontVariationSettings: activeType === "內部控制制度自行查核" ? "'wght' 700" : "'wght' 400" }}
              >
                {`內部控制制度自行查核 (${DISPATCHED_CONTROL_DATA.length})`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6-column table matching RiskAssessmentPage */}
      <div className="px-[16px] pb-[16px] w-full">
        <div className="flex items-start w-full">
          {/* 專案名稱 */}
          <div className="flex flex-col items-start w-[240px] shrink-0">
            <HomeTableHeaderCell text="問卷類型" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.projectName} />
            ))}
          </div>
          {/* 申請供應商 */}
          <div className="flex flex-col items-start flex-1 min-w-0">
            <HomeTableHeaderCell text="填答部門" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.supplier} />
            ))}
          </div>
          {/* 風險 */}
          <div className="flex flex-col items-start w-[150px] shrink-0">
            <HomeTableHeaderCell text="風險" />
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <RiskBadgeHome risk={item.risk} />
                </div>
              </div>
            ))}
          </div>
          {/* 狀態 */}
          <div className="flex flex-col items-start w-[177px] shrink-0">
            <HomeTableHeaderCell text="狀態" />
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <StatusBadgeHome status={item.status} statusType={item.statusType} />
                </div>
              </div>
            ))}
          </div>
          {/* 期限 */}
          <div className="flex flex-col items-center w-[147px] shrink-0">
            <HomeTableHeaderCell text="期限" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.deadline} />
            ))}
          </div>
          {/* 操作 */}
          <div className="flex flex-col items-start shrink-0">
            <div className="bg-[#f6f6fa] h-[48px] w-full relative">
              <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex items-center justify-center p-[15px] h-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>操作</p>
              </div>
            </div>
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center justify-center px-[15px] py-[20px] h-full">
                  <ActionButtonsHome actionType={item.actionType} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// 委託中 - 查核 Content (完整復刻 Figma 設計)
function 委託中查核Content({ onSubTabChange }: { onSubTabChange: (subTab: "查核" | "供應商風險評估與情資追蹤" | null) => void }) {
  const projects = [
    {
      supplier: "精誠資訊",
      project: "供應商自我風險評表",
      deadline: "2025.11.01",
      risk: "low",
      riskLabel: "低風險",
    },
    {
      supplier: "台灣大哥大",
      project: "供應商自我風險評表",
      deadline: "2025.11.10",
      risk: "low",
      riskLabel: "低風險",
    },
    {
      supplier: "IBM",
      project: "供應商自我風險評表",
      deadline: "2025.11.10",
      risk: "low",
      riskLabel: "低風險",
    },
    {
      supplier: "勤業眾信",
      project: "實地訪查",
      deadline: "2025.11.10",
      risk: "medium",
      riskLabel: "中風險",
    },
    {
      supplier: "程曦資訊 (客服中心)",
      project: "實地訪查",
      deadline: "2025.11.10",
      risk: "high",
      riskLabel: "高風險",
    },
  ];

  const getRiskBadge = (risk: string, label: string) => {
    const configs = {
      low: { bg: "#fff8b5", border: "#fff169", dot: "#ff9d00", text: "#ff9d00" },
      medium: { bg: "#ffedd4", border: "#ffd59a", dot: "#ee762f", text: "#ee762f" },
      high: { bg: "#ffe2e2", border: "#ffc9c9", dot: "#ec5242", text: "#ec5242" },
    };
    const config = configs[risk as keyof typeof configs];

    return (
      <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: config.bg }}>
        <div className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: config.border }} />
        <div className="rounded-[33554400px] shrink-0 size-[8px]" style={{ backgroundColor: config.dot }} />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px]" style={{ color: config.text, fontVariationSettings: "'wght' 400" }}>
          {label}
        </p>
      </div>
    );
  };

  return (
    <>
      {/* 橫幅區域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
              <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                查核 (5)
              </p>
            </div>
            <div 
              className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#dcdce8] transition-colors"
              onClick={() => onSubTabChange("供應商風險評估與情資追蹤")}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                供應商風險評估與情資追蹤 (3)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 表格區域 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-full">
        {/* 查核供應商列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  查核供應商
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.supplier}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 查核項目列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  查核項目
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 期限列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[155px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  期限
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.deadline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 風險等級列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[341px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  風險等級
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  {getRiskBadge(project.risk, project.riskLabel)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 操作列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  操作
                </p>
              </div>
            </div>
          </div>
          {projects.map((_, i) => (
            <div key={i} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                    <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-right tracking-[0.45px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                      產生評估表
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 委託中 - 供應商風險評估與情資追蹤 Content (完整復刻 Figma 設計)
function 委託中供應商風險評估與情資追蹤Content({ onSubTabChange }: { onSubTabChange: (subTab: "查核" | "供應商風險評估與情資追蹤" | null) => void }) {
  const projects = [
    {
      project: "核心基金帳務系統升級",
      supplier: "精誠資訊股份有限公司 ",
      status: "等待廠商回覆",
      intelligence: "資安事件 1 則 、負面消息 1 則",
    },
    {
      project: "辦公室門禁及監控維護",
      supplier: "中興保全科技 (SECOM)",
      status: "等待廠商回覆",
      intelligence: "資安事件 1 則 、負面消息 1 則",
    },
    {
      project: "雲端備份與異地備援",
      supplier: "台灣微軟 (Microsoft)",
      status: "廠商已回覆",
      intelligence: "資安事件 1 則 、負面消息 1 則",
    },
  ];

  return (
    <>
      {/* 橫幅區域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div 
              className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#dcdce8] transition-colors"
              onClick={() => onSubTabChange("查核")}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                查核 (5)
              </p>
            </div>
            <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                供應商風險評估與情資追蹤 (3)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 表格區域 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-full">
        {/* 問卷類型列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  問卷類型
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 填答部門列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  填答部門
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.supplier}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 狀態列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[155px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  狀態
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 情資追蹤列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[341px]">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  情資追蹤
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.intelligence}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 操作列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  操作
                </p>
              </div>
            </div>
          </div>
          {/* Row 1 */}
          <div className="bg-white h-[63px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-right tracking-[0.45px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                    立即查看
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="bg-white h-[63px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-right tracking-[0.45px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                    立即查看
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="bg-white h-[63px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                    查看
                  </p>
                </div>
                <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    已批准
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 委託中內容
function 委託中Content({ isDarkMode = false, onSubTabChange }: { isDarkMode?: boolean; onSubTabChange: (subTab: "查核" | "供應商風險評估與情資追蹤" | null) => void }) {
  const suppliers = [
    {
      name: "精誠資訊",
      item: "供應商自我風險評表",
      deadline: "2025.11.01",
      risk: "low",
    },
    {
      name: "台灣大哥大",
      item: "供應商自我風險評表",
      deadline: "2025.11.10",
      risk: "low",
    },
    {
      name: "IBM",
      item: "供應商自我風險評表",
      deadline: "2025.11.10",
      risk: "low",
    },
    {
      name: "勤業眾信",
      item: "實地訪查",
      deadline: "2025.11.10",
      risk: "medium",
    },
    {
      name: "程曦資訊 (客服中心)",
      item: "實地訪查",
      deadline: "2025.11.10",
      risk: "high",
    },
  ];

  const getRiskBadge = (risk: string) => {
    const configs = {
      low: {
        bg: "#fff8b5",
        border: "#fff169",
        dot: "#ff9d00",
        text: "#ff9d00",
        label: "低風險",
      },
      medium: {
        bg: "#ffedd4",
        border: "#ffd59a",
        dot: "#ee762f",
        text: "#ee762f",
        label: "中風險",
      },
      high: {
        bg: "#ffe2e2",
        border: "#ffc9c9",
        dot: "#ec5242",
        text: "#ec5242",
        label: "高風險",
      },
    };
    const config = configs[risk as keyof typeof configs];

    return (
      <div
        className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0"
        style={{ backgroundColor: config.bg }}
      >
        <div
          className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]"
          style={{ borderColor: config.border }}
        />
        <div
          className="rounded-[3.35544e+07px] shrink-0 size-[8px]"
          style={{ backgroundColor: config.dot }}
        />
        <p
          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px] text-nowrap"
          style={{
            color: config.text,
            fontVariationSettings: "'wght' 400",
          }}
        >
          {config.label}
        </p>
      </div>
    );
  };

  const bannerBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const headerBg = isDarkMode ? 'bg-[#747480]' : 'bg-[#f6f6fa]';
  const cellBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const textColor = isDarkMode ? 'text-[#ffffff]' : 'text-[#1a1a24]';
  const cellTextColor = isDarkMode ? 'text-[#ffffff]' : 'text-[#222]';

  return (
    <>
      {/* 委託中警告橫幅 */}
      <div className={`relative shrink-0 w-full transition-colors duration-300`}>
        <div className="flex flex-row items-center size-full">
          <div className={clsx(
            "content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full border-l-4",
            isDarkMode ? "bg-[rgba(255,255,255,0.12)] border-[#ffe600]" : "bg-[#ffffff] bg-opacity-20 border-[#ffffff]"
          )}>
            <div 
              className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors"
              onClick={() => onSubTabChange("查核")}
            >
              <p
                className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                查核 (5)
              </p>
            </div>
            <div 
              className={clsx(
                "content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors",
                isDarkMode ? "bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.18)]" : "bg-[#ececf3] hover:bg-[#dcdce8]"
              )}
              onClick={() => onSubTabChange("供應商風險評估與情資追蹤")}
            >
              <p
                className={clsx(
                  "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                  isDarkMode ? "text-[#ffffff]" : "text-[#1a1a24]"
                )}
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                供應商風險評估與情資追蹤 (3)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 委託中表格 */}
      <div className="relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
            {/* 查核供應商列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
              <div className={`relative shrink-0 w-full ${headerBg} h-[48px] transition-colors duration-300`}>
                <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[15px] relative size-full">
                    <p
                      className={clsx(
                        "font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                        textColor
                      )}
                      style={{
                        fontVariationSettings: "'wght' 600",
                      }}
                    >
                      查核供應商
                    </p>
                  </div>
                </div>
              </div>
              {suppliers.map((supplier, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-full h-[63px] ${cellBg} transition-colors duration-300`}
                >
                  <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                      <p
                        className={clsx(
                          "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                          cellTextColor
                        )}
                        style={{
                          fontVariationSettings: "'wght' 400",
                        }}
                      >
                        {supplier.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 查核項目列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
              <div className={`relative shrink-0 w-full ${headerBg} h-[48px] transition-colors duration-300`}>
                <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[15px] relative size-full">
                    <p
                      className={clsx(
                        "font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                        textColor
                      )}
                      style={{
                        fontVariationSettings: "'wght' 600",
                      }}
                    >
                      審核項目
                    </p>
                  </div>
                </div>
              </div>
              {suppliers.map((supplier, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-full h-[63px] ${cellBg} transition-colors duration-300`}
                >
                  <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                      <p
                        className={clsx(
                          "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                          cellTextColor
                        )}
                        style={{
                          fontVariationSettings: "'wght' 400",
                        }}
                      >
                        {supplier.item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 期限列 */}
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className={`relative shrink-0 w-full ${headerBg} h-[48px] transition-colors duration-300`}>
                <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[15px] relative size-full">
                    <p
                      className={clsx(
                        "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                        textColor
                      )}
                      style={{
                        fontVariationSettings: "'wght' 600",
                      }}
                    >
                      期限
                    </p>
                  </div>
                </div>
              </div>
              {suppliers.map((supplier, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-full h-[63px] ${cellBg} transition-colors duration-300`}
                >
                  <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                      <p className={clsx(
                        "font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                        cellTextColor
                      )}>
                        {supplier.deadline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 風險等級列 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[200px]">
              <div className={`relative shrink-0 w-full ${headerBg} h-[48px] transition-colors duration-300`}>
                <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[15px] relative size-full justify-center">
                    <p
                      className={clsx(
                        "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                        textColor
                      )}
                      style={{
                        fontVariationSettings: "'wght' 600",
                      }}
                    >
                      風險等級
                    </p>
                  </div>
                </div>
              </div>
              {suppliers.map((supplier, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-full h-[63px] ${cellBg} transition-colors duration-300`}
                >
                  <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
                      {getRiskBadge(supplier.risk)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 操作列 */}
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
                <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center p-[15px] relative size-full justify-center">
                    <p
                      className={clsx(
                        "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                        textColor
                      )}
                      style={{
                        fontVariationSettings: "'wght' 600",
                      }}
                    >
                      操作
                    </p>
                  </div>
                </div>
              </div>
              {suppliers.map((_, i) => (
                <div
                  key={i}
                  className={`${cellBg} h-[63px] relative shrink-0 w-full transition-colors duration-300`}
                >
                  <div className="border-[#d2dae6] border-[0px_0px_1px] border-solid absolute inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
                      <div className={clsx(
                        "content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors",
                        isDarkMode ? "hover:bg-[rgba(255,255,255,0.1)]" : "hover:bg-[#f6f6fa]"
                      )}>
                        <p
                          className={clsx(
                            "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px] underline",
                            cellTextColor
                          )}
                          style={{
                            fontVariationSettings: "'wght' 400",
                          }}
                        >
                          查看
                        </p>
                      </div>
                      <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd700] active:scale-95 transition-all">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]"
                          style={{
                            fontVariationSettings: "'wght' 400",
                          }}
                        >
                          傳送提醒
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 委託中內容組件 - 支持子 Tab 切換
function 委託中ContentWrapper({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [activeSubTab, setActiveSubTab] = useState<"查核" | "供應商風險評估與情資追蹤" | null>(null);

  // 如果選擇了「查核」子 tab
  if (activeSubTab === "查核") {
    return <委託中查核Content onSubTabChange={setActiveSubTab} />;
  }

  // 如果選擇了「供應商風險評估與情資追蹤」子 tab
  if (activeSubTab === "供應商風險評估與情資追蹤") {
    return <委託中供應商風險評估與情資追蹤Content onSubTabChange={setActiveSubTab} />;
  }

  // 默認顯示委託中內容
  return <委託中Content isDarkMode={isDarkMode} onSubTabChange={setActiveSubTab} />;
}

// 已結案內容
function 已結案Content({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const projects = [
    {
      project: "核心基金帳務系統升級",
      supplier: "精誠資訊股份有限公司 ",
      deadline: "2025.11.31",
      note: "請於 2025.11.31 前提供廠商「權限管理」與「資料移除」證明文件",
    },
    {
      project: "辦公室門禁與監控維護",
      supplier: "中興保全科技 (SECOM)",
      deadline: "2025.12.12",
      note: "請於 2025.12.12 前提供廠商「權限管理」與「資料移除」證明文件 ",
    },
    {
      project: "雲端備份與異地備援",
      supplier: "台灣微軟 (Microsoft)",
      deadline: "2025.12.18",
      note: "請於 2025.12.18 前提供廠商「權限管理」與「資料移除」證明文件",
    },
  ];

  const headerBg = isDarkMode ? 'bg-[#747480]' : 'bg-[#f6f6fa]';
  const headerTextColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';
  const cellBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const cellTextColor = isDarkMode ? 'text-white' : 'text-[#222]';

  return (
    <>
      {/* 警告橫幅 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[24px] py-[16px] relative w-full">
            {/* Alert Circle Icon */}
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 8V12" stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 16H12.01" stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f8100] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
                結案供應商均需提供「權限管理」與「資料移除」證明文件，請窗口仔細確認
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 表格區域 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-full">
        {/* 專案名稱列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className={clsx("font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]", headerTextColor)} style={{ fontVariationSettings: "'wght' 600" }}>
                  問卷類型
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className={`${cellBg} relative shrink-0 w-full transition-colors duration-300`}>
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className={clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center tracking-[0.48px]", cellTextColor)} style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 填答部門列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className={clsx("font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]", headerTextColor)} style={{ fontVariationSettings: "'wght' 600" }}>
                  填答部門
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className={`${cellBg} relative shrink-0 w-full transition-colors duration-300`}>
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className={clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center tracking-[0.48px]", cellTextColor)} style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.supplier}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 合約到期日列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
          <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className={clsx("font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]", headerTextColor)} style={{ fontVariationSettings: "'wght' 600" }}>
                  合約到期日
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className={`${cellBg} relative shrink-0 w-full transition-colors duration-300`}>
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className={clsx("font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-center tracking-[0.48px]", cellTextColor)}>
                    {project.deadline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 備註列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[564px]">
          <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className={clsx("font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]", headerTextColor)} style={{ fontVariationSettings: "'wght' 600" }}>
                  備註
                </p>
              </div>
            </div>
          </div>
          {projects.map((project, i) => (
            <div key={i} className={`${cellBg} relative shrink-0 w-full transition-colors duration-300`}>
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
                  <p className={clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center tracking-[0.48px]", cellTextColor)} style={{ fontVariationSettings: "'wght' 400" }}>
                    {project.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 操作列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[146px]">
          <div className={`${headerBg} h-[48px] relative shrink-0 w-full transition-colors duration-300`}>
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className={clsx("font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]", headerTextColor)} style={{ fontVariationSettings: "'wght' 600" }}>
                  操作
                </p>
              </div>
            </div>
          </div>
          {projects.map((_, i) => (
            <div key={i} className={`${cellBg} h-[63px] relative shrink-0 w-full transition-colors duration-300`}>
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
                  <div className={`${cellBg} flex-[1_0_0] h-[55px] min-h-px min-w-px relative transition-colors duration-300`}>
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="size-full" />
                    </div>
                  </div>
                  <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      廠商已完成
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function 已逾期Content({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [activeType, setActiveType] = useState<SubTabType>(null);
  const complianceRows = OVERDUE_HOME_DATA.filter((item) => item.projectName === "法令遵循自行評估");
  const controlRows = OVERDUE_HOME_DATA.filter((item) => item.projectName === "內部控制制度自行查核");
  const rows = activeType === "法令遵循自行評估"
    ? complianceRows
    : activeType === "內部控制制度自行查核"
      ? controlRows
      : OVERDUE_HOME_DATA;
  const selectType = (type: Exclude<SubTabType, null>) => {
    setActiveType((current) => (current === type ? null : type));
  };

  return (
    <>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            <div
              className={clsx(
                "content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors",
                activeType === "法令遵循自行評估" ? "bg-[#ffe600] hover:bg-[#ffd700]" : isDarkMode ? "bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.18)]" : "bg-[#ececf3] hover:bg-[#dcdce8]",
              )}
              onClick={() => selectType("法令遵循自行評估")}
            >
              <p
                className={clsx(
                  "leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                  activeType === "法令遵循自行評估"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]"
                    : clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]", isDarkMode ? "text-[#ffffff]" : "text-[#1a1a24]"),
                )}
                style={{ fontVariationSettings: activeType === "法令遵循自行評估" ? "'wght' 700" : "'wght' 400" }}
              >
                {`法令遵循自行評估 (${complianceRows.length})`}
              </p>
            </div>
            <div
              className={clsx(
                "content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors",
                activeType === "內部控制制度自行查核" ? "bg-[#ffe600] hover:bg-[#ffd700]" : isDarkMode ? "bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.18)]" : "bg-[#ececf3] hover:bg-[#dcdce8]",
              )}
              onClick={() => selectType("內部控制制度自行查核")}
            >
              <p
                className={clsx(
                  "leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.48px]",
                  activeType === "內部控制制度自行查核"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]"
                    : clsx("font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]", isDarkMode ? "text-[#ffffff]" : "text-[#1a1a24]"),
                )}
                style={{ fontVariationSettings: activeType === "內部控制制度自行查核" ? "'wght' 700" : "'wght' 400" }}
              >
                {`內部控制制度自行查核 (${controlRows.length})`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[16px] pb-[16px] w-full">
        <div className="flex items-start w-full">
          <div className="flex flex-col items-start w-[240px] shrink-0">
            <HomeTableHeaderCell text="問卷類型" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.projectName} />
            ))}
          </div>
          <div className="flex flex-col items-start flex-1 min-w-0">
            <HomeTableHeaderCell text="填答部門" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.supplier} />
            ))}
          </div>
          <div className="flex flex-col items-start w-[150px] shrink-0">
            <HomeTableHeaderCell text="風險" />
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <RiskBadgeHome risk={item.risk} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start w-[177px] shrink-0">
            <HomeTableHeaderCell text="狀態" />
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center px-[15px] py-[20px] h-full">
                  <StatusBadgeHome status={item.status} statusType={item.statusType} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-[147px] shrink-0">
            <HomeTableHeaderCell text="期限" />
            {rows.map((item, i) => (
              <HomeTableDataCell key={i} text={item.deadline} />
            ))}
          </div>
          <div className="flex flex-col items-start shrink-0">
            <div className="bg-[#f6f6fa] h-[48px] w-full relative">
              <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex items-center justify-center p-[15px] h-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>操作</p>
              </div>
            </div>
            {rows.map((item, i) => (
              <div key={i} className="bg-white h-[63px] w-full relative">
                <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex items-center justify-center px-[15px] py-[20px] h-full">
                  <ActionButtonsHome actionType={item.actionType} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function SupplierProgressOverview({
  isDarkMode = false,
}: {
  isDarkMode?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<TabType>("未派發");

  const renderContent = () => {
    switch (activeTab) {
      case "未派發":
        return <開案前Content isDarkMode={isDarkMode} />;
      case "填答中":
        return <委託中ContentWrapper isDarkMode={isDarkMode} />;
      case "已逾期":
        return <已逾期Content isDarkMode={isDarkMode} />;
      case "已完成":
        return <已結案Content isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const containerBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const tabBg = isDarkMode ? 'bg-transparent' : 'bg-[#f6f6fa]';

  return (
    <div className={`${containerBg} content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] w-full self-start transition-colors duration-300`}>
      {/* Tab 選項卡 */}
      <div className={`${tabBg} content-stretch flex items-start overflow-clip relative shrink-0 w-full transition-colors duration-300`}>
        <TabItem
          label="未派發"
          count={DISPATCHED_HOME_DATA.length}
          isActive={activeTab === "未派發"}
          onClick={() => handleTabChange("未派發")}
          isDarkMode={isDarkMode}
        />
        <TabItem
          label="填答中"
          count={8}
          isActive={activeTab === "填答中"}
          onClick={() => handleTabChange("填答中")}
          isDarkMode={isDarkMode}
        />
        <TabItem
          label="已完成"
          count={3}
          isActive={activeTab === "已完成"}
          onClick={() => handleTabChange("已完成")}
          isDarkMode={isDarkMode}
        />
        <TabItem
          label="已逾期"
          count={OVERDUE_HOME_DATA.length}
          isActive={activeTab === "已逾期"}
          onClick={() => handleTabChange("已逾期")}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* 內容區域 */}
      {renderContent()}
    </div>
  );
}
