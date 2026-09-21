/**
 * 供應商詳情頁面
 * 完全使用 Figma 設計圖組件
 */

import Frame1321317147951919 from '@/imports/Frame1321317147-95-1919';

interface SupplierDetailPageProps {
  onNavigate?: (page: string) => void;
}

export default function SupplierDetailPage({ onNavigate }: SupplierDetailPageProps) {
  return (
    <div className="min-h-screen bg-[#2e2e38]">
      <Frame1321317147951919 onNavigate={onNavigate} currentPage="supplier-detail" />
    </div>
  );
}