import clsx from "clsx";
type PrimitiveButton2Props = {
  additionalClassNames?: string;
};

function PrimitiveButton2({ children, additionalClassNames = "" }: React.PropsWithChildren<PrimitiveButton2Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Label() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        資訊安全
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">
          <Frame3 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Label />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
      <Frame1 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <PrimitiveButton2 additionalClassNames="bg-[#ffe600]">
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        符合
      </p>
    </PrimitiveButton2>
  );
}

function PrimitiveButton1() {
  return (
    <PrimitiveButton2 additionalClassNames="bg-[rgba(255,255,255,0)]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        不符合
      </p>
    </PrimitiveButton2>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

export default function Form() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative size-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <PrimitiveDiv />
    </div>
  );
}