const divsHTMLCollection = document.querySelectorAll('.Curso')
const divsArray = [...divsHTMLCollection]

const btnTransferir = document.getElementById('btn-transferir')
const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')

// map que espalha o evento de clique, para adicionar a classe "destaque" na div clicada
divsArray.map((elemento) => {
    elemento.addEventListener('click', (event) => {
        let el = event.target
        el.classList.toggle('destaque')
    })
})

//evento de botão para passar transferir a div pra esquerda ou direita
btnTransferir.addEventListener('click', (event) => {
    const divClicadasHTMLCollection = document.querySelectorAll('.destaque')
    const divClicadasArray = [...divClicadasHTMLCollection]

    //ele não tinha ensinado sobre o ":not()"
    const divDesclicada = [...document.querySelectorAll('.Curso:not(.destaque)')]

    //map para passar os elementos com a classe "destaque" para esquerda
    divClicadasArray.map((elemento) => {
        //ele não tinha ensinado o appendChild
        caixa2.appendChild(elemento)
    })

    //map para passar os elementos com SEM a classe "destaque" para direita
    divDesclicada.map((elemento) => {
        caixa1.appendChild(elemento)
    })
})