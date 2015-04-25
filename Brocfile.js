var compileSass = require('broccoli-sass');
var esTranspiler = require('broccoli-babel-transpiler');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var sassDir = 'app/scss';
var babelDir = 'app/babel';

var styles = compileSass([sassDir], 'app.scss', 'app.css');
var script = esTranspiler(babelDir, { filterExtensions:['js', 'es6'] });
var app = new Funnel('app', { destDir: '/' });

module.exports = mergeTrees([app, styles, script]);
