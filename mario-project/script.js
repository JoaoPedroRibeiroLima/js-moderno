const mario = document.getElementsByClassName('mario')[0]
const pipe = document.getElementsByClassName('pipe')[0]
const cloud = document.getElementsByClassName('cloud')[0]
let onJump = false
let reset = false
let actualScore = ''
let highScore = ''
const actualScoreSpan = document.getElementById('actualscore')
const highScoreSpan = document.getElementById('highscore')

document.addEventListener('keydown', () => {
    // detector de pulos
    if (onJump == false && reset == false) {
        mario.classList.add('jump')
        onJump = true
        setTimeout(() => {
            mario.classList.remove('jump')
            onJump = false
        },800)
    }

    //dector para resetar o game todo
    if (reset) {
        const removeGameOver = document.getElementById('gameover')
        const body = document.getElementsByTagName('body')[0]
        body.removeChild(removeGameOver)
        //reset do mario
        mario.setAttribute('src', './imagens/mario.gif')
        mario.style.width = '130px'
        mario.style.marginLeft = ''
        mario.style.animation = ''
        mario.style.bottom = '0px'
        //reset do cano
        pipe.style.left = ''
        pipe.style.animation = 'pipe-animation 1s infinite linear'

        reset = false

        verifier()
        score()
    }
})

const telaGameOver = () => {
    //criação da div com a tela de game over
    const div = document.createElement('div')
    div.setAttribute('id', 'gameover')
    div.style.position = 'absolute'
    div.style.backgroundColor = '#0009'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.top = '0px'
    div.innerHTML = '<h1>GAME OVER</h1> <br> <p>Press any key to restart</p>'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'

    //inserindo o conteúdo do game over no body
    const body = document.getElementsByTagName("body")[0]
    body.appendChild(div)
    reset = true
}

const verifier = function() {
    const intervalo = setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
        //console.log(pipePosition)
        if (pipePosition <= 110 && pipePosition > 0 && marioPosition <= 100) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
            mario.setAttribute('src', './imagens/game-over.png')
            mario.style.width = '55px'
            mario.style.marginLeft = '50px'
            clearInterval(intervalo)
            telaGameOver()
        }
    }, 10)
}

const score = function() {
    intervalo = setInterval(() => {
        if (reset != true && highScore < 9999) {
            if (actualScore < 10) {
                actualScore = `000${actualScore}`
            }
            else if (actualScore < 100) {
                actualScore = `00${actualScore}`
            }
            else if (actualScore < 1000) {
                actualScore = `0${actualScore}`
            }
            actualScoreSpan.innerHTML = actualScore

            if (actualScore >= highScore) {
                highScore = actualScore
                highScoreSpan.innerHTML = actualScore
            }
            actualScore++
        } else {
            clearInterval(intervalo)
            actualScore = 0
        }

        //easter-egg gigatonico
        if(highScore == 9999) {
            mario.setAttribute('src', './imagens/yoshi.gif')
        }
    }, 100)
}

score()
let iniciarVerifier = verifier()