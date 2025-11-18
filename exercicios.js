// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let usuario = prompt("informe seu usuario:")

let senha = prompt ("informe sua senha:")

if(login == "admin" && senha == "senha123"){
    console.log ("login bem sucedido!")
}
else{
    console.log("você nao tem permissão de acesso!")
}

