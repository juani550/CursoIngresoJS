/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;

	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);


	resultado = dividendo % divisor;

	
	
	alert("el resto es " + resultado);

}
 /*

 function mostrar()
{

	var numeroUno;
	var numeroDos;
	
	var suma;
	var promedio;
	var modulo;


	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);

	suma = numeroUno + numeroDos;

	promedio = (numeroUno + numeroDos) /2;

	modulo = numeroUno % numeroDos;

	console.log(suma);

	console.log(promedio);

	console.log(modulo);

}
*/

