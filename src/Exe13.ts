// Exercício 13 - Escreva uma função que conte e retorne o número de ocorrências de cada letra em uma string.


function contagemDeLetras(string: string) {
    let verificadorLetras: string[] = []
    const letra: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let l = 0

    // Verifica quantos 'o' tem no texto
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'o') {
            verificadorLetras.push(string[i])
        }
    }

    let qtd = verificadorLetras.length
    
    // imprime na tela a letra e a quantidade dela no texto
    for (let i = 0; i < letra.length; i++) {
        if (letra[i] === verificadorLetras[l]) {
            console.log(`${letra[i]} = ${qtd}`);
        }
    }

    return verificadorLetras
}


const doc: string = 'ooo sol pediu a lua em casamento, e aaa luuuaa disse não sei não sei, me dá um tempo!'
console.log(contagemDeLetras(doc));

