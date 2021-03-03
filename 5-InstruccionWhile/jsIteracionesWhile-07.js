/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var promedio;

	do {
		
		numeroIngresado = prompt("ingrese los numeros:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		
		contador++;

		respuesta = prompt("quiere ingresar mas numeros?");

		
	} while( respuesta == "si" );

	promedio = acumulador / numeroIngresado;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;




}//FIN DE LA FUNCIÓN



/*
ejercicio practica

function mostrar()
{
//pedir a usuario 2 numeros por prompt se suma y se muestra por alert.

	var numero1;
	var numero2;
	var suma;

	numero1 = parseInt(prompt("ingrese un numero"));
	numero2 = parseInt(prompt("ingrese otro numero"));

	suma = numero1 + numero2;

	alert("el resultado de la suma es " +suma );

}
*/