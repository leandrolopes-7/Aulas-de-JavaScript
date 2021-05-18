function cardapio(codProd, quantProd ){
    switch(codProd){
        case 100:
            precoProd = 3.00
            descProd = 'Cachorro Quente'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        case 200:
            precoProd = 4.00
            descProd = 'Hamburguer Simples'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        case 300:
            precoProd = 5.50
            descProd = 'Cheeseburguer'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        case 400:
            precoProd = 7.50
            descProd = 'Bauru'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        case 500:
            precoProd = 3.50
            descProd = 'Refrigerante'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        case 600:
            precoProd= 2.80
            descProd = 'Suco'
            console.log(`O total de ${descProd} é de R$:${quantProd * precoProd}`)
            break
        default:
            console.log('Produto nao existente')

    }
}

cardapio(100, 2)
cardapio(300, 4)
cardapio(10, 2)
