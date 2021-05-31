function inverso(valor){
    const tipo = typeof valor
    
    if(tipo == 'boolean'){
        console.log(!valor)
    }else if(tipo == 'number'){
        console.log(-valor)
    }
    else{
        console.log('booleano ou numeros esperado, mas o parametro é do tipo string')
    }
}

inverso(10)
inverso(-10)
inverso(true)
inverso('ola')

console.log(typeof Number)