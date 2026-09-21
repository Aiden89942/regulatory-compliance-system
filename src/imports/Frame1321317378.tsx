function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[2.5px] shrink-0 size-[28px]" data-name="checkbox-input">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]">
          <div aria-hidden="true" className="absolute border-[#cdcdcd] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        全部符合
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1a1a24] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] min-h-px min-w-px relative text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
            (二) 公司與資訊服務供應商之服務與產品應載明事項：
          </p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">載明資訊委外服務或產品之智慧財產權及其授權範圍。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        保證條款
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame23 />
          <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="mb-0">{`乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。 `}</p>
            <p className="mb-0">{`乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔： `}</p>
            <p className="mb-0">{`一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。 `}</p>
            <p className="mb-0">{`二、取得他人授權，使甲方能繼續利用工作項目。 `}</p>
            <p className="mb-0">{`三、於30日內返還甲方就工作項目已給付之費用。 `}</p>
            <p>如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label />
      <Frame2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton />
      <PrimitiveButton1 />
      <PrimitiveButton2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">資訊服務供應商如分包予其他供應商應載明(異動亦同)。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        次承攬禁止/禁止轉分包
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame24 />
          <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="mb-0">{`乙方應自行完成本合約約定之全部工作。除本合約另有約定或經甲方事前書面同意者外，乙方不得將本合約工作之一部或全部委由第三人為之。 `}</p>
            <p className="mb-0">{`乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。 `}</p>
            <p>乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label1 />
      <Frame4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton3 />
      <PrimitiveButton4 />
      <PrimitiveButton5 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入服務與產品之機敏資料保護、授權與認證、安全性更新等。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        資安條款/保密義務
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame26 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方之所屬人員對於機敏文件(含個資檔案)之交付，若為電子傳輸時應使用加密機制進行資料或文件之傳遞。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label2 />
      <Frame6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame5 />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton6 />
      <PrimitiveButton7 />
      <PrimitiveButton8 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        資安條款
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame28 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方之所屬人員如需申請任何甲方之帳號與權限，皆應遵循甲方之相關申請流程，乙方之所屬人員存取及使用範圍應根據職務責任進行限定，包含使用者權限、網路存取規範、作業區域規範，以避免資訊或服務遭未授權修改或誤用。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame8 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame7 />
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton9 />
      <PrimitiveButton10 />
      <PrimitiveButton11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        資安條款
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame30 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方交付之軟硬體、系統及文件前，應先執行安全性檢查並確保無內藏惡意程式（如病毒、蠕蟲、特洛伊木馬、後門程式、間諜軟體等）及隱密通道（covert channel），並依甲方之要求而辦理原始碼掃描、程式/系統弱點掃描，提供檢測及掃描後之弱點修補報告；另乙方放置於網際網路之程式應通過黑箱測試並提供測試報告與弱點修補報告，以確保軟硬體、系統及文件無資訊安全風險。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame9 />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton14() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv4() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton12 />
      <PrimitiveButton13 />
      <PrimitiveButton14 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        4.第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入隱私保護機制(Privacy by design)之要求。
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        資安條款/保密義務
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame32 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方提供之產品應提供安全機制以保障甲方機密資料之安全，合約期間乙方亦應以善良管理人之注意義務保管機密資料，並應謹慎存放及處理。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label3 />
      <Frame12 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function PrimitiveButton15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton17() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv5() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton15 />
      <PrimitiveButton16 />
      <PrimitiveButton17 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">資訊服務供應商服務範圍涉及資通系統開發、維護與監控，應遵循【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        法令遵循
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame34 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            如乙方提供之服務範圍涉及資通系統開發、維護與監控，應遵循證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範及其他相關自律規範等規定。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label4 />
      <Frame14 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame13 />
    </div>
  );
}

function PrimitiveButton18() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton19() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton20() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv6() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton18 />
      <PrimitiveButton19 />
      <PrimitiveButton20 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】第七條 系統與服務獲得十三、公司如委外辦理核心系統開發應將系統發展生命週期各階段安全需求(含機密性、可用性、完整性)納入委外契約。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        資安條款
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame36 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            乙方執行系統開發時，應滿足甲方系統發展生命週期之相關安全要求。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label5 />
      <Frame16 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame15 />
    </div>
  );
}

function PrimitiveButton21() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton22() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton23() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv7() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton21 />
      <PrimitiveButton22 />
      <PrimitiveButton23 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start="1" style={{ fontVariationSettings: "'wght' 700" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[23px]">服務範圍涉及使用雲端運算服務，資訊服務供應商應遵循【證券投資信託事業證券投資顧問事業新興科技資通安全自律規範】。</span>
        </li>
      </ol>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        法令遵循
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
          <Frame39 />
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
            如乙方提供之服務範圍涉及使用雲端運算服務，應遵循證券投資信託事業證券投資顧問事業新興科技資通安全自律規範及其他相關自律規範等規定。
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Label6 />
      <Frame18 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame17 />
    </div>
  );
}

function PrimitiveButton24() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="Primitive.button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17px] pr-[16px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不符合
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton26() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            不適用
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv8() {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[200px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveButton24 />
      <PrimitiveButton25 />
      <PrimitiveButton26 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Form">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center px-[24px] relative w-full">
            <Frame38 />
            <PrimitiveDiv8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame21 />
            <PrimitiveDiv />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame22 />
            <PrimitiveDiv1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame25 />
            <PrimitiveDiv2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame27 />
            <PrimitiveDiv3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame29 />
            <PrimitiveDiv4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame31 />
            <PrimitiveDiv5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame33 />
            <PrimitiveDiv6 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Form">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
            <Frame35 />
            <PrimitiveDiv7 />
          </div>
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

export default function Frame40() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[8px] size-full">
      <Frame20 />
    </div>
  );
}