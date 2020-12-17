    function palindromo(numOriginal){


       var numInversa =numOriginal.reverse();
        
       /* var numAux = "";
        var  numInverso = "";

		numAux = numOriginal.toLowerCase().replaceAll("\\s",""); 
		
		for (var i = numAux.length()-1; i >= 0; i--) {
			numInverso += numAux.charAt(i);			
		}*/
		
		//Comparamos los dos números
		if(numInversa.equals(numAux)) {
			return true;
		}else {
			return false;
		}
    }

    function primos(numOriginal){
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
        // Si no se pudo dividir por ninguno de los de arriba, sí es primo
        return true;
    }