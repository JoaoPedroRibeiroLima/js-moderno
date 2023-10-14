const caixa1 = document.getElementById('caixa1')
const cursos = [...document.querySelectorAll('.Curso')]

caixa1.addEventListener('click', (event) => {
    console.log('clicou')
    console.log(event.target)
})

cursos.map((elemento) => {
    elemento.addEventListener('click', (event) => {
        event.stopPropagation()
    })
})
