import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';

function RiskBadge({ risk }: { risk: 'high' | 'medium' | 'low' | 'none' }) {
  const styles = {
    high: { bg: '#ffe2e2', text: '#ec5242', label: '高風險' },
    medium: { bg: '#ffedd4', text: '#EE762F', label: '中風險' },
    low: { bg: '#ddffdf', text: '#419D48', label: '低風險' },
    none: { bg: '#f6f6fa', text: '#747480', label: '無' },
  };

  const { bg, text, label } = styles[risk];

  return (
    <div className="rounded-[4px] px-[8px] py-[4px] inline-flex items-center justify-center" style={{ backgroundColor: bg }}>
      <p className="font-['EYInterstate:Bold',sans-serif] text-[14px] leading-none" style={{ color: text, fontWeight: 700 }}>{label}</p>
    </div>
  );
}

const MOCK_DATA = [
  {
    riskCategory: '利害關係人/利益衝突',
    process: '授信審查',
    department: '授信管理部',
    responsibleUnit: '凱基銀行 - 風管部',
    internalRule: '個金業務授信辦法',
    rows: [
      {
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第8條',
        operationalRisk: '利害關係人交易相關業務規範及作業未盡周延。',
        controlMeasure: '定期請同仁確認利害關係人系統名單資料庫之正確及完整性，並監管追蹤完成情形。',
        question: '名單資料庫應定期更新。',
        inherentRisk: 'medium' as const,
        frequency: '每半年'
      },
      {
        externalRule: '銀行法第33-1條',
        operationalRisk: '授信人員對於銀行法第33-1條中規定利害關係者經手之授信案件，未予迴避，恐有利害衝突之風險。',
        controlMeasure: '1.授信人員對於利害關係人之授信案件應予以迴避，改由職務代理人代為執行職務。\n2.對營業單位主管應迴避核定授權案件，由其職務代理人核轉總行核定。',
        question: '各級授信人員就其所辦理有利害關係之授信案件時應予迴避，改由職務代理人代為執行職務。',
        inherentRisk: 'medium' as const,
        frequency: '每半年'
      }
    ]
  },
  {
    riskCategory: '客戶身分識別',
    process: '存款開戶',
    department: '營業部',
    responsibleUnit: '凱基金控 - 資訊部',
    internalRule: '存款業務作業手冊',
    rows: [
      {
        externalRule: '洗錢防制法第7條',
        operationalRisk: '未落實客戶身分識別程序，導致不法分子利用人頭帳戶。',
        controlMeasure: '開戶時應確實核對雙證件，並透過聯徵中心查詢異常紀錄。',
        question: '開戶作業是否落實證件核對？',
        inherentRisk: 'high' as const,
        frequency: '每季'
      }
    ]
  }
];

export default function QuestionBankPage() {
  const { isDarkMode } = useAppContext();
  const onNavigate = useAppNavigate();
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('questionBankSearchQuery') || '';
  });

  useEffect(() => {
    localStorage.setItem('questionBankSearchQuery', searchQuery);
  }, [searchQuery]);

  const filteredData = MOCK_DATA.filter(item => 
    item.process.includes(searchQuery) || 
    item.department.includes(searchQuery) ||
    item.responsibleUnit.includes(searchQuery) ||
    item.riskCategory.includes(searchQuery)
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#2e2e38]'}`}>
      <Header onNavigate={onNavigate} currentPage="question-bank" />
      
      <div className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#ececf3]'} content-stretch flex flex-col gap-[32px] items-center px-0 py-[32px] pt-[152px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full min-h-[calc(100vh-152px)]`}>
        
        {/* Max-width wrapper for 1920px centered layout */}
        <div className="w-full max-w-[1920px] flex flex-col gap-[32px] items-center">
          
          {/* Breadcrumb Section */}
          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full">
              <Breadcrumb 
                isDarkMode={isDarkMode} 
                onNavigate={onNavigate}
                items={[
                  { text: '首頁', onClick: () => onNavigate('home') },
                  { text: '題庫維護', isActive: true }
                ]}
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-[16px]">
              <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                題庫維護
              </h1>
              <div className={`${isDarkMode ? 'bg-[#2e2e38] border-[#474756]' : 'bg-white border-[#ececf3]'} rounded-[8px] border px-[16px] py-[10px] shadow-sm flex flex-col gap-[4px] shrink-0 transition-colors`}>
                <p className={`font-['EYInterstate:Regular',sans-serif] text-[12px] leading-none ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>所屬單位</p>
                <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] leading-none ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>凱基銀行 - 風管部</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-full max-w-[1504px]">
            
            {/* 搜尋區塊 */}
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[32px] shadow-sm mb-[24px] w-full transition-colors`}>
              <h2 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] mb-[16px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>輸入業務流程或部門名稱進行查詢</h2>
              <div className="flex gap-[16px] items-center">
                <div className={`flex-1 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'} rounded-[8px] flex items-center px-[16px] py-[12px] border border-transparent focus-within:border-[#ffe600] transition-all`}>
                  <div className="shrink-0 size-[20px] mr-[12px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d="M14.1667 14.1667L17.5 17.5M9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333Z" stroke={isDarkMode ? "#747480" : "#99A1AF"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="輸入業務流程或部門名稱等關鍵字"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`bg-transparent border-none outline-none flex-1 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-white placeholder:text-[#474756]' : 'text-[#1a1a24] placeholder:text-[#99A1AF]'}`}
                  />
                </div>
                <button className={`bg-[#ffe600] rounded-[8px] px-[24px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors border-none`}>
                  <p className="font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>搜尋</p>
                </button>
              </div>
            </div>

            {/* 資料表格區塊 */}
            <div className={`${isDarkMode ? 'bg-[#2e2e38] border-[#474756]' : 'bg-white border-[#ececf3]'} rounded-[12px] overflow-hidden shadow-sm border w-full transition-colors`}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    {/* 第一層表頭 */}
                    <tr className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'} transition-colors`}>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[110px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>法遵風險</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[100px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>業務流程</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[100px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>部門</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[160px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>負責單位</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[130px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>內部規章辦法</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[130px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>外部規範</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[130px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>作業風險</p>
                      </th>
                      <th rowSpan={2} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left w-[160px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>控制措施</p>
                      </th>
                      <th colSpan={3} className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-center`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] uppercase tracking-wider ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>評估/查核</p>
                      </th>
                    </tr>
                    {/* 第二層表頭 */}
                    <tr className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'} transition-colors`}>
                      <th className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[12px] text-left w-[280px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>題目</p>
                      </th>
                      <th className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[12px] text-center w-[120px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>固有風險等級</p>
                      </th>
                      <th className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[12px] text-center w-[100px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>自評頻率</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? filteredData.map((category, catIdx) => (
                      <React.Fragment key={catIdx}>
                        {category.rows.map((row, rowIdx) => (
                          <tr key={`${catIdx}-${rowIdx}`} className={`${isDarkMode ? 'hover:bg-[#353545]' : 'hover:bg-[#fafafd]'} transition-colors`}>
                            {rowIdx === 0 && (
                              <>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.riskCategory}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.process}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.department}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.responsibleUnit}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.internalRule}</p>
                                </td>
                              </>
                            )}
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{row.externalRule}</p>
                            </td>
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{row.operationalRisk}</p>
                            </td>
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{row.controlMeasure}</p>
                            </td>
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{row.question}</p>
                            </td>
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                              <RiskBadge risk={row.inherentRisk} />
                            </td>
                            <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{row.frequency}</p>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    )) : (
                      <tr>
                        <td colSpan={11} className="p-[48px] text-center">
                          <p className={`font-['EYInterstate:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#747480]' : 'text-[#99A1AF]'}`}>查無相關題庫資料</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}