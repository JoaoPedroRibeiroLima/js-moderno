import { contatos } from "./bancoContatos.js";

let cont = {
    getTodosCursos: function() {
        return contatos
    },
    getCurso: function(i) {
        return contatos[i]
    },
    addContatos: function(novoContato, destinoDOM) {
        destinoDOM.innerHTML = ''
        contatos.push(novoContato)
        contatos.forEach((element) => {
            const div = document.createElement("div")
            div.classList.add("contato")

            const p_nome = document.createElement("p")
            p_nome.innerHTML = element.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = element.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = element.email

            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)
        })
        console.log(contatos)
    }
}

export default cont