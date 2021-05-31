"use strict";
// let rocket1: Rocket;
// let rocket2: Rocket;
// array de cohetes
var rockets = new Array();
var rocketId1 = "32WESSDS";
var rocketId2 = "LDSFJA32";
var thrustMaxPower1 = [10, 30, 80];
var thrustMaxPower2 = [30, 40, 50, 50, 30, 10];
var errorMessage = "Sorry, this option is off limits! You haven't created a rocket yet!";
// LAUNCHER - function for the rocket buttons
function addRocket(x) {
    if (x == 0) {
        rockets[x] = new Rocket(rocketId1);
        createThusters(rockets[x], thrustMaxPower1);
        console.log(rockets[x]);
    }
    else if (x == 1) {
        rockets[x] = new Rocket(rocketId2);
        createThusters(rockets[x], thrustMaxPower2);
        console.log(rockets[x]);
    }
}
/* function addRocket(x:number) {
    if (x == 1) {
        rocket1 = new Rocket(rocketId1);
        createThusters(rocket1, thrustMaxPower1);
        console.log(rocket1);
    } else if (x == 2) {
        rocket2 = new Rocket(rocketId2);
        createThusters(rocket2, thrustMaxPower2);
        console.log(rocket2);
    }
} */
// create thrusters
function createThusters(rocket, thrustMaxPower) {
    for (var i = 0; i < thrustMaxPower.length; i++) {
        rocket.addThruster(new Thruster(thrustMaxPower[i]));
    }
}
// calculate the current velocity
function calculateSpeed(rocket) {
    var currentSpeed = 0;
    for (var i = 0; i < rocket.thrusters.length; i++) {
        currentSpeed += rocket.thrusters[i].currentPower;
    }
    console.log(currentSpeed);
    clean();
    document.getElementById("velocidad").innerText = "The current speed of the rocket is: " + currentSpeed;
}
// ENGINE - speed up
function speedUp(rocket) {
    for (var i = 0; i < rocket.thrusters.length; i++) {
        if (rocket.thrusters[i].thrustMaxPower > rocket.thrusters[i].currentPower) {
            rocket.thrusters[i].currentPower += 10;
        }
    }
}
function getRocket(x) {
    var rocket = new Rocket("");
    if (rockets[x] == undefined) {
        alert(errorMessage);
    }
    else {
        rocket = rockets[x];
    }
    return rocket;
}
/* function getRocket(x: number): Rocket {
    let rocket: Rocket = new Rocket("");
    if (x == 1) {
        if (rocket1 == undefined) {
            alert(errorMessage);
        } else {
            rocket = rocket1;
        }
    } else if (x == 2) {
        if (rocket2 == undefined) {
            alert(errorMessage);
        } else {
            rocket = rocket2;
        }
    }
    return rocket;
} */
// function for the accelerate buttons
function thrusterRocket(x) {
    var rocket = getRocket(x);
    speedUp(rocket);
    calculateSpeed(rocket);
    console.log(rocket);
}
// ENGINE - slow down
function slowDown(rocket) {
    for (var i = 0; i < rocket.thrusters.length; i++) {
        if (rocket.thrusters[i].currentPower > 0) {
            rocket.thrusters[i].currentPower -= 10;
        }
    }
}
// function for the brake buttons
function brakeRocket(x) {
    var rocket = getRocket(x);
    slowDown(rocket);
    calculateSpeed(rocket);
    console.log(rocket);
}
// DATA - show the rocket info
function print(rocket) {
    if (rocket.rocketId !== "") {
        var printThrustMaxPower = [];
        for (var i = 0; i < rocket.thrusters.length; i++) {
            printThrustMaxPower.push(rocket.thrusters[i].thrustMaxPower);
        }
        document.getElementById("info").innerHTML +=
            "The rocket " + rocket.rocketId + " you have created has " + rocket.thrusters.length + " thrusters: " + printThrustMaxPower + "<br>";
    }
}
function clean() {
    document.getElementById("info").innerText = "";
    document.getElementById("velocidad").innerText = "";
}
// function for the rocket info buttons
function printRocketInfo(x) {
    var rocket = getRocket(x);
    clean();
    print(rocket);
}
function printAllRockets() {
    clean();
    for (var i = 0; i < rockets.length; i++) {
        print(getRocket(i));
    }
}
/* function printAllRockets() {
    clean();
    print(getRocket(1));
    (<HTMLInputElement>document.getElementById("info")).innerHTML +="<br>";
    print(getRocket(2));
} */ 
