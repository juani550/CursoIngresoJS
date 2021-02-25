/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

/*
function mostrar()
{
	//tomo la edad  
	
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseFloat(edad);

	if( edad < 13 || edad > 17 )
	{	
		alert("usted no es adolecente");
	}
}
*/
//FIN DE LA FUNCIÓN

function mostrar()

{

	var edad;

	edad = txtIdEdad.value
	edad = parseFloat(edad);

	if( !(edad >=13 && edad <=17) )
	{
		alert("Usted no es adolecente");
	}
}
