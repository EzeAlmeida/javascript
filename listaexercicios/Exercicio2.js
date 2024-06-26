const leia = require('readline-sync')

var n1;
var n2;
var n3;
var n4;

console.log("Bom dia! Para calcular a média, siga as instruções")

n1 = leia.questionFloat("\nDigite a primeira nota: ");
n2 = leia.questionFloat("\nDigite a segunda nota: ");
n3 = leia.questionFloat("\nDigite a terceira nota: ");
n4 = leia.questionFloat("\nDigite a quarta nota: ");

media = n1 + n2 + n3 +n4 /4;

console.log(`\nA média é: ${media.toFixed(2)}`);