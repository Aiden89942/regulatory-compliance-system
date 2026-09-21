import svgPaths from "./svg-k250i9ls5r";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("absolute rounded-[40px] size-[40px] top-0", additionalClassNames)}>{children}</Wrapper1>;
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("absolute left-0 rounded-[40px] size-[40px] top-0", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-center text-nowrap">{text}</p>
    </Wrapper1>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        評估日期
      </p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d={svgPaths.p32f12c00} id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 2V6" id="Vector_3" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px not-italic relative shrink-0 text-[#222] text-[16px] tracking-[0.48px]">2025.12.01</p>
          <Calendar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Form">
      <Label />
      <DatePicker />
    </div>
  );
}

function IconLeft() {
  return (
    <Wrapper2>
      <g id="IconLeft">
        <path d={svgPaths.p86d1680} fill="var(--fill-0, #1A1A24)" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Button() {
  return (
    <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid left-0 rounded-[40px] size-[40px] top-0" data-name="Button">
      <IconLeft />
    </div>
  );
}

function IconRight() {
  return (
    <Wrapper2>
      <g id="IconRight">
        <path d={svgPaths.p3f507b00} fill="var(--fill-0, #1A1A24)" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Button1() {
  return (
    <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid left-[40px] rounded-[40px] size-[40px] top-0" data-name="Button">
      <IconRight />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[40px] left-[200px] top-0 w-[80px]" data-name="Navigation">
      <Button />
      <Button1 />
    </div>
  );
}

function CaptionLabel() {
  return (
    <div className="absolute content-stretch flex h-[31px] items-center left-0 px-[6.5px] py-[2px] top-[4.5px] w-[154.125px]" data-name="CaptionLabel">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap">December 2025</p>
    </div>
  );
}

function Caption() {
  return (
    <div className="h-[40px] relative shrink-0 w-[280px]" data-name="Caption">
      <Navigation />
      <CaptionLabel />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.17px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Su</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[19.92px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Mo</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.14px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Tu</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.86px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">We</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.11px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Th</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.06px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Fr</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[20.39px] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">Sa</p>
    </div>
  );
}

function HeadRow() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[280px]" data-name="HeadRow">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function Head() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[280px]" data-name="Head">
      <HeadRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="30" additionalClassNames="opacity-50" />
    </div>
  );
}

function Button2() {
  return (
    <Wrapper additionalClassNames="bg-[#ffe600] left-[-0.33px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap">1</p>
    </Wrapper>
  );
}

function TableCell1() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="1" />
      <Button2 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="2" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="3" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="4" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="5" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="6" />
    </div>
  );
}

function Row() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[280px]" data-name="Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="7" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="8" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="9" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="10" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="11" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="12" />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="13" />
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute h-[40px] left-0 top-[40px] w-[280px]" data-name="Row">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="14" />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="15" />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="16" />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="17" />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="18" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="19" />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="20" />
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[280px]" data-name="Row">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="21" />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="22" />
    </div>
  );
}

function Button3() {
  return (
    <Wrapper additionalClassNames="left-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-center text-nowrap">23</p>
    </Wrapper>
  );
}

function TableCell23() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="24" />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="25" />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="26" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="27" />
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute h-[40px] left-0 top-[120px] w-[280px]" data-name="Row">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="28" />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute left-[40px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="29" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute left-[80px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="30" />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute left-[120px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="31" />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute left-[160px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="1" additionalClassNames="opacity-50" />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute left-[200px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="2" additionalClassNames="opacity-50" />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute left-[240px] size-[40px] top-0" data-name="Table Cell">
      <ButtonText text="3" additionalClassNames="opacity-50" />
    </div>
  );
}

function Row4() {
  return (
    <div className="absolute h-[40px] left-0 top-[160px] w-[280px]" data-name="Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[200px] left-0 top-[40px] w-[280px]" data-name="Table Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[240px] relative shrink-0 w-[280px]" data-name="Table">
      <Head />
      <TableBody />
    </div>
  );
}

function Month() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start relative shrink-0" data-name="Month">
      <Caption />
      <Table />
    </div>
  );
}

function DatePickerCalendar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[10px] shrink-0" data-name="DatePickerCalendar">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Month />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative size-full">
      <Form />
      <DatePickerCalendar />
    </div>
  );
}