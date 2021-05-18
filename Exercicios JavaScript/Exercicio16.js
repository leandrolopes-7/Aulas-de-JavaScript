function calculadora(a, operador, b){
    switch (operador){
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break
        default:
            console.log('Operação invalida')
    }
}

calculadora(2, '+', 10)
calculadora(10, '-', 5)
calculadora(5, '*', 5)
calculadora(10, '/', 5)
calculadora(12, '3', 10)