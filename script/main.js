const container = document.getElementById('container');
imprimirTajetas(data.events, container);
<<<<<<< Updated upstream
let dataInput=""; 
const input = document.getElementById('textoEvento')
input.value="" 
const checks = document.querySelector('#checkbar')
checks.addEventListener('change', () => {
  filtrarEventos(data.events,dataInput)})
=======
let dataInput="";
const input = document.getElementById('textoEvento')
input.value="" 
const categorias = [...new Set(data.events.map(evento => evento.category ))]
 

const checkbar = document.getElementById('checkbar');
for(let i = 0; i < categorias.length; i++) 
{const checkbox=crearCheck(categorias[i],i)
 checkbar.appendChild(checkbox);
}

const checks = document.querySelectorAll('input[type="checkbox"]')

checks.forEach(checkCategory => {
  checkCategory.addEventListener('change', () => {
  filtrarEventos(data.events,dataInput)})})
>>>>>>> Stashed changes

input.addEventListener("keyup", (event) => {
  dataInput = event.target.value
  filtrarEventos(data.events,dataInput)
<<<<<<< Updated upstream
});




=======
})


function crearCheck(categoria,valor){
    check=document.createElement('div');
    check.className = 'form-check';
    check.innerHTML = `
    <input class="form-check-input" type="checkbox" value="${categoria}" id="Check${valor}">
              <label class="form-check-label" for="Check${valor}">
              ${categoria}
              </label>`;
    
return check
}
>>>>>>> Stashed changes
