const cargarTablas= async()  => {
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
  
  const past=data.events.filter(evento=> evento.date<data.currentDate)
  agregarPorcentajeyGanancia(past,'assistance')
  const upcoming=data.events.filter(evento=> evento.date>data.currentDate)
  agregarPorcentajeyGanancia(upcoming,'estimate')

  const datosFuturo =Object.values(totalesPorCategoria(upcoming,'estimate'));
  const tablaUpcoming = document.getElementById('t_upcoming')
  rellenarFila(tablaUpcoming,datosFuturo)
  
  const datosPasado = Object.values(totalesPorCategoria(past,'assistance'));
  const tablaPast = document.getElementById('t_past')
  rellenarFila(tablaPast,datosPasado)
  
  rellenarTablaEventos(past)

  const flechasOrdenar = document.querySelectorAll(".flechas");
  flechasOrdenar.forEach((elemento) => {
    elemento.addEventListener('click', () => {
      const encabezado = elemento.parentNode.textContent.trim(); 
      const tabla=elemento.parentNode.parentNode.parentNode.parentNode
      let table
      let datos
      if (tabla.id=="past"){
        table=tablaPast
        datos=datosPasado
      }
      else {
        table=tablaUpcoming
        datos=datosFuturo
      }
    ordenarTabla(elemento.className,encabezado,table,datos)
})}); 


} 

const totalesPorCategoria = (eventos, asistanceOrEstimate) => {
   return Object.values(eventos.reduce((totales, event) => {
    let categoria = event.category;
    let capacidad = event.capacity;
    let asistencia = event[asistanceOrEstimate];
    let ganancia = event.ganancia;
    if (!(categoria in totales)) {
      totales[categoria] = {
        categoria: categoria,
        capacidadTotal: capacidad,
        asistenciaTotal: asistencia,
        total: ganancia
      };
    } else {
      totales[categoria].capacidadTotal += capacidad;
      totales[categoria].asistenciaTotal += asistencia;
      totales[categoria].total += ganancia;
    }
    return totales;
  }, {}));
  };

 

const rellenarFila=(tabla,result)=>{ for (let category in result) {
  let contenido=`<tr><td>${result[category].categoria}</td>
  <td>${result[category].total.toLocaleString('es-ES', {style:'currency', currency: 'USD'})}</td>
  <td>${(result[category].asistenciaTotal/result[category].capacidadTotal*100).toFixed(2).replace(".",",")}%
  </td></tr>`
  tabla.innerHTML+=contenido
  }
}

const hallarExtremos = (array, propiedad,esMinimo=false) => array.reduce((acc, curr,index) => {
  if (esMinimo?curr[propiedad] < acc[0][propiedad]:curr[propiedad] > acc[0][propiedad]) {
    return [curr];
  } else if (curr[propiedad] == acc[0][propiedad] && index!=0) {
    acc.push(curr);
  }
  return acc;
}, [array[0]]);


const agregarPorcentajeyGanancia=(array,propiedad)=>(array.forEach(evento => {
  evento.porcentajeAsistencia = (evento[propiedad]/ evento.capacity) 
  evento.ganancia=evento.price*evento[propiedad]
}));


const rellenarTablaEventos=(array)=>{ 
  const eventoMayorCapacidad=hallarExtremos(array,'capacity')  
  const eventoMayorAsistencia=hallarExtremos(array,'porcentajeAsistencia')
  const eventoMenorAsistencia=hallarExtremos(array,'porcentajeAsistencia',true)
  
  const tablaEventos=document.getElementById('t_events')
  
  let mayor = Math.max(eventoMenorAsistencia.length, eventoMayorAsistencia.length, eventoMayorCapacidad.length);  
  
  
  for (let i = 0; i < mayor; i++) {
      
    tablaEventos.innerHTML+=`
    <tr>
    <td>${i < eventoMayorAsistencia.length ? eventoMayorAsistencia[i].name + ': ' + eventoMayorAsistencia[i].porcentajeAsistencia.toLocaleString('es-ES', { style: 'percent', minimumFractionDigits: 2 }) : ''}</td>
    <td>${i < eventoMenorAsistencia.length ? eventoMenorAsistencia[i].name + ': ' + eventoMenorAsistencia[i].porcentajeAsistencia.toLocaleString('es-ES', { style: 'percent', minimumFractionDigits: 2 }) : ''}</td>
    <td>${i < eventoMayorCapacidad.length ? eventoMayorCapacidad[i].name + ': ' + eventoMayorCapacidad[i].capacity : ''}</td>
    </tr>`;
    

  }
}

const ordenarTabla=(clase,encabezado,tabla,datos) =>{
  let ordenAscendente=1
  if (clase=="bi bi-caret-up-fill flechas"){
    ordenAscendente=-1
  }
  
  if (encabezado=="Categories"){
    propiedad='categoria'}
  else if(encabezado=='Revenues'){
    propiedad='total'
  }
  else if (encabezado=="Percentage of attendance")
  {
    propiedad=(data) => data.asistenciaTotal / data.capacidadTotal;
  }
  
  datos.sort((a, b) => {
  const valorA = typeof propiedad == "function" ? propiedad(a) : a[propiedad];
  const valorB = typeof propiedad == "function" ? propiedad(b) : b[propiedad];
  if (valorA < valorB) 
    {return ordenAscendente}
  else if (valorA > valorB) 
    {return -ordenAscendente}
  else
    {return 0}    
  });
  tabla.innerHTML=""
  rellenarFila(tabla,datos)
}

cargarTablas()








