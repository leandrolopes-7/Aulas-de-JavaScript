function anuidadeAssociacao(mes, valor){
    if(mes > 0 && mes < 13){
        atraso = mes - 1
        return (valor * ((1 + (5/100) ) ** atraso)).toFixed(2)
    }else{
        return 'Mes invalido'
    }
    
}

console.log(anuidadeAssociacao(4, 100))