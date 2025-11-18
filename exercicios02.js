// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

 let dia_da_semana = window.prompt ("informe um numero de 1 a 7:")
 switch (dia_da_semana) {
    case "1":
        console.log("segunda-feira")
        break;

        case "2":
        console.log("terça-feira")
        break;

        case "3":
        console.log("quarta-feira")
        break;

        case "4":
        console.log("quinta-feira")
        break;

        case "5":
        console.log("sexta-feira")
        break;

        case "6":
        console.log("sabado")
        break;

        case "7":
        console.log("domingo")
        break;
 
    default:
        console.log ("numero invalido")
        break;
 }