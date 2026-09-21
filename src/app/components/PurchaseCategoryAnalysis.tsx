import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight } from 'lucide-react';

interface PurchaseCategoryAnalysisProps {
  isDarkMode?: boolean;
}

// 真實數據：歷年採購類別分析（每月數據）
const purchaseData = [
  { month: '1月', 系統開發: 12, 系統維護: 8, 系統整合: 5, 設備操作: 3, 硬體維護: 15, 備份與備援服務: 4 },
  { month: '2月', 系統開發: 15, 系統維護: 10, 系統整合: 6, 設備操作: 4, 硬體維護: 18, 備份與備援服務: 5 },
  { month: '3月', 系統開發: 18, 系統維護: 12, 系統整合: 7, 設備操作: 5, 硬體維護: 22, 備份與備援服務: 6 },
  { month: '4月', 系統開發: 14, 系統維護: 9, 系統整合: 5, 設備操作: 3, 硬體維護: 16, 備份與備援服務: 4 },
  { month: '5月', 系統開發: 20, 系統維護: 15, 系統整合: 8, 設備操作: 6, 硬體維護: 25, 備份與備援服務: 7 },
  { month: '6月', 系統開發: 16, 系統維護: 11, 系統整合: 6, 設備操作: 4, 硬體維護: 20, 備份與備援服務: 5 },
  { month: '7月', 系統開發: 22, 系統維護: 16, 系統整合: 9, 設備操作: 7, 硬體維護: 28, 備份與備援服務: 8 },
  { month: '8月', 系統開發: 19, 系統維護: 13, 系統整合: 7, 設備操作: 5, 硬體維護: 24, 備份與備援服務: 6 },
  { month: '9月', 系統開發: 17, 系統維護: 12, 系統整合: 6, 設備操作: 4, 硬體維護: 21, 備份與備援服務: 5 },
  { month: '10月', 系統開發: 21, 系統維護: 14, 系統整合: 8, 設備操作: 6, 硬體維護: 26, 備份與備援服務: 7 },
  { month: '11月', 系統開發: 36, 系統維護: 38, 系統整合: 22, 設備操作: 13, 硬體維護: 90, 備份與備援服務: 11 },
  { month: '12月', 系統開發: 0, 系統維護: 0, 系統整合: 0, 設備操作: 0, 硬體維護: 0, 備份與備援服務: 0 },
];

// 類別顏色配置（根據模式使用不同顏色）
const getCategoryColors = (isDarkMode: boolean) => ({
  系統開發: isDarkMode ? '#419d48' : '#747480',       // 暗黑: 綠色, 明亮: 灰色
  系統維護: isDarkMode ? '#55a3e2' : '#C4C4CD',       // 暗黑: 藍色, 明亮: 淡灰色
  系統整合: isDarkMode ? '#ec5242' : '#1A1A24',       // 暗黑: 紅色, 明亮: 深色
  設備操作: isDarkMode ? '#ffe600' : '#FFE600',       // 暗黑: 黃色, 明亮: 黃色
  硬體維護: isDarkMode ? '#ee762f' : '#8F8100',       // 暗黑: 橘色, 明亮: 深黃色
  備份與備援服務: isDarkMode ? '#747480' : '#D09E33'  // 暗黑: 灰色, 明亮: 金色
});

// 計算每個類別的總計
const categoryTotals = {
  系統開發: purchaseData.reduce((sum, item) => sum + item.系統開發, 0),
  系統維護: purchaseData.reduce((sum, item) => sum + item.系統維護, 0),
  系統整合: purchaseData.reduce((sum, item) => sum + item.系統整合, 0),
  設備操作: purchaseData.reduce((sum, item) => sum + item.設備操作, 0),
  硬體維護: purchaseData.reduce((sum, item) => sum + item.硬體維護, 0),
  備份與備援服務: purchaseData.reduce((sum, item) => sum + item.備份與備援服務, 0)
};

// 自定義 Tooltip
const CustomTooltip = ({ active, payload, label, isDarkMode }: any) => {
  if (active && payload && payload.length) {
    const bgColor = isDarkMode ? 'bg-[#2e2e38]' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
    const borderColor = isDarkMode ? 'border-[rgba(255,255,255,0.2)]' : 'border-[#e0e0e0]';
    
    return (
      <div className={`${bgColor} ${borderColor} border border-solid rounded-[8px] shadow-lg p-[12px] transition-colors duration-300`}>
        <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] mb-[8px] ${textColor}`} style={{ fontVariationSettings: "'wght' 700" }}>
          {label}
        </p>
        <div className="flex flex-col gap-[6px]">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-[8px]">
              <div 
                className="rounded-[3px] shrink-0 size-[12px]" 
                style={{ backgroundColor: entry.color }}
              />
              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
                {entry.name}：<span className="font-['EYInterstate:Bold',sans-serif]" style={{ fontVariationSettings: "'wght' 700" }}>{entry.value}</span> 件
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// 自定義圖例
const CustomLegend = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
  
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-start relative shrink-0 w-full">
      {/* 第一行 */}
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：系統開發')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).系統開發 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              系統開發
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.系統開發}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
        
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：系統維護')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).系統維護 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              系統維護
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.系統維護}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
        
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：系統整合')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).系統整合 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              系統整合
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.系統整合}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
      </div>
      
      {/* 第二行 */}
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：設備操作')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).設備操作 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              設備操作
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.設備操作}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
        
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：硬體維護')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).硬體維護 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              硬體維護
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.硬體維護}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
        
        <div 
          className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => console.log('點擊了：備份與備援服務')}
        >
          <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
            <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: getCategoryColors(isDarkMode).備份與備援服務 }} />
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
              備份與備援服務
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
              {categoryTotals.備份與備援服務}
            </p>
            <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PurchaseCategoryAnalysis({ isDarkMode = false }: PurchaseCategoryAnalysisProps) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.06)]' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
  const gridColor = isDarkMode ? 'rgba(255,255,255,0.03)' : '#f2f2f2';
  const axisColor = isDarkMode ? '#747480' : '#747480';

  return (
    <div className={`${bgColor} content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] transition-colors duration-300 basis-0 grow min-h-[550px] min-w-0 shrink-0 h-[550px]`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] text-nowrap ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
          歷年問卷填答分析
        </p>
      </div>
      
      <div className="w-full h-[364px] min-h-[364px]">
        <ResponsiveContainer width="100%" height={364} minWidth={400} minHeight={364}>
          <BarChart 
            id="purchase-category-barchart"
            data={purchaseData}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} key="grid" />
            <XAxis 
              key="xaxis"
              dataKey="month" 
              tick={{ fill: axisColor, fontSize: 13, fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              key="yaxis"
              tick={{ fill: axisColor, fontSize: 13, fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 'auto']}
            />
            <Tooltip 
              key="tooltip"
              content={<CustomTooltip isDarkMode={isDarkMode} />}
              cursor={{ fill: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}
            />
            <Bar key="bar-1" id="bar-1" dataKey="系統開發" stackId="a" fill={getCategoryColors(isDarkMode).系統開發} radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar key="bar-2" id="bar-2" dataKey="系統維護" stackId="a" fill={getCategoryColors(isDarkMode).系統維護} radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar key="bar-3" id="bar-3" dataKey="系統整合" stackId="a" fill={getCategoryColors(isDarkMode).系統整合} radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar key="bar-4" id="bar-4" dataKey="設備操作" stackId="a" fill={getCategoryColors(isDarkMode).設備操作} radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar key="bar-5" id="bar-5" dataKey="硬體維護" stackId="a" fill={getCategoryColors(isDarkMode).硬體維護} radius={[0, 0, 0, 0]} isAnimationActive={false} />
            <Bar key="bar-6" id="bar-6" dataKey="備份與備援服務" stackId="a" fill={getCategoryColors(isDarkMode).備份與備援服務} radius={[2, 2, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <CustomLegend isDarkMode={isDarkMode} />
    </div>
  );
}