import svgPaths from "./svg-0w9o5nppde";
import clsx from "clsx";
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.6px]">{text}</p>
      <ChevronRight />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.18)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[636px]">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[26px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 1">
            <line id="Line 5" stroke="var(--stroke-0, #F2F2F2)" strokeOpacity="0.03" x2="602" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        歷年採購類別分析
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[35%] right-[40%] top-1/4">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
          <g id="Group 1171275997">
            <path d={svgPaths.p35ac1680} id="Vector" stroke="var(--stroke-0, #2E2E38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="overflow-clip relative size-[20px]" data-name="箭頭">
      <Group />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[33px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#2e2e38] text-[16px] text-center text-nowrap tracking-[0.48px]">2025</p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Component />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame17 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        1月
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[11px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[6px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[111px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[19px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame31 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        2月
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[4px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[34px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[25px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame34 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3月
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[10px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[52px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame35 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        4月
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[64px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[32px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[26px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame36 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        5月
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[31px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[6px] rounded-[4px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[66px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame37 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        6月
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[15px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[116px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame38 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        7月
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[5px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[51px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame39 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        8月
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[30px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[12px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame40 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        9月
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[18px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[29px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[8px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#272731] content-stretch flex flex-col gap-[12px] items-center opacity-30 relative shrink-0">
      <Frame41 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        10月
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ee762f] h-[11px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ee762f] h-[90px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[13px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ec5242] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#55a3e2] h-[38px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#419d48] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame42 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        11月
      </p>
    </div>
  );
}

function Frame43() {
  return <div className="h-[157px] shrink-0 w-[20px]" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0">
      <Frame43 />
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#c4c4cd] text-[13px] text-center w-[30px]" style={{ fontVariationSettings: "'wght' 700" }}>
        12月
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bottom-[-19px] content-stretch flex items-end justify-between left-[45px] w-[570px]">
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[342px] items-start justify-between left-0 top-0">
      <Text text="100" />
      <Text text="80" />
      <Text text="60" />
      <Text text="40" />
      <Text text="20" />
      <Text text="0" />
      <Frame44 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[364px] relative shrink-0 w-[636px]">
      <div className="absolute bg-[#ffe600] bottom-[-1px] h-[23px] right-[64px] rounded-[20px] w-[43px]" />
      <Frame45 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper additionalClassNames="bg-[#419d48]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統開發
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame />
      <Text1 text="16" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-[#55a3e2]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統維護
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <Text1 text="14" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper additionalClassNames="bg-[#ec5242]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統整合
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Text1 text="7" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper additionalClassNames="bg-[#ffe600]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        設備操作
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame3 />
      <Text1 text="5" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-[#ee762f]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        硬體維護
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <Text1 text="22" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#747480] rounded-[2px] shrink-0 size-[12px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        備份與備援服務
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame5 />
      <Text1 text="7" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col gap-[16px] h-[527.478px] items-start left-0 overflow-clip p-[24px] rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] top-0 w-[700px]">
      <Frame15 />
      <Frame30 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Frame12 />
    </div>
  );
}