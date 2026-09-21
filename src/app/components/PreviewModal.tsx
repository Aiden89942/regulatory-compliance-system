import svgPaths from '../../imports/svg-qto1uo1sar';

interface PreviewModalProps {
  assessmentDate: string;
  department: string;
  projectName: string;
  serviceType: string;
  operationType: string;
  section1: string;
  section2: string;
  section3: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  additionalNotes: string;
  riskLevel: {
    level: string;
    color: string;
    bgColor: string;
  };
  totalScore: number;
  onClose: () => void;
}

export default function PreviewModal({
  assessmentDate,
  department,
  projectName,
  serviceType,
  operationType,
  section1,
  section2,
  section3,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  additionalNotes,
  riskLevel,
  totalScore,
  onClose
}: PreviewModalProps) {
  // 下载 PDF 功能
  const handleDownload = () => {
    console.log('下载 PDF');
  };

  // 列印功能
  const handlePrint = () => {
    window.print();
  };

  // 获取选项对应的完整文本
  const getSection1Text = (option: string) => {
    switch (option) {
      case 'A':
        return 'A.涉及以下任一軟 / 硬體資訊資產：核心系統或屬於S01之關鍵系統軟體或屬於H01之關鍵系統設備(7)';
      case 'B':
        return 'B.涉及以下任一軟/硬體類資訊資產：屬於S02之一般系統軟體、屬於H02~H05(2)';
      case 'C':
        return 'C.涉及以下任一軟/硬體類資訊資產';
      default:
        return '';
    }
  };

  const getSection2Text = (option: string) => {
    switch (option) {
      case 'A':
        return 'A.涉及以下任一軟 / 硬體資訊資產：特種個資或可識別當事人之個人資料或屬於F01、D01之文件及資料(1)';
      case 'B':
        return 'B.會存取或保管以下任一：屬於F02~F04、屬於D02~D04之文件及資料(2)';
      case 'C':
        return 'C.不會存取或保管任何文件及資料';
      default:
        return '';
    }
  };

  const getSection3Text = (option: string) => {
    switch (option) {
      case 'A':
        return 'A.透過網際網路與國泰投信進行傳輸連線(1)';
      case 'B':
        return 'B.透過封閉網路或加密網路與國泰投信進行傳輸連線(如：專線、VPN、VDI等)(2)';
      case 'C':
        return 'C.不會與國泰投信進行任何外部傳輸連線(3)';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white relative rounded-[12px] w-[1080px] max-h-[90vh] flex flex-col shadow-[0px_4px_32px_0px_rgba(3,8,99,0.12)]">
        {/* 标题栏 */}
        <div className="bg-white relative shrink-0 w-full rounded-t-[12px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-t-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                評估表預覽
              </p>
              
              {/* 按钮组 */}
              <div className="h-[42px] relative shrink-0">
                <div className="content-stretch flex gap-[12px] h-full items-center relative">
                  {/* 下载 PDF 按钮 */}
                  <div 
                    className="relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors"
                    onClick={handleDownload}
                  >
                    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p3c7aa800} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          <path d={svgPaths.p5c2680} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          <path d={svgPaths.p10261440} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </div>
                      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        <p className="leading-[23px]">下載 PDF</p>
                      </div>
                    </div>
                  </div>

                  {/* 列印按钮 */}
                  <div 
                    className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors"
                    onClick={handlePrint}
                  >
                    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d="M4 6V2H12V6" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          <path d="M4 12H3.33333C2.97971 12 2.64057 11.8595 2.39052 11.6095C2.14048 11.3594 2 11.0203 2 10.6667V8C2 7.64638 2.14048 7.30724 2.39052 7.05719C2.64057 6.80714 2.97971 6.66666 3.33333 6.66666H12.6667C13.0203 6.66666 13.3594 6.80714 13.6095 7.05719C13.8595 7.30724 14 7.64638 14 8V10.6667C14 11.0203 13.8595 11.3594 13.6095 11.6095C13.3594 11.8595 13.0203 12 12.6667 12H12" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          <path d="M12 9.33334H4V14H12V9.33334Z" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </div>
                      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        <p className="leading-[23px]">列印</p>
                      </div>
                    </div>
                  </div>

                  {/* 关闭按钮 */}
                  <div 
                    className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={onClose}
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M18 6L6 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6 6L18 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="bg-[#f3f4f6] h-px relative shrink-0 w-full" />

        {/* 内容区域 - 可滚动 */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-[40px]">
            {/* 标题栏 */}
            <div className="bg-[#747480] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
              <div className="content-stretch flex items-start p-[24px] relative w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 700" }}>
                  資訊服務委外風險評估表
                </p>
              </div>
            </div>

            {/* 内容 */}
            <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
              
              {/* 一、基本資料 */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] h-[24px] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  一、基本資料
                </p>
                
                {/* 第一行：评估日期、申请单位、专案名称 */}
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <PreviewField label="評估日期" value={assessmentDate} flex />
                  <PreviewField label="申請單位" value={department} flex />
                  <PreviewField label="專案名稱" value={projectName} flex />
                </div>

                {/* 第二行：资讯服务委外类型、作业委外类型 */}
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <PreviewField label="資訊服務委外類型" value={serviceType} width="304px" />
                  <PreviewField label="作業委外類型" value={operationType} flex />
                </div>
              </div>

              {/* 二、評估參考指標 */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  二、評估參考指標
                </p>
                
                {/* 1. 供应商涉及之资讯资产 */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    1. 供應商涉及之資訊資產
                  </p>
                  {section1 && (
                    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                          {getSection1Text(section1)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. 供应商会存取之资料 */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                  <ol className="block font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" start={2} style={{ fontVariationSettings: "'wght' 400" }}>
                    <li className="ms-[24px]">
                      <span className="leading-[23px]">供應商會存取之資料</span>
                    </li>
                  </ol>
                  {section2 && (
                    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                          {getSection2Text(section2)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. 供应商与国泰投信之间传输连线方式 */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    3. 供應商與國泰投信之間傳輸連線方式
                  </p>
                  {section3 && (
                    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                          {getSection3Text(section3)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 三、可行性評估 */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  三、可行性評估
                </p>
                
                <div className="flex flex-col gap-[12px] w-full">
                  <YesNoPreview question="1. 廠商是否涉及或必須取得各項加值服務、營運轉介、或相關國際體系所需認證?" value={q1} />
                  <YesNoPreview question="2. 是否已釐清或跨境傳輸個人資料之實際需要?" value={q2} />
                  <YesNoPreview question="3. 若蒐集個人資料或資料清冊與所選時點或是預估範疇具要求?" value={q3} />
                  <YesNoPreview question="4. 若蒐集個人資料或資本於法定或之要求又以外分為商人員接觸權?" value={q4} />
                  <YesNoPreview question="5. 是否免預期向供應商收案設備清本或之問題?" value={q5} />
                  <YesNoPreview question="6. 是有專業授向程度或觸級期間業務實性案結、已資他品與之商?" value={q6} />
                </div>
              </div>

              {/* 四、補充說明 */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  四、補充說明
                </p>
                <div className="w-full min-h-[60px] px-[16px] py-[12px] rounded-[8px] bg-[#f9f9fb]">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24] leading-[23px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {additionalNotes || '無'}
                  </p>
                </div>
              </div>

              {/* 風險評估結果 */}
              <div className="content-stretch flex gap-[24px] items-stretch relative shrink-0 w-full">
                {/* 左侧：风险计算结果 */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[177px]">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    風險計算結果
                  </p>
                  
                  {/* 风险等级圆圈 - 黄色背景框 */}
                  <div className="flex-1 relative rounded-[8px] w-full" style={{ backgroundColor: riskLevel.bgColor }}>
                    <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                        <div className="h-[63px] w-[63px] relative shrink-0" style={{ backgroundColor: riskLevel.bgColor, borderRadius: '999px' }}>
                          <div className="absolute content-stretch flex items-center justify-center left-[10.5px] rounded-[1.101e+07px] size-[42px] top-[10.5px]" style={{ backgroundColor: riskLevel.color }}>
                            <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic text-[21px] text-center text-nowrap text-white">
                              {totalScore}
                            </p>
                          </div>
                        </div>
                        
                        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
                          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[24px] text-center text-nowrap" style={{ fontVariationSettings: "'wght' 700", color: riskLevel.color }}>
                            {riskLevel.level}
                          </p>
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] text-center text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                            風險值總分：{totalScore}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 中间：部门主管签章 */}
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    部室主管簽章
                  </p>
                  <div className="flex-1">
                    <SignatureBox />
                  </div>
                </div>

                {/* 右侧：单位内供应商业务负责人签章 */}
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    單位內供應商業務負責人簽章
                  </p>
                  <div className="flex-1">
                    <SignatureBox />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 页脚版本信息 */}
          <div className="text-center pb-[24px] pt-[8px]">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#99a1af] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
              本文件僅供內部參考之用，未經授權不得轉載或公開使用
            </p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#99a1af] text-[13px]" style={{ fontVariationSettings: "'wght' 400" }}>
              Document ID: RU-2026-01-12-0001 | Version 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 预览字段组件
function PreviewField({ label, value, flex = false, width }: { label: string; value: string; flex?: boolean; width?: string }) {
  const containerClass = flex 
    ? "basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
    : `content-stretch flex flex-col gap-[8px] items-start relative shrink-0 ${width ? `w-[${width}]` : ''}`;

  return (
    <div className={containerClass}>
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {label}
        </p>
      </div>
      <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative rounded-[8px] shrink-0 w-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

// 是否题预览
function YesNoPreview({ question, value }: { question: string; value: string }) {
  const displayValue = value === 'yes' ? '是' : value === 'no' ? '否' : 'N/A';
  
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full py-[4px]">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {question}
      </p>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px] ml-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {displayValue}
      </p>
    </div>
  );
}

// 签章框
function SignatureBox() {
  return (
    <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full h-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full h-full">
        {/* 部门主管签章标题 */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[35px] py-0 relative w-full">
              <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                [ 簽章區域 ]
              </p>
            </div>
          </div>
        </div>
        
        {/* 签章区域 */}
        <div className="content-stretch flex flex-1 items-center justify-center relative shrink-0 w-full">
          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
            [ 簽章區域 ]
          </p>
        </div>
        
        {/* 日期 */}
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
  );
}