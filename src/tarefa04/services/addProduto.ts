import { Produto } from "../models/interface";
import { produtos } from "../tarefa04";

// Método adicionar produto
export const addProduto = (produto: Produto): void => {
    produtos.push(produto)
}
