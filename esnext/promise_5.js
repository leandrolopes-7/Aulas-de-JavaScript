function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try {
            if(Math.random() < chanceErro){
                reject('Erro!')
            }else{
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        //v => consol.log(v),
        //err => console.log(`Erro Esp: ${err}`)
    )
    .then(() => console.log('Quase no fim!'))
    .catch(e => console.log(e))
    .then(() => console.log('Fim!'))