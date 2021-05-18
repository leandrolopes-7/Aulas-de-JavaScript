function notas(nota){
    let notaArr = multiplo5(nota)
    if(notaArr >= 0 && notaArr < 40 ){
        console.log(`sua nota é ${notaArr}, reprovado`)
    }else if(notaArr >= 40 && notaArr <= 100){
        console.log(`sua nota é ${notaArr}, aprovado`)
    }

}

function multiplo5(nota){
    return Math.ceil(nota/5)*5
}

notas(84)
notas(37)