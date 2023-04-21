console.log("*-* Nodos, Elementos y Selectores");

console.log(`🖇️`);
console.log(
  "*-* Algunos de los metodos ya en desuso para seleccionar elementos del DOM, que han sido reemplazado por otros métodos actualmente querySelector(selector)"
);
console.log("------------------------------------------------------------------");
console.log("-> getElementsByTagName(nombreDeLaEtiqueta)");
console.log(document.getElementsByTagName("li"));
console.log("-> getElementsByClassName(nombreDeLaEtiqueta)");
console.log(document.getElementsByClassName("card"));
console.log("-> getElementsByName(name)");
console.log(document.getElementsByName("nombre"));
console.log("-> getElementById(id)");
console.log(document.getElementById("menu"));

console.log("------------------------------------------------------------------");
console.log("*-* document.querySelector(selector)");
console.log('document.querySelector(".card")', document.querySelector(".card"));
console.log('document.querySelector("a")', document.querySelector("a"));
console.log('document.querySelectorAll("a")', document.querySelectorAll("a"));
console.log('document.querySelectorAll("li")', document.querySelectorAll("li"));
console.log('document.querySelector(".card")', document.querySelector(".card"));
console.log('document.querySelectorAll(".card")', document.querySelectorAll(".card"));
console.log('document.querySelectorAll(".card")[2]', document.querySelectorAll(".card")[2]);
console.log('document.querySelectorAll("#menu li")', document.querySelectorAll("#menu li"));

console.log("------------------------------------------------------------------");
console.log("*-* Algunas propiedades aplicables a los elementos resultantes");

console.log("----- Método length");
console.log('document.querySelectorAll("a").length', document.querySelectorAll("a").length);

console.log("----- Método forEach");
document.querySelectorAll("a").forEach((el) => console.log(el));
