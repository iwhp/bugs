declare module "MyClass" {
    import * as angular from 'angular';
    export class MyClass implements angular.IServiceProvider {
        constructor();
        $get: any;
    }
}
declare module "MyClassB" {
    import * as angular from 'angular';
    import * as MyModule from "MyModule";
    export class MyClassB implements angular.IServiceProvider {
        constructor(myClass: MyModule.MyClass);
        $get: any;
    }
}
declare module "MyModule" {
    export { MyClass } from "MyClass";
    export { MyClassB } from "MyClassB";
}
declare module "MyApp" {
}
