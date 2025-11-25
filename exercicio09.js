// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero
do{
   numero = parseInt(prompt("digite um numero (digite 0 para sair): "))
}while(numero !== 0)

    console.log("voce digitou 0. o programa foi encerrado!")
    