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
        "outFile": "js/",
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

**Links:**

Stackoverflow: <http://stackoverflow.com/questions/39792617/generating-a-d-ts-file-with-the-compiler-option-generates-a-error-for-angular>
