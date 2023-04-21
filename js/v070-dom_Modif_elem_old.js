console.log("*-* DOM: Modificando Elementos (Old Style)");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

// Definimos algunas variables
const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

// Creamos clone del elemento $cards
const $cloneCards = $cards.cloneNode(true);

// Usamos el método innerHTML por comodida, ya sabemos que este no crea nodos, y es mas recomendado utilizar otro de los métodos explicados en la clase anterior.
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any"/>
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//! Reemplazando una card por otra
// $cards.replaceChild($newCard, $cards.children[2]);

// insertar antes de un nodo tomado como referencia
// $cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar un elemento tomando un nodo como referencia
$cards.removeChild($cards.lastElementChild);

// Mostrando el Clon un elemento
document.body.appendChild($cloneCards);
