class Rocket {
    code: string;
    propellers: Propeller[] = new Array();

    constructor(code: string) {
        this.code = code;
    }


    addPropeller(propeller: Propeller): void {
        this.propellers.push(propeller);
    }

    speedUp() {
        for (let i = 0; i < this.propellers.length; i++) {

            if (this.propellers[i].currentPower >= this.propellers[i].maxPower) {
                this.propellers[i].currentPower == this.propellers[i].maxPower
            } else {
                this.propellers[i].currentPower += 10;

            }
        }
    }



    brake() {
        for (let i = 0; i < this.propellers.length; i++) {

            if (this.propellers[i].currentPower <= 0) { this.propellers[i].currentPower == 0 }
            else { 
                this.propellers[i].currentPower -= 10 
            }
        }
    }

}


