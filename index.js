var pkg = require('./package.json');
try {
	module.exports = require(String(['./build/',pkg.name].join(''))).Main.start();
} catch(e) {
	module.exports = require(String(['./build/',pkg.name].join(''))).Main.start();
}