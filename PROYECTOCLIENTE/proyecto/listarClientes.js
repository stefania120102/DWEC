window.onload = function () {
    lista_datos();
}

function lista_datos(){
$.ajax({
    url:"php/detalle.php", // no paso ningun dato, solo recojo
    type:"GET",
    data:'virtualmarket2',
}).done(function(respuesta){
    console.log(respuesta); // array de objetos, lo itero y pinto una fila por cada objeto
    for(var i in respuesta){
        console.log(i);
        $(".contenido").append("<tr><td>"+respuesta[i].dniCliente+"</td><td>"+respuesta[i].nombre+"</td><td>"+respuesta[i].direccion+"</td></tr>");
    }
}).fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
});
;

}