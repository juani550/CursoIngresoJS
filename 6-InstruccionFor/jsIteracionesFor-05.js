/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	var numero;

	for ( ; ; ){ //no hace falta colocar parametros pórque el usuario solo ingresa numeros y se va a cortar la iteracion CUANDO PONGA 9 
		
		numero = parseInt(prompt("ingrese un numero"));
			
		if( numero == 9){
			break;
		}
		alert("ingreso el numero " +numero );
	}
}//FIN DE LA FUNCIÓN