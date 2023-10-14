const selectedbtn = document.getElementById('btnCursoSelecionado')
const removebtn = document.getElementById('caixaRemoverCurso')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const caixaCursos = document.getElementById('caixaCursos')
const addbtnbefore = document.getElementById('btnAdicionarNovoCursoAntes')
const addbtnafter = document.getElementById('btnAdicionarNovoCursoDepois')

//função que cria os elementos selecionaveis com seus radios
const criarCurso = (cursotxt) => {
    const newRadio = document.createElement('input')
    newRadio.setAttribute('type', 'radio')
    newRadio.setAttribute('name', 'cursos')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'curso')
    newDiv.innerText = cursotxt
    newDiv.appendChild(newRadio)

    return newDiv
}

//função que acha o radio selecionado e retorna o elemento pai do radio selecionado
const acharRadioSelec = () => {
    const allCursos = [...document.getElementsByName('cursos')]
    const cursoSelecionado = allCursos.filter((Element) => {
        if (Element.checked) {
            return Element
        }
    })
    return cursoSelecionado[0].parentElement
}

//cursos pre-setados
cursos.map((Element) => {
    caixaCursos.appendChild(criarCurso(Element))
})

//adiciona o eventos de qual foi o elemento de curso selecionado ao botão "Curso Selecionado" 
selectedbtn.addEventListener('click', () => {
    try {
        const elemento = acharRadioSelec()
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
        const elemento = acharRadioSelec()
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
        const elemento = acharRadioSelec()
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
        const elemento = acharRadioSelec().nextSibling
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
