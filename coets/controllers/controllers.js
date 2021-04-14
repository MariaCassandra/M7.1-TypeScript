"use strict";
//Defenim variable per guardar els objectes
var rocketsArray = new Array();
//Funció per crear coets de 3 motors
function onCreate3(uid, booster) {
    var myBooster3 = new SkyRocker(uid, booster);
    var myUI = new UI();
    myBooster3.addSkyRocker(uid, booster);
    myUI.disableBtn('create3');
    myUI.enableBtn('show3');
    myUI.enableBtn('speed3');
    myUI.enableBtn("down3");
    return rocketsArray.push(myBooster3);
}
//Funció per crear coets de 6 motors
function onCreate6(uid, booster) {
    var myBooster6 = new SkyRocker(uid, booster);
    var myUI = new UI();
    myBooster6.addSkyRocker(uid, booster);
    myUI.disableBtn('create6');
    myUI.enableBtn('show6');
    myUI.enableBtn('speed6');
    myUI.enableBtn("down6");
    return rocketsArray.push(myBooster6);
}
//Funció per mostra els coets de 6 motors
function onShow6() {
    var interfice = new UI();
    rocketsArray.forEach(function (element) {
        if (element.booster.length == 6) {
            interfice.showRocket(element);
        }
        else {
            return false;
        }
    });
}
//Funció per mostra els coets de 3 motors
function onShow3() {
    var interfice = new UI();
    rocketsArray.forEach(function (element) {
        if (element.booster.length == 3) {
            interfice.showRocket(element);
        }
        else {
            return false;
        }
    });
}
//Funció per mostra tots els coets
function onShowAll() {
    var interfice = new UI();
    rocketsArray.forEach(function (element) {
        if (element.booster.length !== undefined) {
            interfice.showRocket(element);
            console.log(element.booster);
        }
        if (element.booster.length == null) {
            console.log("asfdasfas");
            interfice.nonRocket();
        }
    });
}
//Funcion per accelerar el coet de 3 motors
function findBooster(uid) {
    return uid.uid === "32WESSDS";
}
function speedUp3() {
    var rockets = rocketsArray.find(findBooster);
    if (rockets.booster[0] == 0 && rockets.booster[1] == 0 && rockets.booster[2] == 0) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 10;
        rockets.booster[2] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 10 && rockets.booster[2] == 10) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 20;
        rockets.booster[2] = 20;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 20 && rockets.booster[2] == 20) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 30;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 30) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 40;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 40) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 50;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 50) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 60;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 60) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 70;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 70) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 80;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 80) {
        alert("El coet ja té la potencia màxima");
        return false;
    }
}
//Funció per frenar el coet
function speedDown3() {
    var rockets = rocketsArray.find(findBooster);
    if (rockets.booster[0] == 10 && rockets.booster[1] == 10 && rockets.booster[2] == 10) {
        rockets.booster[0] = 0;
        rockets.booster[1] = 0;
        rockets.booster[2] = 0;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 20 && rockets.booster[2] == 20) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 10;
        rockets.booster[2] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 30) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 20;
        rockets.booster[2] = 20;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 40) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 30;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 50) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 40;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 60) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 50;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 70) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 60;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 30 && rockets.booster[2] == 80) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 30;
        rockets.booster[2] = 70;
        console.log(rockets);
        return false;
    }
    if (rockets.booster[0] == 0 && rockets.booster[1] == 0 && rockets.booster[2] == 0) {
        alert("El coet ja té la potencia mínima");
        return false;
    }
}
//Funcion per accelerar el coet de 6 motors
function findBooster2(uid) {
    return uid.uid === "LDSFJA32";
}
function speedUp6() {
    var rockets = rocketsArray.find(findBooster2);
    if (rockets.booster[0] == 0 && rockets.booster[1] == 0 && rockets.booster[2] == 0 && rockets.booster[3] == 0 && rockets.booster[4] == 0 && rockets.booster[5] == 0) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 20;
        rockets.booster[2] = 20;
        rockets.booster[3] = 20;
        rockets.booster[4] = 20;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 10 && rockets.booster[1] == 20 && rockets.booster[2] == 20 && rockets.booster[3] == 20 && rockets.booster[4] == 20 && rockets.booster[5] == 10) {
        rockets.booster[0] = 20;
        rockets.booster[1] = 30;
        rockets.booster[2] = 30;
        rockets.booster[3] = 30;
        rockets.booster[4] = 30;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 20 && rockets.booster[1] == 30 && rockets.booster[2] == 30 && rockets.booster[3] == 30 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        rockets.booster[0] = 30;
        rockets.booster[1] = 40;
        rockets.booster[2] = 40;
        rockets.booster[3] = 40;
        rockets.booster[4] = 30;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 30 && rockets.booster[1] == 40 && rockets.booster[2] == 40 && rockets.booster[3] == 40 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        rockets.booster[0] = 30;
        rockets.booster[1] = 40;
        rockets.booster[2] = 50;
        rockets.booster[3] = 50;
        rockets.booster[4] = 30;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 30 && rockets.booster[1] == 40 && rockets.booster[2] == 50 && rockets.booster[3] == 50 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        alert("El coet ja té la potencia màxima");
        return false;
    }
}
//Funció per frenar el coet
function speedDown6() {
    var rockets = rocketsArray.find(findBooster2);
    if (rockets.booster[0] == 10 && rockets.booster[1] == 20 && rockets.booster[2] == 20 && rockets.booster[3] == 20 && rockets.booster[4] == 20 && rockets.booster[5] == 10) {
        rockets.booster[0] = 0;
        rockets.booster[1] = 0;
        rockets.booster[2] = 0;
        rockets.booster[3] = 0;
        rockets.booster[4] = 0;
        rockets.booster[5] = 0;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 20 && rockets.booster[1] == 30 && rockets.booster[2] == 30 && rockets.booster[3] == 30 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        rockets.booster[0] = 10;
        rockets.booster[1] = 20;
        rockets.booster[2] = 20;
        rockets.booster[3] = 20;
        rockets.booster[4] = 20;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 30 && rockets.booster[1] == 40 && rockets.booster[2] == 40 && rockets.booster[3] == 40 && rockets.booster[4] == 40 && rockets.booster[5] == 10) {
        rockets.booster[0] = 20;
        rockets.booster[1] = 30;
        rockets.booster[2] = 30;
        rockets.booster[3] = 30;
        rockets.booster[4] = 30;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 30 && rockets.booster[1] == 40 && rockets.booster[2] == 50 && rockets.booster[3] == 50 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        rockets.booster[0] = 30;
        rockets.booster[1] = 40;
        rockets.booster[2] = 40;
        rockets.booster[3] = 40;
        rockets.booster[4] = 30;
        rockets.booster[5] = 10;
        console.log(rockets);
        return rockets;
    }
    if (rockets.booster[0] == 30 && rockets.booster[1] == 40 && rockets.booster[2] == 50 && rockets.booster[3] == 50 && rockets.booster[4] == 30 && rockets.booster[5] == 10) {
        alert("El coet ja té la potencia màxima");
        return false;
    }
}
