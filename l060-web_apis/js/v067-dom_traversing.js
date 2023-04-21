console.log("*-* DOM: Traversing - Recorriendo el DOM");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

console.log(`----- Creamos una variable llamada $cards`);
const $cards = document.querySelector(".cards");
console.log($cards);

console.log(`----- Acceder a la colección de elementos contenidos en $cards (Hijos)`);
console.log(`$cards.children`, $cards.children);

console.log(`----- Acceder a un hijo en particular de $cards, notación de los []`);
console.log(`$cards.children[2]`, $cards.children[2]);

console.log(`Acceder al padre del elemento $cards, parentElement`);
console.log(`$cards.parentElement`, $cards.parentElement);

console.log(`----- Acceder al primer y ultimo elemento hijo, firstChild - lastChild`);
console.log(`$cards.firstElementChild`, $cards.firstElementChild);
console.log(`$cards.lastElementChild`, $cards.lastElementChild);

console.log(
  `----- Acceder al hermano anterior y siguiente, previousElementSibling - nextElementSibling`
);
console.log(`$cards.previousElementSibling`, $cards.previousElementSibling);
console.log(`$cards.nextElementSibling`, $cards.nextElementSibling);

console.log(`----- Acceder al elemento más cercano, método closest`);
console.log(`$cards.closest("div")`, $cards.closest("div"));
console.log(`$cards.closest("body")`, $cards.closest("body"));
console.log(`$cards.children[3].closest("section")`, $cards.children[3].closest("section"));
