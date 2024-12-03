/* 2) Gerenciamento de Produtos
- Crie uma lista de produtos e exiba-os formatados.
- Defina uma interface Produto com os campos id, nome e preço.
- Crie um array de produtos.
- Use o método forEach para exibir cada produto no formato: "Produto: Nome (R$ Preço)".

Obs.: utilize o pacote npm chalk para formatar a saída no console.
*/

import { produtos } from "./data02/array";

produtos.forEach((prod) => {
    console.log(`Produto: ${prod.nome} - (R$${prod.preco.toFixed(2)})
-----------------------------------------------------------------`);  
})