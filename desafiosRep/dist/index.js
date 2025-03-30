"use strict";
const argv = Number(process.argv.slice(2));
// ---------- NÚMEROS ALEATÓRIOS ----------
function randomNums2(amtElement, min, max) {
    let arrayNumbers = Array.from({ length: amtElement }, () => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    });
    return arrayNumbers;
}
// ---------- MAIOR, MENOR e MÉDIA ----------
function biggerMinorAverage(listNumber) {
    const numBig = Math.max(...listNumber);
    const numMin = Math.min(...listNumber);
    const average = Math.floor(listNumber.reduce((acc, num) => acc + num, 0) / listNumber.length);
    return `The smallest number - ${numMin} \nThe biggest number - ${numBig} \nThe average of the list - ${average}`;
}
// ---------- PICO ----------
function peak(listNumber) {
    const arrayNumbers = [];
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > listNumber[i + 1]) {
            arrayNumbers.push(listNumber[i]);
        }
    }
    return `The numbers of the peak are - ${arrayNumbers}`;
}
const nums = randomNums2(argv, 0, 100);
const res = biggerMinorAverage(nums);
const peakNums = peak(nums);
console.log(nums);
console.log(res);
console.log(peakNums);
