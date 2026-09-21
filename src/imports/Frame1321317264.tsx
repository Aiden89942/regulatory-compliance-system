import svgPaths from "./svg-r99rdse330";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
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

function Form22({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">{children}</div>
    </Wrapper1>
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
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <Info />
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
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]">
      <p className="mb-0">{`乙方應於保固期間內提供5日每日24小時保固服務，以確保標的物之正常運作： `}</p>
      <p className="mb-0">{`一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。 `}</p>
      <p>{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButtonText text="符合" />
      <PrimitiveButton />
    </div>
  );
}
type PrimitiveButtonProps = {
  additionalClassNames?: string;
};

function PrimitiveButton({ additionalClassNames = "" }: PrimitiveButtonProps) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text="不符合" additionalClassNames="px-[17px]" />
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
};

function PrimitiveButtonText({ text }: PrimitiveButtonTextProps) {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text={text} additionalClassNames="px-[16px]" />
      </div>
    </div>
  );
}
type DatePickerTextProps = {
  text: string;
};

function DatePickerText({ text }: DatePickerTextProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      <Info />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_66_2261)" id="info">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_66_2261">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1a1a24] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
            (一) 基本要求
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約期限</span>
        </li>
      </ol>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本合約期間自
      </p>
      <DatePickerText text="請選擇年月日" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        起至驗收合格並交付約定文件之日止，共計
      </p>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]">0</p>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        年
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label />
      <Frame2 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame3 />
    </div>
  );
}

function Form() {
  return (
    <Form22>
      <Frame50 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="2" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約範圍</span>
        </li>
      </ol>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]" data-name="Date Picker">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          請輸入服務範圍
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本專案範圍為
      </p>
      <DatePicker />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        系統之維護服務
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label1 />
      <Frame5 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame6 />
    </div>
  );
}

function Form1() {
  return (
    <Form22>
      <Frame51 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start="3" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務交付日期</span>
        </li>
      </ol>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        本專案應於
      </p>
      <DatePickerText text="請選擇年月日" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        約定之期限前完成
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
      <Text text="服務品質/ 維護責任與維護方式" />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label2 />
      <Frame8 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame9 />
    </div>
  );
}

function Form2() {
  return (
    <Form22>
      <Frame52 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="4" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務水準要求</span>
        </li>
      </ol>
    </div>
  );
}

function Frame10() {
  return (
    <Wrapper>
      <Text text="服務品質/ 維護責任與維護方式" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方於本合約期間應使維護標的物經常保持良好狀態，維護標的物發生運作失常或任何故障時，乙方應以最迅速方法修復。 `}</p>
        <p className="mb-0">{`本合約標的物之維護方式如下： `}</p>
        <p className="mb-0">{`一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。 `}</p>
        <p>二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。</p>
      </div>
    </Wrapper>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label3 />
      <Frame10 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame11 />
    </div>
  );
}

function Form3() {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
        <Frame53 />
        <PrimitiveDiv />
      </div>
    </Wrapper1>
  );
}

function Frame12() {
  return (
    <Wrapper>
      <Text2 text="服務品質/ 維護時間" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方應提供全年無休，每周7×24維護服務，並提供叫修服務專線，乙方之專線或維修聯繫方式如有異動，應主動通知甲方。
      </p>
    </Wrapper>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame13 />
    </div>
  );
}

function Form4() {
  return (
    <Form22>
      <Frame54 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame14() {
  return (
    <Wrapper>
      <Text text="服務品質/ 保固責任及保固方式" />
      <Text3 text="二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應即謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。" />
    </Wrapper>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame15 />
    </div>
  );
}

function Form5() {
  return (
    <Form22>
      <Frame55 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="5" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務變更規範</span>
        </li>
      </ol>
    </div>
  );
}

function Frame16() {
  return (
    <Wrapper>
      <Text4 text="合約修訂" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        本合約簽訂後，若需任何變更或修正，均須經過甲、乙雙方同意，以書面另行為之。
      </p>
    </Wrapper>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label4 />
      <Frame16 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame17 />
    </div>
  );
}

function Form6() {
  return (
    <Form22>
      <Frame56 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="6" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">服務驗收之標準</span>
        </li>
      </ol>
    </div>
  );
}

function Frame18() {
  return (
    <Wrapper>
      <Text5 text="驗收及文件交付" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方應於本專案各期完成之日起10日內，以書面通知甲方依工作說明書辦理驗收手續，乙方並應配合甲方之需求派遣相關人員協同辦理驗收。 `}</p>
        <p className="mb-0">{`甲方應於接獲乙方前項通知之翌日起10日內辦理驗收，並於開始驗收翌日起10日內覆文乙方，載明應改善之具體內容或簽具驗收單。若甲方屆期未回覆者，視同驗收合格。 `}</p>
        <p className="mb-0">{`若經驗收發現有不合約定或標準者，乙方應於接獲甲方覆文20日內配合改善，並以書面檢具相關測試報告再向甲方請求驗收，其程序同前。 `}</p>
        <p className="mb-0">{`前項情形，乙方之遲延責任依第X條約定辦理。 `}</p>
        <p>乙方於驗收時，應交付甲方之軟體授權文件、操作手冊、說明書及保證書等，乙方同意甲方得因實際需要自行複製供甲方內部使用。乙方交付之前述文件如與合約或實際操作情況不符時，甲方最遲應於驗收完成後之30日內向乙方提出，乙方應於接獲甲方通知後3日內提交與合約及實際操作情況相符之文件予甲方。</p>
      </div>
    </Wrapper>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label5 />
      <Frame18 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame19 />
    </div>
  );
}

function Form7() {
  return (
    <Form22>
      <Frame57 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="7" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">資通安全事件通報及應變處理作業程序</span>
        </li>
      </ol>
    </div>
  );
}

function Frame20() {
  return (
    <Wrapper>
      <Text4 text="資訊安全" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。
      </p>
    </Wrapper>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label6 />
      <Frame20 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame21 />
    </div>
  );
}

function Form8() {
  return (
    <Form22>
      <Frame58 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame22() {
  return (
    <Wrapper>
      <Text4 text="特別約定" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方應具備緊急應變計畫，亦即乙方配合提供危機之處理方案，包括替代、重建方案及該計畫之檢討程序等，並同意配合甲方作緊急應變計畫及安排，以避免服務品質下降，而影響甲方之經營或客戶權益。
      </p>
    </Wrapper>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame23 />
    </div>
  );
}

function Form9() {
  return (
    <Form22>
      <Frame59 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="8" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">對資訊服務供應商之稽核權條款</span>
        </li>
      </ol>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        內部控制及查核/查核條款
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <Wrapper>
      <Frame60 />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方應依甲方督導，就本合約之作業流程訂定標準作業程序，執行內部控制及進行定期與不定期內部稽核，並留存紀錄以供查核，且配合甲方或其主管機關、中央銀行及其指定之人之要求及提供相關資訊或說明。 `}</p>
        <p>乙方同意甲方得派員或委由專業第三人就前項作業流程、內部控制、內部稽核及其他事項進行定期或不定期之查核，並同意甲方之主管機關、中央銀行及其指定之人得取得受託事項之相關資料或報告及進行金融檢查，或命令其於限期內提供相關資料或報告。</p>
      </div>
    </Wrapper>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label7 />
      <Frame24 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame25 />
    </div>
  );
}

function Form10() {
  return (
    <Form22>
      <Frame61 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame26() {
  return (
    <Wrapper>
      <Text4 text="次承攬禁止/禁止轉分包" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方應自行完成本合約約定之全部工作。除本合約另有約定或經甲方事前書面同意者外，乙方不得將本合約工作之一部或全部委由第三人為之。 `}</p>
        <p className="mb-0">{`乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。 `}</p>
        <p>乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。</p>
      </div>
    </Wrapper>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="9.合約轉讓或同意分包之規範" />
      <Frame26 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame27 />
    </div>
  );
}

function Form11() {
  return (
    <Form22>
      <Frame62 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame28() {
  return (
    <Wrapper>
      <Text4 text="保密義務" />
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

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="10.保密義務條款" />
      <Frame28 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame29 />
    </div>
  );
}

function Form12() {
  return (
    <Form22>
      <Frame63 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="11" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">罰則與損害賠償條款</span>
        </li>
      </ol>
    </div>
  );
}

function Frame30() {
  return (
    <Wrapper>
      <Text5 text="罰則" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方因可歸責於自己之事由，致未能於本合約(及工作說明書)約定之時限內完成本專案者，每逾一日(未滿一日以一日計算)應按本合約總價款千分之三之金額，給付甲方作為遲延罰款。 `}</p>
        <p className="mb-0">{`乙方未依約定實施定期保養者，每逾一日(未滿一日以一日計算)應按本合約總價款千分之三之金額，給付甲方作為遲延罰款。 `}</p>
        <p className="mb-0">{`乙方未於約定時限到場維修、完成修復或提供暫時性過渡處理之替代方案者，每逾一小時(未滿一小時以一小時計算)應按本合約總價款千分之一之金額，給付甲方作為遲延罰款。 `}</p>
        <p className="mb-0">{`乙方於本合約期間，不依約定配合查核者，每次應按本合約總價款千分之三之金額，給付甲方作為懲罰性違約金。 `}</p>
        <p className="mb-0">{`乙方於本合約期間、期滿、解除或終止後，如有違反第X條至第X條任一條之約定者，乙方應按本合約總價款百分之三十之金額，給付甲方作為懲罰性違約金。 `}</p>
        <p>本條之罰款及違約金，甲方得逕自應付之當期價款中扣除之。</p>
      </div>
    </Wrapper>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label8 />
      <Frame30 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame31 />
    </div>
  );
}

function Form13() {
  return (
    <Form22>
      <Frame64 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame32() {
  return (
    <Wrapper>
      <Text4 text="損害賠償" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方違反本合約任一條款約定或因可歸責於已知事由而致甲方、其相關人員或客戶受有損害，不論是財務、商譽、資料等損失或任何權益之損害、受第三人求償或因此支出之任何費用者，除依罰則約定辦理外，並應對甲方負損害賠償之責，其賠償範圍包括但不限於甲方所失利益、和解金、律師費、訴訟相關之費用、主管機關罰鍰等直至完全賠償為止。
      </p>
    </Wrapper>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame33 />
    </div>
  );
}

function Form14() {
  return (
    <Form22>
      <Frame65 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="12" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">爭議處理程序</span>
        </li>
      </ol>
    </div>
  );
}

function Frame34() {
  return (
    <Wrapper>
      <Text4 text="爭議處理" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        本合約如有未訂事宜或對內容之解釋產生疑義，影響合約之履行時，甲乙雙方應本於平等互惠及誠信原則，共同協議解決，其協議內容亦為本合約之一部分。
      </p>
    </Wrapper>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label9 />
      <Frame34 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame35 />
    </div>
  );
}

function Form15() {
  return (
    <Form22>
      <Frame66 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="13" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">違約處理條款</span>
        </li>
      </ol>
    </div>
  );
}

function Frame36() {
  return (
    <Wrapper>
      <Text4 text="不可抗力" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        因地震、火災、水災、颱風、海嘯、地區性疫情、戰爭、罷工、動亂、暴動、禁運或相關政府強制或禁止措施等不可抗力事件造成本合約任一方無法或遲延履行其於本合約項下之相關責任或義務，該受不可抗力事件影響之一方得免除違約責任，惟受不可抗力事件影響之一方應及時通知他方並儘量減少損失。如不可抗力事件持續超過30日，則任何一方均有權終止本合約。
      </p>
    </Wrapper>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label10 />
      <Frame36 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame37 />
    </div>
  );
}

function Form16() {
  return (
    <Form22>
      <Frame67 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame38() {
  return (
    <Wrapper>
      <Text4 text="合約終止及解除" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方如違約且未於限期內改善，甲方可提出終止合約並由乙方負損害賠償責任。
      </p>
    </Wrapper>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame39 />
    </div>
  );
}

function Form17() {
  return (
    <Form22>
      <Frame68 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="14" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約終止規範</span>
        </li>
      </ol>
    </div>
  );
}

function Frame40() {
  return (
    <Wrapper>
      <Text4 text="合約終止及解除" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方有下列情事之一者，甲方得終止或解除本合約： `}</p>
        <p className="mb-0">{`一、未於約定期限內完成工作，且逾30日並且情節重大影響本合約之繼續者。 `}</p>
        <p className="mb-0">{`二、未於約定期限內到場檢修或完成修復，次數達3次以上者。 `}</p>
        <p className="mb-0">{`三、怠於履行本合約之任一義務，經甲方書面通知限期補正而未補正者。但違約之事項無法補正者，不在此限。 `}</p>
        <p className="mb-0">{`四、違反本合約任一條之約定者。 `}</p>
        <p className="mb-0">{`五、有破產、重整、解散、暫停營業或有其他履行本合約顯有困難之情形者。 `}</p>
        <p className="mb-0">{`本合約因前項任一款原因終止或解除時，如致甲方受有損害者，乙方應負賠償責任。 `}</p>
        <p>本合約因前項各款原因終止時，甲方不負給付乙方尚未履行服務費用之義務，且乙方應將已收受之費用按專案時程進度比例返還甲方。</p>
      </div>
    </Wrapper>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label11 />
      <Frame40 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame41 />
    </div>
  );
}

function Form18() {
  return (
    <Form22>
      <Frame69 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start="15" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px]">
          <span className="leading-[23px]">合約終止後之處理</span>
        </li>
      </ol>
    </div>
  );
}

function Frame42() {
  return (
    <Wrapper>
      <Text4 text="資安條款/合約終止及解除" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        乙方於本合約終止或解除時，應刪除或銷毀履行本合約所持有甲方之相關資料，或依甲方之指示返還或移交，並保留執行紀錄。
      </p>
    </Wrapper>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label12 />
      <Frame42 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame43 />
    </div>
  );
}

function Form19() {
  return (
    <Form22>
      <Frame70 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame44() {
  return (
    <Wrapper>
      <Text2 text="服務品質/ 保固責任及保固方式" />
      <Text3 text="二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應即謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。" />
    </Wrapper>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="16.保固" />
      <Frame44 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame45 />
    </div>
  );
}

function Form20() {
  return (
    <Form22>
      <Frame71 />
      <PrimitiveDiv />
    </Form22>
  );
}

function Frame46() {
  return (
    <Wrapper>
      <Text4 text="保證條款" />
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。 `}</p>
        <p className="mb-0">{`乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔： `}</p>
        <p className="mb-0">{`一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。 `}</p>
        <p className="mb-0">{`二、取得他人授權，使甲方能繼續利用工作項目。 `}</p>
        <p className="mb-0">{`三、於30日內返還甲方就工作項目已給付之費用。 `}</p>
        <p>如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。</p>
      </div>
    </Wrapper>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <LabelText text="17.權利及責任" />
      <Frame46 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame47 />
    </div>
  );
}

function Form21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          <Frame72 />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <Form />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
      <Form8 />
      <Form9 />
      <Form10 />
      <Form11 />
      <Form12 />
      <Form13 />
      <Form14 />
      <Form15 />
      <Form16 />
      <Form17 />
      <Form18 />
      <Form19 />
      <Form20 />
      <Form21 />
    </div>
  );
}

export default function Frame49() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative rounded-bl-[8px] rounded-br-[8px] size-full">
      <Frame48 />
    </div>
  );
}