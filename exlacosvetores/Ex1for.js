const leia = require('readline-sync')

var numero1;
var numero2;
var contador;



var numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
var numero2 = leia.questionInt("Digite o segundo numero do intervalo: ");
if (numero2 <= numero1) {
    console.log("Digite um intervalo válido");
}



for (let i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`);

    }
}











