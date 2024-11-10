// Exercício 11 - Escreva uma função que receba um número n e retorne os n primeiros números da sequência de Fibonacci.


function fibonaci (n:number): number[] {

    let mainNumbers: number [] = [0, 1];

    for(let i = 2; i < n; i++){
        mainNumbers.push(mainNumbers[i - 1] + mainNumbers[i - 2])
    }

    return mainNumbers.slice(1, n)
}

console.log(fibonaci(5));
