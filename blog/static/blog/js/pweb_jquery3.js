$(document).ready(function(e){
        
    $("#paisaje").attr("width",400);
    $("#paisaje").attr("width",200);

    $("#btn_1").click(function(e){
        $('a').addClass("vinculo");    
    });

    $("#btn_2").click(function(e){
        $('a').removeClass("vinculo");    
    });

    $("#btn_cargarForm").click(function(e){
        var htmlForm = "<form action=''><div class='input-field col s12 l6'><input type='text' id='first_name' class='validate'><label for='first_name'>Campo 1</label></div><div class='input-field col s12 l6'><input type='text' id='last_name' class='validate'><label for='last_name'>Campo 2</label></div><div class='input-field col s12'><input type='email' id='email' class='validate'><label for='email' data-error='wrong' data-success='right'>Campo 3</label></div><div class='input-field col s12'><textarea id='textarea1' class='materialize-textarea'></textarea><label for='textarea1'>Textarea</label></div></form> ";
        $('#carga').html(htmlForm);
    });
    
    $("#btn_quitarForm").click(function(e){
        $('#carga').html("");

    });

    $("#btn_moverForm").click(function(e){
        var htmlForm = $("#carga").html();
        $('#destino').html(htmlForm);

    });

    $("#paisaje").mousemove(function(e){
        var ancho =  $("#paisaje").attr("width");
        var alto = $("#paisaje").attr("height");

        ancho++;
        alto++;

        $("#paisaje").attr("width",ancho);
        $("#paisaje").attr("height",alto);
    });

    $("#paisaje").mouseout(function(e){
        
        $("#paisaje").attr("width",400);
        $("#paisaje").attr("width",200);
    });

    $("#btn_agregar").click(function(e){
        var nombre = $("#tf_nombre").val();
        var url = $("#tf_url").val();
     

        if (nombre.length>0 && url.length>0){
        
            $("#ul_lista").prepend("<li class='collection-item'><div><a href='"+url+"'>"+ nombre +"</a><a href='#!' class='secondary-content'><i class='material-icons'>delete</i></a></div></li>");
        
        }else{
            alert("Hay campos vacios");
        }
        
    });
    

});