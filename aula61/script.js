const Pessoa = {
    nome: "Bruno",
    getNome: function() {
        return this.nome
    },
    setNome: function(nome) {
        this.nome = nome
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = 'Robson'

console.log(Pessoa)
console.log(p2.nome)
console.log(p3.nome)
console.log(Pessoa.setNome)