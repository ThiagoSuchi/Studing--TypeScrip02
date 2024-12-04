/* Manipulação de dados com Map e Filter
Você vai manipular uma lista de produtos para aplicar descontos e filtrar os resultados no 1º exercício.
--> Crie uma função aplicarDisconto(produtos: Product[], desconto: number): Product[] que:
- Recebe um array de produtos e um valor de desconto (em porcentagem, ex.: 10 para 10%).
- Retorna um novo array com os preços dos produtos atualizados após o desconto.
--> Crie uma função filtrarPorCategoria(produtos: Produto[], categoria: string): Produto[] que:
- Recebe um array de produtos e uma categoria.
- Retorna apenas os produtos que pertencem à categoria especificada.
--> Teste o código com uma lista de pelo menos 5 produtos:
- Aplique um desconto de 15% em todos os produtos.
- Filtre apenas os produtos da categoria "eletrônicos".
*/
import { v4 as uuidv4 } from 'uuid';
import { Product } from './models/interface';


export function aplicarDisconto(produtos: Product[], desconto: number): Product[] {
    const percent = desconto / 100;
    for(let i = 0; i < produtos.length; i++){
        var descontoProd = produtos[i].preco * percent
    }

    const newValueProd = produtos.map((prod) => prod.preco - descontoProd)
    return produtos
}



