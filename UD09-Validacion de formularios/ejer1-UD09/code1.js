window.onload= function(){
    var boton_enviar= document.getElementById("enviar");
    boton_enviar.addEventListener("click",function(evento){validarFormulario(evento)});
};

function validarFormulario(evento){
    evento.preventDefault(); //para q no me salga el error del formulario
    var form_ok=true;
    //validar campos --> form_ok =false y return false
    var txtNombre = document.getElementById('nombre').value;
    if(txtNombre==null || txtNombre.length == 0){ //nombre
        alert('ERRPR: El nomrbe no puede estar vacío');
        form_ok=false;
    }

    var txtEdad = document.getElementById('edad').value;
    if(txtEdad == null || txtEdad.length == 0){
        alert('ERROR: El campo de edad no puede estar vacío');
        form_ok=false;
    }
    if(isNaN(txtEdad)){ //este puede ir en el mismo if
        alert('ERROR: La edad debe ser un número');
        form_ok=false;
    }
    if(txtEdad>=100){
        alert('ERROR: La edad no puede superar la cifra de 100');
        form_ok=false;
    }

    var txtCorreo = document.getElementById('correo').value;
    if(txtCorreo == null || txtCorreo.length == 0){
        alert('ERROR: El campo de correo no puede estar vacío');
        form_ok=false;
    }
    if(!(/\S+@\S+\.\S+/.test(txtCorreo)) ) {
        alert('ERROR: El correo no es válido');
        form_ok=false;
    }

   // var txtFecha = document.getElementById('fecha').value;

    /*var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    valor = new Date(ano, mes, dia);

    if( !isNaN(valor) ) {
        return false;
    }*/

    if(!chkEstado.checked){
        alert('El check debe estar selecionado');
        form_ok=false;
    }

    var rbtEstado = document.getElementById('radioButton');

    for(var i = 0;i<rbtEstado.length;i++){
        if(rbtEstado[i].checked){
            banderaRBTN = true;
        }
    }

    if(!banderaRBTN){
        alert('ERROR: Debe elegir una opción del radioButton');
        form_ok=false;
    }


    if(form_ok){
        alert("datos ok");
        var fromulario=document.getElementById("formulario");
        fromulario.submit();
    }
}