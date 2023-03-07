
  
const rellenarTarjeta=(evento)=>{
    let contenido=
    `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
      <div class="card c_events">
        <img src="${evento.image}" alt="image event">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">
            ${evento.name}
          </h5>
          <p class="card-text">${evento.description}</p>
          <div class="mt-auto fill-space">
            <div class="d-flex align-items-center justify-content-between mx-0">
              <p class="card-text text-white price">Price $:${evento.price}</p>
              <a href="./details.html" class="btn btn-primary id="${evento._id}">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    return contenido;
}
  
const imprimirTajetas=(eventosaImprimir, contenedor)=>{
    let contenido=""
    for (evento of eventosaImprimir) {
      contenido+=rellenarTarjeta(evento)
    }
    contenedor.innerHTML=contenido;
}

  
  
  
  