import svgPaths from "./svg-zh9y3xclvg";

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        評估日期
      </p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-nowrap tracking-[0.48px]">2025.12.01</p>
          <Calendar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Form">
      <Label />
      <DatePicker />
    </div>
  );
}