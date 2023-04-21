console.log("*-* BOM: Propiedades y Eventos");

console.log(`🖇️`);
console.log("------------------------------------------------------------------");

console.log(`----- Ancho y alto de la ventana de nuestro navegador`);

window.addEventListener("resize", (e) => {
  console.clear();
  console.log(`********** Evento Resize **********`);
  console.log(`window.innerWidth`, window.innerWidth);
  console.log(`window.innerHeight`, window.innerHeight);
  console.log(`window.outerWidth`, window.outerWidth);
  console.log(`window.outerHeight`, window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log(`********** Evento Scroll **********`);
  console.log(`window.scrollX`, window.scrollX);
  console.log(`window.scrollX`, window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  // console.clear();
  console.log(`********** Evento Load **********`);
  console.log(`window.screenX`, window.screenX);
  console.log(`window.screenY`, window.screenY);
});

document.addEventListener("DOMContentLoaded", (e) => {
  // console.clear();
  console.log(`********** Evento DOMContentLoaded **********`);
  console.log(`window.screenX`, window.screenX);
  console.log(`window.screenY`, window.screenY);
});
