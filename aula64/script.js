const f_tipoMilitar = document.getElementById('f_tipoMilitar')
const f_tipoNormal = document.getElementById('f_tipoNormal')
const f_blindagem = document.getElementById('f_blindagem')
const f_municao = document.getElementById('f_munição')
const f_nome = document.getElementById('f_nome')
const f_portas = document.getElementById('f_portas')
const carros = document.getElementById('carros')
const btn_addCarro = document.getElementById('btn_addCarro')

let a_carro = []

f_tipoMilitar.addEventListener('click', () => {
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', () => {
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
    f_blindagem.value = 0
    f_municao.value = 0
})

btn_addCarro.addEventListener('click', () => {
    if (f_tipoNormal.checked) {
        const novoCarro = new Carro(f_nome.value, f_portas.value)
        a_carro.push(novoCarro)
    } else {
        const novoCarro = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carro.push(novoCarro)
    }

    gerenciarExibicaoCarros()
})

//cria as divs que serão usadas na div pai carro para exibição
const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carro.forEach((c) => {
        const div = document.createElement('div')
        const removeBtn = document.createElement('button')
        removeBtn.innerHTML = 'Remover'
        //evento que remove a div selecionada
        removeBtn.addEventListener('click', (evt) => {
            const divRemove = evt.target.parentNode
            divRemove.remove()
            
            //parte que remove do array (não só nas div's)
            c.delete = true
            a_carro = a_carro.filter((el) => {
                if (el.delete == false) {
                    return el
                }
            })
        })
        
        div.classList.add('carro')
        div.innerHTML = `Nome: ${c.nome} <br> Portas: ${c.portas} <br> Blindagem: ${c.blindagem} <br> Munição ${c.municao}`
        div.appendChild(removeBtn)
        carros.appendChild(div)
    })
}

class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
        this.delete = false
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}
