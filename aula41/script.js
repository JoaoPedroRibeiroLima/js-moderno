const caixa1 = document.getElementById('caixa1')
const cursos = ["HTML", "CSS", "Javascript", "PHP", "PHP", "React", "MySQL"]

for(c = 0;c < cursos.length; c++) {
    //parte onde é criada um novo elemento
    let newElement = document.createElement('div')
    let curso = cursos[c]
    newElement.innerHTML = curso
    newElement.setAttribute('class', 'Curso c1')
    newElement.setAttribute('id', `c${c}`)

    //parte onde é adicionado uma lixeira a cada elemento
    const trash_btn = document.createElement('img')
    trash_btn.setAttribute('src', 'imagens/trash.png')
    trash_btn.setAttribute('class', 'trash_icon')
    trash_btn.addEventListener('click', (event) => {
        caixa1.removeChild(event.target.parentElement)
    })

    newElement.appendChild(trash_btn)

    caixa1.appendChild(newElement)
}

const trashes = [...document.querySelectorAll('.trash_icon')]

// trashes.map((elemento) => {
//     elemento.addEventListener('click', () => {
//         const daddy = elemento.parentElement
//         caixa1.removeChild(daddy)
//     })
// })