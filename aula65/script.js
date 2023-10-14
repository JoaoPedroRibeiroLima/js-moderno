const pessoa = {
    nome:"Bruno",
    canal:"CFB Cursos",
    cursos: {
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const sPessoa = JSON.stringify(pessoa)
const jPessoa = JSON.parse(sPessoa)

console.log(sPessoa)
console.log(typeof sPessoa)
console.log('=-==-=-=-=-=-=-=-=-=-=-=-')
console.log(jPessoa)
console.log(typeof jPessoa)
