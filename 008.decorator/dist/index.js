"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classDecortor;
(function (classDecortor) {
    function addAge(constructor) {
        constructor.prototype.age = 20;
    }
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal = __decorate([
            addAge
        ], Animal);
        return Animal;
    }());
    var a1 = new Animal('dog');
})(classDecortor || (classDecortor = {}));
var methodDecorator;
(function (methodDecorator) {
    function methods(target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
    var Person = (function () {
        function Person() {
        }
        Person.prototype.say = function () {
            console.log('say...');
        };
        __decorate([
            methods
        ], Person.prototype, "say", null);
        return Person;
    }());
    var p1 = new Person();
})(methodDecorator || (methodDecorator = {}));
//# sourceMappingURL=index.js.map