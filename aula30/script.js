const div1 = document.getElementById('c1')
const div2 = document.getElementById('c2')
const div3 = document.getElementById('c3')
const div4 = document.getElementById('c4')
const div5 = document.getElementById('c5')
const div6 = document.getElementById('c6')

const arrayElements = [div1, div2, div3, div4, div5, div6]

for(d of arrayElements) {
    d.innerHTML = 'CFB Cursos'
}