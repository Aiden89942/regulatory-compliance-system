import { useNavigate, useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import svgPaths from '../../imports/svg-gdgo1f1r2d';

export default function SupplierRiskAssessmentResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('project') || '';

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate(-1); // 返回上一頁
  };

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate('/' + page);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6fa] flex flex-col">
      <Header onNavigate={handleNavigate} activePage="risk-assessment" />
      
      <div className="flex-1 flex justify-center px-[24px] py-[32px]">
        <div className="w-[1200px] flex flex-col gap-[24px] px-[0px] pt-[150px] pb-[0px]">
          {/* 面包屑 */}
          <div className="flex items-center gap-[8px] h-[24px]">
            <button className="bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity" onClick={() => navigate('/')}>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wght' 400" }}>
                首頁
              </p>
            </button>
            <div className="size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c5f4580} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <button className="bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity" onClick={() => navigate('/risk-assessment')}>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#747480] text-[16px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wght' 400" }}>
                風險評估
              </p>
            </button>
            <div className="size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c5f4580} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wght' 700" }}>
              資訊供應商風險評估表
            </p>
          </div>

          {/* 标题和按钮 */}
          <div className="flex items-center justify-between h-[50px]">
            <h1 className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[48px] text-[#1a1a24] text-[32px]" style={{ fontVariationSettings: "'wght' 700" }}>
              資訊供應商風險評估表
            </h1>
            <div className="flex gap-[16px] items-center">
              <button 
                className="bg-white h-[50px] px-[21px] py-[13px] rounded-[4px] border border-[#e5e7eb] cursor-pointer hover:bg-[#f6f6fa] transition-colors"
                onClick={handlePrint}
              >
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[24px] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  列印
                </p>
              </button>
              <button 
                className="bg-[#ffe600] h-[48px] px-[20px] py-[12px] rounded-[4px] cursor-pointer hover:bg-[#ffd000] transition-colors"
                onClick={handleBack}
              >
                <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[24px] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  返回列表
                </p>
              </button>
            </div>
          </div>

          {/* 填寫完成卡片 */}
          <div className="bg-white rounded-[8px] p-[32px] flex flex-col items-center gap-[16px]">
            <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[24px]" style={{ fontVariationSettings: "'wght' 700" }}>
              填寫完成
            </p>
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
              風險總分
            </p>
            
            {/* 圆环图 */}
            <div className="relative size-[199.545px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199.544 199.546">
                <g id="Group 87">
                  <path d={svgPaths.p27dd4380} fill="#2E2E38" />
                  <path d={svgPaths.p3b072b80} fill="url(#paint0_linear_232_9702)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_232_9702" x1="0" x2="199.544" y1="99.7728" y2="99.7728">
                    <stop stopColor="#FFE600" />
                    <stop offset="1" stopColor="#41FCEA" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="absolute font-['EYInterstate:Bold',sans-serif] leading-[normal] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#121212] text-[48px]">80</p>
            </div>

            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#747480] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
              您的評估資料已成功上傳，系統已完成自動計分。
            </p>
          </div>

          {/* 檢視填寫內容 */}
          <div className="bg-white rounded-[8px] p-[32px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
                檢視填寫內容
              </p>
              <button className="flex gap-[4px] items-center bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p3053b100} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p2519a180} stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 12.5V2.5" stroke="#1A1A24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px] underline decoration-solid" style={{ fontVariationSettings: "'wght' 400" }}>
                  匯出
                </p>
              </button>
            </div>

            {/* 基本資料 */}
            <div className="flex flex-col gap-[12px] py-[16px] border-b border-[rgba(0,0,0,0.1)]">
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                基本資料
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  評估日期
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]">2025/12/12</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  國泰投信業務申請單位
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>數位金融部 </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  專案負責人
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  陳X明
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  專案名稱
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  2026 AI 智能客服系統 v1.0
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  資訊服務委外類型
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  1. 系統開發
                </p>
              </div>
            </div>

            {/* 供應商資訊 */}
            <div className="flex flex-col gap-[12px] py-[16px] border-b border-[rgba(0,0,0,0.1)]">
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>供應商資訊 </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  供應商名稱
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  碩網資訊股份有限公司
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  聯繫地址
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  台北市 中山區松江路 158 號 11 樓
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  聯絡窗口姓名
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  陳X明
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  窗口單位
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  業務部
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  窗口職稱
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  資深客戶經理
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  窗口聯繫電話
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]">02-2562-8888 #123</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  公司網址
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]">https://www.intumit.com</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  窗口電子郵件
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]">wang.daming@intumit.com</p>
              </div>
            </div>

            {/* 供應商資訊安全評估 */}
            <div className="flex flex-col gap-[12px] py-[16px] border-b border-[rgba(0,0,0,0.1)]">
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#1a1a24] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                供應商資訊安全評估
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  供應商與國泰投信目前合約關係狀態
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  A. 尚未簽約
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  供應商所在國家
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  中華民國 (台灣)
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  供應商提供產品或服務之所在位置
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  中華民國 (台灣)
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  若供應商為自然人，供應商之國籍
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  不適用 (法人)
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  供應商是否取得任何資安認證
                </p>
                <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]">ISO 27001</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[#747480] text-[14px] tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  依據訪談及公開資訊，供應商過去24個月是否有發生重大資安事件且影響其營運
                </p>
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] text-[#2e2e38] text-[16px] tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  無
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
