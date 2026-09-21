import svgPaths from "./svg-5ldmcgmxft";

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <div className="bg-[#ffe600] flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center whitespace-nowrap">
            <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
              <p className="leading-[normal]">{`資訊服務委外風險評估 `}</p>
            </div>
            <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
              <p className="leading-[normal]">8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center whitespace-nowrap">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[normal]">資訊供應商風險評估</p>
            </div>
            <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
              <p className="leading-[normal]">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p152ea900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        搜尋案件編號或供應商...
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[14px] relative w-full">
        <Frame30 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <Container2 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            共 8 筆
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          全部 (8)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          已送出等待批准 (2)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          已逾期 (4)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          草稿未送出 (2)
        </p>
      </div>
    </div>
  );
}

function Sliders() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="sliders">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_195_1626)" id="sliders">
          <path d="M3.33398 17.5013V11.668" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33301 8.33333V2.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 17.5V10" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 6.66667V2.5" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.666 17.4987V13.332" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.667 10V2.5" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M0.833984 11.668H5.83398" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 6.66797H12.5" id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.166 13.332H19.166" id="Vector_9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_195_1626">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-end min-w-[110px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Sliders />
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          進階搜尋
        </p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] px-[24px] relative w-full">
          <Frame32 />
          <div className="flex flex-row items-center self-stretch">
            <L />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            專案名稱
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            2026 官網改版專案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            AI 智慧客服系統建置案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            集團人資系統雲端遷移案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            企業資安防護升級案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            ERP 系統維運委外案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            商業智慧平台建置案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            資料備份雲端服務採購案
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            網路監控系統委外案
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[211px]">
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            申請供應商
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            凱絡數位股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{`碩網資訊股份有限公司 `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <span className="leading-[23px]">叡揚資訊</span>
            <span className="leading-[23px]">{`股份有限公司 `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <span className="leading-[23px]">中華電信</span>
            <span className="leading-[23px]">{`股份有限公司 `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            精誠資訊股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            台灣微軟股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            中華系統整合股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            趨勢科技股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableHeader1 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">風險</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px pl-[15px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[#ee762f] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Container5() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <div className="bg-[#ffedd4] relative rounded-[4px] shrink-0" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
            <Text1 />
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              中風險
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="bg-[#ee762f] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Container6() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <div className="bg-[#ffedd4] relative rounded-[4px] shrink-0" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
            <Text2 />
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              中風險
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return <div className="bg-[#ff9d00] rounded-[33554400px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="bg-[#fff8b5] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text4 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          低風險
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="bg-[#ff9d00] rounded-[33554400px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="bg-[#fff8b5] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text6 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          低風險
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Text8() {
  return <div className="bg-[#ec5242] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text8 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          高風險
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Text10() {
  return <div className="bg-[#ec5242] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text10 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          高風險
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Text12() {
  return <div className="bg-[#ec5242] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text12 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          高風險
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="bg-[#ec5242] rounded-[3px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center px-[10px] py-[8px] relative">
        <Text14 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          高風險
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-[150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[560px] items-start relative shrink-0 w-[150px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap">狀態</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px pl-[15px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-1/2 right-[49.95%] top-1/4">
      <div className="absolute inset-[-8%_-0.56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.127 8.12">
          <g id="Group 1171276093">
            <path d="M0.56 0.56L0.56 5.46" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 7.56H0.567" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-1/4 contents left-1/2 right-[49.95%] top-1/4">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        草稿未送出
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <div className="relative shrink-0 size-[14px]">
        <div className="absolute aspect-[22/22] left-0 right-0 top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="var(--fill-0, #EE762F)" id="Ellipse 4303" r="7" />
          </svg>
        </div>
        <Group4 />
      </div>
      <Frame />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame9 />
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/4 left-1/2 right-[49.95%] top-1/4">
      <div className="absolute inset-[-8%_-0.56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.127 8.12">
          <g id="Group 1171276093">
            <path d="M0.56 0.56L0.56 5.46" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 7.56H0.567" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 contents left-1/2 right-[49.95%] top-1/4">
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        草稿未送出
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <div className="relative shrink-0 size-[14px]">
        <div className="absolute aspect-[22/22] left-0 right-0 top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="var(--fill-0, #EE762F)" id="Ellipse 4303" r="7" />
          </svg>
        </div>
        <Group5 />
      </div>
      <Frame1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已送出等待批准
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #419D48)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.9px] left-1/2 top-[calc(50%+0.35px)] w-[7px]" data-name="Vector">
            <div className="absolute inset-[-11.43%_-8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.12 6.02">
                <path d={svgPaths.p27e172ef} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
              </svg>
            </div>
          </div>
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已送出等待批准
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #419D48)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.9px] left-1/2 top-[calc(50%+0.35px)] w-[7px]" data-name="Vector">
            <div className="absolute inset-[-11.43%_-8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.12 6.02">
                <path d={svgPaths.p27e172ef} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
              </svg>
            </div>
          </div>
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame12 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[29.99%_26.69%_26.7%_30.01%]">
      <div className="absolute inset-[-9.24%_-9.23%_-9.23%_-9.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18211 7.18211">
          <g id="Group 1171276093">
            <path d="M6.62211 0.56L0.56 6.62211" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 0.56L6.62211 6.62211" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <Group2 />
        </div>
        <Frame4 />
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame13 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[29.99%_26.69%_26.7%_30.01%]">
      <div className="absolute inset-[-9.24%_-9.23%_-9.23%_-9.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18211 7.18211">
          <g id="Group 1171276093">
            <path d="M6.62211 0.56L0.56 6.62211" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 0.56L6.62211 6.62211" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <Group3 />
        </div>
        <Frame5 />
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[29.99%_26.69%_26.7%_30.01%]">
      <div className="absolute inset-[-9.24%_-9.23%_-9.23%_-9.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18211 7.18211">
          <g id="Group 1171276093">
            <path d="M6.62211 0.56L0.56 6.62211" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 0.56L6.62211 6.62211" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <Group6 />
        </div>
        <Frame6 />
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame15 />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[29.99%_26.69%_26.7%_30.01%]">
      <div className="absolute inset-[-9.24%_-9.23%_-9.23%_-9.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18211 7.18211">
          <g id="Group 1171276093">
            <path d="M6.62211 0.56L0.56 6.62211" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 0.56L6.62211 6.62211" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <Group7 />
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame16 />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[29.99%_26.69%_26.7%_30.01%]">
      <div className="absolute inset-[-9.24%_-9.23%_-9.23%_-9.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18211 7.18211">
          <g id="Group 1171276093">
            <path d="M6.62211 0.56L0.56 6.62211" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 0.56L6.62211 6.62211" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="relative shrink-0 size-[14px]">
          <div className="absolute aspect-[22/22] left-0 right-0 top-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
            </svg>
          </div>
          <Group8 />
        </div>
        <Frame8 />
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[20px] px-[15px] relative size-full">
        <Frame17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[560px] items-start relative shrink-0 w-[177px]" data-name="Container">
      <Container14 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            期限
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.04.15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.0 4.30</p>
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.03.31</p>
        </div>
      </div>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.05.15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.05.01</p>
        </div>
      </div>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.02.28</p>
        </div>
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.03.01</p>
        </div>
      </div>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">2026.02.15</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[129px]">
      <TableHeader2 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            操作
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">繼續填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">繼續填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[86px]" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">已批准</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[86px]" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">已批准</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">重新填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">重新填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">重新填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                查看
              </p>
            </div>
          </div>
          <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[23px]">重新填寫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[185px]">
      <TableHeader3 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="供應商進度總覽細節">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] px-[16px] relative w-full">
          <Frame19 />
          <Frame18 />
          <Container3 />
          <Container13 />
          <Frame21 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="開案前_資訊服務委外風險評估_Step1_有資料">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tab />
        <Container1 />
        <Frame31 />
        <Component />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] relative size-full" data-name="Container">
      <Step />
    </div>
  );
}