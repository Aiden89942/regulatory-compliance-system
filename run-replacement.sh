#!/bin/bash

# 字重批量替換腳本
# 將所有 'wght' 700 替換為 'wght' 900

echo "🔍 開始搜尋需要替換的文件..."

# 計算需要處理的文件數量
COUNT=$(grep -rl "'wght' 700" src 2>/dev/null | wc -l)
echo "📝 找到 $COUNT 個文件需要處理"

# 執行替換（使用 perl 以確保跨平台兼容性）
if command -v perl &> /dev/null; then
    echo "✨ 使用 Perl 進行替換..."
    find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec perl -pi -e "s/'wght' 700/'wght' 900/g" {} \;
else
    echo "⚠️  Perl 未安裝，嘗試使用 sed..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s/'wght' 700/'wght' 900/g" {} \;
    else
        # Linux
        find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
    fi
fi

# 驗證結果
REMAINING=$(grep -rl "'wght' 700" src 2>/dev/null | wc -l)
UPDATED=$(grep -rl "'wght' 900" src 2>/dev/null | wc -l)

echo ""
echo "✅ 替換完成！"
echo "📊 統計結果："
echo "   - 包含 'wght' 900 的文件: $UPDATED"
echo "   - 仍包含 'wght' 700 的文件: $REMAINING"

if [ "$REMAINING" -eq 0 ]; then
    echo "🎉 所有文件替換成功！"
else
    echo "⚠️  還有 $REMAINING 個文件未成功替換，請手動檢查"
    grep -rl "'wght' 700" src 2>/dev/null
fi
