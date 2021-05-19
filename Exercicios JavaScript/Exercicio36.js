function multiplicaVetor(vetor, multiplicador){
    let vetorMultiplicados = []
    vetor.forEach(elemento =>{
        vetorMultiplicados.push(elemento * multiplicador)
    })
    return vetorMultiplicados
}

let vetor = [1, 2, 3, 4, 5]

console.log(multiplicaVetor(vetor, 3))