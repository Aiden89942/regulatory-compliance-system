# 字重批量替換指南

## 📋 已完成的文件

✅ 以下文件已手動完成 `'wght' 700` → `'wght' 900` 的替換：

1. `/src/styles/fonts.css` - 已將 `font-weight: 700` 改為 `font-weight: bolder`
2. `/src/app/components/Header.tsx` - 3處替換完成
3. `/src/app/components/SupplierRiskAnalysis.tsx` - 1處替換完成  
4. `/src/app/components/SendingProgressDialog.tsx` - 3處替換完成
5. `/src/app/components/ConfirmSendDialog.tsx` - 1處替換完成

## 🔧 剩餘待處理

還有約 **95個文件**需要批量替換。

---

## 🚀 快速執行方法

### 方法 1: 使用提供的腳本（推薦）

在項目根目錄執行：

```bash
chmod +x run-replacement.sh
./run-replacement.sh
```

### 方法 2: 使用 find + sed 命令

**Linux 系統：**
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
```

**macOS 系統：**
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s/'wght' 700/'wght' 900/g" {} \;
```

**Windows (Git Bash)：**
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
```

### 方法 3: 使用 Node.js 腳本

```bash
node update-font-weights.js
```

### 方法 4: 使用 Python 腳本

```bash
python3 batch-replace.py
```

### 方法 5: 使用 VS Code 全局搜尋替換

1. 按 `Ctrl + Shift + H` (Windows/Linux) 或 `Cmd + Shift + H` (Mac) 開啟全局搜尋替換
2. 在「查找」欄位輸入：`'wght' 700`
3. 在「替換」欄位輸入：`'wght' 900`
4. 點擊「全部替換」按鈕

---

## ✅ 驗證替換結果

執行完替換後，使用以下命令驗證：

### 檢查是否還有遺漏的 `'wght' 700`：
```bash
grep -r "'wght' 700" src
```

如果沒有任何輸出，表示替換完成！

### 統計 `'wght' 900` 的數量：
```bash
grep -r "'wght' 900" src | wc -l
```

應該會顯示一個較大的數字（預期 100+ 處）。

---

## 📝 待處理文件清單（供參考）

### 主要組件文件 (src/app/components/)：
- SbomAnalysisInteractive.tsx (12處)
- SupplierProgressOverview.tsx
- SupplierProgressClosedCases.tsx
- SupplierRiskStep2Page.tsx
- SupplierRiskStep3Page.tsx
- SupplierRiskStep3Page2.tsx
- SupplierRiskStep3Page3.tsx
- SupplierRiskAssessmentPage.tsx
- SupplierReportDialog.tsx
- IntelligenceTrackingSection.tsx
- IntelligenceTrackingContent.tsx
- IntelligenceTrackingPage.tsx
- PreviewModal.tsx
- AnalysisHistory.tsx
- SuccessModal.tsx

### 導入組件 (src/imports/)：
- Container-56-1949.tsx
- Container-56-860.tsx
- Frame1321317156.tsx
- 以及其他多個導入組件文件...

---

## ⚡ 建議執行順序

1. **首選**：使用 VS Code 全局搜尋替換（最直觀安全）
2. **次選**：執行 `./run-replacement.sh` 腳本（自動化且有驗證）
3. **備選**：手動執行 find + sed 命令（適合熟悉命令行的用戶）

---

## 🎯 預期結果

替換完成後，所有粗體文字將使用 `font-weight: 900` (Extra Bold)，視覺效果會更加粗重醒目。

- CSS 中：`font-weight: bolder`
- React style 中：`fontVariationSettings: "'wght' 900"`
