console.log("*-* BOM: Metodos");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

console.log(`Metoddos estudiados en la clase del video No 30`);
// window.alert("Esta es un alerta");
// window.confirm("Esta es una confirmación");
// window.prompt("Este es un prompt");

// Recordemos que cuando el objeto cuelga de window no es necesario escribir la palabra
// const varAlert = alert("esta es una alerta");
// const varConfirm = confirm("Esta es un confirmación");
// const varPrompt = prompt("Este es un prompt");
// console.log(`alerta: ${varAlert}`, `confirmación: ${varConfirm}`, `prompt: ${varPrompt}`);

// todo El repaso fue comentado para que no interviniera en la pantalla del nuevo punto

const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");
console.log($btnAbrir, $btnCerrar, $btnImprimir);

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  // window.open("https://jonmircha.com");
  // Igual que en los ejemplos anteriores no es necesario escribir window
  // open("https://jonmircha.com");
  // funcionaba con la linea anterior esta asignacion la usaremos para utilizar el metodo close()
  ventana = open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  // window.print();
  print();
});
