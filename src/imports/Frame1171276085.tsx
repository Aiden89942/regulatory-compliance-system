export default function Frame() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[6px] items-center justify-center leading-[0] px-[20px] py-[12px] relative size-full text-[#747480] text-center whitespace-nowrap">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">資訊供應商風險評估</p>
      </div>
      <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}