window.onload = function () {
    select();
}

function select(){
    $.ajax({
        url:"php/select.php",
    }).done(function(respuesta){

            $("#select").append(respuesta);
        
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}