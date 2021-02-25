/*
function mostrar()
{
	var estacionIngresada;
	var destino;
	var estadia = 15000;
	
	var aumento1;
	var aumento2;
	
	var descuento1;
	var descuento2;


	aumento1 = estadia * 10 /100 + estadia;
	aumento2 = estadia * 20 /100 + estadia;

	descuento1 = estadia - estadia * 10 /100;
	descuento2 = estadia - estadia * 20 /100;

	
	destino = txtIdDestino.value;
	estacionIngresada = txtIdEstacion.value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("el precio es " +aumento2);
					break;
				case "Cordoba":
				case "Cataratas":
					alert("el precio es " +descuento1);
					break;
				case "Mar del plata":
					alert("el precio es " +descuento2);
						
					switch(estacionIngresada){
						case "Verano":
							switch(destino){
								case "Bariloche":
									alert("el precio es " +descuento2);
								case "Cataratas":
								case "Cordoba":
									alert("el precio es " +aumento1);
								case "Mar del plata":
									alert("el precio es " +aumento2);

									switch(estacionIngresada){
										case "Otoño":
										case "Primavera":
											alert("el precio es");

											switch(destino){
												case "Bariloche":
													alert("el precio es " +aumento1);
												case "Cataratas":
													alert("el precio es " +aumento1);
												case "Mar del plata":
													alert("el precio es " +aumento1);
												case "Cordoba":
													alert("el precio es " +estadia);
													break;

											}	
									}				
							}
					}				
			}
	}
}
//FIN DE LA FUNCIÓN
*/


function mostrar()
{
	var estacionIngresada;
	var destino;
	var estadia = 15000;
	
	var aumento1;
	var aumento2;
	
	var descuento1;
	var descuento2;


	aumento1 = estadia * 10 /100 + estadia;
	aumento2 = estadia * 20 /100 + estadia;

	descuento1 = estadia - estadia * 10 /100;
	descuento2 = estadia - estadia * 20 /100;

	
	destino = txtIdDestino.value;
	estacionIngresada = txtIdEstacion.value;

	switch(estacionIngresada){
		case "Invierno":
		
			switch(destino){
				case "Bariloche":
					alert("el precio es " +aumento2);
						break;
				case "Cordoba":
				case "Cataratas":
					alert("el precio es " +descuento1);
						break;
				case "Mar del plata":
					alert("el precio es " +descuento2);
						break;
			}
			break;				
				case "Verano":
		
					switch(destino){
						case "Bariloche":
							alert("el precio es " +descuento2);
								break;
						case "Cataratas":
						case "Cordoba":
							alert("el precio es " +aumento1);
								break;
						case "Mar del plata":
							alert("el precio es " +aumento2);
								break;
						}
						break;
							case "Otoño":
							case "Primavera":
						
								switch(destino){
									case "Bariloche":
									case "Cataratas":
									case "Mar del plata":
										alert("el precio es " +aumento1);
											break;
									case "Cordoba":
										alert("el precio es " +estadia);
											break;
									} 
									break;		
						}			

}	
													
							
									
			
	





