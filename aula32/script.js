let c1 = document.getElementsByClassName('c1')
let c2 = document.getElementsByClassName('c2')

c2=[...c2]

c2.map((element) => {
    element.classList.add('destaque')
})

