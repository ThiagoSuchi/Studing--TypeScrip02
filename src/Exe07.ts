// Exercício 07: Dada uma lista de números, crie uma função que calcule e retorne a média dos números.

function numMedia(num: number[]) {
    let soma:number = 0
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    let media:number = Math.floor(soma / num.length)

    return media
}

const numeros: number[] = [22, 32, 56, 73, 44, 17]
console.log('Média normal com for - ' + numMedia(numeros));

// Usando reduce

function numMedia2(num: number[]) {
   const soma: number = num.reduce((acc, valor):number => {
    return acc + valor;
   }, 0)
    
    let media:number = Math.floor(soma / num.length);

    return media;
}

const numeros2: number[] = [20, 30, 50, 70, 40, 17, 98];
console.log('Utilizando o método reduce - ' + numMedia2(numeros2));
 