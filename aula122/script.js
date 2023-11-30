const endpoint = "https://cfbcursos.repl.com"

fetch(endpoint)
.then(
    (res) => {
        res.text()
    })
.then(
    (res) => {
        console.log(res) 
    }
    
)