"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketId) {
        this.thrusters = new Array();
        this.rocketId = rocketId;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
