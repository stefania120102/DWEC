function funcion_ajax(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
            if(conexion.readyState == 4){
                if(conexion.status == 200){
                   var objeto_response=JSON.parse(conexion.responseText);
                   
                    for ( var i in objeto_response.clientes){
                       console.log(objeto_response.clientes[i]);
                       var tabla=document.createElement('table');
                       document.createElement('tr');
                       var dniC = document.createElement('td');
                       //option_cliente.setAttribute('value',objeto_response.clientes[i].dni);

                       dniC.innerHTML=objeto_response.clientes[i].dni;
                       document.getElementById("contenido").appendChild(dniC);

                       console.log(objeto_response.clientes[i]);
                    
                        var nombreC = document.createElement('td');
                        //option_cliente.setAttribute('value',objeto_response.clientes[i].dni);
                        document.createElement('tr');
                         nombreC.innerHTML=objeto_response.clientes[i].nombre;
                        document.getElementById("contenido").appendChild(nombreC);
                   }
                }
            }
    };

    conexion.open('GET','clientes.json',true);
    conexion.send(); 

}