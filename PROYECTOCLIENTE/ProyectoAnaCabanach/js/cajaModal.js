$(document).ready(function(){
	$("#modalCliente").hide();


	$("#verCajaCliente").click(function(){
		$("#modalCliente").show();
	});
	
	$("#cancelarCliente").click(function(){
		$("#modalCliente").hide();
		//alert("Operación cancelada");
	});
	/*$("#cerrar").click(function(){
		$("#modalCliente").hide();
	});*/

});