const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Leandro',
        nota: 9.5
    },{
        nome: 'Antonio',
        nota: 8.7
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'MAriana',
        nota: 7.9
    }, {
        nome: 'Quiteria',
        nota: 8.8
    }]
}]

const getNotasAlunos = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAlunos)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)