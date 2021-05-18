function diaUtil(dia){
    if(dia >=1 && dia <=31){
    switch (dia){
        case 1: case 8: case 15: case 22: case 29:
            console.log(`Domingo`)
            break
        case 7: case 14: case 21: case 28:
            console.log('Sábado')
            break
        default:
            console.log('Dia útil')
        }
    }else{
        console.log('Dia incorreto')
    }

}

diaUtil(4)