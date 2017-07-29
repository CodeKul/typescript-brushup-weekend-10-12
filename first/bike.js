class Bike {
    constructor(motor) {
        
    }
}

class Motor {

}

var motor = new Motor();

var bike = new Bike(motor);

var btnOkay = document.getElementById('btnOkay');
btnOkay.onclick = function() {
    var txtNm = document.getElementById('txtNm');
    document.getElementById('divId').innerHTML = '<h1>'+txtNm.value+'</h1>'
};

let pz = 10;
pz = 'hello';