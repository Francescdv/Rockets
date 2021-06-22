var arrayRockets: Rocket[] = [];
let rocket: Rocket;
let propeller: Propeller;
let speedUpBreak: number;
let player: any;
let contarinerMain = document.querySelector('#container-main') as HTMLDivElement;
let inputRocket = document.querySelector('#inputRocket') as HTMLDivElement;
let inputWinner = document.querySelector('#winner') as HTMLDivElement;
let containerRocket = document.querySelector('#container-rocket') as HTMLDivElement;
let containerWinner = document.querySelector('#container-winner') as HTMLDivElement;
let containerStartMenu = document.querySelector('#start-menu') as HTMLDivElement;
let containerStartPropellers = document.querySelector('#start-propellers') as HTMLDivElement;
let buttonStart = document.querySelector('#start') as HTMLDivElement;
let winner: any;
let rocketTransition:any; 
let percentage:number;


function createRocket() {
    rocket = new Rocket(generateRandomString());
    for (let i = 0; i < 3; i++) {
        propeller = new Propeller(generateRandomMaxPower())
        rocket.addPropeller(propeller);
    }
    arrayRockets.push(rocket);

    for (let a = 0; a < arrayRockets.length; a++)
        player = `<div class="row"><div id="player class="sm-cols-4 id="player${a + 1}"><H2>Player ${a + 1}</H2><div>Codi: ${arrayRockets[a].code}</div><div id="potenciaActual${a}">Potencia actual ${currentPowerRocket(arrayRockets[a])}</div><div>Potencia Máxima ${maxPowerRocket(arrayRockets[a])}</div></div><div class="rocketTransition" id="rocketTransitionId${a}"><img src="../views/img/rocket-312767_640.png" alt="rocket"></div></div></div>`
    
    let resultat = <HTMLDivElement>document.getElementById("players");
    resultat.innerHTML += player;

    buttonStart.classList.remove("d-none");
    contarinerMain.classList.remove("container-main");
    

  


}

function start(){
    
    containerStartMenu.classList.add("d-none");
    containerStartPropellers.classList.remove("d-none")
}


function startPropellers() {


    for (let i = 0; i < arrayRockets.length; i++) {
        speedUpBreak = Math.floor(Math.random() * 10);
        if (speedUpBreak >= 3) {
            arrayRockets[i].speedUp();
        } else { arrayRockets[i].brake(); }
        let resultat: any = <HTMLDivElement>document.getElementById("potenciaActual" + i);
        resultat.innerHTML = "Potencia actual " + currentPowerRocket(arrayRockets[i]);
    }

 
for (let j = 0; j < arrayRockets.length; j++) {
    rocketTransition = document.querySelector('#rocketTransitionId' + j) as HTMLDivElement;
    percentage = currentPowerRocket(arrayRockets[j])/maxPowerRocket(arrayRockets[j])*100;
    
    if( percentage > 0 && percentage < 25){
        removeTrasition()
        rocketTransition.classList.add("rocketTransition1");
    }
    else if( percentage >= 25 && percentage < 50){
        removeTrasition()
        rocketTransition.classList.add("rocketTransition2")
    }
    else if( percentage >= 50 && percentage < 75){
        removeTrasition()
        rocketTransition.classList.add("rocketTransition3")
    }
    else if( percentage >= 75){
        removeTrasition()
        rocketTransition.classList.add("rocketTransition4")
    }
}



    for (let a = 0; a < arrayRockets.length; a++) {
    if(currentPowerRocket(arrayRockets[a]) == maxPowerRocket(arrayRockets[a])){
        containerRocket.classList.add("d-none");
        winner = `<div id="player id="player${a + 1}"><p>Winner</p><H2>Player ${a + 1}</H2><div>Codi: ${arrayRockets[a].code}</div><div id="potenciaActual${a}">Potencia actual ${currentPowerRocket(arrayRockets[a])}</div><div>Potencia Máxima ${maxPowerRocket(arrayRockets[a])}</div></div></div>`
        let resultat = <HTMLDivElement>document.getElementById("winner");
        resultat.innerHTML = winner;
        containerWinner.classList.remove("d-none");

    }



}

}


function playAgain(){
    containerWinner.classList.add("d-none");
    arrayRockets = [];
    containerRocket.classList.remove("d-none");
    
    let resultat = <HTMLDivElement>document.getElementById("players");
    resultat.innerHTML = "";

    containerStartMenu.classList.remove("d-none");
    containerStartPropellers.classList.add("d-none")
    buttonStart.classList.add("d-none");
    contarinerMain.classList.add("container-main");


}



function maxPowerRocket(rocket: Rocket) {
    let rocketMaxPower: number = 0;

    for (let i = 0; i < rocket.propellers.length; i++) {
        rocketMaxPower += rocket.propellers[i].maxPower
    }

    return rocketMaxPower
}


function currentPowerRocket(rocket: Rocket) {
    let rocketCurrentPower: number = 0;

    for (let i = 0; i < rocket.propellers.length; i++) {
        rocketCurrentPower += rocket.propellers[i].currentPower
    }

    return rocketCurrentPower
}

function generateRandomString():string {

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function generateRandomMaxPower():number {

    let characters: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let result: number = 0;

    let character = characters[(Math.floor(Math.random() * 10))];
    result = character;

    return result;
}

function removeTrasition(): void{
    rocketTransition.classList.remove("rocketTransition1");
    rocketTransition.classList.remove("rocketTransition2");
    rocketTransition.classList.remove("rocketTransition3");
    rocketTransition.classList.remove("rocketTransition4");
}