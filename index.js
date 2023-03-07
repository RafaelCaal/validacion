var formulario = document.getElementById('formulario-registro')
var nombreUsuario = document.getElementById('nombre-registro')
var emailUsuario = document.getElementById('email-registro')
var passUsuario = document.getElementById('pass-registro')
var fdnUsuario = document.getElementById('fechanac-registro')

var fechaActual = new Date();
var fechaIngresada = new Date(fdnUsuario.value);

//validaciones 
var regMayuscula = RegExp("[A-Z]");
var regMinuscula = RegExp("[a-z]");
var regNumero = RegExp("[0-9]");
var regEspacio = /\s/
var regTamUsua = /.{8,64}/gi
var regTamPass = /.{8,50}/gi
var regEmail = /([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){3}/gi
var regPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    
    if(!nombreUsuario.value.match(regMayuscula)){
        document.getElementById('error-mayuscula-usuario').innerHTML = 'El usuario debe tener al menos una mayuscula' 
    }else(
        document.getElementById('error-mayuscula-usuario').innerHTML = ' '
    )

    if(!nombreUsuario.value.match(regMinuscula)){
        document.getElementById('error-minuscula-usuario').innerHTML = 'El usuario debe tener al menos una minuscula' 
    }else(
        document.getElementById('error-minuscula-usuario').innerHTML = ' '
    )
    
    if(!nombreUsuario.value.match(regNumero)){
        document.getElementById('error-numero-usuario').innerHTML = 'El usuario debe tener al menos un numero' 
    }else(
        document.getElementById('error-numero-usuario').innerHTML = ' '
    )

    if(nombreUsuario.value.match(regEspacio)){
        document.getElementById('error-espacio-usuario').innerHTML = 'El usuario no puede tener espacios vacios' 
    }else(
        document.getElementById('error-espacio-usuario').innerHTML = ' '
    )
    
    if(!nombreUsuario.value.match(regTamUsua)){
        document.getElementById('error-tamano-usuario').innerHTML = 'El usuario debe tener minimo 8 y maximo 64 caracteres' 
    }else(
        document.getElementById('error-tamano-usuario').innerHTML = ' '
    )

    if(!emailUsuario.value.match(regEmail)){
        document.getElementById('error-email').innerHTML = 'El formato del correo electronico es invalido' 
    }else(
        document.getElementById('error-email').innerHTML = ' '
    )

    if(!passUsuario.value.match(regMayuscula)){
        document.getElementById('error-mayuscula-pass').innerHTML = 'La contrasena debe tener al menos 1 letra Mayuscula' 
    }else(
        document.getElementById('error-mayuscula-pass').innerHTML = ' '
    )

    if(!passUsuario.value.match(regMinuscula)){
        document.getElementById('error-minuscula-pass').innerHTML = 'La contrasena debe tener al menos 1 letra minuscula' 
    }else(
        document.getElementById('error-minuscula-pass').innerHTML = ' '
    )

    if(!passUsuario.value.match(regNumero)){
        document.getElementById('error-numero-pass').innerHTML = 'La contrasena debe tener al menos 1 numero' 
    }else(
        document.getElementById('error-numero-pass').innerHTML = ' '
    )

    if(!passUsuario.value.match(regTamPass)){
        document.getElementById('error-tamano-pass').innerHTML = 'La contrasena debe tener minimo 8 y maximo 50 caracteres' 
    }else(
        document.getElementById('error-tamano-pass').innerHTML = ' '
    )

    /*
    if(diferencia<18){
        document.getElementById('error-menor-fdn').innerHTML = 'Lo siento eres menor de edad y no puedes registrarte'
    }else(
        document.getElementById('error-menor-fdn').innerHTML = ' '
    )
    */

    if(fdnUsuario.value > fechaActual){
        console.log('formato invalido')
    }

    console.log(fechaActual)
    console.log(fdnUsuario.value)
    console.log(fechaIngresada)


}) 

