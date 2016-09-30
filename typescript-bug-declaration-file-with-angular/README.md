# Generating a d.ts file with the compiler option generates a error for angular

When using the tsc compiler option `"declaration": true` I get the following error:

`error TS4019: Implements clause of exported class 'MyClass' has or is using private name 'angular'.`

I do not get the error when using `"declaration": false`.

Using **TypeScript Version:**  2.0.3

Sample **Code**:

MyClass.ts

```
module MyModule {
    export class MyClass implements angular.IServiceProvider {
        constructor() {
        }
        $get;
    }
}
```

tsconfig.json

```
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
```

There is a github repo on <https://github.com/iwhp/bugs/typescript-bug-declaration-file-with-angular>

**Expected behavior:**

A .d.ts file should be created.

**Links:**

Stackoverflow: <http://stackoverflow.com/questions/39792617/generating-a-d-ts-file-with-the-compiler-option-generates-a-error-for-angular>
