let vetor = [3, 5, 7, 2, 8, 3, 9, 0, 9, 2, 1]
let menorNumero = 9
let maiorNumero = 0
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < menorNumero){
        menorNumero = vetor[i]
    }else if(vetor[i] >= maiorNumero){
        maiorNumero = vetor[i]
    }
}

console.log(menorNumero)
console.log(maiorNumero)