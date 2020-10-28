var conexion;
function function_ajax() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function() {
        if(conexion.readyState == 4){
            if(conexion.status ==200){
            objeto_response=JSON.parse(conexion.responseText);
            document.getElementById("provincias").innerHTML= objeto_response.provincias;

        
            }
        }
        
    };
    conexion.open('GET','provincias.json',true);
    conexion.send();
}

function function_ajax() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function() {
        if(conexion.readyState == 4){
            if(conexion.status ==200){
            objeto_response=JSON.parse(conexion.responseText);
            for (var i = 0; i < cp.length; i++) {
                const element = cp[i];
                //console.log(nom[0].value + nom[1].value + nom[2].value);
           
            }
            document.getElementById("nom1").innerHTML= objeto_response.cp[0];
            document.getElementById("nom2").innerHTML= objeto_response.cp[1];
            document.getElementById("nom3").innerHTML= objeto_response.cp[2];


        
            }
        }
        
    };
    conexion.open('GET','provincias.json',true);
    conexion.send();
}

