var altura = 0;
var largura = 0;
var vidas = 1;
var tempoX = 20;
var tempoCriaMarcelo = 2000;
var audioTapa = new Audio("imagens/shot.WAV");

var nivel = window.location.search.replace("?", "");
if (nivel === "Normal") {
    tempoCriaMarcelo = 2000;
} else if (nivel === "Difícil") {
    tempoCriaMarcelo = 1500;
} else {
    tempoCriaMarcelo = 1000;
}

var cronometro = setInterval(function () {
    tempoX -= 1;
    if (tempoX < 0) {
        clearInterval(cronometro);
        clearInterval(criaMarcelo);
        window.location.href = "youwin.html";
    } else {
        document.getElementById("crono").innerHTML = tempoX;
    }
}, 1000);


function setTamanhoPalco() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

setTamanhoPalco();

function setPos() {
    if (document.getElementById("celo")) {
        document.getElementById("celo").remove();
        
        if (vidas > 3) {
            window.location.href = "gameover.html";
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posX = Math.floor(Math.random() * largura);
    var posY = Math.floor(Math.random() * altura);

    posX = posX > (largura - 75) ? (posX - 75) : posX;
    posY = posY > (altura - 90) ? (posY - 90) : posY;

    var celo = document.createElement("img");
    celo.src = "imagens/Marcelo.png";
    celo.className = tamMarcelo() + " " + orientaMarcelo();
    celo.style.left = posX + "px";
    celo.style.top = posY + "px";
    celo.style.position = "absolute";
    celo.id = "celo";
    celo.onclick = function () {
        audioTapa.play();
        this.remove();
    }

    document.body.appendChild(celo);
}

function tamMarcelo() {
    var classe = Math.ceil(Math.random() * 3);

    switch (classe) {
        case 1:
            return "marcelo1";
        case 2:
            return "marcelo2";
        case 3:
            return "marcelo3";
    }
}

function orientaMarcelo() {
    var classe = Math.ceil(Math.random() * 2);

    switch (classe) {
        case 1:
            return "ladoA";
        case 2:
            return "ladoB";
    }
}