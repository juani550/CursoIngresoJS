/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var i;
	var acumulador;
	var numeroIngresado;
	var promedio;

	i = 0;  // esta variable que indica en la condicion la cantidad de veces que se va a repetir el while., se debe inicializar siempre  
	acumulador=0;  // los acumuladores siempre se deben inicializar
 
	while( i < 5 ){

		numeroIngresado = prompt("ingrese los numeros:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		i++;
	}

	promedio = acumulador / 5;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}
//FIN DE LA FUNCIÓN


/*
//ejercicio de practica 
function mostrar()
{
//pedir a usuario 5 numeros por prompt se suma y se muestra por alert.

	var numero;
	var suma;
	var contador = 1;
	var acumulador = 0;

	while(contador <= 5){
		numero = parseInt(prompt("ingrese un numero"));

		acumulador = acumulador + numero;

		

		contador = contador + 1;
	}
	alert("el resultado de la suma es " +acumulador );

}
*/

//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

