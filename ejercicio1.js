const readlineSync = require('readline-sync');

let nota1 = parseFloat(readlineSync.question("Ingrese nota 1: "));
let nota2 = parseFloat(readlineSync.question("Ingrese nota 2: "));
let nota3 = parseFloat(readlineSync.question("Ingrese nota 3: "));

let promedio = (nota1 + nota2+ nota3) / 3;


console.log("Este es tu promedio: " + promedio);

