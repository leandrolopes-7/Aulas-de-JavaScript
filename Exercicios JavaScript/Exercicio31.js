let vetor = [6, 8, 4, 9, -1, -6, 2, -5, -9, -12, 10, 2, 5, 5]
let numerosNegativos = 0

for(let i = 0; i <= vetor.length; i++){
    if(vetor[i] < 0){
        numerosNegativos++
    }
}

console.log(numerosNegativos)