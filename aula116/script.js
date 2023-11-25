const lati = document.getElementById("lati")
const long = document.getElementById("long")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pegarLocalizacao)
} else {
    console.log("Deu ruim!")
}

function pegarLocalizacao(posicao) {
    lati.innerHTML = `latitude: ${posicao.coords.latitude}`
    long.innerHTML = `longitude: ${posicao.coords.longitude}`
    console.log(posicao)
}
