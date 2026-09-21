import svgPaths from "./svg-razjr30eji";

function Heart() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="heart">
          <path d={svgPaths.p2aff100} fill="var(--fill-0, #EC5242)" id="Vector" stroke="var(--stroke-1, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[22px] top-[18px]">
      <Heart />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-right tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        追蹤
      </p>
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="heart">
          <path d={svgPaths.pc822c00} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[101px] top-[18px]">
      <Heart1 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        追蹤
      </p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}