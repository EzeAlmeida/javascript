const leia = require('readline-sync')

let a;


a = leia.questionInt("\nDigite um numero: ");


if (a % 2 == 0 && a >= 0 ) {
    console.log("\nO numero", a, "É par e positivo!");

}else if (a % 2 == 0 && a < 0){
    console.log("O numero", a, "É Par e negativo!");


}else if (a % 2 > 0 && a >= 0 ) {
    console.log("\nO numero", a, "É impar e positivo!");

}else if(a % 2 <= 0 && a < 0 ){

    console.log("O numero", a, "É impar e negativo!");
}   