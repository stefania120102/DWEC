<?php
/*if($conex){
    echo "entro";
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
                    <tr><td class="dni"><?php echo $dni?></td><td><?php echo $nombre?></td><button class='editar'>Editar</button><button class='borrar'>Borrar</button> </tr>
                </div>
            </div>
            <?php

        }
    }
}
?>