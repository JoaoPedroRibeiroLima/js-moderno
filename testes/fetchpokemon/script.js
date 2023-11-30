const btn_buscar = document.getElementById("btn_buscar")
const img = document.getElementById("pokemon_sprite")
const f_pokemon = document.getElementById("f_pokemon")
const pokemon_name = document.getElementById("pokemon_name")
const pokemon_id = document.getElementById("pokemon_id")
const pokemon_type1 = document.getElementById("pokemon_type1")
const pokemon_type2 = document.getElementById("pokemon_type2")

btn_buscar.addEventListener("click", () => {
    const pokemon = f_pokemon.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        img.src = `${data.sprites.front_default}`
        pokemon_name.innerHTML = `nome: ${data.name}`
        pokemon_id.innerHTML = `id: ${data.id}`
        pokemon_type1.innerHTML = data.types[0].type.name
        if(data.types[1] != undefined){
            pokemon_type2.innerHTML = data.types[1].type.name
        } else {
            pokemon_type2.innerHTML = ""
        }
    })
})
