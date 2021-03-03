/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var repeticiones;

	repeticiones = parseInt( prompt("pida la cantidad de veces") );

	for ( var i =0 ; i < repeticiones; i++ ){ /* i es limite porque arranca de 0 y despues aumenta de a 1(i++) hasta ser menor a las repeticiones*/
		
		console.log( i + "Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN