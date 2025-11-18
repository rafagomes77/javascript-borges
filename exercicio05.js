// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let numero01 = parseFloat(prompt("digite o primeiro numero"))
let numero02 = parseFloat(prompt("digite o segundo numero"))
let numero03 = parseFloat(prompt("digite o terceiro numero"))

if(numero01 < numero02 && numero02 < numero03){
    console.log ("os numeros estão em ordem crescente!")
}
else{
    console.log ("os numeros nao estao em ordem crescente")
}