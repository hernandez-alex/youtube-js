console.log("*-* Elementos del DOM");

console.log(`🖇️`);
console.log(`-Objeto global document (No es necesario invocar a window para acceder a él.)`);
console.log("window.document", window.document);
console.log("document", document);

console.log(`- Acceso a una parte del DOM (head, body, documentElement, etc...)`);
console.log(document.head);
console.log(document.body);
console.log(document.html); // undefined (Así no se obtiene el html, sin con documentElement)
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

// document.getSelection().toString() : la encerre en un setTimeout para que diera tiempo seleccinar algo luego de actualizar la página...
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
console.log();

document.write("<h2>Hola mundo desde el DOM</h2>");
