/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	var maximoResultado = 10;
	var minimoResultado = 1;

	nota = Math.round(Math.random() * (maximoResultado - minimoResultado) + minimoResultado);
	nota = parseFloat(nota);

	if (nota >= 9 && nota <= 10 ){
		alert("Se saco una nota excelente y es: " +nota);
	}
	else if (nota >= 4){
		alert("aprobó con: " +nota);
	}
	else if (nota < 4){
		alert("vamos la proxima se puede. nota: " +nota);
	}
}
//FIN DE LA FUNCIÓN
