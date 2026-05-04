const fs = require('fs');
const path = require('path');

// Check if html-minifier-terser is installed
let minify;
try {
    minify = require('html-minifier-terser').minify;
} catch (e) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: "html-minifier-terser" is not installed.');
    console.log('Please run the following command to install the required dependency:');
    console.log('\x1b[36m%s\x1b[0m', 'npm install html-minifier-terser --save-dev');
    process.exit(1);
}

const src = path.join(__dirname, 'index.html');
const distDir = path.join(__dirname, 'dist');
const dist = path.join(distDir, 'index.html');
const staticAssets = [
    'help.html',
    'manifest.webmanifest',
    'sw.js',
    'locales.js',
    'i18n.js',
    path.join('icons', 'icon.svg')
];

(async () => {
    if (!fs.existsSync(src)) {
        console.error('Error: index.html not found at ' + src);
        process.exit(1);
    }

    // Create dist directory if it doesn't exist
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
        console.log('Created dist directory.');
    }

    const copyStaticAsset = (relativePath) => {
        const sourcePath = path.join(__dirname, relativePath);
        if (!fs.existsSync(sourcePath)) {
            console.warn(`  ! Warning: ${relativePath} not found, skipping copy.`);
            return;
        }

        const destinationPath = path.join(distDir, relativePath);
        fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
        fs.copyFileSync(sourcePath, destinationPath);
        console.log(`  - Copied ${relativePath}`);
    };

    console.log('Reading index.html...');
    let html = fs.readFileSync(src, 'utf8');

    // INLINE EXTERNAL SCRIPTS to keep it "Portable" (Single File)
    console.log('Inlining external scripts...');

    const inlineScript = (filename) => {
        const filePath = path.join(__dirname, filename);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            // Regex to replace <script src="filename"></script> with <script>content</script>
            const regex = new RegExp(`<script src="${filename}"><\/script>`, 'i');
            html = html.replace(regex, `<script>${content}</script>`);
            console.log(`  - Inlined ${filename}`);
        } else {
            console.warn(`  ! Warning: ${filename} not found, skipping inline.`);
        }
    };

    inlineScript('locales.js');
    inlineScript('i18n.js');


    console.log('Minifying and obfuscating...');
    try {
        const minifiedHtml = await minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true, // Minify CSS in <style>
            minifyJS: {      // Minify JS in <script>
                mangle: true, // Obfuscates variable names
                compress: {
                    drop_console: true, // Remove console.log in production
                    drop_debugger: true
                }
            }
        });

        fs.writeFileSync(dist, minifiedHtml);
        staticAssets.forEach(copyStaticAsset);

        const originalSize = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(2);
        const newSize = (Buffer.byteLength(minifiedHtml, 'utf8') / 1024).toFixed(2);
        const savings = (100 - (newSize / originalSize * 100)).toFixed(2);

        console.log('\x1b[32m%s\x1b[0m', `✅ Success! Production build created at: dist/index.html`);
        console.table({
            'Original Size': `${originalSize} KB`,
            'Minified Size': `${newSize} KB`,
            'Reduction': `${savings}%`
        });

    } catch (err) {
        console.error('\x1b[31m%s\x1b[0m', 'Minification failed:', err);
    }
})();
