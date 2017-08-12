var txtDta = document.getElementById('txtData');
var divEm = document.getElementById('divEmt');

txtDta.onkeyup = function () {
    divEm.innerHTML = txtDta.value;
};