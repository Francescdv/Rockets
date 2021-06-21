"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.propellers = new Array();
        this.code = code;
    }
    Rocket.prototype.addPropeller = function (propeller) {
        this.propellers.push(propeller);
    };
    Rocket.prototype.speedUp = function () {
        for (var i = 0; i < this.propellers.length; i++) {
            if (this.propellers[i].currentPower >= this.propellers[i].maxPower) {
                this.propellers[i].currentPower == this.propellers[i].maxPower;
            }
            else {
                this.propellers[i].currentPower += 10;
            }
        }
    };
    Rocket.prototype.brake = function () {
        for (var i = 0; i < this.propellers.length; i++) {
            if (this.propellers[i].currentPower <= 0) {
                this.propellers[i].currentPower == 0;
            }
            else {
                this.propellers[i].currentPower -= 10;
            }
        }
    };
    return Rocket;
}());
