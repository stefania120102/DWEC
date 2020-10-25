
var secuencia1= new Array(9);
var contador=0;

function pintoCirculoRojo(){
    var numRandom= Math.floor(Math.random() * 9);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo
    console.log("El circulo pintado es el n\u00FAmero " + (numRandom +1));
    
    //DEBO HACER: si hace click resetea el tiempo

    document.getElementById(cirRandom).addEventListener("click",pintoCirculoRojo); //cuando haga click en el circulo random pintará otro nuevo
    contador++;
    console.log("N\u00FAmero de rondas: " + contador);//contador de número de rondas
    
}



    //document.getElementById(cirRandom).className="objetivo";


    //DEBO HACER: cuando haga click despintar el que está pintado








