import svgPaths from "./svg-qyikx8keef";
import clsx from "clsx";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
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

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">{children}</div>
    </div>
  );
}

function Form9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <Wrapper>
      <Text4 text="法令遵循" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type PrimitiveDiv1Props = {
  additionalClassNames?: string;
};

function PrimitiveDiv1({ additionalClassNames = "" }: PrimitiveDiv1Props) {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" additionalClassNames="bg-[#ffe600]" />
      <PrimitiveButtonText text="不符合" additionalClassNames="bg-[rgba(255,255,255,0)]" />
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <Wrapper>
      <Text4 text="資安條款" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <Wrapper>
      <Text4 text="資安條款/保密義務" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type PrimitiveDivProps = {
  additionalClassNames?: string;
};

function PrimitiveDiv({ additionalClassNames = "" }: PrimitiveDivProps) {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" additionalClassNames="bg-[#ffe600]" />
      <PrimitiveButtonText1 text="不符合" />
    </div>
  );
}
type PrimitiveButtonText1Props = {
  text: string;
};

function PrimitiveButtonText1({ text }: PrimitiveButtonText1Props) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </Wrapper1>
    </div>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveButtonText({ text, additionalClassNames = "" }: PrimitiveButtonTextProps) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
          {text}
        </p>
      </Wrapper1>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[80px]">
      <div className="absolute inset-[-1.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 3">
          <path d="M0 1.5H80" id="Vector 1318" stroke="var(--stroke-0, #1A1A24)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper2>
        <circle cx="30" cy="30" fill="var(--fill-0, #2E2E38)" id="Ellipse 4257" r="30" />
      </Wrapper2>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
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
type LTextProps = {
  text: string;
};

function LText({ text }: LTextProps) {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
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
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame7 />
      <Text1 text="風險評估" />
      <Frame8 />
      <Frame9 />
      <Text1 text="管理報表" />
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

function Frame30() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <LText text="新增供應商" />
      </div>
      <Frame30 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame29 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col gap-[32px] items-center pb-[24px] pt-[32px] px-[32px] relative shrink-0 w-[1440px]" data-name="首頁">
      <Frame27 />
      <div className="absolute bottom-0 h-0 left-[779px] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
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
    <Wrapper3>
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[-0.3125px]">新增供應商</p>
    </Wrapper3>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-[1024px]" data-name="麵包屑">
      <TextText text="首頁" />
      <Icon />
      <TextText text="供應商管理" />
      <Icon />
      <Text />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="1" />
      <Text3 text="填寫資訊服務委外風險評估" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="2" />
      <Text3 text="發送資訊供應商風險評估表與情資追蹤" />
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
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商資料檢核與歸檔
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

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="第三個">
      <Helper />
      <Frame6 />
    </div>
  );
}

function Frame26() {
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
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#1a1a24] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
            (二) 公司與資訊服務供應商之服務與產品應載明事項：
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">載明資訊委外服務或產品之智慧財產權及其授權範圍。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame13() {
  return (
    <Wrapper>
      <Text4 text="保證條款" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。 `}</p>
        <p className="mb-0">{`乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔： `}</p>
        <p className="mb-0">{`一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。 `}</p>
        <p className="mb-0">{`二、取得他人授權，使甲方能繼續利用工作項目。 `}</p>
        <p className="mb-0">{`三、於30日內返還甲方就工作項目已給付之費用。 `}</p>
        <p>如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。</p>
      </div>
    </Wrapper>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label />
      <Frame13 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame14 />
    </div>
  );
}

function Form() {
  return (
    <Form9>
      <Frame35 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商如分包予其他供應商應載明(異動亦同)。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame15() {
  return (
    <Wrapper>
      <Text4 text="次承攬禁止/禁止轉分包" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方應自行完成本合約約定之全部工作。除本合約另有約定或經甲方事前書面同意者外，乙方不得將本合約工作之一部或全部委由第三人為之。 `}</p>
        <p className="mb-0">{`乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。 `}</p>
        <p>乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。</p>
      </div>
    </Wrapper>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label1 />
      <Frame15 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame16 />
    </div>
  );
}

function Form1() {
  return (
    <Form9>
      <Frame36 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="3" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入服務與產品之機敏資料保護、授權與認證、安全性更新等。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label2 />
      <Text5 text="乙方之所屬人員對於機敏文件(含個資檔案)之交付，若為電子傳輸時應使用加密機制進行資料或文件之傳遞。" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame17 />
    </div>
  );
}

function Form2() {
  return (
    <Form9>
      <Frame39 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text6 text="乙方之所屬人員如需申請任何甲方之帳號與權限，皆應遵循甲方之相關申請流程，乙方之所屬人員存取及使用範圍應根據職務責任進行限定，包含使用者權限、網路存取規範、作業區域規範，以避免資訊或服務遭未授權修改或誤用。" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame18 />
    </div>
  );
}

function Form3() {
  return (
    <Form9>
      <Frame40 />
      <PrimitiveDiv1 />
    </Form9>
  );
}

function Frame19() {
  return (
    <Wrapper>
      <Text4 text="資安條款" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方交付之軟硬體、系統及文件前，應先執行安全性檢查並確保無內藏惡意程式（如病毒、蠕蟲、特洛伊木馬、後門程式、間諜軟體等）及隱密通道（covert channel），並依甲方之要求而辦理原始碼掃描、程式/系統弱點掃描，提供檢測及掃描後之弱點修補報告；另乙方放置於網際網路之程式應通過黑箱測試並提供測試報告與弱點修補報告，以確保軟硬體、系統及文件無資訊安全風險。
      </p>
    </Wrapper>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame20 />
    </div>
  );
}

function Form4() {
  return (
    <Form9>
      <Frame41 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        4.第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入隱私保護機制(Privacy by design)之要求。
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label3 />
      <Text5 text="乙方提供之產品應提供安全機制以保障甲方機密資料之安全，合約期間乙方亦應以善良管理人之注意義務保管機密資料，並應謹慎存放及處理。" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame21 />
    </div>
  );
}

function Form5() {
  return (
    <Form9>
      <Frame42 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="5" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商服務範圍涉及資通系統開發、維護與監控，應遵循【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label4 />
      <Text7 text="如乙方提供之服務範圍涉及資通系統開發、維護與監控，應遵循證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範及其他相關自律規範等規定。" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame22 />
    </div>
  );
}

function Form6() {
  return (
    <Form9>
      <Frame43 />
      <PrimitiveDiv1 />
    </Form9>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="6" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】第七條 系統與服務獲得十三、公司如委外辦理核心系統開發應將系統發展生命週期各階段安全需求(含機密性、可用性、完整性)納入委外契約。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label5 />
      <Text6 text="乙方執行系統開發時，應滿足甲方系統發展生命週期之相關安全要求。" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame23 />
    </div>
  );
}

function Form7() {
  return (
    <Form9>
      <Frame44 />
      <PrimitiveDiv1 />
    </Form9>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="7" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務範圍涉及使用雲端運算服務，資訊服務供應商應遵循【證券投資信託事業證券投資顧問事業新興科技資通安全自律規範】。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label6 />
      <Text7 text="如乙方提供之服務範圍涉及使用雲端運算服務，應遵循證券投資信託事業證券投資顧問事業新興科技資通安全自律規範及其他相關自律規範等規定。" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame24 />
    </div>
  );
}

function Form8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          <Frame45 />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Form8 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Form />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
      <Frame38 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[1024px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Frame32 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[24px] relative shrink-0 w-full" data-name="Container">
      <Frame34 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Frame25 />
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[20px] items-center justify-between leading-[23px] ml-0 mt-0 relative text-[#ececf3] text-[16px] text-nowrap tracking-[0.48px] w-[300px]" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        完成進度
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] not-italic relative shrink-0">3/2</p>
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="[grid-area:1_/_1] bg-[#ececf3] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px] w-[300px]" data-name="Primitive.div" />;
}

function PrimitiveDiv3() {
  return <div className="[grid-area:1_/_1] bg-[#ffe600] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px] w-[200px]" data-name="Primitive.div" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container2 />
      <PrimitiveDiv2 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[450px]">
      <LText text="下一頁" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1024px]">
      <Group1 />
      <div className="flex flex-row items-center self-stretch">
        <Frame37 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

export default function Frame46() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame10 />
      <Frame33 />
    </div>
  );
}