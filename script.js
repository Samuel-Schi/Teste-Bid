import Countdown from "./countdown.js";

const tempoParaBID = new Countdown("5 May 2022 16:50:00 GMT-0300");
console.log(tempoParaBID._timeStampDiff);
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
    tempos.forEach((tempo , index) =>{
        tempo.innerHTML = tempoParaBID.total[index];
    });
}
mostrarTempo(); 
setInterval(mostrarTempo, 100);

