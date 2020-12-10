$(document).ready(function(){
    console.log("jquery ok");
    cargo_preguntas();
    $("#ok").on("click",function(){
        compruebo_preguntas();
        clearTimeout(temporizador);
    });
    $("#borrar").on("click",function(){
        $("#preguntas").html("");
        $("#acertadas").html("");
        cargo_preguntas();
    });
    //a
    var temp = 0;
    var temporizador = setInterval(function(){
        //console.log("estoy en temp");
        temp++;
        $("#tiempo").html("Tiempo: " + temp);

    },100);
    //aca

});

function cargo_preguntas(){
    $.ajax({ //llamada ajax
    url: "preguntas.json",
    type: "POST",
    dataType: "json", //importante
    })
    .done(function(datos){
        console.log(datos);
        for(i=0;i<datos.preguntas.length;i++){
            $("#preguntas").append("<div id='pregunta"+i+"'>"  +datos.preguntas[i].pregunta + "</div>");
            $.each(datos.preguntas[i].respuesta, function(key, value){
                console.log("key: " + key + "value: " + value);
                var radio = "<input type = 'radio' class='respuesta"+i+"' name='respuesta"+ i +"' value='"+key+ "'>"+key+ " = " +value+ "</input>";
                $("#preguntas").append(radio);
            });
            console.log(datos.preguntas[i].pregunta);
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("La solicitud ha fallado: " + textStatus + errorThrown);
    });
}

function compruebo_preguntas(){
    $.ajax({ //llamada ajax
        url: "preguntas.json",
        type: "POST",
        dataType: "json", //importante
    })
    .done(function(datos){
        //console.log(datos.preguntas[0].correcta);  Esto me da la respuesta correcta
        for(i=0;i<datos.preguntas.length;i++){
            var correctas=0;
        //console.log($(".respuesta"+i+":checked").val());    val porque me interesa el value que es a
        var respuesSeleccion = $(".respuesta"+i+":checked").val();
        var respuesCorrecta = datos.preguntas[i].correcta;
            if(respuesSeleccion == respuesCorrecta){
                $("#pregunta"+i).css({"background-color" : "green"});
                correctas++;
            }else{
                $("#pregunta"+i).css({"background-color" : "red"});
            }
            $("#acertadas").html("Acertadas = " +correctas);
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("La solicitud ha fallado: " + textStatus + errorThrown);  
    });
}