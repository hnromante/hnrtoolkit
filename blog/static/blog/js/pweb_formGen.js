//Archivo Javascript galeria de imagenes

$(document).ready(function(e){
    
    var btn_generar = $("#btn_generar");
    var tf_numero = $("#tf_numero");
    var tf_cliente = $("#tf_cliente");
    var tf_cantidad = $("#tf_cantidad");
    var cbo_documento = $("#cbo_documento");
    var cb_est = $("#cb_est");
    var tf_neto = $("#tf_neto");
    
        //Recuperamos la informacion del primer formulario REGISTRO DE VENTA
        var contProducto = 0;
        $("#btn_registrar").click(function(e) {
            var num = tf_numero.val();
            var cli = tf_cliente.val();
            var cant = tf_cantidad.val();
            var docu = cbo_documento.val();
            var est = cb_est.val();
            var neto = tf_neto.val();
            
            //Validacion de campos
            if(num.length == 0){
                alert('Digite un Numero!!');
                tf_numero.focus();
                return;
            }
    
            if(cli.length == 0){
                alert('Ingrese un Cliente');
                tf_cliente.focus();
                return;
            }
    
            if(cant.length == 0){
                alert('La cantidad debe ser mayor a 0');
                tf_cantidad.focus();
                return;
            }
            if(neto.length == 0){
                alert('Ingrese un valor neto mayor a 0');
                tf_neto.focus();
                return;
            }
            //Limpiamos la tabla de la derecha antes de agregarle mas productos (CADA VEZ QUE APRETAMOS AGREAGR)
            //TODOS LOS TR menos el primero
            $("#tbl_detalle_producto").find("tr:gt(0)").remove();
             
            for (var i = 1; i <= cant; i++) {
                
                $('#tbl_detalle_producto tr:last').after("<tr><td>Producto "+i+"</td><td><input type='number' name='tf_codigo_"+i+"' min='0' id='tf_codigo_"+i+"'></td><td><select id='cbo_tipo_"+i+"'><option value='lacteo'>Lacteo</option><option value='fruta'>Fruta</option><option value='cereal'>Cereal</option><option value='jugo'>Jugo</option></select><label>Tipo</label> </td><td><input type='number' name='tf_stock_"+i+"' id='tf_stock_"+i+"' min='0' max='9999'></td></tr>");
             
            }

            //Calculamos el total
            var total = (neto* 1.19)*cant;
           

            //Pequenio script para activar los SELECT con materialize
            $(document).ready(function() {
                $('select').material_select();
            });

            //Preguntamos que tipo de documento es:
            if (docu == 'boleta' ){
                
                //Preguntamos si es entrante o saliente
                if(est == 'entrante'){
                    $('#tbl_ventas tr:last').after("<tr style='background-color:#01DF01'><td>"+num+"</td><td>"+cli+"</td><td>"+cant+"</td><td>"+docu+"</td><td>"+neto+"</td><td>"+total+"</td><td><i class='material-icons'>arrow_back</i></td></tr>");
                }else{
                    $('#tbl_ventas tr:last').after("<tr style='background-color:#01DF01'><td>"+num+"</td><td>"+cli+"</td><td>"+cant+"</td><td>"+docu+"</td><td>"+neto+"</td><td>"+total+"</td><td><i class='material-icons'>arrow_forward</i></td></tr>");
                }
                
            }else{
                //Preguntamos si es entrante o saliente
                if(est == 'entrante'){
                    $('#tbl_ventas tr:last').after("<tr style='background-color:#DF013A'><td>"+num+"</td><td>"+cli+"</td><td>"+cant+"</td><td>"+docu+"</td><td>"+neto+"</td><td>"+total+"</td><td><i class='material-icons'>arrow_back</i></td></tr>");
                }else{
                    $('#tbl_ventas tr:last').after("<tr style='background-color:#DF013A'><td>"+num+"</td><td>"+cli+"</td><td>"+cant+"</td><td>"+docu+"</td><td>"+neto+"</td><td>"+total+"</td><td><i class='material-icons'>arrow_forward</i></td></tr>");
                    }
            }

          
            tf_numero.val("");
            tf_cliente.val("");
            tf_neto.val("");
            tf_cantidad.val("");

    
        });
        
        btn_generar.click(function(e){
            //Largo de la tabla
            var filas = $('#tbl_detalle_producto tr').length;
            filas = filas-1;
            
            
            for(var i = 1; i <= filas; i++){
                //CAPTURAMOS CODIGO
                var cod = $("#tf_codigo_"+i).val();
                //CAPTURAMOS TIPO
                var tip = $("#cbo_tipo_"+i).val();
                //CAMPTURAMOS STOCK
                var stck = $("#tf_stock_"+i).val();
                console.log (cod + " " + tip + " " + stck);
                $("#tbl_detalle_pro tr:last").after("<tr><td>"+cod+"</td><td>"+tip+"</td><td>"+stck+"</td></tr>")
            }

            tf_numero.val("");
            tf_cliente.val("");
            tf_neto.val("");
            tf_cantidad.val("");
    
        });
    
    
    
    });