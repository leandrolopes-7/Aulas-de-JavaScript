function planoTrabalho(salario, plano){
    switch(plano){
        case 'A':
            console.log(`Seu novo salario é de ${salario + salario * 0.10}`)
            break
        case 'B':
            console.log(`Seu novo salario é de ${salario + salario * 0.15}`)
            break
        case 'C':
            console.log(`Seu novo salario é de ${salario + salario * 0.20}`)
            break
        default:
            console.log('Plano inválido')
    }
}

planoTrabalho(1000, 'A')
planoTrabalho(1000, 'B')
planoTrabalho(1000, 'C')
planoTrabalho(1000, 'D')