import svgPaths from "@/imports/svg-ubhnknhjl9";
import Header from "./Header";
import { useTracking } from "../context/TrackingContext";
import { searchCompanies, type CompanyBasicInfo } from "./companyLookup";
import { useMemo } from "react";

interface QuickIntelligenceSearchResultProps {
  onNavigate?: (page: string) => void;
  searchQuery: string;
  selectedRiskTypes?: string[];
  onViewSupplier?: (supplierName: string) => void;
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
          <p
            className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors"
            onClick={() => onNavigate?.('quick-intelligence-survey')}
          >
            快速情資查詢
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
            查詢結果
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuickIntelligenceSearchResult({ onNavigate, searchQuery, selectedRiskTypes, onViewSupplier }: QuickIntelligenceSearchResultProps) {
  const { addTracking, setShowTrackingNotification } = useTracking();

  const matchedCompanies = useMemo(() => searchCompanies(searchQuery), [searchQuery]);

  const handleSearchAgain = () => {
    if (onNavigate) {
      onNavigate('quick-intelligence-survey');
    }
  };

  const handleViewDetail = (company: CompanyBasicInfo) => {
    if (onViewSupplier) {
      onViewSupplier(company.name);
    } else if (onNavigate) {
      onNavigate('quick-intelligence-detail');
    }
  };

  const handleTrack = (company: CompanyBasicInfo) => {
    addTracking({
      name: company.name,
      taxId: company.taxId,
      address: company.address,
      phone: company.phone,
      latestRisk: company.alertSummary,
    });
    setShowTrackingNotification(true);
  };



  return (
    <>
      <Header onNavigate={onNavigate} currentPage="quick-intelligence-survey" />

      <div className="bg-[#ececf3] flex flex-col items-center min-h-screen px-[32px] py-[24px] pt-[140px] relative w-full rounded-tl-[32px] rounded-tr-[32px]">
        {/* 面包屑 */}
        <div className="w-[1280px] mb-[32px]">
          <Breadcrumb onNavigate={onNavigate} />
        </div>

        {/* 搜索結果區域 */}
        <div className="bg-white relative rounded-[8px] shrink-0 w-[1280px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            {/* 標題和再次搜尋 */}
            <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#1a1a24] w-full">
              <p
                className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] relative shrink-0 text-[22px] w-[500px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                搜尋結果共 {matchedCompanies.length} 筆
              </p>
              <p
                className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[18px] tracking-[0.54px] underline cursor-pointer hover:text-[#ffe600] transition-colors"
                style={{ fontVariationSettings: "'wght' 400" }}
                onClick={handleSearchAgain}
              >
                再次搜尋
              </p>
            </div>

            {/* 分隔線 */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                  <path d="M0 0.5H1152" stroke="#ECECF3" />
                </svg>
              </div>
            </div>

            {/* 表格 */}
            {matchedCompanies.length === 0 ? (
              /* 找不到供應商 — 空狀態畫面（對齊 Figma 設計） */
              <div className="bg-white relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[15px] py-[24px] relative w-full">
                    <p
                      className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-black text-center tracking-[0.48px] whitespace-nowrap"
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      目前沒有資料
                    </p>
                  </div>
                </div>
              </div>
            ) : (
            /* 表格 — 有搜尋結果 */
            <div className="overflow-x-auto w-full">
              <div className="inline-flex flex-col items-start min-w-full">
                {/* 表頭行 */}
                <div className="flex items-start shrink-0 w-full">
                  {/* 供應商名稱 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[199px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        供應商名稱{" "}
                      </p>
                    </div>
                  </div>

                  {/* 負責人 */}
                  <div className="bg-[#f6f6fa] h-[48px] flex-1 shrink-0 border-b border-[#d2dae6] min-w-[100px]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        負責人
                      </p>
                    </div>
                  </div>

                  {/* 公司地址 / 電話 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[279px] shrink-0 border-b border-[#d2dae6]">
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
                  <div className="bg-[#f6f6fa] h-[48px] w-[375px] shrink-0 border-b border-[#d2dae6]">
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
                  <div className="bg-[#f6f6fa] h-[48px] flex-1 shrink-0 border-b border-[#d2dae6] min-w-[150px]">
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
                {matchedCompanies.map((company) => (
                  <div key={company.name} className="flex items-start shrink-0 w-full">
                    {/* 供應商名稱 */}
                    <div className="bg-white h-[84px] w-[199px] shrink-0 border-b border-[#d2dae6]">
                      <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          {company.name}
                        </p>
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          統編: {company.taxId}
                        </p>
                      </div>
                    </div>

                    {/* 負責人 */}
                    <div className="bg-white h-[84px] flex-1 shrink-0 border-b border-[#d2dae6] min-w-[100px]">
                      <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          {company.representative}
                        </p>
                      </div>
                    </div>

                    {/* 公司地址 / 電話 */}
                    <div className="bg-white h-[84px] w-[279px] shrink-0 border-b border-[#d2dae6]">
                      <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          {company.address}
                        </p>
                        <p
                          className="font-['EYInterstate:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          {company.phone}
                        </p>
                      </div>
                    </div>

                    {/* 近一年警示摘要 */}
                    <div className="bg-white h-[84px] w-[375px] shrink-0 border-b border-[#d2dae6]">
                      <div className="flex items-center h-full px-[15px]">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          {company.alertSummary}
                        </p>
                      </div>
                    </div>

                    {/* 操作列 */}
                    <div className="bg-white h-[84px] flex-1 shrink-0 border-b border-[#d2dae6] min-w-[150px]">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="flex gap-[16px] items-center justify-center px-[15px] py-[20px]">
                          {/* 追蹤按鈕 */}
                          <div className="flex gap-[4px] items-center justify-center shrink-0 cursor-pointer hover:opacity-70 transition-opacity w-[33px]" onClick={() => handleTrack(company)}>
                            <div className="relative shrink-0 size-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <g>
                                  <path d={svgPaths.p3f743400} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                </g>
                              </svg>
                            </div>
                            <p
                              className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] underline whitespace-nowrap"
                              style={{ fontVariationSettings: "'wght' 400" }}
                            >
                              追蹤
                            </p>
                          </div>

                          {/* 查看按鈕 */}
                          <p
                            className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap w-[33px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                            onClick={() => handleViewDetail(company)}
                          >
                            查看
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}