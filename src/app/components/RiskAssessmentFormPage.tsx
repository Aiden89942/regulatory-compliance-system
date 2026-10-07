import Header from './Header';
import Footer from './Footer';
import svgPaths from '../../imports/svg-6kasm473pj';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

// ==================== Breadcrumb ====================

function BreadcrumbText({ text, isBold }: { text: string; isBold?: boolean }) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        {isBold ? (
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[-0.3125px] whitespace-nowrap">
            {text}
          </p>
        ) : (
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

function BreadcrumbIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function Breadcrumb({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
      <div className="cursor-pointer" onClick={() => onNavigate?.('home')}>
        <BreadcrumbText text="首頁" />
      </div>
      <BreadcrumbIcon />
      <div className="cursor-pointer" onClick={() => onNavigate?.('risk-assessment')}>
        <BreadcrumbText text="風險評估" />
      </div>
      <BreadcrumbIcon />
      <BreadcrumbText text="資訊服務委外風險評估表" isBold />
    </div>
  );
}

// ==================== Info Icon ====================

function InfoIcon() {
  return (
    <div className="relative size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_info)">
          <path d={svgPaths.p14d24500} stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_info">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ==================== Radio Button ====================

function RadioButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]">
        <div className="absolute bg-white border-[#c4c4cd] border-[0.833px] border-solid inset-0 rounded-[20px]" />
      </div>
    </div>
  );
}

// ==================== Tag Chip ====================

function TagChip({ text, hasInfo }: { text: string; hasInfo?: boolean }) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      {hasInfo && (
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <InfoIcon />
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== Yes/No/NA Radio Group ====================

function YesNoNAGroup() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
        <RadioButton />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>是</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
        <RadioButton />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>否</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
        <RadioButton />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>Ｎ / A</p>
      </div>
    </div>
  );
}

// ==================== Form Header ====================

function FormHeader() {
  return (
    <div className="bg-[#747480] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[24px] relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          資訊服務委外風險評估表
        </p>
      </div>
    </div>
  );
}

// ==================== Basic Info Section ====================

function BasicInfoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        一、基本資料
      </p>
      {/* Row 1: Date, Unit, Project */}
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>評估日期</p>
          </div>
          <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-h-px min-w-px overflow-hidden relative text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                  2026/01/01
                </p>
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p371e6400} stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3 2)" />
                    <path d="M17 1V5" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(-1 1)" />
                    <path d="M9 1V5" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(-1 1)" />
                    <path d="M4 10H20" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(-1 0)" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253.333px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>申請單位</p>
          </div>
          <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">請輸入申請單位</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>專案名稱</p>
          </div>
          <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>請輸入專案名稱</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
      {/* Row 2: Service Type, Operation Type */}
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253.33px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>資訊服務委外類型</p>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>請選擇資訊服務委外類型</p>
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d="M7 9L12 14L17 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>作業委外類型</p>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>請選擇作業委外類型</p>
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d="M7 9L12 14L17 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Assessment Indicators Section ====================

function AssessmentIndicatorsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        二、評估參考指標
      </p>

      {/* Q1: 供應商涉及之資訊資產 */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          1. 供應商涉及之資訊資產(單選)
        </p>

        {/* Option A */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`A.涉及以下任一軟 / 硬體資訊資產： `}</p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <TagChip text="核心系統" />
              <TagChip text="屬於S01之關鍵系統軟體" hasInfo />
              <TagChip text="屬於H01之關鍵系統設備" hasInfo />
            </div>
          </div>
        </div>

        {/* Option B */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              B.涉及以下任一軟/硬體類資訊資產：
            </p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <TagChip text="屬於S02之一般系統軟體" hasInfo />
              <TagChip text="屬於H02~H05" hasInfo />
            </div>
          </div>
        </div>

        {/* Option C */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              C.涉及以下任一軟/硬體類資訊資產
            </p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <TagChip text="屬於S03~S04之軟體" hasInfo />
              <TagChip text={`屬於H06~H07 `} hasInfo />
              <TagChip text="不接觸任何軟/硬體資訊資產" />
            </div>
          </div>
        </div>

        {/* Q2: 供應商會存取之資料 */}
        <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" start={2} style={{ fontVariationSettings: "'wght' 700" }}>
          <li className="ms-[24px] whitespace-pre-wrap">
            <span className="leading-[23px]">供應商會存取之資料(單選)</span>
          </li>
        </ol>

        {/* Q2 Option A */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`A.涉及以下任一軟 / 硬體資訊資產： `}</p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <TagChip text="特種個資或可識別當事人之個人資料" />
              <TagChip text="屬於F01、D01之文件及資料" hasInfo />
            </div>
          </div>
        </div>

        {/* Q2 Option B */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              B.會存取或保管以下任一：
            </p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <TagChip text="屬於F02~F04" hasInfo />
              <TagChip text="屬於D02~D04之文件及資料" hasInfo />
            </div>
          </div>
        </div>

        {/* Q2 Option C */}
        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              C.不會存取或保管任何文件及資料
            </p>
          </div>
        </div>
      </div>

      {/* Q3: 傳輸連線方式 */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          3. 供應商與國泰投信之間傳輸連線方式(單選)
        </p>

        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              A.透過網際網路與國泰投信進行傳輸連線
            </p>
          </div>
        </div>

        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              B.透過封閉網路或加密網路與國泰投信進行傳輸連線(如：專線、VPN、VDI等)
            </p>
          </div>
        </div>

        <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
          <RadioButton />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              C.不會與國泰投信進行任何外部傳輸連線
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Feasibility Section ====================

function FeasibilitySection() {
  const questions = [
    '1. 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?',
    '2. 是否已考量資訊服務委外事項之可行性?',
    '3. 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?',
    '4. 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?',
    '5. 是否考量潛在供應商過度集中之可能性?',
    '6. 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？',
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        三、可行性評估（請勾選是/否）
      </p>
      {questions.map((q, i) => (
        <div key={i} className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            {q}
          </p>
          <YesNoNAGroup />
        </div>
      ))}
    </div>
  );
}

// ==================== Supplementary Notes Section ====================

function SupplementaryNotesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        四、補充說明
      </p>
      <div className="bg-white h-[120px] relative rounded-[8px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              請輸入補充說明
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

// ==================== Signature Section ====================

function SignatureBlock({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          {title}
        </p>
      </div>
      <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[35px] relative w-full">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">部門主管簽章</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">[ 簽章區域 ]</p>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[28px] relative w-full">
                <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[16px] text-center tracking-[-0.3125px]">日期: __________________________________</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignatureSection() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <SignatureBlock title="部室主管簽章" />
      <SignatureBlock title="單位內供應商業務負責人簽章" />
    </div>
  );
}

// ==================== Right Sidebar: Risk Result ====================

function RiskResultCard({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { setShowDraftSavedNotification } = useAppContext();

  const handleSaveDraft = () => {
    // TODO: Save form data to localStorage
    // For now, just show the notification
    setShowDraftSavedNotification(true);
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[320px]">
      {/* Risk calculation result card */}
      <div className="bg-white content-stretch flex flex-col items-center p-[24px] relative rounded-[8px] shrink-0 w-[320px]">
        <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            風險計算結果
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[24px] pt-[48px] relative shrink-0 w-full">
          {/* Warning triangle icon */}
          <div className="relative shrink-0 size-[48px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p206f1200} stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d="M24 18V26" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d="M24 34H24.02" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
          <div className="h-[20px] relative shrink-0 w-full">
            <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] left-1/2 -translate-x-1/2 text-[#1a1a24] text-[16px] text-center top-0 tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              請完成三項風險因子評估
            </p>
          </div>
          <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
              以計算風險值與風險等級
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
              <button
                onClick={handleSaveDraft}
                className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[8px] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
              >
                <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                  <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-[18px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                    儲存成草稿
                  </p>
                </div>
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
              </button>
              <div className="bg-[#e3e3e3] content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0">
                <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#9b9ba1] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="leading-[normal]">確認並匯出</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Main Page ====================

interface RiskAssessmentFormPageProps {
  onNavigate?: (page: string) => void;
}

export default function RiskAssessmentFormPage({ onNavigate }: RiskAssessmentFormPageProps) {
  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="supplier-risk-assessment" />
      <div className="pt-[120px] w-full">
        <div className="bg-[#ececf3] content-stretch flex flex-col items-center py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full min-h-[calc(100vh-120px)]">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] relative shrink-0 w-full max-w-[1440px]">
            {/* Breadcrumb */}
            <Breadcrumb onNavigate={onNavigate} />

            {/* Main content area */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1200px]">
              {/* Left: Form */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <FormHeader />
                <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[856px]">
                  <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
                  <BasicInfoSection />
                  <AssessmentIndicatorsSection />
                  <FeasibilitySection />
                  <SupplementaryNotesSection />
                  <SignatureSection />
                </div>
              </div>

              {/* Right: Risk Result */}
              <RiskResultCard onNavigate={onNavigate} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}