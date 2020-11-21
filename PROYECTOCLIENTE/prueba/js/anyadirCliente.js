$(document).ready(function(){
	$("#modalCliente").hide();


	$("#verCajaCliente").click(function(){
		$("#modalCliente").show();
	});
	
	$("#ocultarCajaCliente").click(function(){
		$("#modalCliente").hide();
		alert("Operación cancelada");
	});

});