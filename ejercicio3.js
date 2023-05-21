// Algoritmo que calcule lo que gana un empleado con base a las horas trabajadas, teniendo en cuenta
// que cada hora se paga a 5000, adicionalmente se le realiza unos descuento con respecto a un
// impuesto de seguridad del 10% sobre su salario.

// El sistema debe imprimir un mensaje indicando el nombre del empleado y su sueldo total.

const readlineSync = require('readline-sync');

//Se ingresa el nombre del trabajador.
let Trabajador = readlineSync.question("Ingrese nombre del trabajador: ");

//Se ingresa el # de horas trabajadas por el empleado.
let horasTrabajadas = readlineSync.question("Ingrese el numero de horas trabajadas: ");
//Se calcula el numero de horas trabajadas por el valor de cada hora.
let calculoHoras = horasTrabajadas * 5000;

//Se asigna el descuento del impuesto de seguridad
let descuento = 0.1; // 10% de descuento.
//Se calcula el total del salario quitando el descuento.
let salarioDescuento = calculoHoras * (1 - descuento);

//Se imprime el resultado.
console.log("El salario de: " + Trabajador + " da un total de: " + salarioDescuento);