import svgPaths from "./svg-au01occ6jq";
import clsx from "clsx";
type Button4Props = {
  additionalClassNames?: string;
};

function Button4({ children, additionalClassNames = "" }: React.PropsWithChildren<Button4Props>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="leading-[23px]">{children}</p>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Icon2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="Icon">{children}</g>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_56_898)" id="Icon">
        <path d={svgPaths.p2391ae80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M12.5 7.5L7.5 12.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M7.5 7.5L12.5 12.5" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_56_898">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function Icon() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_56_920)" id="Icon">
        <path d={svgPaths.p2391ae80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p10a73380} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_56_920">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}
type TableCellText2Props = {
  text: string;
};

function TableCellText2({ text }: TableCellText2Props) {
  return (
    <div className="h-[70.5px] relative shrink-0 w-[96px]">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] left-[12px] text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] tracking-[0.45px] w-[392px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <div className="h-[70.5px] relative shrink-0 w-[64px]">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-[12px] not-italic text-[#1a1a24] text-[15px] text-nowrap top-[25.25px] tracking-[0.45px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center p-[12px] relative", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 tracking-[0.0703px]">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper1>
      <g clipPath="url(#clip0_58_2368)" id="Icon">
        <path d={svgPaths.p3c7aa800} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <path d={svgPaths.p5c2680} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <path d={svgPaths.p10261440} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </g>
      <defs>
        <clipPath id="clip0_58_2368">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function L() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
        <Helper />
        <Wrapper3>下載 PDF</Wrapper3>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
        <Helper />
        <Wrapper3 additionalClassNames="text-center">列印</Wrapper3>
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

function Container1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[0px] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            評估表預覽
          </p>
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f3f4f6] h-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Frame5() {
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

function Icon3() {
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

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        聯絡人：王*明
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <Icon2>
      <path d={svgPaths.p1bb53300} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1857cd00} id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        信箱：wang.daming@supplier.com
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <Icon2>
      <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p2e667900} id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M2 6.66602H14" id="Vector_4" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Icon5 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        日期：2025/12/22
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[42px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險評估與情資審查報告
      </p>
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#1a1a24] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[32px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[163px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 163">
        <g id="Group 1171276126">
          <circle cx="81.5002" cy="81.5" fill="var(--fill-0, white)" id="Ellipse 4305" r="57.05" />
          <path d={svgPaths.p1610d70} fill="var(--fill-0, #FFE600)" id="Ellipse 4306" />
          <circle cx="81.5002" cy="81.5" fill="var(--fill-0, #1A1A24)" id="Ellipse 4307" r="66.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-0 not-italic text-[48px] text-nowrap text-white top-px">80</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[-23.13px] top-[-29px] w-[62.25px]">
      <Text1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-center text-white tracking-[0.42px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        分
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-[68.88px] top-[64px] w-[62.25px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="absolute left-[10px] size-[200px] top-0" data-name="CircularProgress">
      <Container6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[10px] top-0">
      <CircularProgress />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[28px] py-[16px] relative">
        <Group />
        <Group1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">評估項目總數</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#008236] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">符合項目</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#008236] text-[24px] text-nowrap top-0 tracking-[0.0703px]">13</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <ContainerText text="15" />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 bg-[#f0fdf4] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[16px] pr-[17px] py-[16px] relative w-full">
          <Frame8 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[0.5px] not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">適用項目數</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c10007] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">不符合項目數</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#c10007] text-[24px] text-nowrap top-0 tracking-[0.0703px]">2</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <ContainerText text="15" />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 bg-[#fef2f2] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative w-full">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-px relative w-full">
          <Container11 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        一、資安評估自評結果
      </p>
      <Container17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container18 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <Text text="評估問題" additionalClassNames="w-full" />
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[12px] relative shrink-0 w-[200px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[13px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        判定
      </p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Row">
      <Text text="項次" additionalClassNames="justify-center shrink-0 w-[64px]" />
      <HeaderCell />
      <Text text="供應商回覆" additionalClassNames="justify-center shrink-0 w-[96px]" />
      <HeaderCell1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q7" />
      <TableCellText1 text="若供應商會對國泰投信之資訊資產進行邏輯存取，供應商內部是否有適當之邏輯存取控制措施？" />
      <TableCellText2 text="是" />
      <TableCell />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q7-2" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發，供應商內部是否定義程式開發過程存取權限控制措施？" />
      <TableCellText2 text="是" />
      <TableCell1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon1 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q8" />
      <TableCellText1 text="供應商是否定期對其內部員工執行資訊安全教育訓練？" />
      <TableCellText2 text="否" />
      <TableCell2 />
    </div>
  );
}

function TableCell3() {
  return (
    <Wrapper>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[15px] tracking-[0.45px] w-[392px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商是否能在需要時，接受國泰投信對其提供之服務內容與範圍進行資訊安全查核，並提供相關佐證資料及報告？
      </p>
    </Wrapper>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon1 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q9" />
      <TableCell3 />
      <TableCellText2 text="否" />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q10" />
      <TableCellText1 text="供應商是否已定義變更管理(Change Management)之安全控制措施？(如：系統或組態變更申請及覆核、權限控管、安全測試等流程)" />
      <TableCellText2 text="是" />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q11" />
      <TableCellText1 text="針對供應商所提供之資訊服務，供應商是否定義持續營運計畫？" />
      <TableCellText2 text="否" />
      <TableCell6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q12" />
      <TableCellText1 text="供應商是否有針對其所提供之資訊服務建立資通安全事件應變計畫？(如：紀錄與維護事件狀態、事件通報及處理流程等)" />
      <TableCellText2 text="是" />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q13" />
      <TableCellText1 text="如供應商在此委外服務中會提供國泰投信維運作業，供應商是否有制定維運作業安全控管相關準則/SOP？" />
      <TableCellText2 text="是" />
      <TableCell8 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q14" />
      <TableCellText1 text="供應商是否會對存有國泰投信資料之資訊資產進行保護？(如：設備、硬碟、文件等資產)" />
      <TableCellText2 text="是" />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q15" />
      <TableCellText1 text="若供應商有委託其他廠商或自行代管國泰投信資訊資產，供應商是否會對國泰投信資訊資產存放的實體環境進行保護？" />
      <TableCellText2 text="是" />
      <TableCell10 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q16" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發，供應商是否具備系統安全開發及測試計劃？(如：系統安全分類、系統執行環境、影響到系統安全和隱私的要求等)" />
      <TableCellText2 text="是" />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q17" />
      <TableCellText1 text="若供應商提供之服務內容包含系統開發、系統維護或系統整合，供應商在提供/交付資訊服務前是否會先對系統進行安全性檢測並提供檢測報告？" />
      <TableCellText2 text="是" />
      <TableCell12 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q18" />
      <TableCellText1 text="供應商是否會對提供資訊服務之人員進行安全管理？(如：指派負責人員前，是否有經過人員篩選)。" />
      <TableCellText2 text="是" />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q19" />
      <TableCellText1 text="供應商是否會為其所提供之資訊服務邊界進行保護？(如：於系統內外之通訊接口架設防火牆並限制存取)" />
      <TableCellText2 text="是" />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[25px] relative shrink-0 w-[200px]" data-name="Table Cell">
      <Icon />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCellText text="Q20" />
      <TableCellText1 text="供應商是否會對其分包商/供應商進行風險評估與管理？" />
      <TableCellText2 text="是" />
      <TableCell15 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative w-full">
          <TableRow />
          <TableBody />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        二、資安評估問卷回覆一覽
      </p>
      <Container19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container20 />
    </div>
  );
}

function Icon6() {
  return (
    <Icon2>
      <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Button() {
  return (
    <Button4 additionalClassNames="bg-[#dbdbdb] opacity-50">
      <Icon6 />
    </Button4>
  );
}

function Button1() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center text-nowrap tracking-[0.42px]">1</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center text-nowrap tracking-[0.42px]">2</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <Icon2>
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon2>
  );
}

function Button3() {
  return (
    <Button4 additionalClassNames="bg-white">
      <Icon7 />
    </Button4>
  );
}

function Container21() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        共 2 頁
      </p>
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative w-full">
        <Container22 />
      </div>
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Frame2 />
        <Frame3 />
        <Container23 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[1024px]" data-name="資訊服務委外風險評估">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame1 />
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ececf3] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[24px] relative">
        <Component />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[1080px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Frame />
      <div className="absolute bg-[#c4c4cd] h-[188px] right-[8px] rounded-[10px] top-[100px] w-[6px]" />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center px-0 py-[140px] relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <div className="absolute bg-[rgba(0,0,0,0.75)] h-[2391px] left-1/2 top-0 translate-x-[-50%] w-[1920px]" />
      <Container24 />
    </div>
  );
}