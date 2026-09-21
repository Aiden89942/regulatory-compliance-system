import svgPaths from "./svg-wnw4crl8jd";
import clsx from "clsx";
type Button4Props = {
  additionalClassNames?: string;
};

function Button4({ children, additionalClassNames = "" }: React.PropsWithChildren<Button4Props>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[42.5px] backdrop-filter basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">{children}</div>
    </div>
  );
}
type Container22Props = {
  additionalClassNames?: string;
};

function Container22({ children, additionalClassNames = "" }: React.PropsWithChildren<Container22Props>) {
  return (
    <div className={clsx("relative rounded-[4px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
    </div>
  );
}

function Icon7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-[110px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-w-[inherit] px-[20px] py-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] text-center text-nowrap tracking-[0.42px]">{text}</p>
      </div>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pl-0 pr-[24px] py-[16px] relative w-full">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-[260px]">
      <ContainerText1 text="CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log mess age parameters can execute arbitrary code loaded from LDAP servers." />
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular',sans-serif] h-[40px] leading-[23px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px] w-full">{text}</p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col justify-center py-[16px] relative shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full">{text}</p>
    </div>
  );
}
type HeaderCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText1({ text, additionalClassNames = "" }: HeaderCellText1Props) {
  return (
    <div className={clsx("content-stretch flex items-center py-[16px] relative shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("content-stretch flex px-[24px] py-[16px] relative shrink-0", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#ececf3] relative rounded-[3.35544e+07px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type Text9Props = {
  text: string;
  additionalClassNames?: string;
};

function Text9({ text, additionalClassNames = "" }: Text9Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[#747480] text-[20px] text-center text-nowrap", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <Wrapper>
      <Text9 text={text} additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" />
    </Wrapper>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper2>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper2>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper2>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper2>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 700" }} className={clsx("flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-center text-nowrap", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        首頁
      </p>
    </div>
  );
}

function Frame3() {
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
    <Wrapper3>
      <g id="chevron-right">
        <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper3>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0">
      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]" style={{ fontVariationSettings: "'wght' 400" }}>
        弱點偵測
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame2 />
      <Text5 text="風險評估" />
      <Frame3 />
      <Frame4 />
      <Text5 text="管理報表" />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Text6 text="新增供應商" additionalClassNames="text-[#1a1a24] text-[18px] tracking-[0.54px]" />
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

function Frame16() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function Frame12({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div onClick={onLogoClick} className="cursor-pointer hover:opacity-80 transition-opacity">
        <PflLogo />
      </div>
      <Frame15 />
    </div>
  );
}

function Component({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="bg-[#2e2e38] relative shrink-0 w-full" data-name="首頁">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame12 onLogoClick={handleLogoClick} />
          <div className="absolute bottom-0 h-0 left-[779px] w-[110px]">
            <div className="absolute inset-[-6px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
                <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PflLogo1() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        碩網資訊股份有限公司
      </p>
    </div>
  );
}

function Download() {
  return (
    <Wrapper3 additionalClassNames="shrink-0">
      <g id="download">
        <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 15V3" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper3>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] content-stretch flex gap-[4px] h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Download />
      <Text6 text="匯出所有情資報告" additionalClassNames="text-[#1a1a24] text-[18px] tracking-[0.54px]" />
    </div>
  );
}

function Frame14() {
  return (
    <Wrapper1>
      <PflLogo1 />
      <div className="flex flex-row items-center self-stretch">
        <L1 />
      </div>
    </Wrapper1>
  );
}

function Text() {
  return (
    <Wrapper2>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]">28445678</p>
    </Wrapper2>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText text="統一編號：" />
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText text="產業類別：" />
      <TextText1 text="資料與系統" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText text="負責人：" />
      <TextText1 text="邱*鈿" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        查看更多並編輯
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pl-0 pr-[24px] py-[24px] relative rounded-[8px] shrink-0" data-name="Container">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Icon() {
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
    <Container22 additionalClassNames="bg-[#ddffdf]">
      <Icon />
    </Container22>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商評估分數
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0 w-[16px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        分
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ddffdf] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          B+ 級
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[46.828px]">
      <Text1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#419d48] text-[32px] text-nowrap">85</p>
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame26 />
    </div>
  );
}

function Icon1() {
  return (
    <Icon7>
      <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon7>
  );
}

function Frame27() {
  return (
    <Wrapper4>
      <Icon1 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#419d48] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        比去年進步 5 分
      </p>
    </Wrapper4>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[33px] items-center pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame27 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame23() {
  return (
    <Wrapper5>
      <Container5 />
      <Container8 />
    </Wrapper5>
  );
}

function Icon2() {
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

function Container9() {
  return (
    <Container22 additionalClassNames="bg-[#ffedd4]">
      <Icon2 />
    </Container22>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商稽核風險缺總數量
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        項目
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ee762f] text-[32px] text-nowrap">6</p>
      <Frame10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame29 />
    </div>
  );
}

function Icon3() {
  return (
    <Icon7>
      <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #EE762F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon7>
  );
}

function Frame33() {
  return (
    <Wrapper4>
      <Icon3 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#ee762f] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        比去年進步少 3 項缺失
      </p>
    </Wrapper4>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[14px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame33 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Frame24() {
  return (
    <Wrapper5>
      <Container10 />
      <Container13 />
    </Wrapper5>
  );
}

function Icon4() {
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

function Container14() {
  return (
    <Container22 additionalClassNames="bg-[#ffe1de]">
      <Icon4 />
    </Container22>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
        缺失修補進度
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[0.48px]">%</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec5242] text-[32px] text-nowrap">70</p>
      <Frame11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Frame34 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#ec5242] h-[8px] rounded-[3.35544e+07px] shrink-0 w-[229px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-0 pr-[213.734px] py-0 relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container18 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        3 / 5 項已改善或核准
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="backdrop-blur-[42.5px] backdrop-filter basis-0 bg-white grow h-[188px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Container15 />
        <Container20 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Container3 />
      <Frame32 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pb-px pt-0 px-[32px] relative w-full">
        <Frame21 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1440px]">
      <Frame14 />
      <Header />
    </div>
  );
}

function Frame5() {
  return (
    <Wrapper additionalClassNames="bg-[#ffe600]">
      <Text6 text="SBOM 弱點分析結果" additionalClassNames="text-[#2e2e38] text-[20px] tracking-[0.6px]" />
    </Wrapper>
  );
}

function Frame6() {
  return (
    <Wrapper>
      <Text9 text="歷年查核與評估紀錄" additionalClassNames="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif]" />
    </Wrapper>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Text8 text="專案概覽" />
      <Text8 text="情資追蹤" />
      <Frame5 />
      <Frame6 />
      <Text8 text="數據分析" />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex h-[72px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tab樣式">
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Tab />
    </div>
  );
}

function Container21() {
  return (
    <Wrapper1>
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px] w-[638px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">弱點分析結果列表</p>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        最後更新：2025/12/02 14:30
      </p>
    </Wrapper1>
  );
}

function Button() {
  return (
    <div className="bg-[#ffe600] relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
          全部 (30)
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow h-[40px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Button />
      <ButtonText text="高風險 (2)" />
      <ButtonText text="中風險 (6)" />
      <ButtonText text="低風險 (22)" />
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25516400} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 12.5V2.5" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function L2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-end min-w-[110px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <Download1 />
      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
          匯出報告
        </p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[32px] py-[12px] relative w-full">
          <Container23 />
          <div className="flex flex-row items-center self-stretch">
            <L2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[240px]" data-name="Header Cell">
      <p className="basis-0 font-['EYInterstate:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]">Component</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center px-0 py-[16px] relative shrink-0 w-[240px]" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">Group</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px px-0 py-[16px] relative shrink-0" data-name="Header Cell">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[66px]">License</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCellText text="Version" additionalClassNames="items-start justify-center w-[120px]" />
      <HeaderCellText text="Vulnerabilities" additionalClassNames="items-center w-[170px]" />
      <HeaderCell2 />
      <HeaderCellText1 text="摘要內容" additionalClassNames="px-0 w-[260px]" />
      <HeaderCellText1 text="操作" additionalClassNames="justify-end px-[24px] w-[100px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[24px] pr-0 py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <ContainerText text="log4j-core" additionalClassNames="justify-center" />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#ec5242] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container24 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[16px] relative shrink-0 w-[170px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-[132px]" data-name="Table Cell">
      <ContainerText text="Apache-2.0" />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell />
      </div>
      <TableCellText text="org.apache.logging.log4j" additionalClassNames="items-start px-0 w-[240px]" />
      <TableCellText text="2.14.1" additionalClassNames="items-center px-[24px] w-[120px]" />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCellText1 text="查看" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[24px] pr-0 py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <ContainerText text="buffer-from" additionalClassNames="justify-center" />
    </div>
  );
}

function Container25() {
  return <div className="bg-[#ec5242] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container25 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ec5242] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        高風險
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[16px] relative shrink-0 w-[170px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-[132px]" data-name="Table Cell">
      <ContainerText text="MIT" />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell4 />
      </div>
      <TableCellText text="npm" additionalClassNames="items-start px-0 w-[240px]" />
      <TableCellText text="2.5.6" additionalClassNames="items-center px-[24px] w-[120px]" />
      <TableCell5 />
      <TableCell6 />
      <TableCell3 />
      <TableCellText1 text="查看" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[24px] pr-0 py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <ContainerText text="spring-boot-starter" additionalClassNames="justify-center" />
    </div>
  );
}

function Container26() {
  return <div className="bg-[#ee762f] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="bg-[#ffedd4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd59a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container26 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ee762f] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        中風險
      </p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[16px] relative shrink-0 w-[170px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-[132px]" data-name="Table Cell">
      <ContainerText text="MIT" />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell7 />
      </div>
      <TableCellText text="npm" additionalClassNames="items-start px-0 w-[240px]" />
      <TableCellText text="18.2.0" additionalClassNames="items-center px-[24px] w-[120px]" />
      <TableCell8 />
      <TableCell9 />
      <TableCell3 />
      <TableCellText1 text="查看" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pl-[24px] pr-0 py-[16px] relative shrink-0 w-[240px]" data-name="Table Cell">
      <ContainerText text="jackson-databind" additionalClassNames="justify-center" />
    </div>
  );
}

function Container27() {
  return <div className="bg-[#ff9d00] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="bg-[#fff8b5] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fff169] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container27 />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#ff9d00] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        低風險
      </p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[15px] py-[16px] relative shrink-0 w-[170px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-[132px]" data-name="Table Cell">
      <ContainerText text="Apache-2.0" />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell10 />
      </div>
      <TableCellText text="com.fasterxml.jackson." additionalClassNames="items-start px-0 w-[240px]" />
      <TableCellText text="4.17.19" additionalClassNames="items-center px-[24px] w-[120px]" />
      <TableCell11 />
      <TableCell12 />
      <TableCell3 />
      <TableCellText1 text="查看" />
    </div>
  );
}

function Icon5() {
  return (
    <Icon7>
      <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon7>
  );
}

function Button1() {
  return (
    <Button4 additionalClassNames="bg-[#dbdbdb] opacity-50">
      <Icon5 />
    </Button4>
  );
}

function Button2() {
  return (
    <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] text-center text-nowrap tracking-[0.42px]">1</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <Icon7>
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Icon7>
  );
}

function Button3() {
  return (
    <Button4 additionalClassNames="bg-white">
      <Icon6 />
    </Button4>
  );
}

function Container28() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button1 />
        <Button2 />
        <ButtonText1 text="2" />
        <ButtonText1 text="3" />
        <Button3 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        顯示 1-10 筆，共 30 筆
      </p>
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pt-[17px] px-[24px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-px items-start px-[32px] py-0 relative w-full">
          <TableRow />
          <TableRow1 />
          <TableRow2 />
          {[...Array(3).keys()].map((_, i) => (
            <TableRow3 key={i} />
          ))}
          {[...Array(5).keys()].map((_, i) => (
            <TableRow4 key={i} />
          ))}
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function OsintIntelligenceTable() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="OSINTIntelligenceTable">
      <div className="content-stretch flex flex-col items-start px-px py-[24px] relative w-full">
        <Container21 />
        <Frame37 />
        <Table />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <OsintIntelligenceTable />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Frame20 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col gap-[40px] items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full">
      <Frame36 />
      <Container31 />
    </div>
  );
}

export default function Frame35({ onNavigate, isDarkMode = false }: { onNavigate?: (page: string) => void; isDarkMode?: boolean }) {
  const bgColor = isDarkMode ? 'bg-[#2e2e38]' : 'bg-[#f6f6fa]';
  
  return (
    <div className={`${bgColor} content-stretch flex flex-col items-center relative size-full transition-colors duration-300`}>
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none" />
      <Component onNavigate={onNavigate} />
      <Frame7 />
    </div>
  );
}