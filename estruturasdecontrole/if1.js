function soNoticiaBoa(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}
soNoticiaBoa(7.1)
soNoticiaBoa(6.7)

function noticiaVerdadeira(valor){
    if(valor){
        console.log('é verdadeira a noticia...' + valor)
    }
}

noticiaVerdadeira()
noticiaVerdadeira(null)
noticiaVerdadeira(undefined)
noticiaVerdadeira(NaN)
noticiaVerdadeira('')
noticiaVerdadeira(0)
noticiaVerdadeira(-1)
noticiaVerdadeira(' ')
noticiaVerdadeira('?')
noticiaVerdadeira([])
noticiaVerdadeira([1, 2])
noticiaVerdadeira({})