import { v4 as uuidv4 } from 'uuid';
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
})(Role || (Role = {}));
const usuarios = [
    { id: uuidv4(), nome: 'Marcela Camargo Viera', role: Role.ADMIN },
    { id: uuidv4(), nome: 'Luíd Hunroff Lemos', role: Role.USER },
    { id: uuidv4(), nome: 'Carlos Afonso Lima', role: Role.GUEST },
    { id: uuidv4(), nome: 'Luan Gomes Dutra', role: Role.GUEST },
    { id: uuidv4(), nome: 'Maria Leticía Munhóz', role: Role.ADMIN },
    { id: uuidv4(), nome: 'Amanda Noier Silva', role: Role.USER },
];
function filterUsuarios(usuario, role) {
    let usuarios = usuario.filter((usu) => usu.role === role).map((usu) => {
        return {
            id: usu.id,
            nome: usu.nome,
            role: usu.role
        };
    });
    return usuarios;
}
const role = Role.GUEST;
const usuarioFiltrado = filterUsuarios(usuarios, role);
console.log(usuarioFiltrado);
