$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted! (skipping validation for cancel button)");
    }
});

$(document).ready(function(){
    console.log("jquery ok");
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
       }, "El valor no debe ser igual a arg.");


    $("#formulario").validate({
		rules: {
           nombre: {
               required: true
           },
           edad: {
            required: true,
            digits: true,
            min:18,
            },
            usuario: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            correo: {
                required: true,
                email: true
            },
            usuario: {
                required: true,
                minlength: 3,
                maxlength: 10
            },
            fecha: {
                required: true,
                date: true
            },
            radioButton: {
                required: true,
            },
            checkBox: {
                required: true
            },
            selector: { valueNotEquals: "a" }
            
        },
        messages: {
            edad: {
                required: "Por favor introduzca una edad de usuario",
                min: "Debes tener mas de 18 años"
            },
            usuario: {
                required: "Por favor introduzca nombre de usuario",
                minlength: "El usuario debe contner mas de dos letras"
            },
            password: {
                required: "Por favor introduzca una contraseña",
                minlength: "Tu contraseña debe tener al menos 5 caracteres"
            },
            confirm_password: {
                required: "Por favor ingrese una contraseña",
                minlength: "Tu contraseña debe tener al menos 5 caracteres",
                equalTo: "Ingrese la misma contraseña que la anterior"
            },
            correo: "Por favor introduzca un correo válido",
            radioButton: "Selecciona un radio button",
            checkBox: "Seleccina un check",
            select: { valueNotEquals: "Por favor selecciona una opción del select" }
        }
            
    })


});