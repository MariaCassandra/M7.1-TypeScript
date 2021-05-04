"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, drives) {
        this.code = code;
        this.drives = drives;
        this.currentPower = 0;
        this.maxPower = this.calculatePower();
    }
    Rocket.prototype.calculatePower = function () {
        return this.drives.reduce(function (prev, cur) {
            return prev + cur;
        }, 0);
    };
    Rocket.prototype.getPrintData = function () {
        return this.code + ": " + this.drives + " => Potencia actual " + this.currentPower;
    };
    Rocket.prototype.throttle = function () {
        this.currentPower += 10;
        if (this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower;
        }
        return "Increment +10 = " + this.currentPower + " current power";
    };
    Rocket.prototype.brake = function () {
        this.currentPower -= 10;
        if (this.currentPower < 0) {
            this.currentPower = 0;
        }
        return "Decrement -10 = " + this.currentPower + " current power";
    };
    return Rocket;
}());
