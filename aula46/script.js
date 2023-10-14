const selectedbtn = document.getElementById('btnCursoSelecionado')
const removebtn = document.getElementById('caixaRemoverCurso')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = document.getElementById('caixaCursos')
const addbtnbefore = document.getElementById('btnAdicionarNovoCursoAntes')
const addbtnafter = document.getElementById('btnAdicionarNovoCursoDepois')

//função que cria os elementos selecionaveis com seus radios
const criarCurso = (cursotxt) => {
    // const newRadio = document.createElement('input')
    // newRadio.setAttribute('type', 'radio')
    // newRadio.setAttribute('name', 'cursos')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'curso')
    newDiv.innerText = cursotxt
    // newDiv.appendChild(newRadio)
    newDiv.addEventListener('click', (evt) => {
        try {
            const destaqueAnterior = document.getElementsByClassName('selecionado')
            destaqueAnterior[0].classList.toggle('selecionado')
            newDiv.classList.toggle('selecionado')
        }
        catch(ex) {
            newDiv.classList.toggle('selecionado')
            console.log(ex)  
        }
    })

    return newDiv
}

//função que acha o radio selecionado e retorna o elemento pai do radio selecionado
const acharCursoSelec = () => {
    const curso = document.getElementsByClassName('selecionado')
    return curso[0]
}

//cursos pre-setados
cursos.map((Element) => {
    caixaCursos.appendChild(criarCurso(Element))
})

//adiciona o eventos de qual foi o elemento de curso selecionado ao botão "Curso Selecionado" 
selectedbtn.addEventListener('click', () => {
    try {
        const elemento = acharCursoSelec()
        if(elemento) {
            window.alert(`Curso selecionado: ${elemento.innerText}`)
        }
    } catch(ex) {
        window.alert('Nenhum curso selecionado, por favor selecione um curso')
        console.log(ex)
    }
})

//adiciona o evento de remover um elemento selecionado ao botão "Remover Selecionado"
removebtn.addEventListener('click', () => {
    try {
        const elemento = acharCursoSelec()
        if (elemento) {
            caixaCursos.removeChild(elemento)
        }
    }
    catch(ex) {
        window.alert('Nenhum curso selecionado, por favor selecione um curso')
        console.log(ex)
    }
})

//adiciona o evento de adicionar um elemento ANTES de outro elemento selecionado ao botão "Adicionar Antes"
addbtnbefore.addEventListener('click', () => {
    try {
        const elemento = acharCursoSelec()
        if(elemento) {
            const txtInput = document.getElementById('nomeCurso').value
            if (txtInput) {
                const newCurso = criarCurso(txtInput)
                caixaCursos.insertBefore(newCurso, elemento)
            } else {
                window.alert('Por favor digite o nome do curso')
            }
        }
    }
    catch(ex) {
        window.alert('Nenhum curso selecionado, por favor selecione um curso')
        console.log(ex)
    }
})

//adiciona o evento de adicionar um elemento DEPOIS de outro elemento selecionado ao botão "Adicionar Depois"
addbtnafter.addEventListener('click', () => {
    try {
        const elemento = acharCursoSelec().nextSibling
        if (elemento) {
            const txtInput = document.getElementById('nomeCurso').value
            if (txtInput) {
                const newCurso = criarCurso(txtInput)
                caixaCursos.insertBefore(newCurso, elemento)
            } else {
                window.alert('Por favor digite o nome do curso')                
            }
        }
    }
    catch(ex) {
        window.alert('Nenhum curso selecionado, por favor selecione um curso')
        console.log(ex)
    }
})
