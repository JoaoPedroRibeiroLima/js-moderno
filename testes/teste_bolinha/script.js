const caixa = document.getElementById("caixa")

const falseOrTrue = () => {
    var randomazied = Math.floor(Math.random() * 2)
    if (randomazied == 0) {
        return true
    } else {
        return false
    }
}

const defCor = () => {
    const R = Math.floor(Math.random() * 255)
    const G = Math.floor(Math.random() * 255)
    const B = Math.floor(Math.random() * 255)
    const cor = `rgb(${R}, ${G}, ${B})`
    return cor
}

const defSize = () => {
    const size = Math.floor(Math.random() * 50)
    return size
}

const defVel = () => {
    const vel = Math.floor(Math.random() * 10)
    return vel
}

const createBola = (cor, size, vel) => {
    let isGoingUp = falseOrTrue()
    let isGoingDown
    isGoingUp == true?isGoingDown = false:isGoingDown = true

    let isGoingLeft = falseOrTrue()
    let isGoingRight
    isGoingLeft == true?isGoingRight = false:isGoingRight = true

    let posX = Math.floor(Math.random() * 900)
    let posY = Math.floor(Math.random() * 400)

    let bola = document.createElement('div')
    bola.style.width = `${size}px`
    bola.style.height = `${size}px`
    bola.style.borderRadius = "50%"
    bola.style.backgroundColor = cor
    bola.style.position = "absolute"
    bola.style.top = `${posY}px`
    bola.style.left = `${posX}px`
    caixa.appendChild(bola)
    let movimentation = setInterval(() => {
        if (isGoingUp) {
            posY -= 1
            bola.style.top = `${posY}px`
            if (posY == 0) {
                isGoingDown = true
                isGoingUp = false
            }
        }
        else if (isGoingDown) {
            posY += 1
            bola.style.top = `${posY}px`
            if (posY == 500 - size) {
                isGoingDown = false
                isGoingUp = true
            }
        } 
        if (isGoingLeft) {
            posX -= 1
            bola.style.left = `${posX}px`
            if (posX == 0) {
                isGoingRight = true
                isGoingLeft = false
            }
        } else if (isGoingRight) {
            posX += 1
            bola.style.left = `${posX}px`
            if (posX == 1000 - size) {
                isGoingRight = false
                isGoingLeft = true
            }
        }
    }, vel)
}

class Bola {
    constructor(cor, size, vel) {
        this.cor = cor
        this.size = size
        this.vel = vel
        createBola(cor, size, vel)
    }
}

//dado o fato de que eu criei funções separada pra cada paramêtro, dá pra criar sua propria bola personalizada
//dá também pra criar um paramêtro static na classe para pausar
for(c = 0;c < 50;c++) {
    let bola = new Bola(defCor(), defSize(), defVel())
}
