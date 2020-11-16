<?php
foreach ($product as $key => $value);

echo $product['dniCliente']."<br><br>";
echo "<b>".$product['nombre']."</b><br><br>";
echo "Origen: ".$product['dirección']."<br>";
echo "Marca: ".$product['email']."<br>";
echo "Categoria: ".$product['pwd']."<br>";
echo "Peso: ".$product['administrador']."<br>";

echo "Cantidad<input type='number' name='cantidad' value=1><br>";
echo "<input type='submit' src='vistas/verCarrito.php' value='Comprar'><br>";
