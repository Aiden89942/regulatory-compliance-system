import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import svgPaths from '../../imports/svg-7ygewwj6bw';
import clsx from 'clsx';
import PreviewModal from './PreviewModal';
import InfoTooltip from './InfoTooltip';
import CalendarDatePicker from './CalendarDatePicker';

interface SupplierRiskAssessmentPageProps {
  onNavigate?: (page: string) => void;
  isCompleted?: boolean; // 标记是否已完成第一步
}

export default function SupplierRiskAssessmentPage({ onNavigate, isCompleted = false }: SupplierRiskAssessmentPageProps) {
  // 基本资料
  const [assessmentDate, setAssessmentDate] = useState('2026.01.01');
  const [department, setDepartment] = useState('');
  const [projectName, setProjectName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [operationType, setOperationType] = useState('');

  // 弹窗状态
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  
  // 追踪是否已预览过评估表
  const [hasPreviewedAssessment, setHasPreviewedAssessment] = useState(isCompleted); // 如果从第二步返回，初始为 true
  
  // 全局 tooltip 状态 - 记录当前打开的 tooltip 标签
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // 下拉选单数据
  const serviceTypeOptions = [
    '系統開發',
    '系統維護',
    '資料處理',
    '網路服務',
    '雲端服務',
    '資訊安全服務',
    '其他'
  ];

  const operationTypeOptions = [
    '資料輸入作業',
    '資料處理作業',
    '客戶服務作業',
    '系統維運作業',
    '備份與復原作業',
    '監控與管理作業',
    '其他'
  ];

  // 评估参考指标
  const [section1, setSection1] = useState(''); // 供应商涉及之资讯资产
  const [section2, setSection2] = useState(''); // 供应商会存取之资料
  const [section3, setSection3] = useState(''); // 供应商与国泰投信之间传输连线方式

  // 可行性评估 (是/否问题)
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [q6, setQ6] = useState('');

  // 补充说明
  const [additionalNotes, setAdditionalNotes] = useState('');

  // 计算分数（正确逻辑）
  const calculateScore = () => {
    let score = 0;
    
    // Section 1: 资讯资产 (A=1, B=2, C=3)
    if (section1 === 'A') score += 1;
    else if (section1 === 'B') score += 2;
    else if (section1 === 'C') score += 3;

    // Section 2: 存取资料 (A=1, B=2, C=3)
    if (section2 === 'A') score += 1;
    else if (section2 === 'B') score += 2;
    else if (section2 === 'C') score += 3;

    // Section 3: 传输方式 (A=1, B=2, C=3)
    if (section3 === 'A') score += 1;
    else if (section3 === 'B') score += 2;
    else if (section3 === 'C') score += 3;

    // 可行性评估不算分
    return score;
  };

  const totalScore = calculateScore();

  // 判断风险等级
  const getRiskLevel = (score: number) => {
    if (score >= 1 && score <= 4) {
      return { 
        level: '低風險', 
        color: '#ff9d00', 
        bgColor: '#fef9c2' 
      };
    }
    if (score >= 5 && score <= 7) {
      return { 
        level: '中風險', 
        color: '#ee762f', 
        bgColor: '#ffe5d5' 
      };
    }
    // 8-9分为高风险
    return { 
      level: '高風險', 
      color: '#ec5242', 
      bgColor: '#ffdcd8' 
    };
  };

  const riskLevel = getRiskLevel(totalScore);

  // 判断是否所有必填项都已填写
  const isFormComplete = () => {
    return department && projectName && serviceType && operationType &&
           section1 && section2 && section3 &&
           q1 && q2 && q3 && q4 && q5 && q6;
  };

  const formComplete = isFormComplete();

  // 判断风险因子是否完成（用于显示风险结果）
  const isRiskFactorsComplete = () => {
    return section1 && section2 && section3 &&
           q1 && q2 && q3 && q4 && q5 && q6;
  };

  const riskFactorsComplete = isRiskFactorsComplete();

  return (
    <div className="min-h-screen bg-[#2e2e38]">
      <Header onNavigate={onNavigate} currentPage="supplier-risk-assessment" />
      <div className="pt-[120px]">
        <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] relative rounded-tl-[32px] rounded-tr-[32px] min-h-[calc(100vh-152px)]">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[32px] py-0 relative shrink-0 w-[1440px]">
            {/* 面包屑 */}
            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
              <TextText text="首頁" additionalClassNames="w-[32px]" onClick={() => onNavigate?.('home')} />
              <Icon />
              <TextText text="供應商管理" additionalClassNames="w-[80px]" />
              <Icon />
              <Text />
            </div>

            {/* 步骤指示器 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1376px]">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <StepIndicator number="1" text="填寫資訊服務委外風險評估" active />
                <Helper />
                <StepIndicator number="2" text="發送資訊供應商風險評估表與情資追蹤" />
                <div className="content-stretch flex items-center relative shrink-0">
                  <Helper />
                  <StepIndicator number="3" text="供應商資料檢核與歸檔" />
                </div>
              </div>
            </div>

            {/* 主内容 */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
              {/* 左侧表单 */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                {/* 标题 */}
                <div className="bg-[#747480] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                  <div className="content-stretch flex items-start p-[24px] relative w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 700" }}>
                      資訊服務委外風險評估表
                    </p>
                  </div>
                </div>

                {/* 白色表单内容区域 */}
                <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[856px]">
                  <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
                  
                  {/* 基本资料 */}
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      一、基本資料
                    </p>
                    
                    {/* 第一行：评估日期、申请单位、专案名称 */}
                    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                      <FormField 
                        label="評估日期" 
                        value={assessmentDate}
                        onChange={setAssessmentDate}
                        type="date"
                        flex
                      />
                      <FormField 
                        label="申請單位" 
                        value={department}
                        onChange={setDepartment}
                        placeholder="請輸入申請單位"
                        width="253.333px"
                      />
                      <FormField 
                        label="專案名稱" 
                        value={projectName}
                        onChange={setProjectName}
                        placeholder="請輸入專案名稱"
                        flex
                      />
                    </div>

                    {/* 第二行：资讯服务委外类型、作业委外类型 */}
                    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                      <FormField 
                        label="資訊服務委外類型" 
                        value={serviceType}
                        onChange={setServiceType}
                        placeholder="請選擇資訊服務委外類型"
                        type="select"
                        width="253.33px"
                        options={serviceTypeOptions}
                      />
                      <FormField 
                        label="作業委外類型" 
                        value={operationType}
                        onChange={setOperationType}
                        placeholder="請選擇作業委外類型"
                        type="select"
                        flex
                        options={operationTypeOptions}
                      />
                    </div>
                  </div>

                  {/* 评估参考指标 */}
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      二、評估參考指標
                    </p>

                    {/* 1. 供应商涉及之资讯资产 */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                        1. 供應商涉及之資訊資產(單選)
                      </p>
                      
                      <RadioOption
                        selected={section1 === 'A'}
                        onChange={() => setSection1('A')}
                        label="A.涉及以下任一軟 / 硬體資訊資產："
                        tags={['核心系統', '屬於S01之關鍵系統軟體', '屬於H01之關鍵系統設備']}
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />

                      <RadioOption
                        selected={section1 === 'B'}
                        onChange={() => setSection1('B')}
                        label="B.涉及以下任一軟/硬體類資訊資產："
                        tags={['屬於S02之一般系統軟體', '屬於H02~H05']}
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />

                      <RadioOption
                        selected={section1 === 'C'}
                        onChange={() => setSection1('C')}
                        label="C.涉及以下任一軟/硬體類資訊資產"
                        tags={['屬於S03~S04之軟體', '屬於H06~H07', '不接觸任何軟/硬體資訊資產']}
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />
                    </div>

                    {/* 2. 供应商会存取之资料 */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                      <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" start={2} style={{ fontVariationSettings: "'wght' 700" }}>
                        <li className="ms-[24px]">
                          <span className="leading-[23px]">供應商會存取之資料(單選)</span>
                        </li>
                      </ol>

                      <RadioOption
                        selected={section2 === 'A'}
                        onChange={() => setSection2('A')}
                        label="A.涉及以下任一軟 / 硬體資訊資產："
                        tags={['特種個資或可識別當事人之個人資料', '屬於F01、D01之文件及資料']}
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />

                      <RadioOption
                        selected={section2 === 'B'}
                        onChange={() => setSection2('B')}
                        label="B.會存取或保管以下任一："
                        tags={['屬於F02~F04', '屬於D02~D04之文件及資料']}
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />

                      <RadioOption
                        selected={section2 === 'C'}
                        onChange={() => setSection2('C')}
                        label="C.不會存取或保管任何文件及資料"
                        activeTooltip={activeTooltip}
                        onTooltipChange={setActiveTooltip}
                      />
                    </div>

                    {/* 3. 供应商与国泰投信之间传输连线方式 */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                        3. 供應商與國泰投信之間傳輸連線方式(單選)
                      </p>

                      <RadioOption
                        selected={section3 === 'A'}
                        onChange={() => setSection3('A')}
                        label="A.透過網際網路與國泰投信進行傳輸連線"
                      />

                      <RadioOption
                        selected={section3 === 'B'}
                        onChange={() => setSection3('B')}
                        label="B.透過封閉網路或加密網路與國泰投信進行傳輸連線(如：專線、VPN、VDI等)"
                      />

                      <RadioOption
                        selected={section3 === 'C'}
                        onChange={() => setSection3('C')}
                        label="C.不會與國泰投信進行任何外部傳輸連線"
                      />
                    </div>
                  </div>

                  {/* 可行性评估 */}
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      三、可行性評估（請勾選是/否）
                    </p>

                    <YesNoQuestion
                      question="1. 廠商是否涉及或必須取得各項加值服務、營運轉介、或相關國際體系所需認證?"
                      selected={q1}
                      onChange={setQ1}
                    />
                    <YesNoQuestion
                      question="2. 是否已釐清或跨境傳輸個人資料之實際需要?"
                      selected={q2}
                      onChange={setQ2}
                    />
                    <YesNoQuestion
                      question="3. 若蒐集個人資料或資料清冊與所選時點或是預估範疇具要求?"
                      selected={q3}
                      onChange={setQ3}
                    />
                    <YesNoQuestion
                      question="4. 若蒐集個人資料或資本於法定或之要求又以外分為商人員接觸權?"
                      selected={q4}
                      onChange={setQ4}
                    />
                    <YesNoQuestion
                      question="5. 是否免預期向供應商收案設備清本或之問題?"
                      selected={q5}
                      onChange={setQ5}
                    />
                    <YesNoQuestion
                      question="6. 是有專業授向程度或觸級期間業務實性案結、已資他品與之商?"
                      selected={q6}
                      onChange={setQ6}
                    />
                  </div>

                  {/* 补充说明 */}
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      四、補充說明
                    </p>
                    <textarea
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full h-[120px] px-[16px] py-[12px] rounded-[8px] border border-[#ececf3] bg-white font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#2e2e38] resize-none"
                      placeholder="請輸入補充說明"
                      style={{ fontVariationSettings: "'wght' 400" }}
                    />
                  </div>

                  {/* 签章区域 */}
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                    <SignatureArea title="部室主管簽章" />
                    <SignatureArea title="單位內供應商業務負責人簽章" />
                  </div>
                </div>
              </div>

              {/* 右侧评分卡 */}
              <div className="content-stretch flex flex-col gap-[24px] items-start sticky top-[200px] self-start shrink-0 w-[320px]">
                {/* 风险计算结果卡片 */}
                <div className="bg-white content-stretch flex flex-col items-center p-[24px] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  
                  {/* 标题 */}
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                      風險計算結果
                    </p>
                  </div>

                  {/* 内容区域 - 根据风险因子完成状态显示不同内容 */}
                  {riskFactorsComplete ? (
                    // 已完成：显示风险等级和分数
                    <div className="content-stretch flex flex-col items-center pb-[24px] pt-[48px] px-0 relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[12px] h-[164px] items-start relative shrink-0 w-[96px]">
                        {/* 圆形图标区域 */}
                        <div className="h-[96px] relative shrink-0 w-full" style={{ backgroundColor: riskLevel.bgColor, borderRadius: '999px' }}>
                          {/* 内圆 */}
                          <div className="absolute content-stretch flex items-center justify-center left-[16px] rounded-[1.67772e+07px] size-[64px] top-[16px]" style={{ backgroundColor: riskLevel.color }}>
                            {/* 分数 */}
                            <div className="h-[32px] relative shrink-0 w-[15.234px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-1/2 not-italic text-[32px] text-center text-nowrap text-white top-[calc(50%-19px)] translate-x-[-50%]">
                                  {totalScore}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* 风险等级文字 */}
                        <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full">
                          <div className="h-[32px] relative shrink-0 w-full">
                            <p className="absolute font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] left-[48px] text-[24px] text-center text-nowrap top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 700", color: riskLevel.color }}>
                              {riskLevel.level}
                            </p>
                          </div>
                          <div className="h-[20px] relative shrink-0 w-full">
                            <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] left-[47.74px] text-[#747480] text-[14px] text-center text-nowrap top-[0.5px] tracking-[0.42px] translate-x-[-50%]" style={{ fontVariationSettings: "'wght' 400" }}>
                              風險值總分：{totalScore}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // 未完成：显示警告提示
                    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[24px] pt-[48px] px-0 relative shrink-0 w-full">
                      {/* 警示图标 */}
                      <div className="relative shrink-0 size-[48px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                          <path d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                          <path d="M24 18V26" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                          <path d="M24 34H24.02" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                        </svg>
                      </div>

                      {/* 主文字 */}
                      <div className="h-[20px] relative shrink-0 w-full">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                          請完成三項風險因子評估
                        </p>
                      </div>

                      {/* 副文字 */}
                      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
                        <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                          以計算風險值與風險等級
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 按钮区域 */}
                <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                      {!hasPreviewedAssessment ? (
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                          {/* 储存成草稿按钮 */}
                          <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
                              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[18px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                                儲存成草稿
                              </p>
                            </div>
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                              </svg>
                            </div>
                          </div>

                          {/* 确认并汇出按钮 */}
                          <div 
                            className={clsx(
                              "content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0",
                              formComplete ? "bg-[#ffe600] cursor-pointer hover:bg-[#ffd000] transition-colors" : "bg-[#e3e3e3] cursor-not-allowed"
                            )}
                            onClick={() => formComplete && setShowPreviewModal(true)}
                          >
                            <div className={clsx(
                              "flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px]",
                              formComplete ? "text-[#1a1a24]" : "text-[#9b9ba1]"
                            )} style={{ fontVariationSettings: "'wght' 700" }}>
                              <p className="leading-[normal]">確認並匯出</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                          {/* 汇出档案按钮 */}
                          <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
                              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[18px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                                匯出檔案
                              </p>
                            </div>
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                              </svg>
                            </div>
                          </div>

                          {/* 下一步按钮 */}
                          <div 
                            className="bg-[#ffe600] content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors"
                            onClick={() => onNavigate && onNavigate('supplier-risk-step2')}
                          >
                            <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
                              <p className="leading-[normal]">下一步</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 预览弹窗 */}
      {showPreviewModal && (
        <PreviewModal
          assessmentDate={assessmentDate}
          department={department}
          projectName={projectName}
          serviceType={serviceType}
          operationType={operationType}
          section1={section1}
          section2={section2}
          section3={section3}
          q1={q1}
          q2={q2}
          q3={q3}
          q4={q4}
          q5={q5}
          q6={q6}
          additionalNotes={additionalNotes}
          riskLevel={riskLevel}
          totalScore={totalScore}
          onClose={() => {
            setShowPreviewModal(false);
            setHasPreviewedAssessment(true);
          }}
        />
      )}
      <Footer />
    </div>
  );
}

// 表单字段组件
function FormField({ 
  label, 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text',
  width,
  flex = false,
  options
}: { 
  label: string; 
  value: string; 
  onChange: (val: string) => void; 
  placeholder?: string;
  type?: 'text' | 'date' | 'select';
  width?: string;
  flex?: boolean;
  options?: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const containerClass = flex 
    ? "basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
    : `content-stretch flex flex-col gap-[8px] items-start relative shrink-0 ${width ? `w-[${width}]` : ''}`;

  return (
    <div className={containerClass} data-name="Form">
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {label}
        </p>
      </div>
      
      {type === 'date' ? (
        <CalendarDatePicker
          value={value}
          onChange={onChange}
        />
      ) : type === 'select' ? (
        <div className="relative w-full">
          <div 
            className="bg-white relative rounded-[8px] shrink-0 w-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
                <p className={clsx(
                  "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] text-nowrap tracking-[0.48px]",
                  value ? "text-[#2e2e38]" : "text-[#747480]"
                )} style={{ fontVariationSettings: "'wght' 400" }}>
                  {value || placeholder}
                </p>
                <ChevronDown />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>

          {/* 下拉选单 */}
          {isOpen && options && (
            <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white rounded-[8px] shadow-lg z-50 max-h-[240px] overflow-y-auto">
              <div className="py-[4px]">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="px-[12px] py-[10px] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                  >
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      {option}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center p-[12px] relative size-full">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] bg-transparent border-none outline-none not-italic relative shrink-0 text-[#2e2e38] placeholder:text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px]"
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      )}
    </div>
  );
}

// 单选选项组件
function RadioOption({ 
  selected, 
  onChange, 
  label, 
  tags,
  activeTooltip,
  onTooltipChange
}: { 
  selected: boolean; 
  onChange: () => void; 
  label: string; 
  tags?: string[];
  activeTooltip?: string | null;
  onTooltipChange?: (tag: string | null) => void;
}) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <div 
        className="content-stretch flex items-center relative shrink-0 cursor-pointer"
        onClick={onChange}
      >
        <Radio checked={selected} />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            {label}
          </p>
        </div>
        {tags && tags.length > 0 && (
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 flex-wrap">
            {tags.map((tag, idx) => (
              <Tag key={idx} text={tag} activeTooltip={activeTooltip} onTooltipChange={onTooltipChange} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 是/否问题组件
function YesNoQuestion({ 
  question, 
  selected, 
  onChange 
}: { 
  question: string; 
  selected: string; 
  onChange: (val: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        {question}
      </p>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        <div 
          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px] cursor-pointer"
          onClick={() => onChange('yes')}
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <Radio checked={selected === 'yes'} />
          </div>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            是
          </p>
        </div>
        <div 
          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px] cursor-pointer"
          onClick={() => onChange('no')}
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <Radio checked={selected === 'no'} />
          </div>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            否
          </p>
        </div>
        <div 
          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[50px] cursor-pointer"
          onClick={() => onChange('na')}
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <Radio checked={selected === 'na'} />
          </div>
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            Ｎ / A
          </p>
        </div>
      </div>
    </div>
  );
}

// 签章区域
function SignatureArea({ title }: { title: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          {/* 第一行：标题 */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[35px] py-0 relative w-full">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                  {title}
                </p>
              </div>
            </div>
          </div>
          
          {/* 第二行：签章区域 */}
          <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
            <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
              [ 簽章區域 ]
            </p>
          </div>
          
          {/* 第三行：日期 */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[28px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px]">
                  日期: __________________________________
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 评分卡片
function ScoreCard({ score, maxScore, percentage }: { score: number; maxScore: number; percentage: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[352px]">
      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="flex items-center justify-center w-full">
            <WarningIcon />
          </div>

          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-[#1a1a24] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                {score}
              </p>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                / {maxScore}
              </p>
            </div>

            <div className="relative shrink-0 w-full h-[12px] bg-[#ececf3] rounded-[6px] overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-[#ffe600] rounded-[6px] transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <ScoreItem label="供應商涉及之資訊資產" score="20分" />
            <ScoreItem label="供應商會存取之資料" score="20分" />
            <ScoreItem label="供應商傳輸連線方式" score="20分" />
            <ScoreItem label="可行性評估" score="30分" />
            <ScoreItem label="其他評估項目" score="10分" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreItem({ label, score }: { label: string; score: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {label}
      </p>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {score}
      </p>
    </div>
  );
}

// 步骤指示器
function StepIndicator({ number, text, active = false }: { number: string; text: string; active?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      {active ? (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" fill="#FFE600" r="30" />
            </svg>
          </div>
          <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
            <p className="leading-[normal]">{number}</p>
          </div>
        </div>
      ) : (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="29.25" stroke="#C4C4CD" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="[grid-area:1_/_1] absolute font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic text-[#747480] text-[22px] text-nowrap">
            {number}
          </p>
        </div>
      )}
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <p className={clsx(
          "basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[16px] text-center tracking-[0.48px]",
          active ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "text-[#747480]"
        )} style={{ fontVariationSettings: active ? "'wght' 700" : "'wght' 400" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

// 小组件
function Radio({ checked }: { checked: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      {checked ? (
        <>
          <div className="absolute bg-[#ffe600] border-[#ffe600] border-[0.833px] border-solid inset-0 rounded-[20px]" />
          <div className="absolute bg-[#1a1a24] border-[#1a1a24] border-[1.667px] border-solid inset-[30%] rounded-[20px]" />
        </>
      ) : (
        <div className="absolute bg-white border-[#c4c4cd] border-[0.833px] border-solid inset-0 rounded-[20px]" />
      )}
    </div>
  );
}

function Tag({ text, activeTooltip, onTooltipChange }: { text: string; activeTooltip?: string | null; onTooltipChange?: (tag: string | null) => void }) {
  // 判断是否需要显示信息图标
  const needsInfo = text.includes('F02') || text.includes('F03') || text.includes('F04') || 
                    text.includes('D02') || text.includes('D03') || text.includes('D04');
  
  // 检查当前 tag 的 tooltip 是否应该显示
  const isTooltipActive = activeTooltip === text;
  
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
      {needsInfo && (
        <div 
          className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            if (onTooltipChange) {
              // 如果当前 tooltip 已打开，点击后关闭；否则打开
              onTooltipChange(isTooltipActive ? null : text);
            }
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8.33333" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M10 13.3333V10" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M10 6.66667H10.0083" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      )}
      
      {/* Tooltip 在 Tag 内部显示 - 只在 activeTooltip 等于当前 text 时显示 */}
      {needsInfo && isTooltipActive && (
        <InfoTooltip
          tag={text}
          onClose={() => onTooltipChange && onTooltipChange(null)}
        />
      )}
    </div>
  );
}

function PrimitiveLabelText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[80px]">
      <div className="absolute inset-[-0.75px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1.5">
          <path d="M0 0.75H80" stroke="#949494" strokeDasharray="3 3" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function TextText({ text, additionalClassNames = "", onClick }: { text: string; additionalClassNames?: string; onClick?: () => void }) {
  const isClickable = !!onClick;
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p
          className={`absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#747480] text-[16px] text-nowrap top-0 tracking-[-0.3125px] ${isClickable ? 'cursor-pointer hover:text-[#1a1a24] transition-colors' : ''}`}
          onClick={onClick}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">
          新增供應商
        </p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function WarningIcon() {
  return (
    <div className="relative shrink-0 size-[80px]">
      <svg className="block size-full" fill="none" viewBox="0 0 80 80">
        <path d="M40 73.3333C58.4095 73.3333 73.3333 58.4095 73.3333 40C73.3333 21.5905 58.4095 6.66666 40 6.66666C21.5905 6.66666 6.66666 21.5905 6.66666 40C6.66666 58.4095 21.5905 73.3333 40 73.3333Z" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 26.6667V40" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="53.3333" r="3.33333" fill="#FFE600" />
      </svg>
    </div>
  );
}