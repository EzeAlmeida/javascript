const leia = require('readline-sync');

var n1;
var n2;
var n3;
var n4;
var resultado;

n1 = leia.questionFloat("\nDigite o primeiro valor: ");
n2 = leia.questionFloat("\nDigite o segundo valor: ");
n3 = leia.questionFloat("\nDigite o terceiro valor: ");
n4 = leia.questionFloat("\nDigite o quarto valor: ");

resultado =(n1 * n2 - n3 * n4);

console.log(`\nA diferença entre o produto de N1 e N2 para N3 e N4 é de: ${resultado.toFixed(2)}`)