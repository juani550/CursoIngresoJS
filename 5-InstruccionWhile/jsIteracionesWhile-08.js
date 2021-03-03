/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var numero;
	var negativos = 1; // acumuladores y contadores se inicializan siempre
	var positivos = 0;
	var seguir;
	var flag = 0;

	do{
		numero = parseInt(prompt("ingrese numeros"));
		
		if(numero >= 0 ){
			positivos = positivos + numero;
		}
		else{
			flag = 1;//se pisa la variable  flag  debido a que queremos que este else se ejecute 1 vez e incrementando ese valor si se repite el bucle
			negativos = negativos * numero;
		}

		seguir = prompt("quiere ingresar otro numero?");

	}while (seguir == "si");

	if(flag == 0){
		negativos = 0;
	}

	txtIdSuma.value = positivos;
	txtIdProducto.value = negativos;
}









/*
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
*/