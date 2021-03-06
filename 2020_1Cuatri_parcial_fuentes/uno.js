/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	//genero un bucle de 5 repeticiones debido a 5 compras
	//(tipo,precio,cantidad,marca,fabricante) validar tipo de produto
	//(uso for porque conozco la cantidad de repeticiones)

	var precio;
	var tipo;
	var cantidad;
	var marca;
	var fabricante;
	var acumuladorBarbijo = 0;
	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;
	var contadorbarbijo = 0;
	var contadoralcohol = 0;
	var contadorjabon = 0;
	var precioAlcoholbarato;
	var cantalcoholbarato;
	var fabricanteAlcoholbarato;
	var promedioCompra;
	var mayorTipo;
	var flagalcohol = 0;
	var mensajeAlcohol;
	var mensajebarbijo;
	var mensajejabon;


	for( i = 1; i <=5; i++ ){

		//aca se empieza validando para que las variables sean correctas
		tipo = prompt('ingrese tipo "barbijo" , "jabon" o "alcohol" ');
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" ){
			tipo = prompt("reingrese un tipo valido");
		}
		precio = parseFloat(prompt('ingrese precio. entre ($100-$300)'));
		while( precio < 100 || precio > 300 || (isNaN(precio))){
			precio = prompt("ingrese nuevamente un precio");
		}
		cantidad = parseInt(prompt("ingrese la cantidad. hasta 1000 unidades es valido"));
		while( !(cantidad > 0 && cantidad <= 1000) ){
			cantidad = parseInt(prompt("reingrese un cantidad correcta"));
		}
		marca = prompt("ingrese una marca");
		fabricante = prompt("ingrese un fabricante");
		}

		switch(tipo){
			case "alcohol":
				acumuladorAlcohol+=cantidad;
				contadoralcohol++;
				
				if(flagalcohol == 0 || precioalcoholbarato < precio ){
					precioalcoholbarato = precio;
					contadoralcohol = cantidad;
					fabricanteAlcoholbarato = fabricante;					
					flagalcohol = 1;
				} 
				break;
				
				case "barbijo":
				acumuladorBarbijo+=cantidad;
				contadorbarbijo++;
				break;
			
				case "jabon":
				acumuladorJabon+=cantidad;
				contadorjabon;
				break;
		}

		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon ){
			mayorTipo = "alcohol";
			promedioCompra = acumuladorAlcohol / contadoralcohol;	
		}
		else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon ){
			mayorTipo = "barbijo";
			promedioCompra = acumuladorBarbijo / contadorbarbijo;
		}
		else
		{
			mayorTipo = "jabon";
			promedioCompra = acumuladorJabon / contadorjabon;
		}
		
		if(contadoralcohol == 0){
			flagalcohol = 1 = "A-fabricante alcohol barato: "+ fabricanteAlcoholbarato + 
			"/ncantidad: " + cantalcoholbarato +
			"/nprecio: " + precioAlcoholbarato ;
		}

		mensajebarbijo = "B- tipo con mas unidades" + mayorTipo + "promedio" + promedioCompra;
		mensajejabon = "C- unidades de jabon: " + acumuladorJabon;

		alert(mensajeAlcohol + "/n" + mensajebarbijo + "/n" + mensajejabon );

}
