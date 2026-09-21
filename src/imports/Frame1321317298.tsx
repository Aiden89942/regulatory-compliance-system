import svgPaths from "./svg-spkb731u54";
import clsx from "clsx";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
    <div className={clsx("bg-white relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type BigTooltipTopHelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BigTooltipTopHelper({ text, text1, additionalClassNames = "" }: BigTooltipTopHelperProps) {
  return (
    <p className={clsx("leading-[23px]", additionalClassNames)}>
      <span className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </span>
      {text1}
    </p>
  );
}

function Container() {
  return (
    <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <ContainerText text="部門主管簽章" />
        <ContainerText1 text="[ 簽章區域 ]" />
        <ContainerText2 text="日期: __________________________________" />
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
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
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
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
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
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
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Info />
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_48_4013)" id="info">
        <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_48_4013">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function Helper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`A.涉及以下任一軟 / 硬體資訊資產： `}</p>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-white border-[#c4c4cd] border-[0.833px] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}
type DatePickerTextProps = {
  text: string;
};

function DatePickerText({ text }: DatePickerTextProps) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
        <ChevronDown />
      </div>
    </Wrapper1>
  );
}

function ChevronDown() {
  return (
    <Wrapper2 additionalClassNames="shrink-0">
      <g id="chevron-down">
        <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div className={clsx("content-stretch flex p-[12px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
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
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper3>
        <circle cx="30" cy="30" id="Ellipse 4257" r="29.25" stroke="var(--stroke-0, #C4C4CD)" strokeWidth="1.5" />
      </Wrapper3>
      <p className="[grid-area:1_/_1] font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic relative text-[#747480] text-[22px] text-nowrap">{text}</p>
    </div>
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
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 700" }} className={clsx("flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
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

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame8() {
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
    <Wrapper2>
      <g id="chevron-right">
        <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function Frame9() {
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

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame7 />
      <Text2 text="風險評估" />
      <Frame8 />
      <Frame9 />
      <Text2 text="管理報表" />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text3 text="新增供應商" additionalClassNames="text-[#1a1a24]" />
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

function Frame48() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame48 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame46 />
      <Frame49 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame47 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame45 />
          <div className="absolute bottom-0 h-0 left-[779px] w-[110px]">
            <div className="absolute inset-[-6px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
                <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
              </svg>
            </div>
          </div>
        </div>
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
      <Wrapper3>
        <circle cx="30" cy="30" fill="var(--fill-0, #FFE600)" id="Ellipse 4257" r="30" />
      </Wrapper3>
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
        填寫資訊服務委外風險評估
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text4 text="2" />
      <Text5 text="發送資訊供應商風險評估表與情資追蹤" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text4 text="3" />
      <Text5 text="供應商資料檢核與歸檔" />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="第三個">
      <Helper />
      <Frame6 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame4 />
      <Helper />
      <Frame5 />
      <Component2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#747480] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[24px] relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 700" }}>
          資訊服務委外風險評估表
        </p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <Wrapper2 additionalClassNames="shrink-0">
      <g id="calendar">
        <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function DatePicker() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]">2026/01/01</p>
          <Calendar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="評估日期" />
      <DatePicker />
    </div>
  );
}

function DatePicker1() {
  return (
    <Wrapper1 additionalClassNames="h-[48px]">
      <div className="content-stretch flex items-center p-[12px] relative size-full">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px]">請輸入申請單位</p>
      </div>
    </Wrapper1>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253.333px]" data-name="Form">
      <LabelText text="申請單位" />
      <DatePicker1 />
    </div>
  );
}

function DatePicker2() {
  return (
    <Wrapper1 additionalClassNames="h-[48px]">
      <Text6 text="請輸入專案名稱" additionalClassNames="items-center" />
    </Wrapper1>
  );
}

function Form2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="專案名稱" />
      <DatePicker2 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Form />
      <Form1 />
      <Form2 />
    </div>
  );
}

function Form3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253.33px]" data-name="Form">
      <LabelText text="資訊服務委外類型" />
      <DatePickerText text="請選擇資訊服務委外類型" />
    </div>
  );
}

function Form4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="作業委外類型" />
      <DatePickerText text="請選擇作業委外類型" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Form3 />
      <Form4 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] w-[824px]" style={{ fontVariationSettings: "'wght' 700" }}>
        基本資料
      </p>
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText1 text="核心系統" />
      <TextText2 text="屬於S01之關鍵系統軟體" />
      <TextText2 text="屬於H01之關鍵系統設備" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Helper1 />
      <Frame68 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame12 />
      <Frame67 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於S02之一般系統軟體" />
      <TextText2 text="屬於H02~H05" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.涉及以下任一軟/硬體類資訊資產：" />
      <Frame73 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame13 />
      <Frame74 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`屬於H06~H07 `}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Info />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於S03~S04之軟體" />
      <Text1 />
      <TextText1 text="不接觸任何軟/硬體資訊資產" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.涉及以下任一軟/硬體類資訊資產" />
      <Frame75 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame14 />
      <Frame76 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText1 text="特種個資或可識別當事人之個人資料" />
      <TextText2 text="屬於F01、D01之文件及資料" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Helper1 />
      <Frame77 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame15 />
      <Frame78 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於F02~F04" />
      <TextText2 text="屬於D02~D04之文件及資料" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.會存取或保管以下任一：" />
      <Frame79 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame16 />
      <Frame80 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.不會存取或保管任何文件及資料" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame17 />
      <Frame82 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">供應商會存取之資料(單選)</span>
        </li>
      </ol>
      <Frame55 />
      <Frame81 />
      <Frame83 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1. 供應商涉及之資訊資產(單選)
      </p>
      <Frame54 />
      <Frame66 />
      <Frame57 />
      <Frame61 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="A.透過網際網路與國泰投信進行傳輸連線" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame18 />
      <Frame84 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.透過封閉網路或加密網路與國泰投信進行傳輸連線(如：專線、VPN、VDI等)" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame19 />
      <Frame85 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame87() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.不會與國泰投信進行任何外部傳輸連線" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame20 />
      <Frame87 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3. 供應商與國泰投信之間傳輸連線方式(單選)
      </p>
      <Frame56 />
      <Frame86 />
      <Frame88 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        評估參考指標
      </p>
      <Frame53 />
      <Frame62 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame21 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame22 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame23 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame63 />
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        1. 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?
      </p>
      <Frame89 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame25 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame26 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame27 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame90 />
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        2. 是否已考量資訊服務委外事項之可行性?
      </p>
      <Frame93 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame28 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame29 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame30 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame95 />
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        3. 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?
      </p>
      <Frame98 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame31 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame32 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame33 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame100 />
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        4. 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?
      </p>
      <Frame103 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame34 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame35 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame36 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame104 />
      <Frame105 />
      <Frame106 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        5. 是否考量潛在供應商過度集中之可能性?
      </p>
      <Frame107 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame37 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame38 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame39 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Ｎ / A
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame108 />
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        6. 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？
      </p>
      <Frame111 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        三、可行性評估（請勾選是/否）
      </p>
      <Frame24 />
      <Frame94 />
      <Frame99 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Form5() {
  return (
    <div className="bg-white h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div className="overflow-clip rounded-[inherit] size-full">
        <Text6 text="請輸入補充說明" additionalClassNames="flex-col items-start" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        四、補充說明
      </p>
      <Form5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabelText text="部室主管簽章" />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabelText text="單位內供應商業務負責人簽章" />
      <Container />
    </div>
  );
}

function RiskAssessmentWorkflow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Container1 />
      <Container2 />
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[856px]" data-name="OSINTIntelligenceTable">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <Frame72 />
      <Frame71 />
      <Frame69 />
      <Frame70 />
      <RiskAssessmentWorkflow />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame11 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        風險計算結果
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p206f1200} id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 18V26" id="Vector_2" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 34H24.02" id="Vector_3" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[428px]" data-name="Paragraph">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] left-[214.5px] text-[#1a1a24] text-[16px] text-center text-nowrap top-0 tracking-[0.48px] translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 400" }}>
        請完成三項風險因子評估
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-[428px]" data-name="Paragraph">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
        以計算風險值與風險等級
      </p>
    </div>
  );
}

function RiskAssessmentWorkflow1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[24px] pt-[48px] px-0 relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Icon1 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[24px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame41 />
      <RiskAssessmentWorkflow1 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <Wrapper additionalClassNames="shrink-0">
      <g id="chevron-right">
        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </g>
    </Wrapper>
  );
}

function L1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[12px] relative rounded-[8px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[18px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          儲存成草稿
        </p>
      </div>
      <ChevronRight1 />
    </div>
  );
}

function L2() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text3 text="確認並匯出" additionalClassNames="text-[#9b9ba1]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <L1 />
      <L2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function RiskAssessmentWorkflow2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[320px]" data-name="RiskAssessmentWorkflow">
      <Card />
      <Frame42 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1200px]" data-name="資訊服務委外風險評估">
      <Frame40 />
      <RiskAssessmentWorkflow2 />
    </div>
  );
}

function L3() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0 w-full" data-name="按鈕(L)">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative w-full">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[23px]">確認</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigTooltipTop() {
  return (
    <div className="absolute bg-[#1a1a24] content-stretch flex flex-col gap-[12px] items-start left-[492px] px-[15px] py-[16px] rounded-[8px] top-[496px] w-[279px]" data-name="Big Tooltip- Top">
      <div className="absolute flex h-[35.682px] items-center justify-center left-[-10px] top-1/2 translate-y-[-50%] w-[38.921px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[317.486deg] skew-x-[4.954deg]">
          <div className="bg-[#1a1a24] rounded-[4px] size-[26.401px]" />
        </div>
      </div>
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[16px] text-white tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px] mb-0">F02 (密資料)：</p>
        <BigTooltipTopHelper text="說明" text1="：由承辦單位主管判定後，呈處級(含)主管以上核備。" additionalClassNames="mb-0" />
        <p className="leading-[23px] mb-0">
          <br aria-hidden="true" />
          F03 (內部使用資料)：
        </p>
        <BigTooltipTopHelper text="說明：" text1="由承辦人自行判定後，呈處級主管核備。" additionalClassNames="mb-0" />
        <p className="leading-[23px] mb-0">&nbsp;</p>
        <p className="leading-[23px] mb-0">{` F04 (公開資訊)：`}</p>
        <BigTooltipTopHelper text="說明：" text1="可公開於網站之資訊，或上傳至公開資訊觀測站之資訊。" />
      </div>
      <L3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Frame43 />
      <Component3 />
      <BigTooltipTop />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Container3 />
    </div>
  );
}

export default function Frame112() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame10 />
    </div>
  );
}