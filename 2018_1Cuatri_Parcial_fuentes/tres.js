/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{

    var precioString;
    var porcentajeString;
    
    var precionumerico;
    var porcentajenumerico;
    
    var descuento;

    var preciofinal;


    precioString = prompt("Colocar el precio ");   
    porcentajeString= prompt("Colocar porcentaje de descuento");

    precionumerico = parseFloat(precioString);
    porcentajenumerico = parseFloat(porcentajeString);

    descuento = precionumerico * porcentajenumerico / 100;

    preciofinal = precionumerico - descuento

    elPrecioFinal.value = preciofinal;




}
