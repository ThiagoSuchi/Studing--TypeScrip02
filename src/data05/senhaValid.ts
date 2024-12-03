export function senhaValida(senha: string):boolean {
    const verificar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return senha.match(verificar) !== null
}