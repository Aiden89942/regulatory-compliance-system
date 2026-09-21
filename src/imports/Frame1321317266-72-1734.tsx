import svgPaths from "./svg-33ieh72s8r";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        {children}
      </svg>
    </div>
  );
}

function Form9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" />
      <PrimitiveButtonText text="不符合" />
    </div>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
};

function PrimitiveButtonText({ text }: PrimitiveButtonTextProps) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[80px]">
      <div className="absolute inset-[-1.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 3">
          <path d="M0 1.5H80" id="Vector 1318" stroke="var(--stroke-0, #1A1A24)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper1>
        <circle cx="30" cy="30" fill="var(--fill-0, #2E2E38)" id="Ellipse 4257" r="30" />
      </Wrapper1>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper2>
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px]">{text}</p>
    </Wrapper2>
  );
}
type LTextProps = {
  text: string;
};

function LText({ text }: LTextProps) {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function PflLogo() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">SCCG</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商管理
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame7 />
      <Text1 text="風險評估" />
      <Frame8 />
      <Frame9 />
      <Text1 text="管理報表" />
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
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
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">99+</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <LText text="新增供應商" />
      </div>
      <Frame36 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame34 />
      <Frame37 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <PflLogo />
      <Frame35 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col gap-[32px] items-center pb-[24px] pt-[32px] px-[32px] relative shrink-0 w-[1440px]" data-name="首頁">
      <Frame33 />
      <div className="absolute bottom-0 h-0 left-[779px] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <Wrapper2>
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[-0.3125px]">新增供應商</p>
    </Wrapper2>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-[1024px]" data-name="麵包屑">
      <TextText text="首頁" />
      <Icon />
      <TextText text="供應商管理" />
      <Icon />
      <Text />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="1" />
      <Text3 text="填寫資訊服務委外風險評估" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="2" />
      <Text3 text="發送資訊供應商風險評估表與情資追蹤" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper1>
        <circle cx="30" cy="30" fill="var(--fill-0, #FFE600)" id="Ellipse 4257" r="30" />
      </Wrapper1>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        供應商資料檢核與歸檔
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="第三個">
      <Helper />
      <Frame6 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame4 />
      <Helper />
      <Frame5 />
      <Component2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
      <Frame3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#1a1a24] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
            (三) 資訊服務供應商之資安應符合下列要求：
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商應遵循之資安要求事項、個人資料保護法與其他相關法規遵循與保密義務。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame12() {
  return (
    <Wrapper>
      <Text4 text="法令遵循" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方於履行本合約時，不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。
      </p>
    </Wrapper>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label />
      <Frame12 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame14 />
    </div>
  );
}

function Form() {
  return (
    <Form9>
      <Frame43 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商應於系統交付時提供安全性檢測證明 (如行動應用程式資安檢測、源碼檢測、弱點掃描等)，並應確保交付之系統或程式無惡意程式及後門程式，其放置於網際網路之程式應通過程式碼掃描或黑箱測試。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame15() {
  return (
    <Wrapper>
      <Text4 text="資安條款" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方交付之軟硬體、系統及文件前，應先執行安全性檢查並確保無內藏惡意程式（如病毒、蠕蟲、特洛伊木馬、後門程式、間諜軟體等）及隱密通道（covert channel），並依甲方之要求而辦理原始碼掃描、程式/系統弱點掃描，其放置於網際網路之程式應通過黑箱測試，並提供檢測及掃描後之弱點修補報告，以確保軟硬體及文件無資訊安全風險。
      </p>
    </Wrapper>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label1 />
      <Frame15 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame16 />
    </div>
  );
}

function Form1() {
  return (
    <Form9>
      <Frame44 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        3. 資訊服務供應商揭露第三方程式元件之來源與授權證明。
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <Wrapper>
      <Text4 text="資安條款/保證條款" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方交付之產品如有使用第三方程式元件，應揭露其來源與授權證明。
      </p>
    </Wrapper>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label2 />
      <Frame17 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame18 />
    </div>
  );
}

function Form2() {
  return (
    <Form9>
      <Frame47 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="4" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商處理公司委託服務各項範圍資訊，能於公司要求期限內提供。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame19() {
  return (
    <Wrapper>
      <Text4 text="工作期限/服務品質" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`範例1 `}</p>
        <p className="mb-0">{`本專案應於工作說明書約定之期限前完成。但因不可歸責於乙方之事由，致原定時程必須延長時，乙方得以書面檢具理由通知甲方。如因可歸責於甲方之事由致時間延長者，雙方應本於誠信另行協議延長期限 。 `}</p>
        <p className="mb-0">{`前項工作期限包括測試、驗收及教育訓練之實施。 `}</p>
        <p className="mb-0"> </p>
        <p className="mb-0">{`範例2 `}</p>
        <p>乙方應於合約期間內定期維護O次，乙方實施定期維護前，應事先與甲方人員聯絡並取得同意後，乙方應於雙方可配合之時間內派遣工程師至標的物之設置場所實施1至2小時之定期維護。</p>
      </div>
    </Wrapper>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label3 />
      <Frame19 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame20 />
    </div>
  );
}

function Form3() {
  return (
    <Form9>
      <Frame48 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="5" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資通(訊)服務供應商於處理公司資料應有明確區隔，並應予以加密保護。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame21() {
  return (
    <Wrapper>
      <Text4 text="資安條款" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方處理甲方公司資料時應與其他公司資料有明確區隔，並應予以加密保護。
      </p>
    </Wrapper>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label4 />
      <Frame21 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame22 />
    </div>
  );
}

function Form4() {
  return (
    <Form9>
      <Frame49 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="6" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">第一類投信投顧業者之資訊服務供應商應提供取得之資安及品質證照。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame23() {
  return (
    <Wrapper>
      <Text4 text="人員管理/資安條款/其他" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方應提供其所取得之資安及品質證照。
      </p>
    </Wrapper>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label5 />
      <Frame23 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame24 />
    </div>
  );
}

function Form5() {
  return (
    <Form9>
      <Frame50 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="7" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">公司應於簽約程序中確認資訊服務供應商保密切結事宜。</span>
        </li>
      </ol>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_72_1213)" id="info">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_72_1213">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        保密義務
      </p>
      <Info />
    </div>
  );
}

function Frame25() {
  return (
    <Wrapper>
      <Frame51 />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`「機密資料」係指因本合約而由一方揭露予他方之任何營業、財務、技術、商業、客戶資料、個人資料或其他專有資料，但不包含下列資料：(1)於揭露時已為公開之知識；(2)在不違反保密義務之情況下，於揭露後成為公開知識或為接受資料者由其他方式所知悉；(3)於簽訂本合約前，即已為接受資料者所知悉；或(4)為接受資料者獨立發展而無利用揭露者之資料者。 `}</p>
        <p className="mb-0">{`雙方應對他方機密資料以相同於保護自己機密資料的注意義務予以保護，但注意義務不得低於善良管理人注意義務。除依法令規定揭露外，接受資料者(1)不得將機密資料揭露予其他第三人；(2)除為履行本合約之目的外，不得以其他方式使用機密資料；與(3)如知悉他方之機密資料有未經授權而被揭露或使用之情事發生時，應將此情事通知他方。 `}</p>
        <p className="mb-0">{`任一方除為實行本合約之目的而向有必要知悉該機密資料之員工、代理人、顧問、其他受僱者或其他參與本專案之人員透露者外，不得對任何無關第三人提供該機密資料。 `}</p>
        <p className="mb-0">{`任一方應要求所屬員工及相關人員遵守本條保密之約定，該人員若有違反，違反方願負連帶賠償責任。 `}</p>
        <p className="mb-0">{`本條約定之保密義務於本合約終止、解除或屆滿後三年內，仍繼續有效。 `}</p>
        <p>乙方應於接獲甲方通知翌日起，將乙方所持有、保管之機密資料返還予甲方，或將機密資料予以銷毀，而不得以任何形式留存機密資料。甲方並有權要求乙方應以書面形式向甲方確認並未違反本條之約定。惟乙方得保留其按照有關法律或法規之規定或其內部檔案保存之要求而保留被納入其工作底稿之機密資料；以及，不得要求乙方返還或銷毀於日常備份系統保存之機密資料。所保留之任何上述機密資料將仍然受制於本合約之保密及使用限制條款。</p>
      </div>
    </Wrapper>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label6 />
      <Frame25 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame26 />
    </div>
  );
}

function Form6() {
  return (
    <Form9>
      <Frame52 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="8" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資訊服務供應商發生資安事件致公司受到影響時，資訊服務供應商的處置程序及責任。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame27() {
  return (
    <Wrapper>
      <Text4 text="資訊安全" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。。
      </p>
    </Wrapper>
  );
}

function Frame28() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label7 />
      <Frame27 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame28 />
    </div>
  );
}

function Form7() {
  return (
    <Form9>
      <Frame53 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Frame29() {
  return (
    <Wrapper>
      <Text4 text="特別約定" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方應具備緊急應變計畫，亦即乙方配合提供危機之處理方案，包括替代、重建方案及該計畫之檢討程序等，並同意配合甲方作緊急應變計畫及安排，以避免服務品質下降，而影響甲方之經營或客戶權益。
      </p>
    </Wrapper>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame30 />
    </div>
  );
}

function Form8() {
  return (
    <Form9>
      <Frame54 />
      <PrimitiveDiv />
    </Form9>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Form />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
      <Form8 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[1024px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Frame38 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[24px] relative shrink-0 w-full" data-name="Container">
      <Frame41 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Component1 />
      <Frame31 />
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#2e2e38] h-[76px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[20px] items-center justify-between leading-[23px] ml-0 mt-0 relative text-[#ececf3] text-[16px] text-nowrap tracking-[0.48px] w-[300px]" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        完成進度
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] not-italic relative shrink-0">3/2</p>
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="[grid-area:1_/_1] bg-[#ececf3] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px] w-[300px]" data-name="Primitive.div" />;
}

function PrimitiveDiv2() {
  return <div className="[grid-area:1_/_1] bg-[#ffe600] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px] w-[200px]" data-name="Primitive.div" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container2 />
      <PrimitiveDiv1 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[450px]">
      <LText text="下一頁" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1024px]">
      <Group1 />
      <div className="flex flex-row items-center self-stretch">
        <Frame45 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

export default function Frame42() {
  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative size-full">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component />
      <Frame10 />
      <Frame40 />
      <Frame39 />
    </div>
  );
}