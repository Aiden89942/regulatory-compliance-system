import { useEffect } from 'react';

interface CancelledToastProps {
  onClose: () => void;
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="#FFE600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export default function CancelledToast({ onClose }: CancelledToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2 z-[9999] animate-fade-in">
      <div className="bg-[#1a1a24] content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[10px] relative rounded-[8px] shadow-lg">
        <Check />
        <p 
          className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[18px] tracking-[0.54px]" 
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          已取消
        </p>
      </div>
    </div>
  );
}
