export function crearCartas(evento){ 
    return `<div class=" cartas  card " style="width: 19rem;">
    <img src="${evento.image}" class=" img-carta card-img-top " alt="feria de comida">
    <div class=" card-body  d-flex flex-column ">
    <h5 class=" h5-card  text-center "> ${evento.name} </h5>
    <p  class=" text-white card-text">  ${evento.description}  </p>
    <div class=" price-botton d-flex justify-content-between ">
    <p class="text-white ">  $ ${evento.price} </p>
    <a href="./assets/pages/details.html?name=${evento.name}" class="botton-card">Details </a>
    </div>
    </div>
    </div>` 
}
export function crearCartasUyP(evento){
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
export function crearCategorias(categorias,contenedorCategorias){
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
export function generarTabla() {
    const eventos= eventsAmazing.eventos
let evento = eventos 
    const primeraTabla = document.getElementById("primer-tabla")

    let tabla1 = ""
    tabla1 += `<table>
    <thead>
        <tr>
        <th>Events with the highest percentage of attendants</th>
        <th>Events with the lowest percentage of attendants</th>
        <th>Event with the larger capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>${eventsAmazing.eventos[9].assistance}</td>
        <td>${eventsAmazing.eventos[12].assistance}</td>
        <td> ${eventsAmazing.eventos[9].capacity}  </td>
        </tr>
      </tbody>
    </table>`
  
    primeraTabla.innerHTML = tabla1
}
export function generarTabla2() {
    const eventos= eventsAmazing.eventos
let evento = eventos 

    const segundaTabla = document.getElementById(`tabla2`)
    const pushearEvento = []
  
        for (let evento of eventos) {
            if (evento.date > eventsAmazing.fechaActual) {
                pushearEvento.push(evento)
      }
    }
  
    let eventosFuturos = [...new Set(pushearEvento)]
    
    let tabla2 =``
    tabla2 += `<table>
      <thead>
        <tr>
        <th> Categories </th>
        <th>Revenues </th>
        <th> Percentage off attendamce </th>
        </tr>
    </thead>
    <tbody>`
    for (let evento of eventosFuturos) {
        tabla2 += `
        <tr>
            <td> ${evento.category} </td>
          <td>${evento.estimate * evento.price} </td>
          <td>${((evento.estimate/evento.capacity) * 100).toFixed(2)}%</td>
        </tr>`
    }
  
    tabla2 += `
      </tbody>
    </table>`
  
    segundaTabla.innerHTML = tabla2
}
export function generarTabla3(){
    const eventos= eventsAmazing.eventos
let evento = eventos 
    const terceraTabla=document.getElementById(`tabla3`)
    let pushearEvento=[]

    for ( let evento of eventos){
        if( evento.date<eventsAmazing.fechaActual){
            pushearEvento.push(evento)
        }
    }
    
   let eventosPasados=[...new Set(pushearEvento)]

   let tabla3=``
   tabla3+=`<table class="mb-5" >
   <thead>
     <tr>
       <th> Categories  </th>
       <th>Revenues </th>
       <th> Percentage off attendamce  </th>
     </tr>
   </thead>
   <tbody> `
   for (let evento of eventosPasados){
    tabla3+=`<tr >
    <td> ${evento.category}</td>
    <td>${evento.assistance * evento.price}</td>
    <td>${((evento.assistance / evento.capacity) * 100).toFixed(2)}%</td>
  </tr>`
}
  
  tabla3+=` 
  </tbody>
  </table>`
  
  terceraTabla.innerHTML= tabla3
  
}




