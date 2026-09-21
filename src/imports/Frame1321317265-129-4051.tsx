import { useState, useRef } from "react";

interface Frame3Props {
  supplierName?: string;
  selectedRiskTypes?: string[];
}

function PflLogo({ supplierName }: { supplierName?: string }) {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[2px] relative shrink-0 w-full" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        {supplierName || '碩網資訊股份有限公司'}
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#c4c4cd] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        最後更新：2025/12/02 14:30
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">產業類別</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">資訊軟體服務業</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[4px] items-start relative row-[2] self-start shrink-0" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">公司地址</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">新北市新店區北新路1段86號20樓</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[4px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">設立日期</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">2009年3月</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[4px] items-start relative row-[2] self-start shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">統一編號</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">28445678</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[4px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">資本額</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">NT$ 50,000,000</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[4px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#c4c4cd] text-[14px] top-0 tracking-[-0.1504px]">負責人</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px]">張*達</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[4px] items-start relative row-[2] self-start shrink-0" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] min-h-px min-w-px relative" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Header">
      <Frame />
    </div>
  );
}

function Frame1({ supplierName }: { supplierName?: string }) {
  return (
    <div className="bg-[#1a1a24] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <PflLogo supplierName={supplierName} />
        <Header />
      </div>
    </div>
  );
}

function Button({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? "bg-[#ffe600]" : "bg-[#ececf3]"} content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} 
      data-name="Button"
      onClick={onClick}
    >
      <p className={`font-['EYInterstate:${isActive ? "Bold" : "Regular"}','Noto_Sans_JP:${isActive ? "Bold" : "Regular"}',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]`} style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
        <span className="leading-[23px]" style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
          標案拒往
        </span>
        <span className="leading-[23px]">{` (0)`}</span>
      </p>
    </div>
  );
}

function Button1({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? "bg-[#ffe600]" : "bg-[#ececf3]"} content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} 
      data-name="Button"
      onClick={onClick}
    >
      <p className={`font-['EYInterstate:${isActive ? "Bold" : "Regular"}','Noto_Sans_JP:${isActive ? "Bold" : "Regular"}',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]`} style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
        司法判決 (25)
      </p>
    </div>
  );
}

function Button2({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? "bg-[#ffe600]" : "bg-[#ececf3]"} content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} 
      data-name="Button"
      onClick={onClick}
    >
      <p className={`font-['EYInterstate:${isActive ? "Bold" : "Regular"}','Noto_Sans_JP:${isActive ? "Bold" : "Regular"}',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]`} style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
        政府標案 (200)
      </p>
    </div>
  );
}

function Button3({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? "bg-[#ffe600]" : "bg-[#ececf3]"} content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} 
      data-name="Button"
      onClick={onClick}
    >
      <p className={`font-['EYInterstate:${isActive ? "Bold" : "Regular"}','Noto_Sans_JP:${isActive ? "Bold" : "Regular"}',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]`} style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
        疑似關係 (187)
      </p>
    </div>
  );
}

function Button4({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? "bg-[#ffe600]" : "bg-[#ececf3]"} content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity`} 
      data-name="Button"
      onClick={onClick}
    >
      <p className={`font-['EYInterstate:${isActive ? "Bold" : "Regular"}','Noto_Sans_JP:${isActive ? "Bold" : "Regular"}',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]`} style={{ fontVariationSettings: `'wght' ${isActive ? "700" : "400"}` }}>
        違規裁罰 (0)
      </p>
    </div>
  );
}

function Frame2({ onButtonClick, activeTab }: { onButtonClick?: (tab: string) => void; activeTab?: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button onClick={() => onButtonClick?.("rejected")} isActive={activeTab === "rejected"} />
      <Button1 onClick={() => onButtonClick?.("judicial")} isActive={activeTab === "judicial"} />
      <Button2 onClick={() => onButtonClick?.("government")} isActive={activeTab === "government"} />
      <Button3 onClick={() => onButtonClick?.("relationship")} isActive={activeTab === "relationship"} />
      <Button4 onClick={() => onButtonClick?.("penalty")} isActive={activeTab === "penalty"} />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>{`標案拒往 `}</p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`h-[24px] overflow-clip relative shrink-0 w-full transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`} data-name="Icon">
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

function Button5({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Container8({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Button5 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container7({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container8 onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function RiskCard({ cardRef, isExpanded, onToggle }: { cardRef?: React.RefObject<HTMLDivElement>; isExpanded?: boolean; onToggle?: () => void }) {
  return (
    <div ref={cardRef} className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container7 onToggle={onToggle} isExpanded={isExpanded} />
          {isExpanded && (
            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px]">經查政府採購網，該公司目前信用狀態正常。</p>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>{`司法判決 `}</p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 25 筆
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Icon1({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`h-[24px] overflow-clip relative shrink-0 w-full transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`} data-name="Icon">
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

function Button6({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Container12({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Button6 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container11({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container12 onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-0 top-0 w-[80.578px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">#</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[80.58px] top-0 w-[193.813px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">日期</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[274.39px] top-0 w-[150.828px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">角色</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[425.22px] top-0 w-[342.797px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">案由</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[768.02px] top-0 w-[174.813px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">法院</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[942.83px] top-0 w-[223.172px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">備註</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2023-12-08</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">被告</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">依職權裁定確定訴訟費用額</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺北地院</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定 (勞資延伸)</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2023-12-04</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">被告</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">依職權裁定確定訴訟費用額</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺北地院</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定 (勞資延伸)</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[46px] w-[1166px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">3</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2021-07-21</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">被上訴人</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">給付價金</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">高等法院</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">判決 (民事)</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[92px] w-[1166px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">4</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2020-08-14</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">原告</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">給付價金</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新竹地院</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">碩網勝訴 (判決)</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[138px] w-[1166px]" data-name="Table Row">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">5</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2020-03-12</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">被告</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">履行合約</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新店簡易庭</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[184px] w-[1166px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">6</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2020-01-31</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">被告</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">履行合約</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新店簡易庭</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[230px] w-[1166px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">7</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2022-05-06</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">聲請人</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">公示催告</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺北地院</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[276px] w-[1166px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">8</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2021-11-30</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">聲請人</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">確定訴訟費用額</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新竹地院</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">裁定</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[322px] w-[1166px]" data-name="Table Row">
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">9</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2017-06-27</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">原告</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">給付價金</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新店簡易庭</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">判決</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[368px] w-[1166px]" data-name="Table Row">
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[80.578px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">10</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[46px] left-[80.58px] top-0 w-[193.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2015-08-31</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[46px] left-[274.39px] top-0 w-[150.828px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">原告</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[46px] left-[425.22px] top-0 w-[342.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">給付價金</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[46px] left-[768.02px] top-0 w-[174.813px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">新店簡易庭</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[46px] left-[942.83px] top-0 w-[223.172px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">判決</p>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[414px] w-[1166px]" data-name="Table Row">
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[460px] left-0 top-[45.5px] w-[1166px]" data-name="Table Body">
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
    </div>
  );
}

function Table() {
  return (
    <div className="h-[506px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white opacity-30 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[-0.1504px]">1</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">2</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8px] not-italic text-[#747480] text-[16px] top-0 tracking-[-0.3125px]">...</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[36.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">20</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.016px] relative size-full">
          <Button7 />
          <Button8 />
          <Button9 />
          <Text />
          <Button10 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[257px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#747480] text-[12px] text-center w-[207px] whitespace-pre-wrap">第 1 頁，共 3 頁 (顯示 1-10 / 25 筆)</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Pagination />
      <Paragraph12 />
    </div>
  );
}

function RiskCard1({ cardRef, isExpanded, onToggle }: { cardRef?: React.RefObject<HTMLDivElement>; isExpanded?: boolean; onToggle?: () => void }) {
  return (
    <div ref={cardRef} className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container11 onToggle={onToggle} isExpanded={isExpanded} />
          {isExpanded && (
            <>
              <Table />
              <Container15 />
            </>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
            政府標案
          </span>
          <span className="leading-[normal]">{` `}</span>
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 200 筆
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function Icon4({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`h-[24px] overflow-clip relative shrink-0 w-full transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`} data-name="Icon">
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

function Button12({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon4 isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Container17({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Button12 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container16({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container17 onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-0 top-0 w-[85.094px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">#</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[85.09px] top-0 w-[204.859px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">決標日期</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[289.95px] top-0 w-[209.969px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">機關名稱</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[499.92px] top-0 w-[476.438px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">標案名稱</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[976.36px] top-0 w-[189.641px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">金額 (NT$)</p>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Header">
      <TableRow11 />
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">1</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-12-16</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">立法院</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">115年度國會圖書館網站維護案</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">700,000</p>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-12-15</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺北市政府</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">市政訊息訂閱系統委託資訊-變更</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">270,000</p>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[46px] w-[1166px]" data-name="Table Row">
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">3</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-12-11</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">桃園市政府</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">行動里長系統功能擴充案</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">1,799,925</p>
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[92px] w-[1166px]" data-name="Table Row">
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">4</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-11-21</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">立法院</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">115年度立法院新聞知識管理系統維護</p>
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">1,000,000</p>
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[138px] w-[1166px]" data-name="Table Row">
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">5</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-10-30</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺北市政府</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">市政訊息訂閱系統委託資訊服務</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">280,000</p>
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[184px] w-[1166px]" data-name="Table Row">
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">6</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-10-08</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺灣土地銀行</p>
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">智能客服系統維護服務</p>
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">945,000</p>
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[230px] w-[1166px]" data-name="Table Row">
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">7</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-06-26</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">內政部移民署</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">114至115年智能客服系統建置案</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">5,200,000</p>
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[276px] w-[1166px]" data-name="Table Row">
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">8</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-06-19</p>
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺灣銀行</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">智能客服系統半年維護</p>
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">230,000</p>
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[322px] w-[1166px]" data-name="Table Row">
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
      <TableCell99 />
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">9</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-06-12</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺灣土地銀行</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">生成式AI應用平台</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">6,369,600</p>
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[368px] w-[1166px]" data-name="Table Row">
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[85.094px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">10</p>
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute h-[46px] left-[85.09px] top-0 w-[204.859px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2025-05-29</p>
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute h-[46px] left-[289.95px] top-0 w-[209.969px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">臺灣銀行</p>
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute h-[46px] left-[499.92px] top-0 w-[476.438px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">智能客服語意解析、介面及架構優化</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute h-[46px] left-[976.36px] top-0 w-[189.641px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">15,000,000</p>
    </div>
  );
}

function TableRow21() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[414px] w-[1166px]" data-name="Table Row">
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[460px] left-0 top-[45.5px] w-[1166px]" data-name="Table Body">
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
      <TableRow21 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[506px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white opacity-30 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[-0.1504px]">1</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">2</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8px] not-italic text-[#747480] text-[16px] top-0 tracking-[-0.3125px]">...</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[36.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">20</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Pagination1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.016px] relative size-full">
          <Button13 />
          <Button14 />
          <Button15 />
          <Text1 />
          <Button16 />
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[257px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#747480] text-[12px] text-center w-[207px] whitespace-pre-wrap">第 1 頁，共 20 頁 (顯示 1-10 / 200 筆)</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Pagination1 />
      <Paragraph13 />
    </div>
  );
}

function RiskCard2({ cardRef, isExpanded, onToggle }: { cardRef?: React.RefObject<HTMLDivElement>; isExpanded?: boolean; onToggle?: () => void }) {
  return (
    <div ref={cardRef} className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container16 onToggle={onToggle} isExpanded={isExpanded} />
          {isExpanded && (
            <>
              <Table1 />
              <Container20 />
            </>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
            疑似關係
          </span>
          <span className="leading-[normal]">{` `}</span>
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 187 筆
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

function Icon7({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`h-[24px] overflow-clip relative shrink-0 w-full transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`} data-name="Icon">
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

function Button18({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Container22({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Button18 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container21({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container22 onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-0 top-0 w-[111.188px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">#</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[111.19px] top-0 w-[208.109px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">類型</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[319.3px] top-0 w-[340.563px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">名稱</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute bg-[#f6f6fa] h-[45.5px] left-[659.86px] top-0 w-[506.141px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-[16px] not-italic text-[#747480] text-[14px] top-[12px] tracking-[-0.1504px]">關係說明</p>
    </div>
  );
}

function TableRow22() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute h-[45.5px] left-0 top-0 w-[1166px]" data-name="Table Header">
      <TableRow22 />
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">1</p>
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">法人董事</p>
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">威連科技</p>
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">持股 27.51% (母公司)</p>
    </div>
  );
}

function TableRow23() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-0 w-[1166px]" data-name="Table Row">
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">2</p>
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">負責人</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">張育達</p>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">碩網資訊董事長</p>
    </div>
  );
}

function TableRow24() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[46px] w-[1166px]" data-name="Table Row">
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
      <TableCell117 />
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">3</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">董事</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">愛迪森斯</p>
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">區光穎負責、張育達監察</p>
    </div>
  );
}

function TableRow25() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[92px] w-[1166px]" data-name="Table Row">
      <TableCell118 />
      <TableCell119 />
      <TableCell120 />
      <TableCell121 />
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">4</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">獨立董事</p>
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">瞿志豪</p>
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">碩網獨董，兼任多家投資公司</p>
    </div>
  );
}

function TableRow26() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[138px] w-[1166px]" data-name="Table Row">
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">5</p>
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">副董事長</p>
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">邱仁鈿</p>
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">碩網副董事長</p>
    </div>
  );
}

function TableRow27() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[184px] w-[1166px]" data-name="Table Row">
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">6</p>
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">董事</p>
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">區光穎</p>
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">碩網董事</p>
    </div>
  );
}

function TableRow28() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[230px] w-[1166px]" data-name="Table Row">
      <TableCell130 />
      <TableCell131 />
      <TableCell132 />
      <TableCell133 />
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">7</p>
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">關聯企業</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">創新工業技術移轉</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">獨董瞿志豪兼任董事</p>
    </div>
  );
}

function TableRow29() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[276px] w-[1166px]" data-name="Table Row">
      <TableCell134 />
      <TableCell135 />
      <TableCell136 />
      <TableCell137 />
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">8</p>
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">關聯企業</p>
    </div>
  );
}

function TableCell140() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">安聯材料科技</p>
    </div>
  );
}

function TableCell141() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">獨董瞿志豪兼任董事</p>
    </div>
  );
}

function TableRow30() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[322px] w-[1166px]" data-name="Table Row">
      <TableCell138 />
      <TableCell139 />
      <TableCell140 />
      <TableCell141 />
    </div>
  );
}

function TableCell142() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">9</p>
    </div>
  );
}

function TableCell143() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">關聯企業</p>
    </div>
  );
}

function TableCell144() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">永加利醫學科技</p>
    </div>
  );
}

function TableCell145() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">獨董瞿志豪擔任負責人</p>
    </div>
  );
}

function TableRow31() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[368px] w-[1166px]" data-name="Table Row">
      <TableCell142 />
      <TableCell143 />
      <TableCell144 />
      <TableCell145 />
    </div>
  );
}

function TableCell146() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[111.188px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">10</p>
    </div>
  );
}

function TableCell147() {
  return (
    <div className="absolute h-[46px] left-[111.19px] top-0 w-[208.109px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">關聯企業</p>
    </div>
  );
}

function TableCell148() {
  return (
    <div className="absolute h-[46px] left-[319.3px] top-0 w-[340.563px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">神盾創新管理顧問</p>
    </div>
  );
}

function TableCell149() {
  return (
    <div className="absolute h-[46px] left-[659.86px] top-0 w-[506.141px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#1a1a24] text-[14px] top-[12.5px] tracking-[-0.1504px]">獨董瞿志豪兼任董事</p>
    </div>
  );
}

function TableRow32() {
  return (
    <div className="absolute border-[#ececf3] border-b border-solid h-[46px] left-0 top-[414px] w-[1166px]" data-name="Table Row">
      <TableCell146 />
      <TableCell147 />
      <TableCell148 />
      <TableCell149 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[460px] left-0 top-[45.5px] w-[1166px]" data-name="Table Body">
      <TableRow23 />
      <TableRow24 />
      <TableRow25 />
      <TableRow26 />
      <TableRow27 />
      <TableRow28 />
      <TableRow29 />
      <TableRow30 />
      <TableRow31 />
      <TableRow32 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[506px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader2 />
      <TableBody2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white opacity-30 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[-0.1504px]">1</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">2</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8px] not-italic text-[#747480] text-[16px] top-0 tracking-[-0.3125px]">...</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[36.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[-0.1504px]">20</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Pagination2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.016px] relative size-full">
          <Button19 />
          <Button20 />
          <Button21 />
          <Text2 />
          <Button22 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[257px] relative w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#747480] text-[12px] text-center w-[207px] whitespace-pre-wrap">第 1 頁，共 20 頁 (顯示 1-10 / 200 筆)</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Pagination2 />
      <Paragraph14 />
    </div>
  );
}

function RiskCard3({ cardRef, isExpanded, onToggle }: { cardRef?: React.RefObject<HTMLDivElement>; isExpanded?: boolean; onToggle?: () => void }) {
  return (
    <div ref={cardRef} className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container21 onToggle={onToggle} isExpanded={isExpanded} />
          {isExpanded && (
            <>
              <Table2 />
              <Container25 />
            </>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          違規裁罰
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function Icon10({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`h-[24px] overflow-clip relative shrink-0 w-full transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`} data-name="Icon">
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

function Button24({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon10 isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Container27({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Button24 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container26({ onToggle, isExpanded }: { onToggle?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container27 onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function RiskCard4({ cardRef, isExpanded, onToggle }: { cardRef?: React.RefObject<HTMLDivElement>; isExpanded?: boolean; onToggle?: () => void }) {
  return (
    <div ref={cardRef} className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container26 onToggle={onToggle} isExpanded={isExpanded} />
          {isExpanded && (
            <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px]">查無違規紀錄</p>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

export default function Frame3({ supplierName, selectedRiskTypes = ['all', 'bidding', 'judicial', 'government', 'relationship', 'penalty'] }: Frame3Props = {}) {
  const [activeTab, setActiveTab] = useState("rejected");
  const [expandedCards, setExpandedCards] = useState({
    rejected: true,
    judicial: true,
    government: true,
    relationship: true,
    penalty: true,
  });

  const rejectedRef = useRef<HTMLDivElement>(null);
  const judicialRef = useRef<HTMLDivElement>(null);
  const governmentRef = useRef<HTMLDivElement>(null);
  const relationshipRef = useRef<HTMLDivElement>(null);
  const penaltyRef = useRef<HTMLDivElement>(null);

  // 決定是否顯示特定風險卡片
  const showAll = selectedRiskTypes.includes('all');
  const showBidding = showAll || selectedRiskTypes.includes('bidding');
  const showJudicial = showAll || selectedRiskTypes.includes('judicial');
  const showGovernment = showAll || selectedRiskTypes.includes('government');
  const showRelationship = showAll || selectedRiskTypes.includes('relationship');
  const showPenalty = showAll || selectedRiskTypes.includes('penalty');

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, tabName: string) => {
    setActiveTab(tabName);
    if (ref.current) {
      const headerOffset = 180;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleButtonClick = (tab: string) => {
    switch (tab) {
      case "rejected":
        scrollToSection(rejectedRef, "rejected");
        break;
      case "judicial":
        scrollToSection(judicialRef, "judicial");
        break;
      case "government":
        scrollToSection(governmentRef, "government");
        break;
      case "relationship":
        scrollToSection(relationshipRef, "relationship");
        break;
      case "penalty":
        scrollToSection(penaltyRef, "penalty");
        break;
    }
  };

  const toggleCard = (cardName: keyof typeof expandedCards) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <Frame1 supplierName={supplierName} />
      <Frame2 onButtonClick={handleButtonClick} activeTab={activeTab} />
      {showBidding && <RiskCard cardRef={rejectedRef} isExpanded={expandedCards.rejected} onToggle={() => toggleCard("rejected")} />}
      {showJudicial && <RiskCard1 cardRef={judicialRef} isExpanded={expandedCards.judicial} onToggle={() => toggleCard("judicial")} />}
      {showGovernment && <RiskCard2 cardRef={governmentRef} isExpanded={expandedCards.government} onToggle={() => toggleCard("government")} />}
      {showRelationship && <RiskCard3 cardRef={relationshipRef} isExpanded={expandedCards.relationship} onToggle={() => toggleCard("relationship")} />}
      {showPenalty && <RiskCard4 cardRef={penaltyRef} isExpanded={expandedCards.penalty} onToggle={() => toggleCard("penalty")} />}
    </div>
  );
}