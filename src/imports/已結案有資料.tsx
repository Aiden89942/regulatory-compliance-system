import svgPaths from "./svg-xy7lh7252u";

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#747480] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">開案前</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">委託中</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffe600] flex-[1_0_0] min-h-px min-w-[110px] relative rounded-[4px] self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#2e2e38] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[normal]">已結案</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
            <p className="leading-[normal]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function AlertCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alert-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alert-circle">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f8100] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        結案供應商均需提供「權限管理」與「資料移除」證明文件，請窗口仔細確認
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[24px] py-[16px] relative w-full">
          <AlertCircle />
          <Frame4 />
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
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            核心基金帳務系統升級
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            辦公室門禁與監控維護
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            雲端備份與異地備援
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
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
            申請供應商
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`精誠資訊股份有限公司 `}</p>
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            中興保全科技 (SECOM)
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            台灣微軟 (Microsoft)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableHeader1 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
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
            合約到期日
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
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.31</p>
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
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.12.12</p>
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
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.12.18</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
      <TableHeader2 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
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
            備註
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            請於 2025.11.31 前提供廠商「權限管理」與「資料移除」證明文件
          </p>
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`請於 2025.12.12 前提供廠商「權限管理」與「資料移除」證明文件 `}</p>
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            請於 2025.12.18 前提供廠商「權限管理」與「資料移除」證明文件
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[564px]">
      <TableHeader3 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
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

function TableCell12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[55px] min-h-px min-w-px relative" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">廠商已完成</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
          <TableCell12 />
          <L />
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[55px] min-h-px min-w-px relative" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">廠商已完成</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
          <TableCell13 />
          <L1 />
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[55px] min-h-px min-w-px relative" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">廠商已完成</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
          <TableCell14 />
          <L2 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[146px]">
      <TableHeader4 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[1360px]" data-name="供應商進度總覽細節">
      <Frame11 />
      <Frame12 />
      <Frame10 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-name="已結案_有資料">
      <Tab />
      <Frame6 />
      <Component1 />
    </div>
  );
}