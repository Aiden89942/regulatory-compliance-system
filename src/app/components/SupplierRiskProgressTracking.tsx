import { useState } from 'react';
import svgPaths from "@/imports/svg-no5vskbs3s";

type TabType = "系統弱點掃描" | "供應商定期風險評估" | "供應商情資";
type StatusType = "全部" | "尚未處理" | "處理中" | "已處理" | "已逾期";

interface RiskItem {
  供應商名稱: string;
  專案名稱: string;
  弱點描述: string;
  期限: string;
  敢處理狀態: "已逾期" | "尚未處理" | "處理中" | "已處理";
  isHighlighted?: boolean;
}

// 系統弱點掃描數據
const 系統弱點掃描Data: RiskItem[] = [
  {
    供應商名稱: "中菲行國際物流",
    專案名稱: "MyDimerco 貨運管理系統",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.01",
    敢處理狀態: "已逾期",
    isHighlighted: true,
  },
  {
    供應商名稱: "中華電信",
    專案名稱: "hicloud 雲端服務 API",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.10",
    敢處理狀態: "尚未處理",
  },
  {
    供應商名稱: "Appier 沛星互動科技",
    專案名稱: "客戶數據平台 (CDP)",
    弱點描述: "程式碼執行漏洞 (RCE) - (CVE-2025-12345)",
    期限: "2025.11.10",
    敢處理狀態: "已處理",
  },
  {
    供應商名稱: "綠界科技 ECPay",
    專案名稱: "金流支付閘道器",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.10",
    敢處理狀態: "處理中",
  },
  {
    供應商名稱: "NEC 台灣",
    專案名稱: "ATM 監控管理軟體",
    弱點描述: "遠端程式碼執行漏洞 (RCE)",
    期限: "2025.11.20",
    敢處理狀態: "已處理",
  },
  {
    供應商名稱: "藍新科技 (NewebPay)",
    專案名稱: "第三方支付 API 模組",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.27",
    敢處理狀態: "已處理",
  },
  {
    供應商名稱: "Cisco 思科",
    專案名稱: "網銀防火牆設備 (Firewall)",
    弱點描述: "系統後門帳號弱點 (Hardcoded Password)",
    期限: "2025.12.30",
    敢處理狀態: "已處理",
  },
  {
    供應商名稱: "綠界科技 ECPay",
    專案名稱: "金流支付閘道器",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.10",
    敢處理狀態: "處理中",
  },
  {
    供應商名稱: "綠界科技 ECPay",
    專案名稱: "金流支付閘道器",
    弱點描述: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)",
    期限: "2025.11.10",
    敢處理狀態: "處理中",
  },
];

// 供應商定期風險評估數據
const 供應商定期風險評估Data: RiskItem[] = [
  {
    供應商名稱: "中菲行國際物流",
    專案名稱: "MyDimerco 貨運管理系統",
    弱點描述: "27001 證書已逾期",
    期限: "2025.11.01",
    敢處理狀態: "已逾期",
    isHighlighted: true,
  },
  {
    供應商名稱: "中華電信",
    專案名稱: "hicloud 雲端服務 API",
    弱點描述: "附件二(架構圖) 模糊無法辨識防火牆節點",
    期限: "2025.11.10",
    敢處理狀態: "尚未處理",
  },
  {
    供應商名稱: "Appier 沛星互動科技",
    專案名稱: "客戶數據平台 (CDP)",
    弱點描述: "缺少資安演練紀錄",
    期限: "2025.11.10",
    敢處理狀態: "已處理",
  },
];

// 供應商情資數據
const 供應商情資Data: RiskItem[] = [
  {
    供應商名稱: "中菲行國際物流",
    專案名稱: "MyDimerco 貨運管理系統",
    弱點描述: "尚未提供第三方鑑識報告以證明無外洩",
    期限: "2025.11.01",
    敢處理狀態: "已逾期",
    isHighlighted: true,
  },
  {
    供應商名稱: "中華電信",
    專案名稱: "hicloud 雲端服務 API",
    弱點描述: "已上傳法院一審無罪判決書",
    期限: "2025.11.10",
    敢處理狀態: "尚未處理",
  },
  {
    供應商名稱: "Appier 沛星互動科技",
    專案名稱: "客戶數據平台 (CDP)",
    弱點描述: "賠償方案與檢討報告說明不清",
    期限: "2025.11.10",
    敢處理狀態: "已處理",
  },
];

// 狀態圖標組件
function StatusBadge({ status }: { status: "已逾期" | "尚未處理" | "處理中" | "已處理" }) {
  const configs = {
    已逾期: {
      color: "#EC5242",
      textColor: "text-[#ec5242]",
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group 1171276096">
            <circle cx="7" cy="7" fill="#EC5242" id="Ellipse 4303" r="7" />
            <g id="Group 1171276093">
              <path d={svgPaths.p2bbd3a00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
              <path d={svgPaths.p240ac80} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            </g>
          </g>
        </svg>
      ),
    },
    尚未處理: {
      color: "#55A3E2",
      textColor: "text-[#1a1a24]",
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="#55A3E2" r="7" />
        </svg>
      ),
    },
    處理中: {
      color: "#EE762F",
      textColor: "text-[#1a1a24]",
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="#EE762F" r="7" />
          <g>
            <path d="M7 3.5V8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
            <path d="M7 10.5H7.007" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      ),
    },
    已處理: {
      color: "#419D48",
      textColor: "text-[#1a1a24]",
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g>
            <circle cx="7" cy="7" fill="#419D48" r="7" />
            <path d={svgPaths.p21ec7f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12" />
          </g>
        </svg>
      ),
    },
  };

  const config = configs[status];

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[80px]">
      <div className="relative shrink-0 size-[14px]">{config.icon}</div>
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 ${config.textColor} text-[16px] tracking-[0.48px]`} style={{ fontVariationSettings: "'wght' 400" }}>
          {status}
        </p>
      </div>
    </div>
  );
}

export default function SupplierRiskProgressTracking() {
  const [activeTab, setActiveTab] = useState<TabType>("系統弱點掃描");
  const [activeStatus, setActiveStatus] = useState<StatusType>("全部");

  // 獲取當前tab的數據
  const getCurrentData = () => {
    switch (activeTab) {
      case "系統弱點掃描":
        return 系統弱點掃描Data;
      case "供應商定期風險評估":
        return 供應商定期風險評估Data;
      case "供應商情資":
        return 供應商情資Data;
      default:
        return [];
    }
  };

  // 根據狀態過濾數據
  const getFilteredData = () => {
    const data = getCurrentData();
    if (activeStatus === "全部") {
      return data;
    }
    return data.filter((item) => item.敢處理狀態 === activeStatus);
  };

  // 計算各狀態的數量
  const getStatusCounts = () => {
    const data = getCurrentData();
    return {
      全部: data.length,
      尚未處理: data.filter((item) => item.敢處理狀態 === "尚未處理").length,
      處理中: data.filter((item) => item.敢處理狀態 === "處理中").length,
      已處理: data.filter((item) => item.敢處理狀態 === "已處理").length,
      已逾期: data.filter((item) => item.敢處理狀態 === "已逾期").length,
    };
  };

  const statusCounts = getStatusCounts();
  const filteredData = getFilteredData();

  // 獲取表格標題（根據不同tab顯示不同標題）
  const getTableHeaders = () => {
    if (activeTab === "系統弱點掃描") {
      return {
        col1: "供應商名稱",
        col2: "專案名稱",
        col3: "弱點描述",
        col4: "期限",
      };
    } else if (activeTab === "供應商定期風險評估") {
      return {
        col1: "供應商名稱",
        col2: "專案名稱",
        col3: "補件描述",
        col4: "期限",
      };
    } else {
      return {
        col1: "供應商名稱",
        col2: "專案名稱",
        col3: "待補證明/舉證要求",
        col4: "日期",
      };
    }
  };

  const headers = getTableHeaders();

  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] w-full">
      {/* Tab 選項卡 */}
      <div className="bg-[#f6f6fa] content-stretch flex items-start overflow-clip relative shrink-0 w-full">
        {/* 系統弱點掃描 Tab */}
        <div
          className={`flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch cursor-pointer transition-colors ${
            activeTab === "系統弱點掃描" ? "bg-[#ffe600]" : ""
          }`}
          onClick={() => {
            setActiveTab("系統弱點掃描");
            setActiveStatus("全部");
          }}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] relative size-full text-center whitespace-nowrap ${
              activeTab === "系統弱點掃描" ? "py-[16px]" : "py-[12px]"
            }`}>
              <div
                className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                  activeTab === "系統弱點掃描"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] tracking-[0.6px]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"
                }`}
                style={{ fontVariationSettings: activeTab === "系統弱點掃描" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">系統弱點掃描</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 ${
                  activeTab === "系統弱點掃描"
                    ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[20px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[20px]"
                }`}
                style={{ fontVariationSettings: activeTab === "系統弱點掃描" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">{系統弱點掃描Data.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 供應商定期風險評估 Tab */}
        <div
          className={`flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch cursor-pointer transition-colors ${
            activeTab === "供應商定期風險評估" ? "bg-[#ffe600]" : ""
          }`}
          onClick={() => {
            setActiveTab("供應商定期風險評估");
            setActiveStatus("全部");
          }}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] relative size-full text-center whitespace-nowrap ${
              activeTab === "供應商定期風險評估" ? "py-[16px]" : "py-[12px]"
            }`}>
              <div
                className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                  activeTab === "供應商定期風險評估"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] tracking-[0.6px]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"
                }`}
                style={{ fontVariationSettings: activeTab === "供應商定期風險評估" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">供應商定期風險評估</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 ${
                  activeTab === "供應商定期風險評估"
                    ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[20px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[20px]"
                }`}
                style={{ fontVariationSettings: activeTab === "供應商定期風險評估" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">{供應商定期風險評估Data.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 供應商情資 Tab */}
        <div
          className={`flex-[1_0_0] min-h-px min-w-[110px] relative self-stretch cursor-pointer transition-colors ${
            activeTab === "供應商情資" ? "bg-[#ffe600]" : ""
          }`}
          onClick={() => {
            setActiveTab("供應商情資");
            setActiveStatus("全部");
          }}
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] relative size-full text-center whitespace-nowrap ${
              activeTab === "供應商情資" ? "py-[16px]" : "py-[12px]"
            }`}>
              <div
                className={`flex flex-col justify-center relative shrink-0 text-[20px] ${
                  activeTab === "供應商情資"
                    ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[#1a1a24] tracking-[0.6px]"
                    : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[#747480]"
                }`}
                style={{ fontVariationSettings: activeTab === "供應商情資" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">供應商情資</p>
              </div>
              <div
                className={`flex flex-col justify-center not-italic relative shrink-0 ${
                  activeTab === "供應商情資"
                    ? "font-['EYInterstate:Bold',sans-serif] text-[#1a1a24] text-[20px]"
                    : "font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[20px]"
                }`}
                style={{ fontVariationSettings: activeTab === "供應商情資" ? "'wght' 700" : "'wght' 400" }}
              >
                <p className="leading-[normal]">{供應商情資Data.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 狀態篩選按鈕 */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
            {/* 全部 */}
            <div
              className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                activeStatus === "全部" ? "bg-[#ffe600]" : "bg-[#ececf3]"
              }`}
              onClick={() => setActiveStatus("全部")}
            >
              <p
                className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.48px] ${
                  activeStatus === "全部" ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeStatus === "全部" ? "'wght' 700" : "'wght' 400" }}
              >
                全部 ({statusCounts.全部})
              </p>
            </div>

            {/* 尚未處理 */}
            <div
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                activeStatus === "尚未處理" ? "bg-[#ffe600]" : "bg-[#ececf3]"
              }`}
              onClick={() => setActiveStatus("尚未處理")}
            >
              <p
                className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.48px] ${
                  activeStatus === "尚未處理" ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeStatus === "尚未處理" ? "'wght' 700" : "'wght' 400" }}
              >
                尚未處理 ({statusCounts.尚未處理})
              </p>
            </div>

            {/* 處理中 */}
            <div
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                activeStatus === "處理中" ? "bg-[#ffe600]" : "bg-[#ececf3]"
              }`}
              onClick={() => setActiveStatus("處理中")}
            >
              <p
                className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.48px] ${
                  activeStatus === "處理中" ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeStatus === "處理中" ? "'wght' 700" : "'wght' 400" }}
              >
                處理中 ({statusCounts.處理中})
              </p>
            </div>

            {/* 已處理 */}
            <div
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                activeStatus === "已處理" ? "bg-[#ffe600]" : "bg-[#ececf3]"
              }`}
              onClick={() => setActiveStatus("已處理")}
            >
              <p
                className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.48px] ${
                  activeStatus === "已處理" ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeStatus === "已處理" ? "'wght' 700" : "'wght' 400" }}
              >
                已處理 ({statusCounts.已處理})
              </p>
            </div>

            {/* 已逾期 */}
            <div
              className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[33554400px] shrink-0 cursor-pointer transition-colors ${
                activeStatus === "已逾期" ? "bg-[#ffe600]" : "bg-[#ececf3]"
              }`}
              onClick={() => setActiveStatus("已逾期")}
            >
              <p
                className={`leading-[23px] relative shrink-0 text-[#1a1a24] text-[14px] text-center tracking-[0.48px] ${
                  activeStatus === "已逾期" ? "font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]" : "font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif]"
                }`}
                style={{ fontVariationSettings: activeStatus === "已逾期" ? "'wght' 700" : "'wght' 400" }}
              >
                已逾期 ({statusCounts.已逾期})
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 表格 */}
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full">
        {/* 供應商名稱列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[193px]">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px]" style={{ fontVariationSettings: "'wght' 600" }}>
                  {headers.col1}
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[15px] relative size-full">
                  <p
                    className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 ${
                      item.isHighlighted ? "text-[#ec5242]" : "text-[#222]"
                    } text-[16px] text-center tracking-[0.48px]`}
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {item.供應商名稱}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 專案名稱列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[225px]">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 600" }}>
                  {headers.col2}
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[15px] relative size-full">
                  <p
                    className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 ${
                      item.isHighlighted ? "text-[#ec5242]" : "text-[#222]"
                    } text-[16px] text-center tracking-[0.48px]`}
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {item.專案名稱}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 期限列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 600" }}>
                  {headers.col4}
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[15px] relative size-full">
                  <p
                    className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 ${
                      item.isHighlighted ? "text-[#ec5242]" : "text-[#222]"
                    } text-[16px] text-center tracking-[0.48px]`}
                  >
                    {item.期限}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 弱點描述/補件描述/待補證明列 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[464px]">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 600" }}>
                  {headers.col3}
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[15px] relative size-full">
                  <p
                    className={`flex-[1_0_0] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] min-h-px min-w-px relative ${
                      item.isHighlighted ? "text-[#ec5242]" : "text-[#222]"
                    } text-[16px] tracking-[0.48px] whitespace-pre-wrap`}
                    style={{ fontVariationSettings: "'wght' 400" }}
                  >
                    {item.弱點描述}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 敢處理狀態列 */}
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 600" }}>
                  敢處理狀態
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[15px] relative size-full">
                  <StatusBadge status={item.敢處理狀態} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 操作列 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          {/* Header */}
          <div className="bg-[#f6f6fa] h-[48px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
                <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 600" }}>
                  操作
                </p>
              </div>
            </div>
          </div>
          {/* Cells */}
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white h-[63px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d2dae6] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[20px] relative size-full">
                  {/* 查看按鈕 */}
                  <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f6f6fa] transition-colors">
                    <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
                        查看
                      </p>
                    </div>
                  </div>

                  {/* 通知供應商補件按鈕（只在已逾期或尚未處理時顯示） */}
                  {(item.敢處理狀態 === "已逾期" || item.敢處理狀態 === "尚未處理") && (
                    <div className="bg-[#ffe600] content-stretch flex gap-[4px] items-center justify-center min-w-[80px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd700] transition-colors">
                      <div className="flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[15px] text-center tracking-[0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                        <p className="leading-[23px]">通知供應商補件</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}