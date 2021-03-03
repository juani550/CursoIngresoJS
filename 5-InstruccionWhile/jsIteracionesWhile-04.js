/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

	function mostrar()
	{
		var numero;
		var contador = 0;

		numero = parseInt(prompt("ingrese un numero"));

		while( (numero < 0) || (numero > 9) ){
			
		numero = parseInt(prompt("ingrese nuevamente un numero de 0 a 9"));

		}
		
		alert("el numero ingresado es correcto");

	}//FIN DE LA FUNCIÓN