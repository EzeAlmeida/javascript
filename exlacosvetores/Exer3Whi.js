const leia = require('readline-sync')

let continuar
let idade = 1
let idade1 = 0
let idade2 = 0




while (idade > 0) {

    idade = leia.questionInt("Digite uma idade: ");
    if (idade < 21) {


        idade1++;
    } else if (idade > 50) {
        idade2++
    }

} console.log("Quantidade de pessoas menores de 21 anos: ", idade1);
console.log("Quantidade de pessoa maiores de 50 anos", idade2);