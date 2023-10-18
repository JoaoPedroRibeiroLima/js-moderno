const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.getElementById('ton')
const tlimpar = document.getElementById('tlimpar')

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }
    })
})

tlimpar.addEventListener('click', (evt) => {
    display.innerHTML = "0"
    sinal = false
})
