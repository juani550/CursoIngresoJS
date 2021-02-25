/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
	//tomo la edad  
	
	var estado;
	var edad;

	estado = estadoCivil.value;

	edad = txtIdEdad.value;
	edad = parseFloat(edad);
	

	if(edad < 18 && estado != "soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}
}
//FIN DE LA FUNCIÓN