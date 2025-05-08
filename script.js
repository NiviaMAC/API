//URL da API
const URL_FACTS = 'https://catfact.ninja/fact' //onde consta a URL da API. Pego uma API que tem
//um site nela. O /fact é o que tem  o get, isto é, que vai me dar uma ação.
const URL_PHOTOS = 'https://api.thecatapi.com/v1/images/search'

//Elementos do HTML

let $fatos_p = document.getElementById("facts")
let $btn_get_facts = document.getElementById('btn_get_facts')
let $foto = document.getElementById('photo')


$btn_get_facts.addEventListener('click', async() => {
    
    //Requisição dos fatos
    let fact_response = await(fetch(URL_FACTS))
    let fact_object = await(fact_response.json())

    //Requisição das fotos
    let photo_response = await(fetch(URL_PHOTOS))
    let photo_object = await(photo_response.json())

    console.log(photo_response)
    console.log(photo_object)
    console.log(photo_object[0].url)
    console.log(photo_object[0].width)
    console.log(photo_object[0].height)
    $fatos_p.innerText - fact_object.fact.trim()//.fact é o texto dentro do objeto e o .trim trata do espaçamento e ordem dos elementos.
    $foto.src = photo_object[0].url//o $ é uma forma de organização com o objetivo de identificar que estou chamando lá do HTML.
    //No objeto photo, o  índice é zero e vou buscar - no único  elemento que  há no  objeto, a url. Caso eu não dê esses detalhes,
    //lá no aplicativo do  inspecionar, dará  erro.
})