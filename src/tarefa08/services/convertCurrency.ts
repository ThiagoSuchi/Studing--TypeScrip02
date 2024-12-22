import { Currency } from "../models/enum";
import { changeRates } from "../models/object";

export function convertCurrency(amount: number, from: Currency, to: Currency) {
    
    let coinFrom;
    let coinTo;

    if(Currency[from]){
        coinFrom = changeRates[from]
    } 

    if(to === Currency[to]){
        coinTo = changeRates[to]
    }

    const convertValue = amount * coin
    
}


