const leia = require('readline-sync');

var numero;
pares = 0;
impares = 0;

for (contador = 1; contador <= 10; contador++) {

    var numero = leia.questionInt(`\nDigite o ${contador} numero: `);

    if (numero % 2 == 0) {
        // se o número é par vai acrescentar + 1 na variavel
        pares++;
    } else {
        // se o número é ímpar vai acrescentar + 1 na variavel
        impares++;
    }



}

console.log(`\nQuantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);


