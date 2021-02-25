/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

/*
function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad = txtIdEdad.value;
	edad = parseFloat(edad);

	if(edad <13 )
	{
		alert("es un niño");
	}

	else{

	if(edad >=13 && edad <=17 )
	{
		alert("usted es adolecente");
	}

    else{
				
	if(edad >= 18 )
	{
		alert("usted es mayor");
	}

	}

	}

}
*/

function mostrar()
{
	//tomo la edad  
	
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseFloat(edad);

	if(edad < 13 )
	{
		alert("es un niño");
	}
	
	else if(edad >=13 && edad<=17 )
	{	
		alert("usted es adolecente");
	}
	
	else if(edad >= 18 )
	{
		alert("usted es mayor de edad");
	}
}
//FIN DE LA FUNCIÓN