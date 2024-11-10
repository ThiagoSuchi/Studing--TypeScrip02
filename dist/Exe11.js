"use strict";
function fibonaci(n) {
    let mainNumbers = [0, 1];
    for (let i = 2; i < n; i++) {
        mainNumbers.push(mainNumbers[i - 1] + mainNumbers[i - 2]);
    }
    return mainNumbers.slice(1, n);
}
console.log(fibonaci(5));
