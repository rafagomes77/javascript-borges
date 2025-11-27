let secao = document.getElementsByTagName("section")
let formularioelemento = document.getElementById("formulario")
let labelelemento = document.getElementById("label")

// cria um elemento no meu HTML
let novoparagrafo = document.createElement("p");

// poe um conteudo no p
novoparagrafo.textContent = "Oi, boneca, qual drink você gosta? (Aham)"; 

secao[0].appendChild(novoparagrafo)

// remover a tag label
formularioelemento.removeChild(labelelemento)