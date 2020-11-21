<?php

    include("bd.php");
    
        $dni = $_POST['dni'];
        $nombre = $_POST['nombre'];
        $direccion = $_POST['direccion'];
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];
        $administrador = $_POST['administrador'];

    $consulta="INSERT INTO clientes (dni,nombre,direccion,email,pwd,administrador) VALUES ('$dni','$nombre','$direccion','$email','$pwd','$administrador')";
    echo mysqli_query($conex,$consulta);
    
?>