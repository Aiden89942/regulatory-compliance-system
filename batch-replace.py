#!/usr/bin/env python3
import os
import re
from pathlib import Path

def replace_font_weight(file_path):
    """Replace 'wght' 700 with 'wght' 900 in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        # Replace 'wght' 700 with 'wght' 900
        content = content.replace("'wght' 700", "'wght' 900")
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Start from src directory
    src_dir = Path('src')
    
    if not src_dir.exists():
        print("Error: src directory not found")
        return
    
    updated_count = 0
    total_files = 0
    
    # Find all .tsx and .ts files
    for file_path in src_dir.rglob('*.tsx'):
        total_files += 1
        if replace_font_weight(file_path):
            print(f"✅ Updated: {file_path}")
            updated_count += 1
    
    for file_path in src_dir.rglob('*.ts'):
        if file_path.suffix == '.ts' and not file_path.name.endswith('.tsx'):
            total_files += 1
            if replace_font_weight(file_path):
                print(f"✅ Updated: {file_path}")
                updated_count += 1
    
    print(f"\n🎉 Complete!")
    print(f"Total files scanned: {total_files}")
    print(f"Files updated: {updated_count}")

if __name__ == '__main__':
    main()
