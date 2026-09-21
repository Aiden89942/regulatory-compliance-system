import svgPaths from "./svg-qto1uo1sar";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="leading-[23px]">{children}</p>
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

function Info() {
  return (
    <div className="relative size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
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
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_49_3676)" id="Icon">
          <path d={svgPaths.p3c7aa800} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p5c2680} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p10261440} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
        <defs>
          <clipPath id="clip0_49_3676">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
        <Helper />
        <Wrapper>下載 PDF</Wrapper>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
        <Helper />
        <Wrapper additionalClassNames="text-center">列印</Wrapper>
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

function Container1() {
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

function Container2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[0px] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            評估表預覽
          </p>
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f3f4f6] h-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Frame1() {
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
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">2026/01/01</p>
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
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網資訊股份有限公司
      </p>
    </div>
  );
}

function Form1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="申請單位" />
      <DatePicker1 />
    </div>
  );
}

function DatePicker2() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        2026 AI 智能客服系統 v1.0
      </p>
    </div>
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Form />
      <Form1 />
      <Form2 />
    </div>
  );
}

function DatePicker3() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統開發
      </p>
    </div>
  );
}

function Form3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[304px]" data-name="Form">
      <LabelText text="資訊服務委外類型" />
      <DatePicker3 />
    </div>
  );
}

function DatePicker4() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        包括資訊系統之資料登錄、處理、輸出、儲存，資訊系統之開發、監控、維護及辦理業務涉及資料處理之後勤作業
      </p>
    </div>
  );
}

function Form4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="作業委外類型" />
      <DatePicker4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Form3 />
      <Form4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] h-[24px] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] w-[824px]" style={{ fontVariationSettings: "'wght' 700" }}>
        一、基本資料
      </p>
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        屬於S03~S04之軟體
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Info />
        </div>
      </div>
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

function Text3() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        不接觸任何軟/硬體資訊資產
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text text="C.涉及以下任一軟/硬體類資訊資產" />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text text="C.不會存取或保管任何文件及資料" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <ol className="block font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" start="2" style={{ fontVariationSettings: "'wght' 400" }}>
        <li className="ms-[21px]">
          <span className="leading-[20px]">供應商會存取之資料</span>
        </li>
      </ol>
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        1. 供應商涉及之資訊資產
      </p>
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Text text="C.不會與國泰投信進行任何外部傳輸連線" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        3. 供應商與國泰投信之間傳輸連線方式
      </p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        二、評估參考指標
      </p>
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        1. 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?
      </p>
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        2. 是否已考量資訊服務委外事項之可行性?
      </p>
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        3. 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?
      </p>
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        4. 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?
      </p>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        5. 是否考量潛在供應商過度集中之可能性?
      </p>
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        是
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        6. 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？
      </p>
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        三、可行性評估
      </p>
      <Frame2 />
      <Frame23 />
      <Frame27 />
      <Frame30 />
      <Frame33 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1a1a24] text-nowrap w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        四、補充說明
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        無
      </p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        風險計算結果
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[9.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-[5.69px] not-italic text-[21px] text-center text-nowrap text-white top-[calc(50%-12.47px)] translate-x-[-50%]">1</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#ff9d00] content-stretch flex items-center justify-center left-[10.5px] rounded-[1.101e+07px] size-[42px] top-[10.5px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fff487] relative rounded-[1.101e+07px] shrink-0 size-[63px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Paragraph />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[96px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function RiskAssessmentWorkflow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-[#fff8b5] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <RiskAssessmentWorkflow />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start relative shrink-0 w-[177px]" data-name="Container">
      <PrimitiveLabel />
      <Container9 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        部室主管簽章
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Container />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        單位內供應商業務負責人簽章
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <Container />
    </div>
  );
}

function RiskAssessmentWorkflow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <div className="flex flex-row items-center self-stretch">
        <Container10 />
      </div>
      <Container11 />
      <Container12 />
    </div>
  );
}

function Frame5() {
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
        <Frame6 />
        <Frame18 />
        <Frame37 />
        <Frame38 />
        <RiskAssessmentWorkflow1 />
        <Frame5 />
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

function Container13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-1/2 overflow-clip rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Container">
      <Container2 />
      <Container3 />
      <Frame />
      <div className="absolute bg-[#c4c4cd] h-[188px] right-[8px] rounded-[10px] top-[100px] w-[6px]" />
    </div>
  );
}

export default function Frame26() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <div className="absolute bg-[rgba(0,0,0,0.75)] h-[2224px] left-1/2 top-0 translate-x-[-50%] w-[1920px]" />
      <Container13 />
    </div>
  );
}