import { useState } from 'react';
import svgPathsVulnerability from "@/imports/svg-474cer8qb1";
import svgPathsRisk from "@/imports/svg-jikfv3o8tb";
import svgPathsIntelligence from "@/imports/svg-9tgvmfn9s3";

type TabType = 'vulnerability' | 'risk-assessment' | 'intelligence';
type VulnerabilityFilterType = 'all' | 'unprocessed' | 'processing' | 'completed' | 'overdue';
type OtherFilterType = 'all' | 'pending' | 'completed' | 'overdue';

// 系统弱点扫描数据
const vulnerabilityData = [
  { vendor: '中菲行國際物流', project: 'MyDimerco 貨運管理系統', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.01', status: 'overdue' as const },
  { vendor: '中華電信', project: 'hicloud 雲端服務 API', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.10', status: 'unprocessed' as const },
  { vendor: 'Appier 沛星互動科技', project: '客戶數據平台 (CDP)', description: '程式碼執行漏洞 (RCE) - (CVE-2025-12345)', date: '2025.11.10', status: 'processing' as const },
  { vendor: '綠界科技 ECPay', project: '金流支付閘道器', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.10', status: 'processing' as const },
  { vendor: 'NEC 台灣', project: 'ATM 監控管理軟體', description: '遠端程式碼執行漏洞 (RCE)', date: '2025.11.20', status: 'completed' as const },
  { vendor: '藍新科技 (NewebPay)', project: '第三方支付 API 模組', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.27', status: 'completed' as const },
  { vendor: 'Cisco 思科', project: '網銀防火牆設備 (Firewall)', description: '系統後門帳號弱點 (Hardcoded Password)', date: '2025.12.30', status: 'completed' as const },
  { vendor: '綠界科技 ECPay', project: '金流支付閘道器', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.10', status: 'unprocessed' as const },
  { vendor: '綠界科技 ECPay', project: '金流支付閘道器', description: '偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)', date: '2025.11.10', status: 'processing' as const },
];

// 供应商定期风险评估数据
const riskAssessmentData = [
  { vendor: '中菲行國際物流', project: 'MyDimerco 貨運管理系統', description: '27001 證書已逾期', deadline: '2025.11.01', status: 'overdue' as const },
  { vendor: '中華電信', project: 'hicloud 雲端服務 API', description: '附件二(架構圖) 模糊無法辨識防火牆節點', deadline: '2025.11.10', status: 'pending' as const },
  { vendor: 'Appier 沛星互動科技', project: '客戶數據平台 (CDP)', description: '缺少資安演練紀錄', deadline: '2025.11.10', status: 'completed' as const },
];

// 供应商情资数据
const intelligenceData = [
  { vendor: '中菲行國際物流', project: 'MyDimerco 貨運管理系統', description: '尚未提供第三方鑑識報告以證明無外洩', date: '2025.11.01', status: 'overdue' as const },
  { vendor: '中華電信', project: 'hicloud 雲端服務 API', description: '已上傳法院一審無罪判決書', date: '2025.11.10', status: 'pending' as const },
  { vendor: 'Appier 沛星互動科技', project: '客戶數據平台 (CDP)', description: '賠償方案與檢討報告說明不清', date: '2025.11.10', status: 'completed' as const },
  { vendor: '綠界科技 ECPay', project: '金流支付閘道器', description: '未提供資安事件影響範圍評估報告', date: '2025.11.15', status: 'pending' as const },
  { vendor: 'NEC 台灣', project: 'ATM 監控管理軟體', description: '已提交修補證明與測試報告', date: '2025.11.20', status: 'completed' as const },
  { vendor: '藍新科技 (NewebPay)', project: '第三方支付 API 模組', description: '漏洞修補後未提供複測報告', date: '2025.11.27', status: 'pending' as const },
  { vendor: 'Cisco 思科', project: '網銀防火牆設備 (Firewall)', description: '已完成韌體更新並提供變更紀錄', date: '2025.12.01', status: 'completed' as const },
  { vendor: '綠界科技 ECPay', project: '金流支付閘道器', description: '個資外洩通報紀錄尚未補齊', date: '2025.12.05', status: 'overdue' as const },
  { vendor: '中菲行國際物流', project: 'MyDimerco 貨運管理系統', description: '供應商營運持續計畫尚未更新', date: '2025.12.10', status: 'pending' as const },
  { vendor: '中華電信', project: 'hicloud 雲端服務 API', description: '已完成資安演練並提交報告', date: '2025.12.15', status: 'completed' as const },
];

export default function VendorRiskProgressTracking() {
  const [activeTab, setActiveTab] = useState<TabType>('vulnerability');
  const [vulnerabilityFilter, setVulnerabilityFilter] = useState<VulnerabilityFilterType>('all');
  const [otherFilter, setOtherFilter] = useState<OtherFilterType>('all');

  // 获取当前数据
  const getCurrentData = () => {
    if (activeTab === 'vulnerability') return vulnerabilityData;
    if (activeTab === 'risk-assessment') return riskAssessmentData;
    return intelligenceData;
  };

  // 获取过滤后的数据
  const getFilteredData = () => {
    const data = getCurrentData();
    if (activeTab === 'vulnerability') {
      if (vulnerabilityFilter === 'all') return data;
      return data.filter(item => item.status === vulnerabilityFilter);
    } else {
      if (otherFilter === 'all') return data;
      return data.filter(item => item.status === otherFilter);
    }
  };

  // 计算过滤器数量
  const getFilterCounts = () => {
    const data = getCurrentData();
    if (activeTab === 'vulnerability') {
      return {
        all: data.length,
        unprocessed: data.filter(d => d.status === 'unprocessed').length,
        processing: data.filter(d => d.status === 'processing').length,
        completed: data.filter(d => d.status === 'completed').length,
        overdue: data.filter(d => d.status === 'overdue').length,
      };
    } else {
      return {
        all: data.length,
        pending: data.filter(d => d.status === 'pending').length,
        completed: data.filter(d => d.status === 'completed').length,
        overdue: data.filter(d => d.status === 'overdue').length,
      };
    }
  };

  const filteredData = getFilteredData();
  const filterCounts = getFilterCounts();

  // Tab切换处理
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setVulnerabilityFilter('all');
    setOtherFilter('all');
  };

  // 状态标识组件
  const StatusBadge = ({ status }: { status: string }) => {
    const statusMap = {
      overdue: { color: '#EC5242', label: '已逾期', svg: svgPathsRisk },
      pending: { color: '#EE762F', label: '待補件', svg: svgPathsRisk },
      completed: { color: '#419D48', label: activeTab === 'vulnerability' ? '已處理' : '已完成', svg: svgPathsRisk },
      unprocessed: { color: '#EE762F', label: '尚未處理', svg: svgPathsVulnerability },
      processing: { color: '#4A9EFF', label: '處理中', svg: svgPathsVulnerability },
    };

    const config = statusMap[status as keyof typeof statusMap] || statusMap.pending;

    return (
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
        <div className="relative shrink-0 size-[14px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill={config.color} r="7" />
            {status === 'completed' && (
              <path
                d={config.svg.p21ec7f00}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.12"
              />
            )}
            {status === 'overdue' && (
              <>
                <path
                  d={config.svg.p2bbd3a00}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.12"
                />
                <path
                  d={config.svg.p240ac80}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.12"
                />
              </>
            )}
            {(status === 'pending' || status === 'unprocessed' || status === 'processing') && (
              <>
                <path
                  d="M7 4L7 9"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.12"
                />
                <path
                  d="M7 11H7.007"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.12"
                />
              </>
            )}
          </svg>
        </div>
        <p
          className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[16px] tracking-[0.48px] ${
            status === 'overdue' ? 'text-[#ec5242]' : 'text-[#1a1a24]'
          }`}
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          {config.label}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[1360px]">
      {/* Tab 区域 */}
      <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full">
        {/* 系统弱点扫描 Tab */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-all duration-300 ${
            activeTab === 'vulnerability' ? 'bg-[#ffe600] rounded-[4px]' : ''
          }`}
          onClick={() => handleTabChange('vulnerability')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div
              className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] relative size-full text-center whitespace-nowrap transition-all duration-300 ${
                activeTab === 'vulnerability' 
                  ? 'px-[20px] py-[12px] text-[#1a1a24] text-[24px]' 
                  : 'px-[20px] py-[12px] text-[#747480] text-[20px] hover:text-[#2e2e38]'
              }`}
            >
              <div
                className={`flex flex-col justify-center relative shrink-0 transition-all duration-300 ${
                  activeTab === 'vulnerability'
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeTab === 'vulnerability' ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal] text-[20px]">系統弱點掃描</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 transition-all duration-300 ${
                  activeTab === 'vulnerability'
                    ? "font-['EYInterstate:Bold',sans-serif] text-[24px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[22px]"
                }`}
              >
                <p className="leading-[normal]">{vulnerabilityData.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 供应商定期风险评估 Tab */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-all duration-300 ${
            activeTab === 'risk-assessment' ? 'bg-[#ffe600]' : ''
          }`}
          onClick={() => handleTabChange('risk-assessment')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div
              className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] relative size-full text-center whitespace-nowrap transition-all duration-300 ${
                activeTab === 'risk-assessment' 
                  ? 'px-[20px] py-[16px] text-[#1a1a24]' 
                  : 'px-[20px] py-[12px] text-[#747480] hover:text-[#2e2e38]'
              }`}
            >
              <div
                className={`flex flex-col justify-center relative shrink-0 text-[20px] transition-all duration-300 ${
                  activeTab === 'risk-assessment' ? 'tracking-[0.6px]' : ''
                } ${
                  activeTab === 'risk-assessment'
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeTab === 'risk-assessment' ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">供應商定期風險評估</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 transition-all duration-300 ${
                  activeTab === 'risk-assessment'
                    ? "font-['EYInterstate:Bold',sans-serif] text-[24px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[22px]"
                }`}
              >
                <p className="leading-[normal]">{riskAssessmentData.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 供应商情资 Tab */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-all duration-300 ${
            activeTab === 'intelligence' ? 'bg-[#ffe600] rounded-[4px]' : ''
          }`}
          onClick={() => handleTabChange('intelligence')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div
              className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] relative size-full text-center whitespace-nowrap transition-all duration-300 ${
                activeTab === 'intelligence' 
                  ? 'px-[20px] py-[12px] text-[#1a1a24]' 
                  : 'px-[20px] py-[12px] text-[#747480] hover:text-[#2e2e38]'
              }`}
            >
              <div
                className={`flex flex-col justify-center relative shrink-0 text-[20px] transition-all duration-300 ${
                  activeTab === 'intelligence' ? 'tracking-[0.6px]' : ''
                } ${
                  activeTab === 'intelligence'
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeTab === 'intelligence' ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">供應商情資</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 transition-all duration-300 ${
                  activeTab === 'intelligence'
                    ? "font-['EYInterstate:Bold',sans-serif] text-[24px] text-[#2e2e38]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[22px]"
                }`}
              >
                <p className="leading-[normal]">{intelligenceData.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 过滤器区域 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            {activeTab === 'vulnerability' ? (
              <>
                <div
                  className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    vulnerabilityFilter === 'all' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setVulnerabilityFilter('all')}
                >
                  <p
                    className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] ${
                      vulnerabilityFilter === 'all'
                        ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                        : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                    }`}
                    style={{ fontVariationSettings: vulnerabilityFilter === 'all' ? "'wght' 700" : "'wght' 400" }}
                  >
                    全部 ({filterCounts.all})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    vulnerabilityFilter === 'unprocessed' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setVulnerabilityFilter('unprocessed')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    尚未處理 ({filterCounts.unprocessed || 0})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    vulnerabilityFilter === 'processing' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setVulnerabilityFilter('processing')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    處理中 ({filterCounts.processing || 0})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    vulnerabilityFilter === 'completed' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setVulnerabilityFilter('completed')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    已處理 ({filterCounts.completed || 0})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    vulnerabilityFilter === 'overdue' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setVulnerabilityFilter('overdue')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    已逾期 ({filterCounts.overdue || 0})
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    otherFilter === 'all' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setOtherFilter('all')}
                >
                  <p
                    className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] ${
                      otherFilter === 'all'
                        ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                        : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                    }`}
                    style={{ fontVariationSettings: otherFilter === 'all' ? "'wght' 700" : "'wght' 400" }}
                  >
                    全部 ({filterCounts.all})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    otherFilter === 'pending' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setOtherFilter('pending')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    待補件 ({filterCounts.pending || 0})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    otherFilter === 'completed' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setOtherFilter('completed')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    已完成 ({filterCounts.completed || 0})
                  </p>
                </div>
                <div
                  className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                    otherFilter === 'overdue' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
                  }`}
                  onClick={() => setOtherFilter('overdue')}
                >
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    已逾期 ({filterCounts.overdue || 0})
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 表格区域 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full">
        {activeTab === 'vulnerability' ? (
          // 系统弱点扫描表格
          <>
            {/* 供应商名称列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >供應商名稱</p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.vendor}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 专案名称列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >專案名稱</p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 弱点描述列 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >弱點描述</p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 期限列 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    期限
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                    >
                      {row.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 版本狀態列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center justify-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    版本狀態
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <StatusBadge status={row.status} />
                  </div>
                </div>
              ))}
            </div>

            {/* 操作列 */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center justify-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    操作
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[53px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex gap-[16px] items-center justify-center px-[15px] py-[8px] h-full">
                    <p
                      className={`[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#1a1a24]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      查看
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // 供应商定期风险评估和情资表格
          <>
            {/* 供应商名称列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    供應商名稱
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.vendor}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 专案名称列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    專案名稱
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 日期/期限列 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {activeTab === 'risk-assessment' ? '期限' : '日期'}
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                    >
                      {activeTab === 'risk-assessment' ? (row as any).deadline : (row as any).date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 补件描述/待补证明列 */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {activeTab === 'risk-assessment' ? '補件描述' : '待補證明/舉證要求'}
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <p
                      className={`flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[16px] tracking-[0.48px] ${
                        row.status === 'overdue' ? 'text-[#ec5242]' : 'text-[#222]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 审核状态列 */}
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center justify-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    審核狀態
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex items-center p-[15px] h-full">
                    <StatusBadge status={row.status} />
                  </div>
                </div>
              ))}
            </div>

            {/* 操作列 */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full border-b border-[#d2dae6]">
                <div className="flex items-center justify-center p-[15px] h-full">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#747480] text-[13px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    操作
                  </p>
                </div>
              </div>
              {filteredData.map((row, index) => (
                <div key={index} className="bg-white h-[63px] relative shrink-0 w-full border-b border-[#d2dae6]">
                  <div className="flex gap-[16px] items-center justify-center px-[15px] py-[20px] h-full">
                    <p
                      className="[text-decoration-skip-ink:none] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity"
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      查看
                    </p>
                    {row.status !== 'completed' && (
                      <div className="bg-[#ffe600] flex items-center justify-center min-w-[80px] px-[12px] py-[8px] rounded-[4px] cursor-pointer hover:bg-[#ffd700] transition-colors">
                        <p
                          className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[15px] text-center tracking-[0.45px]"
                          style={{ fontVariationSettings: "'wght' 400" }}
                        >
                          通知供應商補件
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}