/*var validator = new FormValidator('formulario',[{
    name: 'nombre',
    display:'required',
    rules:'required'
}, {
    name:'edad',
    display:'required',
    rules:'max_length[100]|alpha_numeric'
}

], function(errors, event) {
    if (errors.length > 0) {
    }
});*/

$(document).ready(function(){
    console.log('jquery ok');

    $('#formulario').validate({
        rules: {
            nombre:{
                required:true,
            },
            edad:{
                required:true,
                max:100,
                min:18
            },
            correo: { //Correo electrónico con formato correcto

            },
            fecha: { //Fecha debe ser posterior a hoy

            },
            selector: { //Se debe elegir una opción del select, y esta no puede ser la primera

            },
            checkBox: { //Se debe seleccionar el checked

            },
            radioButton: { //Se debe seleccionar un radio button

            }
        },//fin rules
        messages:{
            nombre:{
                required: "Dime tu nombre",
            },
            edad: {
                required: "Añade una edad",
                max: "Demasiado alto",
                min: "Demasiado bajo"
            }
        }
    });
});//del document ready

$.validator.setDefaults({
    submitHandler: function() { alert("Enviado")}
})