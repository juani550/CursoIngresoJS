function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("es frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN