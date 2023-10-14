class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}


const c1 = new Militar('trator', 4, 200, 100)
c1.ligar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado}`)
console.log(`vel: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log(`-----------------------`)
console.log(`Blindagem: ${c1.blindagem}`)
console.log(`Munição: ${c1.municao}`)
