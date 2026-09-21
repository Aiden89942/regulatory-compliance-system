import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-jf1o8f6mms";
import svgPathsUpload from "../../imports/svg-mqlh7rzdxa";
import svgPathsResult from "../../imports/svg-gcvzj5atpx";
import svgPathsBell from "../../imports/svg-wqgu7yw5i1";
import clsx from "clsx";
import { AnalysisRecord } from "./AnalysisHistory";
import Header from "./Header";
import Footer from "./Footer";
import VendorDropdown from "./VendorDropdown";
import Breadcrumb from "./Breadcrumb";

interface SbomAnalysisInteractiveProps {
  onNavigate: (page: string) => void;
  onSaveRecord: (record: AnalysisRecord) => void;
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] p-[16px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        {children}
      </svg>
    </div>
  );
}

type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({
  text,
  additionalClassNames = "",
}: HeaderCellTextProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex items-center px-[24px] py-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <p
        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[23px] relative shrink-0 text-[#1a1a24] text-[16px] text-nowrap tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 700" }}
      >
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-[80px]">
      <div className="absolute inset-[-0.75px_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 1.5"
        >
          <path
            d="M0 0.75H80"
            id="Vector 1318"
            stroke="var(--stroke-0, #949494)"
            strokeDasharray="3 3"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p
        className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#747480] text-[16px] text-center tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        {text}
      </p>
    </div>
  );
}

type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper>
        <circle
          cx="30"
          cy="30"
          id="Ellipse 4257"
          r="29.25"
          stroke="var(--stroke-0, #C4C4CD)"
          strokeWidth="1.5"
        />
      </Wrapper>
      <p className="[grid-area:1_/_1] font-['EYInterstate:Regular',sans-serif] leading-[normal] ml-[23px] mt-[17px] not-italic relative text-[#747480] text-[22px] text-nowrap">
        {text}
      </p>
    </div>
  );
}

type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div
      style={{ fontVariationSettings: "'wght' 700" }}
      className={clsx(
        "flex flex-col font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.54px]",
        additionalClassNames,
      )}
    >
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}

type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer group">
      <p
        className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] group-hover:text-[#ffe600] text-[20px] transition-colors"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        {text}
      </p>
    </div>
  );
}

function PflLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center overflow-clip px-0 py-[2px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      data-name="PFL_logo2022 2"
      onClick={onClick}
    >
      <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white">
        SCCG
      </p>
    </div>
  );
}

function Frame8({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      onClick={onClick}
    >
      <p
        className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[20px] text-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        首頁
      </p>
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute left-[calc(50%-0.37px)] size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="bell">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g id="bell">
          <path
            d={svgPathsBell.p360c70e0}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.2"
          />
          <path
            d={svgPathsBell.p29e38a80}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.2"
          />
        </g>
      </svg>
    </div>
  );
}

function NotificationIcon() {
  return (
    <div className="h-[64px] relative rounded-[8px] shrink-0 w-[59.267px]">
      <Bell />
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="absolute bg-[#ee762f] content-stretch flex items-center justify-center px-[6px] py-[3px] right-0 rounded-[18.116px] top-0">
      <p className="font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.42px]">
        99+
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative rounded-[24px] shrink-0">
      <NotificationIcon />
      <NotificationBadge />
    </div>
  );
}

function AddVendorButton() {
  return (
    <div className="bg-[#ffe600] content-stretch flex h-full items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="按鈕(L)">
      <Text1 text="新增供應商" additionalClassNames="text-[#1a1a24]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <AddVendorButton />
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-right">
          <path
            d="M9 17L15 11L9 5"
            id="Vector"
            stroke="var(--stroke-0, #FFE600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="min-w-[110px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#939393] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Wrapper1>
        <p
          className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#ffe600] text-[20px]"
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          SBOM 弱點分析
        </p>
      </Wrapper1>
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-w-[110px] relative rounded-[32px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
      <Wrapper1>
        <p
          className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f6f6fa] text-[20px]"
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          情資追蹤
        </p>
      </Wrapper1>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#1a1a24] content-stretch flex flex-col items-center left-[0.27px] px-0 py-[4px] rounded-[8px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08)] top-[98px] w-[224px]">
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Frame11({ showDropdown, onMouseEnter, onMouseLeave }: { showDropdown: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[110px] px-[16px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer">
        <p
          className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ffe600] text-[20px] text-center tracking-[0.6px]"
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          弱點偵測
        </p>
        <div className="relative size-[24px] shrink-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="chevron-down">
              <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #FFE600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-[-31px] h-0 left-[calc(50%+0.27px)] translate-x-[-50%] w-[140px]">
          <div className="absolute inset-[-6px_0]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 140 12"
            >
              <path
                d="M0 6H140"
                id="Vector 1325"
                stroke="var(--stroke-0, #FFE600)"
                strokeWidth="12"
              />
            </svg>
          </div>
        </div>
      </div>
      {showDropdown && <Frame25 />}
    </div>
  );
}

function Frame19({ onNavigate, showDropdown, onMouseEnter, onMouseLeave }: { onNavigate?: (page: string) => void; showDropdown: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <Frame8 onClick={() => onNavigate?.("home")} />
      <Text text="風險評估" />
      <Text text="供應商管理" />
      <Frame11
        showDropdown={showDropdown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Text text="管理報表" />
    </div>
  );
}

function Frame20({ onNavigate, showDropdown, onMouseEnter, onMouseLeave }: { onNavigate?: (page: string) => void; showDropdown: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame19 onNavigate={onNavigate} showDropdown={showDropdown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <Frame21 />
    </div>
  );
}

function Frame18({ onNavigate, showDropdown, onMouseEnter, onMouseLeave }: { onNavigate?: (page: string) => void; showDropdown: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1376px]">
      <PflLogo onClick={() => onNavigate?.("home")} />
      <Frame20 onNavigate={onNavigate} showDropdown={showDropdown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </div>
  );
}

function Component({ onNavigate, showDropdown, onMouseEnter, onMouseLeave }: { onNavigate?: (page: string) => void; showDropdown: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="bg-[#2e2e38] fixed top-0 left-0 right-0 z-50 w-full"
      data-name="首頁"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[32px] relative w-full">
          <Frame18 onNavigate={onNavigate} showDropdown={showDropdown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="h-[19px] shrink-0 w-[99px]" />;
}

function L1({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-end pl-[4px] pr-0 py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="按鈕(L)"
      onClick={onClick}
    >
      <p
        className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        查看分析紀錄
      </p>
    </div>
  );
}

function Frame14({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <L1 onClick={onClick} />
    </div>
  );
}

function Frame15({ onViewHistory }: { onViewHistory?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p
        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap tracking-[0.96px]"
        style={{ fontVariationSettings: "'wght' 700" }}
      >{`SBOM 弱點分析 `}</p>
      <Frame13 />
      <Frame14 onClick={onViewHistory} />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper>
        <circle
          cx="30"
          cy="30"
          fill="var(--fill-0, #FFE600)"
          id="Ellipse 4257"
          r="30"
        />
      </Wrapper>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p
        className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 700" }}
      >
        1.上傳 SBOM 檔案
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Group />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="2" />
      <Text3 text="2.檔案分析" />
    </div>
  );
}

// Step indicators with state
interface StepIndicatorProps {
  hasFiles: boolean;
  isAnalyzing?: boolean;
  isCompleted?: boolean;
}

function Step1Completed() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper>
        <circle
          cx="30"
          cy="30"
          fill="var(--fill-0, #2E2E38)"
          id="Ellipse 4257"
          r="30"
        />
      </Wrapper>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Step1Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p
        className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        1.上傳 SBOM 檔案
      </p>
    </div>
  );
}

function Step1({ hasFiles }: StepIndicatorProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      {hasFiles ? <Step1Completed /> : <Group />}
      {hasFiles ? <Step1Text /> : <Frame2 />}
    </div>
  );
}

function Step2Active() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper>
        <circle
          cx="30"
          cy="30"
          fill="var(--fill-0, #FFE600)"
          id="Ellipse 4257"
          r="30"
        />
      </Wrapper>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#1a1a24] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Step2TextActive() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p
        className="basis-0 font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#1a1a24] text-[16px] text-center tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 700" }}
      >
        2.檔案分析
      </p>
    </div>
  );
}

function Step2({ hasFiles, isAnalyzing = false, isCompleted = false }: StepIndicatorProps) {
  // Logic: Gray -> Yellow (when files uploaded) -> Black (when analysis completed)
  // isCompleted means analysis has finished and result modal was closed
  if (isCompleted) {
    // Analysis completed - show black (completed state)
    return (
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
        <Step2Completed />
        <Step2TextCompleted />
      </div>
    );
  } else if (hasFiles || isAnalyzing) {
    // Files uploaded OR analyzing - show yellow (active state)
    return (
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
        <Step2Active />
        <Step2TextActive />
      </div>
    );
  } else {
    // No files - show gray (inactive state)
    return (
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
        <Text2 text="2" />
        <Text3 text="2.檔案分析" />
      </div>
    );
  }
}

function Step2Completed() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper>
        <circle
          cx="30"
          cy="30"
          fill="var(--fill-0, #2E2E38)"
          id="Ellipse 4257"
          r="30"
        />
      </Wrapper>
      <div className="[grid-area:1_/_1] flex flex-col font-['EYInterstate:Bold',sans-serif] justify-center ml-[23px] mt-[30px] not-italic relative text-[#ffe600] text-[22px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Step2TextCompleted() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p
        className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow h-[44px] leading-[23px] min-h-px min-w-px relative shrink-0 text-[#2e2e38] text-[16px] text-center tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        2.檔案分析
      </p>
    </div>
  );
}

function Step3({ hasFiles, isAnalyzing = false }: StepIndicatorProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="3" />
      <Text3 text="2.檔案上傳並分析" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[160px]">
      <Text2 text="3" />
      <Text3 text="2.檔案上傳並分析" />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="第三個"
    >
      <Helper />
      <Frame7 />
    </div>
  );
}

interface Frame17Props {
  hasFiles: boolean;
  isAnalyzing?: boolean;
  isCompleted?: boolean;
}

function Frame17({ hasFiles, isAnalyzing = false, isCompleted = false }: Frame17Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Step1 hasFiles={hasFiles || isAnalyzing} />
      <Helper />
      <Step2 hasFiles={hasFiles} isAnalyzing={isAnalyzing} isCompleted={isCompleted} />
    </div>
  );
}

function Frame4({ hasFiles, isAnalyzing, isCompleted }: Frame17Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame17 hasFiles={hasFiles} isAnalyzing={isAnalyzing} isCompleted={isCompleted} />
    </div>
  );
}

function Frame23({ hasFiles, isAnalyzing, isCompleted }: Frame17Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 hasFiles={hasFiles} isAnalyzing={isAnalyzing} isCompleted={isCompleted} />
    </div>
  );
}

function HeaderCell() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Header Cell"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <p
            className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[0] relative shrink-0 text-[#1a1a24] text-[0px] tracking-[0.48px] w-[368px]"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            <span className="leading-[23px] text-[16px]">{`供應商 / 專案名稱 `}</span>
            <span
              className="font-['EYInterstate:Regular','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] leading-[20px] text-[14px] tracking-[0.42px]"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              *請確認檔案與供應商 / 專案相符
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div
      className="bg-[#f6f6fa] content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Table Row"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <HeaderCellText
        text="檔案名稱"
        additionalClassNames="w-[360px]"
      />
      <HeaderCell />
      <HeaderCellText
        text="操作"
        additionalClassNames="justify-end w-[100px]"
      />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableRow />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="Icon">
          <path
            d="M32 8V40"
            id="Vector"
            stroke="var(--stroke-0, #99A1AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.33333"
          />
          <path
            d={svgPaths.p5d0dc00}
            id="Vector_2"
            stroke="var(--stroke-0, #99A1AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.33333"
          />
          <path
            d={svgPaths.p154739c0}
            id="Vector_3"
            stroke="var(--stroke-0, #99A1AF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-[24px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-down">
          <path
            d="M6 9L12 15L18 9"
            id="Vector"
            stroke="var(--stroke-0, #C4C4CD)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d="M2.5 5H17.5"
            id="Vector"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPathsUpload.p294c6f00}
            id="Vector_2"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPathsUpload.p18b0c00}
            id="Vector_3"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M8.33203 9.16666V14.1667"
            id="Vector_4"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M11.668 9.16666V14.1667"
            id="Vector_5"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

type DatePickerTextProps = {
  text: string;
  onChange?: (value: string) => void;
};

function DatePickerText({ text, onChange }: DatePickerTextProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full cursor-pointer hover:border-[#ffe600] transition-colors">
          <p
            className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]"
            style={{ fontVariationSettings: "'wght' 400" }}
          >
            {text}
          </p>
          <ChevronDown />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

interface FileContainerProps {
  fileName: string;
}

function FileContainer({ fileName }: FileContainerProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['EYInterstate:Regular',sans-serif] leading-[23px] left-0 not-italic text-[#1a1a24] text-[16px] text-nowrap top-0 tracking-[0.48px]">
        {fileName}
      </p>
    </div>
  );
}

interface TableCellFileProps {
  fileName: string;
}

function TableCellFile({ fileName }: TableCellFileProps) {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[360px]"
      data-name="Table Cell"
    >
      <FileContainer fileName={fileName} />
    </div>
  );
}

interface FormSelectProps {
  text: string;
}

function FormSelect({ text }: FormSelectProps) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Form"
    >
      <DatePickerText text={text} />
    </div>
  );
}

interface TableCellSelectProps {
  vendorText: string;
  projectText: string;
  onVendorChange?: (vendor: any) => void;
}

function TableCellSelect({ vendorText, projectText, onVendorChange }: TableCellSelectProps) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Table Cell"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
            <VendorDropdown 
              value={vendorText} 
              onChange={(vendor) => {
                console.log('Selected vendor:', vendor);
                onVendorChange?.(vendor);
              }}
            />
          </div>
          <FormSelect text={projectText} />
        </div>
      </div>
    </div>
  );
}

interface DeleteButtonProps {
  onClick: () => void;
}

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity"
      data-name="按鈕(L)"
      onClick={onClick}
    >
      <div className="flex flex-row items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-center pl-[8px] pr-0 py-[8px] relative w-full">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

interface TableCellDeleteProps {
  onDelete: () => void;
}

function TableCellDelete({ onDelete }: TableCellDeleteProps) {
  return (
    <div
      className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[100px]"
      data-name="Table Cell"
    >
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
}

interface UploadedFileRowProps {
  fileName: string;
  vendor: string;
  project: string;
  onDelete: () => void;
}

function UploadedFileRow({
  fileName,
  vendor,
  project,
  onDelete,
}: UploadedFileRowProps) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Table Row"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <TableCellFile fileName={fileName} />
      <TableCellSelect vendorText="" projectText={project} onVendorChange={onDelete} />
      <TableCellDelete onDelete={onDelete} />
    </div>
  );
}

interface LabelProps {
  isDragging: boolean;
  onFileClick: () => void;
}

function Label({ isDragging, onFileClick }: LabelProps) {
  return (
    <div
      className={clsx(
        "basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0 cursor-pointer transition-all",
        isDragging && "opacity-70 scale-98",
      )}
      data-name="Label"
      onClick={onFileClick}
    >
      <Icon />
      <p
        className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#101828] text-[16px] text-center text-nowrap tracking-[0.48px]"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        拖曳檔案至此，或點擊上傳
      </p>
      <p
        className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#6a7282] text-[13px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wght' 400" }}
      >
        支援所有檔案格式
      </p>
    </div>
  );
}

interface ContainerProps {
  isDragging: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileClick: () => void;
}

function Container({
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileClick,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "basis-0 grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-full border-2 border-dashed transition-all",
        isDragging
          ? "border-[#ffe600] bg-[#fffef0]"
          : "border-[#e5e7eb] bg-white",
      )}
      data-name="Container"
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[32px] pt-0 px-[50px] relative size-full">
          <Label isDragging={isDragging} onFileClick={onFileClick} />
        </div>
      </div>
    </div>
  );
}

interface OsintIntelligenceTableProps {
  isDragging: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileClick: () => void;
  uploadedFiles: File[];
  onDeleteFile: (index: number) => void;
}

function OsintIntelligenceTable({
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileClick,
  uploadedFiles,
  onDeleteFile,
}: OsintIntelligenceTableProps) {
  return (
    <div
      className="bg-white h-[600px] relative shrink-0 w-full"
      data-name="OSINTIntelligenceTable"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="content-stretch flex flex-col grow items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <Frame26 />
            {uploadedFiles.length > 0 && (
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                {uploadedFiles.map((file, index) => (
                  <UploadedFileRow
                    key={index}
                    fileName={file.name}
                    vendor="Intumit 碩網資訊股份有限公司"
                    project="2026 AI 智能客服系統"
                    onDelete={() => onDeleteFile(index)}
                  />
                ))}
              </div>
            )}
          </div>
          <Container
            isDragging={isDragging}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onFileClick={onFileClick}
          />
        </div>
      </div>
    </div>
  );
}

interface Frame3Props {
  count: number;
}

function Frame3({ count }: Frame3Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
      <p
        className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] text-center text-nowrap tracking-[0.54px]"
        style={{ fontVariationSettings: "'wght' 700" }}
      >
        我已上傳 {count} 筆
      </p>
    </div>
  );
}

interface L2Props {
  disabled: boolean;
  onClick: () => void;
}

function L2({ disabled, onClick }: L2Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex items-center justify-center min-w-[110px] px-[20px] py-[16px] relative rounded-[4px] shrink-0 transition-all",
        disabled
          ? "bg-[#e3e3e3] cursor-not-allowed"
          : "bg-[#ffe600] cursor-pointer hover:opacity-90 active:scale-95",
      )}
      data-name="按鈕(L)"
      onClick={disabled ? undefined : onClick}
    >
      <Text1
        text="確認並開始分析"
        additionalClassNames={disabled ? "text-[#9b9ba1]" : "text-[#1a1a24]"}
      />
    </div>
  );
}

interface Frame24Props {
  disabled: boolean;
  onClick: () => void;
}

function Frame24({ disabled, onClick }: Frame24Props) {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[723px]">
      <L2 disabled={disabled} onClick={onClick} />
    </div>
  );
}

interface Frame16Props {
  count: number;
  onAnalyze: () => void;
}

function Frame16({ count, onAnalyze }: Frame16Props) {
  return (
    <div className="bg-white fixed bottom-[30px] left-1/2 -translate-x-1/2 rounded-[8px] shadow-[0px_4px_20px_0px_rgba(3,8,99,0.04)] shrink-0 w-[1376px] z-10">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame3 count={count} />
          <Frame24 disabled={count === 0} onClick={onAnalyze} />
        </div>
      </div>
    </div>
  );
}

interface Container1Props {
  uploadCount: number;
  isDragging: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileClick: () => void;
  onAnalyze: () => void;
  uploadedFiles: File[];
  onDeleteFile: (index: number) => void;
  isAnalyzing?: boolean;
  showResult?: boolean;
  onViewHistory?: () => void;
  onNavigate?: (page: string) => void;
}

function Container1({
  uploadCount,
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileClick,
  onAnalyze,
  uploadedFiles,
  onDeleteFile,
  isAnalyzing = false,
  showResult = false,
  onViewHistory,
  onNavigate,
}: Container1Props) {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative shrink-0 w-[1440px]"
      data-name="Container"
    >
      <Breadcrumb 
        items={[
          { text: '首頁', onClick: () => onNavigate?.('home') },
          { text: '弱點偵測' },
          { text: 'SBOM 弱點分析', isActive: true },
        ]}
      />
      <Frame15 onViewHistory={onViewHistory} />
      <Frame23 hasFiles={uploadedFiles.length > 0} isAnalyzing={isAnalyzing} isCompleted={showResult} />
      <OsintIntelligenceTable
        isDragging={isDragging}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onFileClick={onFileClick}
        uploadedFiles={uploadedFiles}
        onDeleteFile={onDeleteFile}
      />
      <Frame16 count={uploadCount} onAnalyze={onAnalyze} />
    </div>
  );
}

function Frame12({
  uploadCount,
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileClick,
  onAnalyze,
  uploadedFiles,
  onDeleteFile,
  isAnalyzing = false,
  showResult = false,
  onViewHistory,
  onNavigate,
}: Container1Props) {
  return (
    <div className="bg-[#ececf3] content-stretch flex flex-col items-center px-0 py-[32px] pt-[180px] pb-[150px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-[1920px]">
      <Container1
        uploadCount={uploadCount}
        isDragging={isDragging}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onFileClick={onFileClick}
        onAnalyze={onAnalyze}
        uploadedFiles={uploadedFiles}
        onDeleteFile={onDeleteFile}
        isAnalyzing={isAnalyzing}
        showResult={showResult}
        onViewHistory={onViewHistory}
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default function SbomAnalysisInteractive({
  onNavigate,
  onSaveRecord,
}: SbomAnalysisInteractiveProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    
    if (files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...files]);
      console.log("已上傳檔案：", files);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles = Array.from(files);
      if (validFiles.length > 0) {
        setUploadedFiles((prev) => [...prev, ...validFiles]);
        console.log("已上傳檔案：", validFiles);
      }
    }
  };

  const handleAnalyze = () => {
    if (uploadedFiles.length > 0) {
      setIsAnalyzing(true);
      setProgress(0);

      // Simulate progress from 0 to 100
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Wait a moment then show result and save record
            setTimeout(() => {
              setIsAnalyzing(false);
              setShowResult(true);
              
              // Save analysis record when result modal appears
              uploadedFiles.forEach((file) => {
                const record: AnalysisRecord = {
                  id: `${Date.now()}-${Math.random()}`,
                  fileName: file.name,
                  vendor: "Intumit 碩網資訊股份有限公司",
                  project: "2026 AI 智能客服系統 v1.0",
                  timestamp: new Date(),
                  status: "上傳成功",
                  risks: {
                    high: 1,
                    medium: 12,
                    low: 8,
                  },
                };
                onSaveRecord(record);
              });
            }, 300);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // Complete in ~3 seconds
    }
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setProgress(0);
    setUploadedFiles([]);
    setIsAnalyzing(false);
  };

  const onDeleteFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#2e2e38] min-h-screen content-stretch flex flex-col items-center relative">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileSelect}
      />
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#d0d0d0] border-solid inset-[-2px] pointer-events-none"
      />
      <Header currentPage="sbom-analysis" onNavigate={onNavigate} />
      <Frame12
        uploadCount={uploadedFiles.length}
        isDragging={isDragging}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onFileClick={handleFileClick}
        onAnalyze={handleAnalyze}
        uploadedFiles={uploadedFiles}
        onDeleteFile={onDeleteFile}
        isAnalyzing={isAnalyzing}
        showResult={showResult}
        onViewHistory={() => onNavigate("analysis-history")}
        onNavigate={onNavigate}
      />
      <Footer />
      {isAnalyzing && <ProgressModal progress={progress} />}
      {showResult && <ResultModal onClose={handleCloseResult} onNavigate={onNavigate} />}
    </div>
  );
}

// Progress Modal Component
interface ProgressModalProps {
  progress: number;
}

function ProgressModal({ progress }: ProgressModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-[48px] flex flex-col items-center gap-[24px] min-w-[400px]">
        <p
          className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] text-[#1a1a24] text-[24px] text-center"
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          分析中...
        </p>
        <div className="w-full bg-[#e5e7eb] rounded-full h-[12px] overflow-hidden">
          <div
            className="bg-[#ffe600] h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p
          className="font-['EYInterstate:Bold',sans-serif] text-[32px] text-[#1a1a24]"
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}

// Result Modal Components
function ResultChevronRight() {
  return (
    <div className="relative size-[24px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-right">
          <path
            d="M9 18L15 12L9 6"
            id="Vector"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function ResultIcon({ color }: { color: string }) {
  return (
    <div className="relative size-[24px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPathsResult.pace200}
            id="Vector"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M12 8V12"
            id="Vector_2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M12 16H12.01"
            id="Vector_3"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

interface RiskRowProps {
  level: string;
  count: number;
  color: string;
  bgColor: string;
  borderColor: string;
  onNavigate?: (page: string) => void;
}

function RiskRow({ level, count, color, bgColor, borderColor, onNavigate }: RiskRowProps) {
  const handleClick = () => {
    if (level === '高風險組件已偵測到' && onNavigate) {
      onNavigate('component-detail');
    }
  };

  return (
    <div 
      className={`${bgColor} relative rounded-[4px] shrink-0 w-full ${level === '高風險組件已偵測到' ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      onClick={handleClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border ${borderColor} border-solid inset-0 pointer-events-none rounded-[4px]`}
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <ResultIcon color={color} />
            <p
              className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              {level}
            </p>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[100px]">
            <p
              className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap"
              style={{ color }}
            >
              {count}
            </p>
            <p
              className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              個
            </p>
            <ResultChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="x">
          <path
            d="M18 6L6 18"
            id="Vector"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M6 6L18 18"
            id="Vector_2"
            stroke="var(--stroke-0, #747480)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

interface ResultModalProps {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

function ResultModal({ onClose, onNavigate }: ResultModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div
        className="bg-white content-stretch flex flex-col gap-[10px] items-center p-[32px] relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        data-name="Container"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <div
              className="h-[140px] relative shrink-0 w-[150px] flex items-center justify-center"
              data-name="shutterstock_2606011019 [轉換]-01 2"
            >
              <svg className="size-[80px]" fill="none" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" stroke="#419D48" strokeWidth="4" />
                <path d="M24 40L36 52L56 28" stroke="#419D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[400px]">
              <p
                className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[24px] text-center text-nowrap"
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                SBOM 弱點分析完成
              </p>
              <p
                className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#747480] text-[16px] text-center text-nowrap tracking-[0.48px]"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                以下為本次掃描之弱點檢測摘要：
              </p>
              <RiskRow
                level="高風險組件已偵測到"
                count={1}
                color="#EC5242"
                bgColor="bg-[#ffe2e2]"
                borderColor="border-[#ffc9c9]"
                onNavigate={onNavigate}
              />
              <RiskRow
                level="中風險組件已偵測到"
                count={12}
                color="#EE762F"
                bgColor="bg-[#ffedd4]"
                borderColor="border-[#ffd59a]"
              />
              <RiskRow
                level="低風險組件已偵測到"
                count={8}
                color="#FF9D00"
                bgColor="bg-[#fff8b5]"
                borderColor="border-[#fff169]"
              />
            </div>
          </div>
          <p
            className="[text-underline-position:from-font] decoration-solid font-['EYInterstate:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[20px] text-nowrap underline cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontVariationSettings: "'wght' 400" }}
            onClick={() => onNavigate("analysis-history")}
          >
            查看分析紀錄
          </p>
        </div>
        <div
          className="absolute right-[20px] top-[20px] cursor-pointer hover:opacity-70 transition-opacity"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}