# Generating a d.ts file with the compiler option generates a error for angular

When using the tsc compiler option `"declaration": true` I get the following error:

`error TS4019: Implements clause of exported class 'MyClass' has or is using private name 'angular'.`

I do not get the error when using `"declaration": false`.

Using **TypeScript Version:**  2.0.3

Sample **Code**:

MyClass.ts

    module MyModule {
        export class MyClass implements angular.IServiceProvider {
            constructor() {
            }
            $get;
        }
    }

tsconfig.json

    {
      "compilerOptions": {
        "noImplicitAny": false,
        "noEmitOnError": true,
        "removeComments": false,
        "sourceMap": true,
        "target": "es5",
        "declaration": true
      },
      "exclude": [
        "node_modules"
      ]
    }

**Expected behavior:**

A .d.ts file should be created.

**Addition to the sample above**

Changes to MyClass.ts

    import * as angular from 'angular';
    export module MyModule {
        export class MyClass implements angular.IServiceProvider {
            constructor() {
            }
            $get;
        }
    }

MyClass2.ts

    export module MyModule {
        export class MyClassB implements angular.IServiceProvider {
            constructor(myClass: MyModule.MyClass) {
            }
            $get;
        }
    }

Getting the following Compiler error: 

`error TS2305: Module '"MyClassB".MyModule' has no exported member 'MyClass'.`

**Links:**

Stackoverflow: <http://stackoverflow.com/questions/39792617/generating-a-d-ts-file-with-the-compiler-option-generates-a-error-for-angular>
