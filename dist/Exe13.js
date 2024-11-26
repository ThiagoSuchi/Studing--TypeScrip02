function contagemDeLetras(string) {
    let verificadorLetras = [];
    const letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let l = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'o') {
            verificadorLetras.push(string[i]);
        }
    }
    let qtd = verificadorLetras.length;
    for (let i = 0; i < letra.length; i++) {
        if (letra[i] === verificadorLetras[l]) {
            console.log(`${letra[i]} = ${qtd}`);
        }
    }
    return verificadorLetras;
}
const doc = 'ooo sol pediu a lua em casamento, e aaa luuuaa disse não sei não sei, me dá um tempo!';
console.log(contagemDeLetras(doc));
export {};
