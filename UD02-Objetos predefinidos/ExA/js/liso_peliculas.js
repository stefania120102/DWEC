window.onload = function () {
    document.getElementById("genero_peli").addEventListener("change",anyado);
    lista_datos();
	$("#abrir_modal").click(function(){
		$("#modal").show();
    });
    $("#cerrar_modal").click(function(){
        $("#modal").hide();
    });

    $("#enviar_carta").click(function(){
        anyadir_dato();
    });
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


function anyadir_dato(){
    var objeto_dato = {   //monto un objeto con los datos de la fila a insertar en la BD
            nombre:$('#titulo').val(),
            apellido:$('#anyo').val(),
            edad:$('#director').val(),
            apellido:$('#genero_peli option:selected').val(),
            apellido:$('#actor1').val(),
            apellido:$('#actor2').val()
            };
    console.log(objeto_dato)
    
    $.ajax({
        url:"PHP/anyadir_dato.php",
        type:"POST",
        data: objeto_dato, // paso el dato por el post
        dataType:"json",
    }).done(function(respuesta){
        console.log(respuesta);  // recojo la respuesta, que sera true o false
       if(respuesta){
            alert("Dato insertado correctamente !!!!");//si es correcta, inserto los datos en una fila nueva
            $("#lista").append("<tr><td>"+objeto_dato.nombre+"</td><td>"+objeto_dato.apellido+"</td><td>"+objeto_dato.edad+"</td></tr>");
        }else{ 
            alert("Error en la insercion"); //si no es correcta no inserto nada
        } 
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}