function divisivel(numA, numB) {
    const resto = numA % numB;
    if (resto == 0)
        return true;
    return false;
}
function ePrimo(num) {
    for (let i = 2; i < num; i++) {
        if (divisivel(num, i))
            return false;
    }
    return true;
}
const numero = 881;
if (ePrimo(numero)) {
    console.log('é primo!');
}
else {
    console.log('não é primo!');
}
export {};
