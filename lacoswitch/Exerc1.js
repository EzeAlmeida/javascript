const leia = require('readline-sync')

let a, b, c;

    console.log("\nInsira 3 numeros A, B e C inteiros");

    a = leia.questionInt("\nDigite o valor para A: ");
    b = leia.questionInt("\nDigite o valor para B: ");
    c = leia.questionInt("\nDigite o valor para C: ");

    console.log("\nA",a, "+", "B",b,"+", "C",c);

        if(a + b > c){
            console.log("\nA soma de A + B é maior que C");


        }else if(a + b < c ){
            console.log("\nA soma de A + B é menor do que C");

        }else if(a + b == c){
            console.log("\nA soma de A + B é igual a C");
        }
