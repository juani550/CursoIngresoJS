/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaraciones

	var numerouno;
	var numerodos;
	var suma;
	var numerounoparseado;
	var numerodosparseado;

	//asignar
	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	//transformar enteros
	numerounoparseado = parseInt(numerouno);
	numerodosparseado = parseInt(numerodos);

	//realizar operacion aritmetica
	suma = numerunoparseado + numerodosparseado;
	
	alert("el resultado es "+suma);



}

