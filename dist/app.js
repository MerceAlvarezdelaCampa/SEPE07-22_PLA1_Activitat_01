"use strict";
console.log('Hola Mundo!');
function sumNumeros(num1, num2) {
    return num1 + num2;
}
console.log(sumNumeros(2, 2));
const vacances = [
    { id: 1, titol: 'Vacances a Valencia', ciutat: 'Valencia', hotel: 'Hotel Rex VI', preu: '1600€', comentaris: 'Lorem ipsum dolor...' },
    { id: 2, titol: 'Vacances a Barcelona', ciutat: 'Barcelona', hotel: 'Hotel Ritz', preu: '2600€', comentaris: 'Lorem ipsum dolor...' },
    { id: 3, titol: 'Vacances a Madrid', ciutat: 'Madrid', hotel: 'Hotel Sheraton', preu: '3600€', comentaris: 'Lorem ipsum dolor...' },
    { id: 4, titol: 'Vacances a Segovia', ciutat: 'Segovia', hotel: 'Hotel Guionea', preu: '1600€', comentaris: 'Lorem ipsum dolor...' }
];
let text = document.createElement("ul");
let test = '';
vacances.forEach(vacanca => {
    test += `<li id='${vacanca.id}' onclick='showDetail(${vacanca.id})'>${vacanca.titol}</li>`;
});
text.innerHTML = test;
const llistat = document.getElementById('llistat');
if (llistat) {
    llistat.appendChild(text);
}
function showDetail(id) {
    let text = document.createElement("div");
    const detall = document.getElementById('detall');
    const vacanca = getVacancaFromVacancesById(id);
    if (detall && vacanca) {
        detall.innerHTML = '<div></div>';
        detall.innerHTML = `<div><h3>${vacanca.titol}</h3><div>${vacanca.hotel}</div><div>${vacanca.preu}</div><div>${vacanca.comentaris}</div></div>`;
    }
}
function getVacancaFromVacancesById(id) {
    return vacances.filter(vacanca => vacanca.id === id)[0];
}
//# sourceMappingURL=app.js.map