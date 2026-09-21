# 字重更新說明

## 需要執行的批量替換

由於專案中有 99 個文件包含 `'wght' 700`，需要全部替換為 `'wght' 900`。

## 執行方法

### 方法 1: 使用 Node.js 腳本（推薦）

```bash
node update-font-weights.js
```

### 方法 2: 使用 Python 腳本

```bash
python3 batch-replace.py
```

### 方法 3: 使用命令行（Linux/Mac）

```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
```

### 方法 4: 使用命令行（Mac 需要空字符串參數）

```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s/'wght' 700/'wght' 900/g" {} \;
```

## 已完成的文件

- ✅ /src/styles/fonts.css - 已將 `font-weight: 700` 改為 `font-weight: bolder`
- ✅ /src/app/components/Header.tsx - 已替換所有 `'wght' 700` 為 `'wght' 900`

## 待處理的文件列表

主要組件文件 (src/app/components/):
- SbomAnalysisInteractive.tsx (12 處)
- SupplierProgressClosedCases.tsx
- SupplierRiskStep2Page.tsx
- IntelligenceTrackingSection.tsx
- IntelligenceTrackingContent.tsx
- SendingProgressDialog.tsx
- SupplierProgressOverview.tsx
- SupplierRiskStep3Page2.tsx
- SupplierRiskAssessmentPage.tsx
- SupplierRiskStep3Page3.tsx
- SupplierReportDialog.tsx
- SupplierRiskAnalysis.tsx
- PreviewModal.tsx
- ConfirmSendDialog.tsx
- AnalysisHistory.tsx
- SuccessModal.tsx
- SupplierRiskStep3Page.tsx
- IntelligenceTrackingPage.tsx

導入的組件文件 (src/imports/):
- Container-56-1949.tsx
- Container-56-860.tsx
- 以及其他多個導入組件...

## 驗證

執行後可以用以下命令驗證：

```bash
# 檢查是否還有 'wght' 700
grep -r "'wght' 700" src

# 檢查 'wght' 900 的數量
grep -r "'wght' 900" src | wc -l
```
