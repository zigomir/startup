var mergeTrees = require('broccoli-merge-trees');
var less = require('broccoli-less');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');
var compileModules = require('broccoli-es6-module-transpiler');


var appFiles = compileModules('app', {
  formatter: 'bundle',
  output   : 'app.js'
});

var styleFiles = less('styles');

if (env === 'production') {
  appFiles = uglifyJavaScript(appFiles);
}

module.exports = mergeTrees([appFiles, styleFiles, 'public']);
