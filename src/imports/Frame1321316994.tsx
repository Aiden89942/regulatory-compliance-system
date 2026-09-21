import svgPaths from "./svg-c9u6ac8cqm";
import clsx from "clsx";

function BackgroundImage16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[24px]">
      {children}
    </div>
  );
}
type LBackgroundImageProps = {
  text: string;
  additionalClassNames?: string;
};

function LBackgroundImage({ children, text, additionalClassNames = "" }: React.PropsWithChildren<LBackgroundImageProps>) {
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
type BackgroundImage15Props = {
  additionalClassNames?: string;
};

function BackgroundImage15({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("content-stretch flex items-center relative shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {children}
      </p>
    </div>
  );
}
type BackgroundImage14Props = {
  additionalClassNames?: string;
};

function BackgroundImage14({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage14Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">{children}</div>
    </div>
  );
}
type BackgroundImage13Props = {
  additionalClassNames?: string;
};

function BackgroundImage13({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage13Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function TableCellBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage11 additionalClassNames="bg-white h-[53px]">
      <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">{children}</div>
    </BackgroundImage11>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 1171276096">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <BackgroundImage12 additionalClassNames={additionalClassNames}>
      <g id="chevron-right">{children}</g>
    </BackgroundImage12>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center p-[15px] relative w-full">{children}</div>
    </BackgroundImage13>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {children}
        </p>
      </div>
    </BackgroundImage13>
  );
}
type BackgroundImageAndText17Props = {
  text: string;
};

function BackgroundImageAndText17({ text }: BackgroundImageAndText17Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText16Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText16({ text, additionalClassNames = "" }: BackgroundImageAndText16Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderBackgroundImageAndText2Props = {
  text: string;
};

function TableHeaderBackgroundImageAndText2({ text }: TableHeaderBackgroundImageAndText2Props) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText16 text={text} />
    </BackgroundImage13>
  );
}
type TableCellBackgroundImageAndText4Props = {
  text: string;
};

function TableCellBackgroundImageAndText4({ text }: TableCellBackgroundImageAndText4Props) {
  return (
    <BackgroundImage7>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </BackgroundImage7>
  );
}
type TableCellBackgroundImageAndText3Props = {
  text: string;
};

function TableCellBackgroundImageAndText3({ text }: TableCellBackgroundImageAndText3Props) {
  return (
    <BackgroundImage7>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#ec5242] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </BackgroundImage7>
  );
}
type TableHeaderBackgroundImageAndText1Props = {
  text: string;
};

function TableHeaderBackgroundImageAndText1({ text }: TableHeaderBackgroundImageAndText1Props) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <div className="content-stretch flex items-center p-[15px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </BackgroundImage13>
  );
}

function BackgroundImageAndText15({ text, additionalClassNames = "" }: BackgroundImageAndText15Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText14Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText14({ text, additionalClassNames = "" }: BackgroundImageAndText14Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndText2Props = {
  text: string;
};

function TableCellBackgroundImageAndText2({ text }: TableCellBackgroundImageAndText2Props) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text={text} additionalClassNames="px-[15px] py-[20px]" />
    </BackgroundImage13>
  );
}
type TableCellBackgroundImageAndText1Props = {
  text: string;
};

function TableCellBackgroundImageAndText1({ text }: TableCellBackgroundImageAndText1Props) {
  return (
    <BackgroundImage5>
      {text}
      <span>{`股份有限公司 `}</span>
    </BackgroundImage5>
  );
}
type BackgroundImageAndText13Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText13({ text, additionalClassNames = "" }: BackgroundImageAndText13Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellBackgroundImageAndTextProps = {
  text: string;
};

function TableCellBackgroundImageAndText({ text }: TableCellBackgroundImageAndTextProps) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text={text} additionalClassNames="px-[15px] py-[20px]" />
    </BackgroundImage13>
  );
}
type BackgroundImageAndText12Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText12({ text, additionalClassNames = "" }: BackgroundImageAndText12Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderBackgroundImageAndTextProps = {
  text: string;
};

function TableHeaderBackgroundImageAndText({ text }: TableHeaderBackgroundImageAndTextProps) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText12 text={text} />
    </BackgroundImage13>
  );
}
type ButtonBackgroundImageAndText1Props = {
  text: string;
};

function ButtonBackgroundImageAndText1({ text }: ButtonBackgroundImageAndText1Props) {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText11Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText11({ text, additionalClassNames = "" }: BackgroundImageAndText11Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage4Props = {
  text: string;
  text1: string;
};

function BackgroundImage4({ text, text1 }: BackgroundImage4Props) {
  return (
    <BackgroundImage14>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center text-nowrap">
        <BackgroundImageAndText11 text={text} />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
          <p className="leading-[normal] text-nowrap">{text1}</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}
type BackgroundImage3Props = {
  text: string;
  text1: string;
};

function BackgroundImage3({ text, text1 }: BackgroundImage3Props) {
  return (
    <BackgroundImage14 additionalClassNames="bg-[#ffe600]">
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center text-nowrap">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal] text-nowrap">{text}</p>
        </div>
        <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
          <p className="leading-[normal] text-nowrap">{text1}</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}
type BackgroundImageAndText10Props = {
  text: string;
};

function BackgroundImageAndText10({ text }: BackgroundImageAndText10Props) {
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[20px] text-nowrap tracking-[0.6px]">{text}</p>
      <ChevronRightBackgroundImage1 />
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type BackgroundImageAndText9Props = {
  text: string;
};

function BackgroundImageAndText9({ text }: BackgroundImageAndText9Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[26px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 618 1">
            <line id="Line 5" stroke="var(--stroke-0, #F2F2F2)" x2="618" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText8Props = {
  text: string;
};

function BackgroundImageAndText8({ text }: BackgroundImageAndText8Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#747480] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#1a1a24] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0 w-[106.886px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[20px] text-nowrap tracking-[0.6px]">{text}</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text1}
      </p>
      <ChevronRightBackgroundImage1 />
    </div>
  );
}

function ChevronRightBackgroundImage1() {
  return (
    <BackgroundImage8 additionalClassNames="relative shrink-0 size-[24px]">
      <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage8>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#ffe600] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <BackgroundImageAndText2 text="1" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[32px] text-nowrap">{text}</p>
      <BackgroundImage />
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <BackgroundImageAndText1 text="筆" />
      <ChevronRightBackgroundImage additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type ChevronRightBackgroundImageProps = {
  additionalClassNames?: string;
};

function ChevronRightBackgroundImage({ additionalClassNames = "" }: ChevronRightBackgroundImageProps) {
  return (
    <BackgroundImage8 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage8>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
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

function Frame26() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <BackgroundImage16>
        <div className="flex-none rotate-[90deg]">
          <ChevronRightBackgroundImage />
        </div>
      </BackgroundImage16>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame26 />
      <BackgroundImageAndText text="風險評估" />
      <BackgroundImageAndText text="供應商管理" />
      <Frame29 />
      <BackgroundImageAndText text="管理報表" />
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

function Frame54() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame54 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame52 />
      <Frame73 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame53 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame51 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <BackgroundImage12 additionalClassNames="relative size-[24px]">
      <g id="Frame">
        <g id="Vector">
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-3, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-4, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
        </g>
      </g>
    </BackgroundImage12>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>{`Hi Ace 您今天有 3 筆任務待處理 `}</p>
      <BackgroundImage16>
        <div className="flex-none rotate-[270deg]">
          <Frame />
        </div>
      </BackgroundImage16>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[29.798px] relative shrink-0 w-[127px]" data-name="Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 29.798">
        <g id="Toggle">
          <g id="Group 4">
            <rect fill="var(--fill-0, #2E2E38)" height="19.6667" id="Rectangle 6" rx="9.83333" transform="matrix(1 0 0 -1 39.9798 25.0303)" width="56.0202" />
            <circle cx="14.899" cy="14.899" fill="var(--fill-0, #BABABA)" id="Ellipse 1" r="14.899" transform="matrix(1 0 0 -1 37 29.798)" />
          </g>
          <path d={svgPaths.p2ab84200} fill="var(--fill-0, #2E2E38)" id="Vector" />
          <path d={svgPaths.p2322bdc0} fill="var(--fill-0, #C4C4CD)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame27 />
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

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ffe600] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        筆
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Frame31 />
      <ChevronRightBackgroundImage additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffe600] text-[32px] text-nowrap">1</p>
      <Frame117 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        合約即將到期
      </p>
      <Frame50 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon />
      <Frame99 />
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ffe600] gap-[10px] items-center justify-center left-[23px] px-[12px] py-[8px] rounded-[4px] to-[#41fcea] top-[-25px]" data-name="Tag">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        距離截止剩 20 天
      </p>
      <div className="absolute flex h-[14px] items-center justify-center left-[13px] top-[37px] w-[20px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[14px] relative w-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <path d={svgPaths.p24245400} fill="var(--fill-0, #F0E813)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#1a1a24] content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame114 />
      <Tag />
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

function Frame115() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon1 />
      <BackgroundImageAndText3 text="合約即將到期" />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame115 />
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

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        情資追蹤
      </p>
      <BackgroundImageAndText2 text="2" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon2 />
      <Frame100 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame116 />
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

function Frame118() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon3 />
      <BackgroundImageAndText3 text="待辦事項" />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame118 />
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

function Frame119() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon4 />
      <BackgroundImageAndText3 text="逾期事項" />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[260px]" data-name="Card">
      <Frame119 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-0 pt-[20px] px-0 relative shrink-0 w-[1360px]">
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1360px]">
      <Frame28 />
      <Frame71 />
    </div>
  );
}

function Frame80() {
  return <BackgroundImage15 additionalClassNames="w-full">{`供應商風險分析 `}</BackgroundImage15>;
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        即時供應商風險分佈
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Group3({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <BackgroundImage6>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #1A1A24)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #747480)" id="Ellipse 4277" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-3-outside-1_10_4279" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #FFE600)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-3-outside-1_10_4279)" stroke="var(--stroke-0, #FFF383)" strokeOpacity="0.16" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill={isDarkMode ? "#272731" : "white"} id="Ellipse 4300" r="72.1364" />
    </BackgroundImage6>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group3 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame32 />
      <BackgroundImageAndText4 text="共 192 家" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText5 text="高風險" />
      <BackgroundImage1 text="28" text1="家" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText6 text="中風險" />
      <BackgroundImage1 text="60" text1="家" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText7 text="低風險" />
      <BackgroundImage1 text="104" text1="家" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame47 />
      <Frame76 />
      <Frame3 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shrink-0">
      <Frame74 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <BackgroundImageAndText8 text="弱點偵測狀態分佈" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame44 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Group4({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <BackgroundImage6>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #1A1A24)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #747480)" id="Ellipse 4277" />
      <path d={svgPaths.p1c0f2080} fill="var(--fill-0, #C4C4CD)" id="Ellipse 4301" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-4-outside-1_10_4188" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #FFE600)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-4-outside-1_10_4188)" stroke="var(--stroke-0, #FFF383)" strokeOpacity="0.16" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill={isDarkMode ? "#272731" : "white"} id="Ellipse 4300" r="72.1364" />
    </BackgroundImage6>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group4 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame33 />
      <BackgroundImageAndText4 text="共 204 筆" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText5 text="已逾期" />
      <BackgroundImage1 text="15" text1="筆" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText6 text="尚未處理" />
      <BackgroundImage1 text="95" text1="筆" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <BackgroundImageAndText7 text="處理中" />
      <BackgroundImage1 text="74" text1="筆" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#c4c4cd] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已處理
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <BackgroundImage1 text="20" text1="筆" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame72 />
      <Frame77 />
      <Frame5 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shrink-0">
      <Frame75 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <BackgroundImageAndText8 text="現行供應商類別分析" />
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

function Frame57() {
  return (
    <div className="absolute bg-[#f6f6fa] content-stretch flex h-[33px] items-center justify-center pl-[12px] pr-[8px] py-[6px] right-0 rounded-[4px] top-[calc(50%+0.5px)] translate-y-[-50%]">
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

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame45 />
      <Frame57 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame82 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1月
      </p>
    </div>
  );
}

function Frame95() {
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

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame95 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        2月
      </p>
    </div>
  );
}

function Frame96() {
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

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame96 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3月
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[10px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[52px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame98 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        4月
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[64px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[32px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[26px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame101 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        5月
      </p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[31px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[6px] rounded-[4px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[66px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame104 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        6月
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[15px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[116px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame105 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        7月
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[5px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[51px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame106 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        8月
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[30px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[12px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame107 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        9月
      </p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[18px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[29px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[8px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame108 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        10月
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[90px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[13px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[38px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame109 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        11月
      </p>
    </div>
  );
}

function Frame110() {
  return <div className="h-[157px] shrink-0 w-[20px]" />;
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center opacity-[0.45] relative shrink-0">
      <Frame110 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        12月
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex items-end justify-between left-[45px] w-[581px]">
      <Frame83 />
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
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-[9px] contents left-[45px]">
      <div className="absolute bottom-[9px] h-[23px] right-[71px] rounded-[20px] w-[43px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} />
      <Frame111 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col h-[325px] items-start justify-between relative shrink-0 w-[652px]">
      <BackgroundImageAndText9 text="100" />
      <BackgroundImageAndText9 text="80" />
      <BackgroundImageAndText9 text="60" />
      <BackgroundImageAndText9 text="40" />
      <BackgroundImageAndText9 text="20" />
      <BackgroundImageAndText9 text="0" />
      <Group17 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#747480]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統開發
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame6 />
      <BackgroundImageAndText10 text="16" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#c4c4cd]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統維護
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <BackgroundImageAndText10 text="14" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#1a1a24]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統整合
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame8 />
      <BackgroundImageAndText10 text="7" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#ffe600]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        設備操作
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame10 />
      <BackgroundImageAndText10 text="5" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#8f8100]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        硬體維護
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame11 />
      <BackgroundImageAndText10 text="22" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <BackgroundImageAndText6 text="備份與備援服務" />
      <BackgroundImageAndText10 text="7" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#ececf3] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame9 />
        <Frame97 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] inset-0 items-start overflow-clip p-[24px] rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]">
      <Frame49 />
      <Frame112 />
      <Frame120 />
    </div>
  );
}

function Group5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame38 />
      <Group5 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame80 />
      <Frame78 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame79 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1360px]">
      <Frame102 />
    </div>
  );
}

function Frame81() {
  return (
    <BackgroundImage15 additionalClassNames="w-[1360px]">
      <span style={{ fontVariationSettings: "'wght' 700" }}>供應商進度總</span>覽<span style={{ fontVariationSettings: "'wght' 700" }}> </span>{" "}
    </BackgroundImage15>
  );
}

function Frame30() {
  return (
    <BackgroundImage14>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap">
        <BackgroundImageAndText11 text="已結案" additionalClassNames="text-[#707070]" />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#747480] text-[22px]">
          <p className="leading-[normal] text-nowrap">3</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <BackgroundImage3 text="開案前" text1="6" />
      <BackgroundImage4 text="委託中" text1="6" />
      <Frame30 />
    </div>
  );
}

function Frame125() {
  return (
    <BackgroundImage9>
      <ButtonBackgroundImageAndText text="資訊服務委外風險評估 (3)" />
      <ButtonBackgroundImageAndText1 text="填寫供應商風險評估與情資追蹤" />
      <ButtonBackgroundImageAndText1 text="供應商資料檢核與歸檔 (1)" />
    </BackgroundImage9>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeaderBackgroundImageAndText text="專案名稱" />
      <TableCellBackgroundImageAndText text="2026年度官網視覺化改版專案" />
      <TableCellBackgroundImageAndText text="2026 AI 智能客服系統 v1.0" />
      <TableCellBackgroundImageAndText text="集團人資系統上雲端服務採購案" />
      <TableCellBackgroundImageAndText text="企業資安防護系統升級案" />
      <TableCellBackgroundImageAndText text="商業智慧 (BI) 平台建置案" />
    </div>
  );
}

function TableCell() {
  return <BackgroundImage5>{`奧美廣告股份有限公司 `}</BackgroundImage5>;
}

function TableCell1() {
  return <BackgroundImage5>{`碩網資訊股份有限公司 `}</BackgroundImage5>;
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <TableHeaderBackgroundImageAndText text="申請供應商" />
      <TableCell />
      <TableCell1 />
      <TableCellBackgroundImageAndText1 text="叡揚資訊" />
      <TableCellBackgroundImageAndText1 text="中華電信" />
      <TableCellBackgroundImageAndText2 text="IBM" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[484px]">
      <TableHeaderBackgroundImageAndText text="期限" />
      <TableCellBackgroundImageAndText2 text="2025.11.01" />
      <TableCellBackgroundImageAndText2 text="2025.11.10" />
      <TableCellBackgroundImageAndText2 text="2025.11.12" />
      <TableCellBackgroundImageAndText2 text="2025.11.15" />
      <TableCellBackgroundImageAndText2 text="2025.11.22" />
    </div>
  );
}

function TableHeader() {
  return (
    <BackgroundImage11 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText12 text="操作" additionalClassNames="justify-center" />
    </BackgroundImage11>
  );
}

function L1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <BackgroundImageAndText15 text="編輯" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]" />
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

function Frame122() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
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

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader />
      {[...Array(5).keys()].map((_, i) => (
        <Frame122 key={i} />
      ))}
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <Frame61 />
          <Frame60 />
          <Frame63 />
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[1360px]" data-name="供應商進度總覽">
      <Tab />
      <Frame125 />
      <Frame65 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame81 />
      <Component2 />
    </div>
  );
}

function Plus() {
  return (
    <BackgroundImage12 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="plus">
        <path d="M12 5V19" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5 12H19" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage12>
  );
}

function L3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <p className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline" style={{ fontVariationSettings: "'wght' 400" }}>
        新增
      </p>
    </div>
  );
}

function Frame35() {
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
      <Frame35 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險管理事項進度追蹤
      </p>
      <Container />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <BackgroundImage3 text="系統弱點偵測" text1="9" />
      <BackgroundImage4 text="供應商定期風險評估" text1="10" />
      <BackgroundImage4 text="供應商情資" text1="10" />
    </div>
  );
}

function Frame126() {
  return (
    <BackgroundImage9>
      <ButtonBackgroundImageAndText text="全部 (9)" />
      <ButtonBackgroundImageAndText1 text="尚未處理 (2)" />
      <ButtonBackgroundImageAndText1 text="處理中 (3)" />
      <ButtonBackgroundImageAndText1 text="已處理 (3)" />
      <ButtonBackgroundImageAndText1 text="已逾期 (1)" />
    </BackgroundImage9>
  );
}

function TableCell2() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC002" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell3() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC003" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell4() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC004" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell5() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC005" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell6() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC006" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell7() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC007" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell8() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC008" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell9() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="BC009" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]">
      <TableHeaderBackgroundImageAndText1 text="案件編號" />
      <TableCellBackgroundImageAndText3 text="BC001" />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="中華電信" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell11() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="Appier 沛星互動科技" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell12() {
  return (
    <BackgroundImage7>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`綠界科技 ECPay `}</p>
    </BackgroundImage7>
  );
}

function TableCell13() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="NEC 台灣" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell14() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="藍新科技 (NewebPay)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell15() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="Cisco 思科" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
      <TableHeaderBackgroundImageAndText1 text="供應商名稱" />
      <TableCellBackgroundImageAndText4 text="中菲行國際物流" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell12 />
      <TableCell12 />
    </div>
  );
}

function TableCell16() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="hicloud 雲端服務 API" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell17() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="客戶數據平台 (CDP)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell18() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="金流支付閘道器" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell19() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="ATM 監控管理軟體" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell20() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="第三方支付 API 模組" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell21() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="網銀防火牆設備 (Firewall)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
      <TableHeaderBackgroundImageAndText2 text="專案名稱" />
      <TableCellBackgroundImageAndText4 text="MyDimerco 貨運管理系統" />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell18 />
      <TableCell18 />
    </div>
  );
}

function TableCell22() {
  return (
    <BackgroundImage7>
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)
      </p>
    </BackgroundImage7>
  );
}

function TableCell23() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell24() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="程式碼執行漏洞 (RCE) - (CVE-2025-12345)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell25() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="遠端程式碼執行漏洞 (RCE)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell26() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText13 text="系統後門帳號弱點 (Hardcoded Password)" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
      <TableHeaderBackgroundImageAndText2 text="弱點描述" />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell23 />
      <TableCell25 />
      <TableCell23 />
      <TableCell26 />
      <TableCell23 />
      <TableCell23 />
    </div>
  );
}

function TableCell27() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.11.10" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell28() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.11.12" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell29() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.11.14" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell30() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.11.21" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell31() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.11.27" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function TableCell32() {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText14 text="2025.12.01" additionalClassNames="p-[15px]" />
    </BackgroundImage13>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
      <TableHeaderBackgroundImageAndText2 text="期限" />
      <TableCellBackgroundImageAndText3 text="2025.11.01" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      {[...Array(3).keys()].map((_, i) => (
        <TableCell32 key={i} />
      ))}
    </div>
  );
}

function TableHeader1() {
  return (
    <BackgroundImage11 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText16 text="版本狀態" additionalClassNames="justify-center" />
    </BackgroundImage11>
  );
}

function Group12() {
  return (
    <BackgroundImage10>
      <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
      <g id="Group 1171276093">
        <path d={svgPaths.p2bbd3a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
        <path d={svgPaths.p240ac80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
      </g>
    </BackgroundImage10>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group12 />
      <Frame12 />
    </div>
  );
}

function TableCell33() {
  return (
    <BackgroundImage7>
      <Frame39 />
    </BackgroundImage7>
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

function Group15() {
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group15 />
      <BackgroundImageAndText17 text="尚未處理" />
    </div>
  );
}

function TableCell34() {
  return (
    <BackgroundImage7>
      <Frame40 />
    </BackgroundImage7>
  );
}

function Group16() {
  return (
    <BackgroundImage10>
      <circle cx="7" cy="7" fill="var(--fill-0, #419D48)" id="Ellipse 4303" r="7" />
      <path d={svgPaths.p21ec7f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
    </BackgroundImage10>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group16 />
      <BackgroundImageAndText17 text="已處理" />
    </div>
  );
}

function TableCell35() {
  return (
    <BackgroundImage7>
      <Frame41 />
    </BackgroundImage7>
  );
}

function Group18() {
  return (
    <BackgroundImage10>
      <circle cx="7" cy="7" fill="var(--fill-0, #55A3E2)" id="Ellipse 4303" r="7" />
      <path d="M6.3 3.5V7.7L9.1 9.1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
    </BackgroundImage10>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group18 />
      <BackgroundImageAndText17 text="處理中" />
    </div>
  );
}

function TableCell36() {
  return (
    <BackgroundImage7>
      <Frame42 />
    </BackgroundImage7>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader1 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell35 />
      <TableCell35 />
      <TableCell35 />
      <TableCell35 />
      <TableCell35 />
    </div>
  );
}

function TableHeader2() {
  return (
    <BackgroundImage11 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText16 text="操作" additionalClassNames="justify-center" />
    </BackgroundImage11>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <LBackgroundImage text="查看" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#ec5242]" />
    </div>
  );
}

function TableCell37() {
  return (
    <TableCellBackgroundImage>
      <Container1 />
    </TableCellBackgroundImage>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <LBackgroundImage text="查看" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24]" />
    </div>
  );
}

function TableCell38() {
  return (
    <TableCellBackgroundImage>
      <Container2 />
    </TableCellBackgroundImage>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader2 />
      <TableCell37 />
      {[...Array(8).keys()].map((_, i) => (
        <TableCell38 key={i} />
      ))}
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] pt-0 px-[16px] relative shrink-0 w-[1360px]">
      <Frame66 />
      <Frame64 />
      <Frame67 />
      <Frame59 />
      <Frame68 />
      <Frame58 />
      <Frame69 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Tab1 />
      <Frame126 />
      <Frame70 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1360px]">
      <Frame123 />
      <Frame124 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col gap-[40px] items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Frame55 />
      <Frame56 />
      <Frame103 />
      <Frame113 />
    </div>
  );
}

export default function Frame121() {
  return (
    <div className="relative size-full">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="absolute bg-[#2e2e38] h-[76px] left-0 top-[120px] w-[1440px]" />
        <Component />
        <Frame34 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
    </div>
  );
}