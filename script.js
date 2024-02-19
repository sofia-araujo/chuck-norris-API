function gerarCategorias(categorias){
 const select = document.querySelector("#select");
 categorias.map((categoria)=>{
     const option = document.createElement("option");
     option.innerHTML = `${categoria}`
     select.appendChild(option)
 })
}
function criarPiada(piada){
const resultado = document.querySelector("#joke")
resultado.innerHTML = piada.value
}
document.addEventListener('DOMContentLoaded', () =>{
    const url = 'https://api.chucknorris.io/jokes/categories';
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Erro ao receber os dados")
        }
        return response.json()
    })
    .then((data) =>{
        gerarCategorias(data)
    })
    .catch((err) => console.log(err))
});
const btn = document.querySelector('#btn')
btn.addEventListener('click', ()=>{
    const select = document.querySelector("#select").value;
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Erro ao receber os dados")
        }
        return response.json()
    })
    .then((data) =>{
        criarPiada(data)
    })
    .catch((err) => console.log(err))
})

