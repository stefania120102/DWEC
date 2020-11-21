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
                    <tr><td class="dni"><?php echo $dni." "?></td><td><?php echo $nombre?></td><input type="button" value="Editar" class="editar"><input  type="reset" value="borrar" class="borrar"> </tr>
                </div>
            </div>
            <?php

        }
    }
}
?>