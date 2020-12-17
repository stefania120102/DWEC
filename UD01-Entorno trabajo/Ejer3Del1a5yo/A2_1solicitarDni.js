/*  Realiza un programa que cada 20
     segundos (mediante setInterval) 
     solicite un DNI hasta que alguien 
     le escriba la cadena “-1”.  En ese
      momento, el programa debe mostrar 
      seguidas las letras de todos los DNIs 
      introducidos. */


        tiempo();

        //var dnis = getElementById("dni"); mal...

    function tiempo(){
        do {
            setInterval(mensaje, 20000);
            
        } while (dnis != -1);
        leoDni();
        var parar = setInterval(mensaje,20000);
        clearInterval(parar);
        
    }


    function mensaje(){
        alert("Introduzca DNI: ");
    }

      

    function leoDni(numeroDni){
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras[numeroDni%23];
    }

    