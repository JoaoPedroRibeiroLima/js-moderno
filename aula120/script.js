const f_nome = document.getElementById("f_nome")
const f_nota = document.getElementById("f_nota")
const f_msg = document.getElementById("f_msg")

// document.getElementById("btn_validar").addEventListener("click", () => {
//     let msg
//     if(!f_nota.checkValidity()) {
//         msg = f_nota.validationMessage
//     }

//     f_msg.innerHTML = msg
//     evt.preventDefault()
// })

document.getElementById("btn_validar").addEventListener("click", () => {
    const validacaoSituacao = f_nota.validity
    if(validacaoSituacao.valueMissing) {
        f_nota.setCustomValidity("Tá faltando a nota, ô animal")
    }
    f_nota.reportValidity()
})
