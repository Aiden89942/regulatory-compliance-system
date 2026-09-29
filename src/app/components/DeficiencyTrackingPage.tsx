import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '../context/AppContext';
import { QuestionTemplate } from '../data/questionBankData';

interface FlaggedQuestion {
  question: string;
  result: '未符合';
  comment: string;
}

interface FlaggedQuestionnaire {
  id: string;
  template: QuestionTemplate;
  process: string;
  responsibleUnit: string;
  unit: string;
  questions: FlaggedQuestion[];
}

const FLAGGED_QUESTIONNAIRES: FlaggedQuestionnaire[] = [
  {
    id: 'def-comp-1',
    template: 'compliance',
    process: '授信審查',
    responsibleUnit: '凱基銀行 - 風管部',
    unit: '授信管理部',
    questions: [
      {
        question: '名單資料庫應定期更新。',
        result: '未符合',
        comment: '查核單位覆核時，未見最近一期名單更新紀錄。',
      },
      {
        question: '各級授信人員就其所辦理有利害關係之授信案件時應予迴避，改由職務代理人代為執行職務。',
        result: '未符合',
        comment: '抽查案件未留存迴避與職務代理紀錄。',
      },
    ],
  },
  {
    id: 'def-comp-2',
    template: 'compliance',
    process: '存款開戶',
    responsibleUnit: '凱基金控 - 資訊部',
    unit: '營業部',
    questions: [
      {
        question: '開戶作業是否落實證件核對？',
        result: '未符合',
        comment: '部分開戶案件缺少雙證件核對紀錄。',
      },
    ],
  },
  {
    id: 'def-comp-3',
    template: 'compliance',
    process: '資訊服務委外',
    responsibleUnit: '凱基銀行 - 資訊部',
    unit: '資訊科技部',
    questions: [
      {
        question: '是否已評估供應商涉及之資訊資產？',
        result: '未符合',
        comment: '資訊資產清單未涵蓋核心系統與關鍵設備。',
      },
      {
        question: '與供應商之傳輸連線方式是否已評估並符合要求？',
        result: '未符合',
        comment: '未說明連線是否加密，也沒有替代傳輸路徑。',
      },
    ],
  },
  {
    id: 'def-ic-1',
    template: 'internal-control',
    process: '內部查核',
    responsibleUnit: '凱基銀行 - 法遵部',
    unit: '稽核處',
    questions: [
      {
        question: '自行查核發現之缺失是否已完成追蹤及改善？',
        result: '未符合',
        comment: '前期缺失仍未結案，追蹤表未更新改善期限。',
      },
    ],
  },
  {
    id: 'def-ic-2',
    template: 'internal-control',
    process: '系統權限管理',
    responsibleUnit: '凱基銀行 - 資訊部',
    unit: '資訊部',
    questions: [
      {
        question: '系統帳號與權限是否已依規定完成定期覆核？',
        result: '未符合',
        comment: '本季權限覆核紀錄缺漏，離職人員帳號尚未停用。',
      },
    ],
  },
];

function HeaderCell({ text, align = 'left' }: { text: string; align?: 'left' | 'center' }) {
  return (
    <div className="bg-[#f6f6fa] h-[48px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className={`flex items-center p-[15px] h-full ${align === 'center' ? 'justify-center' : ''}`}>
        <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>{text}</p>
      </div>
    </div>
  );
}

function DataCell({ text }: { text: string }) {
  return (
    <div className="bg-white h-[63px] w-full relative">
      <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-center px-[15px] py-[20px] h-full">
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#222] text-[16px] tracking-[0.48px]">{text}</p>
      </div>
    </div>
  );
}

export default function DeficiencyTrackingPage() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();
  const [template, setTemplate] = useState<QuestionTemplate>('compliance');
  const [searchQuery, setSearchQuery] = useState('');
  const selectedId = searchParams.get('id') || '';
  const selected = FLAGGED_QUESTIONNAIRES.find((item) => item.id === selectedId);

  const visible = useMemo(() => {
    const keyword = searchQuery.trim();
    return FLAGGED_QUESTIONNAIRES.filter((item) => item.template === template).filter((item) => {
      if (!keyword) return true;
      return item.process.includes(keyword) || item.responsibleUnit.includes(keyword) || item.unit.includes(keyword);
    });
  }, [template, searchQuery]);

  const complianceCount = FLAGGED_QUESTIONNAIRES.filter((item) => item.template === 'compliance').length;
  const controlCount = FLAGGED_QUESTIONNAIRES.filter((item) => item.template === 'internal-control').length;

  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      <Header onNavigate={onNavigate} currentPage="deficiency-tracking" />
      <div className="bg-[#ececf3] flex flex-col items-center py-[32px] rounded-tl-[32px] rounded-tr-[32px] w-full pt-[152px] min-h-[calc(100vh-0px)]">
        <div className="flex flex-col gap-[32px] items-start px-[32px] w-[1440px]">
          <div className="flex gap-[8px] h-[24px] items-center">
            <button type="button" onClick={() => onNavigate('home')} className="bg-transparent border-none cursor-pointer p-0">
              <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px]">首頁</p>
            </button>
            <p className="text-[#4A5565] text-[16px]">/</p>
            <button type="button" onClick={() => onNavigate('deficiency-tracking')} className="bg-transparent border-none cursor-pointer p-0">
              <p className={`font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[16px] ${selected ? 'text-[#747480]' : 'font-bold text-[#1a1a24]'}`}>缺失追蹤</p>
            </button>
            {selected ? (
              <>
                <p className="text-[#4A5565] text-[16px]">/</p>
                <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px]">{selected.process}</p>
              </>
            ) : null}
          </div>

          <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] text-[32px]" style={{ fontWeight: 700 }}>
            {selected ? '缺失題目' : '缺失追蹤'}
          </p>

          {selected ? (
            <div className="bg-white rounded-[8px] w-full overflow-clip">
              <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#ececf3]">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[20px] text-[#1a1a24]">{selected.process}</p>
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">
                    {selected.responsibleUnit}／{selected.unit}　缺失 {selected.questions.length} 題
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('deficiency-tracking')}
                  className="bg-[#f6f6fa] border-none rounded-[4px] px-[16px] py-[10px] cursor-pointer"
                >
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] text-[#1a1a24]">返回列表</p>
                </button>
              </div>
              <div className="px-[16px] py-[16px] flex flex-col gap-[16px]">
                {selected.questions.map((item, index) => (
                  <div key={item.question} className="border border-[#ececf3] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
                    <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[16px] text-[#1a1a24]">
                      {index + 1}. {item.question}
                    </p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#ec5242]">自行評估結果：{item.result}</p>
                    <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#222]">審核說明：{item.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[8px] w-full overflow-clip">
              <div className="bg-[#f6f6fa] flex items-start w-full">
                <button
                  type="button"
                  className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] py-[16px] ${template === 'compliance' ? 'bg-[#ffe600]' : 'bg-[#f6f6fa]'}`}
                  onClick={() => { setTemplate('compliance'); setSearchQuery(''); }}
                >
                  <p className={`text-[20px] whitespace-nowrap ${template === 'compliance' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"}`}>法令遵循自行評估</p>
                  <p className={`text-[24px] ${template === 'compliance' ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[22px]"}`}>{complianceCount}</p>
                </button>
                <button
                  type="button"
                  className={`flex-1 border-none cursor-pointer flex gap-[6px] items-center justify-center px-[20px] py-[16px] ${template === 'internal-control' ? 'bg-[#ffe600]' : 'bg-[#f6f6fa]'}`}
                  onClick={() => { setTemplate('internal-control'); setSearchQuery(''); }}
                >
                  <p className={`text-[20px] whitespace-nowrap ${template === 'internal-control' ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"}`}>內部控制制度自行查核</p>
                  <p className={`text-[24px] ${template === 'internal-control' ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24]" : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[22px]"}`}>{controlCount}</p>
                </button>
              </div>

              <div className="flex gap-[24px] items-center px-[32px] py-[16px]">
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="搜尋業務項目、負責單位或自評單位..."
                  className="bg-[#f6f6fa] border-none outline-none flex-1 rounded-[8px] px-[12px] py-[14px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24] placeholder:text-[#747480]"
                />
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] text-[#747480] whitespace-nowrap">共 {visible.length} 筆</p>
              </div>

              <div className="px-[16px] pb-[16px]">
                <div className="flex items-start w-full">
                  <div className="flex flex-col w-[240px] shrink-0">
                    <HeaderCell text="業務項目" />
                    {visible.map((item) => <DataCell key={item.id} text={item.process} />)}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <HeaderCell text="負責單位" />
                    {visible.map((item) => <DataCell key={item.id} text={item.responsibleUnit} />)}
                  </div>
                  <div className="flex flex-col w-[160px] shrink-0">
                    <HeaderCell text="自評單位" />
                    {visible.map((item) => <DataCell key={item.id} text={item.unit} />)}
                  </div>
                  <div className="flex flex-col w-[140px] shrink-0">
                    <HeaderCell text="缺失題數" />
                    {visible.map((item) => <DataCell key={item.id} text={String(item.questions.length)} />)}
                  </div>
                  <div className="flex flex-col w-[120px] shrink-0">
                    <HeaderCell text="操作" align="center" />
                    {visible.map((item) => (
                      <div key={item.id} className="bg-white h-[63px] w-full relative">
                        <div className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex items-center justify-center h-full">
                          <button
                            type="button"
                            onClick={() => onNavigate('deficiency-tracking', undefined, { id: item.id })}
                            className="bg-transparent border-none cursor-pointer"
                          >
                            <p className="underline font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#1a1a24]">查看</p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {visible.length === 0 ? (
                  <p className="px-[15px] py-[24px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-[#747480]">沒有符合條件的問卷</p>
                ) : null}
              </div>
            </div>
          )}
        </div>
        <div className="w-full mt-[32px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
