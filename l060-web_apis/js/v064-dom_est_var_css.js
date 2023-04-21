console.log("*-* Estilos y Variables CSS");

console.log(`🖇️`);
console.log("*-* ");
console.log("------------------------------------------------------------------");

console.log(
  "----- Listando las propiedades CSS de un elemento en particular (a.link-dom en este caso)"
);
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

console.log(
  "----- Listando todas las propiedades computadas del elemento en la consola, con el metodo getComputedStyle($linkDOM)"
);
console.log(window.getComputedStyle($linkDOM));
// Cuando el objeto cuelga de window no es necesario escribir esta palabra para acceder a él.
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

console.log("----- Estableciendo propiedades CSS a un elemento en particular");
console.log(`$linkDOM.style.setProperty("text-decoration", "none")`);
$linkDOM.style.setProperty("text-decoration", "none");
console.log(`$linkDOM.style.setProperty("text-decoration", "none")`);
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.getAttribute("style"));

console.log(`----- Variables CSS - Custom properties`);

const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

console.log(`----- Modificando las Custom properties`);
$html.style.setProperty("--dark-color", "pink");

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
