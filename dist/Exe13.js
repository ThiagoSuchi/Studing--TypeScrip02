let letras = {
    letraMaiuscula: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    letraMinuscula: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
};
function contagemDeLetras(string, letras) {
    let str = string.split('');
    let idx = 0;
    for (let i = 0; i < letras.letraMinuscula.length; i++) {
        if (str[idx] === letras.letraMinuscula[i]) {
            console.log(str[idx]);
            idx++;
        }
        else {
        }
    }
}
const doc = 'Ooo sol pediu a lua em casamento! E aaa luuuaa disse não sei não sei, me dá um tempo!';
contagemDeLetras(doc, letras);
export {};
