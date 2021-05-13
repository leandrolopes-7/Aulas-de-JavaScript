const notas = [4.6, 3.9, 3.9, 9.5, 4.7, 9.9]

for(let i in notas){
    console.log(`${i} : ${notas[i]}`)
}

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Lopes',
    idade: 24,
    peso: 60
}

for(let atributo in pessoa){
    console.log(atributo +': ' +pessoa[atributo])
}