export default function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full">
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