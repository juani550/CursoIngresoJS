/*
al presionar el botón repetir hasta que utilizamos 'BREAK'
*/
function mostrar()
{
	for (var i = 0; i < 5; i++){ //es un ejemplo del video los vaores

		console.log( i );
		if( i == 3 ){
			break;	//el break tiene la funcion de romper con el lazo iterati voy va a la linea 13 (cuando llegas a break sale del for en este caso  )
		}
	}

}//FIN DE LA FUNCIÓN