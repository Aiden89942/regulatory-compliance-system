import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

export default function DraftSavedNotification() {
  const { showDraftSavedNotification, setShowDraftSavedNotification } = useAppContext();

  useEffect(() => {
    if (showDraftSavedNotification) {
      const timer = setTimeout(() => {
        setShowDraftSavedNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showDraftSavedNotification, setShowDraftSavedNotification]);

  if (!showDraftSavedNotification) return null;

  return (
    <div 
      className="fixed left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300"
      style={{ 
        top: '130px' // header下方30px
      }}
    >
      <div className="bg-white rounded-[8px] shadow-lg flex items-center gap-[12px] px-[24px] py-[16px]">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        {/* Success checkmark icon */}
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#419D48" />
            <path d="M8 12L11 15L16 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px] leading-[23px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
          草稿已儲存
        </p>
      </div>
    </div>
  );
}
