"use strict";
//let rocketsArray = new Array();
var rockets = [];
function addRocket1(event) {
    rockets.push(new Rocket('32WESSDS', [10, 30, 80]));
    event.target.disabled = true;
}
function addRocket2(event) {
    rockets.push(new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]));
    event.target.disabled = true;
}
function printRocket(rocket) {
    var root = document.getElementById('rockets');
    if (root) {
        var child = document.createElement('div');
        var content = document.createTextNode(rocket.getPrintData());
        child.appendChild(content);
        root.appendChild(child);
    }
}
function throttleRocket(index) {
    if (index >= 0 && index < rockets.length) {
        rockets[index].throttle();
        printRocketInfo(index);
    }
}
function brakeRocket(index) {
    if (index >= 0 && index < rockets.length) {
        rockets[index].brake();
        printRocketInfo(index);
    }
}
function printRocketInfo(index) {
    if (index !== undefined) {
        if (index >= 0 && index < rockets.length) {
            printRocket(rockets[index]);
        }
    }
    else {
        rockets.forEach(function (rocket) { return printRocket(rocket); });
    }
}
