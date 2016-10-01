define("MyClass", ["require", "exports"], function (require, exports) {
    "use strict";
    var MyClass = (function () {
        function MyClass() {
        }
        return MyClass;
    }());
    exports.MyClass = MyClass;
});
define("MyClassB", ["require", "exports"], function (require, exports) {
    "use strict";
    var MyClassB = (function () {
        function MyClassB(myClass) {
        }
        return MyClassB;
    }());
    exports.MyClassB = MyClassB;
});
define("MyModule", ["require", "exports", "MyClass", "MyClassB"], function (require, exports, MyClass_1, MyClassB_1) {
    "use strict";
    exports.MyClass = MyClass_1.MyClass;
    exports.MyClassB = MyClassB_1.MyClassB;
});
define("MyApp", ["require", "exports"], function (require, exports) {
    "use strict";
    var MyApp = (function () {
        function MyApp(myClass) {
        }
        return MyApp;
    }());
});
