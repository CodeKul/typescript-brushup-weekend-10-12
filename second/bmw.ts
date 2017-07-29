import { Car, Wallet } from './car';
class Bmw extends Car {

    cruze() {
        console.log(`Enabling Cruze Control`);
    }
}

let car = new Car()
car.acclt()

let bmw : Bmw = new Bmw()
bmw.acclt()
bmw.cruze()