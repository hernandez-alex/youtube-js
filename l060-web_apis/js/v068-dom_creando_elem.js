console.log("*-* DOM: Creando Elementos y Fragmentos");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

console.log(`----- Creamos algunas variables`);
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");

// Ojo recuerda: ACA Creamos NODOS
$figure.classList.add("card");
$figure.appendChild($img);
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// Otra manera de generar contenido, con innerHTML, pero que no crea nodos (supuestamente según JonMirCha)
// Ojo recuerda: ACA NO Creamos NODOS
const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People" />
  <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// Creación dinámica de varios elementos, simulando no conocer la cantidad
// Ojo recuerda: ACA Creamos NODOS
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");
const $tituloEstaciones = document.createElement("h3");

document.body.appendChild($tituloEstaciones);
$tituloEstaciones.textContent = "Estaciones del Año";

document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

// Otra manera de generar contenido dinámico, con innerHTML
// Ojo recuerda: ACA NO Creamos NODOS
const continentes = ["África", "América", "Asia", "Europa", "Oceania"];
const $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");

document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// MÉTODO DELOS FRAGMENTOS
// Un último ejemplo con fragmentos, el cual es una mejor técnica porque la inserción en el DOM se realiza una sola vez, y esto ahorra recursos del sistema...
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const $ul3 = document.createElement("ul");
const fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  fragment.appendChild($li);
});
$ul3.appendChild(fragment);

document.write("<h3>Meses del Año</h3>");
document.body.appendChild($ul3);
