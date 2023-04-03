
const $contenedor = document.getElementById(`contenedor-eventos`)

const events = eventsAmazing.eventos

let x = events


 let eventPast=[]
 console.log(eventPast=[]);

 for (let  x of events) {
    if (x.date <eventsAmazing.fechaActual){
        (eventPast.push(x))
        console.log(x);
    }
}  

console.log(eventsAmazing.fechaActual);

 let cards = ``

 for(let i=0;i<9;i++){
    cards+=crearCartas(eventPast[i])
}
function crearCartas (x){
    return ` <div class=" cartas  card " style="width: 19rem;">
    <img src= ${x.image}   class=" img-carta card-img-top" alt="feria de comida ">
    <div class=" card-body  d-flex flex-column justify-content-center">
      <h5 class=" h5-card  text-center ">${x.name}  </h5>
      <p  class=" text-white card-text">${x.description} </p>
      <div class="d-flex justify-content-between">
      <p class="text-white "> $ ${x.price}  </p>
      <a href="#" class="botton-card">Details </a>
    </div>
    </div>
  </div>` 
}


$contenedor.innerHTML=cards 