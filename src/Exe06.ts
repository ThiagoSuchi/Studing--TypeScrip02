// Exercício 06: Crie uma função que determine se um número é primo.


function divisivel(numA:number, numB:number):boolean {
    
    const resto = numA % numB

    if(resto == 0) return true

    return false
}

function ePrimo(num:number) {

    for(let i = 2; i < num; i++){
        if(divisivel(num,i)) return false // não é primo, porque teve divisível 
    }

    return true // pois não teve nenhum divisível
}

const numero:number = 881

if(ePrimo(numero)){
    console.log('é primo!');
} else {
    console.log('não é primo!');
}