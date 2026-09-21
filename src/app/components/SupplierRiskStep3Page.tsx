import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

interface SupplierRiskStep3PageProps {
  onNavigate?: (page: string) => void;
}

export default function SupplierRiskStep3Page({ onNavigate }: SupplierRiskStep3PageProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('證券投資信託事業證券投資顧問事業供應鏈風險管理自律規範】');
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  
  // 每个表单项的符合性状态：null（未选择）、'compliant'（符合）、'non-compliant'（不符合）
  const [complianceStates, setComplianceStates] = useState<Record<number, 'compliant' | 'non-compliant' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
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

  // 計算當前頁面是否完成（所有17個表單項都已選擇）
  const isCurrentPageComplete = Object.values(complianceStates).every(state => state !== null);
  
  // 進度：總共3頁，當前頁面完成後為 3/1
  const totalPages = 3;
  const completedPages = isCurrentPageComplete ? 1 : 0;
  
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
            {/* 顶部标题区 - 浅灰色背景 */}
            <div className="bg-[#c4c4cd] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1024px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] h-[26px] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] w-[976px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  資訊服務委外合約條款檢核表
                </p>
                
                {/* 检核范本下拉 */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      檢核範本
                    </p>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-between p-[12px] relative w-full cursor-pointer" onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}>
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                          {selectedTemplate}
                        </p>
                        <ChevronDown />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 白色表单内容区 */}
            <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[1024px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  {/* 章节标题 - (一) 基本要求 */}
                  <SectionTitle text="(一) 基本要求" onAllCompliant={handleAllCompliant} />
                  
                  {/* Form 1 - 合約期限 */}
                  <FormRowWithInput
                    number={1}
                    title="合約期限"
                    subtitle="服務品質/ 維護責任與維護方式"
                    showInfo={true}
                    complianceValue={complianceStates[1]}
                    onComplianceChange={handleComplianceChange}
                  >
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        本合約期間自
                      </p>
                      <DatePickerInput text="請選擇年月日" />
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        起至驗收合格並交付約定文件之日止，共計
                      </p>
                      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]">0</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        年
                      </p>
                    </div>
                  </FormRowWithInput>
                  
                  {/* Form 2 - 合約範圍 */}
                  <FormRowWithInput
                    number={2}
                    title="合約範圍"
                    subtitle="服務品質/ 維護責任與維護方式"
                    showInfo={true}
                    complianceValue={complianceStates[2]}
                    onComplianceChange={handleComplianceChange}
                  >
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        本專案範圍為
                      </p>
                      <TextInput text="請輸入服務範圍" />
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        系統之維護服務
                      </p>
                    </div>
                  </FormRowWithInput>
                  
                  {/* Form 3 - 服務交付日期 */}
                  <FormRowWithInput
                    number={3}
                    title="服務交付日期"
                    subtitle="服務品質/ 維護責任與維護方式"
                    showInfo={true}
                    complianceValue={complianceStates[3]}
                    onComplianceChange={handleComplianceChange}
                  >
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        本專案應於
                      </p>
                      <DatePickerInput text="請選擇年月日" />
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        約定之期限前完成
                      </p>
                    </div>
                  </FormRowWithInput>
                  
                  {/* Form 4 - 服務水準要求 */}
                  <FormRow
                    number={4}
                    title="服務水準要求"
                    content="服務品質/ 維護責任與維護方式"
                    additionalContent="乙方於本合約期間應使維護標的物經常保持良好狀態，維護標的物發生運作失常或任何故障時，乙方應以最迅速方法修復。\n本合約標的物之維護方式如下：\n一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。\n二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。"
                    complianceValue={complianceStates[4]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 5 - 服務變更規範 */}
                  <FormRow
                    number={5}
                    title="服務變更規範"
                    content="服務變更之處理流程與範圍"
                    additionalContent="本合約訂定後，如發生本合約工作須予變更或追加之情況，甲方得以書面通知乙方辦理變更，並經雙方協議後依變更之工作內容增減合約價款或展延工作期間。但經雙方書面同意者不在此限。\n未經甲方以書面通知辦理變更，乙方不得自行變更本合約之內容。\n乙方履行本合約過程中，如須變更服務內容或進度者，應依書面向甲方提出請，經甲方同意後始得進行變更工作。若有爭議，雙方應本誠信原則協商處理之。\n甲方不得藉口局部變更須重新訂定合約，或解除、終止原訂合約之一部或全部或要求降低合約價款"
                    complianceValue={complianceStates[5]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 6 - 服務驗收之標準 */}
                  <FormRow
                    number={6}
                    title="服務驗收之標準"
                    content="系統驗收日期"
                    additionalContent="乙方應於 [請選擇年月日] 前完成本專案開發。乙方應於完成本專案開發後，以書面通知甲方進行初驗。初驗不符者，甲方應以書面通知乙方限期改善，改善完成後進行複驗。依此類推，至初驗合格為止。\n甲方應於初驗合格後 30 日內完成正式驗收。正式驗收不符者，甲方應以書面通知乙方限期改善。改善完成後，甲方進行複驗。複驗不符者，甲方得終止或解除本合約。"
                    complianceValue={complianceStates[6]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 7 - 資通安全事件通報及應變處理作業程序 */}
                  <FormRow
                    number={7}
                    title="資通安全事件通報及應變處理作業程序"
                    content="資通安全事件之通報及應變處理"
                    additionalContent="乙方執行本委外作業時，如發生疑似資通安全事件，應即進行通報、應變及調查，以減少災害及迅速恢復正常作業。\n乙方應指定專人負責本委外作業之資通安全事件通報及應變處理作業，並將窗口資料通知甲方，如有異動，應即通知甲方。\n乙方發生資通安全事件時，應即時以電話或其他適當方式向甲方通報，並於 24 小時內以書面陳報事件經過、影響範圍及因應措施等相關資料，事後並應提出完整報告。\n乙方發生資通安全事件致甲方受有損害時，乙方應依相關法令規定及本合約約定負損害賠償責任。"
                    complianceValue={complianceStates[7]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 8 - 對資訊服務供應商之稽核權條款 */}
                  <FormRow
                    number={8}
                    title="對資訊服務供應商之稽核權條款"
                    content="查核"
                    additionalContent="甲方及主管機關得隨時派員對乙方執行本合約有關事項進行查核，乙方應予配合，不得拒絕或規避。\n為確保乙方所提供之服務符合本合約之規定，甲方或甲方委託之第三人得對乙方進行查核作業，乙方應予以配合並提供必要之協助。如有缺失事項，甲方得要求乙方限期改善，屆期未完成改善者，方得終止或解除本合約。\n甲方或其指定之第三人得至乙方營業處所或服務提供地點，對乙方之作業程序、內部控制制度及其執行狀況進行查核，乙方不得拒絕或規避。\n乙方應依甲方通知期限配合查核作業，並應於查核結束後提供書面聲明，確認已配合查核作業；如有缺失事項，應於甲方通知期限內完成改善，並向甲方提出改善報告。\n甲方及其主管機關對於查核結果，得要求乙方限期提出改善計畫及其執行情形，乙方應於接獲甲方通知期限內改善，並向甲方提出改善報告。屆期未完成改善或改善無效者，甲方得終止或解除本合約。\n乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。\n乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。"
                    complianceValue={complianceStates[8]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 9 - 合約轉讓或同意分包之規範 */}
                  <FormRow
                    number={9}
                    title="合約轉讓或同意分包之規範"
                    content="合約轉讓與分包"
                    additionalContent="本合約權利義務之全部或一部，非經雙方書面同意，任一方不得轉讓予第三人。\n乙方經甲方書面同意將本合約工作之一部或全部委由第三人為之者，該第三人關於工作之履行有故意或過失時，乙方應與自己之故意或過失負同一責任；如甲方認為該第三人有不能履行本合約之虞者，甲方得通知乙方更換之，乙方應於接獲甲方通知之日起3日內無條件撤換。\n乙方於自行履行或依本合約約定經甲方書面同意將一部或全部工作委由第三人履行本合約時，乙方應確保其供應體系(包括但不限於乙方、乙方之受僱者、分包商、分包商之受僱者、再分包及再分包商受僱者等)不得違反法令強制或禁止規定、公共秩序及善良風俗，並皆應遵守證券投資信託及顧問法、洗錢防制法、個人資料保護法、金融消費者保護法、營業秘密法及其他甲方主管機關訂定之相關法令及其他相關自律規範等規定，並遵循相關資訊安全國際標準要求及甲方相關資訊安全管理規範及保密規定。"
                    complianceValue={complianceStates[9]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 10 - 保密義務條款 */}
                  <FormRow
                    number={10}
                    title="保密義務條款"
                    content="保密義務"
                    additionalContent="「機密資料」係指因本合約而由一方揭露予他方之任何營業、財務、技術、商業、客戶資料、個人資料或其他專有資料，但不包含下列資料：(1)於揭露時已為公開之知識；(2)在不違反保密義務之情況下，於揭露後成為公開知識或為接受資料者由其他方式所知悉；(3)於簽訂本合約前，即已為接受資料者所知悉；或(4)為接受資料者獨立發展而無利用揭露者之資料者。\n雙方應對他方機密資料以相同於保護自己機密資料的注意義務予以保護，但注意義務不得低於善良管理人注意義務。除依法令規定揭露外，接受資料者(1)不得將機密資料揭露予其他第三人；(2)除為履行本合約之目的外，不得以其他方式使用機密資料；與(3)如知悉他方之機密資料有未經授權而被揭露或使用之情事發生時，應將此情事通知他方。\n任一方除為實行本合約之目的而向有必要知悉該機密資料之員工、代理人、顧問、其他受僱者或其他參與本專案之人員透露者外，不得對任何無關第三人提供該機密資料。\n任一方應要求所屬員工及相關人員遵守本條保密之約定，該人員若有違反，違反方願負連帶賠償責任。\n本條約定之保密義務於本合約終止、解除或屆滿後三年內，仍繼續有效。\n乙方應於接獲甲方通知翌日起，將乙方所持有、保管之機密資料返還予甲方，或將機密資料予以銷毀，而不得以任何形式留存機密資料。甲方並有權要求乙方應以書面形式向甲方確認並未違反本條之約定。惟乙方得保留其按照有關法律或法規之規定或其內部檔案保存之要求而保留被納入其工作底稿之機密資料；以及，不得要求乙方返還或銷毀於日常備份系統保存之機密資料。所保留之任何上述機密資料將仍然受制於本合約之保密及使用限制條款。"
                    complianceValue={complianceStates[10]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 11 - 罰則與損害賠償條款 */}
                  <FormRow
                    number={11}
                    title="罰則與損害賠償條款"
                    content="罰則"
                    additionalContent="乙方因可歸責於自己之事由，致未能於本合約(及工作說明書)約定之時限內完成本專案者，每逾一日(未滿一日以一日計算)應按本合約總價款千分之三之金額，給付甲方作為遲延罰款。\n乙方未依約定實施定期保養者，每逾一日(未滿一日以一日計算)應按本合約總價款千分之三之金額，給付甲方作為遲延罰款。\n乙方未於約定時限到場維修、完成修復或提供暫時性過渡處理之替代方案者，每逾一小時(未滿一小時以一小時計算)應按本合約總價款千分之一之金額，給付甲方作為遲延罰款。\n乙方於本合約期間，不依約定配合查核者，每次應按本合約總價款千分之三之金額，給付甲方作為懲罰性違約金。\n乙方於本合約期間、期滿、解除或終止後，如有違反第X條至第X條任一條之約定者，乙方應按本合約總價款百分之三十之金額，給付甲方作為懲罰性違約金。\n本條之罰款及違約金，甲方得逕自應付之當期價款中扣除之。"
                    complianceValue={complianceStates[11]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 12 - 爭議處理程序 */}
                  <FormRow
                    number={12}
                    title="爭議處理程序"
                    content="爭議處理"
                    additionalContent="因本合約所生之爭議，雙方同意以台灣台北地方法院為第一審管轄法院。但依法律規定專屬管轄者，不在此限。"
                    complianceValue={complianceStates[12]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 13 - 違約處理條款 */}
                  <FormRow
                    number={13}
                    title="違約處理條款"
                    content="違約處理"
                    additionalContent="乙方如有下列情事之一者，甲方得以書面通知乙方終止或解除本合約之全部或一部，乙方不得異議，並應賠償甲方因此所受之損害：\n一、乙方違反本合約之任何約定，經甲方定期催告後，於期限內仍未改正者。\n二、乙方履約有瑕疵，經甲方定期通知改正而逾期未改正者。\n三、乙方對於甲方或其他第三人之權利主張，經法院判決確定為無理由者。\n四、乙方因財務困難，致無法履約者。\n五、乙方宣告破產或進行重整、清算程序，或發生其他類似情事，致無法履約者。\n六、乙方將本合約轉讓予第三人，或將本合約之一部分交付第三人履行，未經甲方事前書面同意者。"
                    complianceValue={complianceStates[13]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 14 - 合約終止規範 */}
                  <FormRow
                    number={14}
                    title="合約終止規範"
                    content="合約之終止"
                    additionalContent="本合約有效期間內，除經雙方書面同意終止外，任何一方不得任意終止本合約。但於下列情形，任一方得終止本合約：\n一、因不可抗力事由致無法履行本合約，經雙方協議無法達成共識者。\n二、他方違反本合約之約定，經催告於相當期間內仍不改正者。\n三、本合約另有約定者。\n甲方於本合約有效期間內得隨時以書面通知乙方終止本合約。"
                    complianceValue={complianceStates[14]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 15 - 合約終止後之處理 */}
                  <FormRow
                    number={15}
                    title="合約終止後之處理"
                    content="合約終止後之處理"
                    additionalContent="本合約終止或解除時，乙方應即停止執行本合約工作，並應於甲方通知之期限內，將甲方交付之資料、文件及相關物品返還甲方。\\n本合約終止或解除時，乙方已完成之工作，經甲方驗收合格者，甲方應按完成部分之價值給付報酬。\\n本合約之終止或解除，不影響甲方依本合約或法律規定對乙方請求損害賠償或違約金之權利。"
                    complianceValue={complianceStates[15]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 16 - 保固 */}
                  <FormRow
                    number={16}
                    title="保固"
                    content="服務品質/ 保固責任及保固方式"
                    additionalContent="乙方應於保固期間內提供5日每日24小時保固服務，以確保標的物之正常運作：\\n一、定期維護：應按O(月/季/半年)實施定期維護(含設備測試)，定期維護日期由雙方協議訂定之，若經甲方同意，得於故障檢修時一併進行。\\n二、故障檢修：標的物發生故障異常時，乙方應於接獲甲方通知後2小時內電話回應，若僅以電話無法協助修復，乙方應派員於電話回應後2小時內到場檢修，並於開始檢修起4小時內修復。如仍無法排除故障時，應即謀求解決方法或提供甲方暫時性過渡處理之替代方案，以維持甲方系統正常運作需要。"
                    complianceValue={complianceStates[16]}
                    onComplianceChange={handleComplianceChange}
                  />
                  
                  {/* Form 17 - 權利及責任 */}
                  <FormRow
                    number={17}
                    title="權利及責任"
                    content="保證條款"
                    additionalContent="乙方聲明並保證就本合約所提供之服務或商品，係乙方合法得辦理之營業項目。\\n乙方保證所交付之標的物或其他任何物品、文件等工作項目（包括但不限於系統、服務或文件程式）或提供之服務，絕無侵害他人之智慧財產權或其他合法權利。乙方交付之工作項目如有侵害他人智慧財產權或其他權利之虞，致甲方不得繼續使用時，乙方應按下列方式擇一解決，所衍生出來之費用概由乙方負擔：\\n一、修改或更換侵害部分，使工作項目不再侵害他人之智慧財產權或其他權利。\\n二、取得他人授權，使甲方能繼續利用工作項目。\\n三、於30日內返還甲方就工作項目已給付之費用。\\n如乙方交付之工作項目有侵害第三人智慧財產權或其他權利之虞，致第三人向甲方主張權利，若確定為乙方之故意或過失，應對甲方之直接損害負賠償責任。"
                    complianceValue={complianceStates[17]}
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
                    onNavigate?.('supplier-risk-step3-page2');
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

function ChevronDown() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function FormRowWithInput({ 
  number, 
  title, 
  subtitle,
  showInfo,
  children,
  complianceValue,
  onComplianceChange
}: { 
  number: number; 
  title: string; 
  subtitle: string;
  showInfo: boolean;
  children: React.ReactNode;
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
              <div className="content-stretch flex h-[23px] items-center relative shrink-0 w-full">
                <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start={number} style={{ fontVariationSettings: "'wght' 700" }}>
                  <li className="ms-[24px]">
                    <span className="leading-[23px]">{title}</span>
                  </li>
                </ol>
              </div>
              
              {/* 内容区 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0">
                {/* 主要内容 - 副标题 */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {subtitle}
                  </p>
                  {showInfo && <InfoIcon />}
                </div>
                
                {/* 自定义输入内容 */}
                {children}
              </div>
            </div>
          </div>
          
          {/* 右侧选择按钮 */}
          <ComplianceSelector
            value={complianceValue}
            onChange={(value) => onComplianceChange(number, value)}
          />
        </div>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <circle cx="10" cy="10" r="7.5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 13.3334V10.0001" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 6.66675H10.0083" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
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

function DatePickerInput({ text }: { text: string }) {
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

function TextInput({ text }: { text: string }) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[253.33px]">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormRow({ 
  number, 
  title, 
  content,
  additionalContent,
  complianceValue,
  onComplianceChange
}: { 
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
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <ol className="basis-0 block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[0] list-decimal min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" start={number} style={{ fontVariationSettings: "'wght' 700" }}>
                  <li className="ms-[24px]">
                    <span className="leading-[23px]">{title}</span>
                  </li>
                </ol>
              </div>
              
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
                        {additionalContent.split('\\n').map((line, index) => (
                          <p key={index} className={index < additionalContent.split('\\n').length - 1 ? "mb-0" : ""}>
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
            onChange={(value) => onComplianceChange(number, value)}
          />
        </div>
      </div>
    </div>
  );
}