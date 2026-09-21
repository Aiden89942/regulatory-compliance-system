const fs = require('fs');
const path = require('path');

// 需要處理的文件列表
const filesToUpdate = [
  'src/app/components/AnalysisHistory.tsx',
  'src/app/components/ConfirmSendDialog.tsx',
  'src/app/components/Header.tsx',
  'src/app/components/IntelligenceTrackingContent.tsx',
  'src/app/components/IntelligenceTrackingPage.tsx',
  'src/app/components/IntelligenceTrackingSection.tsx',
  'src/app/components/PreviewModal.tsx',
  'src/app/components/SbomAnalysisInteractive.tsx',
  'src/app/components/SendingProgressDialog.tsx',
  'src/app/components/SuccessModal.tsx',
  'src/app/components/SupplierProgressClosedCases.tsx',
  'src/app/components/SupplierProgressOverview.tsx',
  'src/app/components/SupplierReportDialog.tsx',
  'src/app/components/SupplierRiskAnalysis.tsx',
  'src/app/components/SupplierRiskAssessmentPage.tsx',
  'src/app/components/SupplierRiskStep2Page.tsx',
  'src/app/components/SupplierRiskStep3Page.tsx',
  'src/imports/Container-56-1949.tsx',
  'src/imports/Container-56-860.tsx'
];

let totalUpdated = 0;

filesToUpdate.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;
    
    // 替換 'wght' 700 為 'wght' 900
    content = content.replace(/'wght' 700/g, "'wght' 900");
    
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      totalUpdated++;
    } else {
      console.log(`⏭️  Skipped: ${filePath} (no changes needed)`);
    }
  } else {
    console.log(`❌ Not found: ${filePath}`);
  }
});

console.log(`\n🎉 Total files updated: ${totalUpdated}`);
