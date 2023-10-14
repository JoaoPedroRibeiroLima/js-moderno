const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const items = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML = `[${items}]`

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = "Valor não encontrado"
    items.find((element, index) => {
        if(element == txt_pesquisar.value){
            resultado.innerHTML = `Valor encontrado ${element} na posição ${index}`
            return element
        }
    })
})