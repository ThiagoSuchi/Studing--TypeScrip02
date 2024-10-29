// Exercício 08: Escreva uma função que receba um array de números e retorne o maior número.

function maiorNum(num: number[]) {
    let maiorValor: number = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i - 1]) {
            maiorValor = num[i]
        }
    }

    return maiorValor
}
const num: Array<number> = [23, 43, 64, 77, 432, 98, 66, 56]
console.log(maiorNum(num));
