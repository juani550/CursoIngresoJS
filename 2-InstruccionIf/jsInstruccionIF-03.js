/*
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.//

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
		
	else{
		alert("usted es menor de edad");
	}
}
	//FIN DE LA FUNCIÓN
*/

/*
alumno: Morsa Juan
ejercicio: 3 con if 
division: 1G

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/

function mostrar()
{
	
	var estadia = 15000;
	var estacion;
	var localidad;

	var aumento1;
	var aumento2;
	var aumentofinal1;
	var aumentofinal2;
	var descuento1;
	var descuento2;
	var descuentofinal1;
	var descuentofinal2;

	estacion = txtIdEdad.value;
	localidad = estadoCivil.value;

	aumento1 = (estadia * 20 / 100);
	aumentofinal1 = estadia + aumento1;

	aumento2 = (estadia * 20 / 100);
	aumentofinal2 = estadia + aumento2;
	
	descuento1 = (estadia * 10 / 100);
	descuentofinal1 = estadia - descuento1;
	
	descuento2 = (estadia * 20 / 100);
	descuentofinal2 = estadia - descuento2;


	if( estacion == "invierno" && localidad == "bariloche" ){
		alert("el precio es de" +aumentofinal1 );
	}
	else if( estacion == "invierno" &&  localidad == "cataratas" ){
		alert("el precio es de" +descuentofinal1 );
	}
	else if( estacion == "invierno"  &&  localidad == "cordoba" ){
		alert("el precio es de" +descuentofinal1 );
	}	
	else if( estacion == "invierno" &&  localidad == "mar del plata" ){
		alert("el precio es de" +descuentofinal2 );
	}
	else if	( estacion == "verano" &&  localidad == "bariloche" ){
		alert("el precio es de" +descuentofinal2 );
	}
	else if( estacion == "verano" &&  localidad == "cataratas" ){
		alert("el precio es de" +aumentofinal1 );
	}
	else if( estacion == "verano" &&  localidad == "cordoba" ){
		alert("el precio es de" +aumentofinal1 );
	}
	else if( estacion == "verano" &&  localidad == "mar del plata" ){
		alert("el precio es de" +aumentofinal2 );
	}
	else if( (estacion == "otoño" && "primavera") &&  localidad == "mar del plata" ){
		alert("el precio es de" +aumentofinal2 );
	}

}