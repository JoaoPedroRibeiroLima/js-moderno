const s1 = Symbol()

const s2 = Symbol()

console.log(s1 == s2)

const s3 = Symbol.for("Betão")

const s4 = Symbol.for("Betão")

console.log(Symbol.keyFor(s3))

console.log(Symbol.keyFor(s4))

console.log(s3 == s4)
