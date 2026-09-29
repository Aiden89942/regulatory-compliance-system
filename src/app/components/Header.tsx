import svgPaths from "@/imports/svg-mw3h2lnbfe";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { pathToPage, pageToPath } from '../context/AppContext';

interface HeaderProps {
  onNavigate?: (page: string, supplier?: string, query?: Record<string, string>) => void;
  currentPage?: string;
  isFixed?: boolean;
}

function PflLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center gap-[12px] overflow-clip px-0 py-[2px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="PFL_logo2022 2"
      onClick={onClick}
    >
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">自行評估與自行查核系統</p>
    </div>
  );
}

/**
 * MenuButton Component
 * 根據 isActive 屬性顯示不同的變體
 * - Active: 黃色文字 (#ffe600) + 黃色底線
 * - Inactive: 白色文字 (#f6f6fa) + hover時變黃色
 * - Disabled: 白色文字 (#f6f6fa) + 無 hover 效果 + 不可點擊
 */
function MenuButton({ text, isActive, onClick, isImplemented = true }: { text: string; isActive?: boolean; onClick?: () => void; isImplemented?: boolean }) {
  if (isActive) {
    return (
      <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" onClick={onClick}>
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 900" }}>
          {text}
        </p>
        {/* 黃色底線 - 只在 Active 狀態顯示 */}
        <div className="absolute bottom-[-32px] h-0 left-0 w-full">
          <div className="absolute inset-[-6px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 12">
              <path d="M0 6H130" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // 未實現的頁面 - 無 hover 效果，不可點擊
  if (!isImplemented) {
    return (
      <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-default">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    );
  }

  // 已實現的頁面 - 有 hover 效果，可點擊
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer group" onClick={onClick}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] group-hover:text-[#ffe600] text-[20px] text-center transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * VulnerabilityDetectionButton (弱點偵測按鈕)
 * 含下拉選單：SBOM 弱點分析、情資追蹤
 */
function VulnerabilityDetectionButton({ onNavigate, isActive }: { onNavigate?: (page: string) => void; isActive?: boolean }) {
  return (
    <div className="relative">
      <div className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer group`}>
        <p className={`font-['EYInterstate:${isActive ? 'Bold' : 'Regular'}','Noto_Sans_JP:${isActive ? 'Bold' : 'Regular'}',sans-serif] leading-[normal] relative shrink-0 ${isActive ? 'text-[#ffe600]' : 'text-[#f6f6fa] group-hover:text-[#ffe600]'} text-[20px] transition-colors ${isActive ? 'tracking-[0.6px]' : ''}`} style={{ fontVariationSettings: isActive ? "'wght' 900" : "'wght' 400" }}>
          管理報表
        </p>
        <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <ChevronRight />
          </div>
        </div>
        
        {/* 黃色底線 - 只在 isActive 時顯示 */}
        {isActive && (
          <div className="absolute bottom-[-32px] h-0 left-0 w-full">
            <div className="absolute inset-[-6px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 12">
                <path d="M0 6H130" stroke="#FFE600" strokeWidth="12" />
              </svg>
            </div>
          </div>
        )}
        
        {/* 下拉選單 - hover 時顯示 */}
        <div className="absolute top-full left-0 mt-[8px] w-[224px] bg-[#2e2e38] rounded-[8px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="flex flex-col">
            <div 
              className="px-[20px] py-[16px] border-b border-[#474756] cursor-pointer rounded-t-[8px] group/item"
              onClick={() => onNavigate?.('sbom-analysis')}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#f6f6fa] group-hover/item:text-[#ffe600] text-[20px] text-nowrap transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
                SBOM 弱點分析
              </p>
            </div>
            <div 
              className="px-[20px] py-[16px] cursor-pointer rounded-b-[8px] group/item"
              onClick={() => onNavigate?.('intelligence-tracking')}
            >
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#f6f6fa] group-hover/item:text-[#ffe600] text-[20px] text-nowrap transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
                情資追蹤
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * AddSupplierButton (新增供應商按鈕)
 * 固定黃色背景，點擊後導航到供應商風險評估頁面
 */
function AddSupplierButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors" 
      data-name="按鈕(L)"
      onClick={onClick}
    >
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 900" }}>
        <p className="leading-[normal]">新增供應商</p>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="bell">
          <path d={svgPaths.p360c70e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p29e38a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * NotificationBell (通知鈴鐺)
 * 點擊後展開通知面板
 */
function NotificationBell({ onNavigate }: { onNavigate?: (page: string, supplier?: string, query?: Record<string, string>) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const notifications = [
    {
      id: 'n1',
      title: '自評表審核通知',
      message: '授信審查自評表已設計完成，請主管審核後再發布。',
      time: '今天 09:30',
      unread: true,
      action: () => onNavigate?.('question-bank-edit', undefined, { template: 'compliance', id: 'comp-1-1' }),
    },
    {
      id: 'n2',
      title: '自評通知',
      message: '法令遵循自行評估自評表已發布，請於截止日前完成填寫。',
      time: '今天 10:15',
      unread: true,
      action: () => onNavigate?.('self-assessment', undefined, { template: 'compliance' }),
    },
    {
      id: 'n3',
      title: '自評逾期通知',
      message: '存款開戶自評已逾截止日，請儘速補填。',
      time: '昨天 16:20',
      unread: true,
      action: () => onNavigate?.('self-assessment', undefined, { template: 'compliance' }),
    },
    {
      id: 'n4',
      title: '自評 Review 通知',
      message: '授信管理部已送出自評結果，請主管進行 review。',
      time: '昨天 11:05',
      unread: true,
      action: () => onNavigate?.('risk-assessment'),
    },
    {
      id: 'n5',
      title: '改善通知',
      message: '主管 review 後請補充利害關係人迴避作業的改善說明。',
      time: '03/18 14:42',
      unread: true,
      action: () => onNavigate?.('self-assessment', undefined, { template: 'compliance' }),
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative" ref={panelRef}>
      <div
        className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px] cursor-pointer hover:opacity-80 transition-opacity">
          <Bell />
        </div>
        {unreadCount > 0 && (
          <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0 pointer-events-none">
            <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">
              {unreadCount > 99 ? '99+' : unreadCount}
            </p>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-[72px] w-[400px] bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[60] overflow-hidden border border-[#ececf3]">
          <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#ececf3] bg-[#f6f6fa]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] text-[#1a1a24]" style={{ fontWeight: 700 }}>
              通知
            </p>
            <p className="font-['EYInterstate:Regular',sans-serif] text-[13px] text-[#747480]">
              {unreadCount} 則未讀
            </p>
          </div>
          <div className="max-h-[420px] overflow-y-auto">
            {notifications.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  item.action();
                }}
                className={`w-full text-left px-[20px] py-[16px] border-none cursor-pointer transition-colors hover:bg-[#fafafd] ${
                  index < notifications.length - 1 ? 'border-b border-[#ececf3]' : ''
                } ${item.unread ? 'bg-[#fffdf0]' : 'bg-white'}`}
              >
                <div className="flex items-start gap-[12px]">
                  <div className={`mt-[6px] size-[8px] rounded-full shrink-0 ${item.unread ? 'bg-[#ee762f]' : 'bg-transparent'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-[8px] mb-[4px]">
                      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] text-[#1a1a24] truncate" style={{ fontWeight: 700 }}>
                        {item.title}
                      </p>
                      <p className="font-['EYInterstate:Regular',sans-serif] text-[12px] text-[#99A1AF] shrink-0">
                        {item.time}
                      </p>
                    </div>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[20px] text-[#747480]">
                      {item.message}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-[20px] py-[12px] border-t border-[#ececf3] bg-[#f6f6fa]">
            <p className="font-['EYInterstate:Regular',sans-serif] text-[13px] text-center text-[#747480]">
              以上為示範通知訊息
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Header 主組件
 * 
 * Now supports both:
 * 1. React Router mode (default): auto-detects current page from URL, uses useNavigate
 * 2. Legacy prop mode: uses onNavigate prop and currentPage prop
 */
export default function Header({ onNavigate: onNavigateProp, currentPage: currentPageProp, isFixed = true }: HeaderProps) {
  // Always use React Router hooks (we're always inside a Router context now)
  const routerNav = useNavigate();
  const location = useLocation();

  const routerNavigate = (page: string, supplier?: string, query?: Record<string, string>) => {
    const path = pageToPath(page, supplier, query);
    routerNav(path);
  };

  // Use prop if provided, otherwise use Router-derived values
  const onNavigate = onNavigateProp || routerNavigate;
  const currentPage = currentPageProp || pathToPage(location.pathname);

  // 判斷供應商管理按鈕是否應該激活
  const isSupplierManagementActive = [
    'supplier-management',
    'supplier-risk-assessment',
    'supplier-risk-step2',
    'supplier-risk-step3',
    'supplier-risk-step3-page2',
    'supplier-risk-step3-page3',
    'supplier-detail',
    'risk-assessment-form'
  ].includes(currentPage);

  return (
    <div className={`bg-[#2e2e38] ${isFixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 w-full`}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
            <PflLogo onClick={() => onNavigate?.('home')} />
            
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              {/* 菜單項 - 根據 currentPage 屬性顯示對應的 Active 狀態 */}
              <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                <MenuButton 
                  text="首頁" 
                  isActive={currentPage === 'home'} 
                  onClick={() => onNavigate?.('home')} 
                  isImplemented={true}
                />
                <MenuButton 
                  text="評估作業" 
                  isActive={currentPage === 'risk-assessment'} 
                  onClick={() => onNavigate?.('risk-assessment')} 
                  isImplemented={true}
                />
                {/* <MenuButton 
                  text="內部控制制度自行查核" 
                  isActive={isSupplierManagementActive} 
                  onClick={() => onNavigate?.('supplier-management')} 
                  isImplemented={false}
                /> */}
                <MenuButton 
                  text="缺失追蹤" 
                  isActive={currentPage === 'deficiency-tracking'} 
                  onClick={() => onNavigate?.('deficiency-tracking')} 
                  isImplemented={true}
                />
                <MenuButton 
                  text="管理報表" 
                  isActive={currentPage === 'management-report'} 
                  onClick={() => onNavigate?.('management-report')} 
                  isImplemented={false}
                />
                <MenuButton 
                  text="題庫維護" 
                  isActive={currentPage === 'question-bank'} 
                  onClick={() => onNavigate?.('question-bank')} 
                  isImplemented={true}
                />
              </div>
              
              {/* 右側按鈕區域 */}
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="flex flex-row items-center self-stretch">
                </div>
                <NotificationBell onNavigate={onNavigate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}