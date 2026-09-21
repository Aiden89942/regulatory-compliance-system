import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" />
      <PrimitiveButtonText1 text="不符合" />
    </div>
  );
}
type PrimitiveButtonText1Props = {
  text: string;
};

function PrimitiveButtonText1({ text }: PrimitiveButtonText1Props) {
  return (
    <Wrapper additionalClassNames="bg-[rgba(255,255,255,0)]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
};

function PrimitiveButtonText({ text }: PrimitiveButtonTextProps) {
  return (
    <Wrapper additionalClassNames="bg-[#ffe600]">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        服務品質/ 保固責任及保固方式
      </p>
    </div>
  );
}

function Frame() {
  return (
    <Wrapper1>
      <Frame6 />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方應於保固期間內提供5日每日24小時保固服務，以確保標的物之正常運作： `}</p>
        <p className="mb-0">{`一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。 `}</p>
        <p>二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應即謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。</p>
      </div>
    </Wrapper1>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="16.保固" />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame1 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">
          <Frame4 />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        保證條款
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <Wrapper1>
      <Frame7 />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。 `}</p>
        <p className="mb-0">{`乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔： `}</p>
        <p className="mb-0">{`一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。 `}</p>
        <p className="mb-0">{`二、取得他人授權，使甲方能繼續利用工作項目。 `}</p>
        <p className="mb-0">{`三、於30日內返還甲方就工作項目已給付之費用。 `}</p>
        <p>如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。</p>
      </div>
    </Wrapper1>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="17.權利及責任" />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame3 />
    </div>
  );
}

function Form1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          <Frame5 />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Form />
      <Form1 />
    </div>
  );
}