let notas = []
const addBtn = document.getElementById("addBtn")
const tarefas = document.getElementById("tarefas")

class GeradorNota {
    constructor(txt) {
        this.txt = txt
        this.marcadoDelete = false
        this.marcadoFeito = false
    }
}

const displayTela = () => {
    tarefas.innerHTML = ''
    for(let c = 0;c < notas.length;c++) {
        const div = document.createElement('div')
        div.classList.add('task')
        div.innerHTML = notas[c].txt
        div.addEventListener('click', () => {
            if (notas[c].marcadoFeito == true) {
                notas[c].marcadoFeito = false
            } else {
                notas[c].marcadoFeito = true
            }
            
        })
        if (notas[c].marcadoFeito == true) {
            div.classList.add('feito')
        }
        tarefas.appendChild(div)
    }
}

addBtn.addEventListener('click', () => {
    const txtInput = document.getElementById('task').value
    notas.push(new GeradorNota(txtInput))
})

const teste = document.getElementById('teste')
teste.addEventListener('click', () => {
    displayTela()
    console.log(notas)
})
