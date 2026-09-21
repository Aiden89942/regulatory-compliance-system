import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

export default function IntelligenceTrackingSection() {
  // 近30日情資趨勢數據
  const trendData = [
    { date: '11/26', value: 4 },
    { date: '12/02', value: 3 },
    { date: '12/08', value: 12 },
    { date: '12/14', value: 6 },
    { date: '12/22', value: 4 }
  ];

  // 正負面消息占比數據
  const sentimentData = [
    { name: '正面', value: 60, color: '#58a557', showInLegend: false },
    { name: '負面消息', value: 10, color: '#f86f63', showInLegend: true },
    { name: '資安事件', value: 30, color: '#6b7280', showInLegend: true }
  ];

  // 情資列表數據
  const intelligenceList = [
    {
      id: 1,
      category: '資安事件',
      categoryColor: '#ec5242',
      categoryBg: '#ffe2e2',
      categoryBorder: '#ffc9c9',
      date: '2025/12/02',
      time: '14:30',
      source: 'iThome 電腦報',
      sourceType: '科技媒體',
      title: '某銀行客服系統連線異常，遭質疑遭 DDoS 攻擊',
      description: '報導指出 Intumit 提供的 API Gateway 在尖峰時刻回應延遲，部分客戶反映服務中斷長達 30 分鐘。供應商表示正在調查原因，初步判斷可能與流量激增有關，已啟動緊急流量清洗機制。',
      tags: ['API Gateway', 'DDoS', '服務中斷']
    },
    {
      id: 2,
      category: '負面消息',
      categoryColor: '#ee762f',
      categoryBg: '#ffedd4',
      categoryBorder: '#ffd59a',
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
      category: '負面消息',
      categoryColor: '#ee762f',
      categoryBg: '#ffedd4',
      categoryBorder: '#ffd59a',
      date: '2025/11/26',
      time: '15:30',
      source: 'PTT Soft_Job',
      sourceType: '社群論壇',
      title: '[請益] 碩網資訊專案管理與加班文化請益',
      description: '網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。',
      tags: ['勞資爭議', '人員流動', '專案管理']
    },
    {
      id: 4,
      category: '負面消息',
      categoryColor: '#ee762f',
      categoryBg: '#ffedd4',
      categoryBorder: '#ffd59a',
      date: '2025/11/26',
      time: '15:30',
      source: 'PTT Soft_Job',
      sourceType: '社群論壇',
      title: '[請益] 碩網資訊專案管理與加班文化請益',
      description: '網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。',
      tags: ['勞資爭議', '人員流動', '專案管理']
    },
    {
      id: 5,
      category: '負面消息',
      categoryColor: '#ee762f',
      categoryBg: '#ffedd4',
      categoryBorder: '#ffd59a',
      date: '2025/11/26',
      time: '15:30',
      source: 'PTT Soft_Job',
      sourceType: '社群論壇',
      title: '[請益] 碩網資訊專案管理與加班文化請益',
      description: '網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。',
      tags: ['勞資爭議', '人員流動', '專案管理']
    },
    {
      id: 6,
      category: '負面消息',
      categoryColor: '#ee762f',
      categoryBg: '#ffedd4',
      categoryBorder: '#ffd59a',
      date: '2025/11/26',
      time: '15:30',
      source: 'PTT Soft_Job',
      sourceType: '社群論壇',
      title: '[請益] 碩網資訊專案管理與加班文化請益',
      description: '網友分享近期參與銀行駐點專案之工作心得，指出專案時程規劃不合理導致長期加班，且與主管溝通無效。留言區引發多位前員工熱議內部管理流程與人員流動率問題。',
      tags: ['勞資爭議', '人員流動', '專案管理']
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      {/* 標題 */}
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        三、情資追蹤
      </p>

      {/* 圖表區域 */}
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full min-w-0">
        {/* 近30日情資趨勢 */}
        <div className="basis-0 grow h-[270px] min-h-[270px] min-w-0 relative rounded-[10px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[17px] px-[17px] relative size-full">
            <div className="content-stretch flex items-center justify-between px-0 py-px relative shrink-0 w-full">
              <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                近30日情資趨勢
              </p>
            </div>
            <div className="w-full h-[210px] min-h-[210px]">
              <ResponsiveContainer width="100%" height={210} minWidth={300} minHeight={210}>
                <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: '#6b7280', fontSize: 13 }}
                    axisLine={{ stroke: '#6b7280' }}
                  />
                  <YAxis 
                    tick={{ fill: '#6b7280', fontSize: 13 }}
                    axisLine={false}
                    tickLine={{ stroke: '#6b7280' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    key="trend-line"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 正負面消息占比 */}
        <div className="basis-0 grow h-[270px] min-h-[270px] min-w-0 relative rounded-[10px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[17px] px-[17px] relative size-full">
            <div className="content-stretch flex items-center justify-between px-0 py-px relative shrink-0 w-full">
              <p className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                正負面消息佔比
              </p>
            </div>
            <div className="w-full h-[210px] min-h-[210px] flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height={210} minWidth={300} minHeight={210}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="40%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`sentiment-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* 圖例 - 只顯示負面消息和資安事件 */}
              <div className="absolute bottom-[5px] left-1/2 transform -translate-x-1/2 flex gap-[16px] items-center justify-center">
                {sentimentData.filter(item => item.showInLegend).map((item, index) => (
                  <div key={index} className="flex gap-[4px] items-center">
                    <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: item.color }} />
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] text-[#2e2e38]" style={{ fontVariationSettings: "'wght' 400" }}>
                      {item.name} {item.value}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 情資列表表格 */}
      <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full">
        {/* 表頭 */}
        <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[130px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
              情資類別
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
              偵測時間
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
              來源/頻道
            </p>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  標題與摘要內容
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[120px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 600" }}>
              操作
            </p>
          </div>
        </div>

        {/* 表格內容 - 顯示所有資料 */}
        {intelligenceList.map((item) => (
          <div key={item.id} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            
            {/* 類別 */}
            <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]">
              <div 
                className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0"
                style={{ backgroundColor: item.categoryBg }}
              >
                <div 
                  aria-hidden="true" 
                  className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]"
                  style={{ borderColor: item.categoryBorder }}
                />
                <p 
                  className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px] text-nowrap" 
                  style={{ fontVariationSettings: "'wght' 400", color: item.categoryColor }}
                >
                  {item.category}
                </p>
              </div>
              {item.category === '資安事件' && (
                <div className="absolute left-[9px] size-[8px] top-[calc(50%+0.25px)] translate-y-[-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" fill={item.categoryColor} r="4" />
                  </svg>
                </div>
              )}
            </div>

            {/* 偵測時間 */}
            <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]">
              <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]">
                <p className="mb-0">{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>

            {/* 來源 */}
            <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[140px]">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 text-center w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                  {item.source}
                </p>
                <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  {item.sourceType}
                </p>
              </div>
            </div>

            {/* 標題與內容 */}
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
                    {item.tags.map((tag, index) => (
                      <div key={index} className="bg-[#f3f4f6] content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 操作 */}
            <div className="content-stretch flex flex-col items-start px-[24px] py-[21px] relative shrink-0 w-[120px]">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[24px] py-[16px] relative w-full">
                    <p 
                      className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap text-right tracking-[0.48px] underline" 
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      查看
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 簽章區域 */}
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full mt-[8px]">
        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
              部室主管簽章
            </p>
          </div>
          <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[35px] py-0 relative w-full">
                    <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                      部門主管簽章
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                  [ 簽章區域 ]
                </p>
              </div>
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

        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
              單位內供應商業務負責人簽章
            </p>
          </div>
          <div className="bg-[#ececf3] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[35px] py-0 relative w-full">
                    <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                      部門主管簽章
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap tracking-[-0.3125px]">
                  [ 簽章區域 ]
                </p>
              </div>
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
      </div>

      {/* 文件資訊 */}
      <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center text-nowrap w-full mt-[8px]">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
          本文件為機密文件，未經授權不得複製或外流
        </p>
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px]">
          Document ID: RA-2026-AI-CS-001 | Version: 1.0
        </p>
      </div>
    </div>
  );
}