
//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".//

function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad = txtIdEdad.value;
	edad = parseFloat(edad);

	if( edad == 15 )
	{		
		alert("niña bonita");
	}
		alert("fin de la funcion");
}
//FIN DE LA FUNCIÓN


/*
alumno: Morsa Juan
ejercicio: 1 con if 
division: 1G
*/
/*
function mostrar()
{
	
	var distancia;
	var tiempo;

	var velocidad;

	diatancia = txtIdEdad.value;
	distancia = parseFloat(distancia);
	
	tiempo = txtIdEdad.value;
	tiempo = parseFloat(tiempo);

	velocidad = distancia / tiempo;


	if( velocidad == 60 )
	{		
		alert("muy lento");
	}
	else if( velocidad > 60  &&  velocidad <= 80 )
	{
		alert("lento");
	}
	else if( velocidad > 80  && velocidad <= 100 )
	{
		alert("buen ritmo");
	}
	else if( velocidad > 100  &&  velocidad <= 120 )
	{
		alert("ahi de la ley");
	}
	else if( velocidad > 120 )
	{
		alert("eso no se hace");
	}
}
*/
