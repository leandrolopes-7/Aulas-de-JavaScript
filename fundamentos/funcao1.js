//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 7, 10, 33)
imprimirSoma()

//função sem retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())