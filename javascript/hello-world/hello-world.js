"use strict";
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.hello = function (name) {
        if (name) {
            return "Hello, " + name + "!";
        }
        else {
            return "Hello, World!";
        }
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
