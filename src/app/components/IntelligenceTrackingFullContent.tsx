import { useState } from 'react';
import clsx from 'clsx';

// ==================== Data ====================

const NEWS_DATA = [
  {
    id: 1, category: '負面消息', categoryColor: '#ee762f', categoryBg: '#ffedd4', categoryBorder: '#ffd59a',
    date: '2025/03/18', time: '14:00', source: 'iThome', sourceType: '科技媒體',
    title: '碩網 SmartRobot 雲端服務異常中斷，多家企業客戶受影響',
    description: '碩網資訊旗下 SmartRobot 智能客服平台於凌晨發生服務異常，導致多家銀行與電信業者的線上客服功能中斷約 2 小時。碩網表示已緊急修復，初步判斷為雲端架構擴容時的設定錯誤所致。',
  },
  {
    id: 2, category: '負面消息', categoryColor: '#ee762f', categoryBg: '#ffedd4', categoryBorder: '#ffd59a',
    date: '2025/02/15', time: '09:00', source: '工商時報', sourceType: '財經媒體',
    title: '碩網資訊興櫃股價單日跌幅達 8%，市場關注 AI 產品競爭壓力',
    description: '碩網資訊（7547）興櫃股價單日重挫 8%，法人指出主因為國際大廠 AI 聊天機器人產品強勢進入台灣市場，對碩網 SmartRobot 構成直接競爭壓力，加上近期營收成長放緩，引發投資人信心動搖。',
  },
  {
    id: 3, category: '資安事件', categoryColor: '#ec5242', categoryBg: '#ffe2e2', categoryBorder: '#ffc9c9',
    date: '2025/02/14', time: '08:30', source: '數位時代', sourceType: '科技媒體',
    title: '碩網資訊客戶反映 API Gateway 回應延遲，部分服務中斷逾 30 分鐘',
    description: '多家採用碩網 SmartKMS 知識管理系統的企業客戶反映，API Gateway 在尖峰時段回應延遲嚴重，部分客戶的內部知識庫搜尋功能中斷逾 30 分鐘。碩網表示已啟動緊急流量調配機制，正進行根因分析。',
  },
];

const JUDICIAL_DATA = [
  { id: 1, date: '2023-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 2, date: '2023-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 3, date: '2023-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 4, date: '2023-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 5, date: '2022-12-08', role: '原告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 6, date: '2022-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 7, date: '2022-12-08', role: '被告', case: '碩網營業秘密與競業禁止紛爭', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 8, date: '2022-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 9, date: '2022-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
  { id: 10, date: '2022-12-08', role: '被告', case: '依職權裁定確定訴訟費用額', court: '臺北地院', note: '裁定 (勞資延伸)' },
];

const GOV_BID_DATA = [
  { id: 1, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 2, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 3, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 4, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 5, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 6, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 7, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 8, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
  { id: 9, date: '2025-12-16', org: '立法院', project: '115年度國會圖書館網站維護案', amount: '700,000' },
];

const RELATED_DATA = [
  { id: 1, company: '愛迪森斯股份有限公司', status: '營業中', representative: '區光穎', capital: '5,806,080', established: '2001-03-14', relation: '股權關聯：一級，位元堂' },
  { id: 2, company: '美國英寶國際股份有限公司', status: '營業中', representative: '彭*玲', capital: '5,890,080', established: '2004-06-22', relation: '控制關聯：上下游' },
  { id: 3, company: '碩鼎科技股份有限公司', status: '營業中', representative: '-', capital: '20,006,800', established: '2003-06-08', relation: '股權關聯' },
  { id: 4, company: '臺灣碩智慧資訊科技股份有限公司', status: '營業中', representative: '劉*和', capital: '-', established: '2019-07-17', relation: '股權關聯：一級/交叉' },
  { id: 5, company: '球圓碩智慧資訊股份有限公司', status: '營業中', representative: '劉*和', capital: '30,068,800', established: '2022-08-29', relation: '股權關聯' },
  { id: 6, company: '廣宇開發股份有限公司', status: '歇業', representative: '-', capital: '200,080', established: '2014-02-17', relation: '董監事關聯' },
  { id: 7, company: '裕德實業股份有限公司', status: '營業中', representative: '劉*和', capital: '244,870,710', established: '2014-03-04', relation: '董監事關聯' },
  { id: 8, company: '凱利環球建材裝飾科技集團公司', status: '營業中', representative: '-', capital: '200,060,000', established: '2012-04-05', relation: '股權關聯' },
  { id: 9, company: '碩聯軟體科技股份有限公司', status: '營業中', representative: '-', capital: '200,000,008', established: '2018-01-26', relation: '董監事關聯' },
  { id: 10, company: '廣東工業百信信息集團科技有限公司', status: '營業中', representative: '-', capital: '2,800,040,008', established: '1979-11-08', relation: '股權關聯：交叉控制，長投' },
];

// ==================== Filter Tabs ====================

const FILTER_TABS = [
  { id: 'all', label: '全部', count: 87 },
  { id: 'realtime', label: '即時情資', count: 3 },
  { id: 'bidding-ban', label: '標案拒往', count: 0 },
  { id: 'judicial', label: '司法判決', count: 0 },
  { id: 'gov-bid', label: '政府標案', count: 0 },
  { id: 'related', label: '疑似關係', count: 81 },
  { id: 'penalty', label: '違規裁罰', count: 0 },
];

// ==================== Sub Components ====================

function CollapsibleSection({ title, count, totalText, children, defaultExpanded = true }: {
  title: string; count?: number; totalText?: string; children: React.ReactNode; defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" onClick={() => setExpanded(!expanded)}>
              <div className="flex-1 relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full whitespace-nowrap">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
                    {title}{count !== undefined ? ` (${count})` : ''}
                  </p>
                  {totalText && (
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      {totalText}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative rounded-[10px] shrink-0 size-[40px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                  <div className={clsx("h-[24px] overflow-clip relative shrink-0 w-full transition-transform", expanded ? "" : "rotate-180")}>
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M18 15L12 9L6 15" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          {expanded && children}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececf3] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function NewsTable() {
  return (
    <>
      {/* Table */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-[#f6f6fa] content-stretch flex gap-[8px] h-[56px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[130px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>情資類別</p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>偵測時間</p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[140px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>來源/頻道</p>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>標題與摘要內容</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative shrink-0 w-[120px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>操作</p>
          </div>
        </div>

        {/* Rows */}
        {NEWS_DATA.map((item, idx) => (
          <div key={item.id} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            {/* Category */}
            <div className="content-stretch flex flex-col gap-[10px] items-start pl-[24px] pr-[15px] py-[12px] relative shrink-0 w-[130px]">
              <div className={`content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0`} style={{ backgroundColor: item.categoryBg }}>
                <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: item.categoryBorder }} />
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[13px] whitespace-nowrap" style={{ color: item.categoryColor, fontVariationSettings: "'wght' 400" }}>{item.category}</p>
              </div>
              {idx === 0 && (
                <div className="absolute left-[9px] size-[8px] top-[calc(50%+0.25px)] translate-y-[-50%]">
                  <svg className="block size-full" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" fill="#EC5242" r="4" /></svg>
                </div>
              )}
            </div>
            {/* Time */}
            <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[140px]">
              <div className="font-['EYInterstate:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
                <p className="mb-0">{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
            {/* Source */}
            <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[140px]">
              <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[4px] items-center justify-end relative shrink-0 text-center w-full">
                <p className="leading-[23px] min-w-full relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{item.source}</p>
                <p className="leading-[normal] relative shrink-0 text-[#747480] text-[13px] w-[140px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.sourceType}</p>
              </div>
            </div>
            {/* Content */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                <div className="content-stretch flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full">
                  <p className="leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>{item.title}</p>
                  <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#747480] text-[14px] text-ellipsis tracking-[0.42px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{item.description}</p>
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[120px]">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pr-[24px] py-[16px] relative w-full">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-right tracking-[0.48px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wght' 400" }}>查看</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination current={1} total={1} showing="1-10" totalItems={3} />
    </>
  );
}

function SimpleTable({ headers, data }: { headers: string[]; data: string[][] }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      {/* Header */}
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-[#f6f6fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
          <p className="font-['Inter:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>#</p>
        </div>
        {headers.map((h, i) => (
          <div key={i} className="bg-[#f6f6fa] flex-1 min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[21px] relative shrink-0 text-[#747480] text-[14px] tracking-[-0.1504px] whitespace-nowrap" style={{ fontWeight: 700 }}>{h}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Rows */}
      {data.map((row, rowIdx) => (
        <div key={rowIdx} className="content-stretch flex items-center relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#ececf3] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[40px]">
            <p className="font-['Inter:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{rowIdx + 1}</p>
          </div>
          {row.map((cell, cellIdx) => (
            <div key={cellIdx} className="flex-1 min-h-px min-w-px relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                  <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{cell}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function RelatedCompanyTable() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      {/* Header */}
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="bg-[#f6f6fa] content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[50px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]" style={{ fontWeight: 700 }}>#</p>
        </div>
        <div className="bg-[#f6f6fa] content-stretch flex items-start px-[16px] py-[12px] relative shrink-0 w-[300px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>公司名稱</p>
        </div>
        <div className="bg-[#f6f6fa] content-stretch flex items-start px-[16px] py-[12px] relative shrink-0 w-[98px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>營業狀態</p>
        </div>
        <div className="bg-[#f6f6fa] content-stretch flex items-start px-[16px] py-[12px] relative shrink-0 w-[80px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>負責人</p>
        </div>
        <div className="bg-[#f6f6fa] content-stretch flex items-start px-[16px] py-[12px] relative shrink-0 w-[140px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>資本額</p>
        </div>
        <div className="bg-[#f6f6fa] content-stretch flex items-start px-[16px] py-[12px] relative shrink-0 w-[148px]">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>成立日期</p>
        </div>
        <div className="bg-[#f6f6fa] flex-1 min-h-px min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
            <p className="flex-1 font-['Noto_Sans_TC:Bold',sans-serif] leading-[normal] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontWeight: 700 }}>關係說明</p>
          </div>
        </div>
      </div>
      {/* Rows */}
      {RELATED_DATA.map((item, rowIdx) => (
        <div key={item.id} className="content-stretch flex items-center relative shrink-0 w-full">
          {/* # */}
          <div className="h-full relative shrink-0 w-[50px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] text-center tracking-[0.42px]">{rowIdx + 1}</p>
              </div>
            </div>
          </div>
          {/* 公司名稱 */}
          <div className="h-full relative shrink-0 w-[300px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.company}</p>
              </div>
            </div>
          </div>
          {/* 營業狀態 */}
          <div className="h-full relative shrink-0 w-[98px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <div className="bg-[#ececf3] h-[21px] relative rounded-[4px] shrink-0">
                  <div className="content-stretch flex items-start px-[8px] py-[2px] relative size-full">
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#747480] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{item.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 負責人 */}
          <div className="h-full relative shrink-0 w-[80px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.representative}</p>
              </div>
            </div>
          </div>
          {/* 資本額 */}
          <div className="h-full relative shrink-0 w-[140px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.capital}</p>
              </div>
            </div>
          </div>
          {/* 成立日期 */}
          <div className="h-full relative shrink-0 w-[148px]">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.established}</p>
              </div>
            </div>
          </div>
          {/* 關係說明 */}
          <div className="flex-1 h-full min-h-px min-w-px relative">
            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative text-[#1a1a24] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>{item.relation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Pagination({ current, total, showing, totalItems }: { current: number; total: number; showing: string; totalItems: number }) {
  return (
    <div className="bg-[#f9fafb] h-[79px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[24px] relative size-full">
        <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            第 {current} 頁，共 {total} 頁（顯示 {showing} /{totalItems} 筆）
          </p>
          <div className="h-[32px] relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
              {/* Prev */}
              <div className="bg-[#dbdbdb] opacity-50 relative rounded-[4px] shrink-0 size-[32px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                  <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M10 12L6 8L10 4" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /></svg>
                </div>
              </div>
              {/* Current page */}
              <div className="bg-[#ffe600] relative rounded-[4px] shrink-0 size-[32px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.42px] whitespace-nowrap">{current}</p>
                </div>
              </div>
              {/* Next */}
              <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                  <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M6 12L10 8L6 4" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyMessage({ message }: { message: string }) {
  return (
    <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#1a1a24] text-[14px] tracking-[-0.1504px] whitespace-nowrap">
      {message}
    </p>
  );
}

// ==================== Main Component ====================

export default function IntelligenceTrackingFullContent() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {/* Filter tabs */}
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 flex-wrap">
        {FILTER_TABS.map((tab) => (
          <div
            key={tab.id}
            className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
              activeTab === tab.id ? 'bg-[#ffe600]' : 'bg-[#ececf3] hover:bg-[#e0e0e8]'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${
              activeTab === tab.id
                ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
                : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
            }`} style={{ fontVariationSettings: activeTab === tab.id ? "'wght' 700" : "'wght' 400" }}>
              {tab.label} ({tab.count})
            </p>
          </div>
        ))}
      </div>

      {/* Collapsible sub-sections */}
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative shrink-0 w-full">
        {/* 即時情資 */}
        <CollapsibleSection title="即時情資" count={3} totalText="共 3 筆" defaultExpanded={true}>
          <NewsTable />
        </CollapsibleSection>

        {/* 標案拒往 */}
        <CollapsibleSection title="標案拒往" count={0} totalText="共 0 筆" defaultExpanded={true}>
          <EmptyMessage message="經查政府採購網，該公司目前信用狀態正常。" />
        </CollapsibleSection>

        {/* 司法判決 */}
        <CollapsibleSection title="司法判決" count={21} totalText="共 21 筆" defaultExpanded={true}>
          <SimpleTable
            headers={['日期', '角色', '案由', '法院', '備註']}
            data={JUDICIAL_DATA.map(j => [j.date, j.role, j.case, j.court, j.note])}
          />
        </CollapsibleSection>

        {/* 政府標案 */}
        <CollapsibleSection title="政府標案" count={0} totalText="共 0 筆" defaultExpanded={true}>
          <SimpleTable
            headers={['日期', '機關', '標案名稱', '金額(NT$)']}
            data={GOV_BID_DATA.map(g => [g.date, g.org, g.project, g.amount])}
          />
        </CollapsibleSection>

        {/* 疑似關係 */}
        <CollapsibleSection title="疑似關係" totalText="共 189 筆" defaultExpanded={true}>
          <RelatedCompanyTable />
          <Pagination current={1} total={19} showing="1-10" totalItems={189} />
        </CollapsibleSection>

        {/* 違規裁罰 */}
        <CollapsibleSection title="違規裁罰" count={0} totalText="共 0 筆" defaultExpanded={true}>
          <EmptyMessage message="查無司法判決紀錄。" />
        </CollapsibleSection>
      </div>
    </div>
  );
}