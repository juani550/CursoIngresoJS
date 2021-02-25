/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var indice = 1; //declarar la variable de control 

	while(indice <= 10 ){  //variable de control(condicion)

		alert(indice);
		
		//modificacion de la variable de control
		indice = indice + 1; //se puede poner tambien: indice ++ y se aumenta en 1 
	
	}
}
//FIN DE LA FUNCIÓN



/*
alumno: Morsa Juan
ejercicio: 1 con while 
division: 1G
*/

/*
function mostrar()
{
	var numeroIngresado;
	var contadordeInteraccion = 0;
	var contadordeCondicion = 0;
	

	while( contadordeInteraccion < 5 ){
	
		numeroIngresado = parseInt( prompt("ingrese los numeros ") );
		
		if( indice >= 10 && indice <= 20 ){
			contadordeCondicion++;
		}

	}
	contadordeInteraccion = contadordeInteraccion + 1;
	
}
*/