 $(document).ready(function(e){
    $(".col s6 m3 l3").addClass("center-align")

    $(".col").mouseout(function(){
        $(".col").removeClass("red");
        $(".col").removeClass("green");
        $("#evalua").html("");
    });
    
    $("#op1").mouseover(function(){
        if(!"Hola"){
            $("#op1").addClass(" green");
            $("#evalua").html("!'Hola' evalua VERDADERO");
        }else{
            $("#op1").addClass(" red");
            $("#evalua").html("!'Hola' evalua FALSO");
        };

    });

    $("#op2").mouseover(function(){
        if(!""){
            $("#op2").addClass(" green");
            $("#evalua").html("!'' '' evalua VERDADERO");
        }else{
            $("#op2").addClass(" red");
            $("#evalua").html("!'' '' evalua FALSO");
        };

    });

    $("#op3").mouseover(function(){
        if(!null){
            $("#op3").addClass(" green");
            $("#evalua").html("!null evalua VERDADERO");
        }else{
            $("#op3").addClass(" red");
            $("#evalua").html("!null evalua FALSO");
        };
    });

    $("#op4").mouseover(function(){
        if(!0){
            $("#op4").addClass(" green");
            $("#evalua").html("!0 evalua VERDADERO");
        }else{
            $("#op4").addClass(" red");
            $("#evalua").html("!0 evalua FALSO");
        };

    });

    $("#op5").mouseover(function(){
        if(!-1){
            $("#op5").addClass(" green");
            $("#evalua").html("!-1 evalua VERDADERO");
        }else{
            $("#op5").addClass(" red");
            $("#evalua").html("!-1 evalua FALSO");
        };

    });

    $("#op6").mouseover(function(){
        if(!NaN){
            $("#op6").addClass(" green");
            $("#evalua").html("!NaN evalua VERDADERO");
        }else{
            $("#op6").addClass(" red");
            $("#evalua").html("!NaN evalua FALSO");
        };

    });

    $("#op7").mouseover(function(){
        if(null == undefined){
            $("#op7").addClass(" green");
            $("#evalua").html("null == undefined evalua VERDADERO");
        }else{
            $("#op7").addClass(" red");
            $("#evalua").html("null == undefined evalua FALSO");
        };

    });


    $("#op8").mouseover(function(){
        if(NaN == NaN){
            $("#op8").addClass(" green");
            $("#evalua").html("??");
        }else{
            $("#op8").addClass(" red");
            $("#evalua").html("??");
        };

    });


});