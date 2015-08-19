module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		haxe: {
			develop: {
				main: 'Main',
				/*name of the startup class*/
				classpath: ['<%= pkg.haxe_source_files %>', '<%= pkg.haxe_lib %>'],
				/*specify folder/s where source code is located*/
				output: '<%= pkg.haxe_build %><%= pkg.name %>.js',
				/*compile to this file, see http://haxe.org/manual/lf-condition-compilation-flags.html */
				misc: ["-dce no -D nodejs -D js-es5"] 
			},
			production: {
				main: 'Main',
				/*name of the startup class*/
				classpath: ['<%= pkg.haxe_source_files %>', '<%= pkg.haxe_lib %>'],
				/*specify folder/s where source code is located*/
				output: '<%= pkg.haxe_build %><%= pkg.name %>.js',
				/*compile to this file, see http://haxe.org/manual/lf-condition-compilation-flags.html */
				misc: ["-dce no -D nodejs -D js-es5 -D no-traces"]
			},
			test: {
				main: 'MyTest',
				/*name of the startup class*/
				classpath: ['<%= pkg.haxe_test_files %>', '<%= pkg.haxe_lib %>'],
				/*specify folder/s where source code is located*/
				output: '<%= pkg.haxe_build_test %>/test.js',
				/*compile to this file, see http://haxe.org/manual/lf-condition-compilation-flags.html */
				misc: ["-dce no -D nodejs -D js-flatten -D js-es5"] 
			}
		},
		watch: {
			dev: {
				files: ['<%= pkg.haxe_source_files %>**/*.hx', '.<%= pkg.haxe_assets %>**/*'],
				tasks: ['default'],
				options: {
					nospawn: true,
				},
			}
		},
		clean: {
			options: {
				force: true
			},
			exports: [
				'<%= pkg.haxe_build %><%= pkg.name %>.js',
				'<%= pkg.haxe_build %><%= pkg.name %>-compiled.js',
				'<%= pkg.haxe_build %><%= pkg.name %>-test.js'
			],
		},
		exec: {
			run: {
				stdout: true,
				command: 'node index.js'
			},
			test: {
				stdout: true,
				command: 'node test/test.js'
			},
			cc: {
				stdout: true,
				command: 'java -jar node_modules/closurecompiler/compiler/compiler.jar --js <%= pkg.haxe_build %><%= pkg.name %>.js --js_output_file <%= pkg.haxe_build %><%= pkg.name %>-compiled.js'
			},
			// Do not use cc_advanced when passing the facade to other packages in node, because it changes the basic naming in the facade structure.
			cc_advanced: {
				stdout: true,
				command: 'java -jar node_modules/closurecompiler/compiler/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js <%= pkg.haxe_build %><%= pkg.name %>.js --js_output_file <%= pkg.haxe_build %><%= pkg.name %>-compiled.js'
			}
		}
	});

	/* LOAD TASKS */
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-haxe');


	/* Development */
	grunt.registerTask('compile',	['clean:exports', 'haxe:develop']);
	grunt.registerTask('test', 		['clean:exports', 'haxe:develop', 	'haxe:test', 'exec:test']);
	grunt.registerTask('default',	['clean:exports', 'haxe:develop', 	'exec:run']);

	/* Production */
	grunt.registerTask('deploy',	['clean:exports', 'haxe:production', 'exec:run']);
	grunt.registerTask('deploy-cc', ['clean:exports', 'haxe:production', 'exec:cc', 'exec:run']);

};