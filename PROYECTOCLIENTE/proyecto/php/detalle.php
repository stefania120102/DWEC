<?php
session_start();
include "vistas/inicio.html";
if (isset($_SESSION['nombre'])){
	require "modelo.php";
	$link=new Bd;
	$prod= new Producto($_GET['dniCliente'],'','','','','');
	$product=$prod->buscar($link->link);
	require "vistas/verDetalle.php";
	
	require "vistas/mensaje.php";
	$link->link->close();
}else {
	$product="Es necesario estar registrado<br>";
	require "vistas/mensaje.php";
}
include "vistas/fin.html";