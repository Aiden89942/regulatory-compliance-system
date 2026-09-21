import SupplierRiskCharts from './SupplierRiskCharts';

interface SupplierRiskAnalysisProps {
  isDarkMode?: boolean;
}

export default function SupplierRiskAnalysis({ isDarkMode = false }: SupplierRiskAnalysisProps) {
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] ${textColor} text-nowrap tracking-[0.96px] transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 900" }}>
        問卷填答分析
      </p>
      <div className="content-stretch flex gap-[32px] items-start relative w-full min-w-0">
        <SupplierRiskCharts isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}