function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
			alert("oeste");
			break;
		case "Cataratas":
			alert("norte");
			break;
		case "Mar del plata":
			alert("este");
			break;
		case "Ushuaia":
			alert("sur");
			break;		
	}
	
}//FIN DE LA FUNCIÓN