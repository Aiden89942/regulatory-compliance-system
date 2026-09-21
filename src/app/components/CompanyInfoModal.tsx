import { useEffect, useRef } from 'react';
import type { CompanyBasicInfo } from './companyLookup';

interface CompanyInfoModalProps {
  company: CompanyBasicInfo;
  onClose: () => void;
  onViewDetail: (company: CompanyBasicInfo) => void;
}

export default function CompanyInfoModal({ company, onClose, onViewDetail }: CompanyInfoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // 資料列表定義
  const infoRows = [
    { label: '公司名稱', value: company.name },
    { label: '統一編號', value: company.taxId },
    { label: '產業類別', value: company.industry },
    { label: '負責人', value: company.representative },
    { label: '公司地址', value: company.address },
    { label: '聯絡電話', value: company.phone },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[12px] w-[640px] max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#ececf3]">
          <div className="flex items-center gap-[12px]">
            {/* 建築物圖示 */}
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#f0f0ff] rounded-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 17H17M5 17V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V17M8 7H8.01M12 7H12.01M8 11H8.01M12 11H12.01M8 15H8.01M12 15H12.01" stroke="#1a1a24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p
              className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[20px] leading-[normal]"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              供應商基本資料
            </p>
          </div>
          {/* 關閉按鈕 */}
          <div
            className="flex items-center justify-center w-[32px] h-[32px] rounded-[6px] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="#747480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="px-[24px] py-[24px]">
          {/* 疑似中資標籤 */}
          {company.isSuspectedChinese && (
            <div className="mb-[16px]">
              <span className="inline-flex items-center bg-[#ec5242] text-white text-[13px] leading-[18px] px-[8px] py-[3px] rounded-[4px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]" style={{ fontVariationSettings: "'wght' 400" }}>
                疑似中資
              </span>
            </div>
          )}

          {/* 資訊表格 */}
          <div className="border border-[#ececf3] rounded-[8px] overflow-hidden">
            {infoRows.map((row, idx) => (
              <div
                key={row.label}
                className={`flex items-stretch ${idx < infoRows.length - 1 ? 'border-b border-[#ececf3]' : ''}`}
              >
                {/* Label */}
                <div className="bg-[#f6f6fa] w-[140px] shrink-0 px-[16px] py-[14px] flex items-center">
                  <p
                    className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#747480] text-[14px] leading-[20px] tracking-[0.42px]"
                    style={{ fontVariationSettings: "'wght' 700" }}
                  >
                    {row.label}
                  </p>
                </div>
                {/* Value */}
                <div className="flex-1 px-[16px] py-[14px] flex items-center">
                  <p
                    className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[15px] leading-[22px] tracking-[0.45px]"
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 近一年警示摘要 */}
          <div className="mt-[20px] p-[16px] bg-[#fff8f8] border border-[#ffe2e2] rounded-[8px]">
            <div className="flex items-start gap-[10px]">
              {/* 警告圖示 */}
              <div className="shrink-0 mt-[2px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7.86 3.27L1.21 14.26C1.09487 14.4593 1.03382 14.6848 1.03297 14.9147C1.03213 15.1446 1.09151 15.3705 1.20515 15.5707C1.31879 15.7708 1.48274 15.9383 1.68036 16.0562C1.87798 16.1742 2.10251 16.2385 2.33 16.2426H15.63C15.8575 16.2385 16.082 16.1742 16.2796 16.0562C16.4773 15.9383 16.6412 15.7708 16.7549 15.5707C16.8685 15.3705 16.9279 15.1446 16.927 14.9147C16.9262 14.6848 16.8651 14.4593 16.75 14.26L10.1 3.27C9.98252 3.07622 9.81752 2.91582 9.62058 2.80381C9.42365 2.6918 9.2014 2.63184 8.975 2.63184C8.7486 2.63184 8.52635 2.6918 8.32942 2.80381C8.13248 2.91582 7.96748 3.07622 7.85 3.27H7.86Z" stroke="#EC5242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 7V11" stroke="#EC5242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 14.25H9.0075" stroke="#EC5242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p
                  className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#ec5242] text-[14px] leading-[20px] mb-[4px]"
                  style={{ fontVariationSettings: "'wght' 700" }}
                >
                  近一年警示摘要
                </p>
                <p
                  className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[14px] leading-[22px] tracking-[0.42px]"
                  style={{ fontVariationSettings: "'wght' 400" }}
                >
                  {company.alertSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] px-[24px] py-[20px] border-t border-[#ececf3]">
          <div
            className="flex items-center justify-center px-[20px] py-[12px] rounded-[4px] border border-[#c4c4cd] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
            onClick={onClose}
          >
            <p
              className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#1a1a24] text-[15px] leading-[normal] tracking-[0.45px]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              關閉
            </p>
          </div>
          <div
            className="flex items-center justify-center px-[20px] py-[12px] rounded-[4px] bg-[#ffe600] cursor-pointer hover:bg-[#ffd700] transition-colors"
            onClick={() => onViewDetail(company)}
          >
            <p
              className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[15px] leading-[normal] tracking-[0.45px]"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              前往詳情
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
