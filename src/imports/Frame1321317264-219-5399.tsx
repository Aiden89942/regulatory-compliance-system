function ChevronDown() {
  return (
    <div className="relative size-[24px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        最後更新：2025/12/02 14:30
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[22px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[33px] whitespace-pre-wrap">
          <span className="leading-[normal]">情資追蹤</span>
        </li>
      </ol>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          全部 (87)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          即時情資 (3)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          標案拒往 (0)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          司法判決 (0)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          政府標案 (0)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          疑似關係 (81)
        </p>
      </div>
      <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          違規裁罰 (0)
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>{`即時情資 (3) `}</p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[130px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        情資類別
      </p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        偵測時間
      </p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        來源/頻道
      </p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            標題與摘要內容
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[120px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        操作
      </p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
        <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          負面消息
        </p>
      </div>
      <div className="-translate-y-1/2 absolute left-[9px] size-[8px] top-[calc(50%+0.25px)]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="4" />
        </svg>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/03/18</p>
        <p>14:00</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] min-w-full not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]">iThome</p>
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        科技媒體
      </p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網 SmartRobot 雲端服務異常中斷，多家企業客戶受影響
      </p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網資訊旗下 SmartRobot 智能客服平台於凌晨發生服務異常，導致多家銀行與電信業者的線上客服功能中斷約 2 小時。碩網表示已緊急修復，初步判斷為雲端架構擴容時的設定錯誤所致。
      </p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell5 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell2 />
      </div>
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
        <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          負面消息
        </p>
      </div>
      <div className="-translate-y-1/2 absolute left-[9px] size-[8px] top-[calc(50%+0.25px)]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="4" />
        </svg>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/02/15</p>
        <p>09:00</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        工商時報
      </p>
      <p className="flex-[1_0_0] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        財經媒體
      </p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網資訊興櫃股價單日跌幅達 8%，市場關注 AI 產品競爭壓力
      </p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網資訊（7547）興櫃股價單日重挫 8%，法人指出主因為國際大廠 AI 聊天機器人產品強勢進入台灣市場，對碩網 SmartRobot 構成直接競爭壓力，加上近期營收成長放緩，引發投資人信心動搖。
      </p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell11 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell8 />
      </div>
      <TableCell9 />
      <TableCell10 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Cell">
      <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
        <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          資安事件
        </p>
      </div>
      <div className="-translate-y-1/2 absolute left-[9px] size-[8px] top-[calc(50%+0.25px)]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EC5242)" id="Ellipse 4303" r="4" />
        </svg>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/02/14</p>
        <p>08:30</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        數位時代
      </p>
      <p className="flex-[1_0_0] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        科技媒體
      </p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        碩網資訊客戶反映 API Gateway 回應延遲，部分服務中斷逾 30 分鐘
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        多家採用碩網 SmartKMS 知識管理系統的企業客戶反映，API Gateway 在尖峰時段回應延遲嚴重，部分客戶的內部知識庫搜尋功能中斷逾 30 分鐘。碩網表示已啟動緊急流量調配機制，正進行根因分析。
      </p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container9 />
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell17 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell14 />
      </div>
      <TableCell15 />
      <TableCell16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dbdbdb] opacity-50 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        第 1 頁，共 1 頁（顯示 1-10 /3 筆）
      </p>
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[24px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function RiskCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container />
          <Frame5 />
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          標案拒往 (0)
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container16 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Button4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function RiskCard1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container13 />
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">經查政府採購網，該公司目前信用狀態正常。</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          司法判決 (21)
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 21 筆
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Button5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">#</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">日期</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">角色</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">案由</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">備註</p>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow4 />
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell17 />
      <HeaderCell18 />
      <HeaderCell19 />
      <HeaderCell20 />
      <HeaderCell21 />
      <HeaderCell22 />
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell23 />
      <HeaderCell24 />
      <HeaderCell25 />
      <HeaderCell26 />
      <HeaderCell27 />
      <HeaderCell28 />
    </div>
  );
}

function HeaderCell29() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell29 />
      <HeaderCell30 />
      <HeaderCell31 />
      <HeaderCell32 />
      <HeaderCell33 />
      <HeaderCell34 />
    </div>
  );
}

function HeaderCell35() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell35 />
      <HeaderCell36 />
      <HeaderCell37 />
      <HeaderCell38 />
      <HeaderCell39 />
      <HeaderCell40 />
    </div>
  );
}

function HeaderCell41() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell41 />
      <HeaderCell42 />
      <HeaderCell43 />
      <HeaderCell44 />
      <HeaderCell45 />
      <HeaderCell46 />
    </div>
  );
}

function HeaderCell47() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell51() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell47 />
      <HeaderCell48 />
      <HeaderCell49 />
      <HeaderCell50 />
      <HeaderCell51 />
      <HeaderCell52 />
    </div>
  );
}

function HeaderCell53() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell54() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell56() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell57() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell58() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell53 />
      <HeaderCell54 />
      <HeaderCell55 />
      <HeaderCell56 />
      <HeaderCell57 />
      <HeaderCell58 />
    </div>
  );
}

function HeaderCell59() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell60() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell61() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell62() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell63() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell59 />
      <HeaderCell60 />
      <HeaderCell61 />
      <HeaderCell62 />
      <HeaderCell63 />
      <HeaderCell64 />
    </div>
  );
}

function HeaderCell65() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell66() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2023-12-08</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell67() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">被告</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">依職權裁定確定訴訟費用額</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell69() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">臺北地院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell70() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">裁定 (勞資延伸)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell65 />
      <HeaderCell66 />
      <HeaderCell67 />
      <HeaderCell68 />
      <HeaderCell69 />
      <HeaderCell70 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Table3 />
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
    </div>
  );
}

function RiskCard2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container17 />
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          政府標案 (0)
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container24 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Button6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function HeaderCell71() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">#</p>
    </div>
  );
}

function HeaderCell72() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">決標日期</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell73() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">機關名稱</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell74() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">標案名稱</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell75() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap">金額 (NT$)</p>
        </div>
      </div>
    </div>
  );
}

function TableRow15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell71 />
      <HeaderCell72 />
      <HeaderCell73 />
      <HeaderCell74 />
      <HeaderCell75 />
    </div>
  );
}

function Table5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow15 />
    </div>
  );
}

function HeaderCell76() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell77() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell78() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell79() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell80() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell76 />
      <HeaderCell77 />
      <HeaderCell78 />
      <HeaderCell79 />
      <HeaderCell80 />
    </div>
  );
}

function HeaderCell81() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell82() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell83() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell84() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell81 />
      <HeaderCell82 />
      <HeaderCell83 />
      <HeaderCell84 />
      <HeaderCell85 />
    </div>
  );
}

function HeaderCell86() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell87() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell88() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell89() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell90() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell86 />
      <HeaderCell87 />
      <HeaderCell88 />
      <HeaderCell89 />
      <HeaderCell90 />
    </div>
  );
}

function HeaderCell91() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell92() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell93() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell94() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell95() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell91 />
      <HeaderCell92 />
      <HeaderCell93 />
      <HeaderCell94 />
      <HeaderCell95 />
    </div>
  );
}

function HeaderCell96() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell97() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell98() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell99() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell100() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell96 />
      <HeaderCell97 />
      <HeaderCell98 />
      <HeaderCell99 />
      <HeaderCell100 />
    </div>
  );
}

function HeaderCell101() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell102() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell103() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell104() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell105() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell101 />
      <HeaderCell102 />
      <HeaderCell103 />
      <HeaderCell104 />
      <HeaderCell105 />
    </div>
  );
}

function HeaderCell106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell107() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell108() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell109() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell110() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell106 />
      <HeaderCell107 />
      <HeaderCell108 />
      <HeaderCell109 />
      <HeaderCell110 />
    </div>
  );
}

function HeaderCell111() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell112() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell113() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell114() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell115() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell111 />
      <HeaderCell112 />
      <HeaderCell113 />
      <HeaderCell114 />
      <HeaderCell115 />
    </div>
  );
}

function HeaderCell116() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]" data-name="Header Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeaderCell117() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">2025-12-16</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell118() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">立法院</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell119() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">115年度國會圖書館網站維護案</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell120() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">700,000</p>
        </div>
      </div>
    </div>
  );
}

function TableRow24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <HeaderCell116 />
      <HeaderCell117 />
      <HeaderCell118 />
      <HeaderCell119 />
      <HeaderCell120 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Table5 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
      <TableRow21 />
      <TableRow22 />
      <TableRow23 />
      <TableRow24 />
    </div>
  );
}

function RiskCard3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container21 />
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
            疑似關係
          </span>
          <span className="leading-[normal]">{` `}</span>
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 189 筆
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container28 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Button7 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function HeaderCell121() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">#</p>
    </div>
  );
}

function HeaderCell122() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] w-[259px]">公司名稱</p>
    </div>
  );
}

function HeaderCell123() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">營業狀態</p>
    </div>
  );
}

function HeaderCell124() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">負責人</p>
    </div>
  );
}

function HeaderCell125() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">資本額</p>
    </div>
  );
}

function HeaderCell126() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">成立日期</p>
    </div>
  );
}

function HeaderCell127() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] h-[44.5px] min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[13px] pt-[12px] px-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">關係說明</p>
      </div>
    </div>
  );
}

function TableRow25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell121 />
      <HeaderCell122 />
      <HeaderCell123 />
      <HeaderCell124 />
      <HeaderCell125 />
      <HeaderCell126 />
      <HeaderCell127 />
    </div>
  );
}

function HeaderCell128() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">1</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell129() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            愛迪森斯股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0 w-[65.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell130() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function HeaderCell131() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            區光穎
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell132() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">5,500,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell133() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2011-03-14</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell134() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：張育達、區光穎
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow26() {
  return (
    <div className="content-stretch flex h-[85px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell128 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell129 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell130 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell131 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell132 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell133 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell134 />
      </div>
    </div>
  );
}

function HeaderCell135() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">2</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell136() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            慶鴻資通股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0 w-[65.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          非營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell137() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell138() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            邱仁鈧
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell139() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">5,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell140() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2004-06-23</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell141() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：邱仁鈧
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow27() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell135 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell136 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell137 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell138 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell139 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell140 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell141 />
      </div>
    </div>
  );
}

function HeaderCell142() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">3</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell143() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            卓越證券投資顧問股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0 w-[65.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          非營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell144() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell145() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">-</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell146() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">10,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell147() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2003-06-05</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell148() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow28() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell142 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell143 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell144 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell145 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell146 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell147 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell148 />
      </div>
    </div>
  );
}

function HeaderCell149() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">4</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell150() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            巨盟管理顧問股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0 w-[65.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell151() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell152() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell153() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">-</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell154() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2019-07-17</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell155() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow29() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell149 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell150 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell151 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell152 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell153 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell154 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell155 />
      </div>
    </div>
  );
}

function HeaderCell156() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">5</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell157() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            神盾創新管理顧問股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ddffdf] h-[21px] relative rounded-[4px] shrink-0 w-[53.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          非營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell158() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell159() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            羅森洲
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell160() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">30,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell161() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2022-08-29</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell162() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow30() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell156 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell157 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell158 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell159 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell160 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell161 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell162 />
      </div>
    </div>
  );
}

function HeaderCell163() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">6</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell164() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            橡子園顧問有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#ddffdf] h-[21px] relative rounded-[4px] shrink-0 w-[53.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell165() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell166() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell167() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">200,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell168() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2014-03-17</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell169() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow31() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell163 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell164 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell165 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell166 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell167 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell168 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell169 />
      </div>
    </div>
  );
}

function HeaderCell170() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">7</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell171() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            創義達科技股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ddffdf] h-[21px] relative rounded-[4px] shrink-0 w-[53.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell172() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell173() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            潘淮陽
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell174() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">284,970,730</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell175() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2014-03-04</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell176() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow32() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell170 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell171 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell172 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell173 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell174 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell175 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell176 />
      </div>
    </div>
  );
}

function HeaderCell177() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">8</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell178() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            永加利醫學科技股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#ddffdf] h-[21px] relative rounded-[4px] shrink-0 w-[53.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell179() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell180() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell181() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">200,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell182() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2012-04-05</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell183() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow33() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell177 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell178 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell179 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell180 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell181 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell182 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell183 />
      </div>
    </div>
  );
}

function HeaderCell184() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">9</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell185() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            安聯材料科技股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0 w-[65.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell186() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell187() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            陳嘉益
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell188() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">100,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell189() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2018-01-26</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell190() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow34() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell184 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell185 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell186 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell187 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell188 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell189 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell190 />
      </div>
    </div>
  );
}

function HeaderCell191() {
  return (
    <div className="h-full relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">10</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell192() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            創新工業技術移轉股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ddffdf] h-[21px] relative rounded-[4px] shrink-0 w-[53.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          營業中
        </p>
      </div>
    </div>
  );
}

function HeaderCell193() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell194() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            吳政忠
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell195() {
  return (
    <div className="h-full relative shrink-0 w-[140px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2,000,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell196() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1979-11-05</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell197() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同名董監事：瞿志豪
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow35() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell191 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell192 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell193 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell194 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell195 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell196 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell197 />
      </div>
    </div>
  );
}

function Table6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <TableRow25 />
      <TableRow26 />
      <TableRow27 />
      <TableRow28 />
      <TableRow29 />
      <TableRow30 />
      <TableRow31 />
      <TableRow32 />
      <TableRow33 />
      <TableRow34 />
      <TableRow35 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#dbdbdb] opacity-50 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        第 1 頁，共 19 頁（顯示 1-10 / 189 筆）
      </p>
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[24px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function RiskCard4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container25 />
          <Table6 />
          <Container29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
            違規裁罰
          </span>
          <span className="leading-[normal]">{` (0)`}</span>
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container35 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Button13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container33 />
    </div>
  );
}

function RiskCard5() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container32 />
          <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">查無司法判決紀錄。</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative shrink-0 w-full">
      <Table />
      <Table1 />
      <Table2 />
      <Table4 />
      <RiskCard4 />
      <Table7 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <Frame3 />
      <Frame1 />
      <Frame />
    </div>
  );
}