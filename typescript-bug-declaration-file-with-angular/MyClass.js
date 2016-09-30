"use strict";
var MyModule;
(function (MyModule) {
    var MyClass = (function () {
        function MyClass() {
        }
        return MyClass;
    }());
    MyModule.MyClass = MyClass;
})(MyModule = exports.MyModule || (exports.MyModule = {}));
//# sourceMappingURL=MyClass.js.map