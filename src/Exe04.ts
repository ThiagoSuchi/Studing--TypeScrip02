// Exercício 04: Faça código receba uma string e retorne a mesma string invertida.

//------------- Com variáveis de array vazio ----------------

let arrayAlfabeto:string[] = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let arrayLetraIsolada: Array<string> = [] 
let arrayInvertido: Array<string> = [] 

for(let i = 0; i < arrayAlfabeto.length; i++) {
    arrayLetraIsolada.push(...arrayAlfabeto[i]) 
}

for (let index = arrayLetraIsolada.length - 1; index >= 0; index--) {
   arrayInvertido.push(arrayLetraIsolada[index]) 
}
console.log(arrayAlfabeto);
console.log(arrayInvertido);


//-------------- OU com uma variável de string vazia ----------------


let nome:string = 'Thiago Hens Suchi'
let stringInvertida: string = ''

for(let i = nome.length - 1; i >= 0; i--) {
    stringInvertida += nome[i]
}

console.log(stringInvertida);
