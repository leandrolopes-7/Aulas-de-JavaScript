function divisivel(num){
    let numDivisivel = num % 3
    if(numDivisivel === 0){
        return true
    }else{
        return false
    }
}

console.log(divisivel(3))