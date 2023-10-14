class Npc {
    static alerta=false
    constructor(energia, nome) {
        this.energia=energia
        this.nome=nome
        this.emocao = 'triste'
    }
    info=function() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "sim" : "não")}`)
        console.log(`Emoção: ${this.emocao}`)
        console.log(`----------------------`)
    }
    static alertar = function() {
        Npc.alerta = true
    }
    
}

const npc1 = new Npc(100, 'npc1')
npc1.info()
console.log(Npc.alerta)

const npc2 = new Npc(80, 'npc2')
npc2.info()
Npc.alertar()
Npc.emocao = 'feliz'

const npc3 = new Npc(30, 'npc3')
npc3.info()

npc1.info()