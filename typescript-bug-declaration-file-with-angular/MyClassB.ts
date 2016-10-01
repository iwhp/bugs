import * as angular from 'angular';
import * as MyModule from './MyModule';

export class MyClassB implements angular.IServiceProvider {
    constructor(myClass: MyModule.MyClass) {
    }

    $get;
}