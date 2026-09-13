const esbuild = require('esbuild');
const sass = require('sass');
const fs = require('fs');
const path = require('path');

const isWatch = process.argv.includes('--watch');

// Ensure build directory exists
if (!fs.existsSync('build')) {
  fs.mkdirSync('build', { recursive: true });
}

// Compile SCSS files
function compileSass() {
  try {
    const styleResult = sass.compile('src/style.scss', { style: 'compressed' });
    fs.writeFileSync('build/style-index.css', styleResult.css);
    console.log('✓ Compiled src/style.scss -> build/style-index.css');

    const editorResult = sass.compile('src/editor.scss', { style: 'compressed' });
    fs.writeFileSync('build/index.css', editorResult.css);
    console.log('✓ Compiled src/editor.scss -> build/index.css');
  } catch (err) {
    console.error('Sass Compilation Error:', err);
  }
}

// esbuild plugin to map @wordpress/* imports to window.wp.*
const wpGlobalsPlugin = {
  name: 'wp-globals',
  setup(build) {
    build.onResolve({ filter: /^@wordpress\// }, args => {
      const moduleName = args.path.replace(/^@wordpress\//, '');
      const camelCaseMap = {
        'block-editor': 'blockEditor',
        'blocks': 'blocks',
        'element': 'element',
        'components': 'components',
        'i18n': 'i18n',
        'data': 'data',
        'compose': 'compose'
      };
      const varName = camelCaseMap[moduleName] || moduleName;
      return { path: args.path, namespace: 'wp-global', pluginData: { varName } };
    });

    build.onLoad({ filter: /.*/, namespace: 'wp-global' }, args => {
      return {
        contents: `module.exports = window.wp.${args.pluginData.varName};`,
        loader: 'js',
      };
    });
  },
};

async function build() {
  compileSass();

  const editorContext = await esbuild.context({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'build/index.js',
    format: 'iife',
    plugins: [wpGlobalsPlugin],
    loader: { '.js': 'jsx' },
    sourcemap: true,
    target: ['es2020'],
  });

  const viewContext = await esbuild.context({
    entryPoints: ['src/view.js'],
    bundle: true,
    outfile: 'build/view.js',
    format: 'iife',
    sourcemap: true,
    target: ['es2020'],
  });

  if (isWatch) {
    await editorContext.watch();
    await viewContext.watch();
    console.log('Watching for changes in src/...');
    fs.watch('src', { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.scss')) {
        compileSass();
      }
    });
  } else {
    await editorContext.rebuild();
    await viewContext.rebuild();
    await editorContext.dispose();
    await viewContext.dispose();
    console.log('✓ Successfully built build/index.js and build/view.js');
  }
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
