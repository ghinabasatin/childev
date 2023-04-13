const glob = require('glob');

// Keenthemes' plugins
var componentJs = glob.sync(`resources/_keenthemes/src/metronic/demo1/js/components/*.js`) || [];
var coreLayoutJs = glob.sync(`resources/_keenthemes/src/metronic/demo1/js/layout/*.js`) || [];

module.exports = [
    ...componentJs,
    ...coreLayoutJs,
];
