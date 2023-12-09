let tempoMinutos = document.getElementById("resultadoMinutos")
let tempoSegundos = document.getElementById("resultadoSegundos")
let tempoHoras = document.getElementById("resultadoHoras")
let tempoDecimos = document.getElementById("resultadoDecimos")
let butaoI = document.getElementById("botaoInicar")

var decimos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var interval;

function tempo(){
    tempoSegundos.innerHTML = segundos < 10 ? '0' + segundos : segundos ;
    tempoMinutos.innerHTML = minutos < 10 ? '0' + minutos : minutos;
    tempoDecimos.innerHTML = decimos < 10 ? '0' + decimos : decimos;
    tempoHoras.innerHTML = horas < 10 ? '0' + horas : horas;
    decimos++
    if(decimos > 9){
        decimos = 0;
        segundos++
    } else if(segundos > 59){
        segundos = 0;
        minutos++
    } else if (minutos > 59){
        minutos = 0;
        horas++
    }
}


function iniciar(){
   interval = setInterval(tempo , 100)
   butaoI.disabled = true;
   butaoI.style.background = "rgb(17, 154, 17)";
   butaoI.style.color = "white";

}

function parar(){
    clearInterval(interval)
    butaoI.disabled = false;
    butaoI.style.background = "#F0F0F0"
    butaoI.style.color = "#000000"

}

function resetar(){
    clearInterval(interval)
    tempoSegundos.innerHTML = "00"
    tempoMinutos.innerHTML = "00"
    tempoDecimos.innerHTML = "00"
    tempoHoras.innerHTML = "00"
    decimos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    butaoI.disabled = false;
    butaoI.style.background = "#F0F0F0"
    butaoI.style.color = "#000000"
}