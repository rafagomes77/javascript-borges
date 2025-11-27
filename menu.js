let opcaoescolhida = 0;

do{
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
    switch (opcaoescolhida){
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

while(opcaoescolhida !== 0);

function login(){
    alert("login realizado com sucesso")
}
function calculoIMC(){

}
function verificarnumeroimparoupar(){

}
function calculomediadoaluno(){

}
function verificarsequenciadenumeros(){

}