import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
const produtos = [
    { id: uuidv4(), nome: 'Parafusadeira/Furadeira de Impacto Brushless', preco: 649.00 },
    { id: uuidv4(), nome: 'Furadeira de Impacto', preco: 649.00 },
    { id: uuidv4(), nome: 'Esmirilhadeira Angular', preco: 620.90 },
    { id: uuidv4(), nome: 'Serra sabre Compacta 20V', preco: 560.90 },
    { id: uuidv4(), nome: 'Jogo de Chave Combinadada', preco: 69.00 },
    { id: uuidv4(), nome: 'Jogo de Chave Biela 8 a 19mm', preco: 253.90 },
    { id: uuidv4(), nome: 'Jogo de Alicate com 3 peças', preco: 87.90 },
    { id: uuidv4(), nome: 'Jogo de Chaves Estrela Catraca 6x21mm', preco: 99.90 },
    { id: uuidv4(), nome: 'Marreta Oitavada', preco: 274.90 },
];
produtos.forEach((prod) => {
    console.log(chalk.bgGray.blue(`Produto: ${prod.nome} - (R$${prod.preco.toFixed(2)})
-----------------------------------------------------------------`));
});
