// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}
const aluno = 'Leandro'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}!`)