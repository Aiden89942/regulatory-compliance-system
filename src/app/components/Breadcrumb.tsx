interface BreadcrumbItem {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbProps {
  isDarkMode?: boolean;
  items?: BreadcrumbItem[];
  onNavigate?: (page: string) => void;
}

function ChevronIcon({ isDarkMode }: { isDarkMode?: boolean }) {
  const strokeColor = isDarkMode ? '#747480' : '#4A5565';
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

export default function Breadcrumb({ isDarkMode = false, items, onNavigate }: BreadcrumbProps) {
  // If items are provided, use the dynamic items mode
  const resolvedItems: BreadcrumbItem[] = items || [
    { text: '首頁', onClick: onNavigate ? () => onNavigate('home') : undefined },
    { text: '弱點偵測' },
    { text: '情資追蹤', isActive: true },
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-center relative w-full p-[0px]" data-name="麵包屑">
      {resolvedItems.map((item, index) => {
        const isLast = index === resolvedItems.length - 1;
        const isActive = item.isActive || isLast;
        const isClickable = !!item.onClick && !isActive;

        const textColor = isActive
          ? (isDarkMode ? 'text-white' : 'text-[#1a1a24]')
          : 'text-[#747480]';
        const fontFamily = isActive
          ? "font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif]"
          : "font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif]";
        const fontWeight = isActive ? 'font-bold' : 'font-normal';
        const clickableClasses = isClickable ? 'cursor-pointer hover:text-[#1a1a24] transition-colors' : '';

        return (
          <div key={index} className="flex items-center gap-[8px]">
            {index > 0 && <ChevronIcon isDarkMode={isDarkMode} />}
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p
                  className={`${fontFamily} ${fontWeight} leading-[24px] not-italic relative shrink-0 ${textColor} text-[16px] text-nowrap tracking-[-0.3125px] ${clickableClasses}`}
                  onClick={isClickable ? item.onClick : undefined}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
