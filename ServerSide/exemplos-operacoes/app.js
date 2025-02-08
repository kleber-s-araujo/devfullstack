// app.js

// Importa o módulo calculator
import { add, subtract, multiply, divide, bhaskara } from './calculos.js';

// Usa as funções do módulo
const sumResult = add(5, 3);
const subtractionResult = subtract(10, 4);
const multiplicationResult = multiply(3, 6);
const divisionResult = divide(8, 2);
const bhaskaraResult = bhaskara(1,2,-1);

// Exibe os resultados
console.log('Soma:', sumResult);
console.log('Subtração:', subtractionResult);
console.log('Multiplicação:', multiplicationResult);
console.log('Divisão:', divisionResult);
console.log('Bhaskara:', bhaskaraResult)