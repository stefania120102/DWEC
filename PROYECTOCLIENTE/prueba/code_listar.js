window.onload = function () {
        lista_datos();
}

function lista_datos(){
    $.ajax({
        url:"php/mostrar.php", // no paso ningun dato, solo recojo
    }).done(function(respuesta){
         // array de objetos, lo itero y pinto una fila por cada objeto

            $(".contenido").append(respuesta);
        
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}
