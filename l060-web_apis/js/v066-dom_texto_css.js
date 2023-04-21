console.log("*-* DOM: Texto y HTML");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");
console.log(`----- Creamos una variable para seleccionar el párrafo por us id`);
const $whatIsDom = document.getElementById("que-es");
console.log(`$whatIsDom`, $whatIsDom);

let text = `
<p>El Modelo de Objeto del documento (<b><i>DOM - Document Object Model</i></b>)</p>
<p>Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.</p>
<p><mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark></p>
`;

console.log(`----- Maneras de cambiar o modificar el texto de un elemento HTML`);
console.log(
  "innerText - No interpreta las etiquetas HTML, esta no es parte del estandar, se creo para internet explorer, el texto se reemplaza y respeta las indentaciones creadas en el template string..."
);
$whatIsDom.innerText = text;

console.log(
  `----- textContent - No interpreta las etiquetas HTML, este "SÍ" es el estandar para modificar el texto, pero "NO" respeta las indentaciones creadas en el template string...`
);
$whatIsDom.textContent = text;

console.log(
  `----- innerHTML - Sí interpreta el contenido del texto HTML indicado, reemplaza el contenido del texto pero respeta el elemento como tal, es decir este no desaparece.`
);
$whatIsDom.innerHTML = text;

console.log(
  `----- outerHTML - Reemplaza el elemento por el nuevo contenido HTML indicado, el elemento anterior literalmente desaparece`
);
$whatIsDom.outerHTML = text;
