// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numero = parseInt(prompt("digite um numero para contagem regressiva:"))

console.log("contagem regressiva esta começando em: " + numero)

while (numero >= 0){
    console.log(numero)
    // numero = numero - 1
    numero--
}

console.log ("contagem regressiva finalizada!")