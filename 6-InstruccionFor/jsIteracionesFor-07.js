/*
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	var numero;
	var contadordivisores = 0;

	numero = parseInt(prompt("ingrese un numero"));
	
	for (var i = 1; i <= numero; i++ ){

		if(numero % i == 0 ){
			contadordivisores++;
			console.log( i );
		}
		
	}

console.log("los divisores son " +contadordivisores );
}





//ejercicio con array
function mostrar()
{
	var numero;
	var arraynumeros = [];
	var numeroMaximo;
	var numerominimo;

		for(var i = 1; i <= numero; i++ ){
			numero = parseInt(prompt("ingrese un numero"));
			
			arraynumeros.push(numero);

			numeroMaximo = arraynumeros;
			numerominimo = arraynumeros;
		}

console.log("los divisores son " +contadordivisores );
}