<?php

	include("bd.php");


	if(isset($_POST['crear'])){

		$dni = $_POST["dni"];
		$nombre = $_POST["nombre"];
		$direccion = $_POST["direccion"];
		$email = $_POST["email"];
		$pwd = $_POST["pwd"];
		$administrador = $_POST["administrador"];
		
		$consulta = "INSERT INTO clientes(dniCliente,nombre,direccion,email,pwd,administrador) VALUES ('$dni','$nombre','$direccion','$email','$pwd','$administrador')";
		$resultado = mysqli_query($conex,$consulta);//$base
		if($resultado){
			?>
			<h3 class="correcto">Insertado correctamente</h3>
			<?php
		}else{
			?>
			<h3 class="error">Error</h3>
			<?php
		}
	}

?>