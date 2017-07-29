import { Charger } from './charger';
export interface Charger {
    power: number
    powerOn();
    powerOf();
}

export class Mobile implements Charger {
    power: number = 5;
    powerOn() {
        console.log(`Power is on with ${this.power * 2}amp`);
    }
    powerOf() {
        console.log(`Power is off`);
    }
}

let mob: Mobile = new Mobile()
mob.powerOn()
mob.powerOf()

let jsOb  = {
    power: 4,
    powerOn: () => console.log(`On`),
    powerOf: function() {
        () => console.log(`Off`)
    }
};

let ch : Charger = jsOb;