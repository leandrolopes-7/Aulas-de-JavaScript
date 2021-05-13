function numeroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = numeroAleatorioEntre(-1, 10)
    console.log('Numero é...' +opcao)
} while (opcao != -1)