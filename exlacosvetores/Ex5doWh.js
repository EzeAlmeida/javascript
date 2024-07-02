const leia = require('readline-sync')


let numeros;

somar = 0


do {

    numero = leia.questionInt("Digite um numero: ")

    if (numero > 0) {

        somar += numero        //Como funciona (+=)
        //Soma o valor da variavel esquerda com o da variavel direita e esse valor passa a ser o da variavel
        //se somar == 0 e numero == 5
        // ficando 0 + 5, se somar fosse = 15. Ficaria 15 + 5 = 20, logo somar seria 20
    }




} while (numero > 0)

console.log("A soma dos numeros positivos são: ",somar)