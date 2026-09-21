import { useState, useEffect } from 'react';

interface SendingProgressDialogProps {
  isOpen: boolean;
  onComplete: () => void;
}

export default function SendingProgressDialog({ isOpen, onComplete }: SendingProgressDialogProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'sending' | 'searching'>('sending');

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setStage('sending');
      return;
    }

    // Simulate progress from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Switch to searching stage
          setStage('searching');
          // Wait 2 seconds then complete
          setTimeout(() => {
            onComplete();
          }, 2000);
          return 100;
        }
        return prev + 2; // Increment by 2% every 50ms = 2.5 seconds total
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] w-[650px] p-[48px]">
        {stage === 'sending' ? (
          <>
            {/* Progress Title */}
            <div className="mb-[32px]">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[24px] text-center" style={{ fontVariationSettings: "'wght' 900" }}>
                發送中...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full mb-[16px]">
              <div className="bg-[#e5e7eb] h-[8px] relative rounded-[4px] w-full overflow-hidden">
                <div 
                  className="bg-[#ffe600] h-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="mb-[24px]">
              <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[32px]" style={{ fontVariationSettings: "'wght' 900" }}>
                {progress}%
              </p>
            </div>

            {/* Progress Description */}
            <div>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                正在發送資訊供應商風險評估表...
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Searching Animation */}
            <div className="mb-[32px]">
              <div className="relative size-[64px]">
                <div className="absolute inset-0 border-4 border-[#e5e7eb] rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#ffe600] rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>

            {/* Searching Title */}
            <div className="mb-[16px]">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[24px] text-center" style={{ fontVariationSettings: "'wght' 900" }}>
                搜尋情資中
              </p>
            </div>

            {/* Searching Description */}
            <div>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] text-center tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                正在搜尋相關情資資訊...
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}