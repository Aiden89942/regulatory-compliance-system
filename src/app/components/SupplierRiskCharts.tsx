import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface SupplierRiskChartsProps {
  isDarkMode?: boolean;
}

// 供應商風險分佈數據 - 根據模式使用不同顏色
const getSupplierRiskData = (isDarkMode: boolean) => [
  {
    name: '已逾期',
    value: 15,
    color: isDarkMode ? '#419d48' : '#FFE600'  // 暗黑: 綠色, 明亮: 黃色
  },
  {
    name: '尚未處理',
    value: 52,
    color: isDarkMode ? '#55a3e2' : '#1A1A24'  // 暗黑: 藍色, 明亮: 深色
  },
  {
    name: '處理中',
    value: 48,
    color: isDarkMode ? '#ee762f' : '#747480'  // 暗黑: 橘色, 明亮: 灰色
  },
  {
    name: '已處理',
    value: 43,
    color: isDarkMode ? '#ec5242' : '#C4C4CD'  // 暗黑: 紅色, 明亮: 淡灰色
  }
];

// 弱點偵測狀態分佈數據 - 根據模式使用不同顏色
const getVulnerabilityStatusData = (isDarkMode: boolean) => [
  { 
    name: '已逾期', 
    value: 15, 
    color: isDarkMode ? '#419d48' : '#FFE600'  // 暗黑: 綠色, 明亮: 黃色
  },
  { 
    name: '尚未處理', 
    value: 95, 
    color: isDarkMode ? '#55a3e2' : '#1A1A24'  // 暗黑: 藍色, 明亮: 深色
  },
  { 
    name: '處理中', 
    value: 74, 
    color: isDarkMode ? '#ee762f' : '#747480'  // 暗黑: 橘色, 明亮: 灰色
  },
  { 
    name: '已處理', 
    value: 20, 
    color: isDarkMode ? '#ec5242' : '#C4C4CD'  // 暗黑: 紅色, 明亮: 淡灰色
  }
];

// 自定義 Tooltip 組件
const CustomTooltip = ({ active, payload, totalValue, unit, isDarkMode }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const percentage = ((data.value / totalValue) * 100).toFixed(1);
    
    const bgColor = isDarkMode ? 'bg-[#2e2e38]' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
    const borderColor = isDarkMode ? 'border-[rgba(255,255,255,0.2)]' : 'border-[#e0e0e0]';
    
    return (
      <div className={`${bgColor} ${borderColor} border border-solid rounded-[8px] shadow-lg p-[12px] transition-colors duration-300`}>
        <div className="flex items-center gap-[8px] mb-[8px]">
          <div 
            className="rounded-[3px] shrink-0 size-[14px]" 
            style={{ backgroundColor: data.payload.color }}
          />
          <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] ${textColor}`} style={{ fontVariationSettings: "'wght' 700" }}>
            {data.name}
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
            數量：<span className="font-['EYInterstate:Bold',sans-serif]" style={{ fontVariationSettings: "'wght' 700" }}>{data.value}</span> {unit}
          </p>
          <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
            佔比：<span className="font-['EYInterstate:Bold',sans-serif]" style={{ fontVariationSettings: "'wght' 700" }}>{percentage}%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

// 供應商風險分佈圖表
function SupplierRiskPieChart({ isDarkMode }: { isDarkMode: boolean }) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
  const supplierRiskData = getSupplierRiskData(isDarkMode);
  const total = supplierRiskData.reduce((sum, item) => sum + item.value, 0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.3] relative text-[22px] break-words ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
          本月法令遵循定期評估問卷填答情形
        </p>
      </div>
      
      <div className="w-[250px] h-[250px] min-w-[250px] min-h-[250px] mx-auto">
        <PieChart width={250} height={250} id="supplier-risk-piechart">
          <Pie
            data={supplierRiskData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            strokeWidth={2}
            stroke={isDarkMode ? '#1a1a1a' : '#ffffff'}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            isAnimationActive={false}
          >
            {supplierRiskData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center',
                  filter: activeIndex === index ? 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))' : 'none',
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={<CustomTooltip totalValue={total} unit="筆" isDarkMode={isDarkMode} />}
            cursor={{ fill: 'transparent' }}
          />
        </PieChart>
      </div>

      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[18px] text-center ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
        共 {total} 筆
      </p>

      <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
        {supplierRiskData.map((item) => (
          <div 
            key={item.name} 
            className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => {
              // 未來會有彈窗功能
              console.log(`點擊了：${item.name}`);
            }}
          >
            <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
              <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: item.color }} />
              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
                {item.name}
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              <div className="flex gap-[1.812px] items-center">
                <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
                  {item.value}
                </p>
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
                  筆
                </p>
              </div>
              <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 弱點偵測狀態分佈圖表
function VulnerabilityStatusPieChart({ isDarkMode }: { isDarkMode: boolean }) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
  const vulnerabilityStatusData = getVulnerabilityStatusData(isDarkMode);
  const total = vulnerabilityStatusData.reduce((sum, item) => sum + item.value, 0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.3] relative text-[22px] break-words ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
          本月內部控制制度自行查核問卷填答情形
        </p>
      </div>
      
      <div className="w-[250px] h-[250px] min-w-[250px] min-h-[250px] mx-auto">
        <PieChart width={250} height={250} id="vulnerability-status-piechart">
          <Pie
            data={vulnerabilityStatusData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            strokeWidth={2}
            stroke={isDarkMode ? '#1a1a1a' : '#ffffff'}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            isAnimationActive={false}
          >
            {vulnerabilityStatusData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center',
                  filter: activeIndex === index ? 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))' : 'none',
                }}
              />
            ))}
          </Pie>
          <Tooltip 
            content={<CustomTooltip totalValue={total} unit="筆" isDarkMode={isDarkMode} />}
            cursor={{ fill: 'transparent' }}
          />
        </PieChart>
      </div>

      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[18px] text-center ${textColor}`} style={{ fontVariationSettings: "'wght' 400" }}>
        共 {total} 筆
      </p>

      <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
        {vulnerabilityStatusData.map((item) => (
          <div 
            key={item.name} 
            className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => {
              // 未來會有彈窗功能
              console.log(`點擊了：${item.name}`);
            }}
          >
            <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
              <div className="rounded-[2px] shrink-0 size-[12px]" style={{ backgroundColor: item.color }} />
              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
                {item.name}
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              <div className="flex gap-[1.812px] items-center">
                <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap ${textColor} tracking-[0.6px]`}>
                  {item.value}
                </p>
                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-nowrap ${textColor} tracking-[0.54px]`} style={{ fontVariationSettings: "'wght' 400" }}>
                  筆
                </p>
              </div>
              <ChevronRight className={`w-5 h-5 ${textColor} opacity-60`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupplierRiskCharts({ isDarkMode = false }: SupplierRiskChartsProps) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.06)]' : 'bg-white';

  return (
    <>
      <div className={`${bgColor} content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] flex-1 h-[550px] transition-colors duration-300`}>
        <SupplierRiskPieChart isDarkMode={isDarkMode} />
      </div>

      <div className={`${bgColor} content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] flex-1 h-[550px] transition-colors duration-300`}>
        <VulnerabilityStatusPieChart isDarkMode={isDarkMode} />
      </div>
    </>
  );
}