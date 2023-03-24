const ejs = require('ejs');
const fs = require('fs');

const tablaTemplate = fs.readFileSync('../views/lista.ejs', 'utf8');
const tablaRenderizada = ejs.compile(tablaTemplate);

module.exports = tablaRenderizada;