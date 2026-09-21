import { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';

// ==================== Types ====================
type ComplianceValue = 'comply' | 'non-comply' | 'not-applicable' | null;

interface CheckItem {
  id: string;
  label: string;
  subtitle?: string;
  hasInfoIcon?: boolean;
  description: string | string[];
  hasDateField?: boolean;
  dateFieldConfig?: {
    prefix: string;
    placeholder: string;
    suffix: string;
    extraFields?: { text: string; value: string }[];
  };
}

interface SectionData {
  id: string;
  title: string;
  items: CheckItem[];
}

// ==================== Data ====================
const SECTION_1: SectionData = {
  id: 'section-1',
  title: '(一) 基本要求',
  items: [
    {
      id: 's1-1',
      label: '合約期限',
      subtitle: '服務品質/ 維護責任與維護方式',
      hasInfoIcon: true,
      description: '',
      hasDateField: true,
      dateFieldConfig: {
        prefix: '本合約期間自',
        placeholder: '請選擇年月日',
        suffix: '起至驗收合格並交付約定文件之日止，共計',
        extraFields: [{ text: '年', value: '0' }],
      },
    },
    {
      id: 's1-2',
      label: '合約範圍',
      subtitle: '服務品質/ 維護責任與維護方式',
      hasInfoIcon: true,
      description: '',
      hasDateField: true,
      dateFieldConfig: {
        prefix: '本專案範圍為',
        placeholder: '請輸入服務範圍',
        suffix: '系統之維護服務',
      },
    },
    {
      id: 's1-3',
      label: '服務交付日期',
      subtitle: '服務品質/ 維護責任與維護方式',
      hasInfoIcon: true,
      description: '',
      hasDateField: true,
      dateFieldConfig: {
        prefix: '本專案應於',
        placeholder: '請選擇年月日',
        suffix: '約定之期限前完成',
      },
    },
    {
      id: 's1-4',
      label: '服務水準要求',
      subtitle: '服務品質/ 維護責任與維護方式',
      hasInfoIcon: true,
      description: [
        '乙方於本合約期間應使維護標的物經常保持良好狀態，維護標的物發生運作失常或任何故障時，乙方應以最迅速方法修復。',
        '本合約標的物之維護方式如下：',
        '一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。',
        '二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。',
      ],
    },
    {
      id: 's1-5',
      label: '',
      subtitle: '服務品質/ 維護時間',
      description: '乙方應提供全年無休，每周7×24維護服務，並提供叫修服務專線，乙方之專線或維修聯繫方式如有異動，應主動通知甲方。',
    },
    {
      id: 's1-6',
      label: '',
      subtitle: '服務品質/ 保固責任及保固方式',
      hasInfoIcon: true,
      description: [
        '乙方應於保固期間內提供5日每日24小時保固服務，以確保標的物之正常運作：',
        '一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。',
        '二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應即謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。',
      ],
    },
    {
      id: 's1-7',
      label: '服務變更規範',
      subtitle: '合約修訂',
      description: '本合約簽訂後，若需任何變更或修正，均須經過甲、乙雙方同意，以書面另行為之。',
    },
    {
      id: 's1-8',
      label: '服務驗收之標準',
      subtitle: '驗收及文件交付',
      hasInfoIcon: true,
      description: [
        '乙方應於本專案各期完成之日起10日內，以書面通知甲方依工作說明書辦理驗收手續，乙方並應配合甲方之需求派遣相關人員協同辦理驗收。',
        '甲方應於接獲乙方前項通知之翌日起10日內辦理驗收，並於開始驗收翌日起10日內覆文乙方，載明應改善之具體內容或簽具驗收單。若甲方屆期未回覆者，視同驗收合格。',
        '若經驗收發現有不合約定或標準者，乙方應於接獲甲方覆文20日內配合改善，並以書面檢具相關測試報告再向甲方請求驗收，其程序同前。',
        '前項情形，乙方之遲延責任依第X條約定辦理。',
        '乙方於驗收時，應交付甲方之軟體授權文件、操作手冊、說明書及保證書等，乙方同意甲方得因實際需要自行複製供甲方內部使用。乙方交付之前述文件如與合約或實際操作情況不符時，甲方最遲應於驗收完成後之30日內向乙方提出，乙方應於接獲甲方通知後3日內提交與合約及實際操作情況相符之文件予甲方。',
      ],
    },
    {
      id: 's1-9',
      label: '資通安全事件通報及應變處理作業程序',
      subtitle: '資訊安全',
      description: '乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。',
    },
    {
      id: 's1-10',
      label: '',
      subtitle: '特別約定',
      description: '乙方應具備緊急應變計畫，亦即乙方配合提供危機之處理方案，包括替代、重建方案及該計畫之檢討程序等，並同意配合甲方作緊急應變計畫及安排，以避免服務品質下降，而影響甲方之經營或客戶權益。',
    },
    {
      id: 's1-11',
      label: '對資訊服務供應商之稽核權條款',
      subtitle: '內部控制及查核/查核條款',
      description: [
        '乙方應依甲方督導，就本合約之作業流程訂定標準作業程序，執行內部控制及進行定期與不定期內部稽核，並留存紀錄以供查核，且配合甲方或其主管機關、中央銀行及其指定之人之要求及提供相關資訊或說明。',
        '乙方同意甲方得派員或委由專業第三人就前項作業流程、內部控制、內部稽核及其他事項進行定期或不定期之查核，並同意甲方之主管機關、中央銀行及其指定之人得取得受託事項之相關資料或報告及進行金融檢查，或命令其於限期內提供相關資料或報告。',
      ],
    },
    {
      id: 's1-12',
      label: '合約轉讓或同意分包之規範',
      subtitle: '次承攬禁止/禁止轉分包',
      description: [
        '乙方應自行完成本合約約定之全部工作。除本合約另有約定或經甲方事前書面同意者外，乙方不得將本合約工作之一部或全部委由第三人為之。',
        '乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。',
        '乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。',
      ],
    },
  ],
};

const SECTION_2: SectionData = {
  id: 'section-2',
  title: '(二) 公司與資訊服務供應商之服務與產品應載明事項：',
  items: [
    {
      id: 's2-1',
      label: '載明資訊委外服務或產品之智慧財產權及其授權範圍。',
      subtitle: '保證條款',
      description: [
        '乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。',
        '乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔：',
        '一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。',
        '二、取得他人授權，使甲方能繼續利用工作項目。',
        '三、於30日內返還甲方就工作項目已給付之費用。',
        '如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。',
      ],
    },
    {
      id: 's2-2',
      label: '資訊服務供應商如分包予其他供應商應載明(異動亦同)。',
      subtitle: '次承攬禁止/禁止轉分包',
      description: [
        '乙方應自行完成本合約約定之全部工作。除本合約另有約定或經甲方事前書面同意者外，乙方不得將本合約工作之一部或全部委由第三人為之。',
        '乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。',
        '乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。',
      ],
    },
    {
      id: 's2-3',
      label: '第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入服務與產品之機敏資料保護、授權與認證、安全性更新等。',
      subtitle: '資安條款/保密義務',
      description: '乙方之所屬人員對於機敏文件(含個資檔案)之交付，若為電子傳輸時應使用加密機制進行資料或文件之傳遞。',
    },
    {
      id: 's2-3-sub',
      label: '',
      subtitle: '資安條款',
      description: '乙方之所屬人員如需申請任何甲方之帳號與權限，皆應遵循甲方之相關申請流程，乙方之所屬人員存取及使用範圍應根據職務責任進行限定，包含使用者權限、網路存取規範、作業區域規範，以避免資訊或服務遭未授權修改或誤用。',
    },
    {
      id: 's2-3-sub2',
      label: '',
      subtitle: '資安條款',
      description: '乙方交付之軟硬體、系統及文件前，應先執行安全性檢查並確保無內藏惡意程式（如病毒、蠕蟲、特洛伊木馬、後門程式、間諜軟體等）及隱密通道（covert channel），並依甲方之要求而辦理原始碼掃描、程式/系統弱點掃描，提供檢測及掃描後之弱點修補報告；另乙方放置於網際網路之程式應通過黑箱測試並提供測試報告與弱點修補報告，以確保軟硬體、系統及文件無資訊安全風險。',
    },
    {
      id: 's2-4',
      label: '第一類投信投顧業者應載明採購之服務與產品於規劃設計時納入隱私保護機制(Privacy by design)之要求。',
      subtitle: '資安條款/保密義務',
      description: '乙方提供之產品應提供安全機制以保障甲方機密資料之安全，合約期間乙方亦應以善良管理人之注意義務保管機密資料，並應謹慎存放及處理。',
    },
    {
      id: 's2-5',
      label: '資訊服務供應商服務範圍涉及資通系統開發、維護與監控，應遵循【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】。',
      subtitle: '法令遵循',
      description: '如乙方提供之服務範圍涉及資通系統開發、維護與監控，應遵循證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範及其他相關自律規範等規定。',
    },
    {
      id: 's2-6',
      label: '【證券投資信託事業證券投資顧問事業資通系統安全防護基準自律規範】第七條 系統與服務獲得十三、公司如委外辦理核心系統開發應將系統發展生命週期各階段安全需求(含機密性、可用性、完整性)納入委外契約。',
      subtitle: '資安條款',
      description: '乙方執行系統開發時，應滿足甲方系統發展生命週期之相關安全要求。',
    },
    {
      id: 's2-7',
      label: '服務範圍涉及使用雲端運算服務，資訊服務供應商應遵循【證券投資信託事業證券投資顧問事業新興科技資通安全自律規範】。',
      subtitle: '法令遵循',
      description: '如乙方提供之服務範圍涉及使用雲端運算服務，應遵循證券投資信託事業證券投資顧問事業新興科技資通安全自律規範及其他相關自律規範等規定。',
    },
  ],
};

const SECTION_3: SectionData = {
  id: 'section-3',
  title: '(三) 資訊服務供應商之資安應符合下列要求：',
  items: [
    {
      id: 's3-1',
      label: '資訊服務供應商應遵循之資安要求事項、個人資料保護法與其他相關法規遵循與保密義務。',
      subtitle: '法令遵循',
      description: '乙方於履行本合約時，不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。',
    },
    {
      id: 's3-2',
      label: '資訊服務供應商應於系統交付時提供安全性檢測證明 (如行動應用程式資安檢測、源碼檢測、弱點掃描等)，並應確保交付之系統或程式無惡意程式及後門程式，其放置於網際網路之程式應通過程式碼掃描或黑箱測試。',
      subtitle: '資安條款',
      description: '乙方交付之軟硬體、系統及文件前，應先執行安全性檢查並確保無內藏惡意程式（如病毒、蠕蟲、特洛伊木馬、後門程式、間諜軟體等）及隱密通道（covert channel），並依甲方之要求而辦理原始碼掃描、程式/系統弱點掃描，其放置於網際網路之程式應通過黑箱測試，並提供檢測及掃描後之弱點修補報告，以確保軟硬體及文件無資訊安全風險。',
    },
    {
      id: 's3-3',
      label: '資訊服務供應商揭露第三方程式元件之來源與授權證明。',
      subtitle: '資安條款/保證條款',
      description: '乙方交付之產品如有使用第三方程式元件，應揭露其來源與授權證明。',
    },
    {
      id: 's3-4',
      label: '資訊服務供應商處理公司委託服務各項範圍資訊，能於公司要求期限內提供。',
      subtitle: '工作期限/服務品質',
      description: [
        '範例1',
        '本專案應於工作說明書約定之期限前完成。但因不可歸責於乙方之事由，致原定時程必須延長時，乙方得以書面檢具理由通知甲方。如因可歸責於甲方之事由致時間延長者，雙方應本於誠信另行協議延長期限 。',
        '前項工作期限包括測試、驗收及教育訓練之實施。',
        '',
        '範例2',
        '乙方應於合約期間內定期維護O次，乙方實施定期維護前，應事先與甲方人員聯絡並取得同意後，乙方應於雙方可配合之時間內派遣工程師至標的物之設置場所實施1至2小時之定期維護。',
      ],
    },
    {
      id: 's3-5',
      label: '資通(訊)服務供應商於處理公司資料應有明確區隔，並應予以加密保護。',
      subtitle: '資安條款',
      description: '乙方處理甲方公司資料時應與其他公司資料有明確區隔，並應予以加密保護。',
    },
    {
      id: 's3-6',
      label: '第一類投信投顧業者之資訊服務供應商應提供取得之資安及品質證照。',
      subtitle: '人員管理/資安條款/其他',
      description: '乙方應提供其所取得之資安及品質證照。',
    },
    {
      id: 's3-7',
      label: '公司應於簽約程序中確認資訊服務供應商保密切結事宜。',
      subtitle: '保密義務',
      hasInfoIcon: true,
      description: [
        '「機密資料」係指因本合約而由一方揭露予他方之任何營業、財務、技術、商業、客戶資料、個人資料或其他專有資料，但不包含下列資料：(1)於揭露時已為公開之知識；(2)在不違反保密義務之情況下，於揭露後成為公開知識或為接受資料者由其他方式所知悉；(3)於簽訂本合約前，即已為接受資料者所知悉；或(4)為接受資料者獨立發展而無利用揭露者之資料者。',
        '雙方應對他方機密資料以相同於保護自己機密資料的注意義務予以保護，但注意義務不得低於善良管理人注意義務。除依法令規定揭露外，接受資料者(1)不得將機密資料揭露予其他第三人；(2)除為履行本合約之目的外，不得以其他方式使用機密資料；與(3)如知悉他方之機密資料有未經授權而被揭露或使用之情事發生時，應將此情事通知他方。',
        '任一方除為實行本合約之目的而向有必要知悉該機密資料之員工、代理人、顧問、其他受僱者或其他參與本專案之人員透露者外，不得對任何無關第三人提供該機密資料。',
        '任一方應要求所屬員工及相關人員遵守本條保密之約定，該人員若有違反，違反方願負連帶賠償責任。',
        '本條約定之保密義務於本合約終止、解除或屆滿後三年內，仍繼續有效。',
        '乙方應於接獲甲方通知翌日起，將乙方所持有、保管之機密資料返還予甲方，或將機密資料予以銷毀，而不得以任何形式留存機密資料。甲方並有權要求乙方應以書面形式向甲方確認並未違反本條之約定。惟乙方得保留其按照有關法律或法規之規定或其內部檔案保存之要求而保留被納入其工作底稿之機密資料；以及，不得要求乙方返還或銷毀於日常備份系統保存之機密資料。所保留之任何上述機密資料將仍然受制於本合約之保密及使用限制條款。',
      ],
    },
    {
      id: 's3-8',
      label: '資訊服務供應商發生資安事件致公司受到影響時，資訊服務供應商的處置程序及責任。',
      subtitle: '資訊安全',
      description: '乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。。',
    },
    {
      id: 's3-9',
      label: '',
      subtitle: '特別約定',
      description: '乙方應具備緊急應變計畫，亦即乙方配合提供危機之處理方案，包括替代、重建方案及該計畫之檢討程序等，並同意配合甲方作緊急應變計畫及安排，以避免服務品質下降，而影響甲方之經營或客戶權益。',
    },
  ],
};

const ALL_SECTIONS = [SECTION_1, SECTION_2, SECTION_3];

const STORAGE_KEY = 'supplier-data-verification';

// ==================== Helper ====================
function loadFromStorage(): Record<string, ComplianceValue> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToStorage(data: Record<string, ComplianceValue>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ==================== Components ====================

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_info)">
          <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_info">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ComplianceToggle({ value, onChange }: { value: ComplianceValue; onChange: (v: ComplianceValue) => void }) {
  const options: { key: ComplianceValue; label: string }[] = [
    { key: 'comply', label: '符合' },
    { key: 'non-comply', label: '不符合' },
    { key: 'not-applicable', label: '不適用' },
  ];

  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1px] py-px relative rounded-[8px] shrink-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      {options.map((opt, idx) => {
        const isSelected = value === opt.key;
        const isFirst = idx === 0;
        const isLast = idx === options.length - 1;
        return (
          <button
            key={opt.key}
            onClick={() => onChange(value === opt.key ? null : opt.key)}
            className={`flex-[1_0_0] min-h-px min-w-px relative cursor-pointer border-none
              ${isFirst ? 'rounded-bl-[8px] rounded-tl-[8px]' : ''}
              ${isLast ? 'rounded-br-[8px] rounded-tr-[8px]' : ''}
              ${isSelected ? 'bg-[#ffe600]' : 'bg-transparent hover:bg-[#f6f6fa]'}
              transition-colors`}
          >
            {!isFirst && (
              <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-l border-solid inset-0 pointer-events-none" />
            )}
            <div className="flex items-center justify-center size-full">
              <div className="flex items-center justify-center px-[16px] py-[8px] w-full">
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${isSelected ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : ''}`} style={{ fontVariationSettings: isSelected ? "'wght' 700" : "'wght' 400" }}>
                  {opt.label}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function AllComplyCheckbox({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onChange(!checked); }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        flexShrink: 0,
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          backgroundColor: checked ? '#ffe600' : '#ffffff',
          border: checked ? '1.5px solid #ffe600' : '1.5px solid #cdcdcd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background-color 0.15s',
        }}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="#1a1a24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span
        style={{
          color: '#ffffff',
          fontSize: 16,
          lineHeight: '23px',
          letterSpacing: '0.48px',
          whiteSpace: 'nowrap',
          fontFamily: "'EYInterstate', 'Noto Sans JP', sans-serif",
          fontVariationSettings: "'wght' 400",
        }}
      >
        全部符合
      </span>
    </div>
  );
}

function SectionHeader({ title, allComply, onAllComplyChange }: { title: string; allComply: boolean; onAllComplyChange: (v: boolean) => void }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#1a1a24',
        padding: '16px 24px',
        gap: 10,
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          flex: 1,
          color: '#ffffff',
          fontSize: 18,
          letterSpacing: '0.54px',
          fontFamily: "'EYInterstate', 'Noto Sans JP', sans-serif",
          fontVariationSettings: "'wght' 700",
        }}
      >
        {title}
      </span>
      <AllComplyCheckbox checked={allComply} onChange={onAllComplyChange} />
    </div>
  );
}

function CheckItemRow({
  item,
  index,
  value,
  onChange,
  isLast,
}: {
  item: CheckItem;
  index: number;
  value: ComplianceValue;
  onChange: (v: ComplianceValue) => void;
  isLast: boolean;
}) {
  const descriptions = Array.isArray(item.description) ? item.description : item.description ? [item.description] : [];

  return (
    <div className="relative shrink-0 w-full">
      {!isLast && (
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
      )}
      <div className="flex items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pb-[16px] px-[24px] relative w-full">
          {/* Left: content */}
          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              {/* Label */}
              {item.label && (
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  {item.label.match(/^\d+\./) ? (
                    <p className="flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      {item.label}
                    </p>
                  ) : (
                    <ol className="block flex-[1_0_0] font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] min-h-px min-w-px relative text-[#1a1a24] text-[16px] tracking-[0.48px]" start={1} style={{ fontVariationSettings: "'wght' 700" }}>
                      <li className="ms-[24px] whitespace-pre-wrap">
                        <span className="leading-[23px]">{item.label}</span>
                      </li>
                    </ol>
                  )}
                </div>
              )}
              {/* Subtitle + Description */}
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] relative w-full">
                  {/* Subtitle */}
                  {item.subtitle && (
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                        {item.subtitle}
                      </p>
                      {item.hasInfoIcon && <InfoIcon />}
                    </div>
                  )}
                  {/* Date field config */}
                  {item.hasDateField && item.dateFieldConfig && (
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full flex-wrap">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                        {item.dateFieldConfig.prefix}
                      </p>
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]">
                        <div className="content-stretch flex items-center justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                            {item.dateFieldConfig.placeholder}
                          </p>
                          {item.dateFieldConfig.placeholder === '請選擇年月日' && <ChevronDownIcon />}
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                        {item.dateFieldConfig.suffix}
                      </p>
                      {item.dateFieldConfig.extraFields?.map((f, i) => (
                        <span key={i} className="flex items-center gap-[10px]">
                          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap">{f.value}</p>
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-ellipsis tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                            {f.text}
                          </p>
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Description */}
                  {descriptions.length > 0 && (
                    <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
                      {descriptions.map((d, i) => (
                        <p key={i} className={i < descriptions.length - 1 ? 'mb-0' : ''}>{d || ' '}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Right: toggle */}
          <ComplianceToggle value={value} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  section,
  values,
  onValueChange,
  allComply,
  onAllComplyChange,
}: {
  section: SectionData;
  values: Record<string, ComplianceValue>;
  onValueChange: (itemId: string, value: ComplianceValue) => void;
  allComply: boolean;
  onAllComplyChange: (v: boolean) => void;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <SectionHeader title={section.title} allComply={allComply} onAllComplyChange={onAllComplyChange} />
        </div>
        {section.items.map((item, idx) => (
          <CheckItemRow
            key={item.id}
            item={item}
            index={idx}
            value={values[item.id] || null}
            onChange={(v) => onValueChange(item.id, v)}
            isLast={idx === section.items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// ==================== Breadcrumb ====================
function PageBreadcrumb({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="flex items-center gap-[8px] shrink-0">
      <button
        className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[14px] tracking-[0.42px] cursor-pointer bg-transparent border-none p-0 hover:text-[#1a1a24] transition-colors"
        style={{ fontVariationSettings: "'wght' 400" }}
        onClick={() => onNavigate('home')}
      >
        首頁
      </button>
      <span className="text-[#747480] text-[14px]">/</span>
      <button
        className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[14px] tracking-[0.42px] cursor-pointer bg-transparent border-none p-0 hover:text-[#1a1a24] transition-colors"
        style={{ fontVariationSettings: "'wght' 400" }}
        onClick={() => onNavigate('risk-assessment')}
      >
        風險評估
      </button>
      <span className="text-[#747480] text-[14px]">/</span>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        供應商資料檢核與歸檔
      </p>
    </div>
  );
}

// ==================== Main Export ====================
interface SupplierDataVerificationPageProps {
  onNavigate: (page: string) => void;
}

export default function SupplierDataVerificationPage({ onNavigate }: SupplierDataVerificationPageProps) {
  const [values, setValues] = useState<Record<string, ComplianceValue>>(() => loadFromStorage());

  // Save to localStorage whenever values change
  useEffect(() => {
    saveToStorage(values);
  }, [values]);

  const handleValueChange = useCallback((itemId: string, value: ComplianceValue) => {
    setValues((prev) => ({ ...prev, [itemId]: value }));
  }, []);

  // Compute allComply for each section
  const getSectionAllComply = useCallback((section: SectionData): boolean => {
    return section.items.every((item) => values[item.id] === 'comply');
  }, [values]);

  // Handle allComply toggle for a section
  const handleAllComplyChange = useCallback((section: SectionData, checked: boolean) => {
    setValues((prev) => {
      const next = { ...prev };
      section.items.forEach((item) => {
        next[item.id] = checked ? 'comply' : null;
      });
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6fa]">
      <Header onNavigate={onNavigate} currentPage="risk-assessment" isFixed />
      <div className="pt-[152px] pb-[64px]">
        {/* 1440px container */}
        <div className="w-[1440px] max-w-full mx-auto px-[32px]">
          {/* Top bar: breadcrumb + back button */}
          <div className="flex items-center justify-between mb-[24px]">
            <PageBreadcrumb onNavigate={onNavigate} />
            <button
              className="flex items-center gap-[8px] px-[16px] py-[8px] bg-white rounded-[8px] border border-[#ececf3] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
              onClick={() => onNavigate('risk-assessment')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8H4M4 8L7.33 4.67M4 8L7.33 11.33" stroke="#1a1a24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                返回列表
              </p>
            </button>
          </div>

          {/* Title */}
          <h1 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[24px] text-[#1a1a24] tracking-[0.72px] leading-[normal] mb-[24px]" style={{ fontVariationSettings: "'wght' 700" }}>
            供應商資料檢核與歸檔
          </h1>

          {/* Sections */}
          <div className="flex flex-col gap-[24px]">
            {ALL_SECTIONS.map((section) => (
              <SectionCard
                key={section.id}
                section={section}
                values={values}
                onValueChange={handleValueChange}
                allComply={getSectionAllComply(section)}
                onAllComplyChange={(checked) => handleAllComplyChange(section, checked)}
              />
            ))}
          </div>

          {/* Bottom actions */}
          <div className="flex items-center justify-end gap-[16px] mt-[32px]">
            <button
              className="px-[24px] py-[12px] bg-white rounded-[8px] border border-[#ececf3] cursor-pointer hover:bg-[#f6f6fa] transition-colors font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24] tracking-[0.48px] leading-[23px]"
              style={{ fontVariationSettings: "'wght' 400" }}
              onClick={() => onNavigate('risk-assessment')}
            >
              取消
            </button>
            <button
              className="px-[24px] py-[12px] bg-[#ffe600] rounded-[8px] border-none cursor-pointer hover:bg-[#f5dd00] transition-colors font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] text-[#1a1a24] tracking-[0.48px] leading-[23px]"
              style={{ fontVariationSettings: "'wght' 700" }}
              onClick={() => {
                saveToStorage(values);
                onNavigate('risk-assessment');
              }}
            >
              儲存歸檔
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}