/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Escribe un valor adecuado para la variable 'usuario' y/o 'password' para que se muestre por consola el mensaje "Credenciales correctas, bievenido usuario pepe@gmail.com".

*/

let usuario = "pepa@gmail.com"; // pepe@gmail.com
let password = "1995"; // 1996

/** NO TOCAR A PARTIR DE AQUÍ  */  //  Сambió  los valores para la variable 'usuario' y 'password' para que ambos valores sean "true";
if (usuario == "pepa@gmail.com" && password == "1995") {
  console.log("Credenciales correctas, bievenido usuario " + usuario);
}
