function numImpares(inicio, fim){
    for(let i = inicio; i <= fim; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}

console.log(numImpares(1, 100))