console.log("*-* DOM: Modificando Elementos (Cool Style)");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

/* 
insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .inserAdjacentText(position, text)

Posiciones:
  beforebeging (hermano anterior)
  afterend (hermano siguiente)
  afterbegin (primer hijo)
  beforeend (último hijo)
*/

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

const $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any"/>
  <figcaption></figcaption>
`;

$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Nueva tarjeta");
$newCard.classList.add("card");

// Insertar como hermano anterior
$cards.insertAdjacentElement("beforebegin", $newCard);

// Insertar como hermano siguiente
$cards.insertAdjacentElement("afterend", $newCard);

// insertar como primer hijo
$cards.insertAdjacentElement("afterbegin", $newCard);

// insertar como último hijo
$cards.insertAdjacentElement("beforeend", $newCard);

//todo Existen otros métodos que realizan lo mismo
// PREPEND: inserta com primer hijo
$cards.prepend($newCard);

// APPEND: inserta como último hijo
$cards.append($newCard);

// BEFORE: inserta como hermano anterior
$cards.before($newCard);

// AFTER: Inserta como hermano posterior
$cards.after($newCard);
