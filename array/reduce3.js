Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    const acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = ((total, valor) => total + valor)
const numeros = [2, 4, 6, 8, 10]

console.log(numeros.reduce(soma))