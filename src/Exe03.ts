// Exercício 03: Crie uma função que calcule o fatorial de um número inteiro fornecido como argumento.


function factoryNumber(num:number) {

    let resultado = 1

    for(let i = 1; i <= num; i++){
        resultado *= i
    }
    
    return resultado
}

console.log(factoryNumber(4));

// Na forma de while:

// function factoryNumberTwo(num: number) {

//     let resultado = 1

//     while (num > 0) {
//         resultado += resultado * (num - 1)
//         num--
//     }

//     return resultado
// }

// console.log(factoryNumber(4));
