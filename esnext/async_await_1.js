function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

function retornaValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 4000)
    })
}

async function retornarValorRapido(){
    return 20
}

async function executar(){

    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 2}...`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 3}...`)

    return valor + 4
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()