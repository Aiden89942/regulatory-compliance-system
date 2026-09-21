function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[2.5px] shrink-0 size-[28px]" data-name="checkbox-input">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]">
          <div aria-hidden="true" className="absolute border-[#cdcdcd] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        全部符合
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#1a1a24] content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative size-full">
      <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] min-h-px min-w-px relative text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        (二) 公司與資訊服務供應商之服務與產品應載明事項：
      </p>
      <Frame1 />
    </div>
  );
}