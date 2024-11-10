// Exercício 12 - Crie uma função que receba uma string e uma palavra e remova todas as ocorrências dessa palavra na string.

function corretorDeString(string:string, palavra:string):string[] | string {
    

    let texto = string.split('')
    let textoCorrigido = ''
    
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] !== palavra) textoCorrigido = texto[i]    
    }
    

    return textoCorrigido

}

let texto:string = 'Toda vez que eu viajava pela estrada de ouro fino, era la que avistava a eblema figura de um menino...';
console.log(corretorDeString(texto, 'eblema'));
