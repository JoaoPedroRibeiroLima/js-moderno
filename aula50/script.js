const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const items = [16, 12, 10, 17, 15, 13, 11]
let aux = []

p_array.innerHTML = `[${items}]`

btnReduzir.addEventListener('click', (evt) => {
    const total = items.reduce((ant, pro) => {
        return ant + pro
    })
    resultado.innerHTML = total
})