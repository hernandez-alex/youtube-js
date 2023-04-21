console.log("*-* DOM: Manejadores de Eventos");

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
