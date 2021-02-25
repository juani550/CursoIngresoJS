/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

	function mostrar()
	{
		var numero;
		var contador = 0;

		numero = parseInt(prompt("ingrese un numero"));

		while( (numero < 0) || (numero > 9) ){
			
		numero = prompt("ingrese nuevamente un numero de 0 a 9");

		}
		
		alert("el numero ingresado es correcto");

	}//FIN DE LA FUNCIÓN



/*
do{
	numero = parseInt(prompt("ingrese numeros"));
	
	if( (numero >= 0) && (numero <= 9) ){
		alert
	}
	else{
		
	}

	seguir = prompt("quiere ingresar otro numero?");

}while ;
*/