function triangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoA === ladoC){
        console.log('Este triangulo é equilátero')
    }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        console.log("Este tringulo é Isósceles")
    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        console.log('Este triangulo é Escaleno')
    }
}

//triangulo(10, 10, 10)
//triangulo(10, 14, 14)
triangulo(13, 13, 12)