import c from "./contatos.js"

const btn_gravar = document.getElementById("btn_gravar")
const listaContatos = document.getElementById("listaContatos")

btn_gravar.addEventListener("click", () => {
    const novoContato = {
        nome : document.getElementById("f_nome").value,
        telefone : document.getElementById("f_telefone").value,
        email : document.getElementById("f_email").value
    }

    c.addContatos(novoContato, listaContatos)
})
