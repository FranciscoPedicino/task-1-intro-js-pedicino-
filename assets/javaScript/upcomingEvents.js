
const $contenedor = document.getElementById(`contenedor-eventos`)

const eventos= eventsAmazing.eventos

let evento = eventos

 let futuro=[]

 console.log(futuro=[]);

 for (let  evento of eventos) {
    if (evento.date >eventsAmazing.fechaActual){
        (futuro.push(evento))
        console.log(evento);
    }
}  
console.log(eventsAmazing.fechaActual);

 let cards = ``

 for(let i=0;i<5;i++){
    cards+=crearCartas(futuro[i])
}
function crearCartas (evento){
    return ` <div class=" cartas  card " style="width: 19rem;">
    <img src= ${evento.image}   class=" img-carta card-img-top" alt="feria de comida ">
    <div class=" card-body  d-flex flex-column ">
      <h5 class=" h5-card  text-center ">${evento.name}  </h5>
      <p  class=" text-white card-text"> ${evento.description} </p>
      <div class="d-flex justify-content-between">
      <p class="text-white "> $ ${evento.price}  </p>
      <a href="./details.html?name=${evento.name}" class="botton-card">Details </a>
    </div>
    </div>
  </div>` 
}

$contenedor.innerHTML=cards  
   



let buscador = document.getElementById('contenedor-buscador')
 


const contenedorCategorias=document.getElementById(`contenedor-categorias`)

const categorias=eventos.map(evento=>evento.category)

const  noRepetidas=new Set (categorias)

const listaCategorias=Array.from(noRepetidas)
  

function crearCategorias(categorias,contenedorCategorias){
    let template=``
    for(let categoria of categorias){
        template+=`<div>
        <label class=" text-white justify-content-around" for="festival">${categoria} </label>
        <input type="checkbox" name="categoriaelegida" id="checkbox" value="${categoria}">
        </div>
        `
    }
    contenedorCategorias.innerHTML=template
}
crearCategorias(listaCategorias,contenedorCategorias)

let busqueda = buscador.value.toLowerCase();


buscador.addEventListener('input', () => {
    let busqueda = buscador.value.toLowerCase();
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value);
    let eventosFiltrados = eventos.filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
            && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category));
    })

    let cards = '';
    if (eventosFiltrados.length === 0) {
        cards = '<p>No events found</p>';
    } else {
        for (let evento of eventosFiltrados) {
            cards += crearCartas(evento);
        }
    }
    document.getElementById('contenedor-eventos').innerHTML = cards;
})

contenedorCategorias.addEventListener(`change`, () => {
    let busqueda = buscador.value.toLowerCase();
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value);
    let eventosFiltrados = eventos.filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
            && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category));
    });
    cards = ''
    for (let evento of eventosFiltrados) {
        cards += crearCartas(evento)
    }
    document.getElementById('contenedor-eventos').innerHTML = cards
})
