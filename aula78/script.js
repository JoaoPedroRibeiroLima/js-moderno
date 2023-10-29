const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
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
}, 1)
