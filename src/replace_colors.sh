#!/bin/sh
FILE="src/imports/21情資追蹤碩網資訊股份有限公司.tsx"

# Backgrounds
sed -i 's/bg-\[#ececf3\]/bg-\[#ececf3\] dark:bg-\[#2e2e38\]/g' "$FILE"
sed -i 's/bg-white/bg-white dark:bg-\[#1a1a24\]/g' "$FILE"
sed -i 's/bg-\[#f6f6fa\]/bg-\[#f6f6fa\] dark:bg-\[#2e2e38\]/g' "$FILE"
sed -i 's/bg-\[#fafbff\]/bg-\[#fafbff\] dark:bg-\[#2e2e38\]/g' "$FILE"

# Texts
sed -i 's/text-\[#1a1a24\]/text-\[#1a1a24\] dark:text-white/g' "$FILE"
sed -i 's/text-\[#747480\]/text-\[#747480\] dark:text-\[#a1a1aa\]/g' "$FILE"
sed -i 's/text-\[#4a5565\]/text-\[#4a5565\] dark:text-\[#9ca3af\]/g' "$FILE"
sed -i 's/text-black/text-black dark:text-white/g' "$FILE"

# Borders
sed -i 's/border-\[#e5e7eb\]/border-\[#e5e7eb\] dark:border-\[#4a5565\]/g' "$FILE"
sed -i 's/border-\[#ececf3\]/border-\[#ececf3\] dark:border-\[#4a5565\]/g' "$FILE"

echo "Replaced colors successfully."
