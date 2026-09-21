import svgPaths from "./svg-ejhw4fp45n";

function Icon3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-white w-full">
      <p className="leading-[normal] relative shrink-0 text-[22px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商：碩網資訊股份有限公司
      </p>
      <p className="leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        專案：2026 AI 智能客服系統 v1.0
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16.333px] relative shrink-0 w-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.3333">
        <g id="Icon">
          <path d={svgPaths.pc93b400} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2dfb4280} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        聯絡人：王*明
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <Icon3>
      <path d={svgPaths.p1bb53300} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1857cd00} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon3>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        信箱：wang.daming@supplier.com
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <Icon3>
      <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p2e667900} id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M2 6.66602H14" id="Vector_4" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon3>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        日期：2025/12/22
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[42px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險評估與情資審查報告
      </p>
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#1a1a24] content-stretch flex items-center p-[32px] relative rounded-tl-[8px] rounded-tr-[8px] size-full">
      <Frame1 />
    </div>
  );
}