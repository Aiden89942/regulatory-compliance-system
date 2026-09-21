import svgPaths from "./svg-oh9zpxh3hk";
import clsx from "clsx";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
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
    <div className={clsx("relative size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
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

function Radio1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#ffe600] border-[#ffe600] border-[0.833px] border-solid inset-0 rounded-[20px]" />
      <div className="absolute bg-[#1a1a24] border-[#1a1a24] border-[1.667px] border-solid inset-[30%] rounded-[20px]" />
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
    <Wrapper1>
      <g clipPath="url(#clip0_49_1345)" id="info">
        <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_49_1345">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper1>
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
    <Wrapper>
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
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
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper2>
        <circle cx="30" cy="30" id="Ellipse 4257" r="29.25" stroke="var(--stroke-0, #C4C4CD)" strokeWidth="1.5" />
      </Wrapper2>
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
    <Wrapper4 additionalClassNames={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#747480] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">{text}</p>
    </Wrapper4>
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
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame7 />
      <Text4 text="風險評估" />
      <Frame8 />
      <Frame9 />
      <Text4 text="管理報表" />
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

function Frame42() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <LText text="新增供應商" additionalClassNames="h-full" />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame41 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
        <Frame39 />
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
    <Wrapper3 additionalClassNames="h-[24px] w-[80px]">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">新增供應商</p>
    </Wrapper3>
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
        <circle cx="30" cy="30" fill="var(--fill-0, #FFE600)" id="Ellipse 4257" r="30" />
      </Wrapper2>
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
      <Text5 text="2" />
      <Text6 text="發送資訊供應商風險評估表與情資追蹤" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text5 text="3" />
      <Text6 text="供應商資料檢核與歸檔" />
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

function Frame38() {
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
      <Frame38 />
    </div>
  );
}

function Frame37() {
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

function DatePicker() {
  return (
    <Wrapper>
      <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222] text-[16px] text-nowrap tracking-[0.48px]">2025.11.01</p>
    </Wrapper>
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

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253.333px]" data-name="Form">
      <LabelText text="申請單位" />
      <DatePickerText text="碩網資訊股份有限公司" />
    </div>
  );
}

function Form2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="專案名稱" />
      <DatePickerText text="2026 AI 智能客服系統 v1.0" />
    </div>
  );
}

function Frame45() {
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
      <DatePickerText text="系統開發" />
    </div>
  );
}

function Form4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="作業委外類型" />
      <DatePickerText text="包括資訊系統之資料登錄、處理、輸出、儲存，資訊系統之開發、監控、維護及" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Form3 />
      <Form4 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] w-[824px]" style={{ fontVariationSettings: "'wght' 700" }}>
        一、基本資料
      </p>
      <Frame45 />
      <Frame46 />
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText1 text="核心系統" />
      <TextText2 text="屬於S01之關鍵系統軟體" />
      <TextText2 text="屬於H01之關鍵系統設備" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Helper1 />
      <Frame62 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame12 />
      <Frame61 />
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

function Text1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`屬於H02~H05 `}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Info />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於S02之一般系統軟體" />
      <Text1 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.涉及以下任一軟/硬體類資訊資產：" />
      <Frame67 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame13 />
      <Frame68 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Text2() {
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

function Frame69() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於S03~S04之軟體" />
      <Text2 />
      <TextText1 text="不接觸任何軟/硬體資訊資產" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.涉及以下任一軟/硬體類資訊資產" />
      <Frame69 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame14 />
      <Frame70 />
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

function Frame71() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText1 text="特種個資或可識別當事人之個人資料" />
      <TextText2 text="屬於F01、D01之文件及資料" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Helper1 />
      <Frame71 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame15 />
      <Frame72 />
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

function Frame73() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <TextText2 text="屬於F02~F04" />
      <TextText2 text="屬於D02~D04之文件及資料" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.會存取或保管以下任一：" />
      <Frame73 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame16 />
      <Frame74 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.不會存取或保管任何文件及資料" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame17 />
      <Frame76 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">供應商會存取之資料(單選)</span>
        </li>
      </ol>
      <Frame49 />
      <Frame75 />
      <Frame77 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1. 供應商涉及之資訊資產(單選)
      </p>
      <Frame48 />
      <Frame60 />
      <Frame51 />
      <Frame55 />
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

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="A.透過網際網路與國泰投信進行傳輸連線" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame18 />
      <Frame78 />
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

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="B.透過封閉網路或加密網路與國泰投信進行傳輸連線(如：專線、VPN、VDI等)" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame19 />
      <Frame79 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text7 text="C.不會與國泰投信進行任何外部傳輸連線" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame20 />
      <Frame81 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3. 供應商與國泰投信之間傳輸連線方式(單選)
      </p>
      <Frame50 />
      <Frame80 />
      <Frame82 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        二、評估參考指標
      </p>
      <Frame47 />
      <Frame56 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame57() {
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

function Frame58() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame22 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        1. 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?
      </p>
      <Frame59 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame24 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame25 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        2. 是否已考量資訊服務委外事項之可行性?
      </p>
      <Frame85 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame26 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame27 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        3. 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?
      </p>
      <Frame89 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame91() {
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
      <Radio1 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame29 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        4. 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?
      </p>
      <Frame93 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame30 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
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

function Frame95() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame31 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        5. 是否考量潛在供應商過度集中之可能性?
      </p>
      <Frame96 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Radio1 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame32 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
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

function Frame98() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <Frame33 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        否
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        6. 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？
      </p>
      <Frame99 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        三、可行性評估（請勾選是/否）
      </p>
      <Frame23 />
      <Frame86 />
      <Frame90 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Form5() {
  return (
    <div className="bg-white h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            無
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame64() {
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
      <Frame66 />
      <Frame65 />
      <Frame63 />
      <Frame64 />
      <RiskAssessmentWorkflow />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame11 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        風險計算結果
      </p>
    </div>
  );
}

function Text3() {
  return (
    <Wrapper3 additionalClassNames="h-[32px] w-[15.234px]">
      <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-[8px] not-italic text-[32px] text-center text-nowrap text-white top-[calc(50%-19px)] translate-x-[-50%]">1</p>
    </Wrapper3>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#ff9d00] content-stretch flex items-center justify-center left-[16px] rounded-[1.67772e+07px] size-[64px] top-[16px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fef9c2] h-[96px] relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-[48px] text-[#ff9d00] text-[24px] text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 700" }}>
        低風險
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] left-[47.74px] text-[#747480] text-[14px] text-center text-nowrap top-[0.5px] tracking-[0.42px] translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 400" }}>
        風險值總分：1
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[164px] items-start relative shrink-0 w-[96px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function RiskAssessmentWorkflow1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] pt-[48px] px-0 relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Container7 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[24px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame35 />
      <RiskAssessmentWorkflow1 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <Wrapper1 additionalClassNames="shrink-0">
      <g id="chevron-right">
        <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </g>
    </Wrapper1>
  );
}

function L() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[12px] relative rounded-[8px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">匯出檔案</p>
      </div>
      <ChevronRight1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <L />
      <LText text="下一步" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function RiskAssessmentWorkflow2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[320px]" data-name="RiskAssessmentWorkflow">
      <Card />
      <Frame36 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1200px]" data-name="資訊服務委外風險評估">
      <Frame34 />
      <RiskAssessmentWorkflow2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Frame37 />
      <Component3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Container8 />
    </div>
  );
}

export default function Frame100() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame10 />
    </div>
  );
}