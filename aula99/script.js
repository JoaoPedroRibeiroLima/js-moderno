let jogadores = []

class Jogador{
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

for(let i = 0;i < 5;i++){
    jogadores.push(new Jogador(`j${i}`))
}

const id1 = jogadores[3].id

jogadores = jogadores.filter((e) => {
    return e.id != id1
})

console.log(jogadores)
