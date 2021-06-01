const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(e, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname,'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `A frase é: ${conteudo}`)
    .then(console.log)