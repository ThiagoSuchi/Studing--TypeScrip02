// Exercício 09: Crie uma função que ordene um array de números em ordem crescente.


function ordenarCrescenteNum(array: number[]) {

    for (let i = 0; i < array.length; i++) {
        for (let i = 0; i < array.length - 1; i++) {
            let numMaior = 0;
            if (array[i] > array[i + 1]) {
                numMaior = array[i]
                array[i] = array[i + 1]
                array[i + 1] = numMaior
            }

        }
    }

    return array

}

console.log(ordenarCrescenteNum([2, 5, 3, 7, 8, 6, 4, 1, 10, 9]));
