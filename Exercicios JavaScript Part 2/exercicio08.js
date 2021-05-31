function multiplicar(num1, num2){
    if(num1 >= 0 && num2 >= 0){
        let resultado = 0
        for(let i = 0; i < num2; i ++){
            resultado += num1
        }
        return resultado
    }
}

console.log(multiplicar(5, 3))