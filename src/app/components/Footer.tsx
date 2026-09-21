export default function Footer() {
  return (
    <div className="bg-[#2e2e38] w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[24px] px-[32px] relative w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-[1376px]">
            {/* Centered Copyright */}
            <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#f6f6fa] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
              © 2026 SCCG. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}