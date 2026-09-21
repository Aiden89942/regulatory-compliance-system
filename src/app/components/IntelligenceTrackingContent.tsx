import { useState } from 'react';

export default function IntelligenceTrackingContent() {
  const [activeTab, setActiveTab] = useState<'all' | 'security' | 'negative'>('all');

  const intelligenceData = [
    {
      id: 1,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行IT委外系統遭駭客入侵，疑似資料外洩',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    },
    {
      id: 2,
      category: '負面消息',
      categoryColor: '#ee762f',
      date: '2025/11/26',
      time: '15:30',
      source: 'PTT Soft_Job',
      sourceType: '社群論壇',
      title: '[請益] 碩網資訊專案管理與加班文化請益',
      description: '網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。',
      tags: ['勞資爭議', '人員流動', '專案管理']
    },
    {
      id: 3,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/11/26',
      time: '15:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '[調查] 碩網作業管理系統發現SQL注入漏洞',
      description: '資安研究人員發現碩網資訊開發的某銀行作業管理系統存在 SQL 注入漏洞，可能允許攻擊者繞過身份驗證機制。供應商已緊急發布修補程式，建議客戶盡速更新系統版本。',
      tags: ['專案管理', '人員流動', '專案管理']
    },
    {
      id: 4,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/11/26',
      time: '15:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '[調查] 碩網作業管理系統發現SQL注入漏洞',
      description: '資安研究人員發現碩網資訊開發的某銀行作業管理系統存在 SQL 注入漏洞，可能允許攻擊者繞過身份驗證機制。供應商已緊急發布修補程式，建議客戶盡速更新系統版本。',
      tags: ['專案管理', '人員流動', '專案管理']
    },
    {
      id: 5,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/11/26',
      time: '15:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '[調查] 碩網作業管理系統發現SQL注入漏洞',
      description: '資安研究人員發現碩網資訊開發的某銀行作業管理系統存在 SQL 注入漏洞，可能允許攻擊者繞過身份驗證機制。供應商已緊急發布修補程式，建議客戶盡速更新系統版本。',
      tags: ['專案管理', '人員流動', '專案管理']
    },
    {
      id: 6,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/11/26',
      time: '15:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '[調查] 碩網作業管理系統發現SQL注入漏洞',
      description: '資安研究人員發現碩網資訊開發的某銀行作業管理系統存在 SQL 注入漏洞，可能允許攻擊者繞過身份驗證機制。供應商已緊急發布修補程式，建議客戶盡速更新系統版本。',
      tags: ['專案管理', '人員流動', '專案管理']
    },
    {
      id: 7,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行IT委外系統遭駭客入侵，疑似資料外洩',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    },
    {
      id: 8,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行IT委外系統遭駭客入侵，疑似資料外洩',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    },
    {
      id: 9,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行IT委外系統遭駭客入侵，疑似資料外洩',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    },
    {
      id: 10,
      category: '資安事件',
      categoryColor: '#ec5242',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行IT委外系統遭駭客入侵，疑似資料外洩',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    }
  ];

  const filteredData = intelligenceData.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'security') return item.category === '資安事件';
    if (activeTab === 'negative') return item.category === '負面消息';
    return true;
  });

  const securityCount = intelligenceData.filter(item => item.category === '資安事件').length;
  const negativeCount = intelligenceData.filter(item => item.category === '負面消息').length;

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {/* Header with tabs and update time */}
      <div className="content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full">
        {/* Tabs */}
        <div className="relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
            {/* All button */}
            <div 
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors ${
                activeTab === 'all' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
              }`}
              onClick={() => setActiveTab('all')}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                全部 ({intelligenceData.length})
              </p>
            </div>

            {/* Security events */}
            <div 
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors ${
                activeTab === 'security' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
              }`}
              onClick={() => setActiveTab('security')}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                資安事件 ({securityCount})
              </p>
            </div>

            {/* Negative news */}
            <div 
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer transition-colors ${
                activeTab === 'negative' ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
              }`}
              onClick={() => setActiveTab('negative')}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                負面消息 ({negativeCount})
              </p>
            </div>
          </div>
        </div>

        {/* Last updated time */}
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            最後更新：2025/12/02 14:30
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        {/* Table Header */}
        <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[130px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
              情資類別
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
              偵測時間
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
              來源/頻道
            </p>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  標題與摘要內容
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[120px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
              操作
            </p>
          </div>
        </div>

        {/* Table Rows */}
        {filteredData.map((item, index) => (
          <div key={item.id} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            
            {/* Category */}
            <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]">
              <div className={`content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 ${
                item.category === '資安事件' ? 'bg-[#ffe2e2]' : 'bg-[#ffedd4]'
              }`}>
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${
                  item.category === '資安事件' ? 'border-[#ffc9c9]' : 'border-[#ffd59a]'
                }`} />
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px] text-nowrap ${
                  item.category === '資安事件' ? 'text-[#ec5242]' : 'text-[#ee762f]'
                }`} style={{ fontVariationSettings: "'wght' 400" }}>
                  {item.category}
                </p>
              </div>
              {index === 0 && (
                <div className="absolute left-[9px] size-[8px] top-[calc(50%+0.25px)] translate-y-[-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" fill={item.categoryColor} r="4" />
                  </svg>
                </div>
              )}
            </div>

            {/* Time */}
            <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]">
              <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]">
                <p className="mb-0">{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>

            {/* Source */}
            <div className="content-stretch flex flex-col h-full items-center justify-center px-0 py-[12px] relative shrink-0 w-[140px]">
              <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full">
                <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                  {item.source}
                </p>
                <p className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  {item.sourceType}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {item.title}
                  </p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                    {item.description}
                  </p>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                    {item.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-[16px] relative w-full">
                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wght' 400" }}>
                      查看
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}