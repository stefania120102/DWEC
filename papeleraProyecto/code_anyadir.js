$(document).ready (function () {
    $("#crear").click(function(){
        anyadir_dato();
    });
});

function anyadir_dato(){
    var dato = {
            dniCliente:$('#dni').val(),    
            nombre:$('#nombre').val(),
            direccion:$('#direccion').val(),
            email:$('#email').val(),
            pwd:$('#pwd').val(), 
            administrador:$('#adminstrador').val()
            };
    
    $.ajax({
        url:"php/anyadir_dato.php",
        type:"POST",
        data: dato,
        dataType:"json",
    }).done(function(respuesta){
        console.log(respuesta);
       if(respuesta){
            alert("Dato insertado correctamente !");
            $("#tablaClientes").append("<tr><td>"+dato.dniCliente+"</td><td>"+dato.nombre+"</td><td><button class='editar'>Editar</button><button class='borrar'>Borrar</button></td></tr>");
        }else{ 
            alert("Error en la insercion");
        } 

    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}
