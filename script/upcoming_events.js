const container = document.getElementById('container');
const eventosaImprimir=data.events.filter(evento=> evento.date>data.currentDate)
imprimirTajetas(eventosaImprimir, container)

let dataInput="";
const input = document.getElementById('textoEvento')
input.value="" 

const checks = document.querySelector('#checkbar')
checks.addEventListener('change', () => {
  filtrarEventos(eventosaImprimir,dataInput)})

input.addEventListener("keyup", (event) => {
  dataInput = event.target.value
  filtrarEventos(eventosaImprimir,dataInput)
})

