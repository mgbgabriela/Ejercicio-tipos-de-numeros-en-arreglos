/* Tipos de Números en Arreglo
• Almacene en un arreglo de dimensión N números 
(la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, 
cuántos son negativos y cuántos ceros hay

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros*/

let dimension: number = Number(
  prompt("Indique la cantidad de números que desea ingresar")
);
let nros: number[] = new Array(dimension);
let indice: number;

for (indice = 0; indice < dimension; indice++) {
  nros[indice] = Number(prompt("Ingrese números negativos y positivos"));
}
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

for (indice = 0; indice < dimension; indice++) {
  if (nros[indice] === 0) {
    ceros++;
  } else if (nros[indice] > 0) {
    positivos++;
  } else {
    negativos++;
  }
}
console.log(
  "Hay " +
    positivos +
    " número/s positivo/s, " +
    negativos +
    " número/s negativo/s y " +
    ceros +
    "cero/s"
);
