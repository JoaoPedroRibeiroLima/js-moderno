const addbtn = document.getElementById('addbtn')
const list = document.getElementById('ilista')

addbtn.addEventListener('click',() => {
    let item = document.getElementById('iitem').value
    
    list.innerHTML += `<li>${item}</li>`

    let itemList = [...document.querySelectorAll('li')]

    itemList.map((Elem) => {
        Elem.addEventListener('click', (event) => {
            let el = event.target
            el.style.display = 'none'
        })
    })
})
