/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt
 y que muestre el perímetro por alert.
 */


function mostrar()
{

    var ancho;
    var largo;
    var resultado;

  largo = prompt("coloque el ancho "); ancho = prompt("coloque el largo ");

  resultado =  (ancho*2) + (largo*2);

  alert("el perimetro es " + resultado);

  

  

}
