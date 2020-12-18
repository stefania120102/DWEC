window.onload = function () {
    document.getElementById("genero_peli").addEventListener("change",anyado);
    lista_datos();
	$("#abrir_modal").click(function(){
		$("#modal").show();
    });
    $("#cerrar_modal").click(function(){
        $("#modal").hide();
    })
}

function lista_datos(){
$.ajax({
    url:"PHP/listo_peliculas.php", // no paso ningun dato, solo recojo
    type:"POST",
    dataType:"json",
}).done(function(respuesta){
    console.log(respuesta); // array de objetos, lo itero y pinto una fila por cada objeto
    for(var i in respuesta){
        console.log(i);

        $("#lista_pelis").append("<tr><td> ID: "+respuesta[i].id+"</td></tr><tr><td>"+respuesta[i].titulo+"</td></tr>");

        console.log(respuesta[i].genero)

    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}

function abrirModal(){
    
}

function anyado(){
    for(var i=0; i<options.length;i++){ //buscando el option seleccionado
        if(options[i]){  // para recoger el atributo generoValor del elegido
            var generoValor = parseInt(options[i].getAttribute("value")); //quiero el valor de generoValor
            console.log(generoValor); //aqui me da drama
            spanGnro.style.display= "inline-block"; // para poder modificar anchura
            spanGnro.style.width= (generoValor*2)+"px"; // ancho = escaños * 2
            spanGnro.textContent= options[i].text; //Texto
            spanGnro.style.backgroundColor=options[i].value; //color
            spanGnro.addEventListener("click", function(){ //gestiono evento para borrar
                this.remove();
                total-=generoValor;
                document.getElementById("total").innerHTML="TOTAL :"+total;
            } );
            spanGnro.addEventListener("mouseenter",function(){ //cuando entra raton
                document.getElementById("generoValor_spanGnro").innerHTML="Escaños :"+generoValor;
            })
            spanGnro.addEventListener("mouseleave",function(){ //cuando sale raton
                document.getElementById("generoValor_spanGnro").innerHTML="";
            })
            document.getElementById("panel").appendChild(spanGnro); // lo añado
            total += generoValor;
            document.getElementById("total").innerHTML="TOTAL :"+total;
        }
    }
}
