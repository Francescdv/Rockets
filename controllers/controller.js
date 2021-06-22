"use strict";
var arrayRockets = [];
var rocket;
var propeller;
var speedUpBreak;
var player;
var contarinerMain = document.querySelector('#container-main');
var inputRocket = document.querySelector('#inputRocket');
var inputWinner = document.querySelector('#winner');
var containerRocket = document.querySelector('#container-rocket');
var containerWinner = document.querySelector('#container-winner');
var containerStartMenu = document.querySelector('#start-menu');
var containerStartPropellers = document.querySelector('#start-propellers');
var buttonStart = document.querySelector('#start');
var winner;
var rocketTransition;
var percentage;
function createRocket() {
    rocket = new Rocket(generateRandomString());
    for (var i = 0; i < 3; i++) {
        propeller = new Propeller(generateRandomMaxPower());
        rocket.addPropeller(propeller);
    }
    arrayRockets.push(rocket);
    for (var a = 0; a < arrayRockets.length; a++)
        player = "<div class=\"row\"><div id=\"player class=\"sm-cols-4 id=\"player" + (a + 1) + "\"><H2>Player " + (a + 1) + "</H2><div>Codi: " + arrayRockets[a].code + "</div><div id=\"potenciaActual" + a + "\">Potencia actual " + currentPowerRocket(arrayRockets[a]) + "</div><div>Potencia M\u00E1xima " + maxPowerRocket(arrayRockets[a]) + "</div></div><div class=\"rocketTransition\" id=\"rocketTransitionId" + a + "\"><img src=\"../views/img/rocket-312767_640.png\" alt=\"rocket\"></div></div></div>";
    var resultat = document.getElementById("players");
    resultat.innerHTML += player;
    buttonStart.classList.remove("d-none");
    contarinerMain.classList.remove("container-main");
}
function start() {
    containerStartMenu.classList.add("d-none");
    containerStartPropellers.classList.remove("d-none");
}
function startPropellers() {
    for (var i = 0; i < arrayRockets.length; i++) {
        speedUpBreak = Math.floor(Math.random() * 10);
        if (speedUpBreak >= 3) {
            arrayRockets[i].speedUp();
        }
        else {
            arrayRockets[i].brake();
        }
        var resultat = document.getElementById("potenciaActual" + i);
        resultat.innerHTML = "Potencia actual " + currentPowerRocket(arrayRockets[i]);
    }
    for (var j = 0; j < arrayRockets.length; j++) {
        rocketTransition = document.querySelector('#rocketTransitionId' + j);
        percentage = currentPowerRocket(arrayRockets[j]) / maxPowerRocket(arrayRockets[j]) * 100;
        if (percentage > 0 && percentage < 25) {
            removeTrasition();
            rocketTransition.classList.add("rocketTransition1");
        }
        else if (percentage >= 25 && percentage < 50) {
            removeTrasition();
            rocketTransition.classList.add("rocketTransition2");
        }
        else if (percentage >= 50 && percentage < 75) {
            removeTrasition();
            rocketTransition.classList.add("rocketTransition3");
        }
        else if (percentage >= 75) {
            removeTrasition();
            rocketTransition.classList.add("rocketTransition4");
        }
    }
    for (var a = 0; a < arrayRockets.length; a++) {
        if (currentPowerRocket(arrayRockets[a]) == maxPowerRocket(arrayRockets[a])) {
            containerRocket.classList.add("d-none");
            winner = "<div id=\"player id=\"player" + (a + 1) + "\"><p>Winner</p><H2>Player " + (a + 1) + "</H2><div>Codi: " + arrayRockets[a].code + "</div><div id=\"potenciaActual" + a + "\">Potencia actual " + currentPowerRocket(arrayRockets[a]) + "</div><div>Potencia M\u00E1xima " + maxPowerRocket(arrayRockets[a]) + "</div></div></div>";
            var resultat = document.getElementById("winner");
            resultat.innerHTML = winner;
            containerWinner.classList.remove("d-none");
        }
    }
}
function playAgain() {
    containerWinner.classList.add("d-none");
    arrayRockets = [];
    containerRocket.classList.remove("d-none");
    var resultat = document.getElementById("players");
    resultat.innerHTML = "";
    containerStartMenu.classList.remove("d-none");
    containerStartPropellers.classList.add("d-none");
    buttonStart.classList.add("d-none");
    contarinerMain.classList.add("container-main");
}
function maxPowerRocket(rocket) {
    var rocketMaxPower = 0;
    for (var i = 0; i < rocket.propellers.length; i++) {
        rocketMaxPower += rocket.propellers[i].maxPower;
    }
    return rocketMaxPower;
}
function currentPowerRocket(rocket) {
    var rocketCurrentPower = 0;
    for (var i = 0; i < rocket.propellers.length; i++) {
        rocketCurrentPower += rocket.propellers[i].currentPower;
    }
    return rocketCurrentPower;
}
function generateRandomString() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateRandomMaxPower() {
    var characters = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    var result = 0;
    var character = characters[(Math.floor(Math.random() * 10))];
    result = character;
    return result;
}
function removeTrasition() {
    rocketTransition.classList.remove("rocketTransition1");
    rocketTransition.classList.remove("rocketTransition2");
    rocketTransition.classList.remove("rocketTransition3");
    rocketTransition.classList.remove("rocketTransition4");
}
