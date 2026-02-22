import * as esbuild from 'esbuild';

// Config
const config = {
  // 1. The entry points: Your 3 specific theme files
  entryPoints: [
    'src/themes/Mozilla_Classic/chrome/userChrome.css',
    // 'src/themes/Mozilla_Modern/chrome/userChrome.css',
    'src/themes/Firefox_Winstripe/chrome/userChrome.css'
  ],

  // 2. Output directory
  outdir: 'Themes',

  // 3. Bundle: This resolves all @import statements into one file per entry
  bundle: true,

  // 4. Loaders: This tells esbuild how to handle non-CSS assets referenced in url()
  // 'file' copies the asset to the output dir and updates the path in the CSS
  // 'dataurl' inlines small images as base64 strings (optional alternative)
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
    '.gif': 'file'
  },
  
  // OPTIONAL: Clean up asset filenames (e.g., puts images in an 'assets' subfolder in dist)
  assetNames: '[dir]/[name]',

  // OPTIONAL: Minify the CSS (remove whitespace/comments)
  // Set to false if you strictly want "do nothing else" regarding compression
  minify: false, 
  
  // OPTIONAL: Generate source maps for debugging
  sourcemap: false,
  
  // Ensure logs are helpful
  logLevel: 'info',
};

// Run the build
if (process.argv.includes('--watch')) {
  try {
    const ctx = await esbuild.context(config);
    await ctx.watch();
    console.log('Watching for changes...');
    console.log('⚡ CSS Bundling complete!');
  }
  catch (e) {
    console.error('Build failed');
    process.exit(1);
  }
}
else {
  try {
    const ctx = await esbuild.context(config);
    await ctx.rebuild();
    await ctx.dispose();
    console.log('⚡ CSS Bundling complete!');
  
  }
  catch (e) {
    console.error('Build failed');
    process.exit(1);
  }
}
