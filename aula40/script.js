const caixa1 = document.getElementById('caixa1')
const cursos = ["HTML", "CSS", "Javascript", "PHP", "PHP", "React", "MySQL"]

for(c = 0;c < cursos.length; c++) {
    let newElement = document.createElement('div')
    let elemento = cursos[c]
    newElement.innerHTML = elemento
    newElement.setAttribute('class', 'Curso c1')
    newElement.setAttribute('id', `c${c}`)
    caixa1.appendChild(newElement)
}

