"use strict";
var base;
(function (base) {
    var fn = function (user) {
        user.name = 'newName';
        console.log(user);
    };
})(base || (base = {}));
var attr;
(function (attr) {
    function fn(user) {
        console.log(user);
    }
})(attr || (attr = {}));
var functionInt;
(function (functionInt) {
    function fn(user) {
        user.say('123');
        user.run('2222');
    }
    function say(words) {
        return words;
    }
    function run(name) {
        console.log(name + 'running');
    }
})(functionInt || (functionInt = {}));
var attrCheck;
(function (attrCheck) {
    function area(config) {
        var area = 0;
        if (config.width) {
            area = Math.pow(config.width, 2);
        }
        console.log(area);
        return { area: area };
    }
})(attrCheck || (attrCheck = {}));
var obj;
(function (obj_1) {
    function fn(obj) {
        console.log(obj);
    }
})(obj || (obj = {}));
var extendsInter;
(function (extendsInter) {
    function fn(user) {
        console.log(user);
    }
})(extendsInter || (extendsInter = {}));
//# sourceMappingURL=index.js.map