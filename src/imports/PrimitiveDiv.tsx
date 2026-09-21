import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[21px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper additionalClassNames="w-[100px]">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}

function PrimitiveH() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          確認發送評估表？
        </p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="DialogHeader">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[17px] pt-[16px] px-[24px] relative w-full">
        <PrimitiveH />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統將發送通知信至以下聯絡人信箱，請確認資訊無誤。
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
    </div>
  );
}

function Text() {
  return (
    <Wrapper additionalClassNames="w-[34.453px]">
      <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#1a1a24] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        王*明
      </p>
    </Wrapper>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <TextText text="收件對象" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <Wrapper additionalClassNames="w-[181.063px]">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1a1a24] text-[14px] text-nowrap top-0 tracking-[0.42px]">wang.daming@supplier.com</p>
    </Wrapper>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <TextText text="聯絡信箱" />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <Wrapper additionalClassNames="w-[67.703px]">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#ec5242] text-[14px] text-nowrap top-0 tracking-[0.42px]">2025.12.15</p>
    </Wrapper>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <TextText text="填寫截止日" />
      <Text2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] items-start relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function App() {
  return (
    <div className="relative shrink-0 w-full" data-name="App">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
        <Container />
        <Container4 />
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative">
        <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[15px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            返回修改
          </p>
        </div>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0" data-name="按鈕(L)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
        <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[23px]">確認發送</p>
        </div>
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="bg-[#f9fafb] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="DialogFooter">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end pb-[16px] pl-0 pr-[24px] pt-[17px] relative w-full">
          <L />
          <L1 />
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="absolute right-[20px] size-[24px] top-[20.5px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] size-full" data-name="Primitive.div">
      <DialogHeader />
      <App />
      <DialogFooter />
      <X />
    </div>
  );
}