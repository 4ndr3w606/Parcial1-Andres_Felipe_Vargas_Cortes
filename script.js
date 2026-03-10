let contador

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let edad = document.getElementById("edad").value
    let telefono = document.getElementById("telefono").value
    let ciudad = document.getElementById("ciudad").value




    
    let regexnombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexcorreo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    let regexedad = /^\d+$/gi
    let regextelefono = /^\d+$/gi


console.log(regExpLiteral.test(str));/

    if (nombre == "") {
        alert("Nombre obligatorio")
    } else if (regexnombre.test = nombre){
        alert("No se permiten números ni caracteres especiales")
    }

    if (email == "") {
        alert("Correo obligatorio")
    }else if(regexcorreo.test = email){
        alert("Correo no válido")
    }

    if (edad == ""){
        alert("Edad obligatorio")
        
    }else if(regexedad.test = edad) {
        alert("Valor no válido")
    }

      if (telefono == ""){
        alert("Edad obligatorio")
        
    }else if(regextelefono.test = telefono) {
        alert("Valor no válido")
    }

    




}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})