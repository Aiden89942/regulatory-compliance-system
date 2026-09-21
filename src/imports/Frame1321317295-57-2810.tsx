import svgPaths from "./svg-p047koqwtm";
import clsx from "clsx";

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center relative">{children}</div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[301px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[17px] px-[17px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="leading-[23px]">{children}</p>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Icon2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <g id="Icon">{children}</g>
    </Wrapper3>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
          {children}
        </svg>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 194">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <ContainerText1 text="部門主管簽章" />
        <ContainerText2 text="[ 簽章區域 ]" />
        <ContainerText3 text="日期: __________________________________" />
      </div>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[35px] py-0 relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type PrimitiveLabelTextProps = {
  text: string;
};

function PrimitiveLabelText({ text }: PrimitiveLabelTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText3Props = {
  text: string;
};

function TableCellText3({ text }: TableCellText3Props) {
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

function TableCell19() {
  return (
    <Wrapper4>
      <Container1 text="某銀行客服系統連線異常，遭質疑遭 DDoS 攻擊" text1="報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。" />
    </Wrapper4>
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
      <Helper1 />
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
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
type TableCell17Props = {
  text: string;
  text1: string;
};

function TableCell17({ text, text1 }: TableCell17Props) {
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
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="h-[16px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type Group17VectorProps = {
  additionalClassNames?: string;
};

function Group17Vector({ additionalClassNames = "" }: Group17VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.pb08b100} fill="var(--fill-0, #3B82F6)" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ additionalClassNames = "" }: Vector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
        </svg>
      </div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ additionalClassNames = "" }: VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
        </svg>
      </div>
    </div>
  );
}
type Group1VectorProps = {
  additionalClassNames?: string;
};

function Group1Vector({ additionalClassNames = "" }: Group1VectorProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d="M0.5 0V194" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
    </Wrapper>
  );
}
type GroupVectorProps = {
  additionalClassNames?: string;
};

function GroupVector({ additionalClassNames = "" }: GroupVectorProps) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <path d="M0 0.5H393" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
    </Wrapper1>
  );
}

function Icon1() {
  return (
    <Wrapper5>
      <g clipPath="url(#clip0_56_898)" id="Icon">
        <path d={svgPaths.p2391ae80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M12.5 7.5L7.5 12.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M7.5 7.5L12.5 12.5" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_56_898">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper5>
  );
}

function Icon() {
  return (
    <Wrapper5>
      <g clipPath="url(#clip0_56_920)" id="Icon">
        <path d={svgPaths.p2391ae80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p10a73380} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_56_920">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper5>
  );
}
type TableCellText2Props = {
  text: string;
};

function TableCellText2({ text }: TableCellText2Props) {
  return (
    <div className="h-[70.5px] relative shrink-0 w-[96px]">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] left-[12px] text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper2>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] tracking-[0.45px] w-[392px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper2>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <div className="h-[70.5px] relative shrink-0 w-[64px]">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-[12px] not-italic text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center p-[12px] relative", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 tracking-[0.0703px]">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper3>
      <g clipPath="url(#clip0_57_111)" id="Icon">
        <path d={svgPaths.p3c7aa800} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <path d={svgPaths.p5c2680} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <path d={svgPaths.p10261440} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </g>
      <defs>
        <clipPath id="clip0_57_111">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper3>
  );
}

function L() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
        <Helper />
        <Wrapper6>下載 PDF</Wrapper6>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
        <Helper />
        <Wrapper6 additionalClassNames="text-center">列印</Wrapper6>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <L />
        <L1 />
        <X />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[0px] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            評估表預覽
          </p>
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f3f4f6] h-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-white w-full">
      <p className="leading-[normal] relative shrink-0 text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商：碩網資訊股份有限公司
      </p>
      <p className="leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        專案：2026 AI 智能客服系統 v1.0
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16.333px] relative shrink-0 w-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.3333">
        <g id="Icon">
          <path d={svgPaths.pc93b400} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2dfb4280} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        聯絡人：王*明
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <Icon2>
      <path d={svgPaths.p1bb53300} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1857cd00} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        信箱：wang.daming@supplier.com
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <Icon2>
      <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p2e667900} id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M2 6.66602H14" id="Vector_4" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon5 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        日期：2025/12/22
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[42px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險評估與情資審查報告
      </p>
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#1a1a24] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[32px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="relative shrink-0 size-[163px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 163">
        <g id="Group 1171276126">
          <circle cx="81.5002" cy="81.5" fill="var(--fill-0, white)" id="Ellipse 4305" r="57.05" />
          <path d={svgPaths.p1610d70} fill="var(--fill-0, #FFE600)" id="Ellipse 4306" />
          <circle cx="81.5002" cy="81.5" fill="var(--fill-0, #1A1A24)" id="Ellipse 4307" r="66.5" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-0 not-italic text-[48px] text-nowrap text-white top-px">80</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[-23.13px] top-[-29px] w-[62.25px]">
      <Text2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-center text-white tracking-[0.42px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        分
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-[68.88px] top-[64px] w-[62.25px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="absolute left-[10px] size-[200px] top-0" data-name="CircularProgress">
      <Container11 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[10px] top-0">
      <CircularProgress />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[28px] py-[16px] relative">
        <Group24 />
        <Group25 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">評估項目總數</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#008236] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">符合項目</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#008236] text-[24px] text-nowrap top-0 tracking-[0.0703px]">13</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <ContainerText text="15" />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-[#f0fdf4] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[16px] pr-[17px] py-[16px] relative w-full">
          <Frame12 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[0.5px] not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">適用項目數</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c10007] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">不符合項目數</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#c10007] text-[24px] text-nowrap top-0 tracking-[0.0703px]">2</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <ContainerText text="15" />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 bg-[#fef2f2] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative w-full">
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-px relative w-full">
          <Container16 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        一、資安評估自評結果
      </p>
      <Container22 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container23 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text text="評估問題" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        判定
      </p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Row">
      <Text text="項次" additionalClassNames="justify-center shrink-0 w-[64px]" />
      <HeaderCell />
      <Text text="供應商回覆" additionalClassNames="justify-center shrink-0 w-[96px]" />
      <HeaderCell1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q7" />
      <TableCellText1 text="若供應商會對國泰投信之資訊資產進行邏輯存取，供應商內部是否有適當之邏輯存取控制措施？" />
      <TableCellText2 text="是" />
      <TableCell />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q7-2" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發，供應商內部是否定義程式開發過程存取權限控制措施？" />
      <TableCellText2 text="是" />
      <TableCell1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon1 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q8" />
      <TableCellText1 text="供應商是否定期對其內部員工執行資訊安全教育訓練？" />
      <TableCellText2 text="否" />
      <TableCell2 />
    </div>
  );
}

function TableCell3() {
  return (
    <Wrapper2>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] tracking-[0.45px] w-[392px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商是否能在需要時，接受國泰投信對其提供之服務內容與範圍進行資訊安全查核，並提供相關佐證資料及報告？
      </p>
    </Wrapper2>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon1 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q9" />
      <TableCell3 />
      <TableCellText2 text="否" />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q10" />
      <TableCellText1 text="供應商是否已定義變更管理(Change Management)之安全控制措施？(如：系統或組態變更申請及覆核、權限控管、安全測試等流程)" />
      <TableCellText2 text="是" />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q11" />
      <TableCellText1 text="針對供應商所提供之資訊服務，供應商是否定義持續營運計畫？" />
      <TableCellText2 text="否" />
      <TableCell6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q12" />
      <TableCellText1 text="供應商是否有針對其所提供之資訊服務建立資通安全事件應變計畫？(如：紀錄與維護事件狀態、事件通報及處理流程等)" />
      <TableCellText2 text="是" />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q13" />
      <TableCellText1 text="如供應商在此委外服務中會提供國泰投信維運作業，供應商是否有制定維運作業安全控管相關準則/SOP？" />
      <TableCellText2 text="是" />
      <TableCell8 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q14" />
      <TableCellText1 text="供應商是否會對存有國泰投信資料之資訊資產進行保護？(如：設備、硬碟、文件等資產)" />
      <TableCellText2 text="是" />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q15" />
      <TableCellText1 text="若供應商有委託其他廠商或自行代管國泰投信資訊資產，供應商是否會對國泰投信資訊資產存放的實體環境進行保護？" />
      <TableCellText2 text="是" />
      <TableCell10 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q16" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發，供應商是否具備系統安全開發及測試計劃？(如：系統安全分類、系統執行環境、影響到系統安全和隱私的要求等)" />
      <TableCellText2 text="是" />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q17" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發、系統維護或系統整合，供應商在提供/交付資訊服務前是否會先對系統進行安全性檢測並提供檢測報告？" />
      <TableCellText2 text="是" />
      <TableCell12 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q18" />
      <TableCellText1 text="供應商是否會對提供資訊服務之人員進行安全管理？(如：指派負責人員前，是否有經過人員篩選)。" />
      <TableCellText2 text="是" />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q19" />
      <TableCellText1 text="供應商是否會為其所提供之資訊服務邊界進行保護？(如：於系統內外之通訊接口架設防火牆並限制存取)" />
      <TableCellText2 text="是" />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q20" />
      <TableCellText1 text="供應商是否會對其分包商/供應商進行風險評估與管理？" />
      <TableCellText2 text="是" />
      <TableCell15 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
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
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative w-full">
          <TableRow />
          <TableBody />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        二、資安評估問卷回覆一覽
      </p>
      <Container24 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container25 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-px relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        近30日情資趨勢
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[3.71%_3.69%_11.57%_5.76%]" data-name="Group">
      <div className="absolute inset-[88.43%_3.69%_11.57%_5.99%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392 1">
            <path d="M0 0.5H392" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <GroupVector additionalClassNames="inset-[64.85%_3.69%_35.15%_5.76%]" />
      <GroupVector additionalClassNames="inset-[44.32%_3.69%_55.68%_5.76%]" />
      <GroupVector additionalClassNames="inset-[23.8%_3.69%_76.2%_5.76%]" />
      <GroupVector additionalClassNames="inset-[3.71%_3.69%_96.29%_5.76%]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[3.71%_3.69%_11.57%_10.37%]" data-name="Group">
      <Group1Vector additionalClassNames="inset-[3.71%_68.2%_11.57%_31.8%]" />
      <Group1Vector additionalClassNames="inset-[3.71%_46.54%_11.57%_53.46%]" />
      <Group1Vector additionalClassNames="inset-[3.71%_25.12%_11.57%_74.88%]" />
      <Group1Vector additionalClassNames="inset-[3.71%_3.69%_11.57%_96.31%]" />
      <Group1Vector additionalClassNames="inset-[3.71%_89.63%_11.57%_10.37%]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.71%_3.69%_11.57%_5.76%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[87.99%_25.12%_2.92%_5.99%]" data-name="Group">
      <Vector additionalClassNames="inset-[87.99%_25.12%_9.39%_74.88%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[90.09%_85.02%_2.92%_5.99%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-center text-nowrap">11/26</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[87.99%_63.59%_2.92%_10.37%]" data-name="Group">
      <Vector additionalClassNames="inset-[87.99%_89.63%_9.39%_10.37%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[90.09%_63.59%_2.92%_27.42%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-center text-nowrap">12/02</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[87.99%_41.94%_2.92%_49.08%]" data-name="Group">
      <Vector additionalClassNames="inset-[87.99%_46.54%_9.39%_53.46%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[90.09%_41.94%_2.92%_49.08%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-center text-nowrap">12/08</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[87.99%_20.51%_2.92%_31.8%]" data-name="Group">
      <Vector additionalClassNames="inset-[87.99%_68.2%_9.39%_31.8%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[90.09%_20.51%_2.92%_70.51%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-center text-nowrap">12/14</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[87.99%_3%_2.92%_88.02%]" data-name="Group">
      <Vector additionalClassNames="inset-[87.99%_3.69%_9.39%_96.31%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[90.09%_3%_2.92%_88.02%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-center text-nowrap">12/22</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[87.99%_3%_2.92%_5.99%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[87.99%_3%_2.92%_5.76%]" data-name="Group">
      <Wrapper1 additionalClassNames="inset-[88.43%_3.69%_11.57%_5.76%]">
        <path d="M0 0.5H393" id="Vector" stroke="var(--stroke-0, #6B7280)" />
      </Wrapper1>
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[81.88%_97.24%_11.14%_0.69%]" data-name="Group">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[81.88%_97.24%_11.14%_0.69%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-nowrap text-right">0</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[61.35%_92.86%_31.66%_0.69%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[64.85%_92.86%_35.15%_5.76%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[61.35%_97.24%_31.66%_0.69%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-nowrap text-right">3</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[40.83%_92.86%_52.18%_0.69%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[44.32%_92.86%_55.68%_5.76%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[40.83%_97.24%_52.18%_0.69%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-nowrap text-right">6</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[20.31%_92.86%_72.71%_0.69%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[23.8%_92.86%_76.2%_5.76%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[20.31%_97.24%_72.71%_0.69%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-nowrap text-right">9</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0_92.86%_93.01%_0.46%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[3.49%_92.86%_96.51%_5.76%]" />
      <p className="absolute font-['EYInterstate:Regular',sans-serif] inset-[0_95.62%_93.01%_0.46%] leading-[normal] not-italic text-[#6b7280] text-[13px] text-nowrap text-right">12</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[0_92.86%_11.14%_0.46%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0_92.86%_11.14%_0.46%]" data-name="Group">
      <Wrapper additionalClassNames="inset-[3.71%_94.24%_11.57%_5.76%]">
        <path d="M0.5 0V194" id="Vector" stroke="var(--stroke-0, #6B7280)" />
      </Wrapper>
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[1.97%_3.46%_36.32%_9.45%]" data-name="Group">
      <Group17Vector additionalClassNames="inset-[60.19%_88.71%_36.32%_9.45%]" />
      <Group17Vector additionalClassNames="inset-[54.37%_80.18%_42.14%_17.97%]" />
      <Group17Vector additionalClassNames="inset-[60.19%_71.66%_36.32%_26.5%]" />
      <Group17Vector additionalClassNames="inset-[1.97%_63.13%_94.54%_35.02%]" />
      <Group17Vector additionalClassNames="inset-[48.54%_54.61%_47.96%_43.55%]" />
      <Group17Vector additionalClassNames="inset-[54.37%_46.08%_42.14%_52.07%]" />
      <Group17Vector additionalClassNames="inset-[60.19%_37.56%_36.32%_60.6%]" />
      <Group17Vector additionalClassNames="inset-[54.37%_29.03%_42.14%_69.12%]" />
      <Group17Vector additionalClassNames="inset-[60.19%_20.51%_36.32%_77.65%]" />
      <Group17Vector additionalClassNames="inset-[54.37%_11.98%_42.14%_86.18%]" />
      <Group17Vector additionalClassNames="inset-[60.19%_3.46%_36.32%_94.7%]" />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.97%_3.46%_36.32%_9.45%]" data-name="Group">
      <div className="absolute inset-[3.71%_4.61%_38.21%_10.37%]" data-name="Vector">
        <div className="absolute inset-[-0.75%_-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 369.951 135">
            <path d={svgPaths.p2e09e500} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group17 />
    </div>
  );
}

function Surface() {
  return (
    <div className="h-[229px] overflow-clip relative shrink-0 w-full" data-name="Surface">
      <Group2 />
      <Group9 />
      <Group16 />
      <Group18 />
    </div>
  );
}

function Paragraph() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container26() {
  return (
    <Container3>
      <Heading />
      <Surface />
      <Paragraph />
    </Container3>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] left-0 text-[#1e2939] text-[16px] text-nowrap top-px tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        正負面消息佔比
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[10%_20.91%_28.57%_20.91%]" data-name="Group">
      <div className="absolute inset-[-0.41%_-0.31%_-0.56%_-0.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 124.056">
          <g id="Group">
            <path d={svgPaths.p9200c00} fill="var(--fill-0, #419D48)" id="Vector" stroke="var(--stroke-1, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[64.12%_56.28%_12.46%_26%]" data-name="Group">
      <div className="absolute inset-[-1.48%_-1.32%_-1.37%_-1.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0811 48.168">
          <g id="Group">
            <path d={svgPaths.p245d9b00} fill="var(--fill-0, #EC5242)" id="Vector" stroke="var(--stroke-2, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[50.87%_20.93%_10%_40.91%]" data-name="Group">
      <div className="absolute inset-[-0.66%_-0.49%_-0.64%_-0.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.086 79.2722">
          <g id="Group">
            <path d={svgPaths.p1657dc00} fill="var(--fill-0, #747480)" id="Vector" stroke="var(--stroke-2, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[10%_20.91%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[10%_20.91%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[200px] left-[calc(50%+0.5px)] overflow-clip top-0 translate-x-[-50%] w-[275px]" data-name="Surface">
      <Group23 />
    </div>
  );
}

function PieChart() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="PieChart">
      <Surface1 />
    </div>
  );
}

function Container27() {
  return <div className="bg-[#419d48] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container28() {
  return (
    <Container4>
      <Container27 />
      <TextText text="正面 60%" />
    </Container4>
  );
}

function Container29() {
  return <div className="bg-[#ec5242] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container30() {
  return (
    <Container4>
      <Container29 />
      <TextText text="負面消息 10%" />
    </Container4>
  );
}

function Container31() {
  return <div className="bg-[#747480] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container32() {
  return (
    <Container4>
      <Container31 />
      <TextText text="資安事件 30%" />
    </Container4>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-0 relative size-full">
          <Container28 />
          <Container30 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <Container3>
      <Heading1 />
      <PieChart />
      <Container33 />
    </Container3>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container26 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        三、情資追蹤
      </p>
      <Frame16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container35 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text1 text="標題與摘要內容" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function TableRow16() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full" data-name="Table Row">
      <Text1 text="情資類別" additionalClassNames="shrink-0 w-[130px]" />
      <Text1 text="偵測時間" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <Text1 text="來源/頻道" additionalClassNames="justify-center shrink-0 w-[140px]" />
      <HeaderCell2 />
      <Text1 text="操作" additionalClassNames="shrink-0 w-[120px]" />
    </div>
  );
}

function TableCell16() {
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

function TableCell18() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container text="iThome 電腦報" text1="科技媒體" />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText3 text="查看" />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 text="2025/12/02" text1="14:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell18 />
      </div>
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        負面消息
      </p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] min-w-full not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]">PTT Soft_Job</p>
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        社群論壇
      </p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <TextText3 text="勞資爭議" />
      <TextText3 text="人員流動" />
      <TextText3 text="專案管理" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{`[請益]  碩網資訊專案管理與加班文化請益 `}</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。
      </p>
      <Frame2 />
    </div>
  );
}

function TableCell23() {
  return (
    <Wrapper4>
      <Container37 />
    </Wrapper4>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText3 text="查看" />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell17 text="2025/11/26" text1="15:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell22 />
      </div>
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#d2ebff] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#addaff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#155dfc] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        正面消息
      </p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container text="數位時代" text1="商業媒體" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <TextText3 text="AI 創新" additionalClassNames="w-[54.672px]" />
      <TextText2 text="NLP" additionalClassNames="w-[39.344px]" />
      <TextText3 text="獲獎" additionalClassNames="w-[40px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        Intumit 榮獲 2024 最佳 AI 技術創新獎
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        評審團肯定其在自然語言處理 (NLP) 領域的突破，特別是在中文語意理解與多輪對話管理方面的技術成就。該獎項由台灣人工智慧協會頒發，彰顯企業技術實力與市場領先地位。
      </p>
      <Frame3 />
    </div>
  );
}

function TableCell27() {
  return (
    <Wrapper4>
      <Container38 />
    </Wrapper4>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText3 text="查看" />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell25 />
      <TableCell17 text="2025/11/25" text1="14:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell26 />
      </div>
      <TableCell27 />
      <TableCell28 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <TextText1 text="資安事件" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container text="iThome 電腦報" text1="科技媒體" />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCellText3 text="查看" />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell29 />
      <TableCell17 text="2025/12/02" text1="14:30" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell30 />
      </div>
      <TableCell19 />
      <TableCell31 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow18 />
      <TableRow19 />
      <TableRow18 />
      <TableRow18 />
      <TableRow19 />
      <TableRow18 />
      <TableRow20 />
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabelText text="部室主管簽章" />
      <Container2 />
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabelText text="單位內供應商業務負責人簽章" />
      <Container2 />
    </div>
  );
}

function RiskAssessmentWorkflow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center text-nowrap w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本文件為機密文件，未經授權不得複製或外流
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px]">Document ID: RA-2026-AI-CS-001 | Version: 1.0</p>
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Frame5 />
        <Frame6 />
        <Frame7 />
        <Table />
        <RiskAssessmentWorkflow />
        <Frame4 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[1024px]" data-name="資訊服務委外風險評估">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame1 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ececf3] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[24px] relative">
        <Component />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[1080px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Frame />
      <div className="absolute bg-[#c4c4cd] h-[188px] right-[8px] rounded-[10px] top-[100px] w-[6px]" />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center px-0 py-[140px] relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <div className="absolute bg-[rgba(0,0,0,0.75)] h-[4725px] left-1/2 top-0 translate-x-[-50%] w-[1920px]" />
      <Container41 />
    </div>
  );
}