const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const updated = content.replace(/'wght' 700/g, "'wght' 900");
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        count += walkDir(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (replaceInFile(filePath)) {
        count++;
      }
    }
  });
  
  return count;
}

const rootDir = path.join(__dirname, 'src');
console.log(`Starting replacement in ${rootDir}...`);
const count = walkDir(rootDir);
console.log(`\nTotal files updated: ${count}`);
