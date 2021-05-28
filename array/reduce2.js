const alunos = [
    {nome: 'LEandro', nota: 9.8, bolsista: true},
    {nome: 'Mariana', nota: 7.6, bolsista: false},
    {nome: 'Antonio', nota: 8.1, bolsista: false},
    {nome: 'Quiteria', nota: 10, bolsista: true}
]

//Desafio 1: todos os alunos são bolsistas?

const bolsistas = alunos.map(alunos => alunos.bolsista).reduce(function(acumulador, atual){
    if(acumulador && atual){
        return true
    }else{
        return false
    }
})
console.log(bolsistas)

//Desafio 2: algum aluno é bolsista?

const alunoBolsista = alunos.map(alunoBolsista => alunoBolsista.nota).reduce(function(acumulador, atual){
    if(acumulador || atual){
        return true
    }else {
        return false
    }

})

console.log(alunoBolsista)