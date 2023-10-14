const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque')
        el.style.display = 'none'
    })
})

// let c1 = document.getElementsByClassName('c1')
// let c2 = document.getElementsByClassName('c2')

// c2=[...c2]

// c2.map((element) => {
//     element.classList.add('destaque')
// })