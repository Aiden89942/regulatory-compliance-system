import { X, Printer, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from '../../imports/svg-bl50k5xhu4';
import svgPathsAu from '../../imports/svg-qmlv53dq31';
import { useState } from 'react';
import IntelligenceTrackingSection from './IntelligenceTrackingSection';

interface SupplierReportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupplierReportDialog({ isOpen, onClose }: SupplierReportDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[20px] bg-black/50" onClick={onClose}>
      {/* Modal Container - 改為 14px 弧度 */}
      <div 
        className="bg-white relative rounded-[14px] w-[1080px] max-h-[90vh] flex flex-col shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                評估表預覽
              </p>
              <div className="h-[42px] relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
                  {/* Download PDF Button */}
                  <button className="relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_58_2368)">
                            <path d={svgPaths.p3c7aa800} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            <path d={svgPaths.p5c2680} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            <path d={svgPaths.p10261440} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_2368">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div style={{ fontVariationSettings: "'wght' 400" }} className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]">
                        <p className="leading-[23px]">下載 PDF</p>
                      </div>
                    </div>
                  </button>

                  {/* Print Button */}
                  <button className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_58_2369)">
                            <path d={svgPaths.p3c7aa800} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            <path d={svgPaths.p5c2680} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            <path d={svgPaths.p10261440} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_2369">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div style={{ fontVariationSettings: "'wght' 400" }} className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]">
                        <p className="leading-[23px]">列印</p>
                      </div>
                    </div>
                  </button>

                  {/* Close Button */}
                  <button 
                    onClick={onClose}
                    className="relative shrink-0 size-[24px] cursor-pointer"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M18 6L6 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6 6L18 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[#f3f4f6] h-px relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto min-w-0">
          <div className="content-stretch flex flex-col items-start px-[40px] py-[32px] relative w-full min-w-0">
            {/* Dark Header Section */}
            <div className="bg-[#2e2e38] relative rounded-[8px] shrink-0 w-full mb-[24px]">
              <div className="content-stretch flex items-center p-[32px] relative w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                  {/* Main Title */}
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[40px] text-white w-[min-content]" style={{ fontVariationSettings: "'wght' 700" }}>
                    供應商風險評估佔與情資審查報告
                  </p>
                  
                  {/* Supplier and Project Info */}
                  <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-white w-full">
                    <p className="leading-[normal] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      供應商：碩網資訊股份有限公司
                    </p>
                    <p className="leading-[23px] relative shrink-0 text-[18px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      專案：2026 AI 智能客服系統 v1.0
                    </p>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                    {/* Contact Person */}
                    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
                      <div className="h-[16.333px] relative shrink-0 w-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.3333">
                          <g>
                            <path d={svgPathsAu.pc93b400} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsAu.p2dfb4280} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        聯絡人：王*明
                      </p>
                    </div>
                    
                    {/* Email */}
                    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPathsAu.p1bb53300} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsAu.p1857cd00} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        信箱：wang.daming@supplier.com
                      </p>
                    </div>
                    
                    {/* Date */}
                    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d="M5.33398 1.33398V4.00065" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M10.666 1.33398V4.00065" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsAu.p2e667900} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M2 6.66602H14" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        日期：2025/12/22
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: 資安評估自評結果 */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mb-[24px]">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                一、資安評估自評結果
              </p>

              {/* Score Cards Row */}
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                {/* Main Score Circle with Arc */}
                <div className="relative shrink-0 size-[163px]">
                  <svg className="block size-full -rotate-90" viewBox="0 0 163 163">
                    <path d={svgPathsAu.p1610d70} fill="#FFE600" />
                    <circle cx="81.5" cy="81.5" r="54" fill="#2E2E38" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] text-white text-[56px]" style={{ fontVariationSettings: "'wght' 700" }}>80</p>
                  </div>
                </div>

                {/* Score Stats */}
                <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0">
                  {/* 符合性項數 */}
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0 text-center">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                      15
                    </p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[14px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      符合性項數
                    </p>
                  </div>

                  {/* 符合項數 */}
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0 text-center">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#00a63e] text-[20px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                      13
                    </p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[14px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      符合項數
                    </p>
                  </div>

                  {/* 部分符合項數 */}
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0 text-center">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                      15
                    </p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[14px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      部分符合項數
                    </p>
                  </div>

                  {/* 不符合項數 */}
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0 text-center">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#e7000b] text-[20px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                      2
                    </p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[14px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                      不符合項數
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: 資安評估題項自評一覽 */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                二、資安評估題項自評一覽
              </p>

              {/* Table */}
              <div className="relative shrink-0 w-full">
                <div className="border border-[#d1d5dc] rounded-[10px] overflow-hidden">
                  {/* Table Header */}
                  <div className="bg-[#f9fafb] content-stretch flex items-center relative shrink-0 w-full border-b border-[#d1d5dc]">
                    <div className="content-stretch flex items-center p-[12px] relative shrink-0 w-[80px]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                        編號
                      </p>
                    </div>
                    <div className="basis-0 content-stretch flex items-center grow min-h-px min-w-px p-[12px] relative shrink-0 border-l border-[#d1d5dc]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                        問卷題目
                      </p>
                    </div>
                    <div className="content-stretch flex items-center p-[12px] relative shrink-0 w-[120px] border-l border-[#d1d5dc]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-center text-nowrap w-full" style={{ fontVariationSettings: "'wght' 700" }}>
                        評估結果
                      </p>
                    </div>
                    <div className="content-stretch flex items-center p-[12px] relative shrink-0 w-[100px] border-l border-[#d1d5dc]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-center text-nowrap w-full" style={{ fontVariationSettings: "'wght' 700" }}>
                        符合
                      </p>
                    </div>
                  </div>

                  {/* Table Rows */}
                  {[
                    { num: '07', question: '若供應商有開放供網路使用之系統及設備(門禁系統)，則應該另獨立至單獨或專用的網路區間?', result: '是', compliant: true, highlighted: false },
                    { num: '07-2', question: '在開發期間(含企劃與執行期間)，須提供相關資訊安全管理及運維服務之人員清單及角色說明?', result: '是', compliant: true, highlighted: false },
                    { num: '08', question: '供應商是否定期檢討對其開發出的技術、產品之需獲得安全性評報?', result: '否', compliant: false, highlighted: true },
                    { num: '09', question: '供應商是否備有資產清冊，該採認資產清冊是否包含已列於合約於其需採認清冊是依其技術出租採認器', result: '否', compliant: false, highlighted: true },
                    { num: '010', question: '供應商是否已建立及運用變更(Change Management)公安管理機制，以監、系統或設施發生變更需經核准及執行 前、於必須進行風險評估?', result: '是', compliant: true, highlighted: false },
                    { num: '011', question: '貴供應商是否有定期備份，供應商管理者之金鑰備份及機制確保?', result: '否', compliant: true, highlighted: false },
                    { num: '012', question: '供應商是否有針對外部服務及發生提項資訊安全事件之應變流程(如:定期進行清晰或要發確保安置及應變能力)?', result: '是', compliant: true, highlighted: false },
                    { num: '013', question: '如供應商已訂購採購預定完專與供應商簽訂資訊安全提議，則需再供應商及其相可簽確公安提議與契約內的Addm?', result: '是', compliant: true, highlighted: false },
                    { num: '014', question: '供應商委章外包其業務做服務之事項(以下簡稱「轉 包廠、專為、文方為服務」)', result: '是', compliant: true, highlighted: false },
                    { num: '015', question: '若供應商委託原在服務機器或於其提供資訊安全於其採管資產發服務供應商簽訂資訊安全協議或單獨確約現定?', result: '是', compliant: true, highlighted: false },
                    { num: '016', question: '若供應商有資外供商商原始完服務可訂確或定級關於器或監系機器完設上管理員確級核外承商訂練接案之業約上項至有機加項?例簽於公文監系或確認確實存機?', result: '是', compliant: true, highlighted: false },
                    { num: '017', question: '數位供應商擁業務外部服務於供應機器或資訊發裝，委情報應答於確認客與機關提進業發各處品標準採納範定設內是或採之轉包廠商確提期提確認訂規則呢?', result: '是', compliant: true, highlighted: false },
                    { num: '018', question: '供應商委章採購機器與原始出對人員部門於監確變令(包括於員工確定、清訓完員確公及解僱)?', result: '是', compliant: true, highlighted: false },
                    { num: '019', question: '供應商委章委完服採約與約定位監監完供服採承訂確員機定約品(包括員工確加定約工確與員採及解僱發機)?', result: '是', compliant: true, highlighted: false },
                    { num: '020', question: '供應商委章採約定約與履約服務商簽訂於機確確責?', result: '是', compliant: true, highlighted: false },
                  ].map((row, idx) => (
                    <div key={idx} className={`content-stretch flex items-center relative shrink-0 w-full ${idx < 14 ? 'border-b border-[#d1d5dc]' : ''} ${row.highlighted ? 'bg-[#fffaeb]' : ''}`}>
                      <div className="h-[70.5px] relative shrink-0 w-[80px]">
                        <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-[12px] not-italic text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]">
                          {row.num}
                        </p>
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 border-l border-[#d1d5dc]">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center p-[12px] relative w-full">
                            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative text-[#1a1a24] text-[15px] tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                              {row.question}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[70.5px] relative shrink-0 w-[120px] border-l border-[#d1d5dc]">
                        <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] left-1/2 -translate-x-1/2 text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                          {row.result}
                        </p>
                      </div>
                      <div className="content-stretch flex items-center justify-center h-[70.5px] px-[24px] py-[12px] relative shrink-0 w-[100px] border-l border-[#d1d5dc]">
                        {row.compliant ? (
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g clipPath="url(#clip0_56_920)">
                                <path d={svgPathsAu.p2391ae80} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                <path d={svgPathsAu.p10a73380} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </g>
                              <defs>
                                <clipPath id="clip0_56_920">
                                  <rect fill="white" height="20" width="20" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        ) : (
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g clipPath="url(#clip0_56_898)">
                                <path d={svgPathsAu.p2391ae80} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                <path d="M12.5 7.5L7.5 12.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                <path d="M7.5 7.5L12.5 12.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </g>
                              <defs>
                                <clipPath id="clip0_56_898">
                                  <rect fill="white" height="20" width="20" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Intelligence Tracking Section */}
            <div className="mt-[24px]">
              <IntelligenceTrackingSection />
            </div>
          </div>
        </div>

        {/* Footer - 移除頁數顯示 */}
        <div className="bg-white border-t border-[#e5e7eb] content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full">
          {/* 空白 footer */}
        </div>
      </div>
    </div>
  );
}