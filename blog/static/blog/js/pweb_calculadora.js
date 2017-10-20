//DOCUMENTO JAVASCRIPT pweb_calculadora.html

$(document).ready(function(e){
    $("#btn_0").click(function(e){
        var num = "0";
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        
        $("#tf_input").val(input);
    });
    $("#btn_1").click(function(e){
        var num = 1;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_2").click(function(e){
        var num = 2;
        var input = $("#tf_input").val() ;
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_3").click(function(e){
        var num = 3;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_4").click(function(e){
        var num = 4;
        var input = $("#tf_input").val() ;
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_5").click(function(e){
        var num = 5;
        var input = $("#tf_input").val() ;
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_6").click(function(e){
        var num = 6;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_7").click(function(e){
        var num = 7;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_8").click(function(e){
        var num = 8;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_9").click(function(e){
        var num = 9;
        var input = $("#tf_input").val();
        input = input.concat(""+num);
        $("#tf_input").val(input);
    });

    $("#btn_00").click(function(e){
        var num = 00;
        var input = $("#tf_input").val();
        input = input.concat("00");
        $("#tf_input").val(input);
    });
    
    $("#btn_c").click(function(e){
        input = "";
        $("#tf_input").val(input);
    });
    
    $("#btn_punto").click(function(e){

        var input = $("#tf_input").val();
        input = input.concat(".");
        //Comprobar que no se pueda ingresar mas de un punto por input
        if ($("#tf_input").val().includes(".")){
    
        }else{
            $("#tf_input").val(input);
        }
       
    });

    $("#btn_mas").click(function(e){

        var input = $("#tf_input").val();
        input = input.concat("+");
        $("#tf_input").val(input);


    });
    $("#btn_menos").click(function(e){
        
        var input = $("#tf_input").val();
        input = input.concat("-");
        $("#tf_input").val(input);
        
        
    });
    $("#btn_por").click(function(e){
        
        var input = $("#tf_input").val();
        input = input.concat("x");
        $("#tf_input").val(input);
        
        
    });
    $("#btn_div").click(function(e){
        
        var input = $("#tf_input").val();
        input = input.concat("%");
        $("#tf_input").val(input);
        
        
    });

    $("#btn_igual").click(function(e){
        
        var input = $("#tf_input").val();

        if($("#tf_input").val().includes("+")){
            input = input.split("+");
            
            

            input = Number(input[0]) + Number(input[1]);
            $("#tf_input").val(input);
        }

        if($("#tf_input").val().includes("-")){
            input = input.split("-");
            input = Number(input[0]) - Number(input[1]);
            $("#tf_input").val(input);
        }

        if($("#tf_input").val().includes("x")){
            input = input.split("x");
            input = Number(input[0]) * Number(input[1]);
            $("#tf_input").val(input);
        }

        if($("#tf_input").val().includes("%")){
            input = input.split("%");
            input = Number(input[0]) / Number(input[1]);
            $("#tf_input").val(input);
        }
        input = input.split("");
        
        input.forEach(function(char) {
            if (!isNaN(char)){
                console.log(char);
            }
        }, this);
        
        
    });
    


});