function Pessoa(nome) {
    this.nome = nome
    this.falar = nome => { console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Vinicius')
p1.falar()

console.log(p1.nome)