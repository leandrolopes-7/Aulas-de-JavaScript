// operador ... rest(juntar)/spread(espalhar)
//usar rest como parametro na função

//usar spread com objeto
const funcionario = {nome: 'LEandro', salario: 6042.95}
const clone = {ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['Leandro', 'Mariana', 'Quiteria', 'Antonio']
const grupoFinal = [...grupoA, 'Duda']
console.log(grupoFinal)