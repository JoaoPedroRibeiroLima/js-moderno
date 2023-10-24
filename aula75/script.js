const numero = document.getElementById('numero')

let promise = new Promise((resolve, reject) => {
    let resultado = false
    setTimeout(() => {
        if (resultado) {
            resolve('Deu tudo certo!')
        }
        else {
            reject('Deu tudo errado!')
        }
    }, 3000)
})

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok") 
})

promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("ok")
    numero.classList.add("erro")
})

numero.innerHTML = 'processando...'
