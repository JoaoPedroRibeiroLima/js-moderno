const princ = document.getElementById("princ")

for(let i = 1;i < 500;i++) {
    const div = document.createElement("div")
    const api_response = document.createElement("p")
    const personagem_img = document.createElement("img")

    fetch(`https://rickandmortyapi.com/api/character/${i}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        api_response.innerHTML = `name: ${data.name} <br>gender: ${data.gender} <br> id: ${data.id} <br> specie: ${data.species} <br> Status: ${data.status} <br> origin: ${data.origin.name} <br> location: ${data.location.name}`

        personagem_img.src = `${data.image}`
    })

    div.appendChild(api_response)
    div.appendChild(personagem_img)
    princ.appendChild(div)
}
