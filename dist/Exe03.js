function factoryNumber(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factoryNumber(4));
export {};
