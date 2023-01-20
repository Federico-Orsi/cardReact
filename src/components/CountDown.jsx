import React, { useState } from 'react';




const CountDown = () => {
    
    
 // Calculador de Tiempo restante en MiliSegundos
const calcularTiempoRestante = (deadLine) =>{

    let now = new Date ();
    let tiempoRestante = (new Date (deadLine) - now + 1000)/1000;
    let segundosRestantes = ('0' + Math.floor(tiempoRestante % 60)).slice(-2);
    let minutosRestantes = ('0' + Math.floor(tiempoRestante / 60 % 60)).slice(-2);
    let horasRestantes = ('0' + Math.floor(tiempoRestante / 3600 % 24)).slice(-2);
    let diasRestantes = Math.floor(tiempoRestante / 86400);

return {
tiempoRestante, 
segundosRestantes,
minutosRestantes,
horasRestantes,
diasRestantes,
}

}

// Mostrar CountDown en Pantalla
const [countdownDias, setCountdownDias] = useState(0);
const [countdownHoras, setCountdownHoras] = useState(0);
const [countdownMinutos, setCountdownMinutos] = useState(0);
const [countdownSegundos, setCountdownSegundos] = useState(0);


const showCountDown = (deadLine) => {

const timer = setInterval(() => {
let tiempo = calcularTiempoRestante(deadLine);
setCountdownDias(tiempo.diasRestantes);
setCountdownHoras(tiempo.horasRestantes);
setCountdownMinutos(tiempo.minutosRestantes);
setCountdownSegundos(tiempo.segundosRestantes);

if(tiempo.tiempoRestante <= 1){
    clearInterval(timer);
    setCountdownDias("00") ;
    setCountdownHoras("00") ;
    setCountdownMinutos("00") ;
    setCountdownSegundos("00") ;
}
},1000)    

}


showCountDown('Jan 31 2023 18:08:00 GMT-0300');

   
       
    
    
    return (
        <>
        <div id="divCountDown">
      <div id="divTiempoRestanteEnNumeros" className="flex gap-5 justify-center">
        <p id="countdownDias" className="estilosCountdown">{countdownDias}</p>
        <p id="countdownHoras" className="estilosCountdown">{countdownHoras}</p>
        <p id="countdownMinutos" className="estilosCountdown">{countdownMinutos}</p>
        <p id="countdownSegundos" className="estilosCountdown">{countdownSegundos}</p>
      </div>
      <div id="divDiasHoras" className="flex gap-5 justify-center">
       <div>
        <p id="pDias">Días</p>
       </div>
       <p>Horas</p>
       <p>Min</p>
       <div>
        <p id="pSegundos">Seg</p>
       </div>
      </div> 
    </div>
        
        </>
    );
};

export default CountDown;