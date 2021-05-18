function sacarDinheiro(valorSaque){
    let nota1 = 0
    let nota5 = 0
    let nota10 = 0
    let nota50 = 0
    let nota100 = 0
    let valorNota = calcValorNotas(valorSaque)
    while(valorSaque >= valorNota){
        switch(valorNota){
            case 100:
                valorSaque -= 100
                nota100++
                break
            case 50:
                valorSaque -= 50
                nota50++
                break
            case 10:
                valorSaque -= 10
                nota10++
                break
            case 5:
                valorSaque -= 5
                nota5++
                break
            case 1:
                valorSaque -= 1
                nota1++
                break               
        }

        valorNota = calcValorNotas(valorSaque)
    }
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)
}
function calcValorNotas(valorSaque){
    if(valorSaque >= 100){
        return 100
    }else if(valorSaque >= 50){
        return 50
    }else if(valorSaque >= 10){
        return 10
    }else if(valorSaque >= 5){
        return 5
    }else if(valorSaque >= 1){
        return 1
    }
}

function elaborarResultado(nota100, nota50, nota10, nota5, nota1){
    let resultado = ''
    if(nota100 > 0){
        resultado += `${nota100} de R$:100,00\n`
    }if(nota50 > 0){
        resultado += `${nota50} de R$:50,00\n`
    }if(nota10 > 0){
        resultado += `${nota10} de R$10,00\n`
    }if(nota5 > 0){
        resultado += `${nota5} de R$5,00\n`
    }if(nota1 > 0){
        resultado += `${nota1} de R$1,00\n` 
    }
    return resultado
}

console.log(sacarDinheiro(140))