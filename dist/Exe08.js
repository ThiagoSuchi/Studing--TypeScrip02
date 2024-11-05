"use strict";
function maiorNum(num) {
    let maiorValor = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i - 1]) {
            maiorValor = num[i];
        }
    }
    return maiorValor;
}
const num = [23, 43, 64, 77, 432, 98, 66, 56];
console.log(maiorNum(num));
