//Al ingresar una edad debemos informar solo si la persona es mayor de edad //

function mostrar()
{
	//tomo la edad  
	
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseFloat(edad);
	
	if(edad >= 18 )
	{
		alert("usted es mayor de edad");	
	}
		alert("concluido");
}
//FIN DE LA FUNCIÓN


/*
alumno: Morsa Juan
ejercicio: 2 con if 
division: 1G
*/

/*
function mostrar()
{ 
	var peso;
	var altura;

	var indiceMasa;
	
	peso = txtIdEdad.value;
	peso = parseFloat(peso);
	altura = txtIdEdad.value;
	altura = parseFloat(altura);

	indiceMasa = peso / (altura * 2);
	
	if( indiceMasa == 18.5 )
	{
		alert("bajo peso");	
	}
	else
	
	if( indiceMasa >18.5 && indiceMasa < 24.9 )
	{	
		alert("Peso normal");	
	}
	else
	
	if( indiceMasa >25 && indiceMasa < 29.9 )
	{	
		alert("preobesidad");
	}
	else
	
	if( indiceMasa >30 && indiceMasa < 34.1 )
	{
		alert("obesidad 1");
	}
	else

	if( indiceMasa >35 && indiceMasa < 39.9 )
	{
		alert("obesidad 2");
	}
	else

	if( indiceMasa > 40 && indiceMasa < 49.9 )
	{
		alert("obesidad 3");
	}
	
}
*/
