import svgPaths from "./svg-0ot7s14hvy";

function Icon() {
  return (
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
  );
}

export default function Container() {
  return (
    <div className="bg-[#ddffdf] content-stretch flex flex-col items-start pt-[8px] px-[8px] relative rounded-[4px] size-full" data-name="Container">
      <Icon />
    </div>
  );
}