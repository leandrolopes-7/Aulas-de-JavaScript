function pessoa(nome){
    this.nome = nome
    return {
        falar: () => console.log(`meu nome é ${this.nome}`)
    }
}

const criarPessoa = pessoa('Leandro')
criarPessoa.falar()