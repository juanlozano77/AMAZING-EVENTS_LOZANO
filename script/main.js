const container = document.getElementById('container');
imprimirTajetas(data.events, container);
  
  /*
  const container = document.getElementById('container');
  for (evento of data.events) {
    const tarjeta = crearTarjeta(evento)
    container.appendChild(tarjeta);
  }



const categorias = [...new Set(data.events.map(evento => evento.category ))]
 

const checkbar = document.getElementById('checkbar');
for(let i = 0; i < categorias.length; i++) 
{const checkbox=crearCheck(categorias[i],i)
 checkbar.appendChild(checkbox);
}

function crearCheck(categoria,valor){
    check=document.createElement('div');
    check.className = 'form-check';
    check.innerHTML = `
    <input class="form-check-input" type="checkbox" value="${categoria}" id="Check+${valor}">
              <label class="form-check-label" for="Check1" >
              ${categoria}
              </label>`;
return check
}


/* Ejercicio 1
Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos)

let numero_1=Number(prompt("Ingrese numero"))
for (let i=1;i<=10;i+=1){
  console.log(numero_1*i)
} */

/* Ejercicio 2


/*Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let acumulador=0
let numero_2=0
do {
  numero_2=Number(prompt("Ingrese numero"))
  acumulador+=numero_2
}
while (numero_2!=0)
console.log(acumulador) */

/*Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado

let intentos=0
let numeroSecreto=65
let numero_usuario=0
do {
  numero_3=Number(prompt("Ingrese numero"))
  intentos+=1
  if (numero_3>numeroSecreto){
    alert("El numero es menor")
  }
  else if (numero_3<numeroSecreto){
    alert("El numero es mayor")
  }
}
while (numero_3!=numeroSecreto)
console.log(`Has adivinado el numero en ${intentos} intentos`) */


/*Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.

let numero=13
let primo=true
let i=2
while (i<=Math.sqrt(numero)&&primo){
  if (numero%i==0){
    primo=false}
  i+=1
  }

if (primo){
  console.log("El numero es primo")
}
else {
  console.log("El numero no es primo")
}


/*
for (let i=2;i <= Math.sqrt(numero); i++){ 
  if (numero%i==0){
  primo=false
  }
}

/*Realizar un programa que permita dado un numero, mostrar todos sus divisores

console.log(primo)
const divisores = [];
  for (let i = 1; i <= Math.floor(numero / 2); i++) {//calculo los divisiores hasta su valor.
    if (numero % i == 0) {
      divisores.push(i);
    }
  }
  divisores.push(numero)//agrego a si mismo como divisor

console.log(divisores)*/

/*9) Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares
const array=[4,29,185,71,61,512,412,31,28,10258]
for (elemento of array){
  if (elemento%2!=0){
    console.log (elemento)
  }
}*/

/*10 -Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0

let sumaPares=0
let sumaImpares=0
let numero_10=0
do {
  numero_10=Number(prompt("Ingrese numero"))
  if (numero_10%2==0){
    sumaPares+=numero_10
  }
  else {
    sumaImpares+=numero_10
  }
}
while (numero_10!=0)
console.log("La suma de pares es "+ sumaPares) 
console.log("La suma de impares es"+ sumaImpares) */

/*Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.
const array=[4,29,185,71,61,512,412,31,28,10258,19,24,23,19]
maximo=array[0]
for (numero of array){
  if (numero>maximo){
    maximo=numero
  }
}
console.log("El maximo es "+maximo)*/

/*-13Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.
let manoJugador1=""
let manoJugador2=""
do
{manoJugador1=prompt("Ingrese mano Jugador 1 piedra/papel/tijera")
manoJugador2=prompt("Ingrese Jugador 2 piedra/papel/tijera")}
while(manoJugador1==manoJugador2)
if (manoJugador1=="piedra" && manoJugador2=="tijera"||manoJugador1=="papel" && manoJugador2=="piedra"||manoJugador1
  =="tijera" && manoJugador2=="papel" ){
    console.log("gano jugador 1")
}
else{
  console.log("gano jugador 2")
}







/*maximo

/*
const array=[4,29,185,71,61,512,412,31,28,10258]
let ultimo=0

console.log("ALETRA",array.length-ultimo)

for (let i=0;i<array.length;i++)
{
  let indice_maximo=0
  for (let j=0;j<array.length-i;j++){
   if (array[j]>array[indice_maximo]){
    indice_maximo=j
   }
  }
[array[indice_maximo], array[array.length-i-1]] = [array[array.length-i-1], array[indice_maximo]]
}
console.log(array)

let numero=1225

let primo=true
for (let i=2;i <= Math.sqrt(numero); i++){ 
  if (numero%i==0){
  primo=false
  }
}


console.log(primo)
const divisores = [];
  for (let i = 1; i <= Math.floor(numero / 2); i++) {//calculo los divisiores hasta su valor.
    if (numero % i == 0) {
      divisores.push(i);
    }
  }
  divisores.push(numero)//agrego a si mismo como divisor

console.log(divisores)




for (let i=0;i<=5;i++){
  let linea="";
  for (let j=0;j<=i;j++) {
    linea+="*"
  }
  console.log(linea)
}




console.log("Invertido")


for (let i=0;i<=5;i++){
  let linea="";
   for (let j=5-i;j>=0;j--) {
    linea+="*"
  }
  console.log(linea)
}

 
  
  /*temp=array[array.length-ultimo]
  array[array.length-ultimo]= array[index_max]
  array[index_max]=temp

  //[array[], array[array.length-ultimo]] = [array[array.length-ultimo], array[index_max]];
  //
 // [array[0], array[1]] = [array[1], array[0]]
  ultimo+=1
}
}

//[array[0], array[1]] = [array[1], array[0]];
console.log('Termine')
console.log(array)








/*quick sort sin recusión con bucles


const array=[19,85,32,545,211,2311,115,891,15,18,16]
  let pila_izq = [0];
  let pila_der=[array.length-1]
  let mitad_izquierda = 0;
  let mitad_derecha = array.length-1;
  
  while (pila_der.length>0 && pila_izq.length> 0) {//si quedan elementos en la pila
    console.log(pila_der)
    console.log(pila_izq)
    let  mitad_izquierda=pila_izq.pop();
    let  mitad_derecha  = pila_der.pop();
    let indicePivote = Math.floor((mitad_izquierda+mitad_izquierda)/2);//Tomo como pivote el elemento del medio
    let pivote = array[indicePivote];
    let i = mitad_izquierda;
    let j = mitad_derecha;
    while (i <= j) {
      while (array[i] < pivote) {
        i+=1;
      }
      while (array[j] > pivote) {
        j-=1;
      }
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];//intercambio los indices
        i+=1;
        j-=1;
      }
    }
    if (mitad_izquierda < j) {
      pila_izq.push(mitad_izquierda)
      pila_der.push(j);
    }
    if (i < mitad_derecha) {
      pila_izq.push(i)
      pila_der.push(mitad_derecha);
    }
  }
console.log(array);
*/