import { useTracking } from "@/app/context/TrackingContext";
import Header from "./Header";
import svgPaths from "@/imports/svg-2s5uxpi6bu";
import heartSvgPaths from "@/imports/svg-ubhnknhjl9";
import { useRef, useEffect } from "react";

interface QuickIntelligenceTrackingListPageProps {
  onNavigate?: (page: string) => void;
  onViewSupplier?: (supplierName: string) => void;
}

// 麵包屑組件
function Breadcrumb({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center px-[32px] relative shrink-0 w-full">
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
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[-0.3125px]">
            追蹤清單
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuickIntelligenceTrackingListPage({ onNavigate, onViewSupplier }: QuickIntelligenceTrackingListPageProps) {
  const { trackedCompanies, removeTracking, addTracking } = useTracking();
  const hasInitialized = useRef(false);

  // 添加測試資料（僅執行一次）
  useEffect(() => {
    if (!hasInitialized.current && trackedCompanies.length === 0) {
      hasInitialized.current = true;
      
      // 添加一些測試資料
      const testCompanies = [
        {
          name: '新加坡商認和科技有限公司',
          taxId: '90716929',
          address: '台北市內湖區瑞光路 358 巷 38 弄 36 號 10 樓',
          phone: '02-87975888',
          latestRisk: '近一年新增 疑似中資5筆、標案拒往0筆、違規裁罰0筆'
        },
      ];

      // 現在可以直接添加，因為 addTracking 會自動生成唯一 ID
      testCompanies.forEach(company => addTracking(company));
    }
  }, [trackedCompanies.length, addTracking]);

  return (
    <>
      <Header onNavigate={onNavigate} currentPage="quick-intelligence-tracking-list" />

      <div className="bg-[#f6f6fa] flex flex-col gap-[24px] items-center min-h-screen px-[32px] py-[24px] pt-[140px] relative w-full">
        {/* 麵包屑和標題區域 - 1440px 寬度 */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1440px]">
          {/* 麵包屑 */}
          <Breadcrumb onNavigate={onNavigate} />

          {/* 標題 */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[32px] relative w-full">
                <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] min-h-px min-w-px relative text-[32px] text-black tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  追蹤清單
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 追蹤清單內容 - 1440px 寬度 */}
        <div className="bg-white relative rounded-[8px] shrink-0 w-[1440px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
            {/* 搜尋框 */}
            <div className="bg-[#f6f6fa] relative rounded-[8px] shrink-0 w-full mx-[24px] mt-[24px]" style={{ width: 'calc(100% - 48px)' }}>
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
                    placeholder="搜尋案件編號或供應商..."
                    className="flex-1 bg-transparent border-none outline-none font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] tracking-[0.48px] placeholder:text-[#747480]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  />
                </div>
              </div>
            </div>

            {/* 表格 - 橫向滾動 */}
            <div className="overflow-x-auto w-full pb-[24px] pl-[24px]">
              <div className="inline-flex flex-col items-start min-w-full">
                {/* 表頭行 */}
                <div className="flex items-start shrink-0">
                  {/* 供應商名稱 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[280px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        供應商名稱
                      </p>
                    </div>
                  </div>

                  {/* 統編 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        統編
                      </p>
                    </div>
                  </div>

                  {/* 公司地址 / 電話 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[420px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        公司地址 / 電話
                      </p>
                    </div>
                  </div>

                  {/* 最新風險 */}
                  <div className="bg-[#f6f6fa] h-[48px] w-[392px] shrink-0 border-b border-[#d2dae6]">
                    <div className="flex items-center h-full px-[15px]">
                      <p
                        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        最新風險
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
                {trackedCompanies.length === 0 ? (
                  <div className="flex items-center justify-center w-full py-[40px]">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      目前沒有追蹤的項目
                    </p>
                  </div>
                ) : (
                  trackedCompanies.map((company) => (
                    <div key={company.id} className="flex items-start shrink-0">
                      {/* 供應商名稱 */}
                      <div className="bg-white h-[84px] w-[280px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            {company.name}
                          </p>
                        </div>
                      </div>

                      {/* 統編 */}
                      <div className="bg-white h-[84px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex items-center h-full px-[15px]">
                          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]">
                            {company.taxId}
                          </p>
                        </div>
                      </div>

                      {/* 公司地址 / 電話 */}
                      <div className="bg-white h-[84px] w-[420px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex flex-col justify-center h-full px-[15px] py-[20px]">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            {company.address}
                          </p>
                          <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]">
                            {company.phone}
                          </p>
                        </div>
                      </div>

                      {/* 最新風險 */}
                      <div className="bg-white h-[84px] w-[392px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex items-center h-full px-[15px]">
                          <p
                            className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]"
                            style={{ fontVariationSettings: "'wght' 400" }}
                          >
                            {company.latestRisk}
                          </p>
                        </div>
                      </div>

                      {/* 操作 */}
                      <div className="bg-white h-[84px] w-[150px] shrink-0 border-b border-[#d2dae6]">
                        <div className="flex gap-[16px] items-center justify-center h-full px-[15px]">
                          {/* 追蹤按鈕 */}
                          <div 
                            className="flex gap-[4px] items-center justify-center shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={() => removeTracking(company.id)}
                          >
                            <div className="relative shrink-0 size-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <g>
                                  <path d={heartSvgPaths.p3f743400} fill="#EC5242" stroke="#EC5242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                </g>
                              </svg>
                            </div>
                            <p
                              className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#EC5242] text-[16px] tracking-[0.48px] underline whitespace-nowrap"
                              style={{ fontVariationSettings: "'wght' 400" }}
                            >
                              追蹤
                            </p>
                          </div>

                          {/* 查看按鈕 */}
                          <p
                            className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
                            style={{ fontVariationSettings: "'wght' 400" }}
                            onClick={() => onViewSupplier?.(company.name)}
                          >
                            查看
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}