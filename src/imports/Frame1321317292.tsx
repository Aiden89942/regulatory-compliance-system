import svgPaths from "./svg-lokr6gd3kd";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">{children}</div>
    </div>
  );
}
type Button5Props = {
  additionalClassNames?: string;
};

function Button5({ children, additionalClassNames = "" }: React.PropsWithChildren<Button5Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6a7282] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            Intumit 碩網資訊股份有限公司
          </p>
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <DatePicker />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[42px] left-0 rounded-[10px] top-0 w-[422px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px] text-[rgba(10,10,10,0.5)] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          輸入關鍵字或統編搜尋...
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f0dc900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9fafb] h-[67px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[12px] px-[12px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <TextText text="統編: 28475639" />
      <TextText text="軟體開發" />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Intumit 碩網資訊股份有限公司
      </p>
      <Frame2 />
    </div>
  );
}

function Container2() {
  return <div className="bg-[#ec5242] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper>
      <Frame />
      <Text />
    </Wrapper>
  );
}

function Button() {
  return (
    <Button5 additionalClassNames="bg-[#d2ebff]">
      <Frame1 />
    </Button5>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <TextText text="統編: 23525730" />
      <TextText text="雲端服務" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Microsoft 台灣微軟股份有限公司
      </p>
      <Frame3 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#ff9d00] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <Wrapper>
      <Frame4 />
      <Text1 />
    </Wrapper>
  );
}

function Button1() {
  return (
    <Button5>
      <Frame5 />
    </Button5>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <TextText text="統編: 23456789" />
      <TextText text="企業解決方案" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        IBM 台灣國際商業機器股份有限公司
      </p>
      <Frame6 />
    </div>
  );
}

function Container4() {
  return <div className="bg-[#ee762f] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <Wrapper>
      <Frame7 />
      <Text2 />
    </Wrapper>
  );
}

function Button2() {
  return (
    <Button5>
      <Frame8 />
    </Button5>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <TextText text="統編: 22099233" />
      <TextText text="資安防護" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Trend Micro 趨勢科技股份有限公司
      </p>
      <Frame9 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#155dfc] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="bg-[#d2ebff] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#c9e7ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container5 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#155dfc] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        一般資訊
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <Wrapper>
      <Frame10 />
      <Text3 />
    </Wrapper>
  );
}

function Button3() {
  return (
    <Button5>
      <Frame11 />
    </Button5>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <TextText text="統編: 34567890" />
      <TextText text="網路設備" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        Cisco 思科股份有限公司
      </p>
      <Frame12 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#155dfc] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="bg-[#d2ebff] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#c9e7ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container6 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#155dfc] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        一般資訊
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <Wrapper>
      <Frame13 />
      <Text4 />
    </Wrapper>
  );
}

function Button4() {
  return (
    <Button5>
      <Frame14 />
    </Button5>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[384px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white h-[383px] relative rounded-[10px] shrink-0 w-[448px]" data-name="下拉選單">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container7 />
        <div className="absolute bg-[#ececf3] h-[100px] right-[4px] rounded-[8px] top-[74px] w-[8px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
      <Form />
      <Component />
    </div>
  );
}