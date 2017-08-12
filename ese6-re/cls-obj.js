class Car {
    constructor(km, con) {
        this.km = 10
        this.con = 'India'
    }
    speed() {
        console.log(this)
        console.log(`speed is ${this.km} kms `)
    }
}

let cr = new Car()
cr.speed()