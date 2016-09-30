import * as angular from 'angular';

export module MyModule {
    export class MyClassB implements angular.IServiceProvider {
        constructor(myModule: MyModule.MyClass) {
        }

        $get;
    }
}