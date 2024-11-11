// Exercício 12 - Crie uma função que receba uma string e uma palavra e remova todas as ocorrências dessa palavra na string.

function corretorDeString(string: string, palavra: string): string {

    let textoCorrigido = ''

    if (typeof string === 'string') {
        textoCorrigido = string.replace(new RegExp(palavra, 'g'), '')
    }


    return textoCorrigido

}

let texto: string = 'Toda vez que eblema eu viajava pela eblema estrada de ouro fino, era la que avistava a eblema figura de um menino...';
console.log(corretorDeString(texto, 'eblema'));

// Sem o uso de replace() e RegExp()
console.log('-----------------------------------------------------------------------------------------------------------------------------');


function corretorDeString2(string: string, palavra: string): string {

    let textoCorrigido = ''
    let index = 0

    while (index < string.length){
        if(string.slice(index, index + palavra.length) === palavra) {
            index += palavra.length
        } else {
            textoCorrigido += string[index]
            index++
        }
    }

    return textoCorrigido

}

let texto2: string = 'Olá, meu nome carro é Davi Gomez sou web developer e estou a carro procura de emprego, espero que carro vejam meu currículo e carro me validem!';
console.log(corretorDeString2(texto2, 'carro'));