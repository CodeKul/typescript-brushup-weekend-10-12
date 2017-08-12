
let hello = '10'

function cellPhone() {
    console.log('This is cell phone')
}
cellPhone()

let myFn = function () {
    //console.log(this)

    let hl = 10;
    console.log(`

        it is my fn
    
    `)
}
myFn()

let myFn2 = () => console.log(this)
myFn2()