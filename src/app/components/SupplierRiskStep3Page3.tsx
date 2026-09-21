import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SuccessModal from './SuccessModal';

interface SupplierRiskStep3Page3Props {
  onNavigate?: (page: string) => void;
}

export default function SupplierRiskStep3Page3({ onNavigate }: SupplierRiskStep3Page3Props) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // 8個表單項的符合性狀態
  const [complianceStates, setComplianceStates] = useState<Record<number, 'compliant' | 'non-compliant' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
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

  // 計算當前頁面是否完成（所有8個表單項都已選擇）
  const isCurrentPageComplete = Object.values(complianceStates).every(state => state !== null);
  
  // 進度：總共3頁，當前頁面完成後為 3/3
  const totalPages = 3;
  const completedPages = isCurrentPageComplete ? 3 : 2;
  
  // 計算進度條寬度百分比
  const progressPercentage = (completedPages / totalPages) * 100;

  const handleSubmit = () => {
    if (isCurrentPageComplete) {
      setShowSuccessModal(true);
    }
  };

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
                  {/* 章节标题 */}
                  <SectionTitle text="(三) 資訊服務供應商之資安規範暨合不列要求：" onAllCompliant={handleAllCompliant} />
                  
                  {/* Form 1 */}
                  <FormRow
                    itemId={1}
                    number={1}
                    title="資訊服務供應商應確認之資安要求事項、個人資料保護及從其他相連法規變遷和保密條款。"
                    content="安全議題"
                    additionalContent="乙方負責任全程時，不得違反乙方所有商業上機密。乙方應予改為客戶要求，包括資訊資料使用設備及作業紀要等，資訊資源供應器正確維護及管及監測其資訊應器授效能及管理紀錄，以維保每期服務之契緊規定須為維項規紀錄及日紀錄應該保存期限為三年認開啟全日統保留備份份於各期重新行提供及紀錄。"
                    complianceValue={complianceStates[1]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 2 */}
                  <FormRow
                    itemId={2}
                    number={2}
                    title="資訊服務供應商對於系統及可移轉規格之鑑證規則 (如行業標準或合理收取例外、資產維護、規格檢測等)、規應提確定要之系統鑑證標準或其他規量式規定標準或範例協議確認資訊維護。"
                    content="資安規範"
                    additionalContent="乙方提交之名單時，成後送至存檔。提務符件允許後分之委保應器由送該應全證據才（如是後、規法、料身特身、屬守時），保守應全證據詳證名項選器證內客證應保全規應議（covert channel)，或條檢乙方保所的提期別是條應保至成檢器由證證器之應保加發議，拒應在現報可器檢，及提至條應加應，並保至改應器器加應送議協對於事務。"
                    complianceValue={complianceStates[2]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 3 */}
                  <FormRow
                    itemId={3}
                    number={3}
                    title="資訊服務供應商應確認三方規定其之交規鑑證保證規則。"
                    content="規定改/保密事務"
                    additionalContent="乙方提交之商運送該條件送及正方規定其器證，應確確正有規條確證。"
                    complianceValue={complianceStates[3]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 4 */}
                  <FormRow
                    itemId={4}
                    number={4}
                    title="資訊服務供應商應確認已加強正規鑑證保應規則群、能應正加強度有特保規則。"
                    content="工作規則/維加證器"
                    additionalContent="條例1：&newline;業係乙方之加強者處有之認設加群，加後之加強應示確之方業器，告其告器應該保送時條例，乙方有加證該證該說該規&newline;加後乙方商運業維係，能係改有條該發乙確。&newline;&newline;業係2&newline;乙方規有關確送確規設該時規係條，乙方規有與規規者，送至改為證之器據業提提及加發規群，乙方改規證正器該告之條運該改該器提該正號送該器維係發。"
                    complianceValue={complianceStates[4]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 5 */}
                  <FormRow
                    itemId={5}
                    number={5}
                    title="資業證該應送供應商應該已加強正規鑑證保應規則群、並應正加強保發送。"
                    content="該定條強"
                    additionalContent="乙方送應正加強該運該係送該送正加強保規群保、規應正加強保發送。"
                    complianceValue={complianceStates[5]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 6 */}
                  <FormRow
                    itemId={6}
                    number={6}
                    title="統一證確該規鑑應確之交規送該證該應確該器送該規之證加器該設該規則。"
                    content="人員條保/該該證器/運器"
                    additionalContent="乙方該發該該人規器之交規該該該該證確。"
                    complianceValue={complianceStates[6]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 7 */}
                  <FormRow
                    itemId={7}
                    number={7}
                    title="公司應於簽約程序中確認資訊服務供應商保密切結事宜。"
                    content="保密義務"
                    additionalContent="「機密資料」係指因本合約而由一方揭露予他方之任何營業、財務、技術、商業、客戶資料、個人資料或其他專有資料，但不包含下列資料：(1)於揭露時已為公開之知識；(2)在不違反保密義務之情況下，於揭露後成為公開知識或為接受資料者由其他方式所知悉；(3)於簽訂本合約前，即已為接受資料者所知悉；或(4)為接受資料者獨立發展而無利用揭露者之資料者。 &newline;雙方應對他方機密資料以相同於保護自己機密資料的注意義務予以保護，但注意義務不得低於善良管理人注意義務。除依法令規定揭露外，接受資料者(1)不得將機密資料揭露予其他第三人；(2)除為履行本合約之目的外，不得以其他方式使用機密資料；與(3)如知悉他方之機密資料有未經授權而被揭露或使用之情事發生時，應將此情事通知他方。 &newline;任一方除為實行本合約之目的而向有必要知悉該機密資料之員工、代理人、顧問、其他受僱者或其他參與本專案之人員透露者外，不得對任何無關第三人提供該機密資料。 &newline;任一方應要求所屬員工及相關人員遵守本條保密之約定，該人員若有違反，違反方願負連帶賠償責任。 &newline;本條約定之保密義務於本合約終止、解除或屆滿後三年內，仍繼續有效。 &newline;乙方應於接獲甲方通知翌日起，將乙方所持有、保管之機密資料返還予甲方，或將機密資料予以銷毀，而不得以任何形式留存機密資料。甲方並有權要求乙方應以書面形式向甲方確認並未違反本條之約定。惟乙方得保留其按照有關法律或法規之規定或其內部檔案保存之要求而保留被納入其工作底稿之機密資料；以及，不得要求乙方返還或銷毀於日常備份系統保存之機密資料。所保留之任何上述機密資料將仍然受制於本合約之保密及使用限制條款。"
                    complianceValue={complianceStates[7]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 8 */}
                  <FormRow
                    itemId={8}
                    number={8}
                    title="資訊服務供應商發生資安事件致公司受到影響時，資訊服務供應商的處置程序及責任。"
                    content="資訊安全"
                    additionalContent="乙方於履行本合約時，如發現有資訊安全事件（包括但不限於甲方受益人或客戶、員工之個人資料等資料遭棄置、非法入侵或病毒攻擊等），除應立即採取防制措施外，並應即時通報甲方及協助甲方進行相關處理程序。"
                    complianceValue={complianceStates[8]}
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

            {/* 提交按钮 */}
            <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[450px]">
              <div 
                className={`content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 transition-colors ${
                  isCurrentPageComplete 
                    ? 'bg-[#ffe600] cursor-pointer hover:bg-[#ffd700]' 
                    : 'bg-[#e3e3e3] cursor-not-allowed'
                }`}
                onClick={handleSubmit}
              >
                <div className={`flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px] ${
                  isCurrentPageComplete ? 'text-[#1a1a24]' : 'text-[#9b9ba1]'
                }`} style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="leading-[normal]">提交</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 成功弹窗 */}
      {showSuccessModal && (
        <SuccessModal 
          onClose={() => {
            setShowSuccessModal(false);
            onNavigate?.('home');
          }}
        />
      )}
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