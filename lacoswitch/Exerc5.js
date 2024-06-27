const leia = require('readline-sync')

let codigo, quantidade;
const p1 = 10.00
const p2 = 15.00
const p3 = 18.00
const p4 = 12.00
const p5 = 8.00
const p6 = 13.00



console.log("\n Produtos e seus preços: ");

console.log("\n Codigo - 1 Cachorro quente R$ 10.00");
console.log("\n Codigo - 2 X - Salada R$ 15.00");
console.log("\n Codigo - 3 X - Bacon R$ 18.00");
console.log("\n Codigo - 4 -Bauru R$ 12.00");
console.log("\n Codigo - 5 -Refrigerante R$ 8.00");
console.log("\n Codigo - 6 -Suco de Laranja R$ 13.00");

codigo = leia.questionFloat("\nDigite o codigo referente ao produto: ");
quantidade = leia.questionInt("\nDigite a quantidade desejada: ");

let vF1 = quantidade * p1
let vF2 = quantidade * p2
let vF3 = quantidade * p3
let vF4 = quantidade * p4
let vF5 = quantidade * p5
let vF6 = quantidade * p6

switch (codigo) {
   case 1:
      console.log(`\nProduto Cachorro Quente\nValor Total ${vF1.toFixed(2)} R$`);
      break;

   case 2:
      console.log(`\nProduto X - Salada\nValor Total ${vF2.toFixed(2)} R$`);
      break;

   case 3:
      console.log(`\nProduto X - Bacon\nValor Total ${vF3.toFixed(2)} R$`);
      break;

   case 4:
      console.log(`\nProduto Bauro\nValor Total ${vF4.toFixed(2)} R$`);
      break;

   case 5:
      console.log(`\nProduto Refrigerante\nValor Total ${vF5.toFixed(2)} R$`);
      break;

   case 6:
      console.log(`\nProduto Suco de Laranja\nValor Total ${vF6.toFixed(2)} R$`);
      break;

   default:
      console.log("Insira um codigo valido")
}






