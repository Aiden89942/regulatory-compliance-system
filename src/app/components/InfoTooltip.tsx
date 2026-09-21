interface InfoTooltipProps {
  tag: string;
  onClose: () => void;
}

export default function InfoTooltip({ tag, onClose }: InfoTooltipProps) {
  // 根据tag显示不同的提示内容
  const getTooltipContent = () => {
    // F02~F04 相关
    if (tag.includes('F02') || tag.includes('F03') || tag.includes('F04')) {
      return (
        <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[16px] text-white tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[23px] mb-0">F02 (密資料)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>由承辦單位主管判定後，呈處級(含)主管以上核備。
          </p>
          <p className="leading-[23px] mb-0"><br /></p>
          <p className="leading-[23px] mb-0">F03 (內部使用資料)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>由承辦人自行判定後，呈處級主管核備。
          </p>
          <p className="leading-[23px] mb-0">&nbsp;</p>
          <p className="leading-[23px] mb-0">F04 (公開資訊)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>可公開於網站之資訊，或上傳至公開資訊觀測站之資訊。
          </p>
        </div>
      );
    }
    
    // D02~D04 相关
    if (tag.includes('D02') || tag.includes('D03') || tag.includes('D04')) {
      return (
        <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[16px] text-white tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[23px] mb-0">D02 (密資料)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>由承辦單位主管判定後，呈處級(含)主管以上核備。
          </p>
          <p className="leading-[23px] mb-0"><br /></p>
          <p className="leading-[23px] mb-0">D03 (內部使用資料)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>由承辦人自行判定後，呈處級主管核備。
          </p>
          <p className="leading-[23px] mb-0">&nbsp;</p>
          <p className="leading-[23px] mb-0">D04 (公開資訊)：</p>
          <p className="leading-[23px] mb-0">
            <span>說明：</span>可公開於網站之資訊，或上傳至公開資訊觀測站之資訊。
          </p>
        </div>
      );
    }
    
    // 默认内容
    return (
      <div className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[16px] text-white tracking-[0.48px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px] mb-0">相關資訊說明</p>
      </div>
    );
  };

  return (
    <div className="absolute bg-[#1a1a24] content-stretch flex flex-col gap-[12px] items-start px-[15px] py-[16px] rounded-[8px] w-[279px] z-50 left-full ml-2 top-1/2 -translate-y-1/2">
      {/* 左侧箭头 */}
      <div className="absolute flex h-[35.682px] items-center justify-center left-[-10px] top-1/2 translate-y-[-50%] w-[38.921px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[317.486deg] skew-x-[4.954deg]">
          <div className="bg-[#1a1a24] rounded-[4px] size-[26.401px]" />
        </div>
      </div>
      
      {/* 内容 */}
      {getTooltipContent()}
      
      {/* 确认按钮 */}
      <div 
        className="bg-[#ffe600] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#ffd000] transition-colors"
        onClick={onClose}
      >
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[23px]">確定</p>
          </div>
        </div>
      </div>
    </div>
  );
}
