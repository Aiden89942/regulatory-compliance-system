import Header from './Header';
import Footer from './Footer';
import { useSearchParams } from 'react-router';
import { getAssessmentByProjectName, Q1_OPTIONS, Q2_OPTIONS, Q3_OPTIONS } from '../data/riskAssessmentData';

interface RiskAssessmentViewPageProps {
  onNavigate?: (page: string) => void;
}

export default function RiskAssessmentViewPage({ onNavigate }: RiskAssessmentViewPageProps) {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('project') || '';
  
  // 從數據庫獲取評估記錄
  const assessment = getAssessmentByProjectName(projectName);
  
  // 如果沒有找到記錄，顯示預設數據
  const data = assessment || {
    date: '2026/01/01',
    department: '資訊科技部',
    projectName: projectName || '未知專案',
    outsourcingType: '系統開發',
    operationType: '軟體開發',
    q1Answer: 'B' as const,
    q2Answer: 'B' as const,
    q3Answer: 'A' as const,
    riskScore: 2.5,
    riskLevel: 'medium' as const,
    feasibility: {
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
    },
    notes: '本專案為系統開發，供應商具備豐富的開發經驗，過往合作順利。',
    supplier: '供應商名稱',
    deadline: '2026.04.15',
    status: 'draft' as const,
    id: '',
  };

  // 風險等級樣式
  const getRiskColor = (level?: string) => {
    if (!level) return { bg: '#f6f6fa', text: '#747480', border: '#e5e7eb' };
    switch (level) {
      case 'high':
        return { bg: '#ffdddd', text: '#ec5242', border: '#ec5242' };
      case 'medium':
        return { bg: '#fff8b5', text: '#ff9d00', border: '#ff9d00' };
      case 'low':
        return { bg: '#ddffdf', text: '#419D48', border: '#419D48' };
      default:
        return { bg: '#f6f6fa', text: '#747480', border: '#e5e7eb' };
    }
  };

  const riskColor = getRiskColor(data.riskLevel);
  const riskLevelText = data.riskLevel === 'high' ? '高風險' : data.riskLevel === 'medium' ? '低風險' : '低風險';

  const feasibilityQuestions = [
    '1. 是否根據資訊服務委外事項確實評估並填寫上列3項資訊安全風險控制項目?',
    '2. 是否已考量資訊服務委外事項之可行性?',
    '3. 資訊服務委外事項是否遵守內規與相關主管機關法規範之要求?',
    '4. 資訊服務委外事項可能產生之資訊安全要求是否已列入成本計算?',
    '5. 是否考量潛在供應商過度集中之可能性?',
    '6. 是否考量服務供應商若因故無法完成委託事項，已有其他替代方案？',
  ];

  const feasibilityAnswers = data.feasibility
    ? [data.feasibility.q1, data.feasibility.q2, data.feasibility.q3, data.feasibility.q4, data.feasibility.q5, data.feasibility.q6]
    : [true, true, true, true, true, true];

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="risk-assessment" />
      <div className="pt-[120px] w-full">
        <div className="bg-[#ececf3] flex flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full min-h-[calc(100vh-120px)]">
          <div className="flex flex-col gap-[32px] items-start px-[32px] w-full max-w-[1440px]">
            
            {/* Breadcrumb */}
            <div className="flex gap-[8px] h-[24px] items-center">
              <button onClick={() => onNavigate?.('home')} className="cursor-pointer bg-transparent border-none p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">首頁</p>
              </button>
              <div className="shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <button onClick={() => onNavigate?.('risk-assessment')} className="cursor-pointer bg-transparent border-none p-0">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px] whitespace-nowrap">風險評估</p>
              </button>
              <div className="shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px] whitespace-nowrap" style={{ fontWeight: 700 }}>查看評估表</p>
            </div>

            {/* Title & Actions */}
            <div className="flex items-center justify-between w-full">
              <h1 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[32px]" style={{ fontWeight: 700 }}>資訊服務委外風險評估表</h1>
              <div className="flex gap-[16px] items-center">
                <button className="bg-white border border-[#e5e7eb] rounded-[4px] px-[20px] py-[12px] cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">列印</p>
                </button>
                <button className="bg-[#ffe600] border-none rounded-[4px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors" onClick={() => onNavigate?.('risk-assessment')}>
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontWeight: 700 }}>返回列表</p>
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-[8px] w-full p-[40px]">
              <div className="flex flex-col gap-[32px]">
                
                {/* 基本資料 */}
                <div className="flex flex-col gap-[16px]">
                  <h2 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontWeight: 700 }}>一、基本資料</h2>
                  <div className="grid grid-cols-3 gap-[24px]">
                    <div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px] mb-[8px]">評估日期</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">{data.date}</p>
                    </div>
                    <div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px] mb-[8px]">申請單位</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">{data.department}</p>
                    </div>
                    <div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px] mb-[8px]">專案名稱</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">{data.projectName}</p>
                    </div>
                    <div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px] mb-[8px]">資訊服務委外類型</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">{data.outsourcingType}</p>
                    </div>
                    <div>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px] mb-[8px]">作業委外類型</p>
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">{data.operationType}</p>
                    </div>
                  </div>
                </div>

                {/* 評估參考指標 */}
                {data.q1Answer && (
                  <div className="flex flex-col gap-[16px] border-t border-[#e5e7eb] pt-[24px]">
                    <h2 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontWeight: 700 }}>二、評估參考指標</h2>
                    
                    <div className="flex flex-col gap-[12px]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontWeight: 700 }}>1. 供應商涉及之資訊資產(單選)</p>
                      <div className="bg-[#fff8b5] rounded-[4px] px-[16px] py-[12px] inline-flex items-center gap-[8px] w-fit">
                        <div className="bg-[#ff9d00] rounded-full size-[8px]"></div>
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">
                          {data.q1Answer}. {Q1_OPTIONS[data.q1Answer]}
                        </p>
                      </div>
                    </div>

                    {data.q2Answer && (
                      <div className="flex flex-col gap-[12px]">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontWeight: 700 }}>2. 供應商會存取之資料(單選)</p>
                        <div className="bg-[#fff8b5] rounded-[4px] px-[16px] py-[12px] inline-flex items-center gap-[8px] w-fit">
                          <div className="bg-[#ff9d00] rounded-full size-[8px]"></div>
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">
                            {data.q2Answer}. {Q2_OPTIONS[data.q2Answer]}
                          </p>
                        </div>
                      </div>
                    )}

                    {data.q3Answer && (
                      <div className="flex flex-col gap-[12px]">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontWeight: 700 }}>3. 供應商與國泰投信之間傳輸連線方式(單選)</p>
                        <div className="bg-[#fff8b5] rounded-[4px] px-[16px] py-[12px] inline-flex items-center gap-[8px] w-fit">
                          <div className="bg-[#ff9d00] rounded-full size-[8px]"></div>
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px]">
                            {data.q3Answer}. {Q3_OPTIONS[data.q3Answer]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Risk Result */}
                    {data.riskScore && (
                      <div className="border-2 rounded-[8px] p-[24px] mt-[16px]" style={{ backgroundColor: riskColor.bg, borderColor: riskColor.border }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[18px] tracking-[0.54px] mb-[8px]" style={{ fontWeight: 700 }}>風險計算結果</p>
                            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px]">根據以上三項評估指標計算得出</p>
                          </div>
                          <div className="flex items-center gap-[24px]">
                            <div className="text-center">
                              <p className="font-['EYInterstate:Bold',sans-serif] text-[48px]" style={{ fontWeight: 700, color: riskColor.text }}>{data.riskScore.toFixed(1)}</p>
                              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[14px] tracking-[0.42px]">風險值</p>
                            </div>
                            <div className="rounded-[8px] px-[24px] py-[16px] border-2" style={{ backgroundColor: riskColor.bg, borderColor: riskColor.border }}>
                              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[24px]" style={{ fontWeight: 700, color: riskColor.text }}>{riskLevelText}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 可行性評估 */}
                {data.feasibility && (
                  <div className="flex flex-col gap-[16px] border-t border-[#e5e7eb] pt-[24px]">
                    <h2 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontWeight: 700 }}>三、可行性評估</h2>
                    <div className="grid grid-cols-1 gap-[12px]">
                      {feasibilityQuestions.map((q, i) => (
                        <div key={i} className="flex items-center justify-between py-[8px] border-b border-[#f0f0f0]">
                          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px] flex-1">{q}</p>
                          <div className={`rounded-[4px] px-[16px] py-[8px] ${feasibilityAnswers[i] ? 'bg-[#ddffdf]' : 'bg-[#ffdddd]'}`}>
                            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px]" style={{ fontWeight: 700, color: feasibilityAnswers[i] ? '#419D48' : '#ec5242' }}>
                              {feasibilityAnswers[i] ? '是' : '否'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 補充說明 */}
                {data.notes && (
                  <div className="flex flex-col gap-[16px] border-t border-[#e5e7eb] pt-[24px]">
                    <h2 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontWeight: 700 }}>四、補充說明</h2>
                    <div className="bg-[#f6f6fa] rounded-[8px] p-[16px]">
                      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px] leading-[24px]">
                        {data.notes}
                      </p>
                    </div>
                  </div>
                )}

                {/* 簽章 */}
                {(data.status === 'sent' || data.status === 'approved') && (
                  <div className="flex gap-[24px] border-t border-[#e5e7eb] pt-[24px]">
                    <div className="flex-1">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px] mb-[12px]" style={{ fontWeight: 700 }}>部室主管簽章</p>
                      <div className="bg-[#f6f6fa] rounded-[8px] p-[24px] flex flex-col gap-[12px]">
                        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] text-center">部門主管簽章</p>
                        <div className="h-[64px] flex items-center justify-center border border-dashed border-[#c4c4cd] rounded-[4px]">
                          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#99a1af] text-[16px]">[ 已簽章 ]</p>
                        </div>
                        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] text-center">日期: 2026/01/05</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] tracking-[0.48px] mb-[12px]" style={{ fontWeight: 700 }}>單位內供應商業務負責人簽章</p>
                      <div className="bg-[#f6f6fa] rounded-[8px] p-[24px] flex flex-col gap-[12px]">
                        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] text-center">部門主管簽章</p>
                        <div className="h-[64px] flex items-center justify-center border border-dashed border-[#c4c4cd] rounded-[4px]">
                          <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#99a1af] text-[16px]">[ 已簽章 ]</p>
                        </div>
                        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#4a5565] text-[16px] text-center">日期: 2026/01/05</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}