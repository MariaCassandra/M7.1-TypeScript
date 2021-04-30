
let car: Car = new Car();
const wheelsForm = document.getElementsByClassName("wheels-form")[0];

function showCar(car:Car) {
    let divCar = document.getElementById("car-container")  as HTMLDivElement;
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
    let inputBrand: string = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    let inputPlateDiv =  document.getElementById("inputPlate") as HTMLDivElement;
    let inputPlateError =  document.getElementById("plateError") as HTMLDivElement;

    if (validatePlate(inputPlate)) {
        car.plate = inputPlate;
        car.color = inputColor;
        car.brand = inputBrand;
        showCar(car);
    } else {
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Plate format should be 4 numbers and 3 letters";
    }    
}

function validateBrand() {

}

function addWheels(car:Car) {
    
    for (let i = 1; i<5; i++) {
        
        let marcaRueda:string = (<HTMLInputElement>document.getElementById("marcaRueda"+i)).value;
        let diametroRueda:number = parseFloat((<HTMLInputElement>document.getElementById("diametroRueda"+i)).value);
        let marcaRuedaErrorDiv = document.getElementById("marcaRuedaError"+i) as HTMLDivElement;
        let ruedaErrorDiv = document.getElementById("rueda"+i+"Error") as HTMLDivElement;
        
        document.getElementById("marcaRueda"+i)?.classList.remove("is-invalid");
        document.getElementById("diametroRueda"+i)?.classList.remove("is-invalid");

        if (diametroRueda>=0.4 && diametroRueda<=2 && !marcaRueda == "") {
            let newWheel = new Wheel(diametroRueda, marcaRueda);
            car.addWheel(newWheel);
        } else if (marcaRueda == "") {
            console.log("Error!!!!") 
            document.getElementById("marcaRueda"+i)?.classList.add("is-invalid");
            marcaRuedaErrorDiv.textContent = "Brand must be indicated";
            return false;
        } else {
            document.getElementById("diametroRueda"+i)?.classList.add("is-invalid");
            ruedaErrorDiv.textContent = "Diameter should be between 0.4 and 2";
            return false;
        }
    }
    showWheels(car);
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
