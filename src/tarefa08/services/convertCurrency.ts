import { Currency } from "../models/enum";
import { changeRates } from "../models/object";

export function convertCurrency(amount: number, from: Currency, to: Currency) {
    
    // Moeda que irá se a conversora
    let coinTo;

    // Fiz uma validação para percorrer o enum e validar o valor da moeda
    if(Currency[to]){
        coinTo = changeRates[to]
    } else {
        console.error(`Não foi possível converter para ${to}`);
        return null
    }

    // Conversão de moedas em relação ao real
    if(from === 'BRL'){
        const convertValue = amount / (to === 'USD' ? coinTo * 6.12 : coinTo * 6.34)
        return convertValue.toFixed(2)
    } else if (from === 'USD' && to === 'BRL') {
        const convertValue = amount * (coinTo * 6.12)
        return convertValue.toFixed(2)
    } else if (from === 'EUR' && to === 'BRL') {
        const convertValue = amount * (coinTo * 6.34)
        return convertValue.toFixed(2)
    }

    console.error(`Não é possível converter para esta moeda ${to}, por vafor converta para a moeda Real(R$)`);
    return null
}


