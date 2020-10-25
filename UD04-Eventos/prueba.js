
var secuencia1= new Array(9);

function pintoCirculoRojo(){
    //console.log("circulo_" + numRandom);

    var numRandom= Math.floor(Math.random() * 8);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo 
    
    clickCirculo();
}

function clickCirculo(cirRandom){
    for(var i =0;i<secuencia1.length;i++){
        var id_circulo= "circulo_"+i;
        
        var hacer = document.getElementById(id_circulo).addEventListener("click",pintoCirculoRojo);
        
        console.log(id_circulo);
        }
        document.getElementById(id_circulo).removeAttribute("class");
}

/*function nuevoCirculo(){
    var numRandom2= Math.floor(Math.random() * 9);
    var cirRandom2 = "circulo_"+numRandom2;
    document.getElementById(cirRandom2).className="objetivo"; //objetivo en el css es el que dara el fondo rojo
    console.log("el circulo random nuevo es " + cirRandom2);
    var tiempoFuera=setTimeout("alert('Se acabo el tiempo');", 5000); 

}*/


/*-----*/
function pintoCirculoRojo(){
    var numRandom= Math.floor(Math.random() * 9);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo
    console.log("El circulo pintado es el n\u00FAmero " + (numRandom +1));
    
    if(pintado){
        document.getElementById(cirRandom).addEventListener("click",pintoCirculoRojo); //cuando haga click en el circulo random pintará otro nuevo
        pintado=false;
        console.log("aqui es true y se hace false");
    }

    
    contador++;
    console.log("N\u00FAmero de rondas: " + contador);//contador de número de rondas
    rondasMaximas();
}

function despintar(){
    //DEBO HACER: cuando haga click despintar el que está pintado
    if(pintado==false){
        document.getElementById(cirRandom).removeAttribute("class");
    }

    if(pintado==false){
        var cirRandom = "circulo_"+numRandom;
        document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo
        console.log("El circulo pintado es el n\u00FAmero " + (numRandom +1));
    }

}

function tiempo3Segundos(){
    //DEBO HACER: cada vez que pasen 3 segundos sin clickar en el circulo pintado mandar mensaje alerta
    //DEBO HACER: cada vez que clicke resetear el tiempo
}

function rondasMaximas(){
    if(contador==100){
        alert("Eres un crack");
    }
}





----
function obetenerCirculo(){
    var numRandom= Math.floor(Math.random() * 9);
    var cirRandom = "circulo_"+numRandom;

    return cirRandom;

}