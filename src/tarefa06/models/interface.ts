import { Category } from "./enum";

export interface Product {
    id: string,
    nome: string,
    preco: number,
    categoria: Category
}