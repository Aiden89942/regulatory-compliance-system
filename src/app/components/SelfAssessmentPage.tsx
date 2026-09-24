import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';
import {
  QuestionTemplate,
  getSelfAssessmentQuestions,
  getTemplateLabel,
  InherentRisk,
} from '../data/questionBankData';

type AssessmentResult = 'compliant' | 'partial' | 'non-compliant' | '';

const RESULT_OPTIONS: { value: AssessmentResult; label: string; color: string }[] = [
  { value: 'compliant', label: '符合', color: '#419D48' },
  { value: 'partial', label: '部分符合', color: '#EE762F' },
  { value: 'non-compliant', label: '不符合', color: '#ec5242' },
];

function RiskBadge({ risk }: { risk: InherentRisk }) {
  const styles = {
    high: { bg: '#ffe2e2', text: '#ec5242', label: '高風險' },
    medium: { bg: '#ffedd4', text: '#EE762F', label: '中風險' },
    low: { bg: '#ddffdf', text: '#419D48', label: '低風險' },
    none: { bg: '#f6f6fa', text: '#747480', label: '無' },
  };
  const { bg, text, label } = styles[risk];
  return (
    <div className="rounded-[4px] px-[8px] py-[4px] inline-flex items-center justify-center" style={{ backgroundColor: bg }}>
      <p className="font-['EYInterstate:Bold',sans-serif] text-[13px] leading-none" style={{ color: text, fontWeight: 700 }}>{label}</p>
    </div>
  );
}

export default function SelfAssessmentPage() {
  const { isDarkMode, setShowDraftSavedNotification } = useAppContext();
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();

  const template = ((searchParams.get('template') as QuestionTemplate) || 'compliance');
  const projectName = searchParams.get('project') || getTemplateLabel(template);
  const questions = useMemo(() => getSelfAssessmentQuestions(template), [template]);

  const [answers, setAnswers] = useState<Record<string, AssessmentResult>>({});
  const [remarks, setRemarks] = useState<Record<string, string>>({});

  const answeredCount = questions.filter((q) => answers[q.id]).length;
  const progress = questions.length === 0 ? 0 : Math.round((answeredCount / questions.length) * 100);

  const setAnswer = (id: string, value: AssessmentResult) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveDraft = () => {
    setShowDraftSavedNotification(true);
  };

  const handleSubmit = () => {
    onNavigate('risk-assessment');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#2e2e38]'}`}>
      <Header onNavigate={onNavigate} currentPage="risk-assessment" />

      <div className={`${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#ececf3]'} content-stretch flex flex-col gap-[32px] items-center px-0 py-[32px] pt-[152px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full min-h-[calc(100vh-152px)]`}>
        <div className="w-full max-w-[1920px] flex flex-col gap-[32px] items-center">
          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full">
              <Breadcrumb
                isDarkMode={isDarkMode}
                onNavigate={onNavigate}
                items={[
                  { text: '首頁', onClick: () => onNavigate('home') },
                  { text: getTemplateLabel(template), onClick: () => onNavigate('risk-assessment') },
                  { text: '自評填寫', isActive: true },
                ]}
              />
            </div>
          </div>

          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[8px]">
              <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                自評填寫
              </h1>
              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                {getTemplateLabel(template)}｜{projectName}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start pb-[32px] pt-0 px-[32px] relative shrink-0 w-full max-w-[1504px] gap-[24px]">
            {/* 進度與操作 */}
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[24px] shadow-sm w-full flex flex-col md:flex-row md:items-center justify-between gap-[16px]`}>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-[8px]">
                  <p className={`font-['EYInterstate:Bold',sans-serif] text-[15px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                    填寫進度 {answeredCount}/{questions.length}
                  </p>
                  <p className={`font-['EYInterstate:Bold',sans-serif] text-[15px] ${isDarkMode ? 'text-[#ffe600]' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                    {progress}%
                  </p>
                </div>
                <div className={`h-[8px] rounded-full overflow-hidden ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}`}>
                  <div className="h-full bg-[#ffe600] transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className="flex gap-[12px] shrink-0">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className={`${isDarkMode ? 'bg-[#1a1a24] border-[#474756] text-white' : 'bg-white border-[#c4c4cd] text-[#1a1a24]'} border border-solid rounded-[8px] px-[20px] py-[10px] cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  <p className="font-['EYInterstate:Bold',sans-serif] text-[15px]" style={{ fontWeight: 700 }}>儲存草稿</p>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#ffe600] border-none rounded-[8px] px-[20px] py-[10px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                >
                  <p className="font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[15px]" style={{ fontWeight: 700 }}>送出自評</p>
                </button>
              </div>
            </div>

            {/* 題目列表 */}
            {questions.map((q) => (
              <div
                key={q.id}
                className={`${isDarkMode ? 'bg-[#2e2e38] border-[#474756]' : 'bg-white border-[#ececf3]'} rounded-[12px] border p-[24px] shadow-sm w-full transition-colors`}
              >
                <div className="flex items-start justify-between gap-[16px] mb-[16px]">
                  <div className="flex gap-[12px] items-start">
                    <div className="bg-[#ffe600] rounded-[4px] px-[10px] py-[4px] shrink-0">
                      <p className="font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[14px]" style={{ fontWeight: 700 }}>{q.no}</p>
                    </div>
                    <div>
                      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[18px] leading-[28px] mb-[8px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>
                        {q.question}
                      </p>
                      <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[14px] leading-[22px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>
                        控制措施：{q.controlMeasure}
                      </p>
                    </div>
                  </div>
                  <RiskBadge risk={q.inherentRisk} />
                </div>

                <div className="mb-[16px]">
                  <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] mb-[10px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>
                    自評結果
                  </p>
                  <div className="flex gap-[12px] flex-wrap">
                    {RESULT_OPTIONS.map((opt) => {
                      const isActive = answers[q.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setAnswer(q.id, opt.value)}
                          className={`px-[16px] py-[10px] rounded-[8px] border cursor-pointer transition-colors ${
                            isActive
                              ? 'border-transparent bg-[#ffe600]'
                              : isDarkMode
                                ? 'border-[#474756] bg-[#1a1a24] hover:bg-[#353545]'
                                : 'border-[#ececf3] bg-[#f6f6fa] hover:bg-[#ececf3]'
                          }`}
                        >
                          <p
                            className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[14px]"
                            style={{ fontWeight: 700, color: isActive ? '#1a1a24' : opt.color }}
                          >
                            {opt.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className={`font-['EYInterstate:Bold',sans-serif] text-[14px] mb-[8px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`} style={{ fontWeight: 700 }}>
                    說明／佐證（選填）
                  </p>
                  <textarea
                    value={remarks[q.id] || ''}
                    onChange={(e) => setRemarks((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="可填寫執行情形、佐證文件說明等"
                    rows={3}
                    className={`w-full ${isDarkMode ? 'bg-[#1a1a24] text-white border-[#474756] placeholder:text-[#474756]' : 'bg-[#f6f6fa] text-[#1a1a24] border-[#ececf3] placeholder:text-[#99A1AF]'} rounded-[8px] border px-[16px] py-[12px] outline-none focus:border-[#ffe600] transition-colors font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[15px] resize-y`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
