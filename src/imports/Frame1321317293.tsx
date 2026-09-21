import svgPaths from "./svg-4hl0dpa547";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TableCell7Props = {
  additionalClassNames?: string;
};

function TableCell7({ additionalClassNames = "" }: TableCell7Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <Text2 text="1 則" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute left-[249px] size-[8px] top-[calc(50%+0.5px)] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <circle cx="4" cy="4" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="4" />
      </svg>
    </div>
  );
}
type LTextProps = {
  text: string;
};

function LText({ text }: LTextProps) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-end pl-[12px] pr-0 py-[8px] relative w-full">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <Wrapper>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">{text}</p>
    </Wrapper>
  );
}
type TableCell1Props = {
  additionalClassNames?: string;
};

function TableCell1({ additionalClassNames = "" }: TableCell1Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <Text2 text="0 則" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <Wrapper>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{` 1 則`}</p>
    </Wrapper>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex items-center px-[24px] py-[16px] relative", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function PflLogo() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">SCCG</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="min-w-[110px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#939393] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          SBOM 弱點分析
        </p>
      </Wrapper1>
    </div>
  );
}

function Frame3() {
  return (
    <div className="min-w-[110px] relative rounded-[32px] shrink-0 w-full">
      <Wrapper1>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          情資追蹤
        </p>
      </Wrapper1>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#1a1a24] content-stretch flex flex-col items-center left-[0.27px] px-0 py-[4px] rounded-[8px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08)] top-[98px] w-[224px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        弱點偵測
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
      <div className="absolute bottom-[-31px] h-0 left-[calc(50%+0.27px)] translate-x-[-50%] w-[140px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 12">
            <path d="M0 6H140" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
      <Text text="風險評估" />
      <Text text="供應商管理" />
      <Frame5 />
      <Text text="管理報表" />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">新增供應商</p>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="bell">
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
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">99+</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame11 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-0 relative shrink-0 w-[1440px]">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[32px] text-black tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        情資追蹤
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-0 relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_61_2351)" id="Icon">
          <path d={svgPaths.pe688c80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a1f9240} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_61_2351">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        搜尋案件編號或供應商...
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-[#f6f6fa] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[14px] relative w-full">
        <Frame16 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pb-[20px] pt-[24px] px-[24px] relative w-full">
          <Container />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            共 15 筆
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text1 text="資安事件" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>{`負面消息 `}</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text1 text="時間" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="content-stretch flex items-center justify-end px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Header Cell">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap tracking-[-0.3125px]">操作</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <Text1 text="供應商" additionalClassNames="shrink-0 w-[240px]" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container2 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="碩網資訊股份有限公司" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell />
      <TableCell1 />
      <TableCellText text="2025/12/02 14:30" />
      <TableCell2 />
      <Helper />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <Text2 text="2 則" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container3 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Microsoft 台灣微軟" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell />
      <TableCell3 />
      <TableCellText text="2025/12/02 14:32" />
      <TableCell4 />
      <Helper />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Trend Micro 趨勢科技" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell />
      <TableCell1 />
      <TableCellText text="2025/12/01 14:28" />
      <TableCell5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Oracle 甲骨文" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell />
      <TableCell1 />
      <TableCellText text="2025/12/01 13:01" />
      <TableCell6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="碩網資訊股份有限公司" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/26 15:30" />
      <TableCell8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Oracle 甲骨文" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/26 15:22" />
      <TableCell9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Trend Micro 趨勢科技" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/22 15:28" />
      <TableCell10 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">{`Amazon Web Services `}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell11 />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/18 13:18" />
      <TableCell12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="Microsoft 台灣微軟" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/11 12:33" />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full">{`Amazon Web Services `}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell1 />
      <TableCell7 />
      <TableCellText text="2025/11/07 16:22" />
      <TableCell15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <LText text="查看" />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text2 text="碩網資訊股份有限公司" additionalClassNames="shrink-0 w-[240px]" />
      <TableCell1 />
      <TableCell7 />
      <TableCell1 />
      <TableCellText text="2025/11/26 15:30" />
      <TableCell16 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-px items-start px-[32px] py-0 relative w-full">
          <TableRow />
          <TableRow1 />
          <TableRow2 />
          <TableRow3 />
          <TableRow4 />
          <TableRow5 />
          <TableRow6 />
          <TableRow7 />
          <TableRow8 />
          <TableRow9 />
          <TableRow10 />
          <TableRow11 />
        </div>
      </div>
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-px relative shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <Container1 />
      <Table />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame14 />
      <div className="absolute bg-[#ececf3] h-[188px] right-[-227px] rounded-[10px] top-[157px] w-[6px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[921px] items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-[1440px]" data-name="Container">
      <Frame15 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col gap-[32px] items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Frame7 />
      <Container13 />
    </div>
  );
}

export default function Frame18() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame6 />
    </div>
  );
}