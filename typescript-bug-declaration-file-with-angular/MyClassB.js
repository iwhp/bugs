"use strict";
var MyModule;
(function (MyModule) {
    var MyClassB = (function () {
        function MyClassB() {
        }
        return MyClassB;
    }());
    MyModule.MyClassB = MyClassB;
})(MyModule = exports.MyModule || (exports.MyModule = {}));
//# sourceMappingURL=MyClassB.js.map