
const leia = require(`readline-sync`);

numeros = [2,5,1,3,4,9,7,8,10,6];

numeroBuscado = leia.questionInt("Insira o numero desejado: ");

posicao = numeros.indexOf(numeroBuscado)

if(numeroBuscado > 10){
    console.log("Insira um numero válido");

}else (numeroBuscado <=10)
{
    console.log(`O numero ${numeroBuscado} esta na posicao ${posicao}`);

}