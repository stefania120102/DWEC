
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
        //console.log(id_circulo);
        }


        if(cirRandom==secuencia1[0]){
        document.getElementById(id_circulo).addEventListener("click",pintoCirculoRojo);
        //document.getElementById(id_circulo).removeAttribute("class");
        console.log("hh");
        }

}



