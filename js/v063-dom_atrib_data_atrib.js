console.log("*-* Atributos y data-atributes");

console.log(`🖇️`);
console.log("*-* ");
console.log("------------------------------------------------------------------");

console.log("*-* Accediendo a los atributos, lectura y escritura");
console.log("document.documentElement.lang :", document.documentElement.lang);
// Una forma mejot de acceder a los atributos
console.log(
  'document.documentElement.getAttribute("lang") :',
  document.documentElement.getAttribute("lang")
);

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.querySelector(".link-dom").href = "https://www.google.com";
document.querySelector(".link-dom").setAttribute("href", "https://gmail.com");
document.querySelector(".link-dom").setAttribute("href", "#");

console.log("*-* Guardar en variables los seletores");
// JonMirCha recomienda el usa de const para declarar variables que hacen referncia a elementos del DOM, del mismo modo nos dice que es una buena practica entre programadores utilizar el signo $ delante del nombre de la variable, esto no es una regla universal pero se considera una buena práctica.
const $linkDOM = document.querySelector(".link-dom");
console.log("linkDOM :", $linkDOM);
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

console.log("*-* Otras propiedades: hasAttirbute, removeAttribute");
console.log('$linkDOM.hasAttribute("rel") :', $linkDOM.hasAttribute("rel"));
console.log('----- .removeAttribute("rel")');
console.log('$linkDOM.hasAttribute("rel") :', $linkDOM.hasAttribute("rel"));
// Restablecemos el atributo borrado rel
$linkDOM.setAttribute("rel", "noopener");

console.log("----- Trabajando cos data attribute, seguimos con la misma nomenclatura");

console.log('----- $linkDOM.getAttribute("data-description")');
console.log($linkDOM.getAttribute("data-description"));

console.log('----- $linkDOM.setAttribute("data-id",1)');
$linkDOM.setAttribute("data-id", 1);
console.log($linkDOM.getAttribute("data-id"));

console.log(
  "----- Tambien podemos acceder a todos los atributos tipo data-, con la propiedad dataset "
);
console.log("$linkDOM.dataset :", $linkDOM.dataset);
console.log("$linkDOM.dataset.description :", $linkDOM.dataset.description);
console.log("$linkDOM.dataset.id :", $linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del DOM");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Alex no dejes de estudiar, continua aprendiendo";
console.log($linkDOM.dataset.description);
