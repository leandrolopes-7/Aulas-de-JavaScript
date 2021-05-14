const notas = [4.5, 7.9, 3.5, 6.7, 3.1, 9.8, 7]

//sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

