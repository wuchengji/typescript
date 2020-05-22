"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var absClass;
(function (absClass) {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.run = function () {
            console.log('running......');
        };
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.say = function () {
            console.log('dog say......');
        };
        Dog.prototype.run = function () {
            console.log('dog running......');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
})(absClass || (absClass = {}));
var abs;
(function (abs) {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.born = function () {
            console.log('born...');
        };
        Animal.prototype.run = function () {
            console.log('running...');
        };
        Animal.prototype.main = function () {
            this.born();
        };
        return Animal;
    }());
    var animal = new Animal();
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.done = function () {
            this.run();
            this.main();
        };
        return Dog;
    }(Animal));
})(abs || (abs = {}));
//# sourceMappingURL=index.js.map