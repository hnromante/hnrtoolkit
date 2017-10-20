//Archivo Javascript galeria de imagenes

$(document).ready(function(e){

    $(".fotito").mouseover (function(e){
        var tit =  $(this).attr("title");
        $("#cargar_titulo").text(tit);
        var url = $(this).attr("src");
        
        var foto = "<img src='"+url+"' alt='' id='fotoAmpliada'>";
        $("#cargar_imagen").html(foto);
    });
    //Recuperamos la informacion del primer formulario
    $("#btn_agregar").click(function(e) {
        var rut = $("#tf_rut").val();
        var nom = $("#tf_nombre").val();
        var ape = $("#tf_apellido").val();
        var email = $("#tf_email").val();
        var carrera = $("#tf_carrera").val();
        var promedio = $("#tf_promedio").val();
        console.log(email);
        //Validacion de campos
        if(rut.length == 0){
            alert('Digite el Rut!');
            $("#tf_rut").focus();
            return;
        }

        if(nom.length == 0){
            alert('Digite el Nombre!');
            $("#tf_nombre").focus();
            return;
        }

        if(ape.length == 0){
            alert('Escriba el Apellido');
            $("#tf_apellido").focus();
            return;
        }
        if(email.length == 0){
            alert('Escriba el Email');
            $("#tf_email").focus();
            return;
        }

        if(carrera.length == 0){
            alert('Escriba el nombre de la carrera');
            $("#tf_carrera").focus();
            return;
        }

        //Pasar los datos al sgundo formulario

        $("#tf_rut2").val(rut);
        $("#tf_rut2").focus();
        $("#tf_nombre2").val(nom);
        $("#tf_rut2").focus();
        $("#tf_apellido2").val(ape);
        $("#tf_rut2").focus();
        $("#tf_email2").val(email);
        $("#tf_rut2").focus();
        $("#tf_carrera2").val(carrera);
        $("#tf_rut2").focus();
        $("#tf_promedio").val(promedio +"");
        $("#tf_rut2").focus();


    });
    
    $("#btn_confirmar").click(function(e){

        var rut = $("#tf_rut2").val();
        var nom = $("#tf_nombre2").val();
        var ape = $("#tf_apellido2").val();
        var email = $("#tf_email2").val();
        var carr = $("#tf_carrera2").val();
        var pro = $("#tf_promedio").val();



        $("#tf_rut2").val("");
        $("#tf_nombre2").val("");
        $("#tf_apellido2").val("");
        $("#tf_email2").val("");
        $("#tf_carrera2").val("");
        $("#tf_promedio").val("");

    });



});