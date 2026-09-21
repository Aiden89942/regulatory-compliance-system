import svgPaths from "./svg-hicchdvvu1";
import clsx from "clsx";
type Button4Props = {
  additionalClassNames?: string;
};

function Button4({ children, additionalClassNames = "" }: React.PropsWithChildren<Button4Props>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[42.5px] backdrop-filter basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">{children}</div>
    </div>
  );
}
type Container26Props = {
  additionalClassNames?: string;
};

function Container26({ children, additionalClassNames = "" }: React.PropsWithChildren<Container26Props>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-[110px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">{children}</div>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper({ children, text, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative size-full">
        <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center text-nowrap", additionalClassNames)}>
          <p className="leading-[normal]">{text}</p>
        </div>
      </div>
    </Wrapper1>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center text-nowrap tracking-[0.42px]">{text}</p>
      </div>
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
    <Wrapper2>
      <Container23 text="某銀行客服系統連線異常，遭質疑遭 DDoS 攻擊" text1="報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。" />
    </Wrapper2>
  );
}
type Container23Props = {
  text: string;
  text1: string;
};

function Container23({ text, text1 }: Container23Props) {
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
      <TextText4 text="API Gateway" additionalClassNames="w-[87.031px]" />
      <TextText4 text="DDoS" additionalClassNames="w-[48.188px]" />
      <TextText5 text="服務中斷" additionalClassNames="w-[64px]" />
    </div>
  );
}
type TextText5Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText5({ text, additionalClassNames = "" }: TextText5Props) {
  return (
    <div className={clsx("bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TextText4Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText4({ text, additionalClassNames = "" }: TextText4Props) {
  return (
    <div className={clsx("bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap">{text}</p>
    </div>
  );
}
type Container22Props = {
  text: string;
  text1: string;
};

function Container22({ text, text1 }: Container22Props) {
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
type TextText3Props = {
  text: string;
};

function TextText3({ text }: TextText3Props) {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
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
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <Wrapper3>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper3>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper3>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper3>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper3>
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px]">{text}</p>
    </Wrapper3>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 700" }} className={clsx("flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-center text-nowrap", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商管理
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <Wrapper4>
      <g id="chevron-right">
        <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper4>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
      <Text4 text="風險評估" />
      <Frame3 />
      <Frame4 />
      <Text4 text="管理報表" />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text5 text="新增供應商" additionalClassNames="text-[18px] tracking-[0.54px]" />
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

function Frame15() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame12 />
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame14 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame11 />
        <div className="absolute bottom-0 h-0 left-[779px] w-[110px]">
          <div className="absolute inset-[-6px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
              <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <Icon1>
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon1>
  );
}

function Text() {
  return (
    <Wrapper3>
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[-0.3125px]">碩網資訊股份有限公司 </p>
    </Wrapper3>
  );
}

function Component1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="麵包屑">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[48px] py-0 relative size-full">
          <TextText text="首頁" />
          <Icon />
          <TextText text="供應商管理" />
          <Icon />
          <Text />
        </div>
      </div>
    </div>
  );
}

function PflLogo1() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        碩網資訊股份有限公司
      </p>
    </div>
  );
}

function Download() {
  return (
    <Wrapper4 additionalClassNames="shrink-0">
      <g id="download">
        <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 15V3" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper4>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Download />
      <Text5 text="匯出所有情資報告" additionalClassNames="text-[18px] tracking-[0.54px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] py-0 relative w-full">
          <PflLogo1 />
          <div className="flex flex-row items-center self-stretch">
            <L1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <Wrapper3>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]">28445678</p>
    </Wrapper3>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText1 text="統一編號：" />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText1 text="產業類別：" />
      <TextText2 text="資料與系統" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText1 text="負責人：" />
      <TextText2 text="邱*鈿" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        查看更多並編輯
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pl-0 pr-[24px] py-[24px] relative rounded-[8px] shrink-0" data-name="Container">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-10.98%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
            <path d={svgPaths.p3d70580} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <Container26 additionalClassNames="bg-[#ddffdf]">
      <Icon2 />
    </Container26>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商評估分數
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0 w-[16px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        分
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ddffdf] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          B+ 級
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[46.828px]">
      <Text2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#419d48] text-[32px] text-nowrap">85</p>
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame25 />
    </div>
  );
}

function Icon3() {
  return (
    <Icon1>
      <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon1>
  );
}

function Frame26() {
  return (
    <Wrapper5>
      <Icon3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#419d48] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        比去年進步 5 分
      </p>
    </Wrapper5>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[33px] items-center pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame26 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame22() {
  return (
    <Wrapper6>
      <Container5 />
      <Container8 />
    </Wrapper6>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
            <path d={svgPaths.p2d23b080} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
            <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <Container26 additionalClassNames="bg-[#ffedd4]">
      <Icon4 />
    </Container26>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商稽核風險缺總數量
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        項目
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[32px] text-nowrap">6</p>
      <Frame9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame28 />
    </div>
  );
}

function Icon5() {
  return (
    <Icon1>
      <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon1>
  );
}

function Frame32() {
  return (
    <Wrapper5>
      <Icon5 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ee762f] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        比去年進步少 3 項缺失
      </p>
    </Wrapper5>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[14px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Frame23() {
  return (
    <Wrapper6>
      <Container10 />
      <Container13 />
    </Wrapper6>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p1cc15700} id="Vector" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
            <path d="M1 8L4 11L14 1" id="Vector" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <Container26 additionalClassNames="bg-[#ffe1de]">
      <Icon6 />
    </Container26>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        缺失修補進度
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[0.48px]">%</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec5242] text-[32px] text-nowrap">70</p>
      <Frame10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame33 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#ec5242] h-[8px] rounded-[3.35544e+07px] shrink-0 w-[229px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-0 pr-[213.734px] py-0 relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container18 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        3 / 5 項已改善或核准
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="backdrop-blur-[42.5px] backdrop-filter basis-0 bg-white grow h-[188px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Container15 />
        <Container20 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Container3 />
      <Frame31 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pb-px pt-0 px-[48px] relative w-full">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Header />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1440px]">
      <Component1 />
      <Frame36 />
    </div>
  );
}

function Frame5() {
  return (
    <Wrapper1 additionalClassNames="bg-[#ffe600]">
      <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[24px] relative size-full">
        <Text5 text="情資追蹤" additionalClassNames="text-[20px] tracking-[0.6px]" />
      </div>
    </Wrapper1>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Wrapper text="專案概覽" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" />
      <Frame5 />
      <Wrapper text="SBOM 弱點分析結果" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" />
      <Wrapper text="歷年查核與評估紀錄" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif]" />
      <Wrapper text="數據分析" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[72px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Tab />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-0 text-[#1a1a24] text-[20px] text-nowrap top-0 tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          情資追蹤列表
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        最後更新：2025/12/02 14:30
      </p>
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

function Frame37() {
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

function Download1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2519a180} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 12.5V2.5" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function L2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-w-[110px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Download1 />
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          匯出報告
        </p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-full relative shrink-0 w-[513px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <L2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Frame37 />
      <div className="flex flex-row items-center self-stretch">
        <Frame38 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[2px] items-start pb-0 pt-[24px] px-[32px] relative w-full">
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text6 text="標題與摘要內容" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full" data-name="Table Row">
      <Text6 text="情資類別" additionalClassNames="shrink-0 w-[130px]" />
      <Text6 text="偵測時間" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <Text6 text="來源/頻道" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <HeaderCell />
      <Text6 text="操作" additionalClassNames="shrink-0 w-[120px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <TextText3 text="資安事件" />
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
      <Container22 text="iThome 電腦報" text1="科技媒體" />
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

function Text3() {
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
      <Text3 />
    </div>
  );
}

function Container27() {
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
      <Container27 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <TextText5 text="勞資爭議" />
      <TextText5 text="人員流動" />
      <TextText5 text="專案管理" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{`[請益]  碩網資訊專案管理與加班文化請益 `}</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。
      </p>
      <Frame35 />
    </div>
  );
}

function TableCell7() {
  return (
    <Wrapper2>
      <Container28 />
    </Wrapper2>
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
      <TextText3 text="資安事件" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container22 text="iThome 電腦報" text1="科技媒體" />
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

function Icon7() {
  return (
    <Icon1>
      <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon1>
  );
}

function Button1() {
  return (
    <Button4 additionalClassNames="bg-[#dbdbdb] opacity-50">
      <Icon7 />
    </Button4>
  );
}

function Button2() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center text-nowrap tracking-[0.42px]">1</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <Icon1>
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon1>
  );
}

function Button3() {
  return (
    <Button4 additionalClassNames="bg-white">
      <Icon8 />
    </Button4>
  );
}

function Container29() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button1 />
        <Button2 />
        <ButtonText1 text="2" />
        <ButtonText1 text="3" />
        <Button3 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        顯示 1-10 筆，共 30 筆
      </p>
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pt-[17px] px-[24px] relative size-full">
        <Container30 />
      </div>
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
      <Container31 />
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[12px] px-[32px] relative w-full">
        <Table />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container25 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Frame19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col gap-[40px] items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Frame39 />
      <Container32 />
    </div>
  );
}

export default function Frame34() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-start relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame6 />
    </div>
  );
}