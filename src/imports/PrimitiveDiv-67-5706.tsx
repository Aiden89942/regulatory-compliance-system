function PrimitiveButton() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="basis-0 bg-[#ffe600] grow min-h-px min-w-px relative shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="content-stretch flex items-center pl-px pr-[1.016px] py-px relative rounded-[8px] size-full" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}