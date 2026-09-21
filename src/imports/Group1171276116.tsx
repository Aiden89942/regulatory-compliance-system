function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-0 text-[#1b1b1b] text-[32px] text-nowrap top-0" style={{ fontVariationSettings: "'wght' 700" }}>
        預設
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        資訊服務委外類型
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            請選擇資訊服務委外類型
          </p>
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-[94px] w-[253.33px]" data-name="Form">
      <Label />
      <DatePicker />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <Form />
    </div>
  );
}