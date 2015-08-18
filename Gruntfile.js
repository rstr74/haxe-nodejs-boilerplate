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
				/*compile to this file*/
				misc: ["-dce no "] /* override console.log, with trace !!! */
			},
			production: {
				main: 'Main',
				/*name of the startup class*/
				classpath: ['<%= pkg.haxe_source_files %>', '<%= pkg.haxe_lib %>'],
				/*specify folder/s where source code is located*/
				output: '<%= pkg.haxe_build %><%= pkg.name %>.js',
				/*compile to this file*/
				misc: ["-dce no -D no-traces"]  /* no-trace does not override console.log */
			},
			test: {
				main: 'MyTest',
				/*name of the startup class*/
				classpath: ['<%= pkg.haxe_test_files %>', '<%= pkg.haxe_lib %>'],
				/*specify folder/s where source code is located*/
				output: '<%= pkg.haxe_build %><%= pkg.name %>-test.js',
				/*compile to this file*/
				misc: ["-dce full -D js-flatten "] //-D shallow-expose 
			}
		},
		execute: {
			run: {
				// execute javascript files in a node child_process 
				src: ['node <%= pkg.haxe_build %>index-test.js']
			},
			test: {
				// execute javascript files in a node child_process 
				src: ['<%= pkg.haxe_build %><%= pkg.name %>-test.js']
			},
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
	grunt.loadNpmTasks('grunt-execute');


	/* Development */
	grunt.registerTask('compile',	['clean:exports', 'haxe:develop']);
	grunt.registerTask('test', 		['clean:exports', 'haxe:develop', 	'haxe:test', 'execute:test']);
	grunt.registerTask('default',	['clean:exports', 'haxe:develop', 	'execute:run']);

	/* Production */
	grunt.registerTask('deploy',	['clean:exports', 'haxe:production', 'execute:run']);
	grunt.registerTask('deploy-cc', ['clean:exports', 'haxe:production', 'exec:cc', 'execute:run']);

};