$(document).ready(function(e){
    $("#btn1").click(function(e){

        $("#kappa").hide("slow");

    });
    $("#btn2").click(function(e){

        $("#kappa").show("slow");
        
    });
    $("#btn3").click(function(e){

        $("#kappa").fadeOut("slow");
        
    });
    $("#btn4").click(function(e){

        $("#kappa").fadeIn("slow");
        
    });
    $("#btn5").click(function(e){
        
        $("#kappa").fadeTo("slow",0.2);    
                
    });

    $("#btn6").click(function(e){
        
        $("#kappa").fadeTo("slow",1);
                
    });
        

});