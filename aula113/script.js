//6:52 (último javascript)
const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

q1.accessKey = 'k'
q2.accessKey = 'p'

console.log(q1.accessKey)
console.log(q2.accessKey)

q1.addEventListener("click", () => {
    const q1Info = q1.getBoundingClientRect()
    posx.innerHTML = `posx: ${q1Info.x}`
    posy.innerHTML = `posy: ${q1Info.y}`
    largura.innerHTML = `largura: ${q1Info.width}`
    altura.innerHTML = `altura: ${q1Info.height}`
})

q2.addEventListener("click", () => {
    const q2Info = q2.getBoundingClientRect()
    posx.innerHTML = `posx: ${q2Info.x}`
    posy.innerHTML = `posy: ${q2Info.y}`
    largura.innerHTML = `largura: ${q2Info.width}`
    altura.innerHTML = `altura: ${q2Info.height}`
})