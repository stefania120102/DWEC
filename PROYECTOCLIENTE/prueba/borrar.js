window.onload = function () {
    $(".borrar").click(function(){
        var fila_borrar = $(this).parent().parent();
         console.log(fila_borrar);   
         var objeto_dato = { 
            dni:fila_borrar.find('.dni').text(),
        };
        console.log(objeto_dato)
    
         $.ajax({
             url:"php/borrar_dato.php",
             type:"POST",
             data: objeto_dato, 
             dataType:"json",
         }).done(function(respuesta){
            console.log(respuesta);
             if(respuesta){
                 alert("Cliente borrado correctamente");
                fila_borrar.remove(); 
             }else{
                alert("Error al borrar")
            } 
         }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
         });

    });

}
