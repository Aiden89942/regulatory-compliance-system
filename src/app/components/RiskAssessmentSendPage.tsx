import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import clsx from 'clsx';
import ConfirmSendDialog from './ConfirmSendDialog';
import CalendarDatePicker from './CalendarDatePicker';
import SendingProgressDialog from './SendingProgressDialog';
import IntelligenceTrackingFullContent from './IntelligenceTrackingFullContent';

interface RiskAssessmentSendPageProps {
  onNavigate?: (page: string) => void;
}

export default function RiskAssessmentSendPage({ onNavigate }: RiskAssessmentSendPageProps) {
  const [searchParams] = useSearchParams();
  const isViewMode = searchParams.get('mode') === 'view' && searchParams.get('status') === 'waiting';
  
  const [recipient, setRecipient] = useState('王*明');
  const [email, setEmail] = useState('wang.daming@supplier-company.com');
  const [deadline, setDeadline] = useState('2025.12.15');

  const [section1Expanded, setSection1Expanded] = useState(isViewMode ? false : true);
  const [section2Expanded, setSection2Expanded] = useState(isViewMode);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showProgressDialog, setShowProgressDialog] = useState(false);
  const [isSent, setIsSent] = useState(isViewMode);
  const [isReplied, setIsReplied] = useState(false);

  // 5秒后自动切换到已回复状态（只在非查看模式下启用）
  useEffect(() => {
    if (!isViewMode && isSent && !isReplied) {
      const timer = setTimeout(() => {
        setIsReplied(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isViewMode, isSent, isReplied]);

  const handleConfirmSend = () => {
    setShowConfirmDialog(false);
    setShowProgressDialog(true);
  };

  const handleProgressComplete = () => {
    setShowProgressDialog(false);
    setIsSent(true);
    setSection1Expanded(false);
    setSection2Expanded(true);
  };

  return (
    <div className="bg-[#2e2e38] content-stretch flex flex-col items-center relative min-h-screen w-full">
      {/* Header */}
      <Header onNavigate={onNavigate} currentPage="risk-assessment" />

      {/* 主要内容 */}
      <div className="bg-[#ececf3] content-stretch flex flex-col h-full items-center px-0 pt-[152px] pb-[100px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full flex-1">
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] py-0 relative shrink-0 w-[1440px]">
          {/* 面包屑 */}
          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors"
                   onClick={() => onNavigate?.('home')}>
                  首頁
                </p>
              </div>
            </div>
            <ChevronRight />
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#747480] text-[16px] text-nowrap tracking-[-0.3125px] cursor-pointer hover:text-[#1a1a24] transition-colors"
                   onClick={() => onNavigate?.('risk-assessment')}>
                  風險評估
                </p>
              </div>
            </div>
            <ChevronRight />
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[-0.3125px]">
                  資訊供應商風險評估表
                </p>
              </div>
            </div>
          </div>

          {/* 表单区域 */}
          <div className="content-stretch flex flex-col gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full">
            {/* Section 1: 发送资讯供应商风险评估表 */}
            <div className="bg-white relative rounded-[8px] shrink-0 w-[1200px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
                {/* 标题栏 */}
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
                  onClick={() => setSection1Expanded(!section1Expanded)}
                >
                  <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" start={1} style={{ fontVariationSettings: "'wght' 700" }}>
                    <li className="ms-[33px]">
                      <span className="leading-[normal]">發送資訊供應商風險評估表</span>
                    </li>
                  </ol>
                  <div className={clsx(
                    "flex items-center justify-center relative shrink-0 transition-transform",
                    section1Expanded ? "rotate-180" : ""
                  )}>
                    <ChevronDown />
                  </div>

                  {/* 状态标签 */}
                  {isSent && !isReplied && (
                    <div className="absolute bg-[#ddffdf] content-stretch flex items-center justify-center px-[12px] py-[7px] right-[32px] rounded-[4px] top-1/2 translate-y-[-50%]">
                      <div aria-hidden="true" className="absolute border border-[#adffb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#419d48] text-[16px] text-nowrap tracking-[-0.3125px]">
                        已發送等待供應商回覆
                      </p>
                    </div>
                  )}
                  {isReplied && (
                    <div className="absolute bg-[#d2ebff] content-stretch flex items-center justify-center px-[12px] py-[7px] right-[32px] rounded-[4px] top-1/2 translate-y-[-50%]">
                      <div aria-hidden="true" className="absolute border border-[#90ceff] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] text-nowrap tracking-[-0.3125px]">
                        已回覆
                      </p>
                    </div>
                  )}
                </div>

                {section1Expanded && (
                  <>
                    {/* 分隔线 */}
                    <div className="h-0 relative shrink-0 w-full">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                        <path d="M0 0.5H1152" stroke="#ECECF3" />
                      </svg>
                    </div>

                    {/* 说明文字 */}
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                        系統將發送「資訊供應商風險評估表」至下方聯絡人信箱，請確認收件資訊是否正確。
                      </p>
                    </div>

                    {/* 表单字段 */}
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      {/* 收件对象 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[203px]">
                        <LabelText text="收件對象" />
                        <InputField value={recipient} onChange={setRecipient} />
                      </div>

                      {/* 联系信箱 */}
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <LabelText text="聯絡信箱" />
                        <InputField value={email} onChange={setEmail} />
                      </div>

                      {/* 填写截止日 */}
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                        <LabelText text="填寫截止日" />
                        <CalendarDatePicker value={deadline} onChange={setDeadline} />
                      </div>
                    </div>

                    {/* 确认发送 / 重新发送按钮 */}
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                      {!isSent ? (
                        <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors" onClick={() => setShowConfirmDialog(true)}>
                          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                            <p className="leading-[23px]">確認發送</p>
                          </div>
                        </div>
                      ) : (
                        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-0 py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => setShowConfirmDialog(true)}>
                          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                            <p className="leading-[23px]">重新發送</p>
                          </div>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#747480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Section 2: 情资追踪 */}
            <div className="bg-white relative rounded-[8px] shrink-0 w-[1200px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
                {/* 标题栏 */}
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
                  onClick={() => setSection2Expanded(!section2Expanded)}
                >
                  <ol className="block font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[0] list-decimal relative shrink-0 text-[#1a1a24] text-[22px] w-[500px]" start={2} style={{ fontVariationSettings: "'wght' 700" }}>
                    <li className="ms-[33px]">
                      <span className="leading-[normal]">情資追蹤</span>
                    </li>
                  </ol>
                  <div className={clsx(
                    "flex items-center justify-center relative shrink-0 transition-transform",
                    section2Expanded ? "rotate-180" : ""
                  )}>
                    <ChevronDown />
                  </div>
                </div>

                {/* 情资追踪内容 */}
                {section2Expanded && isSent && (
                  <>
                    {/* 分隔线 */}
                    <div className="h-0 relative shrink-0 w-full">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
                        <path d="M0 0.5H1152" stroke="#ECECF3" />
                      </svg>
                    </div>

                    <IntelligenceTrackingFullContent />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* 底部按钮 */}
      <div className="bg-[#2e2e38] fixed bottom-0 left-0 right-0 shrink-0 w-full z-40">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-end px-[24px] py-[16px] relative w-full max-w-[1200px] mx-auto">
            <div className="flex flex-row items-center self-stretch">
              {isReplied ? (
                <div
                  className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors"
                  onClick={() => onNavigate?.('risk-assessment')}
                >
                  <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
                    <p className="leading-[normal]">確認立即匯出</p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#e3e3e3] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-not-allowed">
                  <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#9b9ba1] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
                    <p className="leading-[normal]">確認立即匯出</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 确认发送对话框 */}
      {showConfirmDialog && (
        <ConfirmSendDialog
          isOpen={showConfirmDialog}
          onClose={() => setShowConfirmDialog(false)}
          onConfirm={handleConfirmSend}
          recipient={recipient}
          email={email}
          deadline={deadline}
        />
      )}

      {/* 发送进度对话框 */}
      <SendingProgressDialog
        isOpen={showProgressDialog}
        onComplete={handleProgressComplete}
      />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function LabelText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

function InputField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px bg-transparent outline-none text-[#1a1a24] text-[16px] tracking-[0.48px]"
            style={{ fontVariationSettings: "'wght' 400" }}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}