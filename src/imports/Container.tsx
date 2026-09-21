import svgPaths from "./svg-gcvzj5atpx";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Icon3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}

function ChevronRight() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="chevron-right">
        <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function Icon() {
  return (
    <Icon3>
      <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon3>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險組件已偵測到
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[100px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec5242] text-[24px] text-center text-nowrap">1</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        個
      </p>
      <ChevronRight />
    </div>
  );
}

function Frame2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('component-detail');
    }
  };

  return (
    <div 
      className="bg-[#ffe2e2] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper1>
        <Frame4 />
        <Frame3 />
      </Wrapper1>
    </div>
  );
}

function Icon1() {
  return (
    <Icon3>
      <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon3>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險組件已偵測到
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[100px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[24px] text-center text-nowrap">12</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        個
      </p>
      <ChevronRight />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper1>
        <Frame6 />
        <Frame7 />
      </Wrapper1>
    </div>
  );
}

function Icon2() {
  return (
    <Icon3>
      <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #FF9D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #FF9D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #FF9D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon3>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險組件已偵測到
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[100px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff9d00] text-[24px] text-center text-nowrap">8</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        個
      </p>
      <ChevronRight />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#fff8b5] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper1>
        <Frame9 />
        <Frame10 />
      </Wrapper1>
    </div>
  );
}

function Frame5({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[400px]">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        SBOM 弱點分析完成
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        以下為本次掃描之弱點檢測摘要：
      </p>
      <Frame2 onNavigate={onNavigate} />
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Frame1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <div className="h-[140px] relative shrink-0 w-[150px] flex items-center justify-center" data-name="shutterstock_2606011019 [轉換]-01 2">
        <svg className="size-[80px]" fill="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" stroke="#419D48" strokeWidth="4" />
          <path d="M24 40L36 52L56 28" stroke="#419D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <Frame5 onNavigate={onNavigate} />
    </div>
  );
}

function Frame({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame1 onNavigate={onNavigate} />
      <p className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline" style={{ fontVariationSettings: "'wght' 400" }}>
        查看分析紀錄
      </p>
    </div>
  );
}

function X() {
  return (
    <Wrapper additionalClassNames="absolute right-[20px] top-[20px]">
      <g id="x">
        <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

export default function Container({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center p-[32px] relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Frame onNavigate={onNavigate} />
      <X />
    </div>
  );
}