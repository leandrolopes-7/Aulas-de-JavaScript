function carro(modelo){
    switch (modelo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automovel aqui')
    }
}

carro('hatch')
carro('pick-up')