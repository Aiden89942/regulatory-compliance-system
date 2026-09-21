function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#747480] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">開案前</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ffe600] flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#2e2e38] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[normal]">委託中</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[#707070] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">已結案</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#747480] text-[22px]">
            <p className="leading-[normal]">3</p>
          </div>
        </div>
      </div>
    </div>
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
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        查核 (5)
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商風險評估與情資追蹤 (3)
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            查核供應商
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            精誠資訊
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            台灣大哥大
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">IBM</p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            勤業眾信
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            程曦資訊 (客服中心)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            查核項目
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            供應商自我風險評表
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`供應商自我風險評表 `}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            供應商自我風險評表
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            實地訪查
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            實地訪查
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <TableHeader1 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            期限
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.01</p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
      <TableHeader2 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            風險等級
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="bg-[#ff9d00] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#ff9d00] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="bg-[#ff9d00] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container2 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#ee762f] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險
      </p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#ec5242] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[141px]">
      <TableHeader3 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
            操作
          </p>
        </div>
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
          <L />
        </div>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
          <L1 />
        </div>
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
          <L2 />
        </div>
      </div>
    </div>
  );
}

function L3() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
          <L3 />
        </div>
      </div>
    </div>
  );
}

function L4() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">產生評估表</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative size-full">
          <L4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]">
      <TableHeader4 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[1360px]" data-name="供應商進度總覽細節">
      <Frame4 />
      <Frame3 />
      <Frame6 />
      <Frame7 />
      <Frame5 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-name="委託中_查核_Step1_有資料">
      <Tab />
      <Frame13 />
      <Component />
    </div>
  );
}