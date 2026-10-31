import { execSync } from 'node:child_process';
import fs from 'node:fs';

console.log('🔨 Building application with Vite...');
execSync('npm run build', { stdio: 'inherit' });

try {
  const distAssetsDir = 'dist/assets';
  const distSwPath = 'dist/sw.js';
  if (fs.existsSync(distAssetsDir) && fs.existsSync(distSwPath)) {
    let swContent = fs.readFileSync(distSwPath, 'utf8');
    const assetFiles = fs
      .readdirSync(distAssetsDir)
      .filter((f) => f.endsWith('.js') || f.endsWith('.css'))
      .map((f) => `"/assets/${f}"`)
      .filter((entry) => !swContent.includes(entry));
    if (assetFiles.length > 0) {
      swContent = swContent.replace(
        '"/assets/workbox-window.prod.es5-BBnX5xw4.js"',
        ['"/assets/workbox-window.prod.es5-BBnX5xw4.js"', ...assetFiles].join(',\n  ')
      );
      fs.writeFileSync(distSwPath, swContent, 'utf8');
    }
    console.log(`✅ Verified precache list in dist/sw.js (+${assetFiles.length} build assets).`);
  }
} catch (err) {
  console.warn('Could not inject asset list into dist/sw.js:', err);
}

try {
  const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(self), microphone=(self), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.openfoodfacts.org https://www.themealdb.com; font-src 'self' data:; connect-src 'self' https://world.openfoodfacts.org https://*.openfoodfacts.org https://www.themealdb.com https://wger.de; worker-src 'self' blob:; frame-src 'self'; object-src 'none'; base-uri 'self';

/manifest.webmanifest
  Content-Type: application/manifest+json; charset=utf-8
  Cache-Control: public, max-age=0, must-revalidate

/sw.js
  Content-Type: application/javascript; charset=utf-8
  Cache-Control: no-cache, no-store, must-revalidate

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
`;
  fs.writeFileSync('dist/_headers', headersContent, 'utf8');
  console.log('✅ Generated dist/_headers for Netlify deployment.');
} catch (err) {
  console.warn('Could not write dist/_headers:', err);
}

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
} catch (err) {
  console.warn('Skipping local ZIP archive generation (python3 not available in CI):', err.message);
} finally {
  if (fs.existsSync('_temp_zip.py')) {
    fs.unlinkSync('_temp_zip.py');
  }
}

console.log('✅ Netlify release build and ZIP bundle complete!');
