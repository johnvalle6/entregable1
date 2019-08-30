
class Carro {
    constructor(){
    this.closh=0;
    this.encender= (on,off);
    this.neutra= "N" ;
    this.acelerador=0;
    this.cambios= 0;
    this.ejemplo1=0;
    this.prom=0;

    
    }
}
var cambios = ["N", 20,40,60,70,80,90];

var prom= (20+40+60+70+80+90)/6;
 console.log(cambios);
 console.log ( cambios [6]);

var kilometro = Math.floor(Math.random() * 240 + 1);
var VelCam = prom;
console.log("velocidad promedio " + VelCam);


//var Vel = Math.floor(Math.random() * 80 + 1);
console.log(kilometro + "  kilometros");
var tiempo= kilometro/(VelCam);
alert("su recorrido es:" + " " + kilometro + "kilometros y durará " + tiempo.toFixed(2) + "minutos");
console.log("toFixed",tiempo.toFixed(2));

// var cronometro ;

function detenerse(){
  
    if (tiempo*100){
  clearInterval(cronometro);
  }
}
function paro(){
  if(cronometro=tiempo){
    console.log(paro);
  }
}
function carga(){
  contador_s=0;
  contador_m=0;
  s = document.getElementById("segundos");
  m = document.getElementById("minutos");
}
var cronometro = setInterval(

              function(){
                  if(contador_s==60)
                  {
                      contador_s=0;
                      contador_m++;
                      m.innerHTML = contador_m;   }
                      if(contador_m==60)
                      {
                           contador_m=0;
                        }
                    
                    s.innerHTML = contador_s;
                    contador_s++;
  
              }
              ,1000);
              
// boton1.innerHTML() {
//   const girarDerecha=(evento)=>{
//     if(evento.keycode===39){
//       boton1.style.backgraund="white";
//       boton1.style.color="black";
//     }
//   }
//   document.addEventListener("keyup",girarDerecha);
// }