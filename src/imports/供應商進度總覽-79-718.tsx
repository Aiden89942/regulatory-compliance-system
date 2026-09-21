import svgPaths from "./svg-f10cv90dgb";
import clsx from "clsx";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">{children}</div>
    </Wrapper2>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {children}
      </p>
    </Wrapper1>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper1>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </Wrapper1>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderTextProps = {
  text: string;
};

function TableHeaderText({ text }: TableHeaderTextProps) {
  return (
    <Wrapper2 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <Text text={text} />
    </Wrapper2>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] relative size-full text-[#747480] text-center text-nowrap", additionalClassNames)}>
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
        <p className="leading-[normal] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper3>
      <Helper text="開案前" text1="6" additionalClassNames="py-[16px]" />
    </Wrapper3>
  );
}

function Frame2() {
  return (
    <Wrapper3>
      <Helper text="委託中" text1="2" additionalClassNames="py-[12px]" />
    </Wrapper3>
  );
}

function Frame3() {
  return (
    <Wrapper3 additionalClassNames="bg-[#ffe600] rounded-[4px]">
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#2e2e38] text-center text-nowrap">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal] text-nowrap">已結案</p>
        </div>
        <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
          <p className="leading-[normal] text-nowrap">3</p>
        </div>
      </div>
    </Wrapper3>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function AlertCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alert-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alert-circle">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #8F8100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f8100] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        結案供應商均需提供「權限管理」與「資料移除」證明文件，請窗口仔細確認
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[24px] py-[16px] relative w-full">
          <AlertCircle />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <Wrapper1>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        AI 客服系統導入暨供應商招標案
      </p>
    </Wrapper1>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeaderText text="結案供應商" />
      <TableCellText text="2026年度官網視覺化改版專案" />
      <TableCell />
      <TableCellText text="集團人資系統上雲端服務採購案" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
      <TableHeaderText text="合約到期日" />
      <TableCellText1 text="2025.11.31" />
      <TableCellText1 text="2025.12.12" />
      <TableCellText1 text="2025.12.18" />
    </div>
  );
}

function TableCell1() {
  return <Wrapper>{`請於 2025.12.12 前提供供應商「權限管理」與「資料移除」證明文件 `}</Wrapper>;
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[693px]">
      <TableHeaderText text="備註" />
      <TableCellText text="請於 2025.11.31 前提供供應商「權限管理」與「資料移除」證明文件" />
      <TableCell1 />
      <TableCellText text="請於 2025.12.18 前提供供應商「權限管理」與「資料移除」證明文件" />
    </div>
  );
}

function TableHeader() {
  return (
    <Wrapper4 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <Text text="操作" additionalClassNames="justify-center" />
    </Wrapper4>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 bg-white grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">供應商已完成</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <Wrapper4 additionalClassNames="bg-white h-[63px]">
      <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
        <TableCell2 />
        <L />
      </div>
    </Wrapper4>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[146px]">
      <TableHeader />
      {[...Array(3).keys()].map((_, i) => (
        <Frame13 key={i} />
      ))}
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <Frame9 />
          <Frame11 />
          <Frame8 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-name="供應商進度總覽">
      <Tab />
      <Frame6 />
      <Frame12 />
    </div>
  );
}