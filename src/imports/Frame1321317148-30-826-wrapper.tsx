import Frame1321317148 from './Frame1321317148-30-826';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Breadcrumb from '../app/components/Breadcrumb';

interface Frame1321317148WrapperProps {
  onNavigate?: (page: string) => void;
  isDarkMode?: boolean;
}

export default function Frame1321317148Wrapper({ onNavigate, isDarkMode = false }: Frame1321317148WrapperProps) {
  const bgColor = isDarkMode ? 'bg-[#2e2e38]' : 'bg-[#f6f6fa]';
  
  return (
    <div className={`${bgColor} transition-colors duration-300 min-h-screen`}>
      <Header currentPage="component-detail" onNavigate={onNavigate || (() => {})} />
      <div className="pt-[152px] pb-[32px]">
        <div className="max-w-[1440px] mx-auto px-[32px] pt-[24px]">
          <Breadcrumb 
            items={[
              { text: '首頁', onClick: () => onNavigate?.('home') },
              { text: '弱點偵測' },
              { text: 'SBOM 弱點分析', onClick: () => onNavigate?.('sbom-analysis') },
              { text: '組件詳情', isActive: true },
            ]}
          />
        </div>
        <Frame1321317148 onNavigate={onNavigate} isDarkMode={isDarkMode} />
      </div>
      <Footer />
    </div>
  );
}