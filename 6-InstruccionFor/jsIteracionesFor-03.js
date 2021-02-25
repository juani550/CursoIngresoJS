/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var repeticiones;

	repeticiones = parseInt( prompt("pida la cantidad de veces") );

	for ( var i =0 ; i < /*limite*/ repeticiones; i++ ){ // [preguntar porque i es < a repeticiones]
		
		console.log( i + "Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN