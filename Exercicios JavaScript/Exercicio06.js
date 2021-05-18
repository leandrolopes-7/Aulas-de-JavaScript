function jurosSimples(capInicial, taxaJuros, tempoAplicação){
    let calcJurosSimples = capInicial * taxaJuros * tempoAplicação
    return calcJurosSimples.toFixed(2)

}

function jurosCompostos(capInicial,taxaJuros, tempoAplicação){
    let calcJurosComposto = capInicial * (1 + taxaJuros) ** tempoAplicação
    return calcJurosComposto.toFixed(2)
}

console.log('calculos juros simples: ' +jurosSimples(10000, 0.1, 12))
console.log('Calculo Juros Compostos:' +jurosCompostos(10000, 0.1, 12))