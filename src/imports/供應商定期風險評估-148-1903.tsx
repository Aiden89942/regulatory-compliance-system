import svgPaths from "./svg-jikfv3o8tb";

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">系統弱點掃描</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffe600] flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[normal]">供應商定期風險評估</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
            <p className="leading-[normal]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-[#747480] text-center whitespace-nowrap">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[normal]">供應商情資</p>
          </div>
          <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
            <p className="leading-[normal]">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame4 />
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        全部 (3)
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        待補件 (1)
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已完成 (1)
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期 (1)
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
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
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
            供應商名稱
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            中菲行國際物流
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            中華電信
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            Appier 沛星互動科技
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
      <TableHeader />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
            專案名稱
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            MyDimerco 貨運管理系統
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            hicloud 雲端服務 API
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            客戶數據平台 (CDP)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
      <TableHeader1 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
            期限
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#ec5242] text-[16px] text-center tracking-[0.48px]">2025.11.01</p>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]">2025.11.10</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
      <TableHeader2 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
            補件描述
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#ec5242] text-[16px] tracking-[0.48px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
            27001 證書已逾期
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            附件二(架構圖) 模糊無法辨識防火牆節點
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            缺少資安演練紀錄
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
      <TableHeader3 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
            審核狀態
          </p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 1171276096">
          <circle cx="7" cy="7" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="7" />
          <g id="Group 1171276093">
            <path d={svgPaths.p2bbd3a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d={svgPaths.p240ac80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ec5242] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已逾期
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group1 />
      <Frame />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-1/2 right-[49.95%] top-1/4">
      <div className="absolute inset-[-8%_-0.56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.127 8.12">
          <g id="Group 1171276093">
            <path d="M0.56 0.56L0.56 5.46" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M0.56 7.56H0.567" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-1/4 contents left-1/2 right-[49.95%] top-1/4">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <div className="absolute aspect-[22/22] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #EE762F)" id="Ellipse 4303" r="7" />
        </svg>
      </div>
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        待補件
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group2 />
      <Frame1 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 1171276096">
          <circle cx="7" cy="7" fill="var(--fill-0, #419D48)" id="Ellipse 4303" r="7" />
          <path d={svgPaths.p21ec7f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        已完成
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <Group4 />
      <Frame2 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[15px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader4 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
            操作
          </p>
        </div>
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          查看
        </p>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">通知供應商補件</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
          <L />
          <L1 />
        </div>
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          查看
        </p>
      </div>
    </div>
  );
}

function L3() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">通知供應商補件</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
          <L2 />
          <L3 />
        </div>
      </div>
    </div>
  );
}

function L4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          查看
        </p>
      </div>
    </div>
  );
}

function Frame17() {
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableHeader5 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative shrink-0 w-[1360px]" data-name="供應商缺失補件進度追蹤 下方列表">
      <Frame14 />
      <Frame11 />
      <Frame13 />
      <Frame10 />
      <Frame9 />
      <Frame12 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] size-full" data-name="供應商定期風險評估">
      <Tab />
      <Frame18 />
      <Component1 />
    </div>
  );
}