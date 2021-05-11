"use strict";
var car = new Car("", "", "");
var wheelsForm = document.getElementsByClassName("wheels-form")[0];
function showCar(car) {
    var divCar = document.getElementById("car-container");
    var carForm = document.getElementsByClassName("car-form")[0];
    var displayCar = "\n        <table class=\"table table-sm table-borderless\">\n        <thead>\n            <tr>\n                <th>Car:</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Plate: " + car.plate + "</td>\n            <td>Brand: " + car.brand + "</td>\n            <td>Color: " + car.color + "</td>\n        </tr>\n        </tbody>\n        </table>\n    ";
    divCar.innerHTML = displayCar;
    carForm.classList.add("d-none");
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.toggle("d-none");
}
function showWheels(car) {
    var divWheels = document.getElementById("wheels-container");
    var displayWheels = "\n        <table class=\"table table-sm table-borderless\">\n        <thead>\n            <tr>\n                <th>Wheels:</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Wheel 1: " + car.wheels[0].brand + "</td>\n            <td>Wheel 2: " + car.wheels[1].brand + "</td>\n            <td>Wheel 3: " + car.wheels[2].brand + "</td>\n            <td>Wheel 4: " + car.wheels[3].brand + "</td>\n        </tr>\n        <tr>\n            <td>DLC Diameter: " + car.wheels[0].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[1].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[2].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[3].diameter + "</td>\n        </tr>\n        </tbody>\n        </table>\n    ";
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.add("d-none");
    divWheels.innerHTML = displayWheels;
}
function validatePlate(plate) {
    var regex = /[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}
function createCar() {
    var inputPlate = document.getElementById("inputPlate").value;
    var inputColor = document.getElementById("inputColor").value;
    var inputBrand = document.getElementById("inputBrand").value;
    var inputPlateDiv = document.getElementById("inputPlate");
    var inputPlateError = document.getElementById("plateError");
    var inputBrandDiv = document.getElementById("inputBrand");
    var inputBrandError = document.getElementById("brandError");
    var inputColorDiv = document.getElementById("inputColor");
    var inputColorError = document.getElementById("colorError");
    var carValidator = true;
    if (inputBrand == "") {
        inputBrandDiv.classList.add("is-invalid");
        inputBrandError.textContent = "This field is mandatory";
        carValidator = false;
    }
    else {
        inputBrandDiv.classList.remove("is-invalid");
        inputBrandError.textContent = "";
    }
    if (inputColor == "") {
        inputColorDiv.classList.add("is-invalid");
        inputColorError.textContent = "This field is mandatory";
        carValidator = false;
    }
    else {
        inputColorDiv.classList.remove("is-invalid");
        inputColorError.textContent = "";
    }
    if (!validatePlate(inputPlate)) { // ! es igual que == false
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Plate format should be 4 numbers and 3 letters";
        carValidator = false;
    }
    else {
        inputPlateDiv.classList.remove("is-invalid");
        inputPlateError.textContent = "";
    }
    if (carValidator) {
        car.plate = inputPlate;
        car.color = inputColor;
        car.brand = inputBrand;
        showCar(car);
    }
}
function validateDiam(diams) {
    var regex = /[0-9.]+$/;
    if (diams != "" && regex.test(diams)) {
        var diamsNumerico = parseFloat(diams);
        if (diamsNumerico >= 0.4 && diamsNumerico <= 2) {
            return true;
        }
    }
    return false;
}
function addWheels(car) {
    var _a, _b, _c, _d;
    var wheelValidator = true;
    for (var i = 1; i < 5; i++) {
        var marcaRueda = document.getElementById("marcaRueda" + i).value;
        var diametroRueda = document.getElementById("diametroRueda" + i).value;
        var marcaRuedaErrorDiv = document.getElementById("marcaRuedaError" + i);
        var ruedaErrorDiv = document.getElementById("rueda" + i + "Error");
        (_a = document.getElementById("marcaRueda" + i)) === null || _a === void 0 ? void 0 : _a.classList.remove("is-invalid");
        (_b = document.getElementById("diametroRueda" + i)) === null || _b === void 0 ? void 0 : _b.classList.remove("is-invalid");
        if (marcaRueda == "") {
            (_c = document.getElementById("marcaRueda" + i)) === null || _c === void 0 ? void 0 : _c.classList.add("is-invalid");
            marcaRuedaErrorDiv.textContent = "Brand must be indicated";
            wheelValidator = false;
        }
        if (!validateDiam(diametroRueda)) {
            (_d = document.getElementById("diametroRueda" + i)) === null || _d === void 0 ? void 0 : _d.classList.add("is-invalid");
            ruedaErrorDiv.textContent = "Diameter should be between 0.4 and 2";
            wheelValidator = false;
        }
    }
    if (wheelValidator) {
        for (var i = 1; i < 5; i++) {
            var marcaRueda = document.getElementById("marcaRueda" + i).value;
            var diametroRueda = parseFloat(document.getElementById("diametroRueda" + i).value);
            var newWheel = new Wheel(diametroRueda, marcaRueda);
            car.addWheel(newWheel);
        }
        showWheels(car);
    }
}
var createCarBtnInput = document.getElementById('createCarBtn');
createCarBtnInput.addEventListener("click", function () {
    createCar();
});
var createAddWheelsBtnInput = document.getElementById('createWheelsBtn');
createAddWheelsBtnInput.addEventListener("click", function () {
    addWheels(car);
});
console.log(car);
