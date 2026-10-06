import svgPaths from "./svg-mw3h2lnbfe";
import clsx from "clsx";
import { useState } from "react";
import SupplierProgressOverview from "../app/components/SupplierProgressOverview";
import InventoryCard from "../app/components/InventoryCard";
import DraggableScroll from "../app/components/DraggableScroll";
import SupplierRiskAnalysis from "../app/components/SupplierRiskAnalysis";
import Frame1321316923 from "./Frame1321316923";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { QuestionnaireWorkPanel } from "../app/components/QuestionBankReviewPage";
import { QuestionnaireDraftPanel } from "../app/components/QuestionBankDraftPage";
import VendorRiskProgressTracking from "../app/components/VendorRiskProgressTracking";

type Frame1321316927Props = {
  selectedYear: number;
  onYearChange: (year: number) => void;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  years: number[];
  onNavigate?: (page: string) => void;
  showQuestionnaireOverview?: boolean;
};

function BackgroundImage15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[24px]">
      {children}
    </div>
  );
}

type LBackgroundImageProps = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
};

function LBackgroundImage({ children, text, additionalClassNames = "", onClick }: React.PropsWithChildren<LBackgroundImageProps>) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-0 py-[8px] relative w-full cursor-pointer hover:opacity-80 transition-opacity">
        <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

type ButtonBackgroundImageProps = {
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function ButtonBackgroundImage({ children, isDarkMode = false, isYellowCard = false }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  const bgColor = isDarkMode 
    ? (isYellowCard ? 'bg-[#ffe600]' : 'bg-[rgba(255,255,255,0.12)]')
    : 'bg-white';
  
  return (
    <div className={`${bgColor} relative rounded-[8px] shrink-0 w-[260px] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer`}>
      <div className="content-stretch flex gap-[10px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

type BackgroundImage14Props = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function BackgroundImage14({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<BackgroundImage14Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-[110px] relative self-stretch shrink-0 cursor-pointer hover:opacity-90 transition-opacity", additionalClassNames)} onClick={onClick}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">{children}</div>
    </div>
  );
}

type BackgroundImage13Props = {
  additionalClassNames?: string;
};

function BackgroundImage13({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage13Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d2dae6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function TableCellBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage11 additionalClassNames="bg-white h-[53px]">
      <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">{children}</div>
    </BackgroundImage11>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group 1171276096">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <BackgroundImage12 additionalClassNames={additionalClassNames}>
      <g id="chevron-right">{children}</g>
    </BackgroundImage12>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center p-[15px] relative w-full">{children}</div>
    </BackgroundImage13>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[250px]">
      <div className="absolute inset-[0_-1.67%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254.167 250">
          <g id="Group 1171276077">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center px-[15px] py-[20px] relative w-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">{children}</p>
      </div>
    </BackgroundImage13>
  );
}

type BackgroundImageAndText15Props = {
  text: string;
};

function BackgroundImageAndText15({ text }: BackgroundImageAndText15Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}

type BackgroundImageAndText14Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText14({ text, additionalClassNames = "" }: BackgroundImageAndText14Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center text-nowrap">{text}</p>
    </div>
  );
}

type TableHeaderBackgroundImageAndText2Props = {
  text: string;
};

function TableHeaderBackgroundImageAndText2({ text }: TableHeaderBackgroundImageAndText2Props) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText14 text={text} />
    </BackgroundImage13>
  );
}

type TableCellBackgroundImageAndText2Props = {
  text: string;
};

function TableCellBackgroundImageAndText2({ text }: TableCellBackgroundImageAndText2Props) {
  return (
    <BackgroundImage7>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#ec5242] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </BackgroundImage7>
  );
}

type TableHeaderBackgroundImageAndText1Props = {
  text: string;
};

function TableHeaderBackgroundImageAndText1({ text }: TableHeaderBackgroundImageAndText1Props) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <div className="content-stretch flex items-center p-[15px] relative size-full">
        <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-nowrap">{text}</p>
      </div>
    </BackgroundImage13>
  );
}

type BackgroundImageAndText13Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText13({ text, additionalClassNames = "" }: BackgroundImageAndText13Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap tracking-[0.45px]", additionalClassNames)}>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[23px] text-[16px] tracking-[0.48px] underline" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

type TableCellBackgroundImageAndText1Props = {
  text: string;
};

function TableCellBackgroundImageAndText1({ text }: TableCellBackgroundImageAndText1Props) {
  return (
    <BackgroundImage5>
      {text}
      <span>{`股份有限公司 `}</span>
    </BackgroundImage5>
  );
}

type BackgroundImageAndText12Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText12({ text, additionalClassNames = "" }: BackgroundImageAndText12Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-center text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}

type TableCellBackgroundImageAndTextProps = {
  text: string;
};

function TableCellBackgroundImageAndText({ text }: TableCellBackgroundImageAndTextProps) {
  return (
    <BackgroundImage13 additionalClassNames="bg-white">
      <BackgroundImageAndText12 text={text} additionalClassNames="px-[15px] py-[20px]" />
    </BackgroundImage13>
  );
}

type BackgroundImageAndText11Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText11({ text, additionalClassNames = "" }: BackgroundImageAndText11Props) {
  return (
    <div className={clsx("content-stretch flex items-center p-[15px] relative size-full", additionalClassNames)}>
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]">{text}</p>
    </div>
  );
}

type TableHeaderBackgroundImageAndTextProps = {
  text: string;
};

function TableHeaderBackgroundImageAndText({ text }: TableHeaderBackgroundImageAndTextProps) {
  return (
    <BackgroundImage13 additionalClassNames="bg-[#f6f6fa] h-[48px]">
      <BackgroundImageAndText11 text={text} />
    </BackgroundImage13>
  );
}

type ButtonBackgroundImageAndText2Props = {
  text: string;
  onClick?: () => void;
};

function ButtonBackgroundImageAndText2({ text, onClick }: ButtonBackgroundImageAndText2Props) {
  return (
    <div className="bg-[#ececf3] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer hover:bg-[#e0e0e8] transition-colors" onClick={onClick}>
      <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
        {text}
      </p>
    </div>
  );
}

type ButtonBackgroundImageAndText1Props = {
  text: string;
  onClick?: () => void;
};

function ButtonBackgroundImageAndText1({ text, onClick }: ButtonBackgroundImageAndText1Props) {
  return (
    <div className="bg-[#ffe600] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[3.35544e+07px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors" onClick={onClick}>
      <p className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 700" }}>
        {text}
      </p>
    </div>
  );
}

type BackgroundImageAndText10Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText10({ text, additionalClassNames = "" }: BackgroundImageAndText10Props) {
  return (
    <div style={{ fontVariationSettings: "'wght' 400" }} className={clsx("flex flex-col font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0 text-[20px]", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}

type BackgroundImage4Props = {
  text: string;
  text1: string;
  onClick?: () => void;
  isDarkMode?: boolean;
};

function BackgroundImage4({ text, text1, onClick, isDarkMode = false }: BackgroundImage4Props) {
  const textColor = isDarkMode ? 'text-[#747480]' : 'text-[#747480]';
  
  return (
    <BackgroundImage14 onClick={onClick}>
      <div className={`content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full ${textColor} text-center text-nowrap transition-colors duration-300`}>
        <BackgroundImageAndText10 text={text} />
        <div className="flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[22px]">
          <p className="leading-[normal] text-nowrap">{text1}</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}

type BackgroundImage3Props = {
  text: string;
  text1: string;
  onClick?: () => void;
  isDarkMode?: boolean;
};

function BackgroundImage3({ text, text1, onClick, isDarkMode = false }: BackgroundImage3Props) {
  return (
    <BackgroundImage14 additionalClassNames="bg-[#ffe600]" onClick={onClick}>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[16px] relative size-full text-[#1a1a24] text-center text-nowrap">
        <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center relative shrink-0 text-[20px] tracking-[0.6px]" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="leading-[normal] text-nowrap">{text}</p>
        </div>
        <div className="flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[24px]">
          <p className="leading-[normal] text-nowrap">{text1}</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}

type BackgroundImageAndText9Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText9({ text, isDarkMode = false }: BackgroundImageAndText9Props) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#2e2e38]';
  
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0">
      <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[20px] text-nowrap tracking-[0.6px] transition-colors duration-300`}>{text}</p>
      <ChevronRightBackgroundImage1 isDarkMode={isDarkMode} />
    </div>
  );
}

type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0 size-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

type BackgroundImageAndText8Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText8({ text, isDarkMode = false }: BackgroundImageAndText8Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[26px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 618 1">
            <line id="Line 5" stroke="var(--stroke-0, #F2F2F2)" strokeOpacity={isDarkMode ? "0.03" : "1"} x2="618" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[18px] text-nowrap tracking-[0.54px]">{text}</p>
    </div>
  );
}

type BackgroundImageAndText6Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText6({ text, isDarkMode = false }: BackgroundImageAndText6Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#747480] rounded-[2px] shrink-0 size-[12px]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>{text}</p>
    </div>
  );
}

type BackgroundImageAndText5Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText5({ text, isDarkMode = false }: BackgroundImageAndText5Props) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#1a1a24] rounded-[2px] shrink-0 size-[12px]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>{text}</p>
    </div>
  );
}

type BackgroundImage1Props = {
  text: string;
  text1: string;
  isDarkMode?: boolean;
};

function BackgroundImage1({ text, text1, isDarkMode = false }: BackgroundImage1Props) {
  const numberColor = isDarkMode ? 'text-white' : 'text-[#2e2e38]';
  const unitColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';
  
  return (
    <div className="content-stretch flex gap-[1.812px] items-center justify-end relative shrink-0 w-[106.886px]">
      <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 ${numberColor} text-[20px] text-nowrap tracking-[0.6px] transition-colors duration-300`}>{text}</p>
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 ${unitColor} text-[18px] text-nowrap tracking-[0.54px] transition-colors duration-300`}>{text1}</p>
      <ChevronRightBackgroundImage1 />
    </div>
  );
}

function ChevronRightBackgroundImage1({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const strokeColor = isDarkMode ? '#fff' : '#747480';
  
  return (
    <BackgroundImage8 additionalClassNames="relative shrink-0 size-[24px]">
      <path d="M9 18L15 12L9 6" id="Vector" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ transition: 'stroke 300ms' }} />
    </BackgroundImage8>
  );
}

type BackgroundImageAndText4Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText4({ text, isDarkMode = false }: BackgroundImageAndText4Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#ffe600] rounded-[2px] shrink-0 size-[12px]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>{text}</p>
    </div>
  );
}

type BackgroundImageAndText3Props = {
  text: string;
  isDarkMode?: boolean;
};

function BackgroundImageAndText3({ text, isDarkMode = false }: BackgroundImageAndText3Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>{text}</p>
    </div>
  );
}

type BackgroundImageAndText2Props = {
  text: string;
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function BackgroundImageAndText2({ text, isDarkMode = false, isYellowCard = false }: BackgroundImageAndText2Props) {
  const textColor = isDarkMode
    ? (isYellowCard ? 'text-[#1a1a24]' : 'text-white')
    : 'text-[#1a1a24]';
    
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[22px] w-full transition-colors duration-300`}>{text}</p>
      <BackgroundImageAndText1 text="3" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function BackgroundImageAndText1({ text, isDarkMode = false, isYellowCard = false }: BackgroundImageAndText1Props) {
  const textColor = isDarkMode
    ? (isYellowCard ? 'text-[#1a1a24]' : 'text-white')
    : 'text-[#1a1a24]';
    
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <p className={`font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[32px] text-nowrap transition-colors duration-300`}>{text}</p>
      <BackgroundImage isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

type BackgroundImageProps = {
  additionalClassNames?: string;
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function BackgroundImage({ additionalClassNames = "", isDarkMode = false, isYellowCard = false }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[4px] py-0 relative shrink-0">
      <BackgroundImageAndText text="筆" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <ChevronRightBackgroundImage additionalClassNames="mr-[-4px] shrink-0" />
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function BackgroundImageAndText({ text, isDarkMode = false, isYellowCard = false }: BackgroundImageAndTextProps) {
  const textColor = isDarkMode
    ? (isYellowCard ? 'text-[#1a1a24]' : 'text-white')
    : 'text-[#1a1a24]';
    
  return (
    <div className="content-stretch flex flex-col items-center justify-center mr-[-4px] pb-[4px] pt-0 px-0 relative shrink-0 w-[24px]">
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 ${textColor} text-[16px] tracking-[0.48px] w-full transition-colors duration-300`}>{text}</p>
    </div>
  );
}

type ChevronRightBackgroundImageProps = {
  additionalClassNames?: string;
};

function ChevronRightBackgroundImage({ additionalClassNames = "" }: ChevronRightBackgroundImageProps) {
  return (
    <BackgroundImage8 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <path d="M9 17L15 11L9 5" id="Vector" stroke="var(--stroke-0, #747480)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage8>
  );
}

type ButtonBackgroundImageAndTextProps = {
  text: string;
  onClick?: () => void;
};

function ButtonBackgroundImageAndText({ text, onClick }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer group" onClick={onClick}>
      <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f6fa] group-hover:text-[#ffe600] text-[20px] transition-colors">{text}</p>
    </div>
  );
}

function PflLogo() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0" data-name="PFL_logo2022 2">
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">SCCG</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="button" onClick={onClick}>
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffe600] text-[20px] text-center text-nowrap tracking-[0.6px]">首頁</p>
      <div className="absolute bottom-[-32px] h-0 left-[0.27px] w-[110px]">
        <div className="absolute inset-[-6px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 12">
            <path d="M0 6H110" id="Vector 1325" stroke="var(--stroke-0, #FFE600)" strokeWidth="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer group" data-name="button">
      <p className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f6fa] group-hover:text-[#ffe600] text-[20px] transition-colors">弱點偵查</p>
      <BackgroundImage15>
        <div className="flex-none rotate-[90deg]">
          <ChevronRightBackgroundImage />
        </div>
      </BackgroundImage15>
      
      {/* 下拉選單 */}
      <div className="absolute top-full left-0 mt-[8px] w-[224px] bg-[#2e2e38] rounded-[8px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="flex flex-col">
          <div 
            className="px-[20px] py-[16px] border-b border-[#474756] cursor-pointer rounded-t-[8px] group/item"
            onClick={() => onNavigate?.('sbom-analysis')}
          >
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#f6f6fa] group-hover/item:text-[#ffe600] text-[20px] text-nowrap transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
              SBOM 弱點分析
            </p>
          </div>
          <div className="px-[20px] py-[16px] cursor-pointer rounded-b-[8px] group/item">
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] text-[#f6f6fa] group-hover/item:text-[#ffe600] text-[20px] text-nowrap transition-colors" style={{ fontVariationSettings: "'wght' 400" }}>
              情資追蹤
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Button onClick={() => onNavigate?.('home')} />
      <ButtonBackgroundImageAndText text="法令遵循定期評估作業" onClick={() => onNavigate?.('risk-assessment')} />
      <ButtonBackgroundImageAndText text="內部控制制度自行查核" />
      <ButtonBackgroundImageAndText text="題庫維護" onClick={() => onNavigate?.('question-bank')} />
    </div>
  );
}

function L() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#ffd000] transition-colors" data-name="按鈕(L)">
      <div className="flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal]">新增供應商</p>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="bell">
          <path d={svgPaths.p360c70e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          <path d={svgPaths.p29e38a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px] cursor-pointer hover:opacity-80 transition-opacity">
      <Bell />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">99+</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <L />
      </div>
      <Frame44 />
    </div>
  );
}

function Frame43({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame42 onNavigate={onNavigate} />
      <Frame62 />
    </div>
  );
}

function Frame41({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo />
      <Frame43 onNavigate={onNavigate} />
    </div>
  );
}

function Component({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-[#2e2e38] fixed top-0 left-0 right-0 z-50 w-full" data-name="首頁">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame41 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Frame({ onClick }: { onClick?: () => void }) {
  return (
    <BackgroundImage12 additionalClassNames="relative size-[24px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <g id="Frame">
        <g id="Vector">
          <path d="M6 9L12 15L18 9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </BackgroundImage12>
  );
}

type Frame19Props = {
  isExpanded: boolean;
  onToggle: () => void;
  isDarkMode?: boolean;
};

function Frame19({ isExpanded, onToggle, isDarkMode = false }: Frame19Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] ${textColor} text-nowrap tracking-[0.96px] transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>{`Hi Ace 您今天有 3 筆任務待處理 `}</p>
      <BackgroundImage15>
        <div className={clsx("flex-none transition-transform duration-300", isExpanded ? "rotate-0" : "rotate-[270deg]")}>
          <Frame onClick={onToggle} />
        </div>
      </BackgroundImage15>
    </div>
  );
}

type ToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

function Toggle({ isDarkMode, onToggle }: ToggleProps) {
  return (
    <div className="h-[29.798px] relative shrink-0 w-[127px] cursor-pointer" data-name="Toggle" onClick={onToggle}>
      <div className="relative w-full h-full overflow-hidden">
        {/* Background track */}
        <div 
          className="absolute left-[39.98px] top-[4.97px] w-[56.02px] h-[19.67px] rounded-[9.83px] transition-colors duration-300"
          style={{ backgroundColor: isDarkMode ? "#FFE600" : "#2E2E38" }}
        />
        {/* Circle */}
        <div 
          className="absolute top-0 w-[29.798px] h-[29.798px] transition-all duration-300 ease-in-out"
          style={{ left: isDarkMode ? "66.2px" : "37px" }}
        >
          <div 
            className="w-full h-full rounded-full transition-colors duration-300"
            style={{ backgroundColor: isDarkMode ? "#2E2E38" : "#BABABA" }}
          />
        </div>
        {/* Icons */}
        <svg className="absolute inset-0 pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 127 29.798">
          <g>
            <path d={svgPaths.p2ab84200} fill={isDarkMode ? "#FFE600" : "#2E2E38"} className="transition-colors duration-300" />
            <path d={svgPaths.p2322bdc0} fill={isDarkMode ? "#fff" : "#C4C4CD"} className="transition-colors duration-300" />
          </g>
        </svg>
      </div>
    </div>
  );
}

type Frame20Props = {
  isExpanded: boolean;
  onToggleExpanded: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

function Frame20({ isExpanded, onToggleExpanded, isDarkMode, onToggleDarkMode }: Frame20Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame19 isExpanded={isExpanded} onToggle={onToggleExpanded} isDarkMode={isDarkMode} />
      <Toggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[22px] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-4.55%_-9.09%_-9.09%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <g id="Group 1171276092">
            <path d={svgPaths.pff145b0} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Group 1171276100">
              <circle cx="17.9231" cy="17.9231" fill="var(--fill-0, #FFE600)" id="Ellipse 4302" r="6.07692" stroke="var(--stroke-0, #1A1A24)" strokeWidth="2" />
              <path d={svgPaths.p213b8980} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d="M6.74087 2.95993H15.5703" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3d467d00} id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p133ef600} id="Vector_5" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

type IconProps = {
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function Icon({ isDarkMode = false, isYellowCard = false }: IconProps) {
  const bgColor = isDarkMode
    ? (isYellowCard ? 'bg-[#1a1a24]' : 'bg-[#ffe600]')
    : 'bg-[#ffe600]';
    
  return (
    <div className={`${bgColor} relative rounded-[60px] shrink-0 size-[44px] transition-colors duration-300`} data-name="icon">
      <Group6 />
    </div>
  );
}

type Frame89Props = {
  isDarkMode?: boolean;
  isYellowCard?: boolean;
};

function Frame89({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  const textColor = isDarkMode
    ? (isYellowCard ? 'text-[#1a1a24]' : 'text-white')
    : 'text-[#1a1a24]';
    
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[22px] w-full transition-colors duration-300`}>問卷即將到期</p>
      <BackgroundImageAndText1 text="1" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Frame103({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <Frame89 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Button2({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <ButtonBackgroundImage isDarkMode={isDarkMode} isYellowCard={isYellowCard}>
      <Frame103 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <div className="absolute bg-[#ee762f] right-[10px] rounded-[8px] size-[14px] top-[10px]" />
    </ButtonBackgroundImage>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[31.82%] right-[36.36%] top-1/4" data-name="Group">
      <div className="absolute inset-[-4.55%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.001 24">
          <g id="Group">
            <path d="M9.11422 3.99999H7.30711" id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p16b22ae4} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute h-[12px] left-[19.74px] top-[16.74px] w-[14.001px]">
      <div className="absolute inset-[-8.33%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0191 14">
          <g id="Group 1171276098">
            <path d={svgPaths.p1606000} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Frame 1321316994">
              <path d="M8.27028 4.26083V8.26083" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2ecc4300} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[38.04%_23.32%_34.68%_44.86%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(50%+1.87px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Icon1({ isDarkMode = false, isYellowCard = false }: IconProps) {
  const bgColor = isDarkMode
    ? (isYellowCard ? 'bg-[#1a1a24]' : 'bg-[#ffe600]')
    : 'bg-[#ffe600]';
    
  return (
    <div className={`${bgColor} relative rounded-[60px] shrink-0 size-[44px] transition-colors duration-300`} data-name="icon">
      <Group9 />
    </div>
  );
}

function Frame90({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  const textColor = isDarkMode
    ? (isYellowCard ? 'text-[#1a1a24]' : 'text-white')
    : 'text-[#1a1a24]';
    
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 ${textColor} text-[22px] w-full transition-colors duration-300`}>填答情形追蹤</p>
      <BackgroundImageAndText1 text="2" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Frame104({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon1 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <Frame90 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Button3({ isDarkMode = false, isYellowCard = false, onClick }: Frame89Props & { onClick?: () => void }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <ButtonBackgroundImage isDarkMode={isDarkMode} isYellowCard={isYellowCard}>
        <Frame104 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
        <div className="absolute bg-[#ee762f] right-[10px] rounded-[8px] size-[14px] top-[10px]" />
      </ButtonBackgroundImage>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[27.73%] left-1/4 right-1/4 top-[27.27%]">
      <div className="absolute inset-[-5.05%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21.8">
          <g id="Group 1171276097">
            <path d={svgPaths.p26667780} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12 9.80004V16.4" id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8.70005 12L12.0001 9.79999" id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M15.2999 12L11.9999 9.79999" id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2({ isDarkMode = false, isYellowCard = false }: IconProps) {
  const bgColor = isDarkMode
    ? (isYellowCard ? 'bg-[#1a1a24]' : 'bg-[#ffe600]')
    : 'bg-[#ffe600]';
    
  return (
    <div className={`${bgColor} relative rounded-[60px] shrink-0 size-[44px] transition-colors duration-300`} data-name="icon">
      <Group10 />
    </div>
  );
}

function Frame105({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon2 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <BackgroundImageAndText2 text="待辦事項" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Button4({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <ButtonBackgroundImage isDarkMode={isDarkMode} isYellowCard={isYellowCard}>
      <Frame105 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </ButtonBackgroundImage>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[27.27%_22.73%_28.28%_27.27%]">
      <div className="absolute inset-[-5.11%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21.5556">
          <g id="Group 1171276095">
            <path d={svgPaths.p2dfe8700} id="Vector" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p15fc2100} id="Vector_2" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p50fff80} id="Vector_3" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Group 1171276099">
              <path d={svgPaths.p2e97e680} fill="var(--fill-0, #FFE600)" id="Vector_4" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1ea9f400} id="Vector_5" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2ba23e80} id="Vector_6" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d="M6.52666 2.27534H15.0291" id="Vector_7" stroke="var(--stroke-0, #1A1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3({ isDarkMode = false, isYellowCard = false }: IconProps) {
  const bgColor = isDarkMode
    ? (isYellowCard ? 'bg-[#1a1a24]' : 'bg-[#ffe600]')
    : 'bg-[#ffe600]';
    
  return (
    <div className={`${bgColor} relative rounded-[60px] shrink-0 size-[44px] transition-colors duration-300`} data-name="icon">
      <Group8 />
    </div>
  );
}

function Frame107({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0">
      <Icon3 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
      <BackgroundImageAndText2 text="逾期事項" isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </div>
  );
}

function Button5({ isDarkMode = false, isYellowCard = false }: Frame89Props) {
  return (
    <ButtonBackgroundImage isDarkMode={isDarkMode} isYellowCard={isYellowCard}>
      <Frame107 isDarkMode={isDarkMode} isYellowCard={isYellowCard} />
    </ButtonBackgroundImage>
  );
}

type TodolistProps = {
  isExpanded: boolean;
  isDarkMode?: boolean;
  onNavigate?: (page: string) => void;
};

function Todolist({ isExpanded, isDarkMode = false, onNavigate, showFillTracking = false }: TodolistProps & { showFillTracking?: boolean }) {
  return (
    <DraggableScroll className="w-[1360px]">
      <div className="content-stretch flex gap-[32px] items-center pb-0 pt-[20px] px-0 relative shrink-0" data-name="todolist" style={{ width: 'max-content' }}>
        <InventoryCard isDarkMode={isDarkMode} />
        {showFillTracking ? <Button3 isDarkMode={isDarkMode} /> : null}
        <Button4 isDarkMode={isDarkMode} />
      </div>
    </DraggableScroll>
  );
}

type Frame45Props = {
  isExpanded: boolean;
  onToggleExpanded: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate?: (page: string) => void;
};

function Frame45({ isExpanded, onToggleExpanded, isDarkMode, onToggleDarkMode, onNavigate, showFillTracking = false }: Frame45Props & { showFillTracking?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1360px]">
      <Frame20 isExpanded={isExpanded} onToggleExpanded={onToggleExpanded} isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Todolist isExpanded={isExpanded} isDarkMode={isDarkMode} onNavigate={onNavigate} showFillTracking={showFillTracking} />
    </div>
  );
}

// Continue with charts and remaining components...
function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[18px] text-center text-nowrap tracking-[0.54px]">即時供應商風險分佈</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Group3({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <BackgroundImage6>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #1A1A24)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #747480)" id="Ellipse 4277" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-3-outside-1_2_3911" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #FFE600)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-3-outside-1_2_3911)" stroke="var(--stroke-0, #FFF383)" strokeOpacity="0.16" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill={isDarkMode ? "#272731" : "white"} id="Ellipse 4300" r="72.1364" />
    </BackgroundImage6>
  );
}

function Frame22({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group3 isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame65Props = {
  isDarkMode?: boolean;
};

function Frame65({ isDarkMode = false }: Frame65Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame22 isDarkMode={isDarkMode} />
      <BackgroundImageAndText3 text="共 192 家" isDarkMode={isDarkMode} />
    </div>
  );
}

type Button6Props = {
  isDarkMode?: boolean;
};

function Button6({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText4 text="高風險" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="28" text1="家" isDarkMode={isDarkMode} />
    </div>
  );
}

function Button7({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText5 text="中風險" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="60" text1="家" isDarkMode={isDarkMode} />
    </div>
  );
}

function Button8({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText6 text="低風險" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="104" text1="家" isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame3Props = {
  isDarkMode?: boolean;
};

function Frame3({ isDarkMode = false }: Frame3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Button6 isDarkMode={isDarkMode} />
      <Button7 isDarkMode={isDarkMode} />
      <Button8 isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame63Props = {
  isDarkMode?: boolean;
};

function Frame63({ isDarkMode = false }: Frame63Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame38 />
      <Frame65 isDarkMode={isDarkMode} />
      <Frame3 isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame27Props = {
  isDarkMode?: boolean;
};

function Frame27({ isDarkMode = false }: Frame27Props) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  
  return (
    <div className={`${bgColor} content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shrink-0 transition-colors duration-300`}>
      <Frame63 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <BackgroundImageAndText7 text="弱點偵查狀態分佈" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame35 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Group4({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <BackgroundImage6>
      <path d={svgPaths.pf458000} fill="var(--fill-0, #1A1A24)" id="Ellipse 4275" />
      <path d={svgPaths.p16a93800} fill="var(--fill-0, #747480)" id="Ellipse 4277" />
      <path d={svgPaths.p1c0f2080} fill="var(--fill-0, #C4C4CD)" id="Ellipse 4301" />
      <g id="Ellipse 4276">
        <mask fill="black" height="105" id="path-4-outside-1_2_3894" maskUnits="userSpaceOnUse" width="140" x="115" y="120">
          <rect fill="white" height="105" width="140" x="115" y="120" />
          <path d={svgPaths.p2778aa00} />
        </mask>
        <path d={svgPaths.p2778aa00} fill="var(--fill-0, #FFE600)" />
        <path d={svgPaths.p2778aa00} mask="url(#path-4-outside-1_2_3894)" stroke="var(--stroke-0, #FFF383)" strokeOpacity="0.16" strokeWidth="8.33333" />
      </g>
      <circle cx="126.389" cy="125" fill={isDarkMode ? "#272731" : "white"} id="Ellipse 4300" r="72.1364" />
    </BackgroundImage6>
  );
}

function Frame23({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex items-center px-0 py-px relative shrink-0 w-[250px]">
      <Group4 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame66({ isDarkMode = false }: Frame65Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame23 isDarkMode={isDarkMode} />
      <BackgroundImageAndText3 text="共 204 筆" isDarkMode={isDarkMode} />
    </div>
  );
}

function Button9({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText4 text="已逾期" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="15" text1="筆" isDarkMode={isDarkMode} />
    </div>
  );
}

function Button10({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText5 text="尚未處理" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="95" text1="筆" isDarkMode={isDarkMode} />
    </div>
  );
}

function Button11({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <BackgroundImageAndText6 text="處理中" isDarkMode={isDarkMode} />
      <BackgroundImage1 text="74" text1="筆" isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame4Props = {
  isDarkMode?: boolean;
};

function Frame4({ isDarkMode = false }: Frame4Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <div className="bg-[#c4c4cd] rounded-[2px] shrink-0 size-[12px]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>已處理</p>
    </div>
  );
}

function Button12({ isDarkMode = false }: Button6Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="button">
      <Frame4 isDarkMode={isDarkMode} />
      <BackgroundImage1 text="20" text1="筆" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame5({ isDarkMode = false }: Frame3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[14.493px] items-center relative shrink-0 w-full">
      <Button9 isDarkMode={isDarkMode} />
      <Button10 isDarkMode={isDarkMode} />
      <Button11 isDarkMode={isDarkMode} />
      <Button12 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame64({ isDarkMode = false }: Frame63Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame61 />
      <Frame66 isDarkMode={isDarkMode} />
      <Frame5 isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame29Props = {
  isDarkMode?: boolean;
};

function Frame29({ isDarkMode = false }: Frame29Props) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  
  return (
    <div className={`${bgColor} content-stretch flex items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shrink-0 transition-colors duration-300`}>
      <Frame64 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <BackgroundImageAndText7 text="現行供應商類別分析" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-1/4 left-[35%] right-[40%] top-1/4">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
          <g id="Group 1171275997">
            <path d={svgPaths.p35ac1680} id="Vector" stroke="var(--stroke-0, #2E2E38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="overflow-clip relative size-[20px]" data-name="箭頭">
      <Group2 />
    </div>
  );
}

type Frame47Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
};

function Frame47({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange }: Frame47Props) {
  return (
    <div className="absolute right-0 top-[calc(50%+0.5px)] translate-y-[-50%] z-[100]">
      <div className="relative">
        <div className="bg-[#f6f6fa] content-stretch flex h-[33px] items-center justify-center pl-[12px] pr-[8px] py-[6px] rounded-[4px] cursor-pointer hover:bg-[#ececf3] transition-colors" onClick={onToggleYearDropdown}>
          <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#2e2e38] text-[16px] text-center text-nowrap tracking-[0.48px]">{selectedYear}</p>
          <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className={clsx("flex-none transition-transform duration-300", isYearDropdownOpen ? "rotate-[270deg]" : "rotate-[90deg]")}>
              <Component1 />
            </div>
          </div>
        </div>
        {isYearDropdownOpen && (
          <div className="absolute right-0 top-[calc(100%+4px)] bg-white border border-[#f2f2f2] rounded-[4px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.15)] z-[200] min-w-[100px] max-h-[300px] overflow-y-auto">
            {years.map((year) => (
              <div
                key={year}
                className={clsx(
                  "px-[16px] py-[10px] cursor-pointer transition-colors",
                  year === selectedYear ? "bg-[#ffe600] text-[#1a1a24]" : "bg-white hover:bg-[#f6f6fa] text-[#2e2e38]"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onYearChange(year);
                  onToggleYearDropdown();
                }}
              >
                <p className="font-['EYInterstate:Bold',sans-serif] leading-[23px] not-italic text-[16px] text-center text-nowrap tracking-[0.48px]">
                  {year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type Frame40Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
};

function Frame40({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange }: Frame40Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame36 />
      <Frame47 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
      />
    </div>
  );
}

// Chart bars
function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame72 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">1月</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[11px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[6px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[111px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[19px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame85 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">2月</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[4px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[34px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[25px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame86 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">3月</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[10px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[52px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame88 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">4月</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[64px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[32px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[26px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[18px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame91 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">5月</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[31px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[6px] rounded-[4px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[66px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame94 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">6月</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#ffe600] h-[15px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[116px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame95 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">7月</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[5px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[51px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame96 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">8月</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[30px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[67px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[12px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame97 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">9月</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[18px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[29px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[8px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center opacity-[0.45] relative shrink-0">
      <Frame98 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">10月</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="bg-[#8f8100] h-[90px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#ffe600] h-[13px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#1a1a24] h-[22px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#c4c4cd] h-[38px] rounded-[2px] shrink-0 w-[20px]" />
      <div className="bg-[#747480] h-[36px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[20px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame99 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-center text-white w-[30px]">11月</p>
    </div>
  );
}

function Frame100() {
  return <div className="h-[157px] shrink-0 w-[20px]" />;
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center opacity-[0.45] relative shrink-0">
      <Frame100 />
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[13px] text-center w-[30px]">12月</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex items-end justify-between left-[45px] w-[581px]">
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-[9px] contents left-[45px]">
      <div className="absolute bottom-[9px] h-[23px] right-[71px] rounded-[20px] w-[43px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} />
      <Frame101 />
    </div>
  );
}

function Frame102({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex flex-col h-[325px] items-start justify-between relative shrink-0 w-[652px]">
      <BackgroundImageAndText8 text="100" isDarkMode={isDarkMode} />
      <BackgroundImageAndText8 text="80" isDarkMode={isDarkMode} />
      <BackgroundImageAndText8 text="60" isDarkMode={isDarkMode} />
      <BackgroundImageAndText8 text="40" isDarkMode={isDarkMode} />
      <BackgroundImageAndText8 text="20" isDarkMode={isDarkMode} />
      <BackgroundImageAndText8 text="0" isDarkMode={isDarkMode} />
      <Group17 />
    </div>
  );
}

function Frame6({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#747480]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>系統開發</p>
    </div>
  );
}

function Frame13({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <Frame6 isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="16" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame7({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#c4c4cd]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>系統維護</p>
    </div>
  );
}

function Frame14({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <Frame7 isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="14" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame8({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#1a1a24]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>系統整合</p>
    </div>
  );
}

function Frame15({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <Frame8 isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="7" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame9({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame13 isDarkMode={isDarkMode} />
      <Frame14 isDarkMode={isDarkMode} />
      <Frame15 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame10({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#ffe600]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>設備操作</p>
    </div>
  );
}

function Frame16({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <Frame10 isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="5" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame11({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#fff]' : 'text-[#1a1a24]';

  return (
    <div className="content-stretch flex gap-[3.623px] items-center relative shrink-0">
      <BackgroundImage2 additionalClassNames="bg-[#8f8100]" />
      <p className={`font-['EYInterstate:Regular',sans-serif] leading-[1.3] not-italic relative ${textColor} text-[18px] break-words tracking-[0.54px] transition-colors duration-300`}>硬體維護</p>
    </div>
  );
}

function Frame17({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <Frame11 isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="22" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame18({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <BackgroundImageAndText5 text="備份與備援服務" isDarkMode={isDarkMode} />
      <BackgroundImageAndText9 text="7" isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame87({ isDarkMode = false }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Frame16 isDarkMode={isDarkMode} />
      <Frame17 isDarkMode={isDarkMode} />
      <Frame18 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame106({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const bgColor = isDarkMode ? 'bg-transparent' : 'bg-[#ececf3]';
  
  return (
    <div className={`${bgColor} relative rounded-[4px] shrink-0 w-full transition-colors duration-300`}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame9 isDarkMode={isDarkMode} />
        <Frame87 isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

type Frame28Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Frame28({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Frame28Props) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  
  return (
    <div className={`absolute ${bgColor} content-stretch flex flex-col gap-[16px] inset-0 items-start overflow-clip p-[24px] rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] transition-colors duration-300`}>
      <Frame40 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
      />
      <Frame102 isDarkMode={isDarkMode} />
      <Frame106 isDarkMode={isDarkMode} />
    </div>
  );
}

type Group5Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Group5({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Group5Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <Frame28 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

type Frame67Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Frame67({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Frame67Props) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame27 isDarkMode={isDarkMode} />
      <Frame29 isDarkMode={isDarkMode} />
      <Group5 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

type Frame68Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Frame68({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Frame68Props) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <SupplierRiskAnalysis isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame93Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Frame93({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Frame93Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame68 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

type Frame46Props = {
  selectedYear: number;
  isYearDropdownOpen: boolean;
  onToggleYearDropdown: () => void;
  years: number[];
  onYearChange: (year: number) => void;
  isDarkMode?: boolean;
};

function Frame46({ selectedYear, isYearDropdownOpen, onToggleYearDropdown, years, onYearChange, isDarkMode = false }: Frame46Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1360px]">
      <Frame93 
        selectedYear={selectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={onToggleYearDropdown}
        years={years}
        onYearChange={onYearChange}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

// Simplified table components for vendors progress
type Frame69Props = {
  isDarkMode?: boolean;
};

function Frame69({ isDarkMode = false }: Frame69Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1360px]">
      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] ${textColor} text-nowrap tracking-[0.96px] transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>
        <span style={{ fontVariationSettings: "'wght' 700" }}>問卷填答情形總</span>覽<span style={{ fontVariationSettings: "'wght' 700" }}> </span>{" "}
      </p>
    </div>
  );
}

function Frame21({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? 'text-[#707070]' : 'text-[#707070]';
  const numberColor = isDarkMode ? 'text-[#747480]' : 'text-[#747480]';
  
  return (
    <BackgroundImage14 onClick={() => alert('已結案 3 clicked')}>
      <div className="content-stretch flex gap-[6px] items-center justify-center leading-[0] min-w-[inherit] px-[20px] py-[12px] relative size-full text-center text-nowrap">
        <BackgroundImageAndText10 text="已結案" additionalClassNames={textColor} />
        <div className={`flex flex-col font-['EYInterstate:Regular',sans-serif] justify-center not-italic relative shrink-0 ${numberColor} text-[22px]`}>
          <p className="leading-[normal] text-nowrap">3</p>
        </div>
      </div>
    </BackgroundImage14>
  );
}

type TabProps = {
  isDarkMode?: boolean;
};

function Tab({ isDarkMode = false }: TabProps) {
  const bgColor = isDarkMode ? 'bg-transparent' : 'bg-[#f6f6fa]';
  
  return (
    <div className={`${bgColor} content-stretch flex items-start overflow-clip relative shrink-0 w-full transition-colors duration-300`} data-name="Tab樣式">
      <BackgroundImage3 text="開案前" text1="6" onClick={() => alert('開案前 6 clicked')} isDarkMode={isDarkMode} />
      <BackgroundImage4 text="委託中" text1="6" onClick={() => alert('委託中 6 clicked')} isDarkMode={isDarkMode} />
      <Frame21 isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame110({ isDarkMode = false }: TabProps) {
  return (
    <BackgroundImage9 isDarkMode={isDarkMode}>
      <ButtonBackgroundImageAndText1 text="資訊服務委外風險評估 (3)" onClick={() => alert('資訊服務委外風險評估 clicked')} />
      <ButtonBackgroundImageAndText2 text="填寫供應商風險評估與情資追蹤" onClick={() => alert('填寫供應商風險評估與情資追蹤 clicked')} />
      <ButtonBackgroundImageAndText2 text="供應商資料檢核與歸檔 (1)" onClick={() => alert('供應商資料檢核與歸檔 clicked')} />
    </BackgroundImage9>
  );
}

// Simplified vendor table
function SimplifiedVendorTable({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const headerBg = isDarkMode ? 'bg-[#747480]' : 'bg-[#f6f6fa]';
  const headerTextColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';
  const cellBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const cellHoverBg = isDarkMode ? 'hover:bg-[rgba(255,255,255,0.18)]' : 'hover:bg-[#f6f6fa]';
  const cellTextColor = isDarkMode ? 'text-white' : 'text-[#222]';
  const editTextColor = isDarkMode ? 'text-white' : 'text-[#1a1a24]';
  
  return (
    <div className="relative rounded-[8px] shrink-0 w-full overflow-x-auto">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-[16px] relative w-full min-w-[1360px]">
          <div className="flex flex-col w-full">
            {/* Table header */}
            <div className={`flex ${headerBg} transition-colors duration-300`}>
              <div className="w-[340px] p-[15px]">
                <p className={`font-['EYInterstate:Bold',sans-serif] text-[16px] ${headerTextColor} transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>專案名稱</p>
              </div>
              <div className="w-[296px] p-[15px]">
                <p className={`font-['EYInterstate:Bold',sans-serif] text-[16px] ${headerTextColor} transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>申請供應商</p>
              </div>
              <div className="w-[484px] p-[15px] text-center">
                <p className={`font-['EYInterstate:Bold',sans-serif] text-[16px] ${headerTextColor} transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>期限</p>
              </div>
              <div className="flex-1 p-[15px] text-center">
                <p className={`font-['EYInterstate:Bold',sans-serif] text-[16px] ${headerTextColor} transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>操作</p>
              </div>
            </div>
            {/* Table rows */}
            {[
              { project: "2026年度官網視覺化改版專案", vendor: "奧美廣告股份有限公司", date: "2025.11.01" },
              { project: "2026 AI 智能客服系統 v1.0", vendor: "碩網資訊股份有限公司", date: "2025.11.10" },
              { project: "集團人資系統上雲端服務採購案", vendor: "叡揚資訊股份有限公司", date: "2025.11.12" },
              { project: "企業資安防護系統升級案", vendor: "中華電信股份有限公司", date: "2025.11.15" },
              { project: "商業智慧 (BI) 平台建置案", vendor: "IBM", date: "2025.11.22" },
            ].map((row, i) => (
              <div key={i} className={`flex border-b border-[#d2dae6] ${cellBg} ${cellHoverBg} transition-colors duration-300`}>
                <div className="w-[340px] p-[15px]">
                  <p className={`text-[16px] ${cellTextColor} transition-colors duration-300`}>{row.project}</p>
                </div>
                <div className="w-[296px] p-[15px]">
                  <p className={`text-[16px] ${cellTextColor} transition-colors duration-300`}>{row.vendor}</p>
                </div>
                <div className="w-[484px] p-[15px] text-center">
                  <p className={`text-[16px] ${cellTextColor} transition-colors duration-300`}>{row.date}</p>
                </div>
                <div className="flex-1 p-[15px] flex gap-[16px] items-center justify-end">
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <p className={`text-[15px] ${editTextColor} underline transition-colors duration-300`}>編輯</p>
                  </div>
                  <div className="bg-[#ffe600] px-[12px] py-[8px] rounded-[4px] cursor-pointer hover:bg-[#ffd000] transition-colors">
                    <p className="text-[15px] text-[#1a1a24]">已批准</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type Component2Props = {
  isDarkMode?: boolean;
};

function Component2({ isDarkMode = false }: Component2Props) {
  const bgColor = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  
  return (
    <div className={`${bgColor} content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[1360px] transition-colors duration-300`} data-name="供應商進度總覽">
      <Tab isDarkMode={isDarkMode} />
      <Frame110 isDarkMode={isDarkMode} />
      <SimplifiedVendorTable isDarkMode={isDarkMode} />
    </div>
  );
}

type Frame92Props = {
  isDarkMode?: boolean;
};

function Frame92({ isDarkMode = false }: Frame92Props) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame69 isDarkMode={isDarkMode} />
      <div className="shrink-0 w-[1360px] self-start">
        <SupplierProgressOverview isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

// Simplified risk management table
function SimplifiedRiskTable({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const headerBg = isDarkMode ? 'bg-[#747480]' : 'bg-[#f6f6fa]';
  const headerTextColor = isDarkMode ? 'text-[#ffffff]' : 'text-[#747480]';
  const cellBg = isDarkMode ? 'bg-[rgba(255,255,255,0.12)]' : 'bg-white';
  const cellHoverBg = isDarkMode ? 'hover:bg-[rgba(255,255,255,0.18)]' : 'hover:bg-[#f6f6fa]';
  const cellTextColor = isDarkMode ? 'text-[#ffffff]' : 'text-[#222]';
  
  return (
    <div className="relative rounded-[8px] shrink-0 w-full overflow-x-auto">
      <div className="flex flex-col w-full min-w-[1360px]">
        {/* Table header */}
        <div className={`flex ${headerBg} transition-colors duration-300`}>
          <div className="w-[130px] p-[15px]">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>案件編號</p>
          </div>
          <div className="w-[193px] p-[15px]">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>供應商名稱</p>
          </div>
          <div className="w-[225px] p-[15px] text-center">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>專案名稱</p>
          </div>
          <div className="w-[464px] p-[15px] text-center">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>弱點描述</p>
          </div>
          <div className="w-[124px] p-[15px] text-center">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>期限</p>
          </div>
          <div className="flex-1 p-[15px] text-center">
            <p className={`font-['EYInterstate:Regular',sans-serif] text-[13px] ${headerTextColor}`}>版本狀態</p>
          </div>
        </div>
        {/* Table rows */}
        {[
          { id: "BC001", vendor: "中菲行國際物流", project: "MyDimerco 貨運管理系統", vuln: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)", date: "2025.11.01", status: "已逾期" },
          { id: "BC002", vendor: "中華電信", project: "hicloud 雲端服務 API", vuln: "偵測到 Log4j 重大安全漏洞 (CVE-2021-44228)", date: "2025.11.10", status: "處理中" },
          { id: "BC003", vendor: "Appier 沛星互動科技", project: "客戶數據平台 (CDP)", vuln: "程式碼執行漏洞 (RCE) - (CVE-2025-12345)", date: "2025.11.12", status: "處理中" },
        ].map((row, i) => (
          <div key={i} className={`flex border-b border-[#d2dae6] ${i === 0 ? 'bg-[#ec5242]' : `${cellBg} ${cellHoverBg}`} transition-colors`}>
            <div className="w-[130px] p-[15px]">
              <p className={clsx("text-[16px] text-center", i === 0 ? "text-[#ffffff]" : cellTextColor)}>{row.id}</p>
            </div>
            <div className="w-[193px] p-[15px]">
              <p className={clsx("text-[16px]", i === 0 ? "text-[#ffffff]" : cellTextColor)}>{row.vendor}</p>
            </div>
            <div className="w-[225px] p-[15px]">
              <p className={clsx("text-[16px]", i === 0 ? "text-[#ffffff]" : cellTextColor)}>{row.project}</p>
            </div>
            <div className="w-[464px] p-[15px]">
              <p className={clsx("text-[16px]", i === 0 ? "text-[#ffffff]" : cellTextColor)}>{row.vuln}</p>
            </div>
            <div className="w-[124px] p-[15px] text-center">
              <p className={clsx("text-[16px]", i === 0 ? "text-[#ffffff]" : cellTextColor)}>{row.date}</p>
            </div>
            <div className="flex-1 p-[15px] flex items-center justify-center">
              {i === 0 ? (
                <div className="flex gap-[4px] items-center">
                  <div className="size-[14px] rounded-full bg-[#ffffff] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                      <path d="M10.2631 4.19902L4.20098 10.2611" stroke="#ec5242" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.20098 4.19902L10.2631 10.2611" stroke="#ec5242" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] text-[#ffffff]">{row.status}</p>
                </div>
              ) : (
                <div className="flex gap-[4px] items-center">
                  <div className="size-[14px] rounded-full bg-[#ffe600]" />
                  <p className={clsx("text-[16px]", cellTextColor)}>{row.status}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Plus() {
  return (
    <BackgroundImage12 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="plus">
        <path d="M12 5V19" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5 12H19" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage12>
  );
}

function L3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="按鈕(L)" onClick={() => alert('新增 clicked')}>
      <p className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline">新增</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Plus />
        <L3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Frame26 />
    </div>
  );
}

type Frame71Props = {
  isDarkMode?: boolean;
};

function Frame71({ isDarkMode = false }: Frame71Props) {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <p className={`font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] ${textColor} text-nowrap tracking-[0.96px] transition-colors duration-300`} style={{ fontVariationSettings: "'wght' 700" }}>
        供應商風險管理事項進度追蹤
      </p>
      <Container />
    </div>
  );
}

function Tab1({ isDarkMode = false }: TabProps) {
  const bgColor = isDarkMode ? 'bg-transparent' : 'bg-[#f6f6fa]';
  
  return (
    <div className={`${bgColor} content-stretch flex items-start overflow-clip relative shrink-0 w-full transition-colors duration-300`} data-name="Tab樣式">
      <BackgroundImage3 text="系統弱點偵測" text1="9" onClick={() => alert('系統弱點偵測 9 clicked')} isDarkMode={isDarkMode} />
      <BackgroundImage4 text="供應商定期風險評估" text1="10" onClick={() => alert('供應商定期風險評估 10 clicked')} isDarkMode={isDarkMode} />
      <BackgroundImage4 text="供應商情資" text1="10" onClick={() => alert('供應商情資 10 clicked')} isDarkMode={isDarkMode} />
    </div>
  );
}

function Frame111({ isDarkMode = false }: TabProps) {
  return (
    <BackgroundImage9 isDarkMode={isDarkMode}>
      <ButtonBackgroundImageAndText1 text="全部 (9)" onClick={() => alert('全部 clicked')} />
      <ButtonBackgroundImageAndText2 text="尚未處理 (2)" onClick={() => alert('尚未處理 clicked')} />
      <ButtonBackgroundImageAndText2 text="處理中 (3)" onClick={() => alert('處理中 clicked')} />
      <ButtonBackgroundImageAndText2 text="已處理 (3)" onClick={() => alert('已處理 clicked')} />
      <ButtonBackgroundImageAndText2 text="已逾期 (1)" onClick={() => alert('已逾期 clicked')} />
    </BackgroundImage9>
  );
}

type Component3Props = {
  isDarkMode?: boolean;
};

function Component3({ isDarkMode = false }: Component3Props) {
  return <VendorRiskProgressTracking />;
}

export default function Frame1321316927({
  selectedYear,
  onYearChange,
  isYearDropdownOpen,
  onToggleYearDropdown,
  isDarkMode,
  onToggleDarkMode,
  years,
  onNavigate,
  showQuestionnaireOverview = false,
}: Frame1321316927Props) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col pb-0 pt-[150px] transition-colors duration-300 ${isDarkMode ? 'bg-[#1A1A24]' : 'bg-[#f6f6fa]'}`}>
      <Header onNavigate={onNavigate} currentPage="home" />
      <div className="flex flex-col flex-1 items-center px-[32px] pt-[32px] pb-[32px] gap-[32px] w-full max-w-[1920px] mx-auto">
        <Frame45
          isExpanded={isExpanded}
          onToggleExpanded={() => setIsExpanded(!isExpanded)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={onToggleDarkMode}
          onNavigate={onNavigate}
          showFillTracking={showQuestionnaireOverview}
        />
        <QuestionnaireWorkPanel />
        <QuestionnaireDraftPanel />
        {showQuestionnaireOverview ? (
          <Frame46
            selectedYear={selectedYear}
            isYearDropdownOpen={isYearDropdownOpen}
            onToggleYearDropdown={onToggleYearDropdown}
            years={years}
            onYearChange={onYearChange}
            isDarkMode={isDarkMode}
          />
        ) : null}
        {showQuestionnaireOverview ? <Frame92 isDarkMode={isDarkMode} /> : null}
      </div>
      <Footer />
    </div>
  );
}
