const readlineSync = require('readline-sync');

console.log('A Continuacion ingrese los sigueintes datos');

// Se ingresa el salario del empleado
let salarioPersona = parseFloat(readlineSync.question("Ingresar Salario Trabajador: "));
// Se ingresa las horas extras trabajadas por el
let horasExtras = parseFloat(readlineSync.question("Ingresar Horas Extras Trabajadas: "));

// Se multiplica el numero de horas trabajadas por el valor de cada hora
let pagoExtras = (horasExtras * 5000);
// Se hace la suma de todo para sacar el total
let pagoTotal = parseFloat(salarioPersona + pagoExtras);

// Se imprime el resultado
console.log("Este es tu salario total: " + pagoTotal);