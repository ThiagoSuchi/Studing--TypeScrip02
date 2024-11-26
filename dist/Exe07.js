function numMedia(num) {
    let soma = 0;
    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }
    let media = Math.floor(soma / num.length);
    return media;
}
const numeros = [22, 32, 56, 73, 44, 17];
console.log('Média normal com for - ' + numMedia(numeros));
function numMedia2(num) {
    const soma = num.reduce((acc, valor) => {
        return acc + valor;
    }, 0);
    let media = Math.floor(soma / num.length);
    return media;
}
const numeros2 = [20, 30, 50, 70, 40, 17, 98];
console.log('Utilizando o método reduce - ' + numMedia2(numeros2));
export {};
