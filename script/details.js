const container = document.getElementById('details');
const queryString=location.search
const parametros=new URLSearchParams(queryString)
const id=parametros.get("id")
let evento = data.events.find(evento=> evento._id==id)
let contenido=`
  <img src="${evento.image}" alt="image event">
  <div class="card-body body_details">
   <h5 class="card-title"><strong>
     ${evento.name}
      </strong>
    </h5>
   <p class="card-text descripcion">Description: ${evento.description}</p>
   <p class="card-text descripcion">Category: ${evento.category}</p>
   <p class="card-text descripcion">Date: ${evento.date}</p>
   <p class="card-text descripcion">Place: ${evento.place}</p>
   <p class="card-text descripcion">Capacity: ${evento.capacity}</p>`
   
typeof(evento.estimate)=="number"?contenido+=`<p class="card-text descripcion">Estimate: ${evento.estimate}`
:contenido+=`<p class="card-text descripcion">Assitance: ${evento.assistance}`
   
contenido+=`<p class="card-text descripcion">Price: $ ${evento.price} </p>
  </div>`
container.innerHTML=contenido


