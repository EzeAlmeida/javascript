const leia = require('readline-sync')

var salario; 
var abono ;

console.log("\nBom dia!");

salario = leia.questionInt("\nDigite seu salario: ");
abono = leia.questionInt("\nDigite seu Abono: ");


nS = salario+abono;


console.log(`\nSeu novo salario é: R$ ${nS.toFixed(2)}`);

