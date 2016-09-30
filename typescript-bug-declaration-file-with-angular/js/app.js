/// <reference path="node_modules/@types/angular/index.d.ts" />
var MyModule;
(function (MyModule) {
    var MyClass = (function () {
        function MyClass() {
        }
        return MyClass;
    }());
    MyModule.MyClass = MyClass;
})(MyModule || (MyModule = {}));
/// <reference path="node_modules/@types/angular/index.d.ts" />
var MyModule;
(function (MyModule) {
    var MyClassB = (function () {
        function MyClassB(myClass) {
        }
        return MyClassB;
    }());
    MyModule.MyClassB = MyClassB;
})(MyModule || (MyModule = {}));
