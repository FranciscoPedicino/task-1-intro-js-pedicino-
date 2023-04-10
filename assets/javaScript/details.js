const contenedor=document.getElementById("contenedor")
const eventos= eventsAmazing.eventos
let evento= eventos


console.log([document]);
let details=location.search
let params = new URLSearchParams(details)
console.log(new URLSearchParams);
 let idDetails=params.get("name")
console.log(idDetails);


let eventoEncontrado=eventos.filter(evento=>evento.name==idDetails)
console.log(eventoEncontrado);

let cards=""
for(evento of eventoEncontrado){
    cards+=agregarEdetailas(evento)
}

function agregarEdetailas(evento) {
    return `<div class=" cartas  card " style="width: 22rem;">
    <img src="${evento.image}" class=" img-carta card-img-top " alt="feria de comida ">
    <div class=" card-body  d-flex flex-column justify-content-center">
    <h5 class=" h5-card  text-center "> ${evento.name} </h5>
    <p  class=" text-white card-text">  ${evento.description}  </p>
    <div class=" price-botton d-flex justify-content-between ">
    <p class="text-white ">  $ ${evento.price} </p>
    <a href="#" class="botton-card">Details </a>
    </div>
    </div>
    </div>`

}
agregarEdetailas(eventoEncontrado)

contenedor.innerHTML=cards

