import svgPaths from "./svg-bynrthurf2";

function PflLogo() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-white">SCCG</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        風險評估
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商管理
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵查
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        管理報表
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        快速情資普查
      </p>
      <div className="-translate-x-1/2 absolute bottom-[-32px] h-0 left-[calc(50%-0.23px)] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
      <Frame5 />
      <Frame3 />
      <Frame6 />
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">新增供應商</p>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.37px)] size-[38px] top-1/2" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="bell">
          <path d={svgPaths.p360c70e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p29e38a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.42px]">99+</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1067.267px]">
      <Frame11 />
      <Frame19 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame12 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px]">首頁</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[-0.3125px]">快速情資普查</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="麵包屑">
      <Text />
      <Icon />
      <Text1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#1a1a24] w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] relative shrink-0 text-[22px] w-[500px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 700" }}>{`搜尋結果共  1  筆`}</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[18px] tracking-[0.54px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        再次搜尋
      </p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>{`供應商名稱 `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] items-start justify-center px-[15px] py-[20px] relative size-full">
          <p className="leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            碩網資訊股份有限公司
          </p>
          <p className="leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            統編: 82738156
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[199px]">
      <TableHeader />
      <TableCell />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            負責人
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[15px] py-[20px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            張*達
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader1 />
      <TableCell1 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            公司地址 / 電話
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[15px] py-[20px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>
              新北市新店區北新路1段86號20樓
            </span>
            <span className="leading-[23px]">{` `}</span>
          </p>
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]">02-29122100</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[279px]">
      <TableHeader2 />
      <TableCell2 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            近一年警示摘要
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>{`近一年新增 標案拒往10筆 、司法判決20筆  、違規裁罰10筆`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[405px]">
      <TableHeader3 />
      <TableCell3 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            操作
          </p>
        </div>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="heart">
          <path d={svgPaths.pc822c00} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Heart />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        追蹤
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
          <Frame9 />
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableHeader4 />
      <Frame20 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="搜尋結果共  1  筆">
      <Frame15 />
      <Frame18 />
      <Frame14 />
      <Frame17 />
      <Frame16 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="搜尋結果共  1  筆">
      <Component3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[1200px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame21 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
              <path d="M0 0.5H1152" id="Vector 1343" stroke="var(--stroke-0, #ECECF3)" />
            </svg>
          </div>
        </div>
        <Component2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center py-[24px] relative shrink-0 w-full" data-name="Container">
      <Frame22 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Container1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] w-full">
      <Container />
    </div>
  );
}

export default function Component4() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full" data-name="3.2 快速情資普查_結果">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame8 />
    </div>
  );
}