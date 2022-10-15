/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

/*window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    
});*/

//validar de formulrio agendarcita
const agendarcita = document.getElementById('agendarcita');
const especialidad = document.getElementById('especialidad');
const selectmedic = document.getElementById('selectmedic');
const fechacita = document.getElementById('fechacita');
const horacita = document.getElementById('horacita');   
agendarcita.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((especialidad.value.length > 0) && (selectmedic.value.length > 0) && (fechacita.value.length > 0) && (horacita.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})
//validar de formulrio cancelarcita
const cancelarcita = document.getElementById('cancelarcita');
const cancelspecialty = document.getElementById('cancelspecialty');
const canceltipedocument = document.getElementById('canceltipedocument');
const cancelfechacita = document.getElementById('cancelfechacita');
const cancelhoracita = document.getElementById('cancelhoracita');   
cancelarcita.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((cancelspecialty.value.length > 0) && (canceltipedocument.value.length > 0) && (cancelfechacita.value.length > 0) && (cancelhoracita.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})
//validar de formulrio historialcita
const historialcita = document.getElementById('historialcita');
const histotyfechacita = document.getElementById('histotyfechacita');

historialcita.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((histotyfechacita.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})

//validar de formulrio regConsultorio_agre
const regConsultorio_agre = document.getElementById('regConsultorio_agre');
const nombrecons = document.getElementById('nombrecons');
const ubicacons = document.getElementById('ubicacons');
const especialidad2 = document.getElementById('especialidad2');
   

regConsultorio_agre.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((nombrecons.value.length > 0) && (ubicacons.value.length > 0) && (especialidad2.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})

//validar de formulrio regConsul_modif
const regConsul_modif = document.getElementById('regConsul_modif');
const nombrecons2 = document.getElementById('nombrecons2');
const ubicacons2 = document.getElementById('ubicacons');
const especialidad3 = document.getElementById('especialidad');
   

regConsul_modif.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((nombrecons2.value.length > 0) && (ubicacons2.value.length > 0) && (especialidad3.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})

//validar de formulrio regMedico_agre
const regMedico_agre = document.getElementById('regMedico_agre');
const nombreMedico = document.getElementById('nombre');
const tipodocumentosMedico = document.getElementById('tipodocumentos');
const fechanacimientoMedico = document.getElementById('fechanacimiento');
const numerocelularMed = document.getElementById('numerocelular');
const especialidadMedico = document.getElementById('especialidad');
const usermedico = document.getElementById('usermedico');
const apellidoMedico = document.getElementById('apellido');
const edadMedico = document.getElementById('edad');
const tipogeneroMedico = document.getElementById('tipogenero');   
const emailMedico = document.getElementById('email');
const asigconsultorioMedico = document.getElementById('asigconsultorio');
const passmedico = document.getElementById('passmedico');

regMedico_agre.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((nombreMedico.value.length > 0) && (tipodocumentosMedico.value.length > 0) && (fechanacimientoMedico.value.length > 0) 
   && (numerocelularMed.value.length > 0) && (especialidadMedico.value.length > 0) && (usermedico.value.length > 0) 
   && (apellidoMedico.value.length > 0) && (edadMedico.value.length > 0) && (tipogeneroMedico.value.length > 0) 
   && (emailMedico.value.length > 0) && (asigconsultorioMedico.value.length > 0) && (passmedico.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    } 
})

//validar de formulrio regMedico_modif
const regMedico_modif = document.getElementById('regMedico_modif');
const nombreMedico2 = document.getElementById('nombre');
const tipodocumentosMedico2 = document.getElementById('tipodocumentos');
const fechanacimientoMedico2 = document.getElementById('fechanacimiento');
const numerocelularMed2 = document.getElementById('numerocelular');
const especialidadMedico2 = document.getElementById('especialidad');
const usermedico2 = document.getElementById('usermedico');
const apellidoMedico2 = document.getElementById('apellido');
const edadMedico2 = document.getElementById('edad');
const tipogeneroMedico2 = document.getElementById('tipogenero');   
const emailMedico2 = document.getElementById('email');
const asigconsultorioMedico2 = document.getElementById('asigconsultorio');
const passmedico2 = document.getElementById('passmedico2');

regMedico_modif.addEventListener('submit',function (e){
    e.preventDefault(); 
   if((nombreMedico2.value.length > 0) && (tipodocumentosMedico2.value.length > 0) && (fechanacimientoMedico2.value.length > 0) 
   && (numerocelularMed2.value.length > 0) && (especialidadMedico2.value.length > 0) && (usermedico2.value.length > 0) 
   && (apellidoMedico2.value.length > 0) && (edadMedico2.value.length > 0) && (tipogeneroMedico2.value.length > 0) 
   && (emailMedico2.value.length > 0) && (asigconsultorioMedico2.value.length > 0) && (passmedico2.value.length > 0)){
        /*agendarcita.submit();*/        
        console.log("Enviando formulario .....");
    }else{
        console.log("Error Enviando formulario .....");
    }
})







