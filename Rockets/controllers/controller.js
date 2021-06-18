"use strict";
var arrayRockets = [];
var rocket;
function createRocket() {
    rocket = new Rocket("32WESSDS");
    var lol = new Propeller(10);
    var kahva = new Propeller(20);
    var flor = new Propeller(30);
    rocket.propellers.push(lol);
    rocket.propellers.push(kahva);
    rocket.propellers.push(flor);
    arrayRockets.push(rocket);
}
function createRocket2() {
    arrayRockets[0].speedUp();
}
function createRocket3() {
    arrayRockets[0].brake();
}
function maxPowerRocket(rocket) {
    var rocketMaxPower = 0;
    for (var i = 0; i < rocket.propellers.length; i++) {
        rocketMaxPower += rocket.propellers[i].maxPower;
    }
    return rocketMaxPower;
}
