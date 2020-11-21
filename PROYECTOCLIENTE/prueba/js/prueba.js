$(document).ready (function () {
    $("#crear").click(function(){
       var dato=$('#nuevosDatos').serialize();
      
        $.ajax({
            url:"php/prueba.php",
            type:"POST",
            data: dato,
            success:function(e){
                if(e==1){
                    alert("El cliente ha sido insertado con exito");
                    $("#tablaClientes").append("<tr><td>"+dato.dniCliente+"</td><td>"+dato.nombre+"</td><td><button class='editar'>Editar</button><button class='borrar'>Borrar</button></td></tr>");
                }else{
                    alert("Error al insertar");
                }

            }
            
        });

        return false;
    });
});
