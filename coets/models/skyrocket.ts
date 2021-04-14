class SkyRocker {
    uid: string;
    booster:number[];
  
    constructor(    uid: string,
                    bootser:number[] ) {

        this.uid = uid;
        this.booster = bootser;
    } 
    
    addSkyRocker(id: string, booster:number[]) {

       return new SkyRocker( id, booster);
        
    }
}

class UI {
    //Creem mètode per afegir coets
    addRockets(uid:string, booster:number[]) {

        return new SkyRocker(uid, booster);
    }

    showRocket(rocket:SkyRocker) {
        const show = document.getElementById('resp');
        const element = document.createElement('div');

        //Calculem potència màxima motors
        const power = rocket.booster.reduce((a, b) => a + b, 0);
        
        element.innerHTML = `
       
            <ul>
                <li>Model de coet: ${rocket.uid} </li>
                <li>Número de motors: ${rocket.booster.length}</li>
                <li>Potència dels motors: ${rocket.booster}</li>
                <li>Potència màxima: ${power}</li>
            </ul>
       
        `
        show.appendChild(element);
    }


    nonRocket() {
        const show = document.getElementById('resp');
        const element = document.createElement('div');

        
        element.innerHTML = `
       
            <h3>No hi han coets per mostrar</h3>
       
        `
        show.appendChild(element);
    }

   //Mètode per desactivar botons  
    disableBtn(id: string) {
        const btn = document.getElementById(id);
        btn.classList.add("disabled");  
    }
    //Mètode per activar botons
    enableBtn(id: string) {
        const btn = document.getElementById(id);
        btn.classList.remove("disabled"); 
    }
}


