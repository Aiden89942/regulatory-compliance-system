import svgPaths from "./svg-ul18300s8x";
import clsx from "clsx";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[1024px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-[16px] relative w-full">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <Wrapper>
      <Container1 text="某銀行客服系統連線異常，遭質疑遭 DDoS 攻擊" text1="報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。" />
    </Wrapper>
  );
}
type Container1Props = {
  text: string;
  text1: string;
};

function Container1({ text, text1 }: Container1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text1}
      </p>
      <Helper />
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <TextText2 text="API Gateway" additionalClassNames="w-[87.031px]" />
      <TextText2 text="DDoS" additionalClassNames="w-[48.188px]" />
      <TextText3 text="服務中斷" additionalClassNames="w-[64px]" />
    </div>
  );
}
type TextText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText3({ text, additionalClassNames = "" }: TextText3Props) {
  return (
    <div className={clsx("bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <div className={clsx("bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap">{text}</p>
    </div>
  );
}
type ContainerProps = {
  text: string;
  text1: string;
};

function Container({ text, text1 }: ContainerProps) {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full">
      <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <p className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text1}
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
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("content-stretch flex items-center px-[24px] py-[16px] relative", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type ChevronDownProps = {
  additionalClassNames?: string;
};

function ChevronDown({ additionalClassNames = "" }: ChevronDownProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <g id="chevron-down">
        <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper1>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#747480] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">{text}</p>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 700" }} className={clsx("flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
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

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商管理
      </p>
      <div className="absolute bottom-[-31px] h-0 left-[12.27px] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <Wrapper1 additionalClassNames="relative size-[24px]">
      <g id="chevron-right">
        <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper1>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame9 />
      <Text3 text="風險評估" />
      <Frame10 />
      <Frame11 />
      <Text3 text="管理報表" />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text4 text="新增供應商" additionalClassNames="text-[#1a1a24]" />
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame17 />
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame18 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame16 />
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

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">新增供應商</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="麵包屑">
      <TextText text="首頁" additionalClassNames="w-[32px]" />
      <Icon />
      <TextText text="供應商管理" additionalClassNames="w-[80px]" />
      <Icon />
      <Text />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper2>
        <circle cx="30" cy="30" fill="var(--fill-0, #2E2E38)" id="Ellipse 4257" r="30" />
      </Wrapper2>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        填寫資訊服務委外風險評估
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper2>
        <circle cx="30" cy="30" fill="var(--fill-0, #FFE600)" id="Ellipse 4257" r="30" />
      </Wrapper2>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        發送資訊供應商風險評估表與情資追蹤
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group1 />
      <Frame3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper2>
        <circle cx="30" cy="30" id="Ellipse 4257" r="29.25" stroke="var(--stroke-0, #C4C4CD)" strokeWidth="1.5" />
      </Wrapper2>
      <p className="[grid-area:1_/_1] font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic relative text-[#747480] text-[22px] text-nowrap">3</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商資料檢核與歸檔
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group2 />
      <Frame4 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="第三個">
      <div className="h-0 relative shrink-0 w-[80px]">
        <div className="absolute inset-[-0.75px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1.5">
            <path d="M0 0.75H80" id="Vector 1319" stroke="var(--stroke-0, #949494)" strokeDasharray="3 3" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-[80px]">
        <div className="absolute inset-[-1.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 3">
            <path d="M0 1.5H80" id="Vector 1318" stroke="var(--stroke-0, #1A1A24)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <Component2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
      <Frame5 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[33px]">
          <span className="leading-[normal]">發送資訊供應商風險評估表</span>
        </li>
      </ol>
      <ChevronDown additionalClassNames="shrink-0" />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#ddffdf] content-stretch flex items-center justify-center px-[12px] py-[7px] right-[56px] rounded-[4px] top-1/2 translate-y-[-50%]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#adffb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#419d48] text-[16px] text-nowrap tracking-[-0.3125px]">已發送等待供應商回覆</p>
    </div>
  );
}

function Frame27() {
  return (
    <Wrapper3>
      <Frame25 />
      <Text1 />
    </Wrapper3>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[204px]" style={{ fontVariationSettings: "'wght' 400" }}>
        最後更新：2025/12/02 14:30
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[22px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[33px]">
          <span className="leading-[normal]">情資追蹤</span>
        </li>
      </ol>
      <Frame29 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        全部 (30)
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Button />
        <ButtonText text="資安事件 (10)" />
        <ButtonText text="負面消息 (2)" />
      </div>
    </div>
  );
}

function Frame23() {
  return <div className="h-full shrink-0 w-[513px]" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Frame22 />
      <div className="flex flex-row items-center self-stretch">
        <Frame23 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text5 text="標題與摘要內容" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full" data-name="Table Row">
      <Text5 text="情資類別" additionalClassNames="shrink-0 w-[130px]" />
      <Text5 text="偵測時間" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <Text5 text="來源/頻道" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <HeaderCell />
      <Text5 text="操作" additionalClassNames="shrink-0 w-[120px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <TextText1 text="資安事件" />
      <div className="absolute left-[9px] size-[8px] top-[calc(50%+0.25px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="4" />
        </svg>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container text="iThome 電腦報" text1="科技媒體" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText text="查看" />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 text="2025/12/02" text1="14:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell2 />
      </div>
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        負面消息
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] min-w-full not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]">PTT Soft_Job</p>
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        社群論壇
      </p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <TextText3 text="勞資爭議" />
      <TextText3 text="人員流動" />
      <TextText3 text="專案管理" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{`[請益]  碩網資訊專案管理與加班文化請益 `}</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。
      </p>
      <Frame21 />
    </div>
  );
}

function TableCell7() {
  return (
    <Wrapper>
      <Container4 />
    </Wrapper>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText text="查看" />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell5 />
      <TableCell1 text="2025/11/26" text1="15:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell6 />
      </div>
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <TextText1 text="資安事件" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container text="iThome 電腦報" text1="科技媒體" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText text="查看" />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell9 />
      <TableCell1 text="2025/12/02" text1="14:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell10 />
      </div>
      <TableCell3 />
      <TableCell11 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow />
      <TableRow1 />
      {[...Array(5).keys()].map((_, i) => (
        <TableRow2 key={i} />
      ))}
      {[...Array(4).keys()].map((_, i) => (
        <TableRow3 key={i} />
      ))}
    </div>
  );
}

function Frame26() {
  return (
    <Wrapper3>
      <Frame28 />
      <Container2 />
      <Table />
    </Wrapper3>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full" data-name="Container">
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Frame14 />
      <Container5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Container6 />
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text4 text="確認立即匯出" additionalClassNames="text-[#9b9ba1]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[1024px]">
      <div className="flex flex-row items-center self-stretch">
        <L1 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

export default function Frame30() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame12 />
      <Frame24 />
    </div>
  );
}