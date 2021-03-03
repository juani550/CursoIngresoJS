/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = "si";
	//iniciar variables
	flag = 0;
	respuesta='si';
	
	do {  //se usa  do  porque queremos que se entre sin condicion. no como en el while. ya que el usuario va a ingresar varios numeros
		
		numeroIngresado = parseInt( prompt("ingrese numeros") ); //se toma el numero del usuario

		if (flag == 0){ // las condiciones  if  estan porque van a ingresar mas numeros del usuario y hay que ver si son mayores o menores a otros numeros
		
			numeroMaximo =  numeroIngresado;// esto es para tener un primer valor en la var maximo
			numeroMinimo =  numeroIngresado;//tambien para tener un primer numero en minimo y despues se ve si los siguientes son mayores o menores con if

			flag = 1; //se pisa la variable  flag  debido a que queremos que este if se ejecute 1 vez e incrementando ese valor si se repite el bucle
		}
		if (numeroIngresado > numeroMaximo ){
			numeroMaximo =  numeroIngresado;//aca ya se ve si los demas numeros que vienen del usuario son MAYORES
		}
		else if (numeroIngresado < numeroMaximo ){
			numeroMinimo =  numeroIngresado;//aca se ve si los demas numeros que vienen del usuario son menores
		}

		respuesta = prompt("desea continuar?");//dependiendo de si el usuario quiere continuar se repite el bucle y se piden nuevos valores
	
	} while(respuesta == "si"); //este while esta para consultar al usuario si quiere ingresar nuevos numeros

	txtIdMaximo.value = numeroMaximo; //se muestan los ultimos valores que quedaron en esas variables ya que el lenguaje es secuencial
	txtIdMinimo.value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN