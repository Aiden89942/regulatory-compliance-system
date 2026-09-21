import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

interface SupplierRiskStep3Page2Props {
  onNavigate?: (page: string) => void;
}

export default function SupplierRiskStep3Page2({ onNavigate }: SupplierRiskStep3Page2Props) {
  // 7個表單項的符合性狀態
  const [complianceStates, setComplianceStates] = useState<Record<number, 'compliant' | 'non-compliant' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
  });

  const handleComplianceChange = (itemNumber: number, value: 'compliant' | 'non-compliant') => {
    setComplianceStates(prev => ({
      ...prev,
      [itemNumber]: prev[itemNumber] === value ? null : value
    }));
  };

  const handleAllCompliant = () => {
    setComplianceStates(prev => {
      const newStates: Record<number, 'compliant' | 'non-compliant' | null> = {};
      Object.keys(prev).forEach(key => {
        newStates[Number(key)] = 'compliant';
      });
      return newStates;
    });
  };

  // 計算當前頁面是否完成（所有7個表單項都已選擇）
  const isCurrentPageComplete = Object.values(complianceStates).every(state => state !== null);
  
  // 進度：總共3頁，當前頁面完成後為 3/2
  const totalPages = 3;
  const completedPages = isCurrentPageComplete ? 2 : 1;
  
  // 計算進度條寬度百分比
  const progressPercentage = (completedPages / totalPages) * 100;

  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative min-h-screen w-full">
      {/* Header */}
      <Header onNavigate={onNavigate} currentPage="supplier-risk-assessment" />

      {/* 主要内容 */}
      <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 pt-[152px] pb-[100px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full flex-1">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]">
          {/* 面包屑 */}
          <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-[1024px]">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors"
                   onClick={() => onNavigate?.('home')}>
                  首頁
                </p>
              </div>
            </div>
            <ChevronRight />
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px]">
                  供應商管理
                </p>
              </div>
            </div>
            <ChevronRight />
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[-0.3125px]">
                  新增供應商
                </p>
              </div>
            </div>
          </div>

          {/* 步骤指示器 */}
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                {/* 步骤1 - 已完成 - 可点击 */}
                <div 
                  className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px] cursor-pointer"
                  onClick={() => onNavigate?.('supplier-risk-assessment')}
                >
                  <StepCircle number={1} status="completed" />
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px] hover:text-[#ffe600] transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
                      填寫資訊服務委外風險評估
                    </p>
                  </div>
                </div>

                {/* 连接线1 - 实线 */}
                <div className="h-0 relative shrink-0 w-[80px]">
                  <div className="absolute inset-[-1.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 3">
                      <path d="M0 1.5H80" stroke="#1A1A24" strokeWidth="3" />
                    </svg>
                  </div>
                </div>

                {/* 步骤2 - 已完成 - 可点击 */}
                <div 
                  className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px] cursor-pointer"
                  onClick={() => onNavigate?.('supplier-risk-step2')}
                >
                  <StepCircle number={2} status="completed" />
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px] hover:text-[#ffe600] transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
                      發送資訊供應商風險評估表與情資追蹤
                    </p>
                  </div>
                </div>

                {/* 连接线2 - 实线 */}
                <div className="h-0 relative shrink-0 w-[80px]">
                  <div className="absolute inset-[-1.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 3">
                      <path d="M0 1.5H80" stroke="#1A1A24" strokeWidth="3" />
                    </svg>
                  </div>
                </div>

                {/* 步骤3 - 当前步骤 - 可点击 */}
                <div className="content-stretch flex items-center relative shrink-0">
                  <div 
                    className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px] cursor-pointer"
                    onClick={() => onNavigate?.('supplier-risk-step3')}
                  >
                    <StepCircle number={3} status="active" />
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] hover:text-[#ffe600] transition-colors" style={{ fontVariationSettings: "'wght' 700" }}>
                        供應商資料檢核與歸檔
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 表单区域 */}
          <div className="content-stretch flex flex-col items-center px-0 py-[24px] relative shrink-0 w-full">
            {/* 白色表单内容区 */}
            <div className="bg-white relative rounded-[8px] shrink-0 w-[1024px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  {/* 章节标题 - (二) 公司與資訊供應商雙方之機密保護或退出型態管理： */}
                  <SectionTitle text="(二) 公司與資訊供應商雙方之機密保護或退出型態管理：" onAllCompliant={handleAllCompliant} />
                  
                  {/* Form 1 */}
                  <FormRow
                    itemId={1}
                    number={1}
                    title="載明雙方應為機密權益及之智慧財產權及其歸屬之規範。"
                    content="保密條款"
                    additionalContent="乙方履行本合約之過程時所知悉之任何屬於甲方之一切資料，乙方及乙方有關聯之人，包括而不限於乙方之受僱人、受任人，就所知悉之資料不得洩漏予第三人。甲方之一切資料包括但不限於甲方業務上可供他人使用之技術、方法、程序、配方、設計或其他可供他人使用之資訊，及其他業務上未公開之財務、營運資訊。&newline;一、委外計劃及工作內容。&newline;二、取得之個人基本資料、檔案及任何資訊。&newline;三、甲方對於委外事項之規劃及相關資料。&newline;乙方應對前項所規定之一切資料，於本合約期間負保密之義務。本合約終止或解除後亦應遵守，保密義務於本合約終止、解除或屆滿後三年，繼續有效。乙方如違反此約定者，應負損害賠償之責任，如因乙方之故意或過失，導致所洩漏資料之影響甲方之權利者，除應將損害賠償提高百分之二十五外，並得終止或解除本合約，乙方並應賠償甲方因此所產生之一切損失。"
                    complianceValue={complianceStates[1]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 2 */}
                  <FormRow
                    itemId={2}
                    number={2}
                    title="對雙類與保密事項提供分類及其保密措施與規範與廢棄處理。"
                    content="保密區分/處理方式"
                    additionalContent="乙方應遵守甲方訂定之法令遵循政策之資訊，並盡善良管理人之注意義務，採取必要安全及保密措施，避免所屬查詢人員資訊遭他人擅自蒐集、利用、處理、刪除或為其他危害資訊安全之行為，尤應制訂必要之管控措施以確保個人資料於合約終止或屆滿之後，能適當返還甲方或銷毀之，並確保留存及回復之完整性及保護之妥適性。&newline;除甲方另為指示者外，乙方應於本合約終止、解除或期滿時，或甲方請求時，將依本合約所持有、保管、產出之甲方一切資料及儲存該等資料之儲存媒體返還予甲方或遵照甲方指示處理，並依甲方指示之方式證明確已返還或銷毀該資料，否則應按全部資訊資料損失或甲方所生之損害賠償，經甲方請求後七日內給付。"
                    complianceValue={complianceStates[2]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 3 */}
                  <FormRow
                    itemId={3}
                    number={3}
                    title="當一方移轉時相關之機密取得與保護規範並關注是否與第三資訊業務代理人應貴訊機密之議題或資料保護。例如：觸犯侵害營業秘密罪(營業秘密法)之證，以及觸犯內線交易刑責(證券交易法)等，將違規風險降至最低。"
                    content="資安條款/保密義務"
                    additionalContent="乙方之供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定。"
                    complianceValue={complianceStates[3]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 4 - 第二部分 */}
                  <FormRow
                    itemId={4}
                    number={3}
                    title=""
                    content="資安條款"
                    additionalContent="乙方之受僱者、經理人及其有權代表人等(或任何乙方指派參與本專案服務之人員)，不得為下列行為：(短線交易、 操縱、 特殊渠道， 即洗錢行為)。乙方及與本合約有關事項所知悉之受僱者、經理人及其有權代表人等(或任何乙方指派參與本專案服務之人員)，知悉有重大影響甲方或其關係企業公司股票價格之消息時，於該消息明確後，未公開或公開後未滿十八小時，不得自行或以他人名義買入或賣出該公司之股票或其他具有股權性質之有價證券(covert channel)。違反證券交易法第一百五十七條之一規定者，處三年以下有期徒刑，或科或併科新臺幣一百萬元以上二億元以下罰金。乙方知悉本專案之人員對於職務上所知悉之事項有洩漏或交付於他人或以其他任何方式使用而為自己或他人在證券交易圖利之行為者，應自負其責；致甲方或其關係企業受有損害時，應負賠償責任。"
                    complianceValue={complianceStates[4]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 5 - 第三部分 */}
                  <FormRow
                    itemId={5}
                    number={3}
                    title=""
                    content="資安條款"
                    additionalContent="乙方之受僱者、經理人及其有權代表人等(或任何乙方指派參與本專案服務之人員)，不得有藉提供甲方專業服務或工作所獲得之管道或協助、工具、方法等便利，從事使自己或第三人將財產之取得移轉，以掩飾或隱匿不法來源或實際控制財產或隱匿重大違反稅捐稽徵法之犯罪所得之行為。違反洗錢防制法第十四條第一項規定者，處七年以下有期徒刑，併科新臺幣五百萬元以下罰金；法人犯前項之罪者，處罰其行為負責人，並對該法人科以前項之罰金。"
                    complianceValue={complianceStates[5]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 6 */}
                  <FormRow
                    itemId={6}
                    number={4}
                    title="第一組包說業表建銀與核分之驗證資訊及其代理時保持人員私過度(Privacy by design)之意義。"
                    content="資安條款/保密義務"
                    additionalContent="乙方應設立之技術面資訊資料必須包括但不限於防範非法使用：避免將應保密之資訊資料揭露予未經授權之第三人，並避免揭露該資訊資料之後續使用或處理用途方式。"
                    complianceValue={complianceStates[6]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 7 */}
                  <FormRow
                    itemId={7}
                    number={5}
                    title="對雙據高信與保密規範之查核資訊及技術標及公司業務之技術【建構政府採購意國產業條總運管準國標準】。"
                    content="法令遵循"
                    additionalContent="如乙方有所違反之情形發生時，應遵循並配合母公司並及時處理合宜補充措施或移除執行本合約之人員或合作廠商。"
                    complianceValue={complianceStates[7]}
                    onComplianceChange={handleComplianceChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* 底部进度条和按钮 */}
      <div className="bg-[#2e2e38] fixed bottom-0 left-0 right-0 shrink-0 w-full z-40">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full max-w-[1024px] mx-auto">
            {/* 进度条 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] content-stretch flex h-[20px] items-center justify-between leading-[23px] ml-0 mt-0 relative text-[#ececf3] text-[16px] text-nowrap tracking-[0.48px] w-[300px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
                  完成進度
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] not-italic relative shrink-0">{totalPages}/{completedPages}</p>
              </div>
              <div className="[grid-area:1_/_1] bg-[#ececf3] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px] w-[300px]" />
              {progressPercentage > 0 && (
                <div 
                  className="[grid-area:1_/_1] bg-[#ffe600] h-[12px] ml-0 mt-[32px] rounded-[3.35544e+07px]" 
                  style={{ width: `${(progressPercentage / 100) * 300}px` }} 
                />
              )}
            </div>

            {/* 下一页按钮 */}
            <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[450px]">
              <div 
                className={`content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 transition-colors ${
                  isCurrentPageComplete 
                    ? 'bg-[#ffe600] cursor-pointer hover:bg-[#ffd700]' 
                    : 'bg-[#e3e3e3] cursor-not-allowed'
                }`}
                onClick={() => {
                  if (isCurrentPageComplete) {
                    onNavigate?.('supplier-risk-step3-page3');
                  }
                }}
              >
                <div className={`flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px] ${
                  isCurrentPageComplete ? 'text-[#1a1a24]' : 'text-[#9b9ba1]'
                }`} style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="leading-[normal]">下一頁</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 步骤圆圈组件
function StepCircle({ number, status }: { number: number; status: 'completed' | 'active' | 'inactive' }) {
  if (status === 'completed') {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="relative size-[60px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="#2E2E38" r="30" />
          </svg>
        </div>
        <div className="[grid-area:1_/_1] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
          <p className="leading-[normal]">{number}</p>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="relative size-[60px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="#FFE600" r="30" />
          </svg>
        </div>
        <div className="[grid-area:1_/_1] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
          <p className="leading-[normal]">{number}</p>
        </div>
      </div>
    );
  }

  // inactive
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="relative size-[60px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="29.25" stroke="#C4C4CD" strokeWidth="1.5" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] absolute font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic text-[#747480] text-[22px] text-nowrap">{number}</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function SectionTitle({ text, onAllCompliant }: { text: string; onAllCompliant: () => void }) {
  const [checked, setChecked] = useState(false);
  
  const handleClick = () => {
    setChecked(true);
    onAllCompliant();
  };

  return (
    <div className="bg-[#1a1a24] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-white tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
            {text}
          </p>
          <div 
            className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
            onClick={handleClick}
          >
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[2.5px] shrink-0 size-[28px]">
              <div className={`relative rounded-[4px] shrink-0 size-[20px] ${checked ? 'bg-[#ffe600]' : 'bg-white'} flex items-center justify-center`}>
                {checked && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="#1a1a24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div aria-hidden="true" className={`absolute border-[1.25px] border-solid inset-0 pointer-events-none rounded-[4px] ${checked ? 'border-[#ffe600]' : 'border-[#cdcdcd]'}`} />
              </div>
            </div>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
              全部符合
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceSelector({ 
  value, 
  onChange
}: { 
  value: 'compliant' | 'non-compliant' | null; 
  onChange: (value: 'compliant' | 'non-compliant') => void;
}) {
  return (
    <div className="content-stretch flex h-[38px] items-center pl-px pr-[1.016px] py-px relative rounded-[8px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      {/* 符合按鈕 */}
      <div 
        className={`basis-0 grow min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 cursor-pointer transition-colors ${
          value === 'compliant' ? 'bg-[#ffe600]' : 'bg-[rgba(255,255,255,0)]'
        }`}
        onClick={() => onChange('compliant')}
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
            <p className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px] ${
              value === 'compliant' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
            }`} style={{ fontVariationSettings: value === 'compliant' ? "'wght' 700" : "'wght' 400" }}>
              符合
            </p>
          </div>
        </div>
      </div>
      {/* 不符合按鈕 */}
      <div 
        className={`basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer transition-colors ${
          value === 'non-compliant' ? 'bg-[#ffe600]' : 'bg-[rgba(255,255,255,0)]'
        }`}
        onClick={() => onChange('non-compliant')}
      >
        <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[8px] relative w-full">
            <p className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px] ${
              value === 'non-compliant' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
            }`} style={{ fontVariationSettings: value === 'non-compliant' ? "'wght' 700" : "'wght' 400" }}>
              不符合
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormRow({ 
  itemId,
  number, 
  title, 
  content,
  additionalContent,
  complianceValue,
  onComplianceChange
}: { 
  itemId: number;
  number: number; 
  title: string; 
  content: string;
  additionalContent?: string;
  complianceValue: 'compliant' | 'non-compliant' | null;
  onComplianceChange: (itemNumber: number, value: 'compliant' | 'non-compliant') => void;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ececf3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-[24px] relative w-full">
          {/* 左侧内容区 */}
          <div className="content-stretch flex items-start relative shrink-0 w-[780px]">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              {/* 标题 */}
              {title && (
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start={number} style={{ fontVariationSettings: "'wght' 700" }}>
                    <li className="ms-[24px]">
                      <span className="leading-[23px]">{title}</span>
                    </li>
                  </ol>
                </div>
              )}
              
              {/* 内容区 */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">
                    {/* 主要内容 */}
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        {content}
                      </p>
                    </div>
                    
                    {/* 附加内容 - 多行文本 */}
                    {additionalContent && (
                      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                        {additionalContent.split('&newline;').map((line, index) => (
                          <p key={index} className={index < additionalContent.split('&newline;').length - 1 ? "mb-0" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧选择按钮 */}
          <ComplianceSelector
            value={complianceValue}
            onChange={(value) => onComplianceChange(itemId, value)}
          />
        </div>
      </div>
    </div>
  );
}