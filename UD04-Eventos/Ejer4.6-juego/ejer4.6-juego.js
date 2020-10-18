
var secuencia1= new Array(9);
//secuencia1=["_","_","_","_","_","_","_","_","_"];

function pintoCirculoRojo(){
    
    for(var i =0;i<secuencia1.length;i++){
    var id_circulo= "circulo_"+i;
    console.log(id_circulo);
    
    }
    //console.log(secuencia1[5]);
    //console.log("circulo_" + numRandom);

    var numRandom= Math.floor(Math.random() * 8);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo 
}

document.getElementById(id_circulo).addEventListener("click",pintoCirculoRojo);


function clickCirculo(){
    pintoCirculoRojo();
}

