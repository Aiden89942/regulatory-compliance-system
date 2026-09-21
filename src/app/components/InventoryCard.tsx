import svgPaths from "../../imports/svg-c9u6ac8cqm";

function Group13() {
  return (
    <div className="absolute inset-[20.45%_30.08%_22.73%_29.55%]">
      <div className="absolute inset-[-4%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7632 27">
          <g id="Group 1171276102">
            <path d="M4.70343 6.55555H10.6245" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1f771cf0} id="Vector_2" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M4.70312 10.5526H7.9926" id="Vector_3" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p25fe3f80} id="Vector_4" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p38d3a500} id="Vector_5" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

type IconProps = {
  isDarkMode?: boolean;
};

function Icon({ isDarkMode = false }: IconProps) {
  // 暗黑模式下，黃色卡片用黑色圖標
  const bgColor = isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#1a1a24]';
  
  return (
    <div className={`${bgColor} relative rounded-[60px] shrink-0 size-[44px] transition-colors duration-300`} data-name="icon">
      <Group13 />
    </div>
  );
}

function Frame31({ isDarkMode = false }: IconProps) {
  const textColor = isDarkMode ? 'text-[#1a1a24]' : 'text-[#ffe600]';
  
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 ${textColor} text-[16px] tracking-[0.48px] w-full transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 400" }}>
        筆
      </p>
    </div>
  );
}

function ChevronRightBackgroundImage({ isDarkMode = false }: IconProps) {
  const strokeColor = isDarkMode ? '#1a1a24' : '#FFE600';
  
  return (
    <div className="relative shrink-0 size-[24px] mr-[-4px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 18L15 12L9 6" id="Vector" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="transition-colors duration-300" />
        </g>
      </svg>
    </div>
  );
}

function Frame117({ isDarkMode = false }: IconProps) {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <Frame31 isDarkMode={isDarkMode} />
      <ChevronRightBackgroundImage isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame50({ isDarkMode = false }: IconProps) {
  const textColor = isDarkMode ? 'text-[#1a1a24]' : 'text-[#ffe600]';

  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[32px] text-nowrap transition-colors duration-300`}>1</p>
      <Frame117 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame99({ isDarkMode = false }: IconProps) {
  const textColor = isDarkMode ? 'text-[#1a1a24]' : 'text-[#ffe600]';

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 ${textColor} text-[22px] w-full transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 400" }}>
        合約即將到期
      </p>
      <Frame50 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame114({ isDarkMode = false }: IconProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon isDarkMode={isDarkMode} />
      <Frame99 isDarkMode={isDarkMode} />
    </div>
  );
}

function Tag({ isDarkMode = false }: IconProps) {
  // Tag 在暗黑模式下保持相同的漸變色，文字保持黑色
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ffe600] gap-[10px] items-center justify-center left-[23px] px-[12px] py-[8px] rounded-[4px] to-[#41fcea] top-[-25px]" data-name="Tag">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[22px] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        距離截止剩 20 天
      </p>
      <div className="absolute flex h-[14px] items-center justify-center left-[13px] top-[37px] w-[20px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[14px] relative w-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <path d={svgPaths.p24245400} fill="var(--fill-0, #F0E813)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

type InventoryCardProps = {
  isDarkMode?: boolean;
};

export default function InventoryCard({ isDarkMode = false }: InventoryCardProps) {
  // 在暗黑模式下，第一張卡片是黃色背景
  const bgColor = isDarkMode ? 'bg-[#ffe600]' : 'bg-[#1a1a24]';
  
  return (
    <div className="relative shrink-0 w-[260px] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
      <div className={`${bgColor} content-stretch flex gap-[10px] items-start p-[24px] relative rounded-[8px] w-full transition-colors duration-300`} data-name="Card">
        <Frame114 isDarkMode={isDarkMode} />
        <Tag isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}