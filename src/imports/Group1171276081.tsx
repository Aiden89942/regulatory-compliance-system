import svgPaths from "./svg-dvj0xoto9u";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-[90deg]">
        <div className="relative size-[24px]" data-name="chevron-right">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="chevron-right">{children}</g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type Frame1171276486MenuTextProps = {
  text: string;
};

function Frame1171276486MenuText({ text }: Frame1171276486MenuTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type HelperbuttonTextProps = {
  text: string;
};

function HelperbuttonText({ text }: HelperbuttonTextProps) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[16px] relative w-full">
        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px] text-left" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">{text}</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="bell">
          <path d={svgPaths.p3ac08800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p2e82a900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute bottom-[-24px] h-0 w-[110px]", additionalClassNames)}>
      <div className="absolute inset-[-6px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
          <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
        </svg>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper>
      <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Wrapper>
  );
}
type MenuText2Props = {
  text: string;
};

function MenuText2({ text }: MenuText2Props) {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-left text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <Helper />
    </button>
  );
}
type MenuText1Props = {
  text: string;
};

function MenuText1({ text }: MenuText1Props) {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-left text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </button>
  );
}
type MenuTextProps = {
  text: string;
};

function MenuText({ text }: MenuTextProps) {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </button>
  );
}
type PflLogoTextProps = {
  text: string;
};

function PflLogoText({ text }: PflLogoTextProps) {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">{text}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <MenuText text="首頁" />
      <MenuText1 text="風險評估" />
      <MenuText1 text="供應商管理" />
      <MenuText2 text="弱點偵查" />
      <MenuText1 text="管理報表" />
      <Helper1 additionalClassNames="left-[-10.73px]" />
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Text text="99+" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Text1 text="新增供應商" />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame6 />
      <Frame25 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogoText text="SCCG" />
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <MenuText1 text="首頁" />
      <MenuText text="風險評估" />
      <MenuText1 text="供應商管理" />
      <MenuText2 text="弱點偵查" />
      <MenuText1 text="管理報表" />
      <Helper1 additionalClassNames="left-[94.27px]" />
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame1 />
      <Text text="99+" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Text1 text="新增供應商" />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame7 />
      <Frame26 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogoText text="SCCG" />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <MenuText1 text="首頁" />
      <MenuText1 text="風險評估" />
      <MenuText text="供應商管理" />
      <MenuText2 text="弱點偵查" />
      <MenuText1 text="管理報表" />
      <Helper1 additionalClassNames="left-[231.27px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame2 />
      <Text text="99+" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Text1 text="新增供應商" />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame27 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogoText text="SCCG" />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <MenuText1 text="首頁" />
      <MenuText1 text="風險評估" />
      <MenuText1 text="供應商管理" />
      <button className="content-stretch cursor-pointer flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="menu2">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          弱點偵查
        </p>
        <Wrapper>
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </Wrapper>
      </button>
      <Helper1 additionalClassNames="left-[372.27px]" />
      <MenuText1 text="管理報表" />
      <div className="absolute bg-[#1a1a24] content-stretch cursor-pointer flex flex-col items-center px-0 py-[4px] right-[40.73px] rounded-[8px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08)] top-[107px] w-[224px]" data-name="首頁">
        <button className="min-w-[110px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#939393] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <HelperbuttonText text="SBOM 弱點分析" />
        </button>
        <button className="min-w-[110px] relative rounded-[32px] shrink-0 w-full">
          <HelperbuttonText text="情資追蹤" />
        </button>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame3 />
      <Text text="99+" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Text1 text="新增供應商" />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame17 />
      <Frame28 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogoText text="SCCG" />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame1171276486MenuText text="首頁" />
      <Frame1171276486MenuText text="風險評估" />
      <Frame1171276486MenuText text="供應商管理" />
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="menu2">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          弱點偵查
        </p>
        <Helper />
      </div>
      <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="menu">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          管理報表
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame4 />
      <Text text="99+" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Text1 text="新增供應商" />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame21 />
      <Frame29 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogoText text="SCCG" />
      <Frame23 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#2e2e38] content-stretch flex flex-col items-center left-0 pb-[24px] pt-[32px] px-[32px] top-0 w-[1920px]" data-name="首頁/Variant10">
        <Frame5 />
      </div>
      <div className="absolute bg-[#2e2e38] content-stretch flex flex-col items-center left-0 pb-[24px] pt-[32px] px-[32px] top-[442px] w-[1920px]" data-name="首頁/Variant9">
        <Frame8 />
      </div>
      <div className="absolute bg-[#2e2e38] content-stretch flex flex-col items-center left-0 pb-[24px] pt-[32px] px-[32px] top-[918px] w-[1920px]" data-name="首頁/Variant8">
        <Frame16 />
      </div>
      <div className="absolute bg-[#2e2e38] content-stretch flex flex-col items-center left-0 pb-[24px] pt-[32px] px-[32px] top-[1470px] w-[1920px]" data-name="首頁/Variant7">
        <Frame20 />
      </div>
      <div className="absolute bg-[#2e2e38] content-stretch flex flex-col items-center left-0 pb-[24px] pt-[32px] px-[32px] top-[2234px] w-[1920px]" data-name="首頁/Variant6">
        <Frame24 />
      </div>
    </div>
  );
}