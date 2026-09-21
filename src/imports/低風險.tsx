function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        風險計算結果
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[32px] relative shrink-0 w-[15.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-[8px] not-italic text-[32px] text-center text-nowrap text-white top-[calc(50%-19px)] translate-x-[-50%]">3</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#ff9d00] content-stretch flex items-center justify-center left-[16px] rounded-[1.67772e+07px] size-[64px] top-[16px]" data-name="Container">
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#fef9c2] h-[96px] relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-[48px] text-[#ff9d00] text-[24px] text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 700" }}>
        低風險
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] left-[47.74px] text-[#747480] text-[14px] text-center text-nowrap top-[0.5px] tracking-[0.42px] translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 400" }}>
        風險值總分：3
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[164px] items-start relative shrink-0 w-[96px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function RiskAssessmentWorkflow() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] pt-[48px] px-0 relative shrink-0 w-full" data-name="RiskAssessmentWorkflow">
      <Container4 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 p-[24px] rounded-[8px] top-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <RiskAssessmentWorkflow />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="低風險">
      <Card />
    </div>
  );
}