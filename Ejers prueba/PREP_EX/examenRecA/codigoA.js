$(function(){
    // console.log("funcionaa");
    $('#a_modal').on("click", function(){
        $('#modal').show();
    });

    $('#c_modal').on("click", function(){
        $('#modal').hide();
    });

});

function listo_municipios(){

};

function anyado_municippio(){
    var hoy = new Date();
    var hora= hoy.toLocaleTimeString();
    var dia = hoy.toLocaleDateString();
    var fecha = hora + ' ' + dia;

    var datos = {
        n:$('#municipio').val(),
        c:$('#cielo:selected').val(),
        max:$('#max').val(),
        min:$('#min').val(),
        fecha:fecha
    }
    console.log(datos);


    $.ajax(
    {
        url: 'php/anyado_municipio.php',
        data: datos,
        type: 'POST',
        dataType: 'json'
    }.done(function(data){
        console.log("Todo correcto");
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log("Lo siento hubo un error");
    })
    
    );
}