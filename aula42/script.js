const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maior = idades.filter((elemento) => {
    if (elemento >= 18) {
        return elemento
    }
})

const menor = idades.filter((elemento) => {
    if (elemento < 18) {
        return elemento
    }
})

console.log(idades)
console.log(maior)
console.log(menor)