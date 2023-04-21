console.log("*-* DOM: Clases CSS");

console.log(`🖇️`);
console.log("*-* ");
console.log("------------------------------------------------------------------");

console.log(`----- Creamos una variable que almacene el primer card`);
const $card = document.querySelector(".card");
console.log($card);

console.log(`----- Accedemos al nombre de la clase con className`);
console.log(`$card.className :`, $card.className);
console.log(`$card.classlist`, $card.classList);

console.log(`----- Verificar si un elemento contiene una clase indicada, contain("nombreClase")`);
console.log(`$card.classList.contains("card") :`, $card.classList.contains("card"));
console.log(`$card.classList.contains("rotate-45") :`, $card.classList.contains("rotate-45"));

console.log(`----- Agregando clases a un elemento indicado, add("nombreClase")`);
$card.classList.add("rotate-45");
console.log(`$card.classList.contains("rotate-45") :`, $card.classList.contains("rotate-45"));
console.log(`$card.classlist`, $card.classList);

console.log(`----- Quitando clases a un elemento indicado, remove("nombreClase)`);
$card.classList.remove("rotate-45");
console.log(`$card.classList.contains("rotate-45") :`, $card.classList.contains("rotate-45"));
console.log(`$card.classlist`, $card.classList);

console.log(`----- Alternar la creación y eliminación de una clase, toggle("nombreClase")`);
$card.classList.toggle("rotate-45");
console.log(`$card.classList.contains("rotate-45") :`, $card.classList.contains("rotate-45"));
console.log(`$card.classlist`, $card.classList);

console.log(`----- Reemplazar una clase por otra en un elemento indícado, replace("nombreClase")`);
$card.classList.replace("rotate-45", "rotate-135");
console.log(`$card.classlist`, $card.classList);

console.log(`----- Agregando, removiendo y alternando más de una clase a la vez`);
$card.classList.add("opacity-80", "sepia");
console.log(`$card.classlist`, $card.classList);
$card.classList.remove("opacity-80", "sepia");
console.log(`$card.classList`, $card.classList);
$card.classList.toggle("opacity-80", "sepia");
