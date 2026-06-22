const fs = require('fs');
const path = require('path');

function loadHTML() {
  const htmlPath = path.resolve(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  document.open();
  document.write(html);
  document.close();
  return document;
}

function loadCSS() {
  const cssPath = path.resolve(__dirname, '..', 'style.css');
  return fs.readFileSync(cssPath, 'utf-8');
}

module.exports = { loadHTML, loadCSS };
