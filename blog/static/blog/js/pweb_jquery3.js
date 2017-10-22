 $(document).ready(function(e){


    $(".col").mouseout(function(){
        $(".col").removeClass("red");
        $(".col").removeClass("green");
    });
    
    $("#op1").mouseover(function(){
        if(!"Hola"){
            $("#op1").addClass(" green");
            $("#op1").attr("title","!'Hola' evalua VERDADERO");
        }else{
            $("#op1").addClass(" red");
            $("#op1").attr("title","!'Hola' evalua FALSO");
        };

    });

    $("#op2").mouseover(function(){
        if(!""){
            $("#op2").addClass(" green");
            $("#op2").attr("title","!'' evalua VERDADERO");
        }else{
            $("#op2").addClass(" red");
            $("#op2").attr("title","!'' evalua FALSO");
        };

    });

    $("#op3").mouseover(function(){
        if(!null){
            $("#op3").addClass(" green");
            $("#op3").attr("title","!null evalua VERDADERO");
        }else{
            $("#op3").addClass(" red");
            $("#op3").attr("title","!null evalua FALSO");
        };
    });

    $("#op4").mouseover(function(){
        if(!0){
            $("#op4").addClass(" green");
            $("#op4").attr("title","!0 evalua VERDADERO");
        }else{
            $("#op4").addClass(" red");
            $("#op4").attr("title","!0 evalua FALSO");
        };

    });

    $("#op5").mouseover(function(){
        if(!-1){
            $("#op5").addClass(" green");
            $("#op5").attr("title","!-1 evalua VERDADERO");
        }else{
            $("#op5").addClass(" red");
            $("#op5").attr("title","!-1 evalua FALSO");
        };

    });

    $("#op6").mouseover(function(){
        if(!NaN){
            $("#op6").addClass(" green");
            $("#op6").attr("title","!NaN evalua VERDADERO");
        }else{
            $("#op6").addClass(" red");
            $("#op6").attr("title","!NaN evalua FALSO");
        };

    });

    $("#op7").mouseover(function(){
        if(null == undefined){
            $("#op7").addClass(" green");
            $("#op7").attr("title","!null == undefined evalua VERDADERO");
        }else{
            $("#op7").addClass(" red");
            $("#op7").attr("title","!null == undefined evalua FALSO");
        };

    });


    $("#op8").mouseover(function(){
        if(!NaN == NaN){
            $("#op8").addClass(" green");
            $("#op8").attr("title","wtf?");
        }else{
            $("#op8").addClass(" red");
            $("#op8").attr("title","wtf?");
        };

    });


});