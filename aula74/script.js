const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.getElementById('ton')
const tlimpar = document.getElementById('tlimpar')
const tigual = document.getElementById('tigual')
const tcpy = document.getElementById('tcpy')
const calc = document.getElementById('calc')
const calc_aba = document.getElementById('calc_aba')
const img_aba_calc = document.getElementById('img_calc_img')

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
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener('click', () => {
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')) {
        img_aba_calc.setAttribute('src', 'imagens/arrow_back.svg')
    } else {
        img_aba_calc.setAttribute('src', 'imagens/arrow_forward.svg')
    }
})
