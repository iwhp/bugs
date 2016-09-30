import * as angular from 'angular';

export module MyModule {
    export class MyClassB implements angular.IServiceProvider {
        constructor(myClass: MyModule.MyClass) {
        }

        $get;
    }
}