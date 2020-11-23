$(document).ready(function(){
	$("#modalPedidos").hide();

	$("#verCajaPedidos").click(function(){
		$("#modalPedidos").show();
	});
	
	$("#cancelarPedido").click(function(){
		$("#modalPedidos").hide();
		//alert("Operación cancelada");
	});
	/*$("#cerrar").click(function(){
		$("#modalPedidos").hide();
	});*/

});