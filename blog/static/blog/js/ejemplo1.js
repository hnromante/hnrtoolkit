//PRIMER DOCUMENTO DE JAVASCRIPT
$(document).ready(function(e){

    $("#carta").toggle();
   var nombre = prompt("Como te llamas?");
   $("#parrafo").text("La señora fortuna favorece a quien lo intenta, "+nombre+".");
   $("#carta").toggle("slow");
});
