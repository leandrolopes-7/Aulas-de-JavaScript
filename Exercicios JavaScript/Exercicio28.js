let vetorNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numeros = 0
let numerosImpares = 0
let numerosPares = 0
while(vetorNumeros[numeros]){
    if(vetorNumeros[numeros]%2 == 0){
        numerosPares++
    }else{
        numerosImpares++
    }
    numeros++
}


console.log(numerosImpares)
console.log(numerosPares)