window.onload = function () {
    $("#crear").click(function(){
        anyadir_dato();
    });
}

function anyadir_dato(){
    var dato = {   //monto un objeto con los datos de la fila a insertar en la BD
            dni:$('#dni').val(),    
            nombre:$('#nombre').val(),
            direccion:$('#direccion').val(),
            email:$('#email').val(),
            pwd:$('#pwdAnyadir').val(), 
            administrador:$('#adminAnyadir').val()
            };
    console.log(dato)
    
    $.ajax({
        url:"php/anyadir_dato.php",
        type:"POST",
        data: dato,
        dataType:"json",
    }).done(function(respuesta){
        console.log(respuesta); 
       if(respuesta){
            alert("Dato insertado correctamente !");
            $("#tablaClientes").append("<tr><td>"+dato.dni+"</td><td>"+dato.nombre+"</td></tr>");
        }else{ 
            alert("Error en la insercion");
        } 
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
    ;

}
