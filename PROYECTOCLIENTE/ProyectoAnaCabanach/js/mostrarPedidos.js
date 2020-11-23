window.onload = function () {
    lista_datos();
}

function lista_datos(){
$.ajax({
    url:"php/mostrarPedidos.php",
}).done(function(respuesta){

        $("#tablaPedidos").append(respuesta);
    
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}