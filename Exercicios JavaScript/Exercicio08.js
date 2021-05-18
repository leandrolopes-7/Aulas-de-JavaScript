let stringPontuacoes = '20, 30, 45, 20, 17, 14, 19, 21, 10, 12'

function avaliaPontuacoes(){
    let pontuacoes = stringPontuacoes.split(', ')
    let quebraRecorde = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            quebraRecorde++
        } else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }

    return [quebraRecorde, piorJogo]

}

console.log(avaliaPontuacoes(stringPontuacoes))