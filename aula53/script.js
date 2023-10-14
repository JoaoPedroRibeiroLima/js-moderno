const btnSoma = document.getElementById('btn_soma')
const btnSubtracao = document.getElementById('btn_subtracao')
const btnMultiplicacao = document.getElementById('btn_multiplicacao')
const btnDivisao = document.getElementById('btn_divisao')
const res = document.getElementById('res')

const funcoes = [
    //soma
    () => {
        const n1 = document.getElementById('valor1').value
        const n2 = document.getElementById('valor2').value
        const prod = Number(n1) + Number(n2)
        res.value = prod
    },
    //subtracao
    () => {
        const n1 = document.getElementById('valor1').value
        const n2 = document.getElementById('valor2').value
        const prod = Number(n1) - Number(n2)
        res.value = prod
    },
    //multiplicacao
    () => {
        const n1 = document.getElementById('valor1').value
        const n2 = document.getElementById('valor2').value
        const prod = Number(n1) * Number(n2)
        res.value = prod
    },
    //divisao
    () => {
        const n1 = document.getElementById('valor1').value
        const n2 = document.getElementById('valor2').value
        const prod = Number(n1) / Number(n2)
        res.value = prod
    },
]

btnSoma.addEventListener('click', funcoes[0])
btnSubtracao.addEventListener('click', funcoes[1])
btnMultiplicacao.addEventListener('click', funcoes[2])
btnDivisao.addEventListener('click', funcoes[3])