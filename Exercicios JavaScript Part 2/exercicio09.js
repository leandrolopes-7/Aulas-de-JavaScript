function repetir(elemento, repeticao){
    let arrayRepeticao = []
    for(let i = 0; i < repeticao; i++){
        arrayRepeticao.push(elemento)
    }
    return arrayRepeticao
}

console.log(repetir('Ola', 5))