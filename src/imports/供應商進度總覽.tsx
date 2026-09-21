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

function TableCell1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2 additionalClassNames="bg-white h-[63px]">
      <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">{children}</div>
    </Wrapper2>
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
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type TableHeaderText1Props = {
  text: string;
};

function TableHeaderText1({ text }: TableHeaderText1Props) {
  return (
    <Wrapper2 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <Text2 text={text} />
    </Wrapper2>
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
type TableHeaderTextProps = {
  text: string;
};

function TableHeaderText({ text }: TableHeaderTextProps) {
  return (
    <Wrapper2 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <div className="content-stretch flex items-center p-[15px] relative size-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
          {text}
        </p>
      </div>
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
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <Wrapper3>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#747480] text-center text-nowrap">
        <Text1 text="開案前" />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
          <p className="leading-[normal] text-nowrap">6</p>
        </div>
      </div>
    </Wrapper3>
  );
}

function Frame1() {
  return (
    <Wrapper3 additionalClassNames="bg-[#ffe600] rounded-[4px]">
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#2e2e38] text-center text-nowrap">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal] text-nowrap">委託中</p>
        </div>
        <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
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
        <Text1 text="已結案" additionalClassNames="text-[#707070]" />
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
      <p className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        查核 (5)
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
          <Button />
          <ButtonText text="供應商的問券回覆 (1)" />
          <ButtonText text="供應商的情資追蹤 (0)" />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeaderText text="查核供應商" />
      <TableCellText text="精誠資訊" />
      <TableCellText text="台灣大哥大" />
      <TableCellText1 text="IBM" />
      <TableCellText text="勤業眾信" />
      <TableCellText text="程曦資訊 (客服中心)" />
    </div>
  );
}

function TableCell() {
  return <Wrapper>{`供應商自我風險評表 `}</Wrapper>;
}

function TableCell2() {
  return (
    <Wrapper1>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        實地訪查
      </p>
    </Wrapper1>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <TableHeaderText text="查核項目" />
      <TableCellText text="供應商自我風險評表" />
      <TableCell />
      <TableCellText text="供應商自我風險評表" />
      {[...Array(2).keys()].map((_, i) => (
        <TableCell2 key={i} />
      ))}
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
      <TableHeaderText1 text="期限" />
      <TableCellText1 text="2025.11.01" />
      {[...Array(4).keys()].map((_, i) => (
        <TableCellText1 text="2025.11.10" />
      ))}
    </div>
  );
}

function Container() {
  return <div className="bg-[#ff9d00] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function TableCell3() {
  return (
    <TableCell1>
      <Text />
    </TableCell1>
  );
}

function Container1() {
  return <div className="bg-[#ee762f] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險
      </p>
    </div>
  );
}

function TableCell4() {
  return (
    <TableCell1>
      <Text3 />
    </TableCell1>
  );
}

function Container2() {
  return <div className="bg-[#ec5242] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <TableCell1>
      <Text4 />
    </TableCell1>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[141px]">
      <TableHeaderText1 text="風險等級" />
      {[...Array(3).keys()].map((_, i) => (
        <TableCell3 key={i} />
      ))}
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <Wrapper4 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <Text2 text="操作" additionalClassNames="justify-center" />
    </Wrapper4>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <Wrapper4 additionalClassNames="bg-white h-[63px]">
      <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
        <L />
      </div>
    </Wrapper4>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]">
      <TableHeader />
      {[...Array(5).keys()].map((_, i) => (
        <Frame9 key={i} />
      ))}
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <Frame4 />
          <Frame3 />
          <Frame6 />
          <Frame7 />
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
      <Frame10 />
      <Frame8 />
    </div>
  );
}