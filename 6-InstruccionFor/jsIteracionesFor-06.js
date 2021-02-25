/*
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	//declaro variables
	var numero;
	var contadorpares = 0;
	//pido numeros
	numero = parseInt(prompt("ingrese un numero"));
	// tengo que hacer que una varianle tome
	// los valores del 1 al numero ingresado
	for (var i = 1; i <= numero; i++ ){	
		//para cuando de los valores que toma la variable analizo la paridad 
		//cuando encuentro un par lo cuento y lo muestro

		if(i % 2 == 0 ){
			contadorpares++;
			console.log( i );
		}
	}

console.log("los numeros pares son " +contadorpares );

}//FIN DE LA FUNCIÓN

