/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    
    var largonumero;
    var anchonumero;

    var perimetro;
    var alambre


    largonumero = txtIdLargo.value;
    anchonumero = txtIdAncho.value;

    largonumero = parseFloat(largonumero);
    anchonumero = parseFloat(anchonumero);

    perimetro = (largonumero*2) + (anchonumero*2);

    alambre = perimetro *3;

    alert("la cantidad de alambre a comprar es " +alambre);


}


/*
Mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular
 y se debe alambra con tres hilos de alambre.
 */

function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = parseFloat(txtIdRadio.value);

    perimetro = 2 * 3.14 * radio;

    alambre = perimetro *3;

    alert("La cantidad de alambre a comprar es " +alambre);
    

}

/*
Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
*/


function Materiales () 
{
    
    var cemento = 2;
    var cal = 3;
    
    var largo;
    var ancho;
    var area;

    var bolsasCemento;
    var bolsasCal;

    
    largo = txtIdLargo.value;
    largo = parseFloat(largo);

    ancho = txtIdAncho.value;
    ancho = parseFloat(ancho);

    area = largo * ancho;
    
    bolsasCemento = area *2;
    bolsasCal = area *3;


    alert("Para un contrapiso de " +area+ " m2 necesito comprar " +bolsasCemento+ " bolsas de cemento y " +bolsasCal+ " bolsas de cal.");

}