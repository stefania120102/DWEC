<?php
/*if($conex){
    echo "todo correcto";
}*/
$base = include("bd.php");

if($base){
    $consulta = "SELECT dniCliente,nombre FROM clientes";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        while($row = $resultado-> fetch_array()){
            $dni=$row['dniCliente'];
            $nombre= $row['nombre'];
            ?>
            <div class="clientes">
                
                <div>
                    <tr><td><?php echo $dni." "?></td><td><?php echo $nombre?></td></tr>
                </div>
            </div>
            <?php

        }
    }
}
?>