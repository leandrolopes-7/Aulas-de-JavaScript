const alunos = [
    {nome: 'LEandro', nota: 9.8, bolsista: true},
    {nome: 'Mariana', nota: 7.6, bolsista: true},
    {nome: 'Antonio', nota: 8.1, bolsista: false},
    {nome: 'Quiteria', nota: 10, bolsista: true}
]

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)