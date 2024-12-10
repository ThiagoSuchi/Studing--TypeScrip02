import fs from 'fs';
import { addEstudante } from './services/addEstudante';


const filePath = './data/estudante.txt';

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const estudant = addEstudante('Ana Clara', 'anninhaMattos@gmail.com', 'Vilhena')
    const novoEstudante = data + `
    ID - ${estudant.id}
    nome - ${estudant.nome}
    email - ${estudant.email}
    endereço:
    cidade - ${estudant.endereco.cidade.nome}
    estado - ${estudant.endereco.estado}
    `
    
    fs.writeFileSync(filePath, novoEstudante, 'utf8')
    console.log('Arquivo atualizado com sucesso!');
    
} catch(err) {
    console.log(`${(err as Error).message}`);
}