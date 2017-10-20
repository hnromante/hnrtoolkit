//Documento de JS, primer ejercicio: Agregar elementos (Nombre y URL) a una UL.
$(document).ready(function(e){
    var num = 0;
    $("#btn_agregar").click(function(e){
        num = num + 1;

        
        //var nom = $('#tf_nombre').text();
        var nom = document.getElementById('tf_nombre').value;
        var url = document.getElementById('tf_url').value;
        var msg = nom + ' agregado';
        console.log(nom);
        console.log(url);
        console.log(msg);
        //var lis = document.getElementById("ul_lista").getElementsByTagName("li");
        
        var listado = document.getElementById('ul_lista');
        var li = document.createElement('li');
        li.setAttribute("class","collection-item");
       
        //document.getElementsByClassName('collection-item').innerHTML = '<div><a href="'+url+'" >'+ nom +'</a><a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div>';
        li.appendChild(document.createTextNode('<div><a href="'+url+'" >'+ nom +'</a><a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div>'));
        
        listado.appendChild(li);
        alert(msg);

    });

    $("#btn_eliminar").click(function(e) {
        alert("Esta a punto de eliminar todos los registros");
    });


});