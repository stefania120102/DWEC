<?php

// Obtenemos la accion por el metodo post.
$accion=$_POST["accion"];

//
echo($accion." : ");
// Si nos pide la hora, la damos en segundos desde 1 de enero de 1970
if($accion=="hora"){
	echo (time());
}
// si nos pide rand, damos un numero aletaroio.
else if($accion=="rand"){
	echo(rand(5,100000));
}
else{
	echo("No se envio ninguna accion correcta");
}
	
?> 
