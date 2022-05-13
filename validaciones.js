const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 7 a 14 numeros.
}

const validacionCampos = {
    nombre : false,
    apellido : false,
    usuario : false,
    contraseña : false,
    correo : false,
    telefono : false
}

const validarContrasena = () =>{
    const inputPass = document.getElementById('password');
    const inputPass2 = document.getElementById('password2');
    if(inputPass.value !== inputPass2.value){
                document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-correctp');
                document.querySelector('#grupo-password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.add('formulario-input-error-activo');
                validacionCampos.contraseña = false;
    }else{
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.contraseña = true;
    }
}

const validarform = (e) => {
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-nombre').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo-nombre i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-nombre .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.nombre = true;
            }else{
                document.getElementById('grupo-nombre').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-nombre i').classList.add('fa-times-circle');
                document.querySelector('#grupo-nombre .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-apellido').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo-apellido i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-apellido .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.apellido = true;
            }else{
                document.getElementById('grupo-apellido').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-apellido i').classList.add('fa-times-circle');
                document.querySelector('#grupo-apellido .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.add('fa-check-circle');
                document.querySelector('#grupo-usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.usuario = true;
            }else{
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-usuario i').classList.add('fa-times-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo-password').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.remove('formulario-input-error-activo');
                validarContrasena();
            }else{
                document.getElementById('grupo-password').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.add('formulario-input-error-activ');
                validarContrasena();
            }
        break; 
        case "password2":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');
                validarContrasena();
            }else{
                document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.add('formulario-input-error-activo');
                
            }
        break; 
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo-correo').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.add('fa-check-circle');
                document.querySelector('#grupo-correo i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-correo .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.correo = true;
            }else{
                document.getElementById('grupo-correo').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-correo i').classList.add('fa-times-circle');
                document.querySelector('#grupo-correo .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupo-telefono').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-telefono').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-telefono i').classList.add('fa-check-circle');
                document.querySelector('#grupo-telefono i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-telefono .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.telefono = true;
            }else{
                document.getElementById('grupo-telefono').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-telefono').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-telefono i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-telefono i').classList.add('fa-times-circle');
                document.querySelector('#grupo-telefono .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 

    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (validarform));
    input.addEventListener('blur', (validarform));
})


const terminos = document.getElementById('terminos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault;
    if(validacionCampos.nombre && validacionCampos.apellido && validacionCampos.usuario && validacionCampos.contraseña && validacionCampos.correo && validacionCampos.telefono && terminos.checked){
       
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000)
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 5000)
    }
})