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

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[33px]">
          <span className="leading-[normal]">發送資訊供應商風險評估表</span>
        </li>
      </ol>
      <ChevronDown />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#d2ebff] content-stretch flex items-center justify-center px-[12px] py-[7px] right-[56px] rounded-[4px] top-1/2 translate-y-[-50%]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#90ceff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] text-nowrap tracking-[-0.3125px]">已回覆</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <Frame />
      <Text />
    </div>
  );
}