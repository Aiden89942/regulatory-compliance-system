import clsx from "clsx";
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
type TableCellText2Props = {
  text: string;
};

function TableCellText2({ text }: TableCellText2Props) {
  return (
    <Wrapper1>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </Wrapper1>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper>
      {text}
      <span>{`股份有限公司 `}</span>
    </Wrapper>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
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
      <Text1 text={text} />
    </Wrapper2>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <Wrapper3 additionalClassNames="bg-[#ffe600]">
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center text-nowrap">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal] text-nowrap">開案前</p>
        </div>
        <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
          <p className="leading-[normal] text-nowrap">6</p>
        </div>
      </div>
    </Wrapper3>
  );
}

function Frame1() {
  return (
    <Wrapper3>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center text-nowrap">
        <Text text="委託中" />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
          <p className="leading-[normal] text-nowrap">6</p>
        </div>
      </div>
    </Wrapper3>
  );
}

function Frame2() {
  return (
    <Wrapper3>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap">
        <Text text="已結案" additionalClassNames="text-[#707070]" />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#747480] text-[22px]">
          <p className="leading-[normal] text-nowrap">3</p>
        </div>
      </div>
    </Wrapper3>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        資訊服務委外風險評估 (3)
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
          <Button />
          <ButtonText text="填寫供應商風險評估與情資追蹤" />
          <ButtonText text="供應商資料檢核與歸檔 (1)" />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeaderText text="專案名稱" />
      <TableCellText text="2026年度官網視覺化改版專案" />
      <TableCellText text="2026 AI 智能客服系統 v1.0" />
      <TableCellText text="集團人資系統上雲端服務採購案" />
      <TableCellText text="企業資安防護系統升級案" />
      <TableCellText text="商業智慧 (BI) 平台建置案" />
    </div>
  );
}

function TableCell() {
  return <Wrapper>{`奧美廣告股份有限公司 `}</Wrapper>;
}

function TableCell1() {
  return <Wrapper>{`碩網資訊股份有限公司 `}</Wrapper>;
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <TableHeaderText text="申請供應商" />
      <TableCell />
      <TableCell1 />
      <TableCellText1 text="叡揚資訊" />
      <TableCellText1 text="中華電信" />
      <TableCellText2 text="IBM" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[484px]">
      <TableHeaderText text="期限" />
      <TableCellText2 text="2025.11.01" />
      <TableCellText2 text="2025.11.10" />
      <TableCellText2 text="2025.11.12" />
      <TableCellText2 text="2025.11.15" />
      <TableCellText2 text="2025.11.22" />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text="操作" additionalClassNames="justify-center" />
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          編輯
        </p>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">已批准</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[15px] py-[20px] relative size-full">
          <L />
          <L1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader />
      {[...Array(5).keys()].map((_, i) => (
        <Frame8 key={i} />
      ))}
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <Frame4 />
          <Frame3 />
          <Frame6 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-name="供應商進度總覽">
      <Tab />
      <Frame9 />
      <Frame7 />
    </div>
  );
}