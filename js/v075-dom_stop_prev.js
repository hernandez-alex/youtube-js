console.log("*-* DOM: stopPropagation & preventDefault");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

// Tres formas de utilizar los manejadores de eventos
//    1.- Manejador de eventos en línea (dentro de la etiqueta HTML), no es lo más recomenodado.
//    2.- Manejador semántico, que llama una función de en código javascript (se sobreescribe).
//    3.- Manejador de eventos múltiples con addEventListener, Es lo recomendado y es múltiple.

// Función manejadora
const holaMundo = (e) => {
  alert(`Hola mundo`);
  console.log(e);
};

const saludar = function saludar(nombre = "Desconocido") {
  alert(`Hola ${nombre}`);
};

const $eventoSemantico = document.getElementById("evento-semantico");

// Manejadores de eventos semánticos tienen la limitante de que por cada elemento solo puedo utilizar una función o manejador...
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = () => alert("Hola mundo, manejador de evento semántico."); // reemplaza anterior

// Manejador de evento multiple
const $eventoMultiple = document.getElementById("evento-multiple");

// a diferencia del manejador semántico el manejador de eventos multiple no se sobreescribe, si no que se ejecutan todos los eventos
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos múltiple");
  console.log(e);
  // tambien podemos mostrar el tipo de evento y quién lo origina
  console.log(e.type);
  console.log(e.target);
});

// $eventoMultiple.addEventListener("click", saludar); // Da error por los argumentos
$eventoMultiple.addEventListener("click", (e) => {
  saludar("Monica Marquez");
});

// Remover eventos en manejadores múltiples
// para remover no puede ser una funcion anonima o arrow funcion, debe ser una función declarada o expresada
const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClic = (e) => {
  alert(`Removiendo el evento del tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClic);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClic);

// todo Flujo de eventos
const $divEventos = document.querySelectorAll(".eventos-flujo div");

// todo stopPropagation & preventDefault
const $linkEventos = document.querySelector(".eventos-flujo a");

const flujoEventos = function (e) {
  console.log(`Hola te saluda ${this.className} y el clic lo origino ${e.target.className}`);
  // Detener la propagación
  e.stopPropagation();
};

$divEventos.forEach((div) => {
  //* Fase de burbuja (Las dos de abajo son validas)
  // Desde el elemento mas interno al externo
  div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, false);
  //* Fase de Captura
  // Desde el elemento más externo al interno
  // div.addEventListener("click", flujoEventos, true);
  //* Tambien lo podemos manejar con corchetes
  // div.addEventListener("click", flujoEventos, {
  //   capture: true,
  //   once: false,
  // });
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital Jonathan Mircha");
  // Detener la propagación del evento
  e.stopPropagation();
  // Prevenir el comportamiento por defecto del elemento (En este caso el enlace no se abre...)
  e.preventDefault();
});
