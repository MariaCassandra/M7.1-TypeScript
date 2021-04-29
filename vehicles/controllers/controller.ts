let car: Car; 

const btnCreateCar:any = document.getElementById("btnCreateCar");
const btnCreateWheel:any = document.getElementById("btnCreateWheel");

const wheelsDiv:any = document.getElementById("wheelsDiv");

const carForm:any = document.getElementById("idCarForm");

const wheelForm:any = document.getElementById("idWheelsForm");

const divPrintInfo:any = document.getElementById("idDivPrintInfo");

let plate: HTMLInputElement = <HTMLInputElement>document.getElementById("idPlate");
let brand: HTMLInputElement = <HTMLInputElement>document.getElementById("idBrand");
let color: HTMLInputElement = <HTMLInputElement>document.getElementById("idColor");

function createCar(){
    let errorCounter:number = validateCarInfo(plate, brand, color);

    if (errorCounter == 0) {
        car = new Car(plate.value.toUpperCase(), brand.value, color.value);

        let showPlate: any = document.getElementById("showPlate").innerHTML = ("Plate: " + plate.value);
        let showBrand: any = document.getElementById("showBrand").innerHTML = ("Brand: " + brand.value);
        let showColor: any = document.getElementById("showColor").innerHTML = ("Color: " + color.value);

        plate.disabled = true;
        brand.disabled = true;
        color.disabled = true;
        btnCreateCar.disabled = true;

        wheelsDiv.classList.remove("d-none"); 
    }   
}

function validateCarInfo(plate: HTMLInputElement, brand: HTMLInputElement, color: HTMLInputElement){
    let errorCounter:number = 0;

    let errorPlate: HTMLElement = <HTMLElement>document.getElementById("errorPlate");
    let errorBrand: HTMLElement = <HTMLElement>document.getElementById("errorBrand");
    let errorColor: HTMLElement = <HTMLElement>document.getElementById("errorColor");

    if (plate.value == "") {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate is required";
        errorCounter++;
    } else if (!validatePlate(plate)) {
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

function validatePlate(plate: HTMLInputElement): boolean{
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
    return regex.test(plate.value) ? true : false;
}

function createWheels(){
    let errorCounter:number = 0;
    let i: number;
    let someDiameterError: boolean = false;

for (i=1; i<=4; i++ ) {
    let diameter: HTMLInputElement = <HTMLInputElement>document.getElementById("idWheelDiam"+[i]);
    errorCounter = validateWheelsInfo(diameter, i);
    if (errorCounter > 0 && someDiameterError == false){
        someDiameterError = true;
    }
}

if (someDiameterError == false){
    for (i = 1; i<=4; i++) {
        let diameter:   HTMLInputElement = <HTMLInputElement>document.getElementById("idWheelDiam"+[i]);
        let brandWheel: HTMLInputElement = <HTMLInputElement>document.getElementById("idWheelBrand"+[i]);
        
        let wheel:Wheel = new Wheel(Number(diameter.value), brandWheel.value);
                    
        car.addWheel(wheel);     

btnCreateWheel.disabled = true;

let showDiameter:   any = document.getElementById("showDiameter" + [i]).innerHTML = ("Diameter: " + Number(diameter.value));
            let showBrandWheel: any = document.getElementById("showBrand" + [i]).innerHTML    = ("Brand: " + brandWheel.value);
        }

console.log(car);
         
divPrintInfo.classList.remove("d-none"); 
}
}

function validateWheelsInfo(diameter:any, i:number){
    let errorCounter:number = 0;
         
    let errorDiametre: HTMLElement = <HTMLElement>document.getElementById("errorwheelDiam"+[i]);
            
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiametre.textContent = "Diameter is required";
        errorCounter++;
    } else if (diameter.value <= 0.4 || diameter.value >= 2) {
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

if (carForm){
    carForm.addEventListener('blur', (event:any) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    },  true); 
}

if (wheelForm){
    wheelForm.addEventListener('blur', (event:any) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    },  true); 
}