

document.getElementById("enviarBtn").addEventListener("click", function() {
    let vNombre = document.getElementById("capNombre").value;
    let vAsunto = document.getElementById("capAsunto").value;
    let vEmail = document.getElementById("capEmail").value;
    let vMsj = document.getElementById("capMsj").value;

    validar(vNombre, vAsunto, vEmail, vMsj);
});

function validar(nombre, asunto, email, mensaje) {
    if (nombre.length != 0 && asunto.length != 0 && email.length != 0 && mensaje.length != 0) {
        document.getElementById("respuesta").innerHTML = `Mensaje enviado a: ${email}`;
        document.getElementById("respuesta").style.color =  "#1bb134";
    }
    else {
        document.getElementById("respuesta").innerHTML = "Complete los campos faltantes";
        document.getElementById("respuesta").style.color =  "#8a2121";
    }
return 0;
}

//--------------------[ CAMBIO  DE IDIOMA ]--------------------------------------//
document.getElementById("esp").addEventListener("click", function() {
    document.getElementById("txtTitulo").innerHTML = "CV";
    document.getElementById("txtExp").innerHTML = "Experiencia";
    document.getElementById("txtHab").innerHTML = "Habilidades";
    document.getElementById("txtPort").innerHTML = "Portafolio";
    document.getElementById("txtCont").innerHTML = "Contacto";
    document.getElementById("txtDyd").innerHTML = "Desarrollo y Diseño Web";

    document.getElementById("txtExpTitulo").innerHTML = "Experiencia";
    document.getElementById("txt1").innerHTML = "Empresa Uno";
    document.getElementById("txt1Tiempo").innerHTML = "2018-2022";
    document.getElementById("txt1Tarea").innerHTML = "Desarrollador - Diseñador Web Junior";
    document.getElementById("txt1Desemp").innerHTML = "Páginas institucionales";
    document.getElementById("txt2").innerHTML = "Empresa Dos";
    document.getElementById("txt2Tiempo").innerHTML = "2010-2018";
    document.getElementById("txt2Tarea").innerHTML = "Desarrollador Python";
    document.getElementById("txt2Desemp").innerHTML = "Sistemas de gestión comercial";
    document.getElementById("txt3").innerHTML = "Empresa Tres";
    document.getElementById("txt3Tiempo").innerHTML = "2007-2009";
    document.getElementById("txt3Tarea").innerHTML = "Desarrollador Python Junior";
    document.getElementById("txt3Desemp").innerHTML = "Sistemas de gestión comercial";
    document.getElementById("txt4").innerHTML = "Independiente";
    document.getElementById("txt4Tiempo").innerHTML = "2015-Actualidad";
    document.getElementById("txt4Tarea").innerHTML = "Desarrollador-Diseñador Junior Python & Web";
    document.getElementById("txt4Desemp").innerHTML = "Sistemas de gestión comercial - Páginas institucionales";


    document.getElementById("txtHabTitulo").innerHTML = "Habilidades";
    document.getElementById("txtPortTitulo").innerHTML = "Portafolio";
    document.getElementById("txtContTitulo").innerHTML = "Contratarme";
    document.getElementById("lblNombre").innerHTML = "Nombre:";
    document.getElementById("lblAsunto").innerHTML = "Asunto:";
    document.getElementById("lblCorreo").innerHTML = "Correo electrónico:";
    document.getElementById("lblMensaje").innerHTML = "Mensaje:";
    document.getElementById("enviarBtn").innerHTML = "Enviar";

    document.getElementById("foo-info").innerHTML = "Desarrollado con fines educativos para:";
});


document.getElementById("eng").addEventListener("click", function() {
    document.getElementById("txtTitulo").innerHTML = "Resume";
    document.getElementById("txtExp").innerHTML = "Experience";
    document.getElementById("txtHab").innerHTML = "Skills";
    document.getElementById("txtPort").innerHTML = "Portfolio";
    document.getElementById("txtCont").innerHTML = "Contact";
    document.getElementById("txtDyd").innerHTML = "Web Developer & Designer";

    document.getElementById("txtExpTitulo").innerHTML = "Experience";
    document.getElementById("txt1").innerHTML = "Company One";
    document.getElementById("txt1Tiempo").innerHTML = "2018-2022";
    document.getElementById("txt1Tarea").innerHTML = "Web Junior Developer & Designer";
    document.getElementById("txt1Desemp").innerHTML = "Landing pages";
    document.getElementById("txt2").innerHTML = "Company Two";
    document.getElementById("txt2Tiempo").innerHTML = "2010-2018";
    document.getElementById("txt2Tarea").innerHTML = "Python Developer";
    document.getElementById("txt2Desemp").innerHTML = "Comercial management systems";
    document.getElementById("txt3").innerHTML = "Company Three";
    document.getElementById("txt3Tiempo").innerHTML = "2007-2009";
    document.getElementById("txt3Tarea").innerHTML = "Python Junior Developer";
    document.getElementById("txt3Desemp").innerHTML = "Comercial management systems";
    document.getElementById("txt4").innerHTML = "Freelance";
    document.getElementById("txt4Tiempo").innerHTML = "2015-Present";
    document.getElementById("txt4Tarea").innerHTML = "Python - Web Junior Developer & Designer";
    document.getElementById("txt4Desemp").innerHTML = "Comercial management systems - Landing pages";


    document.getElementById("txtHabTitulo").innerHTML = "Skills";
    document.getElementById("txtPortTitulo").innerHTML = "Portfolio";
    
    document.getElementById("txtContTitulo").innerHTML = "Hire me";
    document.getElementById("lblNombre").innerHTML = "Name:";
    document.getElementById("lblAsunto").innerHTML = "Subject:";
    document.getElementById("lblCorreo").innerHTML = "E-mail:";
    document.getElementById("lblMensaje").innerHTML = "Massage:";
    document.getElementById("enviarBtn").innerHTML = "Send";

    document.getElementById("foo-info").innerHTML = "Developed for educational purposes for:";
});