import svgPaths from "./svg-mqlh7rzdxa";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type DatePickerTextProps = {
  text: string;
};

function DatePickerText({ text }: DatePickerTextProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <Wrapper additionalClassNames="shrink-0">
      <g id="chevron-down">
        <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[24px] py-[16px] relative shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[80px]">
      <div className="absolute inset-[-0.75px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1.5">
          <path d="M0 0.75H80" id="Vector 1318" stroke="var(--stroke-0, #949494)" strokeDasharray="3 3" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper1>
        <circle cx="30" cy="30" id="Ellipse 4257" r="29.25" stroke="var(--stroke-0, #C4C4CD)" strokeWidth="1.5" />
      </Wrapper1>
      <p className="[grid-area:1_/_1] font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic relative text-[#747480] text-[22px] text-nowrap">{text}</p>
    </div>
  );
}
type LTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LText({ text, additionalClassNames = "" }: LTextProps) {
  return (
    <div className={clsx("bg-[#ffe600] content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
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

function Frame8() {
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
    <Wrapper>
      <g id="chevron-right">
        <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Frame10() {
  return (
    <div className="min-w-[110px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#939393] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Wrapper2>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          SBOM 弱點分析
        </p>
      </Wrapper2>
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-w-[110px] relative rounded-[32px] shrink-0 w-full">
      <Wrapper2>
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
          情資追蹤
        </p>
      </Wrapper2>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#1a1a24] content-stretch flex flex-col items-center left-[0.27px] px-0 py-[4px] rounded-[8px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08)] top-[98px] w-[224px]">
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
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
      <Frame25 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame8 />
      <Text text="風險評估" />
      <Text text="供應商管理" />
      <Frame11 />
      <Text text="管理報表" />
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <LText text="新增供應商" additionalClassNames="h-full" />
      </div>
      <Frame21 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame19 />
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame20 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="h-[19px] shrink-0 w-[99px]" />;
}

function L() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <p className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline" style={{ fontVariationSettings: "'wght' 400" }}>
        查看分析紀錄
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <L />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>{`SBOM 弱點分析 `}</p>
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper1>
        <circle cx="30" cy="30" fill="var(--fill-0, #FFE600)" id="Ellipse 4257" r="30" />
      </Wrapper1>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1.上傳 SBOM 檔案
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text1 text="2" />
      <Text2 text="2.檔案分析" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text1 text="3" />
      <Text2 text="2.檔案上傳並分析" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="第三個">
      <Helper />
      <Frame7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame5 />
      <Helper />
      <Frame6 />
      <Component1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.48px] w-[368px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <span className="leading-[23px] text-[16px]">{`供應商 / 專案名稱 `}</span>
            <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 700" }}>
              *請確認檔案與供應商 / 專案相符
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCellText text="檔案名稱" additionalClassNames="w-[360px]" />
      <HeaderCell />
      <HeaderCellText text="操作" additionalClassNames="justify-end w-[100px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[0.48px]">Intumit_ChatBot_v2.json</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[360px]" data-name="Table Cell">
      <Container />
    </div>
  );
}

function Form() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <DatePickerText text="Intumit 碩網資訊股份有限公司" />
    </div>
  );
}

function Form1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <DatePickerText text="2026 AI 智能客服系統" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative w-full">
          <Form />
          <Form1 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.5 5H17.5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p294c6f00} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18b0c00} id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33203 9.16666V14.1667" id="Vector_4" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M11.668 9.16666V14.1667" id="Vector_5" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function L1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="按鈕(L)">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-center pl-[8px] pr-0 py-[8px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <L1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Container1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px pb-[32px] pt-0 px-0 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <TableRow1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame26 />
      <Container2 />
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white h-[600px] relative shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame28 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        我已上傳 1 筆
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[723px]">
      <LText text="確認並開始分析" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame3 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Frame15 />
      <Frame23 />
      <OsintIntelligenceTable />
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-[1920px]">
      <Container3 />
    </div>
  );
}

export default function Frame27() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame12 />
    </div>
  );
}