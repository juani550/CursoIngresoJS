/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad
	var mensaje1 = "usted se llama ";
	var mensaje2 = "y tiene";
	var mensaje3 = "años";


	//asignar 
	nombre = txtIdNombre.value;

	edad = txtIdEdad.value;

    // una posibilidad: alert(mensaje1+nombre+mensaje2+edad+mensaje3);

    // otra:
	alert("usted se llama " +nombre+" y tiene + "+edad+" años");

	



}

