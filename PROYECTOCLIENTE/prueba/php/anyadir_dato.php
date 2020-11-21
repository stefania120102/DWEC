<?php
	$dni = $_POST["dni"];
	$nombre = $_POST["nombre"];
	$direccion = $_POST["direccion"];
	$email = $_POST["email"];

	if(isset($dni)){
		alert("El cliente ya existe");
		$result=true;	
	}else{
		$result=false;
	}

	header('Content-Type: application/json');	
	echo json_encode($result);

?>