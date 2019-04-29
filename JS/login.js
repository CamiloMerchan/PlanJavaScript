
function validar(){
    var datosCorrectos=true;
    var error="";
    if(document.getElementById("usuario").value==""){
        datosCorrectos=false;
        error="\n El Nombre no puede Estar Vacio";
    }

    exp1 = /^([a-z ñáéíóú]{2,60})$/;
    if(!exp1.test(document.getElementById("usuario").value)){
        datosCorrectos=false;
        error="\n  El Nombre es incorrecto, verifique que no este ingresando numeros o caracteres ilegales";
    }
    
    exp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/; 
    if(!exp2.test(document.getElementById("clave").value)){
        datosCorrectos=false;
        error="\n  Verifique que la contraseña tenga tener como minimo 8 caracteres\n ademas debe incluir numeros y letras mayusculas y minusculas";
    }

    opcion = document.getElementsByName("opcion");
    var seleccionado = false;
    for(var i=0; i<opcion.length; i++) {
    if(opcion[i].checked) {
    seleccionado = true;
    break;
        } 
    }

    if(!seleccionado) {
        datosCorrectos=false;
        error=" \n Marca el campo Recordar contraseña"; 
    }
    
    if(!datosCorrectos){
        alert('Hay Errores En Algunos campos del Formulario'+error);
    }
    
    return datosCorrectos;
}

function revisar(elemento){
    if(elemento.value==''){
        elemento.className='error';
    }else{
        elemento.className='input';
    }
}

function revisaNombre(elemento){
    if(elemento.value!==''){
        var datos = elemento.value;
        var exp1 = /^([a-z ñáéíóú]{2,60})$/;
        if(!exp1.test(datos)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}

function revisaClave(elemento){
    if(elemento.value!==''){
        var datos = elemento.value;
        var exp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if(!exp2.test(datos)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}


