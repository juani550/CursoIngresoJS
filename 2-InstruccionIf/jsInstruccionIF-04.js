/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	//tomo la edad  
	
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseFloat(edad);

	if( edad < 13 )
	{
		alert("es niño");
	}
	else
	{
		if( edad >= 13 && edad < 17 )
		{
			alert("usted  es adolecente");
		}
		else
		{
			alert("usted es adulto");
		}	
	}





}	


//FIN DE LA FUNCIÓN