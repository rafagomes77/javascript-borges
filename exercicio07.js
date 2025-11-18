let peso = parseFloat(prompt("Informe seu peso (em Kg): "))
let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

let imc = peso / (altura*altura)

console.log("Seu IMC é: " + imc.toFixed(2))

if(imc < 18.5){
    console.log("Abaixo do peso")
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso Normal")
}
else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso")
}
else if(imc >= 30 && imc <= 34.9){
    console.log("Obesidade grau 1")
}
else if(imc >= 35 && imc <=39.9){
    console.log("Obesidade grau 2")
}
else{
    console.log("Obesidade grau 3")
}