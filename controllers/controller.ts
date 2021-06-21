var arrayRockets: Rocket[] = [];
let rocket: Rocket;
let propeller: Propeller;
let speedUpBreak: number;
let player: any;
let inputRocket = document.querySelector('#inputRocket') as HTMLFormElement;
let inputWinner = document.querySelector('#winner') as HTMLFormElement;
let containerRocket = document.querySelector('#container-rocket') as HTMLFormElement;
let containerWinner = document.querySelector('#container-winner') as HTMLFormElement;
let containerStartMenu = document.querySelector('#start-menu') as HTMLFormElement;
let containerStartPropellers = document.querySelector('#start-propellers') as HTMLFormElement;
let buttonStart = document.querySelector('#start') as HTMLFormElement;
let winner: any;


function createRocket() {
    rocket = new Rocket(generateRandomString());
    for (let i = 0; i < 3; i++) {
        propeller = new Propeller(generateRandomMaxPower())
        rocket.addPropeller(propeller);
    }
    arrayRockets.push(rocket);

    for (let a = 0; a < arrayRockets.length; a++)
        player = `<div id="player id="player${a + 1}"><H2>Player ${a + 1}</H2><div>Codi: ${arrayRockets[a].code}</div><div id="potenciaActual${a}">Potencia actual ${currentPowerRocket(arrayRockets[a])}</div><div>Potencia Máxima ${maxPowerRocket(arrayRockets[a])}</div></div></div>`

    let resultat = <HTMLDivElement>document.getElementById("players");
    resultat.innerHTML += player;

    buttonStart.classList.remove("d-none");

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

function generateRandomString() {

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function generateRandomMaxPower() {

    let characters: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let result: number = 0;

    let character = characters[(Math.floor(Math.random() * 10))];
    result = character;

    return result;
}