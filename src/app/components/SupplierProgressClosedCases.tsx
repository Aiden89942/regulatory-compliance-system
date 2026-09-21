import svgPaths from "../../imports/svg-f10cv90dgb";
import { useState } from 'react';

export default function SupplierProgressClosedCases() {
  const [activeTab, setActiveTab] = useState<'pre-opening' | 'in-progress' | 'closed'>('closed');

  // 已結案供應商數據
  const closedCases = [
    {
      id: 1,
      name: '2026年度官網視覺化改版專案',
      contractEndDate: '2025.11.31',
      note: '請於 2025.11.31 前提供供應商「權限管理」與「資料移除」證明文件',
      isCompleted: true
    },
    {
      id: 2,
      name: 'AI 客服系統導入暨供應商招標案',
      contractEndDate: '2025.12.12',
      note: '請於 2025.12.12 前提供供應商「權限管理」與「資料移除」證明文件',
      isCompleted: true
    },
    {
      id: 3,
      name: '集團人資系統上雲端服務採購案',
      contractEndDate: '2025.12.18',
      note: '請於 2025.12.18 前提供供應商「權限管理」與「資料移除」證明文件',
      isCompleted: true
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] w-full">
      {/* Tab 標籤 */}
      <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full">
        {/* 開案前 */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-colors ${
            activeTab === 'pre-opening' ? 'bg-[#ffe600] rounded-[4px]' : ''
          }`}
          onClick={() => setActiveTab('pre-opening')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-center text-nowrap ${
              activeTab === 'pre-opening' ? 'text-[#2e2e38]' : 'text-[#747480]'
            }`}>
              <div className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                activeTab === 'pre-opening' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] tracking-[0.6px]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
              }`} style={{ fontVariationSettings: activeTab === 'pre-opening' ? "'wght' 700" : "'wght' 400" }}>
                <p className="leading-[normal] text-nowrap">開案前</p>
              </div>
              <div className={`flex flex-col justify-center not-italic relative shrink-0 text-[22px] ${
                activeTab === 'pre-opening' ? "font-['EYInterstate:Bold',sans-serif]" : "font-['EYInterstate:Regular',sans-serif]"
              }`}>
                <p className="leading-[normal] text-nowrap">6</p>
              </div>
            </div>
          </div>
        </div>

        {/* 委託中 */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-colors ${
            activeTab === 'in-progress' ? 'bg-[#ffe600] rounded-[4px]' : ''
          }`}
          onClick={() => setActiveTab('in-progress')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap ${
              activeTab === 'in-progress' ? 'text-[#2e2e38]' : 'text-[#747480]'
            }`}>
              <div className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                activeTab === 'in-progress' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] tracking-[0.6px]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
              }`} style={{ fontVariationSettings: activeTab === 'in-progress' ? "'wght' 700" : "'wght' 400" }}>
                <p className="leading-[normal] text-nowrap">委託中</p>
              </div>
              <div className={`flex flex-col justify-center not-italic relative shrink-0 text-[22px] ${
                activeTab === 'in-progress' ? "font-['EYInterstate:Bold',sans-serif]" : "font-['EYInterstate:Regular',sans-serif]"
              }`}>
                <p className="leading-[normal] text-nowrap">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* 已結案 */}
        <div
          className={`basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer transition-colors ${
            activeTab === 'closed' ? 'bg-[#ffe600] rounded-[4px]' : ''
          }`}
          onClick={() => setActiveTab('closed')}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap ${
              activeTab === 'closed' ? 'text-[#2e2e38]' : 'text-[#747480]'
            }`}>
              <div className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                activeTab === 'closed' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] tracking-[0.6px]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
              }`} style={{ fontVariationSettings: activeTab === 'closed' ? "'wght' 700" : "'wght' 400" }}>
                <p className="leading-[normal] text-nowrap">已結案</p>
              </div>
              <div className={`flex flex-col justify-center not-italic relative shrink-0 ${
                activeTab === 'closed' ? "font-['EYInterstate:Bold',sans-serif] text-[24px]" : "font-['EYInterstate:Regular',sans-serif] text-[22px]"
              }`}>
                <p className="leading-[normal] text-nowrap">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 僅在「已結案」標籤時顯示內容 */}
      {activeTab === 'closed' && (
        <>
          {/* 警告提示 */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[24px] py-[16px] relative w-full">
                {/* 警告圖標 */}
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.pace200} stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12 8V12" stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M12 16H12.01" stroke="#8F8100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                {/* 警告文字 */}
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#8f8100] text-[18px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 400" }}>
                          結案供應商均需提供「權限管理」與「資料移除」證明文件，請窗口仔細確認
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 表格 */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full">
                {/* 結案供應商列 */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]">
                  {/* 表頭 */}
                  <div className="bg-[#f6f6fa] relative shrink-0 w-full h-[48px]">
                    <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[15px] relative size-full">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          結案供應商
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 表格內容 */}
                  {closedCases.map((item) => (
                    <TableCell key={item.id} text={item.name} />
                  ))}
                </div>

                {/* 合約到期日列 */}
                <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
                  {/* 表頭 */}
                  <div className="bg-[#f6f6fa] relative shrink-0 w-full h-[48px]">
                    <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[15px] relative size-full">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          合約到期日
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 表格內容 */}
                  {closedCases.map((item) => (
                    <TableCellDate key={item.id} text={item.contractEndDate} />
                  ))}
                </div>

                {/* 備註列 */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[693px]">
                  {/* 表頭 */}
                  <div className="bg-[#f6f6fa] relative shrink-0 w-full h-[48px]">
                    <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[15px] relative size-full">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          備註
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 表格內容 */}
                  {closedCases.map((item) => (
                    <TableCell key={item.id} text={item.note} />
                  ))}
                </div>

                {/* 操作列 */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[146px]">
                  {/* 表頭 */}
                  <div className="bg-[#f6f6fa] relative shrink-0 w-full h-[48px]">
                    <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                          操作
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 操作按鈕 */}
                  {closedCases.map((item) => (
                    <div key={item.id} className="relative shrink-0 w-full bg-white h-[63px]">
                      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[5px] items-center justify-center px-[15px] py-[18px] relative size-full">
                          <div 
                            className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors"
                          >
                            <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center text-nowrap tracking-[0.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
                              <p className="leading-[23px]">供應商已完成</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 開案前標籤內容 */}
      {activeTab === 'pre-opening' && (
        <div className="flex items-center justify-center w-full py-[80px]">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            開案前供應商列表（共 6 個）
          </p>
        </div>
      )}

      {/* 委託中標籤內容 */}
      {activeTab === 'in-progress' && (
        <div className="flex items-center justify-center w-full py-[80px]">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480] text-[18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            委託中供應商列表（共 2 個）
          </p>
        </div>
      )}
    </div>
  );
}

// 表格單元格組件
function TableCell({ text }: { text: string }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// 日期表格單元格組件
function TableCellDate({ text }: { text: string }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
          <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
