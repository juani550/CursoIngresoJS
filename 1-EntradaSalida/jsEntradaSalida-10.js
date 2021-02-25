/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrardescuento()
{
	var importe;
	var descuento;
	var importefinal;
	//para calcular el nuevo importe deberia sumarle al importe original el descuento
	//el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100


	importe = txtIdImporte.value;
	importe = parseFloat(importe);
	
	descuento = importe * 25 / 100;

	importefinal = importe - descuento;

	
	txtIdResultado.value = importefinal

}

/*
function mostrardescuento()
{
	
	var nombreproducto;
	var importe;
	var porcentajeDescuento;

	var descuento;
	var preciofinal;

	nombreproducto = prompt("ingrese el nombre del producto ");
	
	importe = prompt("ingrese el importe del producto ");
	
	importe = parseFloat(importe);
	
	porcentajeDescuento = prompt("ingrese el porcentaje de descuento ");


	descuento = importe * porcentajeDescuento / 100;
	preciofinal = importe - descuento;

	alert("usted compro un " +nombreproducto+ con +porcentajeDescuento+ ", el precio final es " +preciofinal);

}
*/

