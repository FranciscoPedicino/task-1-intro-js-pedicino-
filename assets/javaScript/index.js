const $contenedor = document.getElementById(`contenedor-eventos`)

const events= eventsAmazing.eventos

let x= events

let cards = ` `

for ( x of events) {
      cards += crearCartas(x)
}

function crearCartas (x){
    return `<div class=" cartas  card " style="width: 19rem;">
    <img src="${x.image}" class=" img-carta card-img-top " alt="feria de comida">
    <div class=" card-body  d-flex flex-column justify-content-center">
    <h5 class=" h5-card  text-center "> ${x.name} </h5>
    <p  class=" text-white card-text">  ${x.description}  </p>
    <div class=" price-botton d-flex justify-content-between ">
    <p class="text-white ">  $ ${x.price} </p>
    <a href="#" class="botton-card">Details </a>
    </div>
    </div>
    </div>` 
}


$contenedor.innerHTML=cards
//tener l contenedor 
//tener los datos
//tener el div
//agregamos el article a la vista





/* {/* <div class=" cartas  card " style="width: 19rem;">
    <img src="./assets/images/Feria-de-comidas7.jpg" class=" img-carta card-img-top " alt="feria de comida">
    <div class=" card-body  d-flex flex-column justify-content-center ">
    <h5 class=" h5-card  text-center ">Festival of the collectivities</h5>
    <p  class=" text-white card-text">Enjoy your favorite dishes from different countries in a unique event for the whole family</p>
    <div class=" price-botton d-flex justify-content-between ">
    <p class="text-white "> price: 5</p>
    <a href="#" class="botton-card">Details </a>
    </div>
    </div>
  </div> } */