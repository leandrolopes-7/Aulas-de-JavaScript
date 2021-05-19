let vetor1 = [1, 2, 3, 4]
let vetor2 = [9, 8, 7, 6]

function trocaVetores(vetor1, vetor2){
    for(let i = 0; i < vetor1.length; i++){
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }
    return console.log(vetor1, vetor2)
}

trocaVetores(vetor1, vetor2)