function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[25px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-0 text-[#1a1a24] text-[20px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          供應商基本資料
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[192px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12M4 4L12 12" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          公司名稱
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[154.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[22px] left-0 text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          碩網資訊股份有限公司
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[51px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          統一編號
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22px] relative shrink-0 w-[78.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[22px] left-0 not-italic text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap">70364799</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[51px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          產業類別
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[170.641px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[22px] left-0 text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          系統規劃設計 / 軟體批發
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[51px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          負責人
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[38.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[22px] left-0 text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          張*達
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[51px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          公司地址
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22px] relative shrink-0 w-[234.172px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[22px] left-0 text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          新北市新店區北新路1段86號20樓
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[51px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] top-px tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          聯絡電話
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f6f6fa] h-[50px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[22px] relative shrink-0 w-[103.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[22px] left-0 not-italic text-[#1a1a24] text-[15px] top-0 tracking-[0.45px] whitespace-nowrap">02-29122100</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[307px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container6 />
          <Container9 />
          <Container12 />
          <Container15 />
          <Container18 />
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[86px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pr-[24px] relative size-full">
          <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
              <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[23px]">關閉</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container1 />
      <Container4 />
      <Container24 />
    </div>
  );
}