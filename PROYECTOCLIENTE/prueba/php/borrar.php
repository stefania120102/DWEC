<?php

    include("bd.php");
        $dni = $_POST['dni'];

            $consulta="DELETE FROM 'clientes' WHERE 'clientes'.'dniCliente'";
            echo mysqli_query($conex,$consulta); 
        
?>