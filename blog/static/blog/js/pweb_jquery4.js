//Archivo Javascript galeria de imagenes

$(document).ready(function(e){
    var tf_num = $("#tf_num");
    var tf_fact = $("#tf_fact");
    var tf_alpha = $("#tf_alpha");
    var carta1 = $("#carta1");
    var carta2 = $("#carta2");
    var carta3 = $("#carta3");
    var display1 = $("#display1");
    var display2 = $("#display2");
    var display3 = $("#display3");

    
    function esPar(num){
        var correcto = false;
        if(num % 2 == 0){
            correcto = true;
            return correcto;
        }else
        return correcto;
    }
    //console.log(esPar(3));

    function factorial(num){
        var aux = 1;
        if(num < 0 ){
            alert("El numero deber ser mayor que 0!");

        }else{
            for (var i = 1; i <= num ; i++){
                aux = aux*i;
            }
            return aux;
        }
    }
    //console.log(factorial(5));
    
    function alpha(str){
        var str_arr = str.split('');
        for (var i = 0; i < str_arr.length; i++){
            if(str_arr[i] == 'a' || str_arr[i] == 'A'){
                str_arr[i] = '1';
            }else if(str_arr[i] == 'e' || str_arr[i] == 'E'){
                str_arr[i] = '2';
            }
            else if(str_arr[i] == 'i'|| str_arr[i] == 'I'){
                str_arr[i] = '3';
            }
            else if(str_arr[i] == 'o' || str_arr[i] == 'O'){
                str_arr[i] = '4';
            }
            else if(str_arr[i] == 'u' || str_arr[i] == 'U'){
                str_arr[i] = '5'; 
            }
        }

        return str_arr.join("");
    }
    //console.log(alpha("Hola Mundo"));
   
    tf_num.keyup(function(){

        if(esPar(Number(tf_num.val()))){
            console.log(tf_num.val() + " ES PAR");
            carta1.removeClass(" yellow")
            carta1.addClass("green");
            display1.html(tf_num.val() + " es par ");
        }else{
            console.log(tf_num.val() + " NO ES PAR");
            carta1.removeClass(" green")
            carta1.addClass("yellow");
            display1.html(tf_num.val()+ " no es par ");
        }

        if(tf_num.val() == ""){
            carta1.removeClass("yellow");
            carta1.removeClass("green");
            carta1.addClass("white");
            display1.html("es par?");
        }
        
        
    });

    tf_fact.keyup(function(){
        display2.html(factorial(tf_fact.val()));

        if(tf_fact.val() == ""){
            display2.html("!factorial")
        }

    });

    tf_alpha.keyup(function(){
        display3.html(alpha(tf_alpha.val()));
        if(tf_alpha.val() == ""){
            display3.html("l4 q52 s21");
        }
    });

    
});