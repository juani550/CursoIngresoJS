/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	// reservo espacio en memoria para guardar el nombre del usuario 

    var dato;

    // guardo en la variable el texto que escribio el usuario dentro de la ventana prompt

    dato = prompt("ingrese su nombre ");

    // copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebda en la pagina 

    txtIdNombre.value = dato;

 }


/*
 function mostrar()
{
	
    var descripcion;
    var precio;
    var aumento;
    var precioaumentado;


    descripcion = prompt("ingrese descripcion");

    precio = txtIdNombre.value;
    precio = parseFloat(precio);
    
    aumento = precio * 30 / 100;

    precioaumentado = aumento + precio;
    
    
    alert("el producto " +descripcion+ "vale" +precioaumentado);

 }
 */