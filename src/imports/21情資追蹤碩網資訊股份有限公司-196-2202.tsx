import svgPaths from "./svg-iyvzmearku";

function PflLogo() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">SCCG</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 w-[112px]">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        風險評估
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商管理
      </p>
      <div className="-translate-x-1/2 absolute bottom-[-32px] h-0 left-[calc(50%+0.77px)] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵查
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 w-[112px]">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        管理報表
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 w-[142px]">
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        快速情資查詢
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
      <Frame5 />
      <Frame3 />
      <Frame6 />
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Bell() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.37px)] size-[38px] top-1/2" data-name="bell">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="bell">
          <path d={svgPaths.p360c70e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p29e38a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.42px] whitespace-nowrap">99+</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#ffe600] h-full min-w-[110px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] px-[20px] py-[16px] relative">
              <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                <p className="leading-[normal]">新增供應商</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame29 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1067.267px]">
      <Frame26 />
      <Frame30 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame28 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center leading-[23px] px-[48px] py-[16px] relative text-[#ec5242] text-[16px] tracking-[0.48px] w-full whitespace-nowrap">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 700" }}>
            新加坡商認和科技有限公司疑似為中資企業
          </p>
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-right underline" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">首頁</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">供應商管理</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[-0.3125px] whitespace-nowrap">新加坡商認和科技有限公司</p>
      </div>
    </div>
  );
}

function PflLogo1() {
  return (
    <div className="content-stretch flex items-center overflow-clip py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        新加坡商認和科技有限公司
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <PflLogo1 />
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="download">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="download">
          <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 15V3" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] h-full min-w-[110px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-w-[inherit] px-[20px] py-[16px] relative">
          <Download />
          <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[normal]">匯出所有情資報告</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          統一編號：
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap">90716929</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          產業類別：
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          管理顧問 / 資訊服務
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          負責人：
        </p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          劉*彤
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[258px]">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        查看更多並編輯
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pr-[24px] py-[24px] relative rounded-[8px] shrink-0" data-name="Container">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-10.98%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
            <path d={svgPaths.p3d70580} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ddffdf] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
          <Icon2 />
        </div>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商風險評估分數
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0 w-[16px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        分
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#ddffdf] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          B+ 級
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[46.828px]">
      <Text10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#419d48] text-[32px] whitespace-nowrap">85</p>
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame36 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Icon3 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#419d48] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          比去年進步 5 分
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[33px] items-center pt-[17px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Frame37 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
            <path d={svgPaths.p2d23b080} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
            <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ffedd4] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
          <Icon4 />
        </div>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        待處理弱點
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[32px] whitespace-nowrap">0</p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[32px] whitespace-nowrap">0</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[32px] whitespace-nowrap">0</p>
      <Frame13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame39 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Icon5 />
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ee762f] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          暫無待處理弱點
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center pt-[14px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Frame45 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p1cc15700} id="Vector" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
            <path d="M1 8L4 11L14 1" id="Vector" stroke="var(--stroke-0, #EC5242)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ffe1de] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
          <Icon6 />
        </div>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        缺失修補進度
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        %
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec5242] text-[32px] whitespace-nowrap">0</p>
      <Frame14 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame46 />
    </div>
  );
}

function Container17() {
  return <div className="h-[8px] rounded-[33554400px] shrink-0 w-[229px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[213.734px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container16 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        暫無缺失補件進度
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px relative">
      <div className="backdrop-blur-[42.5px] bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
      <div className="backdrop-blur-[42.5px] bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
      <div className="backdrop-blur-[42.5px] bg-white flex-[1_0_0] h-[188px] min-h-px min-w-px relative rounded-[8px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative w-full">
      <Container />
      <Frame42 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col h-[189px] items-start pb-px relative shrink-0 w-full" data-name="Header">
      <Frame34 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[32px] relative shrink-0 w-[1440px]">
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="麵包屑">
        <Text1 />
        <Icon />
        <Text2 />
        <Icon1 />
        <Text3 />
      </div>
      <Frame27 />
      <Header />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <div className="flex-[1_0_0] h-full min-h-px min-w-[110px] relative">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[normal]">專案概覽</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffe600] flex-[1_0_0] h-full min-h-px min-w-[110px] relative">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[24px] relative size-full">
            <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[20px] text-center tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
              <p className="leading-[normal]">情資追蹤</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-[110px] relative">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[normal]">SBOM 弱點分析結果</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-[110px] relative">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[normal]">歷年查核與評估紀錄</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-[110px] relative">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[normal]">數據分析</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[72px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame35 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Tab />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
          情資追蹤列表
        </p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17px] relative shrink-0 w-[200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
          最後更新：2025/03/18 14:00
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] relative size-full">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative whitespace-nowrap">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 700" }}>
        疑似中資
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px]">5</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text14 />
        <Frame17 />
      </div>
    </div>
  );
}

function Text16() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text17() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        即時情資
      </p>
      <Text17 />
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text16 />
        <Frame18 />
      </div>
    </div>
  );
}

function Text19() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text20() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        標案拒往
      </p>
      <Text20 />
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text19 />
        <Frame19 />
      </div>
    </div>
  );
}

function Text22() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text23() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        司法判決
      </p>
      <Text23 />
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text22 />
        <Frame20 />
      </div>
    </div>
  );
}

function Text25() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text26() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        政府標案
      </p>
      <Text26 />
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text25 />
        <Frame21 />
      </div>
    </div>
  );
}

function Text28() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text29() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">81</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        疑似關係
      </p>
      <Text29 />
    </div>
  );
}

function Text27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text28 />
        <Frame22 />
      </div>
    </div>
  );
}

function Text31() {
  return <div className="bg-[#8f8100] opacity-35 rounded-[4px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text32() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[7.234px]" data-name="Text">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        違規裁罰
      </p>
      <Text32 />
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text31 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-0 w-[240px]">
      <div className="bg-[#fff8b5] h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center justify-between overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text13 />
        </div>
        <div aria-hidden="true" className="absolute border-[#ffe600] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text15 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text18 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text21 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text24 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text27 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[44px] relative rounded-[4px] shrink-0 w-[240px]" data-name="Link">
        <div className="content-stretch flex items-center overflow-clip pl-[23px] pr-[20px] relative rounded-[inherit] size-full">
          <Text30 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,230,0,0)] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[325px] relative shrink-0 w-full" data-name="Navigation">
      <Frame54 />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative text-[#1a1a24] w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          疑似中資
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>{`《認和科技》是一家位於新加坡的金融科技公司，客戶多為中國銀行。 `}</p>
      </div>
    </div>
  );
}

function Icon7() {
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
        <Icon7 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Button />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        2023 年
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>
          《
        </span>
        <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>
          認和科技
        </span>
        <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>
          》與數十間中國銀行合作，並參與《
        </span>
        <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>
          華為
        </span>
        <span className="leading-[23px]" style={{ fontVariationSettings: "'wght' 400" }}>{`》年度合作夥伴演講。 `}</span>
      </p>
    </div>
  );
}

function Text33() {
  return (
    <div className="bg-[#dc2626] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Text">
      <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[12px] text-white whitespace-nowrap">!</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative w-full">
          <Text33 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#dc2626] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            這間公司因為利益而與侵台對象合作。
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[12px] relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        2025年
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`《認和科技》將軟體上架至《華為雲》，其聯絡信箱「guohai.weng@anytxn.sg」的中文譯名與《江融信科技》董事「翁國海」相同，而《江融信科技》亦有同名產品方案 ANYTXN。 `}</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container26 />
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow1 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">-</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`《認和科技》官網列出的合作夥伴與《江融信科技》客戶完全相同，且《江融信科技》表示於 2020 年成立新加坡公司，也與《認和科技》成立時間恰好吻合。 `}</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container27 />
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow2 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">-</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`《認和科技》為《江融信科技》旗下公司。 `}</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container28 />
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow3 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">-</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{`《江融信科技》的大股東有《深圳國中創投基金》，該基金由中國財政部實際控制。 `}</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="bg-[#dc2626] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Text">
      <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[12px] text-white whitespace-nowrap">!</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative w-full">
          <Text34 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#dc2626] text-[14px] tracking-[0.42px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            這間公司的上級機構成立於中國境內，且背後資金來自中國。
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[12px] relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          關聯項目
        </p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[180.66px] top-[14.5px] w-[60px]" data-name="Text">
      <p className="font-['Noto_Sans_TC:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">・中國公司</p>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white h-[46px] relative rounded-[10px] shrink-0 w-[261.656px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Noto_Sans_TC:Regular',sans-serif] font-normal leading-[normal] left-[21px] text-[#1f2937] text-[14px] top-[13px] whitespace-nowrap">{`江融信科技 Rivere Tech `}</p>
      <Text35 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Link />
    </div>
  );
}

function RiskCard() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <Container21 />
          <Frame48 />
          <Frame50 />
          <Frame51 />
          <Frame52 />
          <Frame53 />
          <Container31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col h-[589px] items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard />
    </div>
  );
}

function Container37() {
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

function Container36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container37 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Button1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Button1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container35 />
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

function TableRow5() {
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

function TableCell10() {
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

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/03/18</p>
        <p>14:00</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        中央社 CNA
      </p>
      <p className="flex-[1_0_0] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        通訊社
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        經濟部依兩岸條例開罰認和科技 217 萬元，認定違規陸資投資
      </p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        經濟部投審會調查認定認和科技違反兩岸人民關係條例，以新加坡商名義規避陸資審查在台營運，依法裁罰新臺幣 217 萬元並要求限期改善，成為近年最受關注的中資繞道案例。
      </p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container39 />
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell15 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell12 />
      </div>
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell16() {
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

function TableCell17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/02/15</p>
        <p>09:00</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] min-w-full not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]">invade.tw</p>
      <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        民間資料庫
      </p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        中國侵略資料庫收錄認和科技為中資企業，母公司為江融信科技
      </p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        民間維護的中國侵略資料庫（invade.tw）將認和科技列為中資企業，記載其母公司江融信科技的最終實質受益人鏈結至深圳國中創投基金（中國財政部控制），並標注該公司曾承接多家台灣金融機構系統開發。
      </p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container41 />
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell21 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell18 />
      </div>
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function TableCell22() {
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

function TableCell23() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]" data-name="Table Cell">
      <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
        <p className="mb-0">2025/02/14</p>
        <p>08:30</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full" data-name="Container">
      <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        上報 Up Media
      </p>
      <p className="flex-[1_0_0] leading-[normal] min-h-px min-w-px relative text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
        新聞媒體
      </p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]" data-name="Table Cell">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        獨家｜中資繞道來台承接國泰世華信用卡核心系統，600 萬卡戶個資恐外洩
      </p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        報導揭露認和科技實為中國江融信科技海外子公司，其大股東深圳國中創投基金由中國財政部控制。認和科技承接國泰世華信用卡核心系統開發，涉及逾 600 萬卡戶個資，引發嚴重國安疑慮。
      </p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Cell">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Container43 />
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] underline whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            查看
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <TableCell27 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TableCell22 />
      <TableCell23 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell24 />
      </div>
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Icon9() {
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

function Button2() {
  return (
    <div className="bg-[#dbdbdb] opacity-50 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Icon10() {
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

function Button4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        第 1 頁，共 1 頁（顯示 1-10 /3 筆）
      </p>
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[24px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function RiskCard1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container34 />
          <Frame55 />
          <Container44 />
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

function Container50() {
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

function Container49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container50 />
      </div>
    </div>
  );
}

function Icon11() {
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
        <Icon11 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Button5 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container48 />
    </div>
  );
}

function RiskCard2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container47 />
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">經查政府採購網，該公司目前信用狀態正常</p>
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

function Container54() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          司法判決 (0)
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 0 筆
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container54 />
      </div>
    </div>
  );
}

function Icon12() {
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
        <Icon12 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Button6 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function RiskCard3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container51 />
          <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">查無司法判決紀錄</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard3 />
    </div>
  );
}

function Container58() {
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

function Container57() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container58 />
      </div>
    </div>
  );
}

function Icon13() {
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
        <Icon13 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Button7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

function RiskCard4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container55 />
          <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">查無政府標案</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <span className="leading-[normal]" style={{ fontVariationSettings: "'wght' 700" }}>
            疑似關係
          </span>
          <span className="leading-[normal]">{` (81) `}</span>
        </p>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          共 187 筆
        </p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container62 />
      </div>
    </div>
  );
}

function Icon14() {
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

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Button8 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container60 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[50px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">#</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px] w-[259px]">公司名稱</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">營業狀態</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">負責人</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[45px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">資本額</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[44.5px] items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">成立日期</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="bg-[#f6f6fa] flex-[1_0_0] h-[44.5px] min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[13px] pt-[12px] px-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_TC:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]">關係說明</p>
      </div>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
    </div>
  );
}

function HeaderCell12() {
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

function HeaderCell13() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            品築空間室內裝修設計股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text36() {
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

function HeaderCell14() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell15() {
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

function HeaderCell16() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">3,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2008-11-19</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell15 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell17 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell18 />
      </div>
    </div>
  );
}

function HeaderCell19() {
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

function HeaderCell20() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            創意家投資股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text37() {
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

function HeaderCell21() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell22() {
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

function HeaderCell23() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">5,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1997-11-10</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell19 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell20 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell21 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell23 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell24 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell25 />
      </div>
    </div>
  );
}

function HeaderCell26() {
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

function HeaderCell27() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            四兩金進出口有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text38() {
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

function HeaderCell28() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell29() {
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

function HeaderCell30() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell31() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2012-09-25</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell32() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號2樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell26 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell27 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell29 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell30 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell31 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell32 />
      </div>
    </div>
  );
}

function HeaderCell33() {
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

function HeaderCell34() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            椽龍生技有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text39() {
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

function HeaderCell35() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell36() {
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

function HeaderCell37() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell38() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2018-08-06</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell39() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號2樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell34 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell35 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell36 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell37 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell38 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell39 />
      </div>
    </div>
  );
}

function HeaderCell40() {
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

function HeaderCell41() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            創築建設有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text40() {
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

function HeaderCell42() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell43() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            朱良能
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell44() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">20,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell45() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2007-05-21</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell46() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow14() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell40 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell41 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell42 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell43 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell44 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell45 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell46 />
      </div>
    </div>
  );
}

function HeaderCell47() {
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

function HeaderCell48() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            聚豐投資股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text41() {
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

function HeaderCell49() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell50() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            王詩涵
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell51() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell52() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2006-10-04</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell53() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow15() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell47 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell48 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell49 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell50 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell51 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell52 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell53 />
      </div>
    </div>
  );
}

function HeaderCell54() {
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

function HeaderCell55() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            元恆投資股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text42() {
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

function HeaderCell56() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell57() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            趙亞琳
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell58() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell59() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2006-10-12</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell60() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow16() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell54 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell55 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell56 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell57 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell58 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell59 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell60 />
      </div>
    </div>
  );
}

function HeaderCell61() {
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

function HeaderCell62() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            能量投資股份有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text43() {
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

function HeaderCell63() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text43 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell64() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            李淑婷
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell65() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell66() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2006-10-19</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell67() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號10樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow17() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell61 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell62 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell63 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell64 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell65 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell66 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell67 />
      </div>
    </div>
  );
}

function HeaderCell68() {
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

function HeaderCell69() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            奕信網思有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text44() {
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

function HeaderCell70() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text44 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell71() {
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

function HeaderCell72() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell73() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">2008-03-20</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell74() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號2樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow18() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell68 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell69 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell70 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell71 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell72 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell73 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell74 />
      </div>
    </div>
  );
}

function HeaderCell75() {
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

function HeaderCell76() {
  return (
    <div className="h-full relative shrink-0 w-[300px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            雅盟企業有限公司
          </p>
        </div>
      </div>
    </div>
  );
}

function Text45() {
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

function HeaderCell77() {
  return (
    <div className="h-full relative shrink-0 w-[97.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <Text45 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell78() {
  return (
    <div className="h-full relative shrink-0 w-[80px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            陳鐵雄
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell79() {
  return (
    <div className="h-full relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">5,000,000</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell80() {
  return (
    <div className="h-full relative shrink-0 w-[147.516px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a24] text-[14px] tracking-[0.42px]">1980-04-03</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell81() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            同地址：瑞光路358巷38弄36號3樓
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow19() {
  return (
    <div className="content-stretch flex h-[65px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell75 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell76 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell77 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell78 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell79 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell80 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HeaderCell81 />
      </div>
    </div>
  );
}

function Table5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
    </div>
  );
}

function Icon15() {
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

function Button9() {
  return (
    <div className="bg-[#dbdbdb] opacity-50 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Icon16() {
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

function Button13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        第 1 頁，共 9 頁（顯示 1-10 / 81 筆）
      </p>
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[24px] relative size-full">
        <Container64 />
      </div>
    </div>
  );
}

function RiskCard5() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container59 />
          <Table5 />
          <Container63 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container69() {
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

function Container68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container69 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Button14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Button14 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      <Container67 />
    </div>
  );
}

function RiskCard6() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="RiskCard">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Container66 />
          <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">查無違規裁罰</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Table6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <RiskCard6 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative shrink-0 w-[1052px]">
      <Table />
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
      <RiskCard5 />
      <Table6 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="bg-[#fafbff] content-stretch flex flex-col h-[704px] items-start overflow-clip pt-[20px] relative rounded-[16px] shrink-0 w-[240px]" data-name="Container">
        <Container20 />
        <Navigation />
      </div>
      <Frame24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[32px] relative w-full">
        <Frame16 />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container19 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame33 />
      <Frame31 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1440px]" data-name="Container">
      <Frame32 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col gap-[40px] items-center pb-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Text />
      <Frame47 />
      <Container18 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-start relative size-full" data-name="2.1 情資追蹤_碩網資訊股份有限公司">
      <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame25 />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}