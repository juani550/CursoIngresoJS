/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var numero;
	var negativos = 1;
	var positivos = 0;
	var seguir;

	do{
		numero = parseInt(prompt("ingrese numeros"));
		
		if(numero >= 0 ){
			positivos = positivos + numero;
		}
		else{
			negativos = negativos * numero;
		}

		seguir = prompt("quiere ingresar otro numero?");

	}while (seguir == "si");

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