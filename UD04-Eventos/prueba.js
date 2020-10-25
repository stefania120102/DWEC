
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