
var secuencia1= new Array(9);

function pintoCirculoRojo(){
    var numRandom= Math.floor(Math.random() * 8);
    var cirRandom = "circulo_"+numRandom;
    document.getElementById(cirRandom).className="objetivo"; //objetivo en el css es el que dara el fondo rojo 
    
    clickCirculo();
}

function clickC(){

}

function clickCirculo(cirRandom){

    for(var i =0;i<secuencia1.length;i++){
        var id_circulo= "circulo_"+i;
        
        //var hacer = document.getElementById(id_circulo).addEventListener("click",pintoCirculoRojo);
        
        console.log(id_circulo);
        }
        
        document.getElementById(id_circulo).removeAttribute("class");

}