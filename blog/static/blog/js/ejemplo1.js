//PRIMER DOCUMENTO DE JAVASCRIPT
$(document).ready(function(e){
    $("#btn1").click(function(e){

        $("h4").css("color","#A04345");
        $("h4").css("font-family","Verdana");
        $("h4").css("text-align","center");
        

    });
    $("#btn2").click(function(e){

        $("#parrafo1").css("font-size","12px");
        $("#parrafo1").css("font-family","arial");
        $("#parrafo1").css("text-trasnform","uppercase");
        
    });
    $("#btn3").click(function(e){

        $(".vinculo").css("color","#336220");
        $(".vinculo").css("text-decoration","none");
        $(".vinculo").css("animation","alternate");
        
    });
    $("#btn4").click(function(e){
        $("#cuadro1").css("background-color","#e5dbdb");
        $("#cuadro1").css("border","#6e2728");
        $("#cuadro1").css("width","500px");
        
    });

    $("#btn5").click(function(e){

        $("h2").text('La tercera unidad es la mejor de esta asignatura');

    });

    $("#btn6").click(function(e){

        var t1 = $("#parrafo2").text();
        t1 = t1 + ' zzz ';
        $("#parrafo2").text(t1);

    });

    $("#btn7").click(function(e){

        var t1 = $("#parrafo2   ").text();
        t1 = t1.substring(0,t1.lenght/2);
        $("#parrafo2").text(t1);
        
    });

    $("#btn8").click(function(e){

        var t1 = $("#h2-1").text();
        var t2 = $("#h2-2").text();

        var aux = t1;
        t1 = t2;
        t2 = aux;
        $("#h2-1").text(t1);
        $("#h2-2").text(t2);


    });

    $("#btn9").click(function(e){
        
        $("#txt_1").attr("type","password");

    });

    $("#btn10").click(function(e){
        
        $("#txt_1").attr("placeholder","Escriba algo");
        $("#txt_1").attr("title","Escriba algo");
        $("#txt_1").attr("hint","Escriba algo");

    });

    $("#btn11").click(function(e){
        
        $("#txt_1").attr("type","date");

    });

    $("#btn12").click(function(e){
        
        $("#txt_1").attr("maxlength","5");

    });

 
});
