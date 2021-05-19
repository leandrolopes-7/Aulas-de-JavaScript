let notas = [3.5, 9.4, 5.7, 4.8, 7.4, 6.5]
let conceitoD = []
let conceitoC = []
let conceitoB = []
let conceitoA = []

function conceitoNotas(notas){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
            conceitoD.push(notas[i])
        }else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            conceitoC.push(notas[i])
        }else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            conceitoB.push(notas[i])
        }else if(notas[i] >= 9.0 && notas[i] <= 10){
            conceitoA.push(notas[i])
        }
    }
}

conceitoNotas(notas)
console.log(`quantidade Notas com conceito A ${conceitoA.length}, notas ${conceitoA}`)
console.log(`quantidade Notas com conceito B ${conceitoB.length}, notas ${conceitoB}`)
console.log(`quantidade Notas com conceito C ${conceitoC.length}, notas ${conceitoC}`)
console.log(`quantidade Notas com conceito D ${conceitoD.length}, notas ${conceitoD}`)