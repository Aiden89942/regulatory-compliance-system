import svgPaths from "./svg-3y383l283a";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function HeaderCell5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
};

function HeaderCellText({ text }: HeaderCellTextProps) {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[120px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCell1Props = {
  text: string;
  text1: string;
};

function TableCell1({ text, text1 }: TableCell1Props) {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-start justify-center px-[24px] py-[16px] relative shrink-0 text-nowrap w-[300px]">
      <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <p className="leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text1}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[0.48px]">{text}</p>
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
      <Wrapper>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          SBOM 弱點分析
        </p>
      </Wrapper>
    </div>
  );
}

function Frame3() {
  return (
    <div className="min-w-[110px] relative rounded-[32px] shrink-0 w-full">
      <Wrapper>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          情資追蹤
        </p>
      </Wrapper>
    </div>
  );
}

function Frame15() {
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
      <Frame15 />
    </div>
  );
}

function Frame11() {
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame14() {
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
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame11 />
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame12 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return <div className="h-[19px] shrink-0 w-[99px]" />;
}

function L1() {
  return <div className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] rounded-[4px] shrink-0" data-name="按鈕(L)" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <L1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        分析紀錄
      </p>
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text1 text="分析結果" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text1 text="檔案名稱" additionalClassNames="shrink-0 w-[300px]" />
      <Text1 text="供應商/專案名稱" additionalClassNames="shrink-0 w-[300px]" />
      <Text1 text="狀態" additionalClassNames="shrink-0 w-[120px]" />
      <HeaderCell />
      <Text1 text="操作" additionalClassNames="shrink-0 w-[80px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[300px]" data-name="Table Cell">
      <ContainerText text="Intumit_ChatBot_v2.json" />
    </div>
  );
}

function HeaderCell1() {
  return <HeaderCell5>{`發現 2 高風險、3 中風險、3 低風險 `}</HeaderCell5>;
}

function HeaderCell2() {
  return (
    <div className="content-stretch flex items-center justify-end px-[24px] py-[16px] relative shrink-0 w-[80px]" data-name="Header Cell">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        查看
      </p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 text="Intumit 碩網資訊股份有限公司" text1="2026 AI 智能客服系統 v1.0" />
      <HeaderCellText text="上傳成功" />
      <HeaderCell1 />
      <HeaderCell2 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[300px]" data-name="Table Cell">
      <ContainerText text="Microsoft_Azure_Scan.xml" />
    </div>
  );
}

function HeaderCell3() {
  return <HeaderCell5>未發現風險</HeaderCell5>;
}

function HeaderCell4() {
  return (
    <div className="content-stretch flex items-center justify-end px-[24px] py-[16px] relative shrink-0 w-[80px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        查看
      </p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell2 />
      <TableCell1 text="Microsoft 台灣微軟股份有限公司" text1="Microsoft 365 導入專案" />
      <HeaderCellText text="上傳成功" />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Container() {
  return <div className="basis-0 grow min-h-px min-w-px rounded-[10px] shrink-0 w-full" data-name="Container" />;
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame16 />
      <Container />
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white h-[800px] relative shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Frame9 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-[1920px]">
      <Container1 />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame6 />
    </div>
  );
}