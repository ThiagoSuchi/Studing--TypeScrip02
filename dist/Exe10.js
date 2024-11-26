function conversor(temperatura, escala) {
    if (escala === 'Celsius' || escala === 'C') {
        let Fahrenheit = temperatura * 1.8 + 32;
        return Fahrenheit;
    }
    else if (escala === 'Fahrenheit' || escala === 'F') {
        let Celsius = (temperatura - 32) / 1.8;
        return Celsius;
    }
}
console.log(conversor(68, 'Celsius'));
export {};
