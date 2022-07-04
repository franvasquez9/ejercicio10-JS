import * as modulos from './module/controller.js'
import chalk from 'chalk';

const suma1 = modulos.sumar(1, 2)
console.log(suma1);

const suma2 = modulos.sumar(4, 5)
console.log(suma2);

const multiplication = modulos.multiplicar(suma1, suma2);
console.log(multiplication);

const mul = modulos.multiplicar(modulos.sumar(1, 2),modulos.sumar(4,5));
console.log(chalk.green(mul));