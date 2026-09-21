import { useState, useMemo } from "react";
import svgPaths from "@/imports/svg-2s5uxpi6bu";
import heartSvgPaths from "@/imports/svg-razjr30eji";
import Header from "./Header";
import { useTracking } from "@/app/context/TrackingContext";
import TrackedToast from "./TrackedToast";
import CancelledToast from "./CancelledToast";

import { RecentSearchEntry } from "@/app/context/AppContext";

interface QuickIntelligenceSurveyProps {
  onNavigate?: (page: string) => void;
  onSearch?: (query: string, selectedRiskTypes: string[]) => void;
  onViewSupplier?: (supplierName: string) => void;
  recentSearchEntries?: RecentSearchEntry[];
}

// 麵包屑組件
function Breadcrumb({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
          <p
            className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors"
            onClick={() => onNavigate?.('home')}
          >
            首頁
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[-0.3125px]">
            快速情資查詢
          </p>
        </div>
      </div>
    </div>
  );
}

// 複選框組件
function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path
            d={svgPaths.p200f2800}
            fill={checked ? "#FFE600" : "transparent"}
            stroke={checked ? "#FFE600" : "#C4C4CD"}
            strokeWidth="0.833333"
          />
          {checked && <path d={svgPaths.p2915d460} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
        </g>
      </svg>
    </div>
  );
}

export default function QuickIntelligenceSurvey({ onNavigate, onSearch, onViewSupplier, recentSearchEntries = [] }: QuickIntelligenceSurveyProps) {
  const [searchText, setSearchText] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    all: true,
    bidding: true,
    judicial: true,
    government: true,
    relationship: true,
    penalty: true,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showTrackedToast, setShowTrackedToast] = useState(false);
  const [showCancelledToast, setShowCancelledToast] = useState(false);

  // 獲取追蹤清單的數量和相關函數
  const { trackingCount, isTracked, addTracking, removeTracking, removeTrackingByTaxId } = useTracking();

  const handleCheckboxChange = (id: string) => {
    if (id === "all") {
      const newValue = !checkboxes.all;
      setCheckboxes({
        all: newValue,
        bidding: newValue,
        judicial: newValue,
        government: newValue,
        relationship: newValue,
        penalty: newValue,
      });
    } else {
      setCheckboxes((prev) => {
        const updated = { ...prev, [id]: !prev[id as keyof typeof prev] };
        // When unchecking any individual checkbox, also uncheck "all"
        if (updated[id as keyof typeof updated] === false) {
          updated.all = false;
        } else {
          // When all individual checkboxes are checked, auto-check "all"
          const { all, ...rest } = updated;
          updated.all = Object.values(rest).every(Boolean);
        }
        return updated;
      });
    }
  };

  const isSearchDisabled = searchText.trim() === "";

  // 表格資料 - 使用與 COMPANY_DATA 一致的供應商名稱
  const tableData = [
    {
      name: "新加坡商認和科技有限公司",
      taxId: "90716929",
      person: "劉*彤",
      date: "2026-01-27",
      address: "台北市內湖區瑞光路 358 巷 38 弄 36 號 10 樓",
      phone: "02-87975888",
      summary: "近一年新增 疑似中資5筆、標案拒往0筆、違規裁罰0筆",
      isSuspectedChinese: true,
    },
    {
      name: "碩網資訊股份有限公司",
      taxId: "70364799",
      person: "張*達",
      date: "2026-01-26",
      address: "新北市新店區北新路三段 205 號 14 樓",
      phone: "02-86852345",
      summary: "近一年新增 司法判決21筆、政府標案9筆、疑似關係189筆",
      isSuspectedChinese: false,
    },
    {
      name: "Microsoft 台灣微軟",
      taxId: "23526610",
      person: "卞*中",
      date: "2026-01-20",
      address: "台北市信義區忠孝東路五段 68 號 18 樓",
      phone: "02-37253888",
      summary: "近一年新增 司法判決1筆、政府標案48筆、疑似關係120筆",
      isSuspectedChinese: false,
    },
    {
      name: "Trend Micro 趨勢科技",
      taxId: "22099199",
      person: "陳*妏",
      date: "2026-01-19",
      address: "台北市大安區敦化南路二段 198 號 8 樓",
      phone: "02-23789666",
      summary: "近一年新增 政府標案22筆、疑似關係58筆",
      isSuspectedChinese: false,
    },
    {
      name: "Oracle 甲骨文",
      taxId: "16092025",
      person: "潘*輝",
      date: "2026-01-18",
      address: "台北市中山區民權東路三段 35 號",
      phone: "02-25854567",
      summary: "近一年新增 司法判決2筆、政府標案35筆、違規裁罰1筆",
      isSuspectedChinese: false,
    },
    {
      name: "Amazon Web Services",
      taxId: "54387291",
      person: "謝*穎",
      date: "2026-01-14",
      address: "台北市信義區松仁路 100 號 15 樓",
      phone: "02-27201000",
      summary: "近一年新增 政府標案18筆、疑似關係45筆",
      isSuspectedChinese: false,
    },
  ];

  // 合併搜尋結果到最近普查紀錄（搜尋結果在最前面，去重）
  const mergedTableData = useMemo(() => {
    if (recentSearchEntries.length === 0) return tableData;
    
    // 搜尋結果的 taxId 集合
    const searchTaxIds = new Set(recentSearchEntries.map(e => e.taxId));
    // 從預設資料中移除已存在於搜尋結果中的（去重）
    const filteredDefault = tableData.filter(row => !searchTaxIds.has(row.taxId));
    // 搜尋結果在最前面
    return [...recentSearchEntries, ...filteredDefault];
  }, [recentSearchEntries, tableData]);

  return (
    <>
      {showTrackedToast && <TrackedToast onClose={() => setShowTrackedToast(false)} />}
      {showCancelledToast && <CancelledToast onClose={() => setShowCancelledToast(false)} />}
      
      <Header onNavigate={onNavigate} currentPage="quick-intelligence-survey" />

      <div className="bg-[#f6f6fa] flex flex-col gap-[24px] items-center min-h-screen px-[32px] py-[24px] pt-[140px] relative w-full">
        {/* 面包屑 */}
        <div className="w-[1200px]">
          <Breadcrumb onNavigate={onNavigate} />
        </div>

        {/* 搜索區域 */}
        <div className="bg-white relative rounded-[8px] shrink-0 w-[1200px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            {/* 標題和摺疊按鈕 */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p
                className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-[500px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                輸入統一編號或公司名稱進行查詢
              </p>
              <div
                className="flex items-center justify-center relative shrink-0 cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <div className={`flex-none transition-transform ${isCollapsed ? "" : "rotate-180"}`}>
                  <div className="relative size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <path d="M6 9L12 15L18 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {!isCollapsed && (
              <>
                {/* 分隔線 */}
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                      <path d="M0 0.5H1152" stroke="#ECECF3" />
                    </svg>
                  </div>
                </div>

                {/* 說明文字 */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <p
                    className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#747480] text-[16px] tracking-[0.48px] whitespace-pre-wrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    請輸入欲查詢的供應商統一編號或名稱，系統將自動調閱標案拒往、司法判決等公開風險情資。
                  </p>
                </div>

                {/* 搜索框和複選框 */}
                <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                    {/* 搜索輸入框 */}
                    <div className="bg-[#f6f6fa] relative rounded-[8px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start px-[12px] py-[14px] relative w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <path
                                  d={svgPaths.p2c1d9240}
                                  stroke="#99A1AF"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.33333"
                                />
                                <path
                                  d={svgPaths.p107a080}
                                  stroke="#99A1AF"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.33333"
                                />
                              </g>
                            </svg>
                          </div>
                          <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !isSearchDisabled && onSearch) {
                                onSearch(searchText, Object.keys(checkboxes).filter(key => checkboxes[key as keyof typeof checkboxes]));
                              }
                            }}
                            placeholder="查公司名、統編、股票代號、地址、負責人"
                            className="flex-1 bg-transparent border-none outline-none font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] tracking-[0.48px] placeholder:text-[#747480]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* 複選框組 */}
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("all")}
                      >
                        <CheckboxIcon checked={checkboxes.all} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            顯示所有資料
                          </p>
                        </div>
                      </div>

                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("bidding")}
                      >
                        <CheckboxIcon checked={checkboxes.bidding} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            標案拒往
                          </p>
                        </div>
                      </div>

                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("judicial")}
                      >
                        <CheckboxIcon checked={checkboxes.judicial} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            司法判決
                          </p>
                        </div>
                      </div>

                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("government")}
                      >
                        <CheckboxIcon checked={checkboxes.government} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            政府標案
                          </p>
                        </div>
                      </div>

                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("relationship")}
                      >
                        <CheckboxIcon checked={checkboxes.relationship} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            疑似關係{" "}
                          </p>
                        </div>
                      </div>

                      <div
                        className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 cursor-pointer"
                        onClick={() => handleCheckboxChange("penalty")}
                      >
                        <CheckboxIcon checked={checkboxes.penalty} />
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            違規裁罰
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 立即查詢按鈕 */}
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                    <div
                      className={`content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 ${
                        isSearchDisabled ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#ffe600] cursor-pointer hover:bg-[#ffd700]"
                      } transition-colors`}
                      onClick={() => !isSearchDisabled && onSearch && onSearch(searchText, Object.keys(checkboxes).filter(key => checkboxes[key as keyof typeof checkboxes]))}
                    >
                      <div
                        className={`flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 ${
                          isSearchDisabled ? "text-[#9b9ba1]" : "text-[#1a1a24]"
                        } text-[18px] text-center tracking-[0.54px] whitespace-nowrap`}
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        <p className="leading-[normal]">立即查詢</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 最近普查記錄表格 */}
        <div className="bg-white relative rounded-[8px] shrink-0 w-[1200px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            {/* 表格標題 */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p
                className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[22px] w-[500px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
                  最近普查
                </span>
                <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>紀錄 </span>
              </p>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p
                  className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] underline cursor-pointer hover:opacity-70 transition-opacity"
                  style={{ fontVariationSettings: "'wght' 400" }}
                  onClick={() => onNavigate?.('quick-intelligence-tracking-list')}
                >
                  查看追蹤清單({trackingCount})
                </p>
              </div>
            </div>

            {/* 表格 - 完整顯示不需要滾動 */}
            <div className="w-full">
              <div className="flex flex-col items-start w-full">
                {/* 表頭行 */}
                <div className="flex items-start shrink-0 w-full">
                  {/* 供應商名稱 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[250px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        供應商名稱{" "}
                      </p>
                    </div>
                  </div>

                  {/* 查詢日期 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        查詢日期
                      </p>
                    </div>
                  </div>

                  {/* 公司地址 / 電話 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[300px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        公司地址 / 電話
                      </p>
                    </div>
                  </div>

                  {/* 近一年警示摘要 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[320px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        近一年警示摘要
                      </p>
                    </div>
                  </div>

                  {/* 操作 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center justify-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        操作
                      </p>
                    </div>
                  </div>
                </div>

                {/* 資料行 */}
                {mergedTableData.map((row, index) => {
                  const tracked = isTracked(row.taxId);
                  
                  const handleTrackClick = () => {
                    if (tracked) {
                      // 已追蹤，取消追蹤
                      removeTrackingByTaxId(row.taxId);
                      // 顯示已取消提示
                      setShowCancelledToast(true);
                    } else {
                      // 未追蹤，添加到追蹤清單
                      addTracking({
                        name: row.name,
                        taxId: row.taxId,
                        address: row.address,
                        phone: row.phone,
                        latestRisk: row.summary
                      });
                      // 顯示已追蹤提示
                      setShowTrackedToast(true);
                    }
                  };

                  const handleViewClick = () => {
                    // 直接導航到詳情頁
                    if (onViewSupplier) {
                      onViewSupplier(row.name);
                    } else if (onNavigate) {
                      onNavigate('quick-intelligence-detail');
                    }
                  };

                  return (
                    <div key={`${row.taxId}-${row.date}-${index}`} className="flex items-stretch shrink-0 w-full">
                      {/* 供應商名稱 */}
                      <div className="bg-white min-h-[84px] w-[250px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex flex-col justify-center h-full px-[15px] py-[12px] gap-[2px]">
                          {row.isSuspectedChinese && (
                            <span className="inline-flex items-center bg-[#ec5242] text-white text-[12px] leading-[16px] px-[6px] py-[2px] rounded-[4px] w-fit font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" style={{ fontVariationSettings: "'wght' 400" }}>
                              疑似中資
                            </span>
                          )}
                          <p
                            className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 700" }}
                          >
                            {row.name}
                          </p>
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            統編: {row.taxId}
                          </p>
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            負責人: {row.person}
                          </p>
                        </div>
                      </div>

                      {/* 查詢日期 */}
                      <div className="bg-white min-h-[84px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex items-center h-full px-[15px]">
                          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]">
                            {row.date}
                          </p>
                        </div>
                      </div>

                      {/* 公司地址 / 電話 */}
                      <div className="bg-white min-h-[84px] w-[300px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            {row.address}
                          </p>
                          <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]">
                            {row.phone}
                          </p>
                        </div>
                      </div>

                      {/* 近一年警示摘要 */}
                      <div className="bg-white min-h-[84px] w-[320px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex items-center h-full px-[15px]">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            {row.summary}
                          </p>
                        </div>
                      </div>

                      {/* 操作 */}
                      <div className="bg-white min-h-[84px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex gap-[16px] items-center justify-center h-full px-[15px]">
                          {/* 追蹤按鈕 */}
                          <div
                            className="flex gap-[4px] items-center justify-center shrink-0 cursor-pointer hover:opacity-70 transition-opacity w-[33px]"
                            onClick={handleTrackClick}
                          >
                            <div className="relative shrink-0 size-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <g>
                                  {tracked ? (
                                    /* 已追蹤：紅色填充愛心 */
                                    <path d={heartSvgPaths.p2aff100} fill="#EC5242" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                  ) : (
                                    /* 未追蹤：黑色空心愛心 */
                                    <path d={heartSvgPaths.pc822c00} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                  )}
                                </g>
                              </svg>
                            </div>
                            <p
                              className={`[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 ${
                                tracked ? 'text-[#EC5242]' : 'text-[#1a1a24]'
                              } text-[16px] tracking-[0.48px] underline whitespace-nowrap`}
                              style={{ fontVariationSettings: "'wght' 400" }}
                            >
                              追蹤
                            </p>
                          </div>

                          {/* 查看按鈕 */}
                          <p
                            className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap w-[33px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                            onClick={handleViewClick}
                          >
                            查看
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}