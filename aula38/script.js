const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.Curso')]

console.log(caixa1.parentElement)
console.log(caixa1.lastElementChild)
console.log(caixa1.firstElementChild)

console.log('=========================================================')

console.log(caixa1.hasChildNodes())
if (btn_c[0].children.length > 0){
    console.log('Ele possui elementos filhos')
} else {
    console.log('Ele não possui elementos filhos')
}

console.log('=========================================================')

caixa1.children[2].innerHTML = 'TROCA'