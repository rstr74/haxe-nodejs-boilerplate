## What is this?

This is a Haxe to javaScript 'transpiling' boilerplate with a grunt-haxe and google closurecompiler setup. Use this for javascript development projects that run into the limitations or weirdness of the javascript language. Work around that with the great OOP features that HAXE provide. (interface warnings, type checking, extending etc).

Use ```grunt watch``` and it compiles and executes after save some file in the haxe ```source directory```. Other packages (like puremvc for example) can be placed in the ```lib``` directory. 

All compiled code is stored in the ```build``` folder, and it has the name of the ```name```  property in the root's package.json file. for exampele:
```build/somemodule.js``` (haxe) and ```build/somemodule-compiled.js``` (haxe+closurecompiler).

## Dependencies:

* Node.js v0.12.0
* Haxe 3.2.0
* npm (see packages below)

### npm packages:
* closurecompiler
* grunt
* grunt-contrib-clean
* grunt-contrib-copy
* grunt-contrib-jshint
* grunt-contrib-watch
* grunt-contrib-yuidoc
* grunt-exec
* grunt-execute
* grunt-haxe

### Java
* java version "1.8.0_51" (for closurecompiler)

## How to use 

First change the name property in package.json (in root of this folder). This propery is used in the Gruntfile.js and gives the haxe and closure compiler the right paths for this package.

Then, to install all dependencies with npm, type:
```
npm install
```

For now there is a minimal setup in PureMVC for HAXE; Please note that all haxe classes use the ```@:expose``` compiler directive.

Alter the sourcecode in the 'source' dir and then use the grunt-cli options:
```
grunt watch (live compiling and running when save files in 'source' directory)
grunt default (or just 'grunt')
grunt test (the test runner)
grunt compile
grunt deploy
```


### Project structure

```
assets          
build           dir where compiled files are deployed
lib             haxe lib folder, with your libs/packages (not haxelib)
source          folder for HAXE source files
test            setup for unit testing (runner)
```

# License

MIT