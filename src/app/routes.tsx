import { createHashRouter, Outlet, useSearchParams, ScrollRestoration } from 'react-router';
import { TrackingProvider } from './context/TrackingContext';
import { AppProvider, useAppContext, useAppNavigate, useCurrentPage, pageToPath } from './context/AppContext';
import TrackingNotification from './components/TrackingNotification';
import DraftSavedNotification from './components/DraftSavedNotification';

// Lazy-style imports for all page components
import Frame1321316927 from '../imports/Frame1321316927';
import SupplierRiskAssessmentPage from './components/SupplierRiskAssessmentPage';
import SupplierRiskStep2Page from './components/SupplierRiskStep2Page';
import SupplierRiskStep3Page from './components/SupplierRiskStep3Page';
import SupplierRiskStep3Page2 from './components/SupplierRiskStep3Page2';
import SupplierRiskStep3Page3 from './components/SupplierRiskStep3Page3';
import SupplierDetailPage from './components/SupplierDetailPage';
import QuickIntelligenceSurvey from './components/QuickIntelligenceSurvey';
import QuickIntelligenceSearchResult from './components/QuickIntelligenceSearchResult';
import QuickIntelligenceDetailPage from './components/QuickIntelligenceDetailPage';
import QuickIntelligenceTrackingListPage from './components/QuickIntelligenceTrackingListPage';
import RiskAssessmentFormPage from './components/RiskAssessmentFormPage';
import RiskAssessmentPage from './components/RiskAssessmentPage';
import RiskAssessmentSendPage from './components/RiskAssessmentSendPage';
import RiskAssessmentViewPage from './components/RiskAssessmentViewPage';
import SupplierDataVerificationPage from './components/SupplierDataVerificationPage';
import SupplierRiskAssessmentResultPage from './components/SupplierRiskAssessmentResultPage';
import QuestionBankPage from './components/QuestionBankPage';
import QuestionBankEditPage from './components/QuestionBankEditPage';
import QuestionBankDesignPage from './components/QuestionBankDesignPage';
import SelfAssessmentPage from './components/SelfAssessmentPage';
import ManagementReportPage from './components/ManagementReportPage';
import { useNavigate } from 'react-router';
import { addSearchHistory, searchCompanies } from './components/companyLookup';

// Root layout - provides context and shared UI
function RootLayout() {
  return (
    <AppProvider>
      <TrackingProvider>
        <ScrollRestoration />
        <TrackingNotification />
        <DraftSavedNotification />
        <Outlet />
      </TrackingProvider>
    </AppProvider>
  );
}

// Page wrapper components that bridge React Router to existing prop-based components

function HomePage() {
  const { isDarkMode, toggleDarkMode, selectedYear, setSelectedYear, isYearDropdownOpen, setIsYearDropdownOpen } = useAppContext();
  const onNavigate = useAppNavigate();
  const years = Array.from({ length: 11 }, (_, i) => 2024 - i);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#2e2e38]' : 'bg-[#f6f6fa]'}`}>
      <Frame1321316927
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        isYearDropdownOpen={isYearDropdownOpen}
        onToggleYearDropdown={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        years={years}
        onNavigate={onNavigate}
      />
    </div>
  );
}

function SupplierRiskAssessmentPageWrapper() {
  const { step1Completed, setStep1Completed } = useAppContext();
  const baseNavigate = useAppNavigate();

  const onNavigate = (page: string) => {
    if (page === 'supplier-risk-step2') {
      setStep1Completed(true);
    }
    baseNavigate(page);
  };

  return <SupplierRiskAssessmentPage onNavigate={onNavigate} isCompleted={step1Completed} />;
}

function SupplierRiskStep2PageWrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierRiskStep2Page onNavigate={onNavigate} />;
}

function SupplierRiskStep3PageWrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierRiskStep3Page onNavigate={onNavigate} />;
}

function SupplierRiskStep3Page2Wrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierRiskStep3Page2 onNavigate={onNavigate} />;
}

function SupplierRiskStep3Page3Wrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierRiskStep3Page3 onNavigate={onNavigate} />;
}

function SupplierDetailPageWrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierDetailPage onNavigate={onNavigate} />;
}

function QuickIntelligenceSurveyWrapper() {
  const onNavigate = useAppNavigate();
  const navigate = useNavigate();
  const { addRecentSearch, recentSearchEntries } = useAppContext();

  const handleSearch = (query: string, riskTypes: string[]) => {
    addSearchHistory(query, riskTypes);

    const params = new URLSearchParams();
    params.set('q', query);
    riskTypes.forEach(t => params.append('types', t));
    navigate(`/quick-intelligence-search-result?${params.toString()}`);
  };

  const handleViewSupplier = (supplierName: string) => {
    navigate(`/quick-intelligence-detail?supplier=${encodeURIComponent(supplierName)}`);
  };

  return (
    <QuickIntelligenceSurvey
      onNavigate={onNavigate}
      onSearch={handleSearch}
      onViewSupplier={handleViewSupplier}
      recentSearchEntries={recentSearchEntries}
    />
  );
}

function QuickIntelligenceSearchResultWrapper() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addRecentSearch } = useAppContext();

  const searchQuery = searchParams.get('q') || '';
  const selectedRiskTypes = searchParams.getAll('types');

  const handleViewSupplier = (supplierName: string) => {
    // 點擊「查看」時才加入最近普查紀錄
    const results = searchCompanies(supplierName);
    if (results.length > 0) {
      const company = results[0];
      const today = new Date().toISOString().split('T')[0];
      addRecentSearch({
        name: company.name,
        taxId: company.taxId,
        person: company.representative,
        date: today,
        address: company.address,
        phone: company.phone,
        summary: company.alertSummary,
        isSuspectedChinese: company.isSuspectedChinese || false,
      });
    }

    // Preserve risk types when viewing supplier detail
    const params = new URLSearchParams();
    params.set('supplier', supplierName);
    selectedRiskTypes.forEach(t => params.append('types', t));
    navigate(`/quick-intelligence-detail?${params.toString()}`);
  };

  return (
    <QuickIntelligenceSearchResult
      onNavigate={onNavigate}
      searchQuery={searchQuery}
      selectedRiskTypes={selectedRiskTypes.length > 0 ? selectedRiskTypes : undefined}
      onViewSupplier={handleViewSupplier}
    />
  );
}

function QuickIntelligenceDetailPageWrapper() {
  const onNavigate = useAppNavigate();
  const [searchParams] = useSearchParams();
  const supplierName = searchParams.get('supplier') || '';
  const selectedRiskTypes = searchParams.getAll('types');

  return (
    <QuickIntelligenceDetailPage
      onNavigate={onNavigate}
      supplierName={supplierName}
      selectedRiskTypes={selectedRiskTypes.length > 0 ? selectedRiskTypes : undefined}
    />
  );
}

function QuickIntelligenceTrackingListPageWrapper() {
  const onNavigate = useAppNavigate();
  const navigate = useNavigate();

  const handleViewSupplier = (supplierName: string) => {
    navigate(`/quick-intelligence-detail?supplier=${encodeURIComponent(supplierName)}`);
  };

  return (
    <QuickIntelligenceTrackingListPage
      onNavigate={onNavigate}
      onViewSupplier={handleViewSupplier}
    />
  );
}

function RiskAssessmentFormPageWrapper() {
  const onNavigate = useAppNavigate();
  return <RiskAssessmentFormPage onNavigate={onNavigate} />;
}

function RiskAssessmentPageWrapper() {
  const navigate = useNavigate();
  const baseNavigate = useAppNavigate();

  const onNavigate = (page: string, project?: string, query?: Record<string, string>) => {
    if (project || query) {
      const basePath = pageToPath(page).split('?')[0];
      const params = new URLSearchParams(query || {});
      if (project) params.set('project', project);
      const qs = params.toString();
      navigate(qs ? `${basePath}?${qs}` : basePath);
    } else {
      baseNavigate(page);
    }
  };

  return <RiskAssessmentPage onNavigate={onNavigate} />;
}

function QuestionBankEditPageWrapper() {
  return <QuestionBankEditPage />;
}

function QuestionBankDesignPageWrapper() {
  return <QuestionBankDesignPage />;
}


function SelfAssessmentPageWrapper() {
  return <SelfAssessmentPage />;
}

function RiskAssessmentSendPageWrapper() {
  const onNavigate = useAppNavigate();
  return <RiskAssessmentSendPage onNavigate={onNavigate} />;
}

function RiskAssessmentViewPageWrapper() {
  const onNavigate = useAppNavigate();
  return <RiskAssessmentViewPage onNavigate={onNavigate} />;
}

function SupplierDataVerificationPageWrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierDataVerificationPage onNavigate={onNavigate} />;
}

function SupplierRiskAssessmentResultPageWrapper() {
  const onNavigate = useAppNavigate();
  return <SupplierRiskAssessmentResultPage />;
}

function QuestionBankPageWrapper() {
  return <QuestionBankPage />;
}

function ManagementReportPageWrapper() {
  return <ManagementReportPage />;
}

// Not Found page
function NotFound() {
  const onNavigate = useAppNavigate();
  return (
    <div className="min-h-screen bg-[#f6f6fa] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[48px] text-[#1a1a24] mb-[16px]">404</h1>
        <p className="text-[20px] text-[#747480] mb-[32px]">找不到此頁面</p>
        <div
          className="bg-[#ffe600] inline-block px-[24px] py-[12px] rounded-[4px] cursor-pointer hover:bg-[#ffd000] transition-colors"
          onClick={() => onNavigate('home')}
        >
          <p className="text-[#1a1a24] text-[16px]">回到首頁</p>
        </div>
      </div>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'supplier-risk-assessment', Component: SupplierRiskAssessmentPageWrapper },
      { path: 'supplier-risk-step2', Component: SupplierRiskStep2PageWrapper },
      { path: 'supplier-risk-step3', Component: SupplierRiskStep3PageWrapper },
      { path: 'supplier-risk-step3-page2', Component: SupplierRiskStep3Page2Wrapper },
      { path: 'supplier-risk-step3-page3', Component: SupplierRiskStep3Page3Wrapper },
      { path: 'supplier-detail', Component: SupplierDetailPageWrapper },
      { path: 'quick-intelligence-survey', Component: QuickIntelligenceSurveyWrapper },
      { path: 'quick-intelligence-search-result', Component: QuickIntelligenceSearchResultWrapper },
      { path: 'quick-intelligence-detail', Component: QuickIntelligenceDetailPageWrapper },
      { path: 'quick-intelligence-tracking-list', Component: QuickIntelligenceTrackingListPageWrapper },
      { path: 'risk-assessment-form', Component: RiskAssessmentFormPageWrapper },
      { path: 'risk-assessment', Component: RiskAssessmentPageWrapper },
      { path: 'risk-assessment-send', Component: RiskAssessmentSendPageWrapper },
      { path: 'risk-assessment-view', Component: RiskAssessmentViewPageWrapper },
      { path: 'supplier-data-verification', Component: SupplierDataVerificationPageWrapper },
      { path: 'supplier-risk-assessment-result', Component: SupplierRiskAssessmentResultPageWrapper },
      { path: 'question-bank', Component: QuestionBankPageWrapper },
      { path: 'question-bank-edit', Component: QuestionBankEditPageWrapper },
      { path: 'question-bank-design', Component: QuestionBankDesignPageWrapper },
      { path: 'self-assessment', Component: SelfAssessmentPageWrapper },
      { path: 'management-report', Component: ManagementReportPageWrapper },
      { path: '*', Component: NotFound },
    ],
  },
]);