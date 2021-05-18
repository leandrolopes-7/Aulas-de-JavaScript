function crescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    if(altura1 == altura2){
        if(taxaCrescimento1 > taxaCrescimento2){
            return 'a criança 1 ficara maior que a criança 2 em 1 ano'
        }else if(taxaCrescimento1 < taxaCrescimento2){
            return 'a criança 2 ficara maior que a criança 1 em 1 ano'
        }else{
            return 'As duas crianças terão o mesmo tamanho'
        }
    }else{
        if(altura1 > altura2){
            if(taxaCrescimento1 >= taxaCrescimento2){
                return 'a criança menor nao ira ultrapassar a maior'
            }else{
                return calcTempo(altura2, taxaCrescimento2, altura1, taxaCrescimento1)
            }
        }else {
            if(taxaCrescimento2 >= taxaCrescimento1){
                return 'a criança menor nao ira ultrapassar a maior'
            }else{
                return calcTempo(altura1, taxaCrescimento1, altura2, taxaCrescimento2)
            }
        }
    }
}

function calcTempo(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
    let qtdAnos = 0
    while(alturaMenor < alturaMaior){
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(crescimento(150, 2, 130, 4))