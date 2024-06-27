
const leia = require('readline-sync')

let n1, n2;
let codigo


n1 = leia.questionInt("Digite o primeiro numero: ");
n2 = leia.questionInt("Digite o segundo numero: ");

console.log("O que você deseja fazer? ")

console.log("\n Codigo - 1 Adicao");
console.log("\n Codigo - 2 Subtracao");
console.log("\n Codigo - 3 Multiplicao");
console.log("\n Codigo - 4 Divisao");

codigo = leia.questionInt("\nInsira o codigo correspondente: ")

switch (codigo){
    case 1:
        console.log("\nAdicao", n1 + n2,);
        break;

    case 2:
        console.log("\nSubtracao", n1 - n2);
        break;

    case 3:
        console.log("\nMultiplicacao", n1 * n2);
        break;

    case 4:
        console.log("\nDivisao", n1 / n2);
        break;

    default:
        console.log("\nInsira um codigo valido")

}
