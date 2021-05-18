function planoSaude(idade){
    let valorFixo = 100
    let descricao = 'O valor a ser pago é de R$:'
    if(idade > 0 && idade < 10){
        return descricao + (valorFixo + 80)
    }else if(idade >= 10 && idade <= 30){
        return descricao + (valorFixo + 50)
    }else if(idade > 30 && idade <=60){
        return descricao + (valorFixo + 95)
    }else if(idade > 60){
        return descricao + (valorFixo + 130)
    }
    return descricao
}
console.log(planoSaude(9))