const container = document.getElementById('container');
const obtenerEventosFuturos=(eventos,fecha) => {
  const eventosFuturos=[]
  for (let evento of eventos) {
    if (evento.date>fecha){
      eventosFuturos.push(evento)
    }
  }
  return eventosFuturos
}

const eventosaImprimir=obtenerEventosFuturos(data.events,data.currentDate)
imprimirTajetas(eventosaImprimir, container)

