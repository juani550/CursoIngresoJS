/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var numero;
	var contadorprimos = 0;

	numero = parseInt(prompt("ingrese un numero"));

	for (var i = 1; i <= numero; i++ ){

		if(numero % i == 0 ){
			contadorprimos++;
			console.log( i );
		}
	}

console.log("los divisores son " +contadorprimos );

}