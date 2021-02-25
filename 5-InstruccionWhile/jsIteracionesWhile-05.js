/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
	{
		var sexo;

		sexo = prompt("ingrese sexo");

		while( (! sexo == "f" ) || (! sexo == "m" ) ){
			
		sexo = prompt("ingrese nuevamente un sexo");

		}
		alert("el sexo ingresado es correcto");
	}