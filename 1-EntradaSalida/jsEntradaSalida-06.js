/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	//declaraciones

	var num1;
	var num2;
	var resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	resultado = num1 + num2;

	
	
	alert("el resultado de la suma es " + resultado);

}




