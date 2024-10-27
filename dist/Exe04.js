"use strict";
let arrayAlfabeto = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let arrayLetraIsolada = [];
let arrayInvertido = [];
for (let i = 0; i < arrayAlfabeto.length; i++) {
    arrayLetraIsolada.push(...arrayAlfabeto[i]);
}
for (let index = arrayLetraIsolada.length - 1; index >= 0; index--) {
    arrayInvertido.push(arrayLetraIsolada[index]);
}
console.log(arrayAlfabeto);
console.log(arrayInvertido);
let nome = 'Thiago Hens Suchi';
let stringInvertida = '';
for (let i = nome.length - 1; i >= 0; i--) {
    stringInvertida += nome[i];
}
console.log(stringInvertida);
