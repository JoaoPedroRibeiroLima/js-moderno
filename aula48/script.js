const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const items = [21, 25, 19, 20, 19, 18, 22]
p_array.innerHTML = `[${items}]`

btnVerificar.addEventListener('click', (evt) => {
    resultado.innerHTML = "Valores não são maiores que 18"
    const testeValidade = items.every((e) => {
        return 18 <= e
    })
    if(testeValidade) {
        resultado.innerHTML = 'OK'
    }
})