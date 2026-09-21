import svgPaths from "./svg-bl50k5xhu4";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="leading-[23px]">{children}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_57_111)" id="Icon">
          <path d={svgPaths.p3c7aa800} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p5c2680} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p10261440} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
        <defs>
          <clipPath id="clip0_57_111">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
        <Helper />
        <Wrapper>下載 PDF</Wrapper>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
        <Helper />
        <Wrapper additionalClassNames="text-center">列印</Wrapper>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <L />
        <L1 />
        <X />
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[0px] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        評估表預覽
      </p>
      <Container />
    </div>
  );
}