export const PI = Math.PI;
export let usuario = "Alex";
export let password = "qwerty";
// solo puede haber un default por archivo, para las cosntantes y fuciones expresadas este debe declararse luego de ser creadas si no se producira un error.
// export default password;

// En el caso de que una función declarada sea default se puede hacer en la misma línea de código ya que Javascript se encargara del hoisting...
// export default function saludar() {
export function saludar() {
  console.log("Hola módulos +ES6");
}

// coun una clase
export default class Saludar {
  constructor() {
    console.log("Hola módulo +ES6, desde una clase");
  }
}
