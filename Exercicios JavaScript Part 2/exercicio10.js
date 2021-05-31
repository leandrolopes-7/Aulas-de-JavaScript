function simboloMais(quantidade){
    let simbolo = ''
    for(let i = 0; i < quantidade; i++){
        simbolo = simbolo.concat('+')
    }
    return simbolo
}

console.log(simboloMais(4))