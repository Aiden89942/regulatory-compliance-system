import { useState, useRef, useEffect } from 'react';

interface DatePickerFieldProps {
  value: string; // Format: YYYY.MM.DD
  onChange: (value: string) => void;
}

export default function DatePickerField({ value, onChange }: DatePickerFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const yearScrollRef = useRef<HTMLDivElement>(null);
  const monthScrollRef = useRef<HTMLDivElement>(null);
  const dayScrollRef = useRef<HTMLDivElement>(null);

  // Parse current date
  const parts = value.split('.');
  const currentYear = parseInt(parts[0]) || new Date().getFullYear();
  const currentMonth = parseInt(parts[1]) || new Date().getMonth() + 1;
  const currentDay = parseInt(parts[2]) || new Date().getDate();

  // Generate year options (current year to +10 years)
  const years = Array.from({ length: 11 }, (_, i) => new Date().getFullYear() + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  
  // Calculate days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  
  const days = Array.from({ length: getDaysInMonth(currentYear, currentMonth) }, (_, i) => i + 1);

  // Handle date change
  const handleDateChange = (year: number, month: number, day: number) => {
    const formattedDate = `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
    onChange(formattedDate);
    setIsOpen(false);
  };

  // Scroll to selected item when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        // Scroll year
        if (yearScrollRef.current) {
          const yearIndex = years.indexOf(currentYear);
          yearScrollRef.current.scrollTop = yearIndex * 48 - 76;
        }
        // Scroll month
        if (monthScrollRef.current) {
          monthScrollRef.current.scrollTop = (currentMonth - 1) * 48 - 76;
        }
        // Scroll day
        if (dayScrollRef.current) {
          dayScrollRef.current.scrollTop = (currentDay - 1) * 48 - 76;
        }
      }, 10);
    }
  }, [isOpen, currentYear, currentMonth, currentDay, years]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
            <div className="basis-0 font-['EYInterstate:Regular',sans-serif] grow leading-[23px] min-h-px min-w-px text-[#222] text-[16px] tracking-[0.48px]">
              {value}
            </div>
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16 2V6" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M8 2V6" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M3 10H21" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#747480] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 z-50 bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg p-[24px] w-[360px]">
          <div className="flex gap-[8px]">
            {/* Year selector */}
            <div className="flex-1">
              <div className="text-[#2e2e38] text-[14px] mb-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                年
              </div>
              <div className="h-[200px] overflow-y-auto border-r border-[#2e2e38] relative" ref={yearScrollRef}>
                <div className="absolute inset-x-0 top-[76px] h-[48px] bg-[#ffe600] pointer-events-none z-0" />
                <div className="relative z-10">
                  {years.map((year) => (
                    <div
                      key={year}
                      className={`px-[12px] py-[12px] cursor-pointer transition-colors font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-center ${
                        year === currentYear ? 'text-[#1a1a24]' : 'text-[#747480]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                      onClick={() => handleDateChange(year, currentMonth, currentDay)}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Month selector */}
            <div className="flex-1">
              <div className="text-[#2e2e38] text-[14px] mb-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                月
              </div>
              <div className="h-[200px] overflow-y-auto border-r border-[#2e2e38] relative" ref={monthScrollRef}>
                <div className="absolute inset-x-0 top-[76px] h-[48px] bg-[#ffe600] pointer-events-none z-0" />
                <div className="relative z-10">
                  {months.map((month) => (
                    <div
                      key={month}
                      className={`px-[12px] py-[12px] cursor-pointer transition-colors font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-center ${
                        month === currentMonth ? 'text-[#1a1a24]' : 'text-[#747480]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                      onClick={() => {
                        const maxDays = getDaysInMonth(currentYear, month);
                        const newDay = currentDay > maxDays ? maxDays : currentDay;
                        handleDateChange(currentYear, month, newDay);
                      }}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day selector */}
            <div className="flex-1">
              <div className="text-[#2e2e38] text-[14px] mb-[12px] font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                日
              </div>
              <div className="h-[200px] overflow-y-auto relative" ref={dayScrollRef}>
                <div className="absolute inset-x-0 top-[76px] h-[48px] bg-[#ffe600] pointer-events-none z-0" />
                <div className="relative z-10">
                  {days.map((day) => (
                    <div
                      key={day}
                      className={`px-[12px] py-[12px] cursor-pointer transition-colors font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] text-[16px] text-center ${
                        day === currentDay ? 'text-[#1a1a24]' : 'text-[#747480]'
                      }`}
                      style={{ fontVariationSettings: "'wght' 400" }}
                      onClick={() => handleDateChange(currentYear, currentMonth, day)}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}