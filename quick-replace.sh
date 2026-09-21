#!/bin/bash

# 🎯 快速替換腳本 - 將所有 'wght' 700 替換為 'wght' 900
# 適用於 Linux/Mac/Windows Git Bash

echo "🔍 正在搜尋包含 'wght' 700 的文件..."
echo ""

# 先顯示將要修改的文件列表
FILES=$(grep -rl "'wght' 700" src 2>/dev/null)
COUNT=$(echo "$FILES" | grep -c .)

if [ "$COUNT" -eq 0 ]; then
    echo "✅ 沒有找到需要替換的文件！"
    echo "所有替換可能已經完成。"
    exit 0
fi

echo "📝 找到 $COUNT 個文件需要處理："
echo "$FILES"
echo ""
echo "⚠️  即將開始替換... (3秒後開始，按 Ctrl+C 取消)"
sleep 3

echo ""
echo "🚀 開始批量替換..."

# 執行替換
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "檢測到 macOS 系統，使用 BSD sed..."
    find src -type f \( -name "*.tsx" -o -name "*.ts" \) -print0 | xargs -0 sed -i '' "s/'wght' 700/'wght' 900/g"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    # Windows Git Bash
    echo "檢測到 Windows 系統，使用 sed..."
    find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} +
else
    # Linux
    echo "檢測到 Linux 系統，使用 GNU sed..."
    find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} +
fi

echo ""
echo "✅ 替換執行完成！"
echo ""
echo "🔍 正在驗證結果..."

# 驗證
REMAINING=$(grep -rl "'wght' 700" src 2>/dev/null | wc -l)
UPDATED=$(grep -rl "'wght' 900" src 2>/dev/null | wc -l)

echo ""
echo "📊 替換結果統計："
echo "   ✅ 包含 'wght' 900 的文件數: $UPDATED"
echo "   ⚠️  仍包含 'wght' 700 的文件數: $REMAINING"
echo ""

if [ "$REMAINING" -eq 0 ]; then
    echo "🎉 完美！所有文件已成功替換！"
    echo "   所有粗體字重已從 700 (Bold) 更新為 900 (Extra Bold)"
else
    echo "⚠️  警告：還有 $REMAINING 個文件未成功替換"
    echo ""
    echo "未替換的文件列表："
    grep -rl "'wght' 700" src 2>/dev/null
    echo ""
    echo "💡 建議：請手動檢查這些文件，或使用 VS Code 全局搜尋替換"
fi

echo ""
echo "✨ 完成！"
