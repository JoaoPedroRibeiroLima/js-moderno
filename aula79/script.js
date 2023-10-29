const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

let horaAtivar
let horaPass = false

const data = new Date()

let dia = data.getDate()
dia=dia<10?"0"+dia:dia

let mes = data.getMonth()
mes = mes<10?"0"+mes:mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()

div_data.innerHTML = data_r

setInterval(() => {
    let segundos = new Date().getSeconds()
    segundos = segundos<10 ? `0${segundos}` : segundos

    let minutos = new Date().getMinutes()
    minutos = minutos<10 ? `0${minutos}` : minutos
    
    let horas = new Date().getHours()
    horas = horas<10 ? `0${horas}` : horas

    div_relogio.innerHTML = `${horas}:${minutos}:${segundos}`
    if (horaPass == true) {
        if (horaAtivar * 1000 > 60000) {

        }
    }
}, 1)

btn_ativar.addEventListener('click', () => {
    horaAtivar = tmp_alarme.value
    horaPass = true
})