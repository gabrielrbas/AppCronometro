var horas        = 0
var minutos      = 0
var segundos     = 0
var milisegundos = 0

var numeros = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
               "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
               "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", 
               "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", 
               "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", 
               "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", 
               "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", 
               "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", 
               "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", 
               "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", 
               "100"]

var tempo = numeros[horas] + ":" + numeros[minutos] + ":" + numeros[segundos] + ":" + numeros[milisegundos]
var contarTempo;
var mudaClasse = document.getElementById("conteudo")

// ***** Botoes *****

var botaoIniciar = document.createElement("button")
botaoIniciar.id = "botaoIniciar"
botaoIniciar.textContent = "Iniciar"
botaoIniciar.type = "button"
botaoIniciar.onclick = function() {
    iniciarTempo()
}

var botaoParar = document.createElement("button")
botaoParar.id = "botaoParar"
botaoParar.textContent = "Parar"
botaoParar.type = "button"
botaoParar.onclick = function() {
    pararTempo()
}

var botaoZerar = document.createElement("button")
botaoZerar.id = "botaoZerar"
botaoZerar.textContent = "Zerar"
botaoZerar.type = "button"
botaoZerar.onclick = function() {
    zerarTempo()
}

// ***** Funcoes *****

function paginaCronometro() {
    document.getElementById("valor").innerHTML = tempo
    document.getElementById("botoes").appendChild(botaoIniciar)
    document.getElementById("botoes").appendChild(botaoZerar)       
}

function iniciarTempo() {
    mudaClasse.className = "conteudoB"
    document.getElementById("botaoIniciar").remove()
    document.getElementById("botaoZerar").remove()
    document.getElementById("botoes").appendChild(botaoParar)
    document.getElementById("botoes").appendChild(botaoZerar)

    contarTempo = setInterval(() => {
        milisegundos++

        if (milisegundos === 100) {
            milisegundos = 0
            segundos++
        }
        if (segundos === 60) {
            segundos = 0
            minutos++
        }
        if (minutos === 60) {
            minutos = 0
            horas++
        }

        tempo = numeros[horas] + ":" + numeros[minutos] + ":" + numeros[segundos] + ":" + numeros[milisegundos]
        document.getElementById("valor").innerHTML = tempo
    }, 10);
}

function pararTempo() {
    mudaClasse.className = "conteudoA"
    document.getElementById("botaoParar").remove()
    document.getElementById("botaoZerar").remove()
    document.getElementById("botoes").appendChild(botaoIniciar)
    document.getElementById("botoes").appendChild(botaoZerar)

    clearInterval(contarTempo)
}

function zerarTempo() {
    horas        = 0
    minutos      = 0
    segundos     = 0
    milisegundos = 0    
    
    tempo = numeros[horas] + ":" + numeros[minutos] + ":" + numeros[segundos] + ":" + numeros[milisegundos]  
    document.getElementById("valor").innerHTML = tempo    
}

paginaCronometro()