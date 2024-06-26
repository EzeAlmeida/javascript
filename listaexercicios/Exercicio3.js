const leia = require('readline-sync')

console.log("Descubra seu salário líquido");

let sB;
let sL;
let hE;
let des;
let aN;


 sB= leia.questionFloat("\nDigite o salario bruto: ");
 aN= leia.questionFloat("\nDigite o adicional noturno: ");
 hE= leia.questionFloat("\nDigite as horas extras: ");
 des= leia.questionFloat("\nDigite os descontos: ");

sL = (sB + aN + (hE*5) - des);

console.log(`\nSeu salário líquido é de: ${sL}`);