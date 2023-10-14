const res = document.getElementsByClassName('res')[0]
const addbtn = document.getElementById("btn_add")
let pessoas = []

class Pessoa{
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }
    setNome(nome) {
        return this.nome = nome
    }
    setIdade(idade) {
        return this.idade = idade
    }

}

addbtn.addEventListener('click', () => {
    const nometxt = document.getElementById('f_nome')
    const idadetxt = document.getElementById('f_idade')
    const novaPessoa = new Pessoa(nometxt.value, idadetxt.value)
    pessoas.push(novaPessoa)
    nometxt.value = ''
    idadetxt.value = ''
    nometxt.focus()

    res.innerHTML = ''
    pessoas.map((p) => {
        const novaDiv = document.createElement('div')
        novaDiv.innerHTML = `Nome: ${p.nome} <br> Idade: ${p.idade}`
        novaDiv.setAttribute('class', 'pessoa')
        res.appendChild(novaDiv)
    })
})
