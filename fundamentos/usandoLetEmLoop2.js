const functs = []

for(let i = 0; i < 10; i++){
    functs.push(function(){
        console.log(i)
    })
}

functs[2]()
functs[8]()