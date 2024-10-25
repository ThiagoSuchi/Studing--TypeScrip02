"use strict";
function factoryNumber(num) {
    let number = 0;
    while (num > 0) {
        number = num - 1;
    }
    console.log(number);
}
console.log(factoryNumber(4));
