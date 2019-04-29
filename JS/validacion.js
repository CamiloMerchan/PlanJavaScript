
function validarFormulario(){ 
    var datosCorrectos=true;
    var error="";
    if(document.getElementById("nombre").value==""){
        datosCorrectos=false;
        error="\n El Nombre no puede Estar Vacio";
    }

    exp1 = /^([a-z ñáéíóú]{2,60})$/;
    if(!exp1.test(document.getElementById("nombre").value)){
        datosCorrectos=false;
        error="\n  El Nombre es incorrecto, verifique que no este ingresando numeros o caracteres ilegales";
    }
    
    if(document.getElementById("telefono").value==""){
        datosCorrectos=false;
        error=" \n Debes Ingresar Un Telefono valido";
    }
  
    exp2 = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}/; 
    if(!exp2.test(document.getElementById("telefono").value)){
        datosCorrectos=false;
        error="\n  El Numero es Incorrecto";
    }
    
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!exp.test(document.getElementById("email").value)){
        datosCorrectos=false;
        error=" \n Email Invalido";
    }
    exp3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/; 
    if(!exp3.test(document.getElementById("clave").value)){
        datosCorrectos=false;
        error="\n  Verifique que la contraseña cumpla con las siguientes condiciones como:\n tener como minimo 8 caracteres\n ademas debe incluir numeros y letras mayusculas y minusculas";
    }
    
    
    if(document.getElementById("mensaje").value.length<15){
        datosCorrectos=false;
        error=" \n El Mensaje Debe Tener minimo  15 Caracteres";
    }

    // var ano = document.getElementById("ano").value;
    // var mes = document.getElementById("mes").value;
    // var dia = document.getElementById("dia").value;
    
    // valor = new Date(ano, mes, dia);
    
    // if( !isNaN(valor) ) {
    //   return false;
    // }
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
        error=" \n Por favor acepte terminos y condiciones"; 
    }
   
    opciones = document.getElementsByName("opciones");
    var seleccionado = false;
    for(var i=0; i<opciones.length; i++) {
    if(opciones[i].checked) {
    seleccionado = true;
    break;
        } 
    }

    if(!seleccionado) {
        datosCorrectos=false;
        error=" \n Seleccione si desea la Suscripcion al Boletin de Novedades"; 
    }
    
    interes = document.getElementsByName("interes");
    var seleccionado = false;
    for(var i=0; i<interes.length; i++) {
    if(interes[i].checked) {
    seleccionado = true;
    break;
        } 
    }

    if(!seleccionado) {
        datosCorrectos=false;
        error=" \n Seleccione al menos un interes de Preferencia"; 
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

function revisaNumero(elemento){
    if(elemento.value!==''){
        var datos = elemento.value;
        var exp2 = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}/; 
        if(!exp2.test(datos)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}

function revisaMensaje(elemento, min){
    if(elemento.value!==''){ 
        var datos = elemento.value;
        if(datos.length<min){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}

function revisarEmail(elemento){
    if(elemento.value!==''){
        var datos = elemento.value;
        var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!exp.test(datos)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }	
    }
}

function revisaClave(elemento){
    if(elemento.value!==''){
        var datos = elemento.value;
        var exp3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if(!exp3.test(datos)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}


