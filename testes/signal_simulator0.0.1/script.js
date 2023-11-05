const binari_data = document.getElementById("binari_data")
const request = document.getElementById("request")
const painel = document.getElementById("painel")
let lock = false

const zeroOrOne = () => {
    const n = Math.floor(Math.random() * 10)
    return n
}

let c = 0
setInterval(() => {
   
    for(let i = 0; i < 35;i++) {
        binari_data.innerHTML += zeroOrOne()
        if (i == 4 || i == 9 || i == 14 || i == 19 || i == 24 || i == 29) {
            binari_data.innerHTML += '   '
        }
    }
    binari_data.innerHTML += '</br>'
    c += 1
    if(c == 6) {
        binari_data.innerHTML = ''
        c = 0
    }
}, 1500)

request.addEventListener("click", () => {
    if (lock == false) {
        lock = true
        let dowload = 0
        let interv = setInterval(() => {
            let more = Math.floor(Math.random() * 20)
            if (dowload + more >= 100) {
                request.innerHTML = `download... 100%`
                createObj()
                setTimeout(() => {
                    request.innerHTML = 'Request Satellite Data'
                    lock = false
                }, 2000)
                clearInterval(interv)
            } else {
                dowload += more
                request.innerHTML = `download... ${dowload}%`
            }
        }, 1000)
    }
})

const createObj = () => {
    const obj = document.createElement('div')
    obj.style.width = `5px`
    obj.style.height = `5px`
    obj.style.borderRadius = '50%'
    obj.style.background = '#fff'
    obj.style.position = 'absolute'
    const posX = Math.floor(Math.random() * 600)
    const posY = Math.floor(Math.random() * 300)
    obj.style.left = `${posX}px`
    obj.style.left = `${posY}px`
    painel.innerHTML += obj
}