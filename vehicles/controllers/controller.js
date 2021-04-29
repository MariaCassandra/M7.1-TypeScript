"use strict";
var car;
var btnCreateCar = document.getElementById("btnCreateCar");
var btnCreateWheel = document.getElementById("btnCreateWheel");
var wheelsDiv = document.getElementById("wheelsDiv");
var carForm = document.getElementById("idCarForm");
var wheelForm = document.getElementById("idWheelsForm");
var divPrintInfo = document.getElementById("idDivPrintInfo");
var plate = document.getElementById("idPlate");
var brand = document.getElementById("idBrand");
var color = document.getElementById("idColor");
function createCar() {
    var errorCounter = validateCarInfo(plate, brand, color);
    if (errorCounter == 0) {
        car = new Car(plate.value.toUpperCase(), brand.value, color.value);
        var showPlate = document.getElementById("showPlate").innerHTML = ("Plate: " + plate.value);
        var showBrand = document.getElementById("showBrand").innerHTML = ("Brand: " + brand.value);
        var showColor = document.getElementById("showColor").innerHTML = ("Color: " + color.value);
        plate.disabled = true;
        brand.disabled = true;
        color.disabled = true;
        btnCreateCar.disabled = true;
        wheelsDiv.classList.remove("d-none");
    }
}
function validateCarInfo(plate, brand, color) {
    var errorCounter = 0;
    var errorPlate = document.getElementById("errorPlate");
    var errorBrand = document.getElementById("errorBrand");
    var errorColor = document.getElementById("errorColor");
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate is required";
        errorCounter++;
    }
    else if (!validatePlate(plate)) {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "The correct format is 4 digits followed by 3 letters.";
        errorCounter++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorBrand.textContent = "Brand is required";
        errorCounter++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Color is required";
        errorCounter++;
    }
    return errorCounter;
}
function validatePlate(plate) {
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
    return regex.test(plate.value) ? true : false;
}
function createWheels() {
    var errorCounter = 0;
    var i;
    var someDiameterError = false;
    for (i = 1; i <= 4; i++) {
        var diameter = document.getElementById("idWheelDiam" + [i]);
        errorCounter = validateWheelsInfo(diameter, i);
        if (errorCounter > 0 && someDiameterError == false) {
            someDiameterError = true;
        }
    }
    if (someDiameterError == false) {
        for (i = 1; i <= 4; i++) {
            var diameter = document.getElementById("idWheelDiam" + [i]);
            var brandWheel = document.getElementById("idWheelBrand" + [i]);
            var wheel = new Wheel(Number(diameter.value), brandWheel.value);
            car.addWheel(wheel);
            btnCreateWheel.disabled = true;
            var showDiameter = document.getElementById("showDiameter" + [i]).innerHTML = ("Diameter: " + Number(diameter.value));
            var showBrandWheel = document.getElementById("showBrand" + [i]).innerHTML = ("Brand: " + brandWheel.value);
        }
        console.log(car);
        divPrintInfo.classList.remove("d-none");
    }
}
function validateWheelsInfo(diameter, i) {
    var errorCounter = 0;
    var errorDiametre = document.getElementById("errorwheelDiam" + [i]);
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiametre.textContent = "Diameter is required";
        errorCounter++;
    }
    else if (diameter.value <= 0.4 || diameter.value >= 2) {
        diameter.classList.add("is-invalid");
        errorDiametre.textContent = "Invalid diameter. The correct is > 0.4 and < 2 cm";
        errorCounter++;
    }
    return errorCounter;
}
function hideInfo() {
    plate.disabled = false;
    brand.disabled = false;
    color.disabled = false;
    btnCreateCar.disabled = false;
    btnCreateWheel.disabled = false;
    carForm.reset();
    wheelForm.reset();
    wheelsDiv.classList.add("d-none");
    divPrintInfo.classList.add("d-none");
}
if (carForm) {
    carForm.addEventListener('blur', function (event) {
        if (event.target.value != '')
            event.target.classList.remove('is-invalid');
    }, true);
}
if (wheelForm) {
    wheelForm.addEventListener('blur', function (event) {
        if (event.target.value != '')
            event.target.classList.remove('is-invalid');
    }, true);
}
