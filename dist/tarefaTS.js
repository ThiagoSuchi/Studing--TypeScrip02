var Status;
(function (Status) {
    Status["Pendente"] = "Pendente";
    Status["Concluido"] = "Conclu\u00EDdo";
    Status["Cancelado"] = "Cancelado";
})(Status || (Status = {}));
let gerenciamentDeCompromisso = [];
function inserirCompromisso(compromisso) {
    gerenciamentDeCompromisso.push(compromisso);
}
function listarCompromisso() {
    return gerenciamentDeCompromisso;
}
function listarPorStatus(statusCompromisso) {
    const filtro = gerenciamentDeCompromisso.filter((filter) => {
        return filter.status == statusCompromisso;
    });
    return filtro;
}
function alterarCompromisso(comp) {
    comp.titulo = 'Cinema - cinelaser';
}
function deletarCompromisso(arr, id) {
    let arrAtualizado = [];
    for (let i = 0, j = arr.length; i !== j; i++) {
        if (arr[i] !== id)
            arrAtualizado.push(arr[i]);
    }
    return arrAtualizado;
}
let compro1 = {
    data: new Date('2024-11-06'),
    hora: '19:30',
    titulo: 'Cinema',
    descricao: 'Ir ao cinema as 19:30, com a família assistir Venom',
    status: Status.Concluido
};
let compro2 = {
    data: new Date('2024-11-02'),
    hora: '20:00',
    titulo: 'Academia',
    descricao: 'Treino as 20hr na academia atmus.',
    status: Status.Cancelado
};
let compro3 = {
    data: new Date('2024-11-22'),
    hora: '15:30',
    titulo: 'Entrega',
    descricao: 'Fazer uma entrega de um kit de alimentos na igreja Batista Esperença as 15:30',
    status: Status.Pendente
};
inserirCompromisso(compro1);
inserirCompromisso(compro2);
inserirCompromisso(compro3);
alterarCompromisso(compro1);
console.log('---------------------Lista Atualizada---------------------------------------');
console.log(deletarCompromisso(gerenciamentDeCompromisso, gerenciamentDeCompromisso[1]));
console.log('---------------------Lista filtrada por status------------------------------');
console.log(listarPorStatus(Status.Pendente));
export {};
