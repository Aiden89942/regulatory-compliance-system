import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface CalendarDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function CalendarDatePicker({ value, onChange, label }: CalendarDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse the value (format: 2025.12.01)
  const parseDate = (dateStr: string): Date => {
    const [year, month, day] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  };

  const selectedDate = value ? parseDate(value) : new Date();

  // Format date to display format
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  // Get month name
  const getMonthName = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Get days in month
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday)
  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const daysInPrevMonth = getDaysInMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    
    const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, day)
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i)
      });
    }
    
    return days.slice(0, 35); // Show max 5 rows
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date: Date) => {
    onChange(formatDate(date));
    setIsOpen(false);
  };

  const isSelected = (date: Date): boolean => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" ref={containerRef}>
      {label && (
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <p className="font-['EYInterstate:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#2e2e38] text-[14px] text-nowrap tracking-[0.42px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {label}
          </p>
        </div>
      )}
      
      {/* Date Input */}
      <div className="relative w-full">
        <div 
          className="bg-white relative rounded-[8px] shrink-0 w-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
              <p className="font-['EYInterstate:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#222] text-[16px] text-nowrap tracking-[0.48px]">
                {value}
              </p>
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16 2V6" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M8 2V6" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M3 10H21" stroke="#C4C4CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border-2 ${isOpen ? 'border-[#ffe600]' : 'border-[#ececf3]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        </div>

        {/* Calendar Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-[9px] z-50">
            <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[10px] shrink-0 shadow-lg">
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              
              {/* Month */}
              <div className="content-stretch flex flex-col h-[280px] items-start relative shrink-0">
                {/* Caption */}
                <div className="h-[40px] relative shrink-0 w-[280px]">
                  {/* Navigation */}
                  <div className="absolute h-[40px] left-[200px] top-0 w-[80px]">
                    {/* Prev Button */}
                    <div 
                      className="absolute border-2 border-[rgba(0,0,0,0)] border-solid left-0 rounded-[40px] size-[40px] top-0 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={handlePrevMonth}
                    >
                      <div className="absolute left-[10px] size-[16px] top-[10px]">
                        <ChevronLeft className="block size-full text-[#1a1a24]" />
                      </div>
                    </div>
                    
                    {/* Next Button */}
                    <div 
                      className="absolute border-2 border-[rgba(0,0,0,0)] border-solid left-[40px] rounded-[40px] size-[40px] top-0 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={handleNextMonth}
                    >
                      <div className="absolute left-[10px] size-[16px] top-[10px]">
                        <ChevronRight className="block size-full text-[#1a1a24]" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption Label */}
                  <div className="absolute content-stretch flex h-[31px] items-center left-0 px-[6.5px] py-[2px] top-[4.5px] w-[154.125px]">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1a1a24] text-[18px] text-nowrap">
                      {getMonthName(currentMonth)}
                    </p>
                  </div>
                </div>
                
                {/* Table */}
                <div className="h-[240px] relative shrink-0 w-[280px]">
                  {/* Head */}
                  <div className="absolute h-[40px] left-0 top-0 w-[280px]">
                    <div className="absolute h-[40px] left-0 top-0 w-[280px]">
                      {weekDays.map((day, index) => (
                        <div key={day} className="absolute size-[40px] top-0" style={{ left: `${index * 40}px` }}>
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[50%] not-italic text-[#747480] text-[12px] text-center text-nowrap top-[11px] translate-x-[-50%] uppercase">
                            {day}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Body */}
                  <div className="absolute h-[200px] left-0 top-[40px] w-[280px]">
                    {calendarDays.map((dayInfo, index) => {
                      const row = Math.floor(index / 7);
                      const col = index % 7;
                      const selected = isSelected(dayInfo.date);
                      const today = isToday(dayInfo.date);
                      
                      return (
                        <div 
                          key={index}
                          className="absolute size-[40px]"
                          style={{ left: `${col * 40}px`, top: `${row * 40}px` }}
                        >
                          <div className="absolute left-0 size-[40px] top-0">
                            {/* Background for selected date */}
                            {selected && (
                              <div className="absolute bg-[#ffe600] left-0 rounded-[40px] size-[40px] top-0">
                                <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                                  <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1a1a24] text-[16px] text-center text-nowrap`}>
                                    {dayInfo.day}
                                  </p>
                                </div>
                              </div>
                            )}
                            
                            {/* Clickable button */}
                            <div 
                              className={`absolute left-0 rounded-[40px] size-[40px] top-0 cursor-pointer ${!selected ? 'hover:bg-gray-100' : ''} transition-colors`}
                              onClick={() => handleDateSelect(dayInfo.date)}
                            >
                              <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                                <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[40px]" />
                                {!selected && (
                                  <p className={`font-['Inter:${today ? 'Bold' : 'Regular'}',sans-serif] ${today ? 'font-bold' : 'font-normal'} leading-[24px] not-italic relative shrink-0 ${dayInfo.isCurrentMonth ? 'text-[#0a0a0a]' : 'text-[#0a0a0a] opacity-50'} text-[16px] text-center text-nowrap`}>
                                    {dayInfo.day}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
