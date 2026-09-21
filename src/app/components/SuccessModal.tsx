interface SuccessModalProps {
  onClose: () => void;
}

function SuccessIcon() {
  return (
    <div className="h-[140px] relative shrink-0 w-[150px] flex items-center justify-center">
      <svg className="size-[80px]" fill="none" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="36" stroke="#419D48" strokeWidth="4" />
        <path d="M24 40L36 52L56 28" stroke="#419D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-center p-[32px] relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[464px]">
        {/* 主要内容 */}
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          {/* 图标和文字 */}
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            {/* 成功图标 */}
            <SuccessIcon />
            
            {/* 文字内容 */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-[400px]">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                供應商資料已成功歸檔！
              </p>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
                系統已將『碩網資訊 (2026 AI 智能客服系統 v1.0)』的風險評估報告與合約檢核表自動存檔至資料庫。您隨時可至『供應商管理』列表查看詳細資訊。
              </p>
            </div>
          </div>
          
          {/* 查看供应商详情链接 */}
          <p 
            className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline cursor-pointer hover:text-[#ffe600] transition-colors" 
            style={{ fontVariationSettings: "'wght' 400" }}
            onClick={onClose}
          >
            查看供應商詳情
          </p>
        </div>
        
        {/* 关闭按钮 */}
        <div 
          className="absolute right-[20px] size-[24px] top-[20px] cursor-pointer hover:opacity-70 transition-opacity" 
          onClick={onClose}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <path d="M18 6L6 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M6 6L18 18" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
