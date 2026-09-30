import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';
import {
  QuestionTemplate,
  QuestionBankCategory,
  QuestionBankRow,
  TEMPLATE_OPTIONS,
  COMPLIANCE_ANSWER_OPTIONS,
  getAnswerOptions,
  getQuestionBankByTemplate,
  InherentRisk,
} from '../data/questionBankData';

function RiskBadge({ risk }: { risk: InherentRisk }) {
  const styles = {
    high: { bg: '#ffe2e2', text: '#ec5242', label: '高風險' },
    medium: { bg: '#ffedd4', text: '#EE762F', label: '中風險' },
    low: { bg: '#ddffdf', text: '#419D48', label: '低風險' },
    none: { bg: '#f6f6fa', text: '#747480', label: '無' },
  };

  const { bg, text, label } = styles[risk];

  return (
    <div className="rounded-[4px] px-[8px] py-[4px] inline-flex w-fit items-center justify-center" style={{ backgroundColor: bg }}>
      <p className="font-['EYInterstate:Bold',sans-serif] text-[14px] leading-none" style={{ color: text, fontWeight: 700 }}>{label}</p>
    </div>
  );
}

function DetailLine({ label, value, isDarkMode }: { label: string; value: string; isDarkMode: boolean }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>{label}</p>
      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] leading-[24px] whitespace-pre-wrap ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{value || '—'}</p>
    </div>
  );
}

function QuestionDetailModal({
  template,
  category,
  row,
  isDarkMode,
  onClose,
}: {
  template: QuestionTemplate;
  category: QuestionBankCategory;
  row: QuestionBankRow;
  isDarkMode: boolean;
  onClose: () => void;
}) {
  const isCompliance = template === 'compliance';

  return (
    <div className="fixed inset-0 z-[80] bg-black/40 flex items-center justify-center p-[24px]" onClick={onClose}>
      <div
        className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] w-full max-w-[760px] max-h-[80vh] overflow-y-auto p-[24px] flex flex-col gap-[20px]`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-[16px]">
          <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>題目內容</p>
          <button type="button" onClick={onClose} className="bg-transparent border-none cursor-pointer p-0">
            <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] underline ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>關閉</p>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
          {!isCompliance ? <DetailLine label="流程類別" value={category.riskCategory} isDarkMode={isDarkMode} /> : null}
          <DetailLine label="業務項目" value={category.process} isDarkMode={isDarkMode} />
          <DetailLine label="負責單位" value={category.responsibleUnit} isDarkMode={isDarkMode} />
          <DetailLine label="自評單位" value={category.department} isDarkMode={isDarkMode} />
          <DetailLine label="內部規章" value={category.internalRule} isDarkMode={isDarkMode} />
        </div>
        {isCompliance ? (
          <>
            <DetailLine label="應遵循之法令規章" value={row.externalRule} isDarkMode={isDarkMode} />
            <DetailLine label="遵循程序" value={row.controlMeasure} isDarkMode={isDarkMode} />
            <DetailLine label="自行評估程序" value={COMPLIANCE_ANSWER_OPTIONS.join('、')} isDarkMode={isDarkMode} />
          </>
        ) : (
          <>
            <DetailLine label="自查依據" value={category.internalRule || row.externalRule} isDarkMode={isDarkMode} />
            <DetailLine label="自行查核程序" value={row.question} isDarkMode={isDarkMode} />
            <DetailLine label="作答選項" value={getAnswerOptions(template, row.id).join('、')} isDarkMode={isDarkMode} />
            <DetailLine label="作業風險事件描述" value={row.operationalRisk} isDarkMode={isDarkMode} />
            <DetailLine label="作業風險事件類別" value={category.riskCategory} isDarkMode={isDarkMode} />
            <DetailLine label="控制類別" value="內部流程" isDarkMode={isDarkMode} />
            <DetailLine label="控制描述" value={row.controlMeasure} isDarkMode={isDarkMode} />
            <div className="grid grid-cols-3 gap-x-[24px]">
              <div className="flex flex-col gap-[4px] items-start">
                <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>固有風險等級</p>
                <RiskBadge risk={row.inherentRisk} />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>控制等級</p>
                <RiskBadge risk="medium" />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[13px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>剩餘風險</p>
                <RiskBadge risk={row.inherentRisk === 'high' ? 'medium' : 'low'} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function QuestionBankPage() {
  const { isDarkMode } = useAppContext();
  const onNavigate = useAppNavigate();
  const [template, setTemplate] = useState<QuestionTemplate>(() => {
    return (localStorage.getItem('questionBankTemplate') as QuestionTemplate) || 'compliance';
  });
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('questionBankSearchQuery') || '';
  });
  const [detail, setDetail] = useState<{ category: QuestionBankCategory; row: QuestionBankRow } | null>(null);

  useEffect(() => {
    localStorage.setItem('questionBankSearchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem('questionBankTemplate', template);
  }, [template]);

  const mockData = getQuestionBankByTemplate(template);

  const filteredData = mockData.filter(item =>
    item.process.includes(searchQuery) ||
    item.department.includes(searchQuery) ||
    item.responsibleUnit.includes(searchQuery) ||
    item.riskCategory.includes(searchQuery)
  );

  const handleEdit = (rowId: string) => {
    onNavigate('question-bank-edit', undefined, { template, id: rowId });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#2e2e38]'}`}>
      <Header onNavigate={onNavigate} currentPage="question-bank" />

      <div className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#ececf3]'} content-stretch flex flex-col gap-[32px] items-center px-0 py-[32px] pt-[152px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full min-h-[calc(100vh-152px)]`}>

        <div className="w-full max-w-[1920px] flex flex-col gap-[32px] items-center">

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

          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-[16px]">
              <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                題庫維護
              </h1>
              <div className="flex items-center gap-[16px]">
                <button
                  type="button"
                  onClick={() => onNavigate('question-bank-drafts')}
                  className={`${isDarkMode ? 'bg-[#2e2e38] text-white' : 'bg-white text-[#1a1a24]'} border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer`}
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px]" style={{ fontWeight: 700 }}>問卷清單</p>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('question-bank-design', undefined, { template })}
                  className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>設計自評表</p>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('question-bank-edit', undefined, { template, mode: 'new' })}
                  className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[12px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                >
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[16px]" style={{ fontWeight: 700 }}>新增題目</p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-full max-w-[1504px]">

            {/* 模板選擇 */}
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[24px] shadow-sm mb-[16px] w-full transition-colors`}>
              <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] mb-[12px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                選擇題庫模板
              </p>
              <div className="flex gap-[12px] flex-wrap">
                {TEMPLATE_OPTIONS.map((option) => {
                  const isActive = template === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setTemplate(option.value)}
                      className={`px-[20px] py-[10px] rounded-[8px] border-none cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-[#ffe600]'
                          : isDarkMode
                            ? 'bg-[#1a1a24] hover:bg-[#353545]'
                            : 'bg-[#f6f6fa] hover:bg-[#ececf3]'
                      }`}
                    >
                      <p
                        className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[15px] ${
                          isActive ? 'text-[#1a1a24]' : isDarkMode ? 'text-[#f6f6fa]' : 'text-[#747480]'
                        }`}
                        style={{ fontWeight: 700 }}
                      >
                        {option.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 搜尋區塊 */}
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[32px] shadow-sm mb-[24px] w-full transition-colors`}>
              <h2 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] mb-[16px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>輸入業務項目或部門名稱進行查詢</h2>
              <div className="flex gap-[16px] items-center">
                <div className={`flex-1 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'} rounded-[8px] flex items-center px-[16px] py-[12px] border border-transparent focus-within:border-[#ffe600] transition-all`}>
                  <div className="shrink-0 size-[20px] mr-[12px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d="M14.1667 14.1667L17.5 17.5M9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333Z" stroke={isDarkMode ? "#747480" : "#99A1AF"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="輸入業務項目或部門名稱等關鍵字"
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
                    <tr className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'} transition-colors`}>
                      {[
                        { label: '業務項目', width: 'w-[16%]' },
                        { label: '負責單位', width: 'w-[16%]' },
                        { label: '自評單位', width: 'w-[16%]' },
                        { label: '內部規章辦法', width: 'w-[16%]' },
                        { label: template === 'compliance' ? '遵循程序' : '自行查核程序', width: '' },
                      ].map((column) => (
                        <th key={column.label} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-left ${column.width}`}>
                          <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>{column.label}</p>
                        </th>
                      ))}
                      {template === 'internal-control' ? (
                        <th className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-center w-[120px]`}>
                          <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>固有風險等級</p>
                        </th>
                      ) : null}
                      <th className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] text-center w-[90px]`}>
                        <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>操作</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? filteredData.map((category) => (
                      <React.Fragment key={category.id}>
                        {category.rows.map((row, rowIdx) => (
                          <tr key={row.id} className={`${isDarkMode ? 'hover:bg-[#353545]' : 'hover:bg-[#fafafd]'} transition-colors`}>
                            {rowIdx === 0 && (
                              <>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-left w-[16%]`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.process}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-left w-[16%]`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.responsibleUnit}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-left w-[16%]`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.department}</p>
                                </td>
                                <td rowSpan={category.rows.length} className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-left w-[16%]`}>
                                  <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{category.internalRule}</p>
                                </td>
                              </>
                            )}
                            <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top`}>
                              <button
                                type="button"
                                onClick={() => setDetail({ category, row })}
                                className="bg-transparent border-none cursor-pointer p-0 text-left"
                              >
                                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] break-words whitespace-normal underline ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>{template === 'compliance' ? row.controlMeasure : row.question}</p>
                              </button>
                            </td>
                            {template === 'internal-control' ? (
                              <td className={`border-b border-r ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                                <RiskBadge risk={row.inherentRisk} />
                              </td>
                            ) : null}
                            <td className={`border-b ${isDarkMode ? 'border-[#474756]' : 'border-[#ececf3]'} p-[16px] align-top text-center`}>
                              <button
                                type="button"
                                onClick={() => handleEdit(row.id)}
                                className="bg-transparent border-none cursor-pointer py-[4px] hover:opacity-80 transition-opacity"
                              >
                                <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] underline ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`}>
                                  編輯
                                </p>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    )) : (
                      <tr>
                        <td colSpan={template === 'internal-control' ? 7 : 6} className="p-[48px] text-center">
                          <p className={`font-['EYInterstate:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#747480]' : 'text-[#99A1AF]'}`}>查無相關題庫資料</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {detail ? (
              <QuestionDetailModal
                template={template}
                category={detail.category}
                row={detail.row}
                isDarkMode={isDarkMode}
                onClose={() => setDetail(null)}
              />
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
