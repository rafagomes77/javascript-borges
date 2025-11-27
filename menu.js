let opcaoescolhida = 0;

do {
    opcaoescolhida = parseInt(prompt(`
    ==========MENU DE EXERCICIOS ==========

    digite um numero das opções:
    0 - sair
    1 - login
    2 - imc
    3 - par ou impar
    4 - media do aluno
    5 - numero crescente, decrescente ou aleatorio

    `));
    switch (opcaoescolhida) {
        case 0:
            alert("volte sempre!")
            break;
        case 1:
            login()
            break;
        case 2:
            calculoIMC()
            break;
        case 3:
            verificarnumeroimparoupar()
            break;
        case 4:
            calculomediadoaluno()
            break;
        case 5:
            verificarsequenciadenumeros()
            break;

        default:
            alert("digite um numero valido!")
            break;
    }
}

while (opcaoescolhida !== 0);

function login() {
    let usuario = prompt("informe seu usuario:")

    let senha = prompt("informe sua senha:")

    if (login == "admin" && senha == "senha123") {
        alert("login bem sucedido!")
    }
    else {
        alert("você nao tem permissão de acesso!")
    }

}
function calculoIMC() {
    let peso = parseFloat(prompt("Informe seu peso (em Kg): "))
    let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

    let imc = peso / (altura * altura)

    alert("Seu IMC é: " + imc.toFixed(2))

    if (imc < 18.5) {
        alert("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso Normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidade grau 2")
    }
    else {
        alert("Obesidade grau 3")
    }
}
function verificarnumeroimparoupar() {
    let numero = parseInt(prompt("informe um numero inteiro:"))
    if (numero % 2 == 0) {
        alert("o numero é par")
    } else {
        alert("o numero é impar")
    }
}
function calculomediadoaluno() {
    let nota1 = Number.parseFloat(prompt("coloque a primeira nota"))
    let nota2 = Number.parseFloat(prompt("coloque a segunda nota"))
    let nota3 = Number.parseFloat(prompt("coloque a terceira nota"))
    let nota4 = Number.parseFloat(prompt("coloque a quarta nota"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    alert("a media do aluno é:" + media)

    if (media >= 7) {
        alert("APROVADO")
    }
    else if (media < 7 && media >= 5) {
        alert("recuperação")
    }
    else {
        alert("REPROVADO")
    }
}
function verificarsequenciadenumeros() {
    let numero01 = parseFloat(prompt("digite o primeiro numero"))
    let numero02 = parseFloat(prompt("digite o segundo numero"))
    let numero03 = parseFloat(prompt("digite o terceiro numero"))

    if (numero01 < numero02 && numero02 < numero03) {
        alert("os numeros estão em ordem crescente!")
    }
    else {
        alert("os numeros nao estao em ordem crescente")
    }
}