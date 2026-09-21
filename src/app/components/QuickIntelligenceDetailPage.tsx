import Footer from './Footer';
import Header from './Header';
import { IntelligenceDetailContent } from './IntelligenceDetailContent';

interface QuickIntelligenceDetailPageProps {
  onNavigate?: (page: string) => void;
  supplierName: string;
  selectedRiskTypes?: string[];
}

export default function QuickIntelligenceDetailPage({ onNavigate, supplierName, selectedRiskTypes }: QuickIntelligenceDetailPageProps) {
  return (
    <div className="bg-[#2e2e38] flex flex-col items-start w-full min-h-screen">
      {/* Header - fixed at top, consistent with all pages */}
      <Header onNavigate={onNavigate} currentPage="quick-intelligence-survey" />
      {/* Content - add pt offset for fixed header */}
      <div className="pt-[120px] w-full">
        <IntelligenceDetailContent onNavigate={onNavigate} supplierName={supplierName} source="quick-intelligence" selectedRiskTypes={selectedRiskTypes} />
      </div>
      <Footer />
    </div>
  );
}