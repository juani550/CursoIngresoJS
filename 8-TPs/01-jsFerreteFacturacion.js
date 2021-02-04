/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el suma de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;


    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    suma = precio1 + precio2 + precio3;
    
    alert("la suma es $ "+ suma);


    
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;


    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    promedio = precio1 + precio2 + precio3;
    
    alert("el promedio es $ "+ promedio / 3);
    

}
function PrecioFinal () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var preciofinal;



    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    suma = (precio1 + precio2 + precio3);
    
    alert("El precio final con IVA es $ "+ (suma * 21 / 100) );


}