### VS Code 快速替換指南 (最簡單方法)

#### 步驟 1: 開啟全局搜尋替換
- **Windows/Linux**: 按 `Ctrl + Shift + H`
- **Mac**: 按 `Cmd + Shift + H`

#### 步驟 2: 輸入搜尋和替換內容
```
搜尋 (Find):    'wght' 700
替換 (Replace): 'wght' 900
```

#### 步驟 3: 設置搜尋範圍
在 "files to include" 欄位中輸入：
```
src/**/*.tsx, src/**/*.ts
```

#### 步驟 4: 執行替換
點擊 "Replace All" 按鈕 (或按 `Ctrl+Alt+Enter` / `Cmd+Option+Enter`)

#### 步驟 5: 確認結果
VS Code 會顯示替換的數量，預期應該是 **100+ 處替換**

---

### 命令行快速替換 (備選方案)

在項目根目錄執行以下命令：

#### macOS:
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s/'wght' 700/'wght' 900/g" {} \;
```

#### Linux / Windows Git Bash:
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
```

#### 或使用提供的腳本:
```bash
chmod +x quick-replace.sh
./quick-replace.sh
```

---

### 驗證替換是否成功

執行以下命令，如果沒有輸出表示替換成功：
```bash
grep -r "'wght' 700" src
```

---

### 已完成的手動替換

以下文件已經完成替換，無需再次處理：
- ✅ /src/styles/fonts.css
- ✅ /src/app/components/Header.tsx
- ✅ /src/app/components/SupplierRiskAnalysis.tsx
- ✅ /src/app/components/SendingProgressDialog.tsx
- ✅ /src/app/components/ConfirmSendDialog.tsx

---

### 💡 推薦方法

**最簡單安全**: 使用 VS Code 全局搜尋替換 ⭐⭐⭐⭐⭐
- 視覺化操作
- 可以預覽所有變更
- 一鍵完成所有替換
- 支援 Undo 撤銷

**最快速**: 執行 quick-replace.sh 腳本 ⭐⭐⭐⭐
- 自動檢測操作系統
- 包含驗證步驟
- 顯示詳細統計
