import { produtos } from "../tarefa04";

// Atualizando a quantidade de produto
export const atualizarQuantidade = (id: string, qtd: number):void => {
    produtos.splice(0, produtos.length, ...produtos.map((prod) => {
        if(prod.id === id) {
            return { ...prod, quantidade: qtd }; // O objeto está entre chaves ({}) porque queremos criar um novo objeto que contém todas as propriedades do objeto original prod, mas com a propriedade quantidade atualizada.
        } 
        return prod
    }))
}