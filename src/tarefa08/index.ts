import { Currency } from "./models/enum";
import { convertCurrency } from "./services/convertCurrency";

const input = require('readline-sync');

console.log('------------------ CONVERSOR DE MOEDAS ------------------');
const amount = Number(input.question('Digite o valor: '));
const from = input.question('Converter de BRL, USD ou EUR?: ');
const to = input.question('Para BRL, USD ou EUR?: ');

console.log('CONVERSÃO REALIZADA COM SUCESSO!');
console.log(`Resultado: ${to === Currency.BRL ? 'R$' : to === Currency.USD ? '$' : '€'}`, convertCurrency(amount, from, to));