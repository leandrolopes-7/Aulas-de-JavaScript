function fatorial(numero){
    let resultado = numero
    let primeiroMultiplicador = numero - 1
    for(let repeticao = primeiroMultiplicador; repeticao > 1; repeticao --){
        resultado = resultado * repeticao
    }
    return console.log(`fatorial de ${numero} é ${resultado}`)
}

fatorial(5)