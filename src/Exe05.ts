// Exercício 05: Escreva uma função que conte e retorne o número de vogais em uma string.


function quantidadeVogais(texto: string):number {

    const vogais: string[] = ['a','A','e','E','i','I','o','O','u','U']
    let vogaisDaFrase = ''
    
    for(let i = 0; i < vogais.length; i++){
        for(let j = 0; j < texto.length; j++){
            if(texto[j] === vogais[i]){
                vogaisDaFrase += texto[j]
            }
        }
    }

    let separarString:string[] = vogaisDaFrase.split('')
    let numeroDeVogais = separarString.length

    return numeroDeVogais
}

console.log(quantidadeVogais('Eae meu parceiro, vamos comçar a praticar TypeScript?'));
