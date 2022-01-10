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

function paginaCronometro() {
    document.getElementById("botoes").appendChild(botaoIniciar)
    document.getElementById("botoes").appendChild(botaoZerar)
}

paginaCronometro()

function iniciarTempo() {
    document.getElementById("botaoIniciar").remove()
    document.getElementById("botaoZerar").remove()
    document.getElementById("botoes").appendChild(botaoParar)
    document.getElementById("botoes").appendChild(botaoZerar)
}

function pararTempo() {
    document.getElementById("botaoParar").remove()
    document.getElementById("botaoZerar").remove()
    document.getElementById("botoes").appendChild(botaoIniciar)
    document.getElementById("botoes").appendChild(botaoZerar)
}

function zerarTempo() {
    
}