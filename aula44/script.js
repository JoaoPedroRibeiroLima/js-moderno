const selectedbtn = document.getElementById('btnCursoSelecionado')
const removebtn = document.getElementById('caixaRemoverCurso')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = document.getElementById('caixaCursos')

//cria os elementos selecionaveis com seus radios
cursos.map((Element) => {
    const newRadio = document.createElement('input')
    newRadio.setAttribute('type', 'radio')
    newRadio.setAttribute('name', 'cursos')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'curso')
    newDiv.innerText = Element
    newDiv.appendChild(newRadio)

    caixaCursos.appendChild(newDiv)
})

//adiciona eventos ao "botão selecionado" de click para os elementos
selectedbtn.addEventListener('click', () => {
    const allCursos = [...document.getElementsByName('cursos')]
    //varredura de radios para analisar se foi selecionado
    allCursos.filter((Element) => {
        if (Element.checked) {
            window.alert(`Curso selecionado: ${Element.parentElement.innerText}`)
        }
    })
})

removebtn.addEventListener('click', () => {
    const allCursos = [...document.getElementsByName('cursos')]
    allCursos.filter((Element, index) => {
        if (Element.checked) {
            caixaCursos.removeChild(caixaCursos.children[index])
        }
    })
})