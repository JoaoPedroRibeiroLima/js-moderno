class carro{
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = 'Utilitario'
            this.velmax = 100
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    getVelMax() {
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V. Maxima: ${this.velmax} Km/h`)
    }
}

let c1 = new carro('golf', 2)

console.log(c1.getInfo()[2])