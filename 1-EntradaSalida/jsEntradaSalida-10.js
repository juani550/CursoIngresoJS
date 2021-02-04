/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrardescuento()
{
	var importe;
	var importefinal;
	var descuento;
	//para calcular el nuevo importe deberia sumarle al importe original el descuento
	//el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100


	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	importefinal = importe - descuento;

	 document.getElementById("txtIdResultado").value = importefinal

//no se imprime

}
