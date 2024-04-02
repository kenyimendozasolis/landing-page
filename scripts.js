
function Comprobar(){

    var correcto = true;
    if(!document.getElementById("CBTYC").checked){
        alert("Debes aceptar los términos y condiciones");
        correcto = false;
    }
    else{
        if(document.getElementsByName("nombre")[0].value == '' ||
        document.getElementsByName("edad")[0].value == '' || 
        document.getElementsByName("pass")[0].value == '' || 
        document.getElementsByName("passC")[0].value == ''){
            alert("Faltan Datos");
            correcto = false;
        }
    
    else if (!document.getElementById("REmail").value.includes('@')){
        alert("Ingrese un email válido");
        correcto = false;
    }
    
    else if(document.getElementsByName("edad")[0].value <0 || document.getElementsByName("edad")[0].value >120){
        alert("Ingresa una edad válida");
        correcto = false;
    }

    else if(document.getElementsByName("pass")[0].value != document.getElementsByName("passC")[0].value){
        alert("Las contraseñas no coinciden");
        correcto = false;
    }
    }

    if (correcto) {
        window.location.href = "index.html";
      }

}

function Correcto(){

    var correcto = true;
    
    if(document.getElementById("ISEmail").value == '' ||
        document.getElementsByName("pass")[0].value == '' ){
        alert("Faltan Datos");
        correcto = false;
    }
    else if (!document.getElementById("ISEmail").value.includes('@')){
        alert("Ingrese un email válido");
        correcto = false;
    }
    
    if (correcto) {
        window.location.href = "index.html";
      }

}