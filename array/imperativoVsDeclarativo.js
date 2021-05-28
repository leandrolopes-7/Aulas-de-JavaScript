const alunos = [
    {nome: 'Leandro', nota: 7.6},
    {nome: 'Mariana', nota: 9.5}
]

//Imperativo
let valorTotal = 0
for(let i = 0; i < alunos.length; i++){
    valorTotal += alunos[i].nota
}
console.log(valorTotal / alunos.length)

//Declarativo

const soma = (total, valor) => total + valor
const notaAlunos = alunos => alunos.nota
const media = alunos.map(notaAlunos).reduce(soma)
console.log(media / alunos.length)