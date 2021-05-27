const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro ', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const produtoFragil = produtoFragil => produtoFragil.fragil

const preco = precoMaior => precoMaior.preco > 500

const resultado = produtos.filter(preco).filter(produtoFragil)

console.log(resultado)