/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	var numeros;
	var negativos;
	var positivos;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var promPositivos;
	var promNegativos;
	var Diferencia;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var continuar;


	do{
		numeros = parseFloat(prompt("ingrese numeros ")); 
	
		if(numeros > 0 ){
			acumuladorPositivos += numeros;
			cantidadPositivos++;
		}
		else if(numeros < 0 ){
			acumuladorNegativos += numeros;
			cantidadNegativos++;
		}
		else if(numeros == 0 ){
			cantidadCeros++;
		}

		if(numeros % 2 == 0 ){
			cantidadPares++;
		}

		continuar = prompt("ingresae mas numeros");
	}while(continuar == "si");

	promPositivos = acumuladorPositivos / cantidadPositivos;
	promNegativos = acumuladorNegativos / cantidadNegativos;

	Diferencia = cantidadPositivos - cantidadNegativos ;

	document.write("la suma de negativos es: "+cantidadPositivos + "la suma de positivos es: "+ +"la cantidad de positivos es: "+ +"la cantidad de negativos es: "+ +"la cantidad de ceros es: "+ +"la cantidad de pares es: "+ +"el promedio de positivos es: "+ +"el promedio de negativos es: "+ +"la diferencia es: " );


}
//FIN DE LA FUNCIÓN



















/*
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN
*/