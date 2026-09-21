#!/bin/sh
cd /tmp/sandbox
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/'wght' 700/'wght' 900/g" {} \;
echo "Replacement complete"
