import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { AnalysisRecord } from '../components/AnalysisHistory';

export interface RecentSearchEntry {
  name: string;
  taxId: string;
  person: string;
  date: string;
  address: string;
  phone: string;
  summary: string;
  isSuspectedChinese: boolean;
}

/**
 * Maps old page names (used in onNavigate) to URL paths.
 * supplier param is encoded in the URL for relevant pages.
 */
export function pageToPath(page: string, supplier?: string, query?: Record<string, string>): string {
  const map: Record<string, string> = {
    'home': '/',
    'supplier-risk-assessment': '/supplier-risk-assessment',
    'supplier-risk-step2': '/supplier-risk-step2',
    'supplier-risk-step3': '/supplier-risk-step3',
    'supplier-risk-step3-page2': '/supplier-risk-step3-page2',
    'supplier-risk-step3-page3': '/supplier-risk-step3-page3',
    'supplier-detail': '/supplier-detail',
    'quick-intelligence-survey': '/quick-intelligence-survey',
    'quick-intelligence-search-result': '/quick-intelligence-search-result',
    'quick-intelligence-detail': '/quick-intelligence-detail',
    'quick-intelligence-tracking-list': '/quick-intelligence-tracking-list',
    'risk-assessment': '/risk-assessment',
    'risk-assessment-send': '/risk-assessment-send',
    'supplier-data-verification': '/supplier-data-verification',
    'risk-assessment-form': '/risk-assessment-form',
    'risk-assessment-view': '/risk-assessment-view',
    'question-bank': '/question-bank',
    'question-bank-edit': '/question-bank-edit',
    'question-bank-design': '/question-bank-design',
    'self-assessment': '/self-assessment',
    'management-report': '/management-report',
  };

  let path = map[page] || '/';

  const params = new URLSearchParams();

  // Append supplier as query param for pages that need it
  if (supplier && ['quick-intelligence-detail'].includes(page)) {
    params.set('supplier', supplier);
  }

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
  }

  const qs = params.toString();
  if (qs) {
    path += `?${qs}`;
  }

  return path;
}

/**
 * Maps URL path back to old page name (for Header currentPage logic).
 */
export function pathToPage(pathname: string): string {
  const map: Record<string, string> = {
    '/': 'home',
    '/supplier-risk-assessment': 'supplier-risk-assessment',
    '/supplier-risk-step2': 'supplier-risk-step2',
    '/supplier-risk-step3': 'supplier-risk-step3',
    '/supplier-risk-step3-page2': 'supplier-risk-step3-page2',
    '/supplier-risk-step3-page3': 'supplier-risk-step3-page3',
    '/supplier-detail': 'supplier-detail',
    '/quick-intelligence-survey': 'quick-intelligence-survey',
    '/quick-intelligence-search-result': 'quick-intelligence-search-result',
    '/quick-intelligence-detail': 'quick-intelligence-detail',
    '/quick-intelligence-tracking-list': 'quick-intelligence-tracking-list',
    '/risk-assessment': 'risk-assessment',
    '/risk-assessment-send': 'risk-assessment-send',
    '/supplier-data-verification': 'supplier-data-verification',
    '/risk-assessment-form': 'risk-assessment-form',
    '/risk-assessment-view': 'risk-assessment-view',
    '/question-bank': 'question-bank',
    '/question-bank-edit': 'question-bank-edit',
    '/question-bank-design': 'question-bank-design',
    '/self-assessment': 'self-assessment',
    '/management-report': 'management-report',
  };
  return map[pathname] || 'home';
}

interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: (v: boolean) => void;
  toggleDarkMode: () => void;
  selectedYear: number;
  setSelectedYear: (y: number) => void;
  isYearDropdownOpen: boolean;
  setIsYearDropdownOpen: (v: boolean) => void;
  toggleYearDropdown: () => void;
  step1Completed: boolean;
  setStep1Completed: (v: boolean) => void;
  analysisRecords: AnalysisRecord[]
  handleSaveRecord: (record: AnalysisRecord) => void;
  recentSearchEntries: RecentSearchEntry[];
  addRecentSearch: (entry: RecentSearchEntry) => void;
  showDraftSavedNotification: boolean;
  setShowDraftSavedNotification: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [step1Completed, setStep1Completed] = useState(false);
  const [analysisRecords, setAnalysisRecords] = useState<AnalysisRecord[]>([]);
  const [recentSearchEntries, setRecentSearchEntries] = useState<RecentSearchEntry[]>([]);
  const [showDraftSavedNotification, setShowDraftSavedNotification] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleYearDropdown = () => setIsYearDropdownOpen(prev => !prev);
  const handleSaveRecord = (record: AnalysisRecord) => {
    setAnalysisRecords(prev => [...prev, record]);
  };
  const addRecentSearch = (entry: RecentSearchEntry) => {
    setRecentSearchEntries(prev => {
      // 去重：移除相同 taxId 的舊資料
      const filtered = prev.filter(e => e.taxId !== entry.taxId);
      // 新的放最前面
      return [entry, ...filtered];
    });
  };

  return (
    <AppContext.Provider value={{
      isDarkMode, setIsDarkMode, toggleDarkMode,
      selectedYear, setSelectedYear,
      isYearDropdownOpen, setIsYearDropdownOpen, toggleYearDropdown,
      step1Completed, setStep1Completed,
      analysisRecords, handleSaveRecord,
      recentSearchEntries, addRecentSearch,
      showDraftSavedNotification, setShowDraftSavedNotification,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

/**
 * Custom hook that returns an onNavigate-compatible function.
 * This bridges old components that expect onNavigate props to React Router.
 */
export function useAppNavigate() {
  const navigate = useNavigate();

  const appNavigate = (page: string, supplier?: string, query?: Record<string, string>) => {
    const path = pageToPath(page, supplier, query);
    navigate(path);
  };

  return appNavigate;
}

/**
 * Returns the current page name derived from the URL path.
 */
export function useCurrentPage(): string {
  const location = useLocation();
  return pathToPage(location.pathname);
}