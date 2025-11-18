// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = Number.parseFloat(prompt("coloque a primeira nota"))
let nota2 = Number.parseFloat(prompt("coloque a segunda nota"))
let nota3 = Number.parseFloat(prompt("coloque a terceira nota"))
let nota4 = Number.parseFloat(prompt("coloque a quarta nota"))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("a media do aluno é:" + media)

if(media>= 7){
    console.log("APROVADO")
}
else if (media <7 && media >=5){
    console.log("recuperação")
}
else{
    console.log ("REPROVADO")
}