"use strict";
var base;
(function (base) {
    var o = {};
    o.name = '123';
    o.age = 12;
})(base || (base = {}));
var doubleAssert;
(function (doubleAssert) {
    var o = 'aaaa';
})(doubleAssert || (doubleAssert = {}));
var instances;
(function (instances) {
    var Dog = (function () {
        function Dog() {
            this.name = 'dog';
        }
        return Dog;
    }());
    var Cat = (function () {
        function Cat() {
            this.age = 10;
        }
        return Cat;
    }());
    function fn(arg) {
        if (arg instanceof Dog) {
            console.log('dog');
        }
        if (arg instanceof Cat) {
            console.log('cat');
        }
    }
    fn(new Dog());
    fn(new Cat());
})(instances || (instances = {}));
var ins;
(function (ins) {
    var Dog = (function () {
        function Dog() {
            this.name = 'dog';
        }
        return Dog;
    }());
    var Cat = (function () {
        function Cat() {
            this.age = 10;
        }
        return Cat;
    }());
    function fn(arg) {
        if ('name' in arg) {
            console.log('dog name');
        }
        if ('age' in arg) {
            console.log('cat age');
        }
    }
    fn(new Dog());
    fn(new Cat());
})(ins || (ins = {}));
//# sourceMappingURL=index.js.map