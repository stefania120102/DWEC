var tablero = new Array;
tablero[0] = ["_","_","_"];
tablero[1] = ["_","o","_"];
tablero[2] = ["_","_","_"];

var fin_partida =0;

console.log(tablero);


function pinto_tablero(){ // copio el array a los inputs

    for(var i=0; i<3 ; i++){
        for(var j=0; j<3 ; j++){  // recorro la matriz
            var id_casilla="casilla_"+i+j; 
            document.getElementById(id_casilla).value=tablero[i][j]; // copio los valors a los inputs, identificandolos por id
            if(tablero[i][j]=="o"){
                document.getElementById(id_casilla).disabled=true; // si es jugada de la maquina, deshabilito el input
            }
        }
    
    }
    //con esto recorro la matriz
}
//pinto barra baja en todas las casillas


/*function pinto_tablero(){  
            document.getElementById("casilla_00").value=tablero[0][0];
}
pinta un barra baja*/


 //leer todos los valores de los inputs y meterlos en tablero

 function jugada(){   // cuado hago click en boton ...
    for(var i=0; i<3 ; i++){
        for(var j=0; j<3 ; j++){
            var id_casilla="casilla_"+i+j;   
            tablero[i][j]=document.getElementById(id_casilla).value;  // copio los valores de los inputs a la matriz
            if((tablero[i][j]!="o")&&(tablero[i][j]!="_")){  // si algun input no es ni 'o' ni '_' tiene que se una x
                tablero[i][j]="x";
            }
        }
    }
    compruebo_filas_columnas_diagonales("x"); // compruebo si ganan las x
    tiradaMaquina();   // turno de la maquina
    compruebo_filas_columnas_diagonales("o"); // comprueba si ganan los o
  
}
    //console.log(tablero);
    //compruebaGanador();
    //tiradaMaquina();
    //compruebaGanador();
    //var valor_01 = document.getElementById("casilla_01").value;
    //console.log(valor_01);
    //recoje valor de solo el 01
    //comprobar si fila 1 2 y 3 son iguals para completar la diagonal

function compruebo_filas_columnas_diagonales(jugador){  // compruebo si se gana o empata

    if((tablero[0][0]==tablero[0][1])&&(tablero[0][1]==tablero[0][2])&&(tablero[0][2]==jugador)){ //filas
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[1][0]==tablero[1][1])&&(tablero[1][1]==tablero[1][2])&&(tablero[1][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[2][0]==tablero[2][1])&&(tablero[2][1]==tablero[2][2])&&(tablero[2][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][0]==tablero[1][1])&&(tablero[1][1]==tablero[2][2])&&(tablero[2][2]==jugador)){ //diagonales
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][2]==tablero[1][1])&&(tablero[1][1]==tablero[2][0])&&(tablero[2][0]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][0]==tablero[1][0])&&(tablero[1][0]==tablero[2][0])&&(tablero[2][0]==jugador)){ //columnas
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][1]==tablero[1][1])&&(tablero[1][1]==tablero[2][1])&&(tablero[2][1]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][2]==tablero[1][2])&&(tablero[1][2]==tablero[2][2])&&(tablero[2][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if(fin_partida==4){   // si la maquina lleva 4 turnos, se acaba en empate
        alert("EMPATE!!!!");
        location.reload();
    } 
}

function tiradaMaquina(){
    //aleatorio para añadir 0

    jugada_x = Math.floor(Math.random() * 3);
    jugada_y = Math.floor(Math.random() * 3);

    //console.log("jugadax" + jugada_x + "jugaday" + jugada_y) ;
    if(tablero[jugada_x][jugada_y] == "_"){
        tablero[jugada_x][jugada_y] = "O";
        fin_partida++;
        pinto_tablero();

    }else{
        
        tiradaMaquina();
       
    }
    /*document.getElementById("casilla_aleatoria").value = tablero[aleatorio_o][aleatorio_o];
    tablero.replace("_", "o");*/
}