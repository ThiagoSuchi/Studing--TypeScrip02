/* 1) Gerenciamento de Usuários
- Crie uma aplicação que gerencie usuários e seus papéis (roles).
- Crie um enum Role com os valores: ADMIN, USER, GUEST.
- Defina uma interface User com os campos: id, nome, role.
- Utilize UUID para gerar o id.
- Crie uma função que receba um array de usuários e filtre apenas os usuários com um 
determinado papel.

Obs.: utilize arquivos separados para implementar o exercícios.
 */

import { v4 as uuidv4 } from 'uuid';

enum Role {
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest'
}

interface User {
    id: string,
    nome: string,
    role: Role
}

const usuarios: User[] = [
    { id: uuidv4(), nome: 'Marcela Camargo Viera', role: Role.ADMIN },
    { id: uuidv4(), nome: 'Luíd Hunroff Lemos', role: Role.USER },
    { id: uuidv4(), nome: 'Carlos Afonso Lima', role: Role.GUEST },
    { id: uuidv4(), nome: 'Luan Gomes Dutra', role: Role.GUEST },
    { id: uuidv4(), nome: 'Maria Leticía Munhóz', role: Role.ADMIN },
    { id: uuidv4(), nome: 'Amanda Noier Silva', role: Role.USER },
]


function filterUsuarios(usuario: User[], role: Role) {
    let usuarios = usuario.filter((usu) => usu.role === role).map((usu) => {
        return {
          id: usu.id, 
          nome: usu.nome, 
          role: usu.role
        }
    })
    return usuarios
}

const role = Role.GUEST
const usuarioFiltrado = filterUsuarios(usuarios, role)
console.log(usuarioFiltrado);

