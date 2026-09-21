import svgPaths from "./svg-kett4ux6fz";

export default function Frame() {
  return (
    <div className="backdrop-blur-[42.5px] bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
        <div className="bg-[#ddffdf] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
                <div className="absolute inset-[-10.98%_-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
                    <path d={svgPaths.p3d70580} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#1a1a24] text-[18px] tracking-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          供應商評估分數
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-0">
            <p className="font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#419d48] text-[32px] whitespace-nowrap">85</p>
            <div className="content-stretch flex flex-col items-center justify-center pb-[4px] relative shrink-0 w-[16px]">
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[0.48px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                分
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[46.828px]">
              <div className="bg-[#ddffdf] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
                <div className="content-stretch flex items-start px-[8px] py-[4px] relative size-full">
                  <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#419d48] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                    B+ 級
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[33px] items-center pt-[17px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Icon">
                    <path d={svgPaths.p35f41f00} id="Vector" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p730e380} id="Vector_2" stroke="var(--stroke-0, #419D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[23px] relative shrink-0 text-[#419d48] text-[16px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                比去年進步 5 分
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}