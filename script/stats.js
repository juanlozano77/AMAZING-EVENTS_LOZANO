let data
let past
let upcoming  
let datosPasado
let datosFuturo
let tablaPast
let tablaUpcoming
const cargarTablas= async()  => {
  const ruta = ['https://mindhub-xj03.onrender.com/api/amazing', '../assets/amazing.json'];
  let encontrado = false;
  let i = 0
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
  
  past=data.events.filter(evento=> evento.date<data.currentDate)
  agregarPorcentajeyGanancia(past,'assistance')
  upcoming=data.events.filter(evento=> evento.date>data.currentDate)
  agregarPorcentajeyGanancia(upcoming,'estimate')

  datosFuturo =Object.values(totalesPorCategoria(upcoming,'estimate'));
  tablaUpcoming = document.getElementById('t_upcoming')
  rellenarFila(tablaUpcoming,datosFuturo)
  
  datosPasado = Object.values(totalesPorCategoria(past,'assistance'));
  tablaPast = document.getElementById('t_past')
  rellenarFila(tablaPast,datosPasado)
  
  rellenarTablaEventos(past)
 
} 

const totalesPorCategoria = (eventos, asistanceOrEstimate) => {
   return eventos.reduce((totales, event) => {
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
  }, {});
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
    const { name: mayorAsistenciaName, porcentajeAsistencia: mayorAsistenciaPorcentaje } = eventoMayorAsistencia[i] || {};
    const { name: menorAsistenciaName, porcentajeAsistencia: menorAsistenciaPorcentaje } = eventoMenorAsistencia[i] || {};
    const { name: mayorCapacidadName, capacity: mayorCapacidadValue } = eventoMayorCapacidad[i] || {};
  
    const mayorAsistencia = mayorAsistenciaName ? `${mayorAsistenciaName}: ${mayorAsistenciaPorcentaje.toLocaleString('es-ES', {style: 'percent', minimumFractionDigits: 2})}` : '';
    const menorAsistencia = menorAsistenciaName ? `${menorAsistenciaName}: ${menorAsistenciaPorcentaje.toLocaleString('es-ES', {style: 'percent', minimumFractionDigits: 2})}` : '';
    const mayorCapacidad = mayorCapacidadName ? `${mayorCapacidadName}: ${mayorCapacidadValue}` : '';
  
    tablaEventos.innerHTML+=`<tr><td>${mayorAsistencia}</td><td>${menorAsistencia}</td><td>${mayorCapacidad}</td></tr>`
  }
}

cargarTablas()

const ascButton = document.querySelectorAll(".flechas");
ascButton.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    console.log(elemento.className) 
    const categoria = elemento.parentNode.textContent.trim(); 
    const tabla=elemento.parentNode.parentNode.parentNode.parentNode
    console.log(categoria);
    console.log(tabla.id);
    ordenarTabla(elemento.className,categoria,tabla.id)
})}); 


const ordenarTabla=(clase,categoria,tabla) =>{
  let menorAMayor=1
  if (clase=="bi bi-caret-up-fill flechas"){
    menorAMayor=-1
  }
  if (tabla=="past"){
    tabla=tablaPast
    datos=datosPasado
  }
  else {
    tabla=tablaUpcoming
    datos=datosFuturo
  }
  if (categoria=="Categories"){
    propiedad='categoria'}
  else if(categoria=='Revenues'){
    propiedad='total'
  }
  else if (categoria=="Percentage of attendance")
  {
    propiedad=(data) => data.asistenciaTotal / data.capacidadTotal;
  }

   console.log(menorAMayor)
   console.log(propiedad)
   console.log(tabla)
  
    datos.sort((a, b) => {
      const valorA = typeof propiedad == "function" ? propiedad(a) : a[propiedad];
      const valorB = typeof propiedad == "function" ? propiedad(b) : b[propiedad];
      if (valorA < valorB) return menorAMayor;
      if (valorA > valorB) return -menorAMayor;
      return 0;    
    });
  tabla.innerHTML=""
  rellenarFila(tabla,datos)
}










