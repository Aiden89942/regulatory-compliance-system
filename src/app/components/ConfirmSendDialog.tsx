interface ConfirmSendDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  recipient: string;
  email: string;
  deadline: string;
}

export default function ConfirmSendDialog({
  isOpen,
  onClose,
  onConfirm,
  recipient,
  email,
  deadline
}: ConfirmSendDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] w-[650px]">
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[17px] pt-[16px] px-[24px] relative w-full">
            <div className="h-[32px] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wght' 900" }}>
                  確認發送評估表？
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
            {/* Description */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  系統將發送通知信至以下聯絡人信箱，請確認資訊無誤。
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] items-start relative rounded-[10px] shrink-0 w-full p-[16px]">
              {/* 收件对象 */}
              <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full">
                <div className="h-[21px] relative shrink-0 w-[100px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      收件對象
                    </p>
                  </div>
                </div>
                <div className="h-[21px] relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#1a1a24] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      {recipient}
                    </p>
                  </div>
                </div>
              </div>

              {/* 联絡信箱 */}
              <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full">
                <div className="h-[21px] relative shrink-0 w-[100px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      聯絡信箱
                    </p>
                  </div>
                </div>
                <div className="h-[21px] relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1a1a24] text-[14px] text-nowrap top-0 tracking-[0.42px]">
                      {email}
                    </p>
                  </div>
                </div>
              </div>

              {/* 填写截止日 */}
              <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full">
                <div className="h-[21px] relative shrink-0 w-[100px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] left-0 text-[#747480] text-[14px] text-nowrap top-0 tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      填寫截止日
                    </p>
                  </div>
                </div>
                <div className="h-[21px] relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#ec5242] text-[14px] text-nowrap top-0 tracking-[0.42px]">
                      {deadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f9fafb] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-end pb-[16px] pl-0 pr-[24px] pt-[17px] relative w-full">
              {/* 返回修改 */}
              <div 
                className="relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={onClose}
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative">
                  <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[15px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                      返回修改
                    </p>
                  </div>
                </div>
              </div>

              {/* 确认发送 */}
              <div 
                className="bg-[#ffe600] min-w-[80px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors"
                onClick={onConfirm}
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative">
                  <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                    <p className="leading-[23px]">確認發送</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close X button */}
        <div 
          className="absolute right-[20px] size-[24px] top-[20.5px] cursor-pointer hover:opacity-70 transition-opacity"
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