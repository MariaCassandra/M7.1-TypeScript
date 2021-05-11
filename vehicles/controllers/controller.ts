let car: Car = new Car("","","");
const wheelsForm = document.getElementsByClassName("wheels-form")[0];

function showCar(car:Car) {
    let divCar = document.getElementById("car-container") as HTMLDivElement;
    let carForm = document.getElementsByClassName("car-form")[0];
    
    let displayCar:string = `
        <table class="table table-sm table-borderless">
        <thead>
            <tr>
                <th>Car:</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Plate: ${car.plate}</td>
            <td>Brand: ${car.brand}</td>
            <td>Color: ${car.color}</td>
        </tr>
        </tbody>
        </table>
    `;
    divCar.innerHTML = displayCar;
    carForm.classList.add("d-none");
    wheelsForm?.classList.toggle("d-none");
}

function showWheels(car:Car) {
    let divWheels = document.getElementById("wheels-container") as HTMLDivElement;
    
    let displayWheels:string = `
        <table class="table table-sm table-borderless">
        <thead>
            <tr>
                <th>Wheels:</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Wheel 1: ${car.wheels[0].brand}</td>
            <td>Wheel 2: ${car.wheels[1].brand}</td>
            <td>Wheel 3: ${car.wheels[2].brand}</td>
            <td>Wheel 4: ${car.wheels[3].brand}</td>
        </tr>
        <tr>
            <td>DLC Diameter: ${car.wheels[0].diameter}</td>
            <td>DLC Diameter: ${car.wheels[1].diameter}</td>
            <td>DLC Diameter: ${car.wheels[2].diameter}</td>
            <td>DLC Diameter: ${car.wheels[3].diameter}</td>
        </tr>
        </tbody>
        </table>
    `;
    wheelsForm?.classList.add("d-none");
    divWheels.innerHTML = displayWheels;
}

function validatePlate(plate:string) {
    let regex = /[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}

function createCar() {

    let inputPlate:string = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    let inputColor:string = (<HTMLInputElement>document.getElementById("inputColor")).value;
    let inputBrand:string = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    let inputPlateDiv = document.getElementById("inputPlate") as HTMLDivElement;
    let inputPlateError = document.getElementById("plateError") as HTMLDivElement;
    let inputBrandDiv = document.getElementById("inputBrand") as HTMLDivElement;
    let inputBrandError = document.getElementById("brandError") as HTMLDivElement;
    let inputColorDiv = document.getElementById("inputColor") as HTMLDivElement;
    let inputColorError = document.getElementById("colorError") as HTMLDivElement;

    let carValidator = true;

    if (inputBrand == "") {
        inputBrandDiv.classList.add("is-invalid");
        inputBrandError.textContent = "This field is mandatory";
        carValidator = false;
    } else {
        inputBrandDiv.classList.remove("is-invalid");
        inputBrandError.textContent = "";
    }

    if (inputColor == "") {
        inputColorDiv.classList.add("is-invalid");
        inputColorError.textContent = "This field is mandatory";
        carValidator = false;
    } else {
        inputColorDiv.classList.remove("is-invalid");
        inputColorError.textContent = "";
    }

    if (!validatePlate(inputPlate)) { // ! es igual que == false
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Plate format should be 4 numbers and 3 letters";
        carValidator = false;
    }    else {
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

function validateDiam(diams:string) {
    let regex = /[0-9.]+$/;

    if (diams != "" && regex.test(diams)) {
        let diamsNumerico = parseFloat(diams);
        if (diamsNumerico>=0.4 && diamsNumerico<=2) {
            return true;
        }
    } 
    return false;
}

function addWheels(car:Car) {
    let wheelValidator = true;
    
    for (let i = 1; i<5; i++) {
        
        let marcaRueda:string = (<HTMLInputElement>document.getElementById("marcaRueda"+i)).value;
        let diametroRueda:string = (<HTMLInputElement>document.getElementById("diametroRueda"+i)).value;
        let marcaRuedaErrorDiv = <HTMLDivElement>document.getElementById("marcaRuedaError"+i);
        let ruedaErrorDiv = <HTMLDivElement>document.getElementById("rueda"+i+"Error");

        document.getElementById("marcaRueda"+i)?.classList.remove("is-invalid");
        document.getElementById("diametroRueda"+i)?.classList.remove("is-invalid");

        if (marcaRueda == "") {
            document.getElementById("marcaRueda"+i)?.classList.add("is-invalid");
            marcaRuedaErrorDiv.textContent = "Brand must be indicated"; 
            wheelValidator = false;
        } 

        
        if (!validateDiam(diametroRueda)) {
            document.getElementById("diametroRueda"+i)?.classList.add("is-invalid");
            ruedaErrorDiv.textContent = "Diameter should be between 0.4 and 2";
            wheelValidator = false;
        }
    }
    if (wheelValidator) {
        for (let i = 1; i<5; i++) {
            let marcaRueda:string = (<HTMLInputElement>document.getElementById("marcaRueda"+i)).value;
            let diametroRueda:number = parseFloat((<HTMLInputElement>document.getElementById("diametroRueda"+i)).value);
            let newWheel = new Wheel(diametroRueda, marcaRueda);
            car.addWheel(newWheel);
        }
        showWheels(car);
    }
}

let createCarBtnInput = document.getElementById('createCarBtn')!;
createCarBtnInput.addEventListener("click", function(){
    createCar();
});

let createAddWheelsBtnInput = document.getElementById('createWheelsBtn')!;
createAddWheelsBtnInput.addEventListener("click", function(){
    addWheels(car);
});

console.log(car);
