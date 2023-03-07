const container = document.getElementById('container');
const obtenerEventosPasados=(eventos,fecha) => {
  const eventosPasados=[]
  for (let evento of eventos) {
    if (evento.date<fecha){
      eventosPasados.push(evento);
    }
  }
  return eventosPasados
}

const eventosaImprimir=obtenerEventosPasados(data.events,data.currentDate)
imprimirTajetas(eventosaImprimir, container)


