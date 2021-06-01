//nõ aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Botafogo')
times.add('Chapecoense')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)