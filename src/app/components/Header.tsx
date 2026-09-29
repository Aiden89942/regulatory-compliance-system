import svgPaths from "@/imports/svg-mw3h2lnbfe";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { APP_USERS, pathToPage, pageToPath, ROLE_PAGES, useAppContext, UserRole } from '../context/AppContext';

type AppNotification = {
  id: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  page: string;
  query?: Record<string, string>;
};

const ROLE_NOTIFICATIONS: Record<UserRole, AppNotification[]> = {
  assessor: [
    {
      id: 'a1',
      title: '自評通知',
      message: '授信審查的法令遵循自行評估已派發至授信管理部，請於截止日前完成填寫。',
      time: '今天 10:15',
      unread: true,
      page: 'self-assessment',
      query: { template: 'compliance' },
    },
    {
      id: 'a2',
      title: '自評逾期通知',
      message: '授信審查自評已逾截止日，請授信管理部儘速補填。',
      time: '昨天 16:20',
      unread: true,
      page: 'risk-assessment',
    },
    {
      id: 'a3',
      title: '改善通知',
      message: '利害關係人迴避作業被標示未符合，請補充改善說明。',
      time: '03/18 14:42',
      unread: true,
      page: 'self-assessment',
      query: { template: 'compliance' },
    },
  ],
  maintainer: [
    {
      id: 'm1',
      title: '問卷退回',
      message: '授信審查問卷已退回，請修正題目後再送審。',
      time: '今天 09:30',
      unread: true,
      page: 'question-bank-edit',
      query: { template: 'compliance', id: 'comp-1-1' },
    },
    {
      id: 'm2',
      title: '題目待補',
      message: '內部查核尚有作答選項未確認，請至題庫維護更新。',
      time: '昨天 11:05',
      unread: true,
      page: 'question-bank',
    },
    {
      id: 'm3',
      title: '自評表待設計',
      message: '存款開戶自評表尚未完成設計，請從題庫勾選題目。',
      time: '03/20 15:10',
      unread: false,
      page: 'question-bank-design',
      query: { template: 'compliance' },
    },
  ],
  reviewer: [
    {
      id: 'r1',
      title: '待審核',
      message: '授信審查問卷已送審，請查看內容後決定通過或退回。',
      time: '今天 09:30',
      unread: true,
      page: 'question-bank-review',
      query: { id: 'review-comp-1' },
    },
    {
      id: 'r2',
      title: '待發送',
      message: '存款開戶問卷已審核通過，尚未發送至自評單位。',
      time: '今天 14:05',
      unread: true,
      page: 'question-bank-review',
    },
    {
      id: 'r3',
      title: '缺失追蹤',
      message: '授信管理部有題目標示未符合，請至缺失追蹤查看。',
      time: '昨天 11:05',
      unread: true,
      page: 'deficiency-tracking',
      query: { id: 'def-comp-1' },
    },
  ],
};

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
  const { currentUser } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const notifications = ROLE_NOTIFICATIONS[currentUser.role];

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

  const unreadCount = notifications.filter((item) => item.unread).length;

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
                  onNavigate?.(item.page, undefined, item.query);
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

const ROLE_MENUS: Record<UserRole, { text: string; page: string; activePages: string[] }[]> = {
  assessor: [
    { text: '首頁', page: 'home', activePages: ['home'] },
    { text: '評估作業', page: 'risk-assessment', activePages: ['risk-assessment', 'risk-assessment-form', 'risk-assessment-view', 'risk-assessment-send', 'self-assessment'] },
  ],
  maintainer: [
    { text: '首頁', page: 'home', activePages: ['home'] },
    { text: '題庫維護', page: 'question-bank', activePages: ['question-bank', 'question-bank-edit', 'question-bank-design'] },
  ],
  reviewer: [
    { text: '首頁', page: 'home', activePages: ['home'] },
    { text: '問卷審核', page: 'question-bank-review', activePages: ['question-bank-review'] },
    { text: '缺失追蹤', page: 'deficiency-tracking', activePages: ['deficiency-tracking'] },
  ],
};

function UserIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19.2c.8-3.1 3.3-4.7 6.5-4.7s5.7 1.6 6.5 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CurrentUserSwitcher() {
  const { currentUser, setCurrentUserId } = useAppContext();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="bg-transparent border border-[#5c5c6e] cursor-pointer text-left flex items-center gap-[10px] pl-[6px] pr-[10px] py-[6px] rounded-[999px] hover:border-[#ffe600] transition-colors"
      >
        <div className="size-[36px] rounded-full bg-[#ffe600] text-[#1a1a24] flex items-center justify-center shrink-0">
          <UserIcon />
        </div>
        <div className="flex flex-col items-start gap-[6px] max-w-[200px]">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[12px] leading-none text-[#c4c4cd]">所屬單位</p>
          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] leading-[20px] text-white truncate w-full">{currentUser.unit}</p>
          {/* <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] leading-[20px] text-white truncate w-full">{currentUser.name}｜{currentUser.unit}</p> */}
        </div>
        <div className="flex items-center justify-center size-[20px] rotate-90">
          <ChevronRight />
        </div>
      </button>
      {open ? (
        <div className="absolute right-0 top-[56px] w-[320px] bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[60] overflow-hidden border border-[#ececf3]">
          {APP_USERS.map((user) => {
            const active = user.id === currentUser.id;
            return (
              <button
                key={user.id}
                type="button"
                onClick={() => {
                  setCurrentUserId(user.id);
                  setOpen(false);
                }}
                className={`w-full text-left border-none cursor-pointer px-[16px] py-[14px] border-b border-[#ececf3] last:border-b-0 flex items-center gap-[12px] ${active ? 'bg-[#fff8b5]' : 'bg-white hover:bg-[#f6f6fa]'}`}
              >
                <div className={`size-[32px] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#1a1a24] text-[#ffe600]' : 'bg-[#f6f6fa] text-[#2e2e38]'}`}>
                  <UserIcon size={18} />
                </div>
                <div>
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] text-[#1a1a24]">{user.roleLabel}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#747480] mt-[4px]">{user.unit}</p>
                </div>
              </button>
            );
          })}
        </div>
      ) : null}
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
  const { currentUser } = useAppContext();
  const menus = ROLE_MENUS[currentUser.role];

  useEffect(() => {
    const assignedPages = new Set(Object.values(ROLE_PAGES).flat());
    if (assignedPages.has(currentPage) && !ROLE_PAGES[currentUser.role].includes(currentPage)) {
      onNavigate?.('home');
    }
  }, [currentUser.role, currentPage]);

  return (
    <div className={`bg-[#2e2e38] ${isFixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 w-full`}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
            <PflLogo onClick={() => onNavigate?.('home')} />
            
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              {/* 菜單項 - 根據 currentPage 屬性顯示對應的 Active 狀態 */}
              <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                {menus.map((item) => (
                  <MenuButton
                    key={item.page}
                    text={item.text}
                    isActive={item.activePages.includes(currentPage)}
                    onClick={() => onNavigate?.(item.page)}
                    isImplemented={true}
                  />
                ))}
              </div>
              
              {/* 右側按鈕區域 */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <CurrentUserSwitcher />
                <NotificationBell onNavigate={onNavigate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}