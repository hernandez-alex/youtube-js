import Saludar, { saludar, password, PI, usuario } from "./constantes.js";
import { sumar, restar, operaciones as oper } from "./aritmetica.js";

console.log("Módulos.js");
console.log("PI, usuario ->", PI, usuario);
console.log("sumar(4, 2) ->", sumar(4, 2));
console.log("restar(7, 4) ->", restar(7, 4));
console.log("oper.multiplicar(3, 4) ->", oper.multiplicar(3, 4));
console.log("oper.dividir(9, 2) ->", oper.dividir(9, 2));
saludar();
console.log(password);
let saludo = new Saludar();
saludo;
