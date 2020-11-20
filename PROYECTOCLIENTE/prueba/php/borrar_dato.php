<?php
	
	$dni = $_POST["dni"];
    $result = rand(0,1) == 1;

	header('Content-Type: application/json');	
	echo json_encode($result);

?>