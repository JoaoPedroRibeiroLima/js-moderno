const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click', () => {
    promessa()
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok") 
    })
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("ok")
        numero.classList.add("erro")
    })
})

const promessa = () => {
    numero.innerHTML = 'processando...'
    let p = new Promise((resolve, reject) => {
        let resultado = true
        setTimeout(() => {
            if (resultado) {
                resolve('Deu tudo certo!')
            }
            else {
                reject('Deu tudo errado!')
            }
        }, 3000)
    })
    return p
}

numero.innerHTML = 'esperando'
