const retornarDatos = async () => {
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
    const data = await response.json();
    return data;
  }
  
  const cargarDescripcion= async()  => {
    let eventoMayorCapacidad
    try {
        const data = await retornarDatos();
      
        let MayorCapacidad=0
        data.events.forEach(evento => {
            let asistencia_o_estimado=""
            asistencia_o_estimado=typeof(evento.estimate)=="number"?"estimate":"assistance"
            evento.porcentajeAsistencia = (evento[asistencia_o_estimado] / evento.capacity) 
            evento.ganancia=evento.price*evento[asistencia_o_estimado]
            if (evento.capacity>MayorCapacidad){
                eventoMayorCapacidad=evento
                MayorCapacidad=evento.capacity

            }
          
        });
    const upcoming=data.events.filter(evento=> evento.date>data.currentDate)
    console.log(upcoming)
    const past=data.events.filter(evento=> evento.date<data.currentDate)
    let result = totalesPorCategoria(upcoming);
    const tablaUpcoming = document.getElementById('t_upcoming')
    rellenarFila(tablaUpcoming,result)
    result = totalesPorCategoria(past);
    const tablaPast = document.getElementById('t_past')
    result=totalesPorCategoria(past);
    rellenarFila(tablaPast,result)
    past.sort((a, b) => a.porcentajeAsistencia - b.porcentajeAsistencia);
    const eventoMayorAsistencia=past[past.length-1]
    const eventoMenorAsistencia=past[0]
    const tablaEventos=document.getElementById('t_events')
    
    tablaEventos.innerHTML+=`
    <tr><td>${eventoMayorAsistencia.name}: ${eventoMayorAsistencia.porcentajeAsistencia.toLocaleString('es-ES', {style:'percent', minimumFractionDigits: 2 })} </td>
    <td>${eventoMenorAsistencia.name}: ${eventoMenorAsistencia.porcentajeAsistencia.toLocaleString('es-ES', {style:'percent', minimumFractionDigits: 2 })} </td>
    <td>${eventoMayorCapacidad.name}: ${eventoMayorCapacidad.capacity}
    </td></tr>`
    
    

    
    } catch (error) {
        console.log(error);
    }
}


const totalesPorCategoria = (eventos) => {
    return eventos.reduce((totals, event) => {
      const { category } = event;
      let total = event.ganancia;
      let asistenciaTotal =typeof(event.estimate)=="number"?event.estimate:event.assistance
      let capacidadTotal=event.capacity
  
      if (!totals[category]) {
        totals[category] = {
          total,
          asistenciaTotal,
          capacidadTotal

        };
      } else {
        totals[category].total += total;
        totals[category].asistenciaTotal += asistenciaTotal;
        totals[category].capacidadTotal += capacidadTotal;
        
      }
  
      return totals;
    }, {});
  };
  
  const rellenarFila=(tabla,result)=>{ for (let category in result) {
    let contenido=`<tr><td>${category}</td>
    <td>${result[category].total.toLocaleString('es-ES', {style:'currency', currency: 'USD'})}</td>
    <td>${(result[category].asistenciaTotal/result[category].capacidadTotal*100).toFixed(2).replace(".",",")}%
    </td></tr>`
    tabla.innerHTML+=contenido
    }
}
    


 cargarDescripcion()