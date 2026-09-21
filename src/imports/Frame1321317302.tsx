import svgPaths from "./svg-i3frtj32nz";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function DatePicker3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function ChevronDown() {
  return (
    <Wrapper>
      <g id="chevron-down">
        <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#ddffdf] content-stretch flex items-center justify-center px-[12px] py-[7px] right-[32px] rounded-[4px] top-1/2 translate-y-[-50%]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#adffb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#419d48] text-[16px] text-nowrap tracking-[-0.3125px]">已發送等待供應商回覆</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[33px]">
          <span className="leading-[normal]">發送資訊供應商風險評估表</span>
        </li>
      </ol>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown />
        </div>
      </div>
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統將發送「資訊供應商風險評估表」至下方聯絡人信箱，請確認收件資訊是否正確。
      </p>
    </div>
  );
}

function DatePicker() {
  return (
    <DatePicker3>
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        王*明
      </p>
    </DatePicker3>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[203px]" data-name="Form">
      <LabelText text="收件對象" />
      <DatePicker />
    </div>
  );
}

function DatePicker1() {
  return (
    <DatePicker3>
      <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1a24] text-[#222] text-[16px] text-nowrap tracking-[0.48px]"> wang.daming@supplier-company.com</p>
    </DatePicker3>
  );
}

function Form1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="聯絡信箱" />
      <DatePicker1 />
    </div>
  );
}

function Calendar() {
  return (
    <Wrapper additionalClassNames="shrink-0">
      <g id="calendar">
        <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function DatePicker2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-nowrap tracking-[0.48px]">2025.12.15</p>
          <Calendar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Form2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <LabelText text="填寫截止日" />
      <DatePicker2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Form />
      <Form1 />
      <Form2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">重新發送</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <L />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 976 1">
            <path d="M0 0.5H976" id="Vector 1343" stroke="var(--stroke-0, #ECECF3)" />
          </svg>
        </div>
      </div>
      <Frame />
      <Frame3 />
      <Frame1 />
    </div>
  );
}