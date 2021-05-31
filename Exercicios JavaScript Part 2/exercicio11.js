function receberPrimeiroEUltimoElemento(array = []){
    let novoArray = []
    novoArray.push(array.shift())
    novoArray.push(array.pop())
    return novoArray
}

console.log(receberPrimeiroEUltimoElemento([10, 40, 'Ola']))