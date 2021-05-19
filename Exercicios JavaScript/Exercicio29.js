function percorreVetor(vetor){
    let quantidadeNumeros = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20)
        quantidadeNumeros++
    }
    return `quantidade de numeros entre 10 e 20 é de ${quantidadeNumeros}`
}
vetor = [6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21]

console.log(percorreVetor(vetor))