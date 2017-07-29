"use strict";
exports.__esModule = true;
var Mobile = (function () {
    function Mobile() {
        this.power = 5;
    }
    Mobile.prototype.powerOn = function () {
        console.log("Power is on with " + this.power * 2 + "amp");
    };
    Mobile.prototype.powerOf = function () {
        console.log("Power is off");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var mob = new Mobile();
mob.powerOn();
mob.powerOf();
