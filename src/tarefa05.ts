/*   2) Validação de Dados de Usuário
Crie um validador de dados para cadastro de usuários em TypeScript.
--> Crie uma interface Usuario com os seguintes campos:
- username (string): deve ter pelo menos 5 caracteres.
- email (string): deve ser um endereço de e-mail válido.
- password (string): deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.
- idade (número): deve ser maior ou igual a 18.

--> Implemente uma função validarUsuario(usuario: Usuario): string[] que:
- Recebe um objeto do tipo Usuario.
- Retorna um array de strings com mensagens de erro, caso as validações falhem.
- Retorna um array vazio se todos os dados forem válidos.

--> Teste a função com pelo menos 3 usuários:
- Um usuário com todos os dados válidos.
- Um usuário com pelo menos dois campos inválidos.
- Um usuário com um único campo inválido. 
*/

import { validingEmail } from "./data05/emailValid";
import { senhaValida } from "./data05/senhaValid";
import { Usuario } from "./data05/interface";

export function validarUsuario(usuario: Usuario): string[] {
    const erro: { [key: string]: string[] } = {
        erro1: ['Usuário inválido! Nome deve ter pelo menos 5 caracteres.'],
        erro2: ['Usuário inválido! Deve ser um endereço de e-mail válido.'], 
        erro3: ['Usuário inválido! Sua senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.'],
        erro4: ['Usuário inválido! você é menor de idade.']
    };

    if(usuario.username.length < 5) return erro.erro1;
    if(validingEmail(usuario.email) === false) return erro.erro2;
    if(senhaValida(usuario.password) === false) return erro.erro3;
    if(usuario.idade < 18) return erro.erro4;

    return []
};

// Teste 1 - Usuário com todos os campos válidos
const usuario1: Usuario = {
    username: 'Thiago',
    idade: 21,
    email: 'thiago@gmail.com',
    password: 'thiAgo2323suchi@'
}
// Teste 2 - Usuário com dois campos inválidos
const usuario2: Usuario = {
    username: 'Ana',
    idade: 15,
    email: 'anamaria@gmail.com',
    password: 'aninhA123@'
}
// Teste 3 - Usuário com um campo inválido
const usuario3: Usuario = {
    username: 'Lucas de Souza',
    idade: 24,
    email: 'lucinhas123',
    password: 'lucasPalmer22#'
}

console.log(validarUsuario(usuario1));
console.log(validarUsuario(usuario2));
console.log(validarUsuario(usuario3));


 
