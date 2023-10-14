const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const items = [16, 12, 10, 17, 15, 13, 11]
p_array.innerHTML = `[${items}]`

btnVerificar.addEventListener('click', (evt) => {
    resultado.innerHTML = "Valores não são maiores que 18"
    const testeValidade = items.some((e) => {
        return 18 <= e
    })
    if(testeValidade) {
        resultado.innerHTML = 'OK'
    }
})