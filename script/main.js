const container = document.getElementById('container');
imprimirTajetas(data.events, container);
let dataInput=""; 
const input = document.getElementById('textoEvento')
input.value="" 
const checks = document.querySelector('#checkbar')
checks.addEventListener('change', () => {
  filtrarEventos(data.events,dataInput)})

input.addEventListener("keyup", (event) => {
  dataInput = event.target.value
  filtrarEventos(data.events,dataInput)
});




