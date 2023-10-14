class Nave {
    constructor(energia) {
        this.energia = energia
        this.disparos = 3
    }
}

const n1 = new Nave(100)

Nave.prototype.vidas = 3
Nave.prototype.atirar = function() {
    if (this.disparos > 0) {
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)

n1.atirar()
n1.atirar()
n1.atirar()
n1.atirar()
n1.atirar()

console.log(n1)
