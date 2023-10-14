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
}

let c1 = new carro('golf', 2)

console.log(p1)
