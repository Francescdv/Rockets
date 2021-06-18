var arrayRockets: Rocket[] = [];
let rocket: Rocket;

function createRocket() {
    rocket = new Rocket("32WESSDS");

    let lol = new Propeller(10)
    let kahva = new Propeller(20)
    let flor = new Propeller(30)
    rocket.propellers.push(lol)
    rocket.propellers.push(kahva)
    rocket.propellers.push(flor)

    arrayRockets.push(rocket)



}


function createRocket2() {
    arrayRockets[0].speedUp()
}


function createRocket3() {
    arrayRockets[0].brake()
}


function maxPowerRocket(rocket: Rocket) {
    let rocketMaxPower: number = 0;

    for (let i = 0; i < rocket.propellers.length; i++) {
        rocketMaxPower += rocket.propellers[i].maxPower
    }

    return rocketMaxPower
}

