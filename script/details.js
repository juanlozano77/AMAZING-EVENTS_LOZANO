const container = document.getElementById('details');
const queryString=location.search
const parametros=new URLSearchParams(queryString)
const id=parametros.get("id")

const retornarDatos = async () => {
  const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
  const data = await response.json();
  return data;
}

const cargarDescripcion= async()  => {
  try {
      const data = await retornarDatos();
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
  
  } catch (error) {
      console.log(error);
      
  }
}

cargarDescripcion();




