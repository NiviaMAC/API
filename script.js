//URL da API
const URL = 'https://catfact.ninja/fact' //onde consta a URL da API. Pego uma API que tem
//um site nela. O /fact é o que tem  o get, isto é, que vai me
//dar uma ação.


//Elementos do HTML

let $fatos_p = document.getElementById("facts")

$btn_get_facts.addEventListener('click', PegaFato())

async function PegaFato() {
    let dados = await(fetch(URL)) //o await espera e o fetch busca na URL um fato
    //os dados vêm como response.
    let fato = await(dados.json())
    console.log(fato)
    $fatos_p.innerText =
}