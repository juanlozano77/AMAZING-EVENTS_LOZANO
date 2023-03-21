const container = document.getElementById('details');
const queryString=location.search
const parametros=new URLSearchParams(queryString)
const id=parametros.get("id")

const cargarDescripcion= async()  => { 
  const ruta = ['https://mindhub-xj03.onrender.com/api/amazing', '../assets/amazing.json'];
  let encontrado = false;
  let i = 0
  let data
  while (!encontrado && i < ruta.length) {
    try {
      const response = await fetch(ruta[i])
      data = await response.json()
      encontrado = true
      }   
    catch (error) {
      console.log('Error en ruta', ruta[i], error);
    i+=1
    }
  }
  if (!encontrado) {
    console.log('Error al intertar cargarse los datos')
    return
  }
  let evento = data.events.find(evento=> evento._id==id)
  let contenido=`
  <img src="${evento.image}" alt="image event">
  <div class="card-body body_details">
  <h5 class="card-title"><strong>
  ${evento.name}
    </strong>
  </h5>
  <h6 class="card-subtitle mb-2 text-muted">${evento.description}</h6>
  <p class="card-text descripcion"><i class="bi bi-calendar-check"></i> <strong>Date:</strong>: ${evento.date}</p>
  <p class="card-text descripcion"><i class="bi bi-geo-alt-fill"></i> <strong>Place:</strong> ${evento.place}</p>
  <p class="card-text descripcion"><i class="bi bi-coin"></i> <strong>Price:</strong> $ ${evento.price} </p>
  </div>`

container.innerHTML=contenido

}

cargarDescripcion();




