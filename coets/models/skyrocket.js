"use strict";
var SkyRocker = /** @class */ (function () {
    function SkyRocker(uid, bootser) {
        this.uid = uid;
        this.booster = bootser;
    }
    SkyRocker.prototype.addSkyRocker = function (id, booster) {
        return new SkyRocker(id, booster);
    };
    return SkyRocker;
}());
var UI = /** @class */ (function () {
    function UI() {
    }
    //Creem mètode per afegir coets
    UI.prototype.addRockets = function (uid, booster) {
        return new SkyRocker(uid, booster);
    };
    UI.prototype.showRocket = function (rocket) {
        var show = document.getElementById('resp');
        var element = document.createElement('div');
        //Calculem potència màxima motors
        var power = rocket.booster.reduce(function (a, b) { return a + b; }, 0);
        element.innerHTML = "\n       \n            <ul>\n                <li>Model de coet: " + rocket.uid + " </li>\n                <li>N\u00FAmero de motors: " + rocket.booster.length + "</li>\n                <li>Pot\u00E8ncia dels motors: " + rocket.booster + "</li>\n                <li>Pot\u00E8ncia m\u00E0xima: " + power + "</li>\n            </ul>\n       \n        ";
        show.appendChild(element);
    };
    UI.prototype.nonRocket = function () {
        var show = document.getElementById('resp');
        var element = document.createElement('div');
        element.innerHTML = "\n       \n            <h3>No hi han coets per mostrar</h3>\n       \n        ";
        show.appendChild(element);
    };
    //Mètode per desactivar botons  
    UI.prototype.disableBtn = function (id) {
        var btn = document.getElementById(id);
        btn.classList.add("disabled");
    };
    //Mètode per activar botons
    UI.prototype.enableBtn = function (id) {
        var btn = document.getElementById(id);
        btn.classList.remove("disabled");
    };
    return UI;
}());
