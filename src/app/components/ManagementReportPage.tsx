import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useAppNavigate, useAppContext } from '../context/AppContext';

export default function ManagementReportPage() {
  const { isDarkMode } = useAppContext();
  const onNavigate = useAppNavigate();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#2e2e38]'}`}>
      <Header onNavigate={onNavigate} currentPage="management-report" />
      
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
                  { text: '管理報表', isActive: true }
                ]}
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="relative shrink-0 w-full px-[32px]">
            <div className="max-w-[1440px] mx-auto w-full">
              <h1 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[32px] tracking-[0.96px] ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontWeight: 700 }}>
                管理報表
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center justify-center pb-[32px] pt-[64px] px-[32px] relative shrink-0 w-full max-w-[1504px]">
            <div className={`${isDarkMode ? 'bg-[#2e2e38]' : 'bg-white'} rounded-[12px] p-[64px] shadow-sm w-full text-center transition-colors`}>
              <div className="mb-[24px] flex justify-center">
                <div className={`size-[80px] rounded-full flex items-center justify-center ${isDarkMode ? 'bg-[#1a1a24]' : 'bg-[#f6f6fa]'}`}>
                   <svg className="size-[40px]" fill="none" viewBox="0 0 24 24" stroke={isDarkMode ? "#747480" : "#99A1AF"}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                </div>
              </div>
              <h2 className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] text-[24px] mb-[16px] ${isDarkMode ? 'text-white' : 'text-[#1a1a24]'}`} style={{ fontWeight: 700 }}>管理報表功能建置中</h2>
              <p className={`font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[18px] ${isDarkMode ? 'text-[#99A1AF]' : 'text-[#747480]'}`}>此功能即將推出，敬請期待。</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
