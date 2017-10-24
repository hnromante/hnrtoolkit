//Archivo Javascript galeria de imagenes

$(document).ready(function(e){
    var btn_agegar = $("#btn_agregar");
    var tbl_dest = $("#tbl_dest");

    //Recuperamos la informacion del primer formulario
    btn_agegar.click(function(e) {
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

        //Pasar los datos a la tabla
        tbl_dest.append("<tr><td>"+rut+"</td><td>"+nom+"</td><td>"+ape+"</td><td>"+email+"</td><td>"+carrera+"</td><td>"+promedio+"</td></tr>")
        
    });
  


});