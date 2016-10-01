# Generating a d.ts file with the compiler option generates a error for angular

When using the tsc compiler option `"declaration": true` I get the following error:

`error TS4019: Implements clause of exported class 'MyClass' has or is using private name 'angular'.`

I do not get the error when using `"declaration": false`.

Using **TypeScript Version:**  2.0.3

Sample **Code**:

MyClass.ts

    /// <reference path="node_modules/@types/angular/index.d.ts" />
    module MyModule {
        export class MyClass implements angular.IServiceProvider {
            constructor() {
            }
            $get;
        }
    }

MyClass2.ts

    /// <reference path="node_modules/@types/angular/index.d.ts" />
    module MyModule {
        export class MyClassB implements angular.IServiceProvider {
            constructor(myClass: MyModule.MyClass) {
            }
            $get;
        }
    }

tsconfig.json

    {
      "compilerOptions": {
        "target": "es5",
        "outFile": "js/app.js",
        "noImplicitAny": false,
        "noEmitOnError": true,
        "removeComments": false,
        "sourceMap": false,
        "declaration": true
      },
      "exclude": [
        "node_modules"
      ]
    }

**Expected behavior:**

A .d.ts file should be created.

**What I learned**

- It seems that we should no longer use `/// <reference.../> ` in such situations. Instead we use the more modern `import ...` statement.
- Use `module:adm` and `moduleResolution:node`
- I also learned that for building a `module` structure for my classes, I keep each class in a separate file and export that class, without the `module` or `namespace` statement.
  I then create a new file where I export all the classes by using `export { MyClass } from './MyClass';`.
  So I get a module which can then import into other files.
- It seems there are some drawbacks, please read the Stackoverflow thread below for more information.

**Links:**

Stackoverflow: <http://stackoverflow.com/questions/39792617/generating-a-d-ts-file-with-the-compiler-option-generates-a-error-for-angular>

Related:
- http://typescript.codeplex.com/wikipage?title=Modules%20in%20TypeScript&referringTitle=TypeScript%20Documentation
- http://stackoverflow.com/questions/21706455/how-do-i-split-my-module-across-multiple-files-in-typescript-with-node-js/37480976#37480976
 