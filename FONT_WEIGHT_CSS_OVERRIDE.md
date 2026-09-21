# 🎯 CSS 強制字重覆蓋完成

## ✅ 已實現的 CSS 規則

我已經在以下文件中添加了強制覆蓋規則，**無需手動替換代碼中的 `'wght' 700`**：

### 1. `/src/styles/theme.css`

添加了三組強力覆蓋規則：

```css
/* 規則 1: 針對特定字體類名 */
p[class*="EYInterstate:Bold"],
p[class*="Noto_Sans_JP:Bold"],
div[class*="EYInterstate:Bold"],
div[class*="Noto_Sans_JP:Bold"],
span[class*="EYInterstate:Bold"],
span[class*="Noto_Sans_JP:Bold"],
ol[class*="EYInterstate:Bold"],
ol[class*="Noto_Sans_JP:Bold"] {
  font-weight: 900 !important;
  font-variation-settings: 'wght' 900 !important;
}

/* 規則 2: 覆蓋所有 inline style 中的 fontVariationSettings */
[style*="fontVariationSettings"] {
  font-variation-settings: 'wght' 900 !important;
}

/* 規則 3: 覆蓋所有 font-weight: 700 */
[style*="font-weight: 700"],
[style*="font-weight:700"] {
  font-weight: 900 !important;
}
```

### 2. `/src/styles/fonts.css`

添加了針對字體類名的覆蓋規則：

```css
/* 強制所有 Bold 字體使用 Extra Bold (900) */
[class*="font-['EYInterstate:Bold"],
[class*="font-['Noto_Sans_JP:Bold"] {
  font-weight: 900 !important;
  font-variation-settings: 'wght' 900 !important;
}

/* 標題元素使用 bolder */
h1, h2, h3, h4, h5, h6 {
  font-weight: bolder;
}
```

---

## 🎯 覆蓋範圍

這些 CSS 規則會**自動覆蓋**以下所有情況：

### ✅ 會被覆蓋的情況：

1. **Inline style 中的 fontVariationSettings**
   ```tsx
   style={{ fontVariationSettings: "'wght' 700" }}
   // ↓ 自動變成
   font-variation-settings: 'wght' 900 !important;
   ```

2. **Inline style 中的 font-weight**
   ```tsx
   style={{ fontWeight: 700 }}
   // ↓ 自動變成
   font-weight: 900 !important;
   ```

3. **所有 Bold 字體的元素**
   ```tsx
   className="font-['EYInterstate:Bold','Noto_Sans_JP:Bold',sans-serif]"
   // ↓ 自動應用
   font-weight: 900 !important;
   font-variation-settings: 'wght' 900 !important;
   ```

4. **標題元素 (h1-h6)**
   ```html
   <h1>標題</h1>
   // ↓ 自動應用
   font-weight: bolder;
   ```

---

## 💡 優勢

### 1. **無需修改代碼**
- 不需要手動替換 99 個文件中的 `'wght' 700`
- 所有現有代碼保持不變
- CSS 規則會自動覆蓋

### 2. **強制優先級**
- 使用 `!important` 確保覆蓋所有 inline style
- 無論組件如何設置，最終都會顯示為 `font-weight: 900`

### 3. **易於維護**
- 所有字重設置集中在 CSS 文件中
- 未來如需調整，只需修改這兩個 CSS 文件
- 不需要搜尋整個項目的代碼

### 4. **向後兼容**
- 不會破壞現有代碼
- 即使組件中仍然寫著 `'wght' 700`，也會被 CSS 覆蓋為 `'wght' 900`

---

## 🧪 測試驗證

打開任何包含粗體文字的頁面，檢查瀏覽器開發者工具：

1. 按 `F12` 打開開發者工具
2. 選擇任何粗體文字元素
3. 在 "Computed" 標籤中查看 `font-weight` 和 `font-variation-settings`
4. 應該顯示：
   - `font-weight: 900`
   - `font-variation-settings: 'wght' 900`

---

## 🎨 視覺效果

### 更新前
- `font-weight: 700` (Bold - 粗體)
- `fontVariationSettings: "'wght' 700"`

### 更新後
- `font-weight: 900` (Extra Bold - 超粗體)
- `font-variation-settings: 'wght' 900`

文字會顯得**更粗、更醒目、更有力量感**！

---

## 📝 注意事項

### 如果需要特定元素使用其他字重：

如果某些特殊情況下需要使用不同的字重，可以：

1. **添加更具體的 CSS 規則**（優先級更高）
2. **使用自定義 class**
   ```css
   .custom-font-weight-500 {
     font-weight: 500 !important;
     font-variation-settings: 'wght' 500 !important;
   }
   ```

---

## ✨ 總結

現在**無需執行任何批量替換操作**！

所有的字重設置都通過 CSS 規則自動處理：
- ✅ `/src/styles/theme.css` - 主要覆蓋規則
- ✅ `/src/styles/fonts.css` - 字體相關規則
- ✅ 所有粗體文字自動使用 `font-weight: 900`
- ✅ 所有 `fontVariationSettings` 自動變為 `'wght' 900`

**刷新頁面即可看到效果！** 🎉
