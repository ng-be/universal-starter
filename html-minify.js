const glob = require('glob');
const fs = require('fs');
const htmlMinifier = require('html-minifier');

const htmlMinifyConfig = {
  'removeComments': true,
  'removeCommentsFromCDATA': true,
  'collapseWhitespace': true,
  'collapseBooleanAttributes': true,
  'removeAttributeQuotes': true,
  'removeRedundantAttributes': true,
  'useShortDoctype': true,
  'removeEmptyAttributes': true,
  'removeOptionalTags': true,
  'minifyCSS': true,
};

// options is optional
glob('dist/browser/**/*.html', {}, (er, files) => {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.

  files.forEach(file => {
    //console.log(fs.readFileSync(file, {encoding: 'utf-8'}));
    const html = htmlMinifier.minify(fs.readFileSync(file, {encoding: 'utf-8'}), htmlMinifyConfig);
    fs.writeFileSync(file, html);
  });

});
