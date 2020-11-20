<?php

$base = include("bd.php");

if($base){
    $consulta = "SELECT idPedido,dniCliente, fecha FROM pedidos";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        while($row = $resultado-> fetch_array()){
            $idPedido= $row['idPedido'];
            $dni=$row['dniCliente'];
            $fecha= $row['fecha'];
            ?>
            <div class="Pedidos">  
                <div>
                    <tr><td><?php echo $idPedido?>&nbsp;</td><td><?php echo $dni?>&nbsp;</td><td><?php echo $fecha?></td><input type="button" value="Editar" class="editar"><input  type="reset" value="borrar" class="borrar"> </tr>
                </div>
            </div>
            <?php

        }
    }
}
?>