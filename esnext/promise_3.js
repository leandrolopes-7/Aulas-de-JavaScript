function gerarNumerosEntre(min, max){
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 40)
    .then(mult => mult * 10)
    .then(numX10 => `O resultado é ${numX10}`)
    .then(console.log)