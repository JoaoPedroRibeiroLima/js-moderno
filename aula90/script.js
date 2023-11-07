const objetos = document.getElementById('objetos')

let computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb",
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb",
    },
    {
        cpu: "i9",
        ram: "16gb",
        hd: "1tb",
    },
]

const obj = Object.assign({}, computadores)

console.log(obj)

computadores[0].placaDeVídeo = 'RTX'

computadores.forEach((c) => {
    const div = document.createElement("div")
    div.innerHTML = `CPU : ${c.cpu} <br> RAM : ${c.ram} <br> HD : ${c.hd}`
    div.classList.add("computador")
    objetos.appendChild(div)
})

console.log(computadores)