const categorias = data.events.map(evento => evento.category ).filter((categoria,index,categorias)=> categorias.indexOf(categoria) == index);
const checkbar = document.getElementById('checkbar')

const rellenarTarjeta=(evento)=>{
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
      <div class="card c_events">
        <img src="${evento.image}" alt="image event">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">
            ${evento.name}
          </h5>
          <p class="card-text">${evento.description}</p>
          <div class="mt-auto fill-space">
            <div class="d-flex align-items-center justify-content-between mx-0">
              <p class="card-text text-white price">Price $:${evento.price}</p>
              <a href="./details.html?id=${evento._id}" class="btn btn-primary ">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    
}

const rellenarCheck=(categoria,valor)=>{
  return `<div class="form-check">
          <input class="form-check-input" type="checkbox" value="${categoria}" id="Check${valor}">
          <label class="form-check-label" for="Check${valor}">${categoria}
          </label>
          </div>`;}
  
const noEncontadro=()=>{
  return `<div class= 'no_found'>
  <div class="d-flex justify-content-center align-items-center">
  <svg height="200" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="647.63626" height="632.17383" viewBox="0 0 647.63626 632.17383" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#6c63ff"/><circle cx="190.15351" cy="24.95465" r="20" fill="#6c63ff"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#6c63ff"/><circle cx="433.63626" cy="105.17383" r="20" fill="#6c63ff"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
  </div>
  <p class="text-center">Sorry, no events found, try adjusting the filters to find an event</p>
  </div>`;}

const clickEnTarjeta=()=> {
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      const botonEnvio = tarjeta.querySelector('.btn');
      botonEnvio.click();
    })
  })
}  
const imprimirTajetas=(eventosaImprimir, contenedor)=>{
  contenedor.innerHTML = ""
  let contenido=eventosaImprimir.reduce((ant,evento)=> {
    return ant+rellenarTarjeta(evento)
    },"")
  if (!contenido){
    contenido=noEncontadro()
    }
  contenedor.innerHTML=contenido
  clickEnTarjeta()
}

const imprimirCategorias=(categorias,contenedor)=>{
  let valor=0 
  const contenido=categorias.reduce((ant,categoria)=> {
    return ant+rellenarCheck(categoria,valor+=1)
    },"")
  contenedor.innerHTML=contenido
}

const obtenerCheckboxTildados=() => {
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
let tildados=checkboxes.filter(checkbox=> checkbox.checked).map(checkbox=> checkbox.value)
return tildados
}

const filtrarEventosPorTexto=(tarjetas,arrayTexto)=> {
  
  const tarjetasconTexto = tarjetas.filter((evento) => {
    const coinciden = arrayTexto.every((palabra) => {
      return (
        evento.description.toLowerCase().includes(palabra) ||
        evento.name.toLowerCase().includes(palabra)
      )
    })
    return coinciden;
  })
  return tarjetasconTexto;
  }


/*La siguiente función fue creada para remarcar o resaltar el texto en las palabras que coincidan con la búsqueda 
del inputbox. La idea es que busque los indices del comienzo del texto coindicente, después elimine las palabras que se
superponen totalmente y modifique aquellas que se superpongan parcialmente.
una vez modificados los indices y los textos coincidentes sin que se superongan se modifica el contenido 
para que el texto quede remarcado y en blanco. Finalmente se reimprimen la tarjetas.*/

const resaltarTexto=(clase,arrayTexto)=>{ 
  const tarjetasTexto = Array.from(document.querySelectorAll(clase));
  tarjetasTexto.forEach(tarjeta => {
    let resaltados = []
    let textoTarjeta = tarjeta.textContent
    let textoResaltado = ""
     //obtiene los indices y el contendio de cada tarjeta
    arrayTexto.forEach((texto) => {
      textoTarjeta=tarjeta.textContent
      if (texto){
        let indiceParcial = textoTarjeta.toLowerCase().indexOf(texto)
        let indice=indiceParcial
        while (indiceParcial != -1) {
          const textoCoincidente = textoTarjeta.substring(indiceParcial, indiceParcial + texto.length);
          resaltados.push({ indice, textoCoincidente });
          textoTarjeta = textoTarjeta.substring(indiceParcial + texto.length);
          indice+=texto.length
          indiceParcial=textoTarjeta.toLowerCase().indexOf(texto)
          indice+=indiceParcial  
          }
      }
      })
      
    let ultimoIndice = 0
    textoTarjeta=tarjeta.textContent
    resaltados.sort((a, b) => a.indice - b.indice)//ordena los resultados

    const resaltadosFiltrados = resaltados.reduce((acc, resaltado, i) => {
      if (i == 0) {
        acc.push(resaltado)
        return acc
      }
      const anterior = resaltados[i - 1].indice + resaltados[i - 1].textoCoincidente.length;
      //elimina las palabras superpuestas totalmente
      if (resaltado.indice + resaltado.textoCoincidente.length <= anterior) {
        resaltado.indice = resaltados[i - 1].indice
        resaltado.textoCoincidente = resaltados[i - 1].textoCoincidente
      } else if (resaltado.indice <= anterior) { //modifica las palabaras superpuestas parcialmente
        let diferencia = resaltado.indice - resaltados[i - 1].indice
        resaltado.textoCoincidente = resaltados[i - 1].textoCoincidente.substring(0,diferencia) + resaltado.textoCoincidente;
        resaltado.indice = resaltados[i - 1].indice
        acc.pop()
        acc.push(resaltado)
      } else {
        acc.push(resaltado)
      }
      return acc;
    }, [])
    
      //finalmente imprimimos la tajeta modificadas
    resaltadosFiltrados.forEach(resaltado => {
      const textoAnterior =textoTarjeta.substring(ultimoIndice, resaltado.indice)
      textoResaltado += textoAnterior + `<strong class="text-white">${resaltado.textoCoincidente}</strong>`;
      ultimoIndice = resaltado.indice + resaltado.textoCoincidente.length
    })

    textoResaltado += textoTarjeta.substring(ultimoIndice);
    tarjeta.innerHTML = `<p class="${clase.substring(1)}"}>${textoResaltado}</p>`
    
    }
  )
  
}



const filtrarEventos=(eventos,textoABuscar)=> {
  const tildados = obtenerCheckboxTildados()
  const texto = textoABuscar.trim().toLowerCase()
  const arrayTexto = texto.split(" ");
  let tarjetasFiltradas = eventos
  if (tildados.length) {
    tarjetasFiltradas = tarjetasFiltradas.filter(evento => tildados.includes(evento.category)) 
  }
  tarjetasFiltradas = filtrarEventosPorTexto(tarjetasFiltradas,arrayTexto)
  if (tarjetasFiltradas){
    imprimirTajetas(tarjetasFiltradas, container);
    resaltarTexto(".card-text",arrayTexto)
  resaltarTexto(".card-title",arrayTexto)
  }
}

//Fijamos en que pagina estamos y de acuerdo a eso imprimimos las tarjetas
const container = document.getElementById('container');
const tituloPagina = document.title.substring(17);
let eventosaImprimir=[]
if (tituloPagina=="Home"){
  eventosaImprimir=data.events
}
else if (tituloPagina=="UpComing Events"){
  eventosaImprimir=data.events.filter(evento=> evento.date>data.currentDate)
}
else if (tituloPagina=="Past Events"){
  eventosaImprimir=data.events.filter(evento=> evento.date<data.currentDate)
}

imprimirTajetas(eventosaImprimir, container);
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

imprimirCategorias(categorias,checkbar)



  