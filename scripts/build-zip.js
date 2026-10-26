import { execSync } from 'node:child_process';
import fs from 'node:fs';

console.log('🔨 Building application with Vite...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📦 Creating Netlify deployment ZIP archives...');

const pythonZipScript = `
import zipfile
import os

def create_zip(source_dir, output_filename):
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(source_dir):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, start=source_dir)
                zipf.write(abs_path, rel_path)
    print(f"Created archive: {output_filename}")

create_zip('dist', 'netlify-deploy.zip')
create_zip('dist', 'dist.zip')
`;

fs.writeFileSync('_temp_zip.py', pythonZipScript);

try {
  execSync('python3 _temp_zip.py', { stdio: 'inherit' });
} finally {
  if (fs.existsSync('_temp_zip.py')) {
    fs.unlinkSync('_temp_zip.py');
  }
}

console.log('✅ Netlify release build and ZIP bundle complete!');
