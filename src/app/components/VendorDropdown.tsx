import { useState } from 'react';

interface VendorOption {
  id: string;
  name: string;
  taxId: string;
  industry: string;
  riskLevel: '高風險' | '中風險' | '低風險' | '一般資訊';
}

interface VendorDropdownProps {
  value: string;
  onChange: (vendor: VendorOption) => void;
  placeholder?: string;
}

const vendors: VendorOption[] = [
  {
    id: '1',
    name: 'Intumit 碩網資訊股份有限公司',
    taxId: '28475639',
    industry: '軟體開發',
    riskLevel: '高風險'
  },
  {
    id: '2',
    name: 'Microsoft 台灣微軟股份有限公司',
    taxId: '23525730',
    industry: '雲端服務',
    riskLevel: '低風險'
  },
  {
    id: '3',
    name: 'IBM 台灣國際商業機器股份有限公司',
    taxId: '23456789',
    industry: '企業解決方案',
    riskLevel: '中風險'
  },
  {
    id: '4',
    name: 'Trend Micro 趨勢科技股份有限公司',
    taxId: '22099233',
    industry: '資安防護',
    riskLevel: '一般資訊'
  },
  {
    id: '5',
    name: 'Cisco 思科股份有限公司',
    taxId: '34567890',
    industry: '網路設備',
    riskLevel: '一般資訊'
  }
];

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #C4C4CD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function VendorDropdown({ value, onChange, placeholder = "Intumit 碩網資訊股份有限公司" }: VendorDropdownProps) {
  const [selectedVendor, setSelectedVendor] = useState<VendorOption | null>(
    vendors.find(v => v.name === value) || null
  );

  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <p className="basis-0 font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#2e2e38] text-[16px] text-nowrap tracking-[0.48px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {selectedVendor ? selectedVendor.name : placeholder}
          </p>
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}