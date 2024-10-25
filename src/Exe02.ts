// Exercício 02: Escreva uma função que receba um número e retorne true se for par ou false se for ímpar.

function imparPar(number:number) {
    
    if(number % 2 === 0) {
        console.log('Este número é Par!');         
    } else if(number % 2 === 1) {
        console.log('Este número é Ímpar!');
    }

}

imparPar(9)