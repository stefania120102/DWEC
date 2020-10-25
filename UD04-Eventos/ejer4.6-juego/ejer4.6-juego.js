var secuencia1= new Array(9);
var contador = 0;
//var pintado=true;
var crono1;
var tiempo = 0;
var crono2;

//NO PUDE DESPINTAR LOS CIRCULOS PULSADOS ':/ 

function pintoCirculoRojo(){
    var numRandom= Math.floor(Math.random() * 9);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo
    console.log("El circulo pintado es el n\u00FAmero " + (numRandom +1));
    window.clearTimeout(crono1);
    crono1 = window.setTimeout(tiempoTerminado, 3000);

    document.getElementById(cirRandom).addEventListener("click",pintoCirculoRojo); //cuando haga click en el circulo random pintará otro nuevo
    //pintado=false;


    contador++;
    console.log("N\u00FAmero de rondas: " + contador);//contador de número de rondas
    rondasMaximas();
    //despintar();
}

function despintar(){
    //DEBO HACER: cuando haga click despintar el que está pintado y que pinte uno nuevo(pintoCirculoRojo)

    //if(pintado==false){
    //document.getElementById(cirRandom).removeAttribute("class");
    //}
}

    //Cada vez que pasen 3 segundos sin clickar en el circulo pintado mandar mensaje alerta
function cronometro(){

    tiempo++;
    document.getElementById("cronometro").innerHTML=tiempo;

}

function tiempoTerminado(){
    
    document.getElementsByClassName("objetivo")[0].removeEventListener("click", pintoCirculoRojo);
    window.clearInterval(crono2);
    alert("Has perdido, lo siento :(");
    location.reload();

}

function rondasMaximas(){ //Cuando el contador llegue a 100 mandará un mensaje y recargará la página

    if(contador==100){
        alert("Eres un crack");
        location.reload();
    }
   
}