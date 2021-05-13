function rand({min = 0000, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 1000, min: 0000}

console.log(rand(obj))
//console.log(rand({min: 955}))
//console.log(rand({}))
//console.log(rand())