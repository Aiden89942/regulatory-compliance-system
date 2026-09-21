import svgPaths from "./svg-mvkrctku3y";
import clsx from "clsx";

function Form3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" />
      <PrimitiveButton />
    </div>
  );
}
type PrimitiveButtonProps = {
  additionalClassNames?: string;
};

function PrimitiveButton({ additionalClassNames = "" }: PrimitiveButtonProps) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text="不符合" additionalClassNames="px-[17px]" />
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
};

function PrimitiveButtonText({ text }: PrimitiveButtonTextProps) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text={text} additionalClassNames="px-[16px]" />
      </div>
    </div>
  );
}
type DatePickerTextProps = {
  text: string;
};

function DatePickerText({ text }: DatePickerTextProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <Info />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_66_2261)" id="info">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_66_2261">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約期限</span>
        </li>
      </ol>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本合約期間自
      </p>
      <DatePickerText text="請選擇年月日" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        起至驗收合格並交付約定文件之日止，共計
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]">0</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        年
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label />
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame2 />
    </div>
  );
}

function Form() {
  return (
    <Form3>
      <Frame9 />
      <PrimitiveDiv />
    </Form3>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約範圍</span>
        </li>
      </ol>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]" data-name="Date Picker">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          請輸入服務範圍
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本專案範圍為
      </p>
      <DatePicker />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統之維護服務
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label1 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame5 />
    </div>
  );
}

function Form1() {
  return (
    <Form3>
      <Frame10 />
      <PrimitiveDiv />
    </Form3>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="3" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務交付日期</span>
        </li>
      </ol>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本專案應於
      </p>
      <DatePickerText text="請選擇年月日" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        約定之期限前完成
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label2 />
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame8 />
    </div>
  );
}

function Form2() {
  return (
    <Form3>
      <Frame11 />
      <PrimitiveDiv />
    </Form3>
  );
}

export default function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Form />
      <Form1 />
      <Form2 />
    </div>
  );
}