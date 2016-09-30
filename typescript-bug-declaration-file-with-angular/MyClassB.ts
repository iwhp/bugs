/// <reference path="node_modules/@types/angular/index.d.ts" />

module MyModule {
    export class MyClassB implements angular.IServiceProvider {
        constructor(myClass: MyModule.MyClass) {
        }

        $get;
    }
}