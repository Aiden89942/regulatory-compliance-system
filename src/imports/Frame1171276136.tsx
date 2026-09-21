import svgPaths from "./svg-3fda0rja09";

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

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
      <Heart />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-right tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        追蹤
      </p>
    </div>
  );
}