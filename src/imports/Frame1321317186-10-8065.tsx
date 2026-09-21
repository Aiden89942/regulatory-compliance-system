import svgPaths from "./svg-l06te9ttb2";
import clsx from "clsx";

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[24px]">
      {children}
    </div>
  );
}
type Wrapper8Props = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper8({ children, text, additionalClassNames = "" }: React.PropsWithChildren<Wrapper8Props>) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-0 py-[8px] relative w-full">
        <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#747480] h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}
type TableCell19Props = {
  additionalClassNames?: string;
};

function TableCell19({ children, additionalClassNames = "" }: React.PropsWithChildren<TableCell19Props>) {
  return (
    <div className={clsx("h-[53px] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 1171276096">{children}</g>
      </svg>
    </div>
  );
}
type TableCell18Props = {
  additionalClassNames?: string;
};

function TableCell18({ children, additionalClassNames = "" }: React.PropsWithChildren<TableCell18Props>) {
  return (
    <Wrapper6 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex items-center p-[15px] relative w-full">{children}</div>
    </Wrapper6>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <Wrapper7 additionalClassNames={additionalClassNames}>
      <g id="chevron-right">{children}</g>
    </Wrapper7>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[250px]">
      <div className="absolute inset-[0_-1.67%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254.167 250">
          <g id="Group 1171276077">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {children}
        </p>
      </div>
    </Wrapper6>
  );
}
type Text15Props = {
  text: string;
};

function Text15({ text }: Text15Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text14Props = {
  text: string;
  additionalClassNames?: string;
};

function Text14({ text, additionalClassNames = "" }: Text14Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderText2Props = {
  text: string;
};

function TableHeaderText2({ text }: TableHeaderText2Props) {
  return (
    <Wrapper6 additionalClassNames="bg-[#747480] h-[48px]">
      <Text14 text={text} />
    </Wrapper6>
  );
}
type TableHeaderText1Props = {
  text: string;
};

function TableHeaderText1({ text }: TableHeaderText1Props) {
  return (
    <Wrapper6 additionalClassNames="bg-[#747480] h-[48px]">
      <div className="content-stretch flex items-center p-[15px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </Wrapper6>
  );
}

function Text13({ text, additionalClassNames = "" }: Text13Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text12Props = {
  text: string;
  additionalClassNames?: string;
};

function Text12({ text, additionalClassNames = "" }: Text12Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.48px]">{text}</p>
    </div>
  );
}
type TableCellText2Props = {
  text: string;
};

function TableCellText2({ text }: TableCellText2Props) {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text={text} additionalClassNames="px-[15px] py-[20px]" />
    </Wrapper6>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper>
      {text}
      <span>{`股份有限公司 `}</span>
    </Wrapper>
  );
}
type Text11Props = {
  text: string;
  additionalClassNames?: string;
};

function Text11({ text, additionalClassNames = "" }: Text11Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text={text} additionalClassNames="px-[15px] py-[20px]" />
    </Wrapper6>
  );
}
type Text10Props = {
  text: string;
  additionalClassNames?: string;
};

function Text10({ text, additionalClassNames = "" }: Text10Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#c4c4cd] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderTextProps = {
  text: string;
};

function TableHeaderText({ text }: TableHeaderTextProps) {
  return (
    <Wrapper6 additionalClassNames="bg-[#747480] h-[48px]">
      <Text10 text={text} />
    </Wrapper6>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
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
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type Text9Props = {
  text: string;
  additionalClassNames?: string;
};

function Text9({ text, additionalClassNames = "" }: Text9Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}
type Helper4Props = {
  text: string;
  text1: string;
};

function Helper4({ text, text1 }: Helper4Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center text-nowrap">
          <Text9 text={text} />
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal] text-nowrap">{text1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="basis-0 bg-[#ffe600] grow min-h-px min-w-[110px] relative self-stretch shrink-0">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center text-nowrap">
          <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[normal] text-nowrap">{text}</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
            <p className="leading-[normal] text-nowrap">{text1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0 w-[106.886px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.6px]">{text}</p>
      <ChevronRight1 />
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.18)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[636px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[26px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 1">
            <line id="Line 5" stroke="var(--stroke-0, #F2F2F2)" strokeOpacity="0.03" x2="602" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#ee762f] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#55a3e2] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0 w-[106.886px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.6px]">{text}</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text1}
      </p>
      <ChevronRight1 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <Wrapper2 additionalClassNames="relative shrink-0 size-[24px]">
      <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper2>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#419d48] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
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
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-white tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type ChevronRightProps = {
  additionalClassNames?: string;
};

function ChevronRight({ additionalClassNames = "" }: ChevronRightProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper2>
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

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        首頁
      </p>
      <div className="absolute bottom-[-32px] h-0 left-[0.27px] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <Wrapper9>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </Wrapper9>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame24 />
      <Text text="風險評估" />
      <Text text="供應商管理" />
      <Frame27 />
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

function Frame1() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">99+</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame55 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame53 />
      <Frame74 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame54 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame52 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <Wrapper7 additionalClassNames="relative size-[24px]">
      <g id="Frame">
        <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper7>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-nowrap text-white tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>{`Ace 您今天有 6 件任務待處理 `}</p>
      <Wrapper9>
        <div className="flex-none rotate-[270deg]">
          <Frame />
        </div>
      </Wrapper9>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[29.798px] relative shrink-0 w-[127px]" data-name="Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 29.798">
        <g id="Toggle">
          <g id="Group 4">
            <rect fill="var(--fill-0, #ECECF3)" height="19.6667" id="Rectangle 6" rx="9.83333" transform="matrix(1 0 0 -1 39.9798 25.0303)" width="56.0202" />
            <circle cx="14.899" cy="14.899" fill="var(--fill-0, #BABABA)" id="Ellipse 1" r="14.899" transform="matrix(1 0 0 -1 68 29.798)" />
          </g>
          <path d={svgPaths.p2ab84200} fill="var(--fill-0, #747480)" id="Vector" />
          <path d={svgPaths.p2322bdc0} fill="var(--fill-0, #FFE600)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame25 />
      <Toggle />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[20.45%_30.08%_22.73%_29.55%]">
      <div className="absolute inset-[-4%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7632 27">
          <g id="Group 1171276102">
            <path d="M4.70343 6.55555H10.6245" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1f771cf0} id="Vector_2" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M4.70312 10.5526H7.9926" id="Vector_3" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p25fe3f80} id="Vector_4" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p38d3a500} id="Vector_5" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1a1a24] relative rounded-[60px] shrink-0 size-[44px]" data-name="icon">
      <Group13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        筆
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Frame29 />
      <ChevronRight additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[32px] text-nowrap">1</p>
      <Frame123 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        合約即將到期
      </p>
      <Frame47 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon />
      <Frame100 />
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ffe600] gap-[10px] items-center justify-center left-[25px] px-[12px] py-[8px] rounded-[4px] to-[#41fcea] top-[-22px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.47)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        距離截止剩 20 天
      </p>
      <div className="absolute flex h-[14px] items-center justify-center left-[13px] top-[37px] w-[20px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[14px] relative w-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <g id="Star 1">
                <path d={svgPaths.p24245400} fill="var(--fill-0, #F0E813)" />
                <path d={svgPaths.p2ef1ad80} stroke="var(--stroke-0, white)" strokeOpacity="0.47" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[25px] top-[-22px]">
      <Tag />
      <div className="absolute bg-[#f0e813] h-[8px] left-[33px] top-[11px] w-[26px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame119 />
      <Group15 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[22px] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-4.55%_-9.09%_-9.09%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <g id="Group 1171276092">
            <path d={svgPaths.pff145b0} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Group 1171276100">
              <circle cx="17.9231" cy="17.9231" fill="var(--fill-0, #FFE600)" id="Ellipse 4302" r="6.07692" stroke="var(--stroke-0, #1A1A24)" strokeWidth="2" />
              <path d={svgPaths.p213b8980} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d="M6.74087 2.95993H15.5703" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3d467d00} id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p133ef600} id="Vector_5" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#ffe600] relative rounded-[60px] shrink-0 size-[44px]" data-name="icon">
      <Group6 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Text1 text="筆" />
      <ChevronRight additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">1</p>
      <Frame122 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        合約即將到期
      </p>
      <Frame48 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon1 />
      <Frame101 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame120 />
      <div className="absolute bg-[#ee762f] right-[10px] rounded-[8px] size-[14px] top-[10px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[31.82%] right-[36.36%] top-1/4" data-name="Group">
      <div className="absolute inset-[-4.55%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.001 24">
          <g id="Group">
            <path d="M9.11422 3.99999H7.30711" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p16b22ae4} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute h-[12px] left-[19.74px] top-[16.74px] w-[14.001px]">
      <div className="absolute inset-[-8.33%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0191 14">
          <g id="Group 1171276098">
            <path d={svgPaths.p1606000} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Frame 1321316994">
              <path d="M8.27028 4.26083V8.26083" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2ecc4300} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[38.04%_23.32%_34.68%_44.86%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(50%+1.87px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#ffe600] relative rounded-[60px] shrink-0 size-[44px]" data-name="icon">
      <Group9 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Text1 text="筆" />
      <ChevronRight additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">2</p>
      <Frame124 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        情資追蹤
      </p>
      <Frame49 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon2 />
      <Frame102 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame121 />
      <div className="absolute bg-[#ee762f] right-[10px] rounded-[8px] size-[14px] top-[10px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[27.73%] left-1/4 right-1/4 top-[27.27%]">
      <div className="absolute inset-[-5.05%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21.8">
          <g id="Group 1171276097">
            <path d={svgPaths.p26667780} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12 9.80004V16.4" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8.70005 12L12.0001 9.79999" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M15.2999 12L11.9999 9.79999" id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#ffe600] relative rounded-[60px] shrink-0 size-[44px]" data-name="icon">
      <Group10 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Text1 text="筆" />
      <ChevronRight additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">1</p>
      <Frame125 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        待辦事項
      </p>
      <Frame50 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon3 />
      <Frame103 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame126 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[27.27%_22.73%_28.28%_27.27%]">
      <div className="absolute inset-[-5.11%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21.5556">
          <g id="Group 1171276095">
            <path d={svgPaths.p2dfe8700} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p15fc2100} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p50fff80} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Group 1171276099">
              <path d={svgPaths.p2e97e680} fill="var(--fill-0, #FFE600)" id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1ea9f400} id="Vector_5" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2ba23e80} id="Vector_6" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d="M6.52666 2.27534H15.0291" id="Vector_7" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#ffe600] relative rounded-[60px] shrink-0 size-[44px]" data-name="icon">
      <Group8 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Text1 text="筆" />
      <ChevronRight additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">1</p>
      <Frame127 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-white w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        逾期事項
      </p>
      <Frame51 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon4 />
      <Frame104 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame128 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-0 pt-[20px] px-0 relative shrink-0 w-[1360px]">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1360px]">
      <Frame26 />
      <Frame72 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-nowrap text-white tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>{`供應商風險分析 `}</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Text2 text="本月供應商風險分佈" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Group3() {
  return (
    <Wrapper1>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #55A3E2)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #419D48)" id="Ellipse 4277" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-3-outside-1_10_6223" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #EE762F)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-3-outside-1_10_6223)" stroke="var(--stroke-0, #EE762F)" strokeOpacity="0.31" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill="var(--fill-0, #272731)" id="Ellipse 4300" r="72.1364" />
    </Wrapper1>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group3 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame30 />
      <Text3 text="共 192 家" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text4 text="高風險" />
      <Helper text="28" text1="家" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text5 text="中風險" />
      <Helper text="60" text1="家" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text6 text="低風險" />
      <Helper text="104" text1="家" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame44 />
      <Frame77 />
      <Frame3 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] shrink-0 w-[298px]">
      <Frame75 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Text2 text="本月弱點偵測狀態分佈" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame45 />
    </div>
  );
}

function Group5() {
  return (
    <Wrapper1>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #55A3E2)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #419D48)" id="Ellipse 4277" />
      <path d={svgPaths.p1c0f2080} fill="var(--fill-0, #EC5242)" id="Ellipse 4301" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-4-outside-1_10_6216" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #EE762F)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-4-outside-1_10_6216)" stroke="var(--stroke-0, #EE762F)" strokeOpacity="0.31" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill="var(--fill-0, #272731)" id="Ellipse 4300" r="72.1364" />
    </Wrapper1>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group5 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame31 />
      <Text3 text="共 204 筆" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text4 text="已逾期" />
      <Helper text="15" text1="筆" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text5 text="尚未處理" />
      <Helper text="95" text1="筆" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text6 text="處理中" />
      <Helper text="74" text1="筆" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#ec5242] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已處理
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Helper text="20" text1="筆" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame73 />
      <Frame78 />
      <Frame5 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] shrink-0 w-[298px]">
      <Frame76 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Text2 text="歷年採購類別分析" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-1/4 left-[35%] right-[40%] top-1/4">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
          <g id="Group 1171275997">
            <path d={svgPaths.p35ac1680} id="Vector" stroke="var(--stroke-0, #2E2E38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="overflow-clip relative size-[20px]" data-name="箭頭">
      <Group2 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[33px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#2e2e38] text-[16px] text-center text-nowrap tracking-[0.48px]">2025</p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame43 />
      <Frame58 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame83 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1月
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[11px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[6px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[111px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[19px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame98 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        2月
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[4px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[34px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[25px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame99 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3月
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[10px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[52px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame105 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        4月
      </p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[64px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[32px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[26px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame108 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        5月
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[31px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[6px] rounded-[4px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[66px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame109 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        6月
      </p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[15px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[116px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame110 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        7月
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[5px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[51px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame111 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        8月
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[30px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[12px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame112 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        9月
      </p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[18px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[29px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[8px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame113 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        10月
      </p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ee762f] h-[90px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[13px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ec5242] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#55a3e2] h-[38px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#419d48] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame114 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        11月
      </p>
    </div>
  );
}

function Frame115() {
  return <div className="h-[157px] shrink-0 w-[20px]" />;
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0">
      <Frame115 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        12月
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute bottom-[-19px] content-stretch flex items-end justify-between left-[45px] w-[570px]">
      <Frame84 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame93 />
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="absolute content-stretch flex flex-col h-[342px] items-start justify-between left-0 top-0">
      <Text7 text="100" />
      <Text7 text="80" />
      <Text7 text="60" />
      <Text7 text="40" />
      <Text7 text="20" />
      <Text7 text="0" />
      <Frame116 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="h-[364px] relative shrink-0 w-[636px]">
      <div className="absolute bg-[#ffe600] bottom-[-1px] h-[23px] right-[64px] rounded-[20px] w-[43px]" />
      <Frame117 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-[#419d48]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        整體委外
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[208px]">
      <Frame6 />
      <Text8 text="16" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper2 additionalClassNames="bg-[#55a3e2]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        備份與備援服務
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[208px]">
      <Frame7 />
      <Text8 text="14" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-[#ec5242]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        網路與資安處理
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[208px]">
      <Frame8 />
      <Text8 text="7" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-center flex flex-wrap gap-[14px] items-center relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-[#ffe600]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        人力資源
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[208px]">
      <Frame10 />
      <Text8 text="5" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper2 additionalClassNames="bg-[#ee762f]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        資料與系統維護
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[208px]">
      <Frame11 />
      <Text8 text="22" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-center flex flex-wrap gap-[14px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col gap-[16px] h-[527.478px] items-start ml-0 mt-0 overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] w-[700px]">
      <Frame46 />
      <Frame96 />
      <Frame9 />
      <Frame97 />
    </div>
  );
}

function Group4() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative self-stretch shrink-0">
      <Frame35 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame36 />
      <Group4 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame79 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1360px]">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-nowrap text-white tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <span style={{ fontVariationSettings: "'wght' 700" }}>供應商進度總</span>覽<span style={{ fontVariationSettings: "'wght' 700" }}> </span>{" "}
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap">
          <Text9 text="已結案" additionalClassNames="text-[#707070]" />
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#747480] text-[22px]">
            <p className="leading-[normal] text-nowrap">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Helper3 text="開案前" text1="6" />
      <Helper4 text="委託中" text1="6" />
      <Frame28 />
    </div>
  );
}

function Frame133() {
  return (
    <Wrapper3>
      <ButtonText text="資訊服務委外風險評估 (3)" />
      <ButtonText1 text="填寫供應商風險評估與情資追蹤" />
      <ButtonText1 text="供應商資料檢核與歸檔 (1)" />
    </Wrapper3>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeaderText text="專案名稱" />
      <TableCellText text="2026年度官網視覺化改版專案" />
      <TableCellText text="2026 AI 智能客服系統 v1.0" />
      <TableCellText text="集團人資系統上雲端服務採購案" />
      <TableCellText text="企業資安防護系統升級案" />
      <TableCellText text="商業智慧 (BI) 平台建置案" />
    </div>
  );
}

function TableCell() {
  return <Wrapper>{`奧美廣告股份有限公司 `}</Wrapper>;
}

function TableCell1() {
  return <Wrapper>{`碩網資訊股份有限公司 `}</Wrapper>;
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <TableHeaderText text="申請供應商" />
      <TableCell />
      <TableCell1 />
      <TableCellText1 text="叡揚資訊" />
      <TableCellText1 text="中華電信" />
      <TableCellText2 text="IBM" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[484px]">
      <TableHeaderText text="期限" />
      <TableCellText2 text="2025.11.01" />
      <TableCellText2 text="2025.11.10" />
      <TableCellText2 text="2025.11.12" />
      <TableCellText2 text="2025.11.15" />
      <TableCellText2 text="2025.11.22" />
    </div>
  );
}

function TableHeader() {
  return (
    <Wrapper5>
      <Text10 text="操作" additionalClassNames="justify-center" />
    </Wrapper5>
  );
}

function L1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text13 text="編輯" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-white" />
    </div>
  );
}

function L2() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">已批准</p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <L1 />
          <L2 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader />
      {[...Array(5).keys()].map((_, i) => (
        <Frame130 key={i} />
      ))}
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <Frame62 />
          <Frame61 />
          <Frame64 />
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[1360px]" data-name="供應商進度總覽">
      <Tab />
      <Frame133 />
      <Frame66 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame82 />
      <Component2 />
    </div>
  );
}

function Plus() {
  return (
    <Wrapper7 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="plus">
        <path d="M12 5V19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5 12H19" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper7>
  );
}

function L3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <p className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white underline" style={{ fontVariationSettings: "'wght' 400" }}>
        新增
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Plus />
        <L3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Frame33 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-nowrap text-white tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險管理事項進度追蹤
      </p>
      <Container />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Helper3 text="系統弱點偵測" text1="9" />
      <Helper4 text="供應商定期風險評估" text1="10" />
      <Helper4 text="供應商情資" text1="10" />
    </div>
  );
}

function Frame134() {
  return (
    <Wrapper3>
      <ButtonText text="全部 (9)" />
      <ButtonText1 text="尚未處理 (2)" />
      <ButtonText1 text="處理中 (3)" />
      <ButtonText1 text="已處理 (3)" />
      <ButtonText1 text="已逾期 (1)" />
    </Wrapper3>
  );
}

function TableCell2() {
  return (
    <Wrapper6 additionalClassNames="bg-[#ec5242]">
      <Text12 text="BC001" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell3() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC002" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell4() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC003" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell5() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC004" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell6() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC005" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell7() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC006" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell8() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC007" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell9() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC008" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell10() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="BC009" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]">
      <TableHeaderText1 text="案件編號" />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
    </div>
  );
}

function TableCell11() {
  return (
    <Wrapper6 additionalClassNames="bg-[#ec5242]">
      <Text11 text="中菲行國際物流" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell12() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="中華電信" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell13() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="Appier 沛星互動科技" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell14() {
  return (
    <TableCell18 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`綠界科技 ECPay `}</p>
    </TableCell18>
  );
}

function TableCell15() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="NEC 台灣" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell16() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="藍新科技 (NewebPay)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell17() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="Cisco 思科" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
      <TableHeaderText1 text="供應商名稱" />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell14 />
      <TableCell14 />
    </div>
  );
}

function TableCell20() {
  return (
    <Wrapper6 additionalClassNames="bg-[#ec5242]">
      <Text11 text="MyDimerco 貨運管理系統" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell21() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="hicloud 雲端服務 API" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell22() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="客戶數據平台 (CDP)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell23() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="金流支付閘道器" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell24() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="ATM 監控管理軟體" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell25() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="第三方支付 API 模組" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell26() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="網銀防火牆設備 (Firewall)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
      <TableHeaderText2 text="專案名稱" />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell23 />
      <TableCell23 />
    </div>
  );
}

function TableCell27() {
  return (
    <TableCell18 additionalClassNames="bg-[#ec5242]">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[16px] text-white tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)
      </p>
    </TableCell18>
  );
}

function TableCell28() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell29() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="程式碼執行漏洞 (RCE) - (CVE-2025-12345)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell30() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="遠端程式碼執行漏洞 (RCE)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell31() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text11 text="系統後門帳號弱點 (Hardcoded Password)" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
      <TableHeaderText2 text="弱點描述" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell28 />
      <TableCell30 />
      <TableCell28 />
      <TableCell31 />
      <TableCell28 />
      <TableCell28 />
    </div>
  );
}

function TableCell32() {
  return (
    <Wrapper6 additionalClassNames="bg-[#ec5242]">
      <Text12 text="2025.11.01" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell33() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.11.10" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell34() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.11.12" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell35() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.11.14" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell36() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.11.21" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell37() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.11.27" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function TableCell38() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Text12 text="2025.12.01" additionalClassNames="p-[15px]" />
    </Wrapper6>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
      <TableHeaderText2 text="期限" />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      {[...Array(3).keys()].map((_, i) => (
        <TableCell38 key={i} />
      ))}
    </div>
  );
}

function TableHeader1() {
  return (
    <Wrapper5>
      <Text14 text="版本狀態" additionalClassNames="justify-center" />
    </Wrapper5>
  );
}

function Group12() {
  return (
    <Wrapper4>
      <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
      <g id="Group 1171276093">
        <path d={svgPaths.p2bbd3a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
        <path d={svgPaths.p240ac80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
      </g>
    </Wrapper4>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group12 />
      <Text15 text="已逾期" />
    </div>
  );
}

function TableCell39() {
  return (
    <TableCell18 additionalClassNames="bg-[#ec5242]">
      <Frame37 />
    </TableCell18>
  );
}

function Group7() {
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

function Group14() {
  return (
    <div className="absolute bottom-1/4 contents left-1/2 right-[49.95%] top-1/4">
      <Group7 />
    </div>
  );
}

function Group16() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <div className="absolute aspect-[22/22] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #EE762F)" id="Ellipse 4303" r="7" />
        </svg>
      </div>
      <Group14 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group16 />
      <Text15 text="尚未處理" />
    </div>
  );
}

function TableCell40() {
  return (
    <TableCell18 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Frame38 />
    </TableCell18>
  );
}

function Group17() {
  return (
    <Wrapper4>
      <circle cx="7" cy="7" fill="var(--fill-0, #419D48)" id="Ellipse 4303" r="7" />
      <path d={svgPaths.p21ec7f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
    </Wrapper4>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group17 />
      <Text15 text="已處理" />
    </div>
  );
}

function TableCell41() {
  return (
    <TableCell18 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Frame39 />
    </TableCell18>
  );
}

function Group18() {
  return (
    <Wrapper4>
      <circle cx="7" cy="7" fill="var(--fill-0, #55A3E2)" id="Ellipse 4303" r="7" />
      <path d="M6.3 3.5V7.7L9.1 9.1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
    </Wrapper4>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group18 />
      <Text15 text="處理中" />
    </div>
  );
}

function TableCell42() {
  return (
    <TableCell18 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Frame40 />
    </TableCell18>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader1 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell41 />
      <TableCell41 />
      <TableCell41 />
      <TableCell41 />
      <TableCell41 />
    </div>
  );
}

function TableHeader2() {
  return (
    <Wrapper5>
      <Text14 text="操作" additionalClassNames="justify-center" />
    </Wrapper5>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Wrapper8 text="查看" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#ec5242]" />
    </div>
  );
}

function TableCell43() {
  return (
    <TableCell19 additionalClassNames="bg-[#ec5242]">
      <Container1 />
    </TableCell19>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Wrapper8 text="查看" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]" />
    </div>
  );
}

function TableCell44() {
  return (
    <TableCell19 additionalClassNames="bg-[rgba(255,255,255,0.12)]">
      <Container2 />
    </TableCell19>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Wrapper8 text="查看" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]" />
    </div>
  );
}

function TableCell45() {
  return (
    <TableCell19 additionalClassNames="bg-white">
      <Container3 />
    </TableCell19>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader2 />
      <TableCell43 />
      <TableCell44 />
      {[...Array(7).keys()].map((_, i) => (
        <TableCell45 key={i} />
      ))}
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] pt-0 px-[16px] relative shrink-0 w-[1360px]">
      <Frame67 />
      <Frame65 />
      <Frame68 />
      <Frame60 />
      <Frame69 />
      <Frame59 />
      <Frame70 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Tab1 />
      <Frame134 />
      <Frame71 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1360px]">
      <Frame131 />
      <Frame132 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame80 />
      <Frame107 />
      <Frame106 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1360px]">
      <Frame118 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#1a1a24] content-stretch flex flex-col gap-[40px] items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]">
      <div className="absolute bg-[#2e2e38] h-[76px] left-0 top-[120px] w-[1440px]" />
      <Component />
      <Frame32 />
    </div>
  );
}

export default function Frame135() {
  return (
    <div className="relative size-full">
      <Frame129 />
    </div>
  );
}