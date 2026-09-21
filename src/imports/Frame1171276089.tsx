export default function Frame() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[6px] items-center justify-center leading-[0] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center whitespace-nowrap">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">{`資訊服務委外風險評估 `}</p>
      </div>
      <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}