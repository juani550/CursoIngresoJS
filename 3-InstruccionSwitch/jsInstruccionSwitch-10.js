
function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;

	switch(estacionIngresada){

		case "Invierno":
			if(destino == "Bariloche"){
				alert("se viaja");	
			}
			else if(destino == "Cataratas"){
				alert("no se viaja");
			}
			else if(destino == "Mar del plata"){
				alert("no se viaja");
			}
			else if(destino == "Cordoba"){
				alert("no se viaja");
			}
			break;
		case "Verano":
			if( (destino == "Mar del plata") || (destino == "Cataratas") ){
				alert("se viaja");
			}
			else if( (destino == "Bariloche") || (destino == "Cordoba") ) {
				alert("no se viaja");
			}
			break;
		case "Otoño":
			if( (destino == "Mar del plata") || (destino == "Cataratas") ){
				alert("se viaja");
			}
			else if( (destino == "Bariloche") || (destino == "Cordoba") ) {
				alert("se viaja");	
			}
			break;
		case "Primavera":
			if( (destino == "Mar del plata") || (destino == "Cataratas") ){
				alert("se viaja");
			}
			else if(destino == "Cordoba"){
				alert("se viaja");
			}
			else if(destino == "Bariloche"){
				alert("no se viaja");
			}
			break; 
		}	
}


/*
function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("se viaja");
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("no se viaja");
						switch(estacionIngresada){
							case "Verano":
								switch(destino){
									case "Mar del plata":
									case "Cataratas":
										alert("se viaja");
									case "Bariloche":
									case "Cordoba":
										alert("no se viaja");

								}
						}
						
		}
			
			

	}


}//FIN DE LA FUNCIÓN
*/