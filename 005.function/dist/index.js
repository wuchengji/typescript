"use strict";
var base;
(function (base) {
    function fn(name) {
        var reset = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            reset[_i - 1] = arguments[_i];
        }
    }
    var fn2 = function (name, age) { };
})(base || (base = {}));
var fnOverload;
(function (fnOverload) {
    function fn(top, left, right, bottom) {
        return {
            top: top,
            left: left,
            right: right,
            bottom: bottom
        };
    }
    fn(1);
    fn(1, 2);
})(fnOverload || (fnOverload = {}));
//# sourceMappingURL=index.js.map