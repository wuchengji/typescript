"use strict";
var base;
(function (base) {
    function fn(words) {
        return words;
    }
    fn(123);
    fn('123');
})(base || (base = {}));
var mutGenerics;
(function (mutGenerics) {
    function fn(name, age) {
        return [name, age];
    }
    fn(1123, '123');
    fn(1123, 999);
})(mutGenerics || (mutGenerics = {}));
(function (mutGenerics) {
    function fn(arg) {
        console.log(arg.length);
        return arg;
    }
    fn([1, 2, 3, 4, 5, '6']);
})(mutGenerics || (mutGenerics = {}));
var genericsInterface;
(function (genericsInterface) {
    var returnItem = function (para) { return para; };
})(genericsInterface || (genericsInterface = {}));
var genericsClass;
(function (genericsClass) {
    var Stack = (function () {
        function Stack() {
            this.arr = [];
        }
        Stack.prototype.push = function (arg) {
            this.arr.push(arg);
        };
        Stack.prototype.pop = function () {
            this.arr.pop();
        };
        return Stack;
    }());
})(genericsClass || (genericsClass = {}));
function getObjVal(obj, key) {
    return obj[key];
}
getObjVal({ name: '123' }, 'name');
//# sourceMappingURL=index.js.map