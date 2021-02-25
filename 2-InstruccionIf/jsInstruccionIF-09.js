/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	var numero;
	var maximoResultado = 10;
	var minimoResultado = 1;

	numero = Math.round(Math.random() * (maximoResultado - minimoResultado) + minimoResultado);

	alert(numero);	
}
//FIN DE LA FUNCIÓN