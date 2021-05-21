let rocket1: Rocket;
let rocket2: Rocket;

let rocketId1: string = "32WESSDS";
let rocketId2: string = "LDSFJA32";

let thrustMaxPower1: number[] = [10, 30, 80];
let thrustMaxPower2: number[] = [30, 40, 50, 50, 30, 10];

let currentPower: number;
let x;

// LAUNCHER - function for the rocket buttons
function addRocket(x:number) {

    if (x == 1) {
        rocket1 = new Rocket(rocketId1);
        createThusters(rocket1, thrustMaxPower1);
        calculateSpeed(rocket1);
        console.log(rocket1);
    } else if (x == 2) {
        rocket2 = new Rocket(rocketId2);
        createThusters(rocket2, thrustMaxPower2);
        calculateSpeed(rocket2);
        console.log(rocket2);
    }
}

// create thrusters
function createThusters(rocket: Rocket, thrustMaxPower: number[]) {
    for (let i = 0; i < thrustMaxPower.length; i++) {
        rocket.addThruster(new Thruster(thrustMaxPower[i]));
    }
}

// calculate the current velocity
function calculateSpeed(rocket: Rocket) {
    let currentSpeed = 0;
    for (let i = 0; i < rocket.thrusters.length; i++) {
        currentSpeed += rocket.thrusters[i].currentPower;
    }
    console.log(currentSpeed);
    (<HTMLInputElement>document.getElementById("velocidad")).innerText = "The current speed of the rocket is: " + currentSpeed;
}

// ENGINE - speed up
function speedUp(rocket: Rocket) {
    for (let i = 0; i < rocket.thrusters.length; i++) {
        if (rocket.thrusters[i].thrustMaxPower > rocket.thrusters[i].currentPower)
        {rocket.thrusters[i].currentPower += 10;
        }
    }

}

// function for the accelerate buttons
function thrusterRocket(x: number) {
    if (x == 1) {
        if (rocket1 == undefined) {
            alert("Sorry, this option is off limits! You haven't created a rocket yet!")
        } else {
            speedUp(rocket1);
            calculateSpeed(rocket1);
            console.log(rocket1);
        }
    } else if (x == 2) {
        if (rocket2 == undefined) {
            alert("Sorry, this option is off limits! You haven't created a rocket yet!")
        } else {
            speedUp(rocket2);
            calculateSpeed(rocket2);
            console.log(rocket2);
        }
    }
}


// ENGINE - slow down
function slowDown(rocket: Rocket) {
    for (let i = 0; i < rocket.thrusters.length; i++) {
        if (rocket.thrusters[i].currentPower > 0) {
            rocket.thrusters[i].currentPower -= 10;
        }
    }
}

// function for the brake buttons
function brakeRocket(x: number) {
    if (x == 1) {
        if (rocket1 == undefined) {
            alert("Sorry, this option is off limits! You haven't created a rocket yet!");
        } else {
            slowDown(rocket1);
            calculateSpeed(rocket1);
            console.log(rocket1);
        }
    } else if (x == 2) {
        if (rocket2 == undefined) {
            alert("Sorry, this option is off limits! You haven't created a rocket yet!");
        } else {
            slowDown(rocket2);
            calculateSpeed(rocket2);
            console.log(rocket2);
        }
    }
}
// DATA - show the rocket info
function print(rocket: Rocket) {
    let printThrustMaxPower: number[] = [];
    for (let i = 0; i < rocket.thrusters.length; i++) {
        printThrustMaxPower.push(rocket.thrusters[i].thrustMaxPower)
    }
    (<HTMLInputElement>document.getElementById("info1")).innerText =
    "The rocket " + rocket.rocketId + " you have created has " + rocket.thrusters.length + " thrusters: " + printThrustMaxPower;
}

function print2(rocket: Rocket) {
    let printThrustMaxPower: number[] = [];
    for (let i = 0; i < rocket.thrusters.length; i++) {
        printThrustMaxPower.push(rocket.thrusters[i].thrustMaxPower)
    }
    (<HTMLInputElement>document.getElementById("info2")).innerText =
    "The rocket " + rocket.rocketId + " you have created has " + rocket.thrusters.length + " thrusters: " + printThrustMaxPower;
}

// function for the rocket info buttons
function printRocketInfo() {

        if (rocket1 == undefined || rocket2 == undefined) {
            alert("Sorry, this option is off limits! You haven't created a rocket yet!");
        } else {
		print(rocket1);
        }
}


function printAllRockets() {
    if (rocket1 == undefined && rocket2 == undefined) {
        alert("Sorry, this option is off limits! You haven't created a rocket yet!");
    } else if (rocket1 == undefined) {
        print2(rocket2);
    } else if (rocket2 == undefined) {
        print(rocket1);
    } else {
        print(rocket1);
        print2(rocket2);
    }
}
